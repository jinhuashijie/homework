//打开后台页面的时候发送请求，刷新新闻列表
$(document).ready(function(){
	var $newsTable = $('#newstable tbody');
	refreshNews();

    $('#btnsubmit').click(function(e){
    	e.preventDefault();
    	//输入判断
    	if($('#newstitle').val()===""||$('#newsimg').val()===""||$('#newssrc').val()===""){
                    if($('#newstitle').val()===""){
                    	$('#newstitle').parent().addClass('has-error');
                    } else{
                    	$('#newstitle').parent().removeClass('has-error');
                    }
                    if($('#newsimg').val()===""){
                    	$('#newsimg').parent().addClass('has-error');
                    } else{
                    	$('#newsimg').parent().removeClass('has-error');
                    }
                    
                    if($('#newssrc').val()===""){
                    	$('#newssrc').parent().addClass('has-error');
                    } else{
                    	$('#newssrc').parent().removeClass('has-error');
                    }
    	} else{ console.log('test123');
    		var jsonNews = {
                  		newstitle:$('#newstitle').val(),
                  		newstype:$('#newstype').val(),
                  		newsimg:$('#newsimg').val(),
                  		newstime:$('#newstime').val(),
                  		newssrc:$('#newssrc').val(),
                  };

                  //提交添加
                  $.ajax({
                  	url:'./server/insert.php',
                  	type:'post',
                  	data:jsonNews,
                  	datatype:'json',
                  	success:function(data){
                  		console.log(data);
                  		console.log('testabc');
                  		refreshNews();
                  	}
                  });
    	}
    });




    var deleteId=null;
$newsTable.on('click','.btn-danger',function(e){
	console.log('click');//这个是没有运作成功的，因为class名字前面忘了加点
	$("#deleteModal").modal("show");//js文件引入需要两个版本，顺序错了也会报错
    //$("#deleteModal").modal("show");
     deleteId=$(this).parent().prevAll().eq(-1).html();//这个变量不能不加上
    console.log(deleteId);//这个变量是可以正常打印的

});
  
$('#confirmDelete').click(function(e){  
//$('#deleteModal #confirmDelete').click(function(){
    console.log('testdelete');
	if(deleteId){//这里用非的时候，找不到文件会报错,不报错也还是无法打印
        $.ajax({//ajax为什么会连不上后台数据库？
        	url:'./server/delete.php',//找不到文件为什么也不报错？
        	type:'post',                 //文件换成10，打印成功，但是没有删除数据，换到baidunews2可以删除数据
        	data:{newsid:deleteId},//外面加上引号没有任何作用
        	success:function(data){
        		console.log('删除成功');
        		$("#deleteModal").modal("hide");
        		refreshNews();//这里为什么变得可以即时刷新了？可能跟js引用的版本有关
        	}
        });
	}
});
















	function refreshNews(){
	//empty table;
	$newsTable.empty();
    $.ajax({
    	type:'get',
    	url:'./server/getnews.php',
    	datatype:'json',
    	success:function(data){
    		data.forEach(function(item,index,array){
                   /*var $tdid=$('<td>').html(item.id);
                   var $tdtype=$('<td>').html(item.newstype);
                   var $tdtitle=$('<td>').html(item.newstitle);
                   var $tdimg = $('<td>').html(item.newsimg);
                   var $tdsrc =$('<td>').html(item.newssrc);
                   var $tdtime =$('<td>').html(item.newstime);
                   var $tdctrl = $('<td>');
                   var $btnupdate =$('<button>').addClass('btn btn-primary btn-xs').htm('修改');
                   var $btndelete =$('<button>').addClass('btn btn-danger btn-xs').html('删除');
                   $tdctrl.append($btnupdate,$btndelete);
                   var $tRow=$('<tr>');
                   $tRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdtime,$tdsrc);
                   $newsTable.append($tRow);*/
                   var $tdid=$('<td>').html(item.id);
            	var $tdtype = $('<td>').html(item.newstype);
            	var $tdtitle=$('<td>').html(item.newstitle);
            	var $tdimg=$('<td>').html(item.newsimg);
            	var $tdsrc=$('<td>').html(item.newssrc);
            	var $tdtime=$('<td>').html(item.newstime);
            	var $tdctrl=$('<td>');
            	var $btnupdate=$("<button>").addClass('btn btn-primary btn-xs hxs').html('修改');
            	var $btndelete=$("<button>").addClass('btn btn-danger btn-xs').html('删除');
            	$tdctrl.append($btnupdate,$btndelete);
            	var $tRow=$('<tr>');
            	$tRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdctrl);
                $newsTable.append($tRow);
    		});
            console.log(data);
            console.log('test数据库输出页面');
    	}
    });

    }
})

