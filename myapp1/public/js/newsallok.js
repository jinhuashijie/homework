$(document).ready(function(){
	//动态添加新闻成功
	refreshNews('精选');//全盘出问题居然因为这里少了个精选
	
	

            /*var $lists = $('article ul');
            var $list = $("<li></li>").addClass('new-list').prependTo($lists);
			var $newsImg=$('<div></div>').addClass('newsimg').appendTo($list);
			var $img=$('<img/>').attr('src','img/2.jpg').appendTo($newsImg);
			var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
			var $h1 = $('<h1></h1>').html('新闻标题占位符').appendTo($newsContent);
			var $p = $('<p></p>').appendTo($newsContent);
			var $newsTime = $('<span></span>').addClass('newstime').html('新闻时间占位符').appendTo($p);
			var $newSrc = $('<span></span>').addClass('newssrc').html('新闻来源占位符').appendTo($p);*/
});

function refreshNews(type){
	    var $lists = $('article ul');
	    $lists.empty();
	    $.ajax({
		url:'./server/getnews.php',
		type:'get',
		datatype:'json',
		data:{newstype:type},
		success:function(data){//不但这里没有输出来，连前面的都有问题了
			console.log(data);
			console.log('test');//这里是能打印的，肯定联通了
            data.forEach(function(item,index,array){
            var $list = $("<li></li>").addClass('new-list').prependTo($lists);
			var $newsImg=$('<div></div>').addClass('newsimg').appendTo($list);
			var $img=$('<img/>').attr('src',item.newsimg).appendTo($newsImg);
			var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
			var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
			var $p = $('<p></p>').appendTo($newsContent);
			var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
			var $newSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
                  }) ;
		}
	});
}