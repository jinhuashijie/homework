$(document).ready(function(){
	//动态添加新闻成功
	refreshNews();
	
	

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
		url:'./server/getnewsok.php',
		type:'get',
		success:function(data){
			console.log(data);
			console.log('test');
			/*var $list = $("<li></li>").addClass('new-list').prependTo($lists);
			var $newsImg=$('<div></div>').addClass('newsimg').appendTo($list);
			var $img=$('<img/>').attr('src',data.newsimg).appendTo($newsImg);
			var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
			var $h1 = $('<h1></h1>').html(data.newstitle).appendTo($newsContent);
			var $p = $('<p></p>').appendTo($newsContent);
			var $newsTime = $('<span></span>').addClass('newstime').html(data.newstime).appendTo($p);
			var $newSrc = $('<span></span>').addClass('newssrc').html(data.newssrc).appendTo($p);*/
		}
	});
           

}


/*function refreshNews(){
	        var $lists = $('article ul');
	    $lists.empty();
	    //测试ajax返回php的后台数据成功
	    $.ajax({
		url:'./server/getnews.php',
		type:'get',
		success:function(data){
			console.log(data);
			var $list = $("<li></li>").addClass('new-list').prependTo($lists);
			var $newsImg=$('<div></div>').addClass('newsimg').appendTo($list);
			var $img=$('<img/>').attr('src','img/2.jpg').appendTo($newsImg);
			var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
			var $h1 = $('<h1></h1>').html('新闻标题占位符').appendTo($newsContent);
			var $p = $('<p></p>').appendTo($newsContent);
			var $newsTime = $('<span></span>').addClass('newstime').html('新闻时间占位符').appendTo($p);
			var $newSrc = $('<span></span>').addClass('newssrc').html('新闻来源占位符').appendTo($p);
		}
	});
           

}*/