<?php
header("Content-type:application/json;charset=utf-8");
//$link =mysqli_connect('localhost','root','','baidunews2',3306);
$link =mysqli_connect('localhost','root','','baidunews2',3306);
//mysqli_query($link,"SET NAMES utf8");//应该不是它的位置的问题
    	
//require_once('db.php');
if($link){
	//修改新闻
	//
	$newstitle = @$_POST['newstitle'];//也应该不是@符号的问题
	$newstype = @$_POST['newstype'];
	$newsimg = @$_POST['newsimg'];
	$newstime = @$_POST['newstime'];
	$newssrc = @$_POST['newssrc'];
	$newsid=@$_POST['id'];//不是多了少了这个id的问题
            //跟这里大小写没有关系
	//$sql = "UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{newstype}',`newsimg`='{newsimg}',`newstime`='{$newstime}',`newssrc`='{newssrc}' where `id`={newsid}   ";//也不是这里换行的问题
	$sql = "UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' where `id`={$newsid}   ";//前面确实少了$符号，就是这个问题，可以打印可以修改了
    	//echo json_encode($abc);//问题出在这个echo多余的，但是打印虽然成功，但是修改数据没有成功
    	//print_r json_encode($abc);
    	mysqli_query($link,"SET NAMES utf8");//也不是这个位置的为题
    	$result = mysqli_query($link,$sql);
    	echo json_encode(array('success'=>$sql));
}
mysqli_close($link);//也不是这个结束语有没有的问题，没有link隐藏函数就执行不了

?>