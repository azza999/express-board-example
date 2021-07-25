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

router.get('/logout_process', function(req, res, next) {
  req.session.user = null
  req.session.logined = false
  res.render('alert', { msg: '', href: '/' })
});

router.post('/login_process', async function(req, res, next) {

  DBcon.query("SELECT * FROM users WHERE uid = ? AND upassword = ?",[req.body.id, req.body.password], function(err, rows, fields) {
    if (rows.length > 0) {
      req.session.user = {
        uid: rows[0].uid,
        uname: rows[0].uname
      }

      req.session.logined = true
      res.render('alert', { msg: '로그인 성공!', href: '/' })
    } else {
      req.session.logined = false
      res.render('alert', { msg: '로그인 실패!', href: '/user/login'})
    }
  })

});

router.post('/register_process', function(req, res, next) {
  DBcon.query("SELECT * FROM users WHERE uid = ?",req.body.id, function(err, rows, fields) {
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
    console.log(err,rows,fields)
    if (rows.length > 0) {
      res.send("false")
    } else {
      res.send("true")
    }
  })
})


module.exports = router;
