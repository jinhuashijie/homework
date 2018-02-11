<?php
header("Content-type:application/json; charset=UTF8");//标明数据格式为json
                               //地址 用户  密码   文件名   端口
    $link =mysqli_connect('localhost','root','','baidunews2',3306);//用来链接后台数据库
    //$mysqli = mysqli_connect('localhost', 'root', '', 'test', 3306);
    
    if(!$link){
    	echo json_encode(array('链接信息'=>'链接失败'));
    } else{
    	//执行成功的过程
    	//
    	$sql = 'select * from news';//选择来自news这张表的数据
    	mysqli_query($link,"SET NAMES utF8");
    	$result = mysqli_query($link,$sql);//最后的结果，在$link 这个文件里 找出$sql这张表里的值
    	$senddata = array();
    	while($row = mysqli_fetch_assoc($result)){
             array_push($senddata, array(
             	                     'id'=>$row['id'],//这个是数据库的值返回到js页面
             	                     'newstype'=>$row['newstype'],
             	                     'newstitle'=>$row['newstitle'],
             	                     'newsimg'=>$row['newsimg'],
             	                     'newstime'=>$row['newstime'],
             	                     'newssrc'=>$row['newssrc'],
             ));
    	}
    	echo json_encode($senddata);
    	//echo json_encode(array('链接信息'=>'链接成功'));
    };//跑后台数据的时候不能有输出$link,就是这一句echo json_encode($link); 有一个echo就跑不通
   // echo json_encode($link);
   mysqli_close($link);

/*$arr=array(
            'newstype'=>'百家',
            'newsimg'=>'img/2.jpg',
            'newstime'=>'2016-2-8',
            'newssrc'=>'极客学院',
            'newstitle'=>'测试动态获取的新闻标题'

);*/
    //echo json_encode($arr);
   





?>