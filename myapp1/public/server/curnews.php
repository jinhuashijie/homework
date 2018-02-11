<?php
header("Content-type:application/json;charset=utf-8");
$link =mysqli_connect('localhost','root','','baidunews2',3306);

if($link){
	$newsid=$_GET['newsid'];//这里应该是get。果然是这个问题；

	//mysqli_query($link,"set names utf8");//这里大小写看不出明显的区别
  mysqli_query($link,"SET NAMES utf8");
	//$sql = "delete from `news` where `news`.`id` ={$newsid} ";
	$sql = "select * FROM `news` WHERE `id` ={$newsid} ";//这里大小写看不出明显的区别
    
	$result =mysqli_query($link,$sql);

	$senddata =array();
    
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


	//mysqli_query($link,$sql);;//没有连接成功，也不是他的问题
	echo json_encode($senddata);//没有连接成功，不是有他没他的问题
	//echo json_encode(array('连接测试'=>'ok'));

}
   // mysqli_close();//括号里有没有东西，也没什么区别，只有PHP报错
    //mysqli_close($link);//没有连接成功，也不是他的问题
//最终的问题，
?>