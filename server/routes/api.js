var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/posts');

router.get('/posts', function(req, res, next) {
  Post.find(function(err, data){
    if(err){
      res.json({'ERROR' : err});
    } else {
      res.json(data);
    }
  });

  router.post('/posts', function(req, res, next){
    console.log('testing post route - take 1');
    newPost = new Post({
      title : req.body.title,
      description : req.body.description,
      content : req.body.content
    });
    newPost.save(function(err, data){
      if(err){
        console.log('testing post route - take 2');
        res.json({'ERROR' : err});
      } else {
        console.log('testing post route - take 3');
        res.json({'SUCCESS' : data});
      }
    });
  });

});


module.exports = router;
