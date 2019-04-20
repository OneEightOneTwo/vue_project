var express = require('express');
var router = express.Router();
var db=require('../db/mysql.js');

router.get('/queryAll', function(req, res, next) {
  // res.send('respond with a resource');
  // res.send('登录接口');
  db('SELECT * FROM cartlist',null,(data)=>{
    res.send(data);
  })
});

module.exports = router;