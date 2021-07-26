var express = require('express');
var DBcon = require('../models/dbcon.js')
var router = express.Router();

router.get('/write', function(req, res, next) {
  if (req.session.logined == undefined || req.session.logined == false) {
    res.render('alert', {msg: '로그인 후 이용해 주세요!', href: '/user/login'})
  } else {
    res.render('write', { title: 'write', session: req.session });
  }

});

router.get('/view', function(req, res, next) {
  DBcon.query("SELECT * FROM boards WHERE bid = ?",[req.query.bid], function(err, rows, fields) {

    DBcon.query("UPDATE boards SET bhit = bhit + 1 WHERE bid = ?",[req.query.bid])

    res.render('view', { title: 'view', session: req.session, title:rows[0].btitle, content: rows[0].bcontent,  });
  })
});

router.post('/write_process', function(req, res, next) {
  DBcon.query("INSERT INTO boards VALUES(DEFAULT, ?, ?, ?, DEFAULT)", [req.session.user.uid, req.body.title, req.body.content], function(err, rows, fields) {
    
    res.render('alert',{ msg: '성공적으로 등록되었습니다.', href: '/board/view?bid=' + rows.insertId});
  })
});

module.exports = router;