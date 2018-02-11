var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var connection =mysql.createPool({
	host:"localhost",
	port:3306,
	user:"root",
	password:"",
	database:"baidunews2"
});

 // 后台路由页面
 
 //获取所有新闻列表 
router.get('/getnews', function(req, res, next) {//没问题
	connection.query("SELECT * FROM `news`",function(err,rows){
		res.json(rows);
	});
});

//确认更新
router.post('/update', function(req, res){// 
	var newsid =req.body.id,   
	newstype=req.body.newstype,
	newsimg=req.body.newsimg;
	newstitle=req.body.newstitle,
	newstime=req.body.newstime,
	newssrc =req.body.newssrc;
	connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id` = ?' ,[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
		console.log(rows.changedRows);		
		console.log('update的上传测试');
		res.json({code:200});//最终的问题还这个回调命令，没有就连不通ajax；
	});
});

//模态框取值

router.get('/curnews',function(req,res){
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM `news` where id = ?',[newsid],function(err,rows){
		res.json(rows);
	});
});


//delete
router.post('/delete',function(req,res){
	var newsid=req.body.newsid;       
	connection.query('delete from `news` where `news`.`id`=?',[newsid],function(err,result){
		res.json({code:200});
		console.log(result.affectedRows);
	});
});

//insert            -------------这里没有运作成功
router.post('/insert',function(req,res){
	var newstype = req.body.newstype,//post都要用body
	    newstitle=req.body.newstitle,//body,query都没用
	    newsimg = req.body.newsimg,
	    newstime = req.body.newstime,//大小写是没有问题的
	    newssrc = req.body.newssrc;  //要么就是大小写的问题，要么就是这个逗号的问题,确定是这个逗号的问题
	    connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) values (?,?,?,?,?)',[newstitle,newstype,newsimg,newstime,newssrc],function(err,result){
	    	if(!err){
	    		console.log('userjs内提交测试');
               //res.json({code:200});//res.json(result);//没有回调可以提交数据却不返回刷新
               res.json(result);
               console.log(result.insertId);
               console.log('userjs内提交测试100');
               }else{console.log('userjs内提交测试2');}//这个终于打印出来了
	    });//修改成功了，但是没有自动刷新，模态框也没哟隐藏
	});


module.exports = router;
































