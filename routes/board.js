var express = require('express');
var router = express.Router();

router.get('/write', function(req, res, next) {
  res.render('write', { title: 'write', session: req.session });
});

router.get('/view', function(req, res, next) {
  res.render('view', { title: 'view', session: req.session });
});

router.get('/write_process', function(req, res, next) {
  
});

module.exports = router;
