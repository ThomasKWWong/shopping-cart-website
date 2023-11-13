const express = require("express");
const cors = require ("cors");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const user = require('./mongo/user-data');
const jwt = require('jsonwebtoken');

const app = express();


//middleware
app.use(cors());
app.use(express.json());

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/registered-users')

//***routes***

//register account
app.post("/api/register", async(req, res) => {
    try{
        const encryptedPass = await bcrypt.hash(req.body.password, 10);
        await user.create({
            username: req.body.username,
            email: req.body.email,
            password: encryptedPass,
        });
        return res.json({status: 'ok'});
    }
    catch(err){
        console.log(err)
        res.json({status: 'error', error: 'Account already exists'})
    }
    return res.json({message: "error"})
})

//login
app.post("/api/login", async(req, res) => {
    //check for acc under email
    let isUserValid = await user.findOne({
        $or: [
            {username: req.body.emailOrUsername},
            {email: req.body.emailOrUsername}
        ]
    })
    if(!isUserValid) {
        return res.json({status: "error", user: false})
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, isUserValid.password);

    //if password matches
    if(isPasswordValid){
        //token authentication
        const token = jwt.sign({
            username: user.username,
            email: user.email,
            userid: user.userid,
        }, 'secret123')
        return res.json({status: 'ok', user: token})
    }


    return res.json({message: "error", user: false})
})

//continuous listening
app.listen(5000, () => {
    console.log("Server started at port 5000")
})