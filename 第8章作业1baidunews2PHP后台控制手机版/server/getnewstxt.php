<?php
header("Content-type:application/json; charset=UTF8");//�������ݸ�ʽΪjson
                               //��ַ �û�  ����   �ļ���   �˿�
    $link =mysqli_connect('localhost','root','','baidunews2',3306);//�������Ӻ�̨���ݿ�
    //$mysqli = mysqli_connect('localhost', 'root', '', 'test', 3306);
    
    if(!$link){//1
    	echo json_encode(array('������Ϣ'=>'����ʧ��'));
    }//2
     else{
    	//ִ�гɹ��Ĺ���
    	//
    	$sql = 'select * from news';//ѡ������news���ű������
    	mysqli_query($link,"SET NAMES utF8");
    	$result = mysqli_query($link,$sql);//���Ľ������$link ����ļ��� �ҳ�$sql���ű����ֵ
    	$senddata = array();
    	while($row = mysqli_fetch_assoc($result)){
             array_push($senddata, array(
             	                     'id'=>$row['id'],//��������ݿ��ֵ���ص�jsҳ��
             	                     'newstype'=>$row['newstype'],
             	                     'newstitle'=>$row['newstitle'],
             	                     'newsimg'=>$row['newsimg'],
             	                     'newstime'=>$row['newstime'],
             	                     'newssrc'=>$row['newssrc'],
             ));
    	}
    	echo json_encode($senddata);
    	//echo json_encode(array('������Ϣ'=>'���ӳɹ�'));
    };//�ܺ�̨���ݵ�ʱ���������$link,������һ��echo json_encode($link); ��һ��echo���ܲ�ͨ
   // echo json_encode($link);
   mysqli_close($link);

/*$arr=array(
            'newstype'=>'�ټ�',
            'newsimg'=>'img/2.jpg',
            'newstime'=>'2016-2-8',
            'newssrc'=>'����ѧԺ',
            'newstitle'=>'���Զ�̬��ȡ�����ű���'

);*/
    //echo json_encode($arr);
   





?>