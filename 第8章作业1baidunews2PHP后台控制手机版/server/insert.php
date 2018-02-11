<?php
header("Content-type:application/json;charset=utf-8");
//$link =mysqli_connect('localhost','root','','baidunews2',3306);
$link =mysqli_connect('localhost','root','','baidunews2',3306);
mysqli_query($link,"SET NAMES utf8");
    	
//require_once('db.php');
if($link){
	//插入
	//
	$newstitle = @$_POST['newstitle'];
	$newstype = @$_POST['newstype'];
	$newsimg = @$_POST['newsimg'];
	$newstime = @$_POST['newstime'];
	$newssrc = @$_POST['newssrc'];

	$sql="INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')" ;
	    $result = mysqli_query($link,$sql);
         $abc = array(
         	        'success'=>'ok',
         );
    	echo json_encode($abc);//这个js里打印就会报错，为什么？应该不是格式代打问题
    	//print_r json_encode($abc);
}
//mysqli_close($link);

?>