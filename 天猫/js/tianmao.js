$(function(){
	let favoritebottom=$('.favorite-bottom');
	let favoritebottom1=$('.favorite-bottom1');
	let sFlag=true;
	favoritebottom.hover(function(){
		favoritebottom1.addClass("favorite-bottom1");
		favoritebottom1.removeClass("favorite-bottom2");
	}).hover(function(){},function(){
		favoritebottom1.addClass("favorite-bottom2");
	})
    let headrightrightyi=$('.head-right-right-yi');
    let headrightrightyier1=$('.head-right-right-yi-er1');
    headrightrightyi.hover(function(){
   		headrightrightyier1.show()
    }).hover(function(){},function(){
   		headrightrightyier1.hide();
    })
	//shang
	let headrightrightsi=$('.head-right-right-si');
	
	//shangbu
	headrightrightsi.hover(function(){
		let headrightrightsi1=$('.head-right-right-si1');
	    headrightrightsi1.show()
	}).hover(function(){},function(){
		let headrightrightsi1=$('.head-right-right-si1');
	    headrightrightsi1.hide()
	})
	//che
	let headrightrightwu=$('.head-right-right-wu');
	headrightrightwu.hover(function(){
		let headrightrightwulis=$('.head-right-right-wu-lis');
		headrightrightwulis.show();
	}).hover(function(){},function(){
		let headrightrightwulis=$('.head-right-right-wu-lis');
		headrightrightwulis.hide();
	})
	//banner图
var tu=$('.banner-right-tu>li')
var banner=$('.main-banner');
var flag22=true
//第num个显示第i个清除可以只调用两个图便可
var num=0 
//自动轮播
var t
t=setInterval(fn,3000)
//移入清除轮播
banner.hover(function(){
	t=clearInterval(t)
})
banner.hover(function(){},function(){
	t=setInterval(fn,3000)
})
//两个下标一起更新轮播点
	$(".yuan").click(function(){
		let index=$(this).index()
		console.log($(this))
		console.log(index)
		$('.yuan').removeClass('hot');
		$(".yuan:eq("+index+")").addClass('hot');
    	$('.banner-right-tu>li').css({"z-index":0,"opacity":0});
    	$(".banner-right-tu>li:eq("+index+")").animate().css({"z-index":1,"opacity":1})
	})
		

//banner图的轮播
function fn(){
	num++
if (num==6) {
	num=0
}
	$('.yuan').removeClass('hot');
	$(".yuan:eq("+num+")").addClass('hot');
	$('.banner-right-tu>li').css({"z-index":0,"opacity":0});
	$(".banner-right-tu>li:eq("+num+")").animate().css({"z-index":1,"opacity":1})
}
//侧导航
    let lis=$('.banner-lashen>li>a');
	lis.hover(function(){
		//在里面引入banner1
		$('.banner1').css('display','none')
		$(this).next().css('display','block')
	})
	lis.hover(function(){},function(){
		$('.banner1').css('display','none')
	})
		
	//轮播图
	let img=$('.diyihang-left-yi1>img');
    let diyihanglefter=$('.diyihang-left-er');
//第num个显示第i个清除可以只调用两个图便可
   let num1=0 
//自动轮播
   let t1
   t1=setInterval(fn2,3000)
//移入清除轮播
    diyihanglefter.hover(function(){
   		t1=clearInterval(t1)
    })
    diyihanglefter.hover(function(){},function(){
    	t1=setInterval(fn2,3000)
    })

	$('.diyihang-left-er-tu').click(function(){
		let index=$(this).index()
	    $('.diyihang-left-er-tu').addClass('hot')
	    $('.diyihang-left-er-tu:eq('+index+')').removeClass('hot')
	    img.hide();
	    $(".diyihang-left-yi1>img:eq("+index+")").show()
	})
	function fn2(){
		num1++
   		if (num1==img.length){
			num1=0
		}
	 	img.hide();
	    $(".diyihang-left-yi1>img:eq("+num1+")").show()
    }
   //ce
   	
   	
	// $('.right>li').hover(function(){
	// 	let index1=$(this).index()
	// 	$('.right>li').children().children().hide()
	// 	$('.right>li:eq('+index1+')').children().children().show()
 //    })
	// $('.right>li').hover(function(){},function(){
	// 	let index1=$('.right li').index()
	// 	$('.right>li').children().children().hide()
	// }) 
	$('.right>li').hover(function(){
		let index=$(this).index()
		$('.right>li').children().children().css({'opacity':0,'transform':'translateX(0px)'});
		$('.right>li').eq(index).children().children().css({'opacity':1,'transform':'translateX(8px)'});
	}).hover(function(){},function(){
		$('.right>li').children().children().css({'opacity':0,'transform':'translateX(0px)'});
	}) 
	//固定定位
	let bigtop1=$('.bigtop')
	let bigtop2=$('.toptop-right')
	// let ch=window.position();
	let floor=$('section')
	let lis11=$('.guding-left>li');
	let num11=0;
	let arrc=[];
	let ch=$(window).innerHeight();
	floor.each(function(){
		arrc.push($(this).offset().top)
	})
	// $('.guding-left>li').click(function(){
	// 	let index=$(this).index()
	// 	$('body').animate({scrollTop:arrc[index]},'normal')
	// })
	$("ul.guding-left>li").on('click',function () {
		let index=$(this).index()
	   	$('body').animate({scrollTop:arrc[index]},'normal');
	});
	$(window).scroll(function(){
		// 变色
		let st = $(document.body).scrollTop()
		arrc.forEach(function(value,num2){
			if(ch+st>=value+110){
	        	$('.guding-left>li:eq('+num11+')').removeClass(`color${num11}`)
	        	$('.guding-left>li:eq('+num2+')').addClass(`color${num2}`)
			    num11=num2
	   		}
		})
	    // 变色结束
		let toptop=$('.toptop');
		if(st>500){
			if(sFlag){
				sFlag=false
			    console.log(1)
			    toptop.css({"top":0})
			    $(".guding-left").css({"left":"2px"});
			}
		}
		else{
			if(!sFlag){
				sFlag=true
			    toptop.css({"top":-60})
			   $(".guding-left").css({"left":"-42px"});
			}
		}
		//右侧上拉消失
		if(st>500){
			bigtop2.show()
		}
		else{
			bigtop2.hide()
		}
		
		
	})
	$('.guding-left>li').mouseenter(function(){
        let index=$(this).index();
        $(this).addClass(`color${index}`);
    }).mouseleave(function(){
        let index=$(this).index();
        $(this).removeClass(`color${index}`);
    })
	//左侧上升
		$(".bigtop").on('click',function () {
  			$('body').animate({scrollTop:'0'},500);
		});
	//右侧上升
		$('.toptop-right').on('click',function () {
  			$('body').animate({scrollTop:'0'},500);
		});
//字的上滑
	let diyihangleftsaner1=$('.diyihang-left-san-er>ul')
	let next=now=0;
	let t3= setInterval(moveyi,5000);
	function moveyi(){
    	next++;
    	if(next==diyihangleftsaner1.length){
    		next=0;
    	}
    	$('.diyihang-left-san-er>ul:eq('+next+')').css({"top":50})
    	$('.diyihang-left-san-er>ul:eq('+now+')').animate({top:-50},'normal')
    	$('.diyihang-left-san-er>ul:eq('+next+')').animate({top:0}, 'normal')
    	now=next;
    }
//字2的上滑
	let next111=now111=0;
	let t4= setInterval(function(){
		moveyi1("r")
	},3000);
	function moveyi1(r){
		// console.log($('.meilirensheng-xia-left-xia-a').index())
		next111++;
    	if(next111==3){
    		next111=0;
    	}
    	$('.meilirensheng-xia-left-xiaa:eq('+next111+')').css({"top":"32px"})
    	$('.meilirensheng-xia-left-xiaa:eq('+now111+')').animate({top:-32}, 'normal')
    	$('.meilirensheng-xia-left-xiaa:eq('+next111+')').animate({top:0},'normal');
    	now111=next111;
    }
    let cd2=$('.cd2')
    let next112=now112=0;
	let t5= setInterval(function(){
		moveyi2()
	},3000);
	function moveyi2(r){
		// console.log($('.meilirensheng-xia-left-xia-a').index())
		next112++;
    	if(next112==3){
    		next112=0;
    	}
    	cd2.eq(next112).css({"top":"32px"})
    	cd2.eq(now112).animate({top:-32}, 'normal')
    	cd2.eq(next112).animate({top:0},'normal');
    	now112=next112;
    }
    let jj2=$('.jj2')
    let next113=now113=0;
	let t6= setInterval(function(){
		moveyi3()
	},3000);
	function moveyi3(r){
		// console.log($('.meilirensheng-xia-left-xia-a').index())
		next113++;
    	if(next113==3){
    		next113=0;
    	}
    	jj2.eq(next113).css({"top":"32px"})
    	jj2.eq(now113).animate({top:-32}, 'normal')
    	jj2.eq(next113).animate({top:0},'normal');
    	now113=next113;
    }
    let ac4=$('.ac4')
    let next114=now114=0;
	let t7= setInterval(function(){
		moveyi4()
	},3000);
	function moveyi4(r){
		// console.log($('.meilirensheng-xia-left-xia-a').index())
		next114++;
    	if(next114==3){
    		next114=0;
    	}
    	ac4.eq(next114).css({"top":"32px"})
    	ac4.eq(now114).animate({top:-32}, 'normal')
    	ac4.eq(next114).animate({top:0},'normal');
    	now114=next114;
    }
    let hw5=$('.hw5')
    let next115=now115=0;
	let t8= setInterval(function(){
		moveyi5()
	},3000);
	function moveyi5(r){
		// console.log($('.meilirensheng-xia-left-xia-a').index())
		next115++;
    	if(next115==3){
    		next115=0;
    	}
    	hw5.eq(next115).css({"top":"32px"})
    	hw5.eq(now115).animate({top:-32}, 'normal')
    	hw5.eq(next115).animate({top:0},'normal');
    	now115=next115;
    }
    let qz6=$('.qz6')
    let next116=now116=0;
	let t9= setInterval(function(){
		moveyi6()
	},3000);
	function moveyi6(r){
		// console.log($('.meilirensheng-xia-left-xia-a').index())
		next116++;
    	if(next116==3){
    		next116=0;
    	}
    	qz6.eq(next116).css({"top":"32px"})
    	qz6.eq(now116).animate({top:-32}, 'normal')
    	qz6.eq(next116).animate({top:0},'normal');
    	now116=next116;
    }
})
