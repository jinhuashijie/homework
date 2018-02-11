var express = require('express');
var router = express.Router();
var mysql =require('mysql');

// 在主页获取新闻时的请求 
router.get('/', function(req, res, next) {
  var newstype =req.query.newstype;
  var connection = mysql.createConnection({
  	host:"localhost",
  	port:3306,
  	user:"root",//已经被证明没有问题
  	password:"",//这个用户名，密码还有端口都可能有问题
  	database:"baidunews2"
  });
  connection.connect();//下面有三个参数，sql，
  connection.query('SELECT * FROM `news` WHERE `newstype`= ?',[newstype],function(err,rows,fields){//
                 res.json(rows);//这个是负责发回新闻页面的
                 console.log(rows);
                 //console.log(rows+'应该有东西');
  });
});

module.exports = router;
