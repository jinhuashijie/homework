<?php
    header("Content-type:application/json;charset=utf-8");
    $link =mysqli_connect('localhost','root','','baidunews',3306);
    if($link){
    	//$newsid=$_GET['newsid'];
    	$sql='SELECT*FROM news';
    	mysqli_query($link,"SET NAMES utf8");
    	$result=mysqli_query($link,$sql);
    	$senddata=array();
    	while($row = mysqli_fetch_assoc($result)){
    		array_push($senddata,array(
    			               'id'=>$row['id'],
    			               'newstype'=>$row['newstype'],
    			               'newstitle'=>$row['newstitle'],
    			               'newsimg'=>$row['newsimg'],
                                'newstime'=>$row['newstime'],
    			               'newssrc'=>$row['newssrc'],
    		));
    	}
    	echo json_encode($senddata);
    }

        mysqli_close($link);
?>