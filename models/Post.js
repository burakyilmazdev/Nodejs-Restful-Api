const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    userId:Number,
    title: String,
    body:String
});

module.exports = mongoose.model('Posts', PostSchema); 