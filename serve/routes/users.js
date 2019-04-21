var express = require('express');
var router = express.Router();
var db=require('../db/mysql.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.send('登录接口');


});
router.get('/queryuser', function(req, res, next) {
  // res.send('respond with a resource');
  // res.send('登录接口');
  let {user}=req.query;
  console.log(user);

});

module.exports = router;
