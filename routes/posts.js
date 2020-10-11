const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET ALL POSTS
router.get('/', async (req, res) => {
    try{
        const post = await Post.find();
        res.json(post);
    }catch(err){
        res.json({message :err });

    }
});

//SUBMIT POST
router.post('/',async (req,res) => {
    const post = new Post({
        userId : req.body.userId,
        title : req.body.title,
        body : req.body.body
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message : err});
    }
});

//GET SPECIFIC POST BY USERID
router.get('/:id', async (req,res) => {
    try{
        const post = await Post.find({userId : req.params.id});
        res.json(post);

    }catch(err){
        res.json({message : err});
    }
});


//DELETE POST
router.delete('/:id', async (req,res) => {
    try{
        const deletedPost = await Post.deleteOne({userId : req.params.id});
        res.json(deletedPost);
    }catch(err){
        res.json({message : err});
    }
});


//UPDATE POST BY PATCH
router.patch('/:id', async (req,res) => {
    try{
        const updatedPostbyPatch = await Post.updateOne(
            {userId : req.params.id},
            {$set : { title : req.body.title} }
            );
        res.json(updatedPost);

    }catch(err){
        res.json({message : err});
    }
});


//UPDATE POST BY PUT
router.put('/:id', async (req,res) => {
    try{
        const updatedPostbyPut = await Post.updateOne(
            {userId : req.params.id},
            {$set : {userId : req.params.id,
                title : req.body.title,
                body : req.body.body
            }}
        );
        res.json(updatedPostbyPut);
 
    }catch(err){
        res.json(err);
    }
});

module.exports = router; 