$(function(){
	$(".gouwuche").hover(function(){
		$(".gouwuche1").css({"height":0,"font-size":0})
	})
	$(".gouwuche").hover(function(){
		$(".gouwuche1").css({"height":92,"font-size":12})
	})
    $(".gouwuche").hover(function(){},function(){
		$(".gouwuche1").css({"height":0,"font-size":0})
	}) 
	//侧导航引入
	// $('.banner-lashen>li').mouseenter(function(){
	// 	$(this).children().addClass('block').removeClass('none')
	// }).mouseleave(function(){
	// 	$(this).children().addClass('none').removeClass('block')
	// })
	$('.banner-lashen>li>a').hover(function(){
		$('.banner1').css('display','none')
		$(this).next().css('display','block')
	})
	//hover移入移出事件。function(){},function(){}代表先移入在移出。
	$('.banner-lashen>li').hover(function(){},function(){
		$('.banner1').css('display','none')
	})
	// 上部
	$('.navi-zhong>li>a').hover(function(){
		$('.navi-zhong1').css('display','none')
		$(this).next().css({"display":"block","z-index":"999988999999999"})
	})
	$('.navi-zhong>li').hover(function(){},function(){
		$('.navi-zhong1').css('display','none')
	})
	//banner图
    var next=0,now=0;
    var t;
    let=flag=true;
    t=setInterval(function(){move("l")},2000)
    //翻页
    var tu=$('.banner-right-tu>li')
    function move(m){
    	
    	if(m=="l"){
    		next++
    		if(next==tu.length){
    			next=0;
    		}
    	}
    	if(m=="r"){
    		next--
    		if(next<0){
    			next=tu.length-1
    		}
    	}
    	
    	
    	$('.yuan').css({"background":"#3c3a39"});
    	$(".yuan:eq("+next+")").css({"background":"#ff6700"});
    	$('.banner-right-tu>li').css({"z-index":0,"opacity":0});
    	$(".banner-right-tu>li:eq("+next+")").animate().css({"z-index":1,"opacity":1})
    	// tu[next].style.left=`${widths}px`
    	// animate(tu[now],{left:-widths})
    	// animate(tu[next],{left:0},function(){flag=true})  /*调用函数*/
    	// now=next;
    }

	$('.banner').hover(function(){
		t=clearInterval(t)
	})
	$(".banner").mouseleave(function(){
		t=setInterval(function(){move("l")},2000)
	});
    	
    //点击时只出现一张图
	$('.fanye1').click(function(){
		move("l")
		if(!flag){
			return;
		}
		flag=false;
		
	})
	$('.fanye2').click(function(){
		move("r")
		if(!flag){
			return;
		}
		flag=false;
	})
	
	$(".yuan").click(function(){
		let index=$(this).index()
		console.log(index)
		$('.yuan').css({"background":"#3c3a39"});
    	$(".yuan:eq("+index+")").css({"background":"#ff6700"});
    	$('.banner-right-tu>li').css({"z-index":0,"opacity":0});
    	$(".banner-right-tu>li:eq("+index+")").animate().css({"z-index":1,"opacity":1})
	})
	

	 //移动
    var lbtn=$('button:last-child')
	var rbtn=$('button:first-child')
	var disanhang=$('.disanhang')
	var starindex = 0;
	var star = setInterval(move3,5000);
	lbtn.click(function(){
		clearInterval(star);
		tt=setInterval(move, 3000);
    	if(starindex==1){
    		rbtn.css({'color':'#B0B0B0'})
    		star = setInterval(move3,5000)
			return ;
		}
		starindex++;
    	rbtn.css({'color':'#B0B0B0'})
    	lbtn.css({'color':'#EE3032','font-weight':'bold'})
     	//两次过后禁用点击
		$('.disanhang:first-child').css('transform',`transLateX(${-1240*starindex}px)`);
		$('.disanhang:last-child').css('transform',`transLateX(${-1240*starindex}px)`);
		star = setInterval(move3,5000)     
    })
	rbtn.click(function(){
		clearInterval(star);
        if(starindex==0){
            lbtn.css({'color':'#B0B0B0'})
            star = setInterval(move3,5000)
            return;
        }
        starindex--;
       lbtn.css({'color':'#B0B0B0'})
        rbtn.css({'color':'#EE3032','font-weight':'bold'})
        //两次过后禁用点击
		$('.disanhang:first-child').css('transform',`transLateX(${-1240*starindex}px)`);
		$('.disanhang:last-child').css('transform',`transLateX(${-1240*starindex}px)`);
		star = setInterval(move3,5000)
	})
	var flag11 =true;
    function move3(){
    	if(flag11){
    		if(starindex==2){
	           flag11=false;
	           rbtn.css({'color':'#B0B0B0'})
	           return; 
	        }
	        starindex++;
	        rbtn.css({'color':'#B0B0B0'})
	    	lbtn.css({'color':'#EE3032','font-weight':'bold'})
			$('.disanhang:first-child').css({"transform":`transLateX(${-1240*starindex}px)`})
			$('.disanhang:last-child').css('transform',`transLateX(${-1240*starindex}px)`);
		}else{
			if(starindex==0){
	           flag11=true;
	           rbtn.css({'color':'#EE3032','font-weight':'bold'})
	           return; 
	        }
	        starindex--;
			lbtn.css('color','#E0E0E3')
			rbtn.css({'color':'#EE3032','font-weight':'bold'})
			$('.disanhang:first-child').css('transform',`transLateX(${-1240*starindex}px)`);
			$('.disanhang:last-child').css('transform',`transLateX(${-1240*starindex}px)`);
		}
		flag11= !flag11;
    }
//搜索下拉框
    let inputnavi =$('.navi-right>input');
	let navizi =$('.navi-right>.navizi');
	let nazizi =$('.navi-right>.nazizi');
	let stretch =$('.navi-right>.navi-stretch');
	inputnavi.focus(function(){
		inputnavi.css({"border-color":"#ff6700"});
		stretch.css('display','block')
		navizi.css('display','none')
		nazizi.css('display','none')
		$('.navi-right>a:not(".button")').css('display','none')
		$('.navi-right>.button>.navi-er').css({"border-color":"#ff6700","border-left":"none"})
	})	
	inputnavi.blur(function(){
		inputnavi.css({"border-color":"#e0e0e0"});
		stretch.css('display','none')
		navizi.css('display','block')
		nazizi.css('display','block')
		$('.navi-right>a:not(".button")').css('display','block')
		$('.navi-right>.button>.navi-er').css({"border-color":"#e0e0e0"})
	})
		
	
	
	//推荐
	let tj =$('.tuijian-xia');
	let tjl =$('.tuijian-tiaoyi');
	let tjr =$('.tuijian-tiaoer');
	// let tj1 = tj.children();		//总共有多少个个数
	// let tj2 = $('.tuijian-xia:first').offset +$('.tuijian-xia:first').get($('.tuijian-xia:first'),null)	//一个li占的宽度
	// tj.css({"width":`${tj1*tj2}px`}) 
	var tjtu = 0;
	tjl.click(function(){
		if(tjtu ==0){
			return ;
		}
		tjr.addClass('hot');
		tjtu--;
		$('.tuijian-xia').css('transform',`transLateX(${-1240*tjtu}px)`);
	})
	tjr.click(function(){
		if(tjtu ==2){
			return ;
		}
		tjl.addClass('hot');
		tjtu++;
		$('.tuijian-xia').css('transform',`transLateX(${-1240*tjtu}px)`);
	})
		
	
//哈利

	let neirongmain1=$('.neirong-xia li');
    let nrmain=$('.neirong-big')
    let nums=[0,0,0,0];
    neirongmain1.each(function(){
    	let h7=$(this).children('.neirong-xia-san');
        let hi=h7.children('div');
        let back1=$(this).children('.neirong-xia-yi-fanye');
        let forward1=$(this).children('.neirong-xia-yi-fanyeer');
        let xiabiaos=$(this).index();
        // console.log(xiabiaos)
        hi.click(function(){
            let xiabiao=$('.neirongs').index();
            hi.removeClass('neirong-xiase');
            $(this).addClass('neirong-xiase');
            nrmain.eq(xiabiaos).css('transform',`transLateX(${-256*xiabiaos}px)`);
            nums[xiabiaos]=xiabiao;
            console.log(xiabiaos)
        })
        forward1.click(function(){
            if(nums[xiabiaos]==2){
                return;
            }
            nums[xiabiaos]++;
            nrmain.eq(xiabiaos).css('transform',`transLateX(${-256*nums[xiabiaos]}px)`);
            hi.removeClass('neirong-xiase');
            hi.eq(nums[xiabiaos]).addClass('neirong-xiase');
        })
        back1.click(function(){
            if(nums[xiabiaos]==0){
                return;
            }
            nums[xiabiaos]--;
            nrmain.eq(xiabiaos).css('transform',`transLateX(${-256*nums[xiabiaos]}px)`);
            hi.removeClass('neirong-xiase');
            hi.eq(nums[xiabiaos]).addClass('neirong-xiase');
        })
    })
	
	
	
	//搭配
	let sihanger=$('.sihanger')
	// let znjd =$('.wuhangtiao-right');
	for(let k=0;k<4;k++){
		let znjds=$(".wuhangtiao-right:eq("+k+") a")
		let znrights=$(".sihanger:eq("+k+") .dapei-right")
		for(let i=0;i<4;i++){
			$(".wuhangtiao-right:eq("+k+") a:eq("+i+")").hover(function(){
				for(let j=0;j<4;j++){
					$(".wuhangtiao-right:eq("+k+") a:eq("+j+")").removeClass("znjd")
					$(".sihanger:eq("+k+") .dapei-right:eq("+j+")").hide();
				}
				$(".wuhangtiao-right:eq("+k+") a:eq("+i+")").addClass("znjd")
				$(".sihanger:eq("+k+") .dapei-right:eq("+i+")").show();
			})
		}
	}
})
