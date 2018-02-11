//提供一个公共的方法，给别人调用
//不止一个公共方法，要很多个，然后进行调用*---需要进行组合了
//1:增加和移除class 最多
//
$(document).ready(function(){
	var strKey = "strKey"; 
    var storage = window.sessionStorage; 

            if(storage.getItem(strKey)!=null){ 
                $(".bdbody").css("background",storage.getItem(strKey));
            }
var grand = (function(){
    var parent = {
    	son1:function(){
    		$(".headskin1").removeClass("hi");
       	    $(".headskin1").addClass("vi");
    	},
    	son2:function(){
    		$(".headskin2").removeClass("hi");
        	$(".headskin2").addClass("vi");
    	},
    	son202:function(){
			$(".headskin2").removeClass("vi");
			$(".headskin2").addClass("hi");
    	},
    	son3:function(){
            $(".skinfoot").removeClass("hi");
        	$(".skinfoot").addClass("vi");
    	},
    	son4:function(){
  			$(".headsample").removeClass("hi");
        	$(".headsample").addClass("vi mar1");
    	},
    	son5:function(){
    		$(".headskin").removeClass("head02");
            $(".headskin").addClass("head01");
    	},
    	son6:function(){
            $(".headskin2b").removeClass("hi");
			$(".headskin2b").addClass("vi");
    	},
    	son606:function(){
    		$(".headskin2b").removeClass("vi");
			$(".headskin2b").addClass("hi");
    	},
    	son7:function(){
    		$(".headskin2a").removeClass("hi");
			$(".headskin2a").addClass("vi");
    	},
    	son707:function(){
 			$(".headskin2a").removeClass("vi");
			$(".headskin2a").addClass("hi");
    	},
    	son8:function(){
    		$(".headsample").removeClass("mar1");
			$(".headsample").addClass("mar2");
    	},
    	son9:function(){
    		$(".headskin3").removeClass("hi");
			$(".headskin3").addClass("vi");
    	},
    	son909:function(){
    		$(".headskin3").removeClass("vi");
			$(".headskin3").addClass("hi");
    	},
    	son10:function(){
    		$(".skinfoot").removeClass("hi");
            $(".skinfoot").addClass("vi");
    	},
    	son10010:function(){
    		$(".skinfoot").removeClass("vi");
            $(".skinfoot").addClass("hi");
    	},
    	son11:function(){
    		$(".headsample").removeClass("mar2");
			$(".headsample").addClass("mar1");
    	},
    	son11011:function(){
    		$(".headsample").removeClass("mar1");
			$(".headsample").addClass("mar2");
    	},
    	son12:function(){
    		$(".headskin3head").removeClass("hi");
			$(".headskin3head").addClass("vi");
    	},
    	son12012:function(){
    		$(".headskin3head").removeClass("vi");
			$(".headskin3head").addClass("hi");
    	},
    	son13:function(){
    		$(".headskin").removeClass("headskinhei2");
			$(".headskin").addClass("headskinhei1");
    	},
    	son13013:function(){
    		$(".headskin").removeClass("headskinhei1");
			$(".headskin").addClass("headskinhei2");
    	},
    	son14:function(){
    		$(".autoskin").removeClass("hi");
			$(".autoskin").addClass("vi");
    	},
    	son14014:function(){
    		$(".autoskin").removeClass("vi");
			$(".autoskin").addClass("hi");
    	},
    	son15:function(){
    		$(".headskin1-1").removeClass("bgc2");
			$(".headskin1-1").addClass("bgc1");
    	},
    	son15015:function(){
    		$(".headskin1-1").removeClass("bgc1");
			$(".headskin1-1").addClass("bgc2");
    	},
    	son16:function(){
    		$(".headskin1-2").removeClass("bgc1");
			$(".headskin1-2").addClass("bgc2");
    	},    	
    	son16016:function(){
    		$(".headskin1-2").removeClass("bgc2");
			$(".headskin1-2").addClass("bgc1");
    	},
    	son17:function(){
    		$(".headskin1-3").removeClass("bgc1");
			$(".headskin1-3").addClass("bgc2");
    	},
    	son17017:function(){
    		$(".headskin1-3").removeClass("bgc2");
			$(".headskin1-3").addClass("bgc1");
    	},
    	son18:function(){
    		$(".headskin1-4").removeClass("bgc1");
			$(".headskin1-4").addClass("bgc2");
    	},
    	son18018:function(){
    		$(".headskin1-4").removeClass("bgc2");
			$(".headskin1-4").addClass("bgc1");
    	},
    	son19:function(){
    		$(".headskin1-5").removeClass("bgc1");
			$(".headskin1-5").addClass("bgc2");
    	},
    	son19019:function(){
    		$(".headskin1-5").removeClass("bgc2");
			$(".headskin1-5").addClass("bgc1");
    	},
    	son20:function(){
    		$(".headskin1-6").removeClass("bgc1");
			$(".headskin1-6").addClass("bgc2");
    	},
    	son20020:function(){
    		$(".headskin1-6").removeClass("bgc2");
			$(".headskin1-6").addClass("bgc1");
    	},
    	son21:function(){
    		$(".headskin1-7").removeClass("bgc1");
			$(".headskin1-7").addClass("bgc2");
    	},
    	son21021:function(){
    		$(".headskin1-7").removeClass("bgc2");
			$(".headskin1-7").addClass("bgc1");
    	},
    	son22:function(){
    		$(".headskin1-8").removeClass("bgc1");
			$(".headskin1-8").addClass("bgc2");
    	},
    	son22022:function(){
    		$(".headskin1-8").removeClass("bgc2");
			$(".headskin1-8").addClass("bgc1");
    	},
    	son23:function(){
    		$(".headskin1-9").removeClass("bgc1");
			$(".headskin1-9").addClass("bgc2");
    	},
    	son23023:function(){
    		$(".headskin1-9").removeClass("bgc2");
			$(".headskin1-9").addClass("bgc1");
    	},
    	son24:function(){
			$(".headskin1-10").removeClass("bgc1");
			$(".headskin1-10").addClass("bgc2");
    	},
    	son24024:function(){
			$(".headskin1-10").removeClass("bgc2");
			$(".headskin1-10").addClass("bgc1");
    	},
    	son30:function(){
    		$(".headskin3a").removeClass("hi");
			$(".headskin3a").addClass("vi");
    	},
    	son30030:function(){
    		$(".headskin3a").removeClass("vi");
			$(".headskin3a").addClass("hi");
    	},
    	son40:function(){
    		$(".bdbody").css("background-size","100% 100%");
    	},
    	son41:function(){
    		$(".headsample").removeClass("bdskin1-1");
    	},
    	son42:function(){
    		$(".headsample").removeClass("bdskin1-2");
    	},
    	son43:function(){
    		$(".headsample").removeClass("bdskin1-3");
    	},
    	son44:function(){
    		$(".headsample").removeClass("bdskin1-4");
    	},
    	son45:function(){
    		$(".headsample").removeClass("bdskin1-5");
    	},
    	son46:function(){
    		$(".headsample").removeClass("bdskin1-6");
    	},
    	son47:function(){
    		$(".headsample").removeClass("bdskin1-7");
    	},
    	son48:function(){
    		$(".headsample").removeClass("bdskin1-8");
    	},
    	son49:function(){
    		$(".headsample").removeClass("bdskin1-9");
    	},
    	son410:function(){
    		$(".headsample").removeClass("bdskin1-10");
    	},
    	son411:function(){
    		$(".headsample").removeClass("bdskin1-11");
    	},
    	son412:function(){
    		$(".headsample").removeClass("bdskin1-12");
    	},
    	son35:function(){
    		var strValue =$(".bdbody").css("background");
	        if (storage) { 
	            storage.setItem(strKey, strValue);   
	        } 
    	},
    	son50:function(){
    		$(".headsample").css("background","");
    	},
    	son:function(){

    	},
    	son:function(){

    	},
    	son:function(){

    	},
    	son:function(){
   	},
    }
    return parent;
})();
//单例区间1开始
$(".skin").click(function(){
    grand.son1();
    grand.son2();
    grand.son3();
    grand.son4();
    grand.son5();
});
$(".skinfoot1").click(function(){
	if($(".headskin2").hasClass("vi")){
		grand.son202();
		grand.son6();
    }else  if($(".headskin2b").hasClass("vi")){
        grand.son7();    
		grand.son606(); 	
    }  else  if($(".headskin2a").hasClass("vi")){
        grand.son707();
        grand.son2();     
			
    } 
});
$(".skinfoot2").click(function(){
		grand.son2();
		grand.son707();
		grand.son606();
});
$(".skinfoot3").click(function(){
        grand.son7();
		grand.son202();//   grand.son();
		grand.son606();
});
	
$(".skinfoot4").click(function(){
        grand.son7();
		grand.son2();
		grand.son6();
});/**/
$(".skinfoot8").click(function(){
	if($(".headskin2").hasClass("vi")){
		grand.son202();
		grand.son707();

    }else  if($(".headskin2a").hasClass("vi")){
        grand.son6();
		grand.son707();
    }  else  if($(".headskin2b").hasClass("vi")){
        grand.son606();
		grand.son2();
		grand.son8();	
    } 
});        
$(".headskin1-1").click(function(){//grand.son();
    	grand.son909();    
		grand.son2();
		grand.son10();	
        grand.son11();    
		grand.son12012();	
		grand.son13();	
		grand.son14014();	
		grand.son15();	
		grand.son16();
		grand.son17();	
		grand.son18();
		grand.son19();
		grand.son20();
		grand.son21();	
		grand.son22();	
		grand.son23();	
		grand.son24();
});        
$(".headskin1-2").click(function(){
        grand.son606();
		grand.son707();
		grand.son202();
		grand.son9();	
		grand.son10010();	
        grand.son11011();    
		grand.son12();	
		grand.son13013();	
		grand.son14();	//grand.son();
		grand.son15015();
		grand.son16016();	
		grand.son17();
		grand.son18();
		grand.son19();
		grand.son20();
		grand.son21();
		grand.son22();
		grand.son23();
		grand.son24();
});
$(".headskin1-3").click(function(){//grand.son();
    grand.son606();
	grand.son707();
	grand.son202();
	grand.son9();
	grand.son10010();
    grand.son11011();
	grand.son12();
	grand.son13013();
	grand.son14();
	grand.son17017();
	grand.son16();
	grand.son15015();
	grand.son18();
	grand.son19();
	grand.son20();
	grand.son21();
	grand.son22();
	grand.son23();
	grand.son24();
});
$(".headskin1-4").click(function(){//grand.son();
    grand.son18018();
	grand.son16();
	grand.son17();
	grand.son15015();
	grand.son19();
	grand.son20();
	grand.son21();
	grand.son22();
	grand.son23();
	grand.son24();
});
 $(".headskin1-5").click(function(){//grand.son();
    grand.son19019();
	grand.son16();
	grand.son17();
	grand.son18();
	grand.son20();
	grand.son21();
	grand.son22();
	grand.son23();
	grand.son24();
});
$(".headskin1-6").click(function(){
    grand.son20020();
	grand.son12();
	grand.son17();
	grand.son18();
	grand.son19();
	grand.son15015();
	grand.son21();
	grand.son22();
	grand.son23();
	grand.son24();
});
$(".headskin1-7").click(function(){//grand.son();
    grand.son21021();
	grand.son16();
	grand.son17();
	grand.son18();
	grand.son19();
	grand.son20();
	grand.son15015();
	grand.son22();
	grand.son23();
	grand.son24();
});
$(".headskin1-8").click(function(){
    grand.son22022();
	grand.son16();
	grand.son17();
	grand.son18();
	grand.son19();
	grand.son20();
	grand.son21();
	grand.son15015();
	grand.son23();
	grand.son24();
});
$(".headskin1-9").click(function(){
    grand.son23023();//
	grand.son16();
	grand.son17();
	grand.son18();
	grand.son19();
	grand.son20();
	grand.son21();
	grand.son22();
	grand.son15015();
	grand.son24();
});
$(".headskin1-10").click(function(){
    grand.son24();
	grand.son16();
	grand.son17();
	grand.son18();
	grand.son19();
	grand.son20();
	grand.son21();
	grand.son22();
	grand.son23();
	grand.son15015();
});
$(".headskin3heada").click(function(){
	grand.son30030();
	grand.son9();
            
});
//单例区间1结束
$(".headskin21-10").mouseover(function(){
    $(".headsample").css("background","url(img/skin1-1.jpg) no-repeat");
});
$(".headskin21-10").mouseleave(function(){
    $(".headsample").css("background","");
});
//单例区间2开始        
$(".headskin21-10").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-1.jpg) no-repeat");
    grand.son40();    
        $(".weather a").css("color","white");
        $(".head0 div").css("color","white");
        $(".head1 a").css("color","white");
        $(".head1 div").css("color","white");
        $("#bdimg").attr("src","./img/logo2.png");
        $(".headsample").addClass("bdskin1-1");
    grand.son42();    //42
    grand.son43();     
    grand.son44();     
    grand.son45();     
    grand.son46();     
    grand.son47();     
    grand.son48();     
    grand.son49();     
    grand.son410();     
    grand.son411();     
    grand.son412();     //412
    grand.son35();    
});
$(".headskin21-20").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-2.jpg) no-repeat");
    grand.son40(); //1
        $(".headsample").css("background","url(img/skin1-2.jpg) no-repeat");
        $(".headsample").addClass("bdskin1-2");
    grand.son41();//2
    grand.son43();
    grand.son44();
    grand.son45();
    grand.son46();
    grand.son47();
    grand.son48();
    grand.son49();
    grand.son410();
    grand.son411();
    grand.son412();//13
    grand.son35();
});
$(".headskin21-30").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-3.jpg) no-repeat");
    grand.son40();
        $(".headsample").addClass("bdskin1-3");
    grand.son41();//2
    grand.son42();
    grand.son44();
    grand.son45();
    grand.son46();
    grand.son47();
    grand.son48();
    grand.son49();
    grand.son410();
    grand.son411();
    grand.son412();//13
    grand.son35();
});
$(".headskin21-40").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-4.jpg) no-repeat");
    grand.son40();
        $(".headsample").addClass("bdskin1-4");
    grand.son41();//2
    grand.son42();
    grand.son43();
    grand.son45();
    grand.son46();
    grand.son47();
    grand.son48();
    grand.son49();
    grand.son410();
    grand.son411();
    grand.son412();//13
    grand.son35(); 
});
$(".headskin21-50").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-5.jpg) no-repeat");
    grand.son40();
        $(".headsample").addClass("bdskin1-5");
    grand.son41();//2
    grand.son42();
    grand.son43();
    grand.son44();
    grand.son46();
    grand.son47();
    grand.son48();
    grand.son49();
    grand.son410();
    grand.son411();
    grand.son412();//13
    grand.son35();  
});
 $(".headskin21-60").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-6.jpg) no-repeat");
    grand.son40();
        $(".headsample").addClass("bdskin1-6");
    grand.son41();//2
    grand.son42();
    grand.son43();
    grand.son45();
    grand.son44();
    grand.son47();
    grand.son48();
    grand.son49();
    grand.son410();
    grand.son411();
    grand.son412();//13
    grand.son35();  
});
$(".headskin21-70").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-7.jpg) no-repeat");
    grand.son40();
        $(".headsample").addClass("bdskin1-7");
    grand.son41();//2
    grand.son42();
    grand.son43();
    grand.son44();
    grand.son45();
    grand.son46();
    grand.son48();
    grand.son49();
    grand.son410();
    grand.son411();
    grand.son412();//13
    grand.son35(); 
});
$(".headskin21-80").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-8.jpg) no-repeat");
    grand.son40();
        $(".headsample").addClass("bdskin1-8");
    grand.son41();//2
    grand.son42();
    grand.son43();
    grand.son44();
    grand.son45();
    grand.son46();
    grand.son47();
    grand.son49();
    grand.son410();
    grand.son411();
    grand.son412();//13
    grand.son35(); 
});
$(".headskin21-90").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-9.jpg) no-repeat");
    grand.son40();
        $(".headsample").addClass("bdskin1-9");
    grand.son41();//2
    grand.son42();
    grand.son43();
    grand.son44();
    grand.son45();
    grand.son46();
    grand.son47();
    grand.son48();
    grand.son410();
    grand.son411();
    grand.son412();//13
    grand.son35(); 
});
$(".headskin21-20").mouseover(function(){
          $(".headsample").css("background","url(img/skin1-2.jpg) no-repeat");
});
$(".headskin21-100").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-10.jpg) no-repeat");
    grand.son40();
        $(".headsample").addClass("bdskin1-10");
    grand.son41();//2
    grand.son42();
    grand.son43();
    grand.son44();
    grand.son45();
    grand.son46();
    grand.son47();
    grand.son48();
    grand.son49();
    grand.son411();
    grand.son412();//13
    grand.son35();
});
$(".headskin21-110").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-11.jpg) no-repeat");
    grand.son40();
        $(".headsample").addClass("bdskin1-11");
    grand.son41();//2
    grand.son42();
    grand.son43();
    grand.son44();
    grand.son45();
    grand.son46();
    grand.son47();
    grand.son48();
    grand.son49();
    grand.son410();
    grand.son412();//13
    grand.son35();
});
$(".headskin21-120").click(function(){
        $(".bdbody").css("background","url(img/bdskin1-12.jpg) no-repeat");
    grand.son40();
        $(".headsample").addClass("bdskin1-12");
    grand.son41();//2
    grand.son42();
    grand.son43();
    grand.son44();
    grand.son45();
    grand.son46();
    grand.son47();
    grand.son48();
    grand.son49();
    grand.son410();
    grand.son411();//13
    grand.son35();
});//单例区间2结束
//单例区间3开始
$(".headskin21-20").mouseleave(function(){
    grand.son50();//1
});
    $(".headskin21-30").mouseover(function(){
  $(".headsample").css("background","url(img/skin1-3.jpg) no-repeat");
});
    $(".headskin21-30").mouseleave(function(){
  grand.son50();//1
});
    $(".headskin21-40").mouseover(function(){
  $(".headsample").css("background","url(img/skin1-4.jpg) no-repeat");
});
    $(".headskin21-40").mouseleave(function(){
  grand.son50();
});
    $(".headskin21-50").mouseover(function(){
  $(".headsample vi mar1").css("background","url(img/skin1-5.jpg) no-repeat");
});
    $(".headskin21-50").mouseleave(function(){
  grand.son50();
});
    $(".headskin21-60").mouseover(function(){
  $(".headsample").css("background","url(img/skin1-6.jpg) no-repeat");
});
    $(".headskin21-60").mouseleave(function(){
  grand.son50();
});
    $(".headskin21-70").mouseover(function(){
  $(".headsample").css("background","url(img/skin1-7.jpg) no-repeat");
});
    $(".headskin21-70").mouseleave(function(){
  grand.son50();
});
    $(".headskin21-80").mouseover(function(){
  $(".headsample").css("background","url(img/skin1-8.jpg) no-repeat");
});
    $(".headskin21-80").mouseleave(function(){
  grand.son50();
});
    $(".headskin21-90").mouseover(function(){
  $(".headsample").css("background","url(img/skin1-9.jpg) no-repeat");
});
    $(".headskin21-90").mouseleave(function(){
  grand.son50();
});
    $(".headskin21-100").mouseover(function(){
  $(".headsample").css("background","url(img/skin1-10.jpg) no-repeat");
});
    $(".headskin21-100").mouseleave(function(){
  grand.son50();
});
    $(".headskin21-110").mouseover(function(){
  $(".headsample").css("background","url(img/skin1-11.jpg) no-repeat");
});
    $(".headskin21-110").mouseleave(function(){
  grand.son50();
});
    $(".headskin21-120").mouseover(function(){
  $(".headsample").css("background","url(img/skin1-12.jpg) no-repeat");
});
    $(".headskin21-120").mouseleave(function(){
  grand.son50();
});
      $(".headskin2a1-10").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-1.jpg) no-repeat");
});
    $(".headskin2a1-10").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-20").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-2.jpg) no-repeat");
});
    $(".headskin2a1-20").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-30").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-3.jpg) no-repeat");
});
    $(".headskin2a1-30").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-40").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-4.jpg) no-repeat");
});
    $(".headskin2a1-40").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-50").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-5.jpg) no-repeat");
});
    $(".headskin2a1-50").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-60").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-6.jpg) no-repeat");
});
    $(".headskin2a1-60").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-70").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-7.jpg) no-repeat");
});
    $(".headskin2a1-70").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-80").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-8.jpg) no-repeat");
});
    $(".headskin2a1-80").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-90").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-9.jpg) no-repeat");
});
    $(".headskin2a1-90").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-100").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-10.jpg) no-repeat");
});
    $(".headskin2a1-100").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-110").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-11.jpg) no-repeat");
});
    $(".headskin2a1-110").mouseleave(function(){
  grand.son50();
});
    $(".headskin2a1-120").mouseover(function(){
  $(".headsample").css("background","url(img/skin1a-12.jpg) no-repeat");
});
    $(".headskin2a1-120").mouseleave(function(){
  grand.son50();
});
        $(".headskin2b1-10").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-1.jpg) no-repeat");
});
    $(".headskin2b1-10").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-20").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-2.jpg) no-repeat");
});
    $(".headskin2b1-20").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-30").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-3.jpg) no-repeat");
});
    $(".headskin2b1-30").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-40").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-4.jpg) no-repeat");
});
    $(".headskin2b1-40").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-50").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-5.jpg) no-repeat");
});
    $(".headskin2b1-50").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-60").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-6.jpg) no-repeat");
});
    $(".headskin2b1-60").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-70").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-7.jpg) no-repeat");
});
    $(".headskin2b1-70").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-80").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-8.jpg) no-repeat");
});
    $(".headskin2b1-80").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-90").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-9.jpg) no-repeat");
});
    $(".headskin2b1-90").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-100").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-10.jpg) no-repeat");
});
    $(".headskin2b1-100").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-110").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-11.jpg) no-repeat");
});
    $(".headskin2b1-110").mouseleave(function(){
  grand.son50();
});
    $(".headskin2b1-120").mouseover(function(){
  $(".headsample").css("background","url(img/skin1b-12.jpg) no-repeat");
});
    $(".headskin2b1-120").mouseleave(function(){
  grand.son50();
});
     $(".headskin31-10").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-1.jpg) no-repeat");
});
    $(".headskin31-10").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-20").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-2.jpg) no-repeat");
});
    $(".headskin31-20").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-30").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-3.jpg) no-repeat");
});
    $(".headskin31-30").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-40").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-4.jpg) no-repeat");
});
    $(".headskin31-40").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-50").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-5.jpg) no-repeat");
});
    $(".headskin31-50").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-60").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-6.jpg) no-repeat");
});
    $(".headskin31-60").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-70").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-7.jpg) no-repeat");
});
    $(".headskin31-70").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-80").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-8.jpg) no-repeat");
});
    $(".headskin31-80").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-90").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-9.jpg) no-repeat");
});
    $(".headskin31-90").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-100").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-10.jpg) no-repeat");
});
    $(".headskin31-100").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-110").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-11.jpg) no-repeat");
});
    $(".headskin31-110").mouseleave(function(){
  grand.son50();
});
    $(".headskin31-120").mouseover(function(){
  $(".headsample").css("background","url(img/skin2-12.jpg) no-repeat");
});
    $(".headskin31-120").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-10").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-1.jpg) no-repeat");
});
    $(".headskin3a1-10").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-20").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-2.jpg) no-repeat");
});
    $(".headskin3a1-20").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-30").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-3.jpg) no-repeat");
});
    $(".headskin3a1-30").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-40").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-4.jpg) no-repeat");
});
    $(".headskin3a1-40").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-50").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-5.jpg) no-repeat");
});
    $(".headskin3a1-50").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-60").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-6.jpg) no-repeat");
});
    $(".headskin3a1-60").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-70").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-7.jpg) no-repeat");
});
    $(".headskin3a1-70").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-80").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-8.jpg) no-repeat");
});
    $(".headskin3a1-80").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-90").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-9.jpg) no-repeat");
});
    $(".headskin3a1-90").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-100").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-10.jpg) no-repeat");
});
    $(".headskin3a1-100").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-110").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-11.jpg) no-repeat");
});
    $(".headskin3a1-110").mouseleave(function(){
  grand.son50();
});
    $(".headskin3a1-120").mouseover(function(){
  $(".headsample").css("background","url(img/skin2a-12.jpg) no-repeat");
});
    $(".headskin3a1-120").mouseleave(function(){
  grand.son50();
});
$(".headskin3headb").click(function(){
		    $(".headskin3").removeClass("vi");
			$(".headskin3").addClass("hi");
			$(".headskin3a").removeClass("hi");
			$(".headskin3a").addClass("vi");
            
    });
    $(".headskin3heada").click(function(){
		    $(".headskin3a").removeClass("vi");
			$(".headskin3a").addClass("hi");
			$(".headskin3").removeClass("hi");
			$(".headskin3").addClass("vi");
            
    });
//单例区间3结束
//单例区间4开始
$(".headskin1-12").click(function(){//换肤清除
    grand.son50(); 
    grand.son41();//2
    grand.son42();
    grand.son43();
    grand.son44();
    grand.son45();
    grand.son46();
    grand.son47();
    grand.son48();
    grand.son49();
    grand.son410();
    grand.son411();
    grand.son412();
    $(".bdbody").css("background",""); 
        $(".weather a").css("color","black");
        $(".head0 div").css("color","black");
        $(".head1 a").css("color","black");
        $(".head1 div").css("color","black");
        $("#bdimg").attr("src","./img/logo1.png");

});
//单例区间4结束
$(".headskin1-13").click(function(){//换肤收起
        $(".headskin").addClass("head02");
        $(".headskin").removeClass("head01");
       
});

$(".mynewshead1").click(function(){
        document.documentElement.scrollTop=document.body.scrollTop=0;
        $(".mynewsbody1").removeClass("non");
        $(".mynewsbody1").addClass("blo");
        $(".mynewsbody2").removeClass("blo");
        $(".mynewsbody2").addClass("non");
        $(".mynewshead1").css("background","#B4B4B4");
        $(".mynewshead2").css("background","#F3F3F3");
});
    $(".mynewshead2").click(function(){
        document.documentElement.scrollTop=document.body.scrollTop=0;
        $(".mynewsbody2").removeClass("non");
        $(".mynewsbody2").addClass("blo");
        $(".mynewsbody1").removeClass("blo");
        $(".mynewsbody1").addClass("non");
        $(".mynewshead2").css("background","#B4B4B4");
        $(".mynewshead1").css("background","#F3F3F3");
    });
    $(".headskin21-10").mouseleave(function(){
    	$(".headsample").css("background","");
    });
    $(".headskin3 div div").mouseover(function(){
    	$(".headsample").css("background","url(img/skin2-1.jpg) no-repeat");
    });
    $(".headskin31-10").mouseleave(function(){
    	$(".headsample").css("background","");
    });







})//grand.son();
//无限下拉和返回顶部
function f1(){
    var a2 =document.documentElement.scrollTop||document.body.scrollTop;
    var a3 = document.documentElement.clientHeight;
    var a4 = document.documentElement.scrollHeight;
    var a = a4-a3-a2;
    var a5 = a4+100;
    var a6 = a4-1000;

    if (a<10) {
            document.getElementById("mynewsbody1").style.height=a5+"px";
       } else if (a>1000) {
            document.getElementById("mynewsbody1").style.height=a6+"px";
       }
    var a8 = document.getElementById("mynews").offsetTop;
    var a9 = a8-a2;
    if (a9<75) {
        document.getElementById("mynewshead").className = "mynewsheadf2";
        document.getElementById("mynewsbody1right").className = "mynewsbody1rightf2";
        document.getElementById("search").className = "searchf2";
    } else if (a9>75) {
        document.getElementById("mynewshead").className = "mynewshead";
        document.getElementById("mynewsbody1right").className = "mynewsbody1right";
        document.getElementById("search").className = "search";
    }
}/**/
function atop(){
    document.documentElement.scrollTop=document.body.scrollTop=0;
}

function bgopacity(){
    	//var m = (document.getElementById("range1").innerHTML)*1;-929
        //var d = m/10;
        //document.body.style.opacity= d;
        var x = document.getElementById("range1").value;    
        document.getElementById("range2").innerHTML = x+"%";
        //var h =parseInt(document.getElementById("myRange").value);
        var m = x*1
        var d = m/100;
        document.getElementById("bdbody").style.opacity= d;
        var m1 = m+879;
        document.getElementById("range2").style.marginLeft=m1+"px";
    }
var end = document.getElementById("headskin1");
end.addEventListener("webkitAnimationEnd", function() {
       document.getElementById("headskin1").style.marginTop="0px";
})




















































































