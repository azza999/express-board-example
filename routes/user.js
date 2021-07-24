var express = require('express');
var DBcon = require('../models/dbcon.js')
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login', session: req.session });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register', session: req.session });
});

router.post('/logout_process', function(req, res, next) {

});

router.post('/login_process', async function(req, res, next) {
  console.log(req.body.id)
  console.log(req.body.password)

  res.render('empty.ejs')
});

router.post('/register_process', function(req, res, next) {
  DBcon.query("SELECT * FROM users WHERE uid = ?",req.body.id, function(err, rows, fields) {
    console.log(arguments)
    if (rows.length > 0) {
      res.render('alert', {msg: '이미 가입된 아이디 입니다.', href: '/register'})
    } else {
      DBcon.query("INSERT INTO users VALUES(?,?,?,DEFAULT)", [req.body.id, req.body.name, req.body.password], function(err, rows, fields) {
        res.render('alert',{msg: '회원가입 성공!', href: '/'})
      })
    }

  })
});

router.post('/check_id', function(req, res, next) {
  DBcon.query("SELECT * FROM users WHERE uid = ?", [req.body.id], function(err, rows, fields) {
    console.log(err)
    if (rows.length > 0) {
      res.send("false")
    } else {
      res.send("true")
    }
  },function(data) {
    console.log(data,'asd')
  })
})


module.exports = router;
