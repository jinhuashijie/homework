                  index部分
/*//     网络模板部分
var mysql = require('mysql');  
  
var connection = mysql.createConnection({  
    host : 'localhost',  
    port : 3306,  
    database : 'node',  
    user : 'root',  
    password : 'root'  
}); */ 
  
/*connection.connect(function(err) {  
    if(err) {  
        console.log("连接失败");  
    }else{  
        console.log("连接成功");  
    }  
});  
  
connection.end(function(err) {  //这个完全找不到
    if(err) {  
        console.log("关闭连接失败");  
    }else{  
        console.log("关闭连接成功");  
    }  
}); */ 
//var mysql=require('mysql');  //加载mysql的模块

/*var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'baidunews2',//这个测试连接成功
    port:'3306'

})*/
//这个查询方法为什么不能用呢？
/*connection.connect(function(err){
    if(err){
        console.log('query-'+err);
        return;
    }

    console.log('conection connect succedd');
})*/


//查询方法
/*connection.query('select * from news',function(err,rs,fields){
    if(err){
        console.log('insert err',err.message);
        return;
    }

    console.log('insert success'+rs[0].uname);
    console.log(fields);
});*/
























                  user部分

























//模态框取值，怎么被删掉了
// router.get('/curnews',function(req,res){
// 	var newsid = req.query.newsid;
// 	connection.query('SELECT * FROM `news` where id = ?',[newsid],function(err,rows){
// 		res.json(rows);
// 	});
// });



//删除列表项-----删除是失败的
// router.post('/delete',function(req,res){
// 	var newsid=req.body.newsid;                //这里到底带不带点
// 	connection.query('delete from `news` where `news`.`id`=?',[newsid],function(err,result){
//         console.log(result.affectedRows);
// 	})
// })

//insert---------修改之后提交也是失败的，连js确认隐藏模态框都失败了
// router.post('insert',function(req,res){
// 	var newstype = req.body.newstype,//post都要用body
// 	    newstitle=req.body.newstitle,
// 	    newsimg = req.body.newsimg,
// 	    newstime = req.body.newstime,
// 	    newssrc = req.body.newssrc;
// 	    connection.query('(`insert into `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`,) values (?,?,?,?,?)',[newstitle,newsimg,newstime,newssrc],function(err,result){
//                if(!err){
//                	console.log(result.insertId);
//                }
// 	    })
// })

                  module.exports = router;