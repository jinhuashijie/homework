$(".pages").find("li:eq(2)").click(function(){
   	    $(".page1").addClass("pagebl");
   	    $(".page1").removeClass("pageno");
	    $(".page2").addClass("pageno");
	    $(".page2").removeClass("pagebl");
	    $(".page3").addClass("pageno");
	    $(".page3").removeClass("pagebl");

   });
    $(".pages").find("li:eq(3)").click(function(){
   	    $(".page2").addClass("pagebl");
   	    $(".page2").removeClass("pageno");
	    $(".page1").addClass("pageno");
	    $(".page1").removeClass("pagebl");
	    $(".page3").addClass("pageno");
	    $(".page3").removeClass("pagebl");
   });
    $(".pages").find("li:eq(4)").click(function(){
   	    $(".page3").addClass("pagebl");
   	    $(".page3").removeClass("pageno");
	    $(".page2").addClass("pageno");
	    $(".page2").removeClass("pagebl");
	    $(".page1").addClass("pageno");
	    $(".page1").removeClass("pagebl");
   });
    $(".pages").find("li:eq(0)").click(function(){
   	    $(".page1").addClass("pagebl");
   	    $(".page1").removeClass("pageno");
	    $(".page2").addClass("pageno");
	    $(".page2").removeClass("pagebl");
	    $(".page3").addClass("pageno");
	    $(".page3").removeClass("pagebl");
   });
    $(".pages").find("li:eq(1)").click(function(){
   	    /*$(".page3").addClass("pagebl");
   	    $(".page3").removeClass("pageno");
	    $(".page2").addClass("pageno");
	    $(".page2").removeClass("pagebl");
	    $(".page1").addClass("pageno");
	    $(".page1").removeClass("pagebl");*/
	    var m=$("#gotoval").val();
	    console.log(m);
   });