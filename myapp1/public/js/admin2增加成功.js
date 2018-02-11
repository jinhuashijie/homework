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
    })


















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

