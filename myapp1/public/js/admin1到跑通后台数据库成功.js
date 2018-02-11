//打开后台页面的时候发送请求，刷新新闻列表
$(document).ready(function(){
	var $newsTable = $('#newstable tbody');
	refreshNews();

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

