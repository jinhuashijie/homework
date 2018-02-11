<?php
    header("Content-type:application/json;charset=utf-8");//文件编码出问题导致数组传不过去
   //$conn=mysqli_connect("localhost","root","","ajaxtest");
    $link =mysqli_connect('localhost','root','','baidunews',3306);
    if($link){                     //root是用户名，后面的空是密码
    	//执行成功的过程
    	if($_GET['newstype']){
    		$newstype=$_GET['newstype']; 
    		$sql="SELECT*FROM `news`" WHERE `newstype`='${newtype}';

    	mysqli_query($link,"SET NAMES utf8");/**/
    	$result=mysqli_query($link,$sql);
    	$senddata=array();
    	while($row=mysqli_fetch_assoc($result)){
             array_push($senddata, array(
             	                          'id'=>$row['id'],
             	                          'newstype'=>$row['newstype'],
             	                          'newstitle'=>$row['newstitle'],//这里才是向网页传递的
             	                          'newsimg'=>$row['newsimg'],
             	                          'newstime'=>$row['newstime'],
             	                          'newssrc'=>$row['newssrc'],
             ));
    	};
    	echo json_encode($senddata);
        //var_dump( json_encode(array('链接信息'=>'链接失败')));
    }else{
        mysqli_query($link,"SET NAMES utf8");/**/
        $result=mysqli_query($link,$sql);
        $senddata=array();
        while($row=mysqli_fetch_assoc($result)){
             array_push($senddata, array(
                                          'id'=>$row['id'],
                                          'newstype'=>$row['newstype'],
                                          'newstitle'=>$row['newstitle'],//这里才是向网页传递的
                                          'newsimg'=>$row['newsimg'],
                                          'newstime'=>$row['newstime'],
                                          'newssrc'=>$row['newssrc'],
             ));
        };
        echo json_encode($senddata);
    }
    	}
    	 else{
        echo json_encode(array('链接信息'=>'链接失败'));
    }
    mysqli_close($link);
    //echo json_encode($arr);
?>