<?php
    header("Content-type:application/json;charset=utf-8");
    $link =mysqli_connect('localhost','root','','baidunews2',3306);
    //require_once('db.php');
   
    if($link){
    	//修改新闻                      
    	$newstitle=$_POST['newstitle'];//这个数据库的title值获取到的是页面输入框里的值
    	$newstype = $_POST['newstype'];
    	$newsimg = $_POST['newsimg'];
    	$newstime = $_POST['newstime'];
    	$newssrc = $_POST['newssrc'];
        $newsid=$_POST['id'];

    	$sql = "UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `id`={$newsid}";

    	
        mysqli_query($link,"SET NAMES utf8");

    	$result=mysqli_query($link,$sql);

    	echo json_encode(array('success'=>$sql));
    }  
    mysqli_close($link);

?>