<?php
header("Content-type:application/json; charset=utf-8");//标明数据格式为json
$arr=array(
            'newstype'=>'百家',
            'newsimg'=>'img/2.jpg',
            'newstime'=>'2016-2-8',
            'newssrc'=>'极客学院',
            'newstitle'=>'测试动态获取的新闻标题'

);
    echo json_encode($arr);
    //把数组的数据传回到页面，前台，成功




?>