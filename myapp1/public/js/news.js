$(document).ready(function(){
	//动态添加新闻成功
	//refreshNews("newstypetest");
	refreshNews("精选");//全盘出问题居然因为这里少了个精选，但是控制后台依旧有问题
	//refreshNews('图片');
	//refreshNews();

	$('nav a').click(function(e){//为什么无法分类输出？
		//e.preventDefalut();
		e.preventDefault();
		//preventDefault()
		var type =$(this).text();//这里不应该是文本，而应该是值
		//var type =$(this).val();//还是要用text，不能是值，但是控制后台又出问题了，为什么
		//                             肯定跟PHP有关系，可以继续输入，却不能输出
		refreshNews(type);
	})

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
	console.log('news.jsajax前刷新测试');
	$.ajax({
		//url:'./server/getnews.php',
		//url:'./server/getnews.php',
		//url:"/new",
		url:"/news",//有没有这个点输出没有任何变化
		type:'get',
		datatype:'json',
		data:{newstype:type},
		success:function(data){//不但这里没有输出来，连前面的都有问题了
			console.log(data);
			console.log('news.jsajax后页面刷新测试');//这里是能打印的，肯定联通了
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