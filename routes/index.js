var express = require('express');
var DBcon = require('../models/dbcon.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  DBcon.query("SELECT * FROM boards b, users u WHERE b.uid = u.uid", [], function(err, rows, fields) {
    res.render('index', { title: 'Express-board', session: req.session, boards: rows  });
  })

});

module.exports = router;
