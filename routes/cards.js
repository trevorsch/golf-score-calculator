var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cards', function(req, res, next) {
  res.render('cards/index', { title: 'Express' });
});

router.get('/cards/new', function(req, res, next) {
  res.render('cards/new');
});

router.post('/cards', function(req, res, next) {
  res.redirect('/cards');
});

module.exports = router;
