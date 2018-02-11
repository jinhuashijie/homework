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
     } else{ 
       console.log('adminjs提交测试');
       var jsonNews = {
        newstitle:$('#newstitle').val(),
        newstype:$('#newstype').val(),
                  		//var text = obj.options[index].text; // 选中文本
                  		newsimg:$('#newsimg').val(),
                  		newstime:$('#newstime').val(),
                  		newssrc:$('#newssrc').val(),
                    };

                  //提交添加
                  $.ajax({
                  	url:'./admin/insert',
                  	type:'post',
                  	data:jsonNews,
                  	datatype:'json',
                  	success:function(data){
                  		//console.log(data);
                  		console.log('ajax内提交测试');//这里没有成功
                  		refreshNews();

                  	}
                  });
                  
                }
              });



//删除新闻的部分
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
    console.log('删除点击测试');//这个变量还是可以正常打印，为什么不隐藏确认页面呢？
    //refreshNews();
    //$("#deleteModal").modal("hide");
	if(deleteId){//这里用非的时候，找不到文件会报错,不报错也还是无法打印
    console.log('删除连接成功');
        $.ajax({//ajax为什么会连不上后台数据库？
        	url:'./admin/delete',//找不到文件为什么也不报错？
         // url:'/admin/delete',   //没有点还是一样
        	type:'post',                 //文件换成10，打印成功，但是没有删除数据，换到baidunews2可以删除数据
        	data:{newsid:deleteId},//外面加上引号没有任何作用
        	success:function(data){
            console.log('删除刷新点击ajax内部测试');
            
            $("#deleteModal").modal("hide");
        		refreshNews();//这里为什么变得可以即时刷新了？可能跟js引用的版本有关
                          //这个刷新没有成功
                        }
                      });
      }
    });


//修改新闻的部分
var updateId=null;
$newsTable.on('click','.btn-primary',function(e){
	//console.log('修改按钮点击1');//
	$("#updateModal").modal("show");//
    //$("#deleteModal").modal("show");
     updateId=$(this).parent().prevAll().eq(-1).html();//
    console.log(updateId);//这个变量是可以正常打印的
    $.ajax({
    	url:'./admin/curnews',//文件名错了也没反应，network里面会报错
        type:'get',                //network里面能找到却不能连成功，10能连接成功，还是PHP文件的问题
        datatype:'json',
        data:{newsid:updateId},
        success:function(data){
        	console.log('修改按钮点击20');//这里又没有打印成功，为什么？//前后的type数据类型不匹配的问题
        	$('#unewstitle').val(data[0].newstitle);
        	$('#unewstype').val(data[0].newstype);
        	$('#unewsimg').val(data[0].newsimg);
        	var utime = data[0].newstime.split(' ')[0];
        	$('#unewstime').val(utime);
        	$('#unewssrc').val(data[0].newssrc);
        }
      });

  });

$('#confirmUpdate').click(function(e){  
//$('#deleteModal #confirmDelete').click(function(){
  console.log('确认按钮点击1');
  // $("#updateModal").modal("hide");
  // refreshNews();
    //console.log('testcurrect');
        $.ajax({//ajax为什么会连不上后台数据库？
        	url:'./admin/update',//找不到文件这里会报错
        	type:'post',                 //文件换成10，打印失败，但是数据却被修改了，
        	data:{
        		newstitle:$('#unewstitle').val(),
        		newstype:$('#unewstype').val(),
        		newsimg:$('#unewsimg').val(),
        		newstime:$('#unewstime').val(),
        		newssrc:$('#unewssrc').val(),
        	    id:updateId,//多了这个分号，连数据都连不通了，逗号是可以的
        	  },//外面加上引号没有任何作用
           success:function(data){
        		console.log('确认之后ajax内测试');//打印成功，却不能修改数据---------现在是修改成功数据，却不能联通
        		$("#updateModal").modal("hide");
        		refreshNews();//这里为什么变得可以即时刷新了？可能跟js引用的版本有关
        	}
        });
        
      });

function refreshNews(){
  console.log('adminjs内ajax前面输出到页面test');
	//empty table;
	$newsTable.empty();
  $.ajax({
    	type:'get',//虽然换个文件是跑成功了了，但是为什么不是源文件？
    	url:'./admin/getnews',//可以发现这里的语法错写，把get删掉反而数据库都连不上了
    	datatype:'json',
    	//data:{newstype:newstype},
    	success:function(data){

    		console.log('adminjs内ajax后输出到页面test');//这里打印不出来
    		data.forEach(function(item,index,array){
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

