const mongoose = require('mongoose')

const newPost = new mongoose.Schema({
        username: {type: String, required: true, unique: true},
        title: {type: String, required: true},
        description: {type: String, required: true, unique: true},
        price: {type: Number, required: true},
        picture: {type: String}
    },
    {
        collection: 'post-data'
    }
);

const model = mongoose.model('PostData', newPost);

module.exports = model;