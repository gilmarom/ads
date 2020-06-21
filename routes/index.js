const express = require('express');
const router = express.Router();
const twitter_api = require('../utils/twitter_api');

/* GET home page. */
router.get('/', function(req, res, next) {
    
  twitter_api.getTweetByNameLocation();
  twitter_api.searchTweet();

  res.render('index', { title: 'Express', post: this.post  });
});

module.exports = router;
