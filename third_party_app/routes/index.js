var express = require('express');
var router = express.Router();

/* Show home page on 3002. This coordinates with index.pug in /views */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UC Davis Medical' });
});

module.exports = router;
