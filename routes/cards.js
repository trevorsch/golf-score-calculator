var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/cards-store');
var cardCollection = db.get('cards');

/* GET home page. */
router.get('/cards', function(req, res, next) {
  cardCollection.find({}, function(err, cards){
    res.render('cards/index', {allCards: cards});
  });
});

router.get('/cards/new', function(req, res, next) {
  res.render('cards/new');
});

router.post('/cards', function(req, res, next) {
  cardCollection.insert({ course: req.body.course_name, hole1: req.body.hole_one, hole2: req.body.hole_two, hole3: req.body.hole_three, hole4: req.body.hole_four });
  res.redirect('/cards');
});


module.exports = router;
