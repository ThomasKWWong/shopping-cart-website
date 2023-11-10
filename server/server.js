const express = require("express");
const cors = require ("cors");


const app = express();


//middleware
app.use(cors());
app.use(express.json());


//routes
app.get("/api/test", async(req, res) => {
    return res.json({message: "the test passed!"})
})

app.post("/api/post", async(req, res) => {
    return res.json({message: "post"})
})


app.listen(5000, () => {
    console.log("Server started at port 5000")
})