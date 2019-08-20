var express = require('express');
var router = express.Router();
var blogPosts = require('../data/blogPosts');

// get '/blog-posts'
router.get('/', function(req, res) {
  res.render('./blog-posts/index', { blogPosts });
});

// get a single blog-post
router.get('/:id', function(req, res) {
  var blogPost = blogPosts[req.params.id];
  res.render('./blog-posts/show', {id: req.params.id, blogPost: blogPost})
});

// post '/blog-posts'
router.post('/', function(req, res) {
  blogPosts.push({
    title: req.body.newTitle,
    body: req.body.newPost
  });
  res.redirect('/blog-posts');
});

// delete '/blog-posts/:id'
router.delete('/:id', function(req, res) {
  blogPosts.splice(req.params.id, 1);
  res.redirect('/blog-posts');
});

// put '/blog-posts/:id'
router.put('/:id', function(req, res) {
  blogPosts[req.params.id].blogPost = req.body.blogPost;
  res.redirect('/blog-posts');
})

module.exports = router;