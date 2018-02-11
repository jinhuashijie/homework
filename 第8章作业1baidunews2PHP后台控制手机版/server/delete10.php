<?php
    header("Content-type:application/json;charset=utf-8");
    $link =mysqli_connect('localhost','root','','baidunews2',3306);

    if($link){
    	$newsid=$_POST['newsid'];

    	$sql = "DELETE FROM `news` WHERE `news`.`id`= {$newsid}";
    	mysqli_query($link,$sql);
    	echo json_encode(array('删除状态'=>'成功'));
    }
    else{
        echo json_encode(array('链接信息'=>'链接失败'));
    }

    mysqli_close($link);


?>