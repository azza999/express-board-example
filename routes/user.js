var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login', session: req.session });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register', session: req.session });
});

router.get('/logout_process', function(req, res, next) {
  
});

router.get('/login_process', function(req, res, next) {
  
});

router.get('/register_process', function(req, res, next) {
  
});

module.exports = router;
