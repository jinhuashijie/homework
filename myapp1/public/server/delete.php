<?php
header("Content-type:application/json;charset=utf-8");
$link =mysqli_connect('localhost','root','','baidunews2',3306);

if($link){
	$newsid=$_POST['newsid'];

	mysqli_query($link,"set names utf8");//这里大小写看不出明显的区别
 // mysqli_query($link,"SET NAMES utf8");
	$sql = "delete from `news` where `news`.`id` ={$newsid} ";//测试之后大小写确实没区别
	//$sql = "DELETE FROM `news` WHERE `news`.`id` ={$newsid} ";//这里大小写看不出明显的区别

	mysqli_query($link,$sql);
	echo json_encode(array('连接测试'=>'ok'));

}
   // mysqli_close();//括号里有没有东西，也没什么区别，只有PHP报错
    mysqli_close($link);
//最终的问题，前面少了一个deleteId的变量，其他都是对的
?>