<?php
header("Content-type:application/json; charset=UTF8"); //标明数据格式为json
//地址 用户  密码   文件名   端口
$link = mysqli_connect('localhost', 'root', '', 'baidunews2', 3306); //用来链接后台数据库
if ($link) { //1
     if($_GET['newstype']){//3
        $newstype = $_GET['newstype'];
        $sql = "SELECT * FROM `news` WHERE `newstype`='{$newstype}' "; //选择来自news这张表的数据
        mysqli_query($link, "SET NAMES utF8");
        $result = mysqli_query($link, $sql); //最后的结果，在$link 这个文件里 找出$sql这张表里的值
        $senddata = array();
        while ($row = mysqli_fetch_assoc($result)) {//4
            array_push($senddata, array(
                                    'id' => $row['id'], //这个是数据库的值返回到js页面
                                    'newstype' => $row['newstype'], 
                                    'newstitle' => $row['newstitle'], 
                                    'newsimg' => $row['newsimg'], 
                                    'newstime' => $row['newstime'], 
                                    'newssrc' => $row['newssrc'],
                                ));
            }//4
            echo json_encode($senddata);
        }//3 
        else {//5
            $sql = 'SELECT * FROM news'; //选择来自news这张表的数据
            mysqli_query($link, "SET NAMES utF8");
            $result = mysqli_query($link, $sql); //最后的结果，在$link 这个文件里 找出$sql这张表里的值
            $senddata = array();
            while ($row = mysqli_fetch_assoc($result)) {//6
                array_push($senddata, array(
                                    'id' => $row['id'], //这个是数据库的值返回到js页面
                                    'newstype' => $row['newstype'], 
                                    'newstitle' => $row['newstitle'], 
                                    'newsimg' => $row['newsimg'], 
                                    'newstime' => $row['newstime'], 
                                    'newssrc' => $row['newssrc']
                                ));
            }//6
            echo json_encode($senddata);
        }
} //1
else {//执行成功的过程//2
	echo json_encode(array('链接信息' => '链接失败'));
   
};
mysqli_close($link);
?>