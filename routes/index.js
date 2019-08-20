var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/blog-posts');
});

router.get('/goodbye/:name', function(req, res) {
    res.send('Goodbye ' + req.params.name);
});

module.exports = router;