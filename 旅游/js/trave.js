/*
* @Author: jiaqi
* @Date:   2017-08-20 17:45:01
* @Last Modified by:   jiaqi
* @Last Modified time: 2017-09-17 20:19:01
*/
$(function(){
    var banner=$('.banner');
    var bannerimg=banner.children('img');
    var yuan=$('.yuan')
    var t=setInterval(banmove,3000);
    var num=0;
    banner.hover(function(){
        t=clearInterval(t)
    })
    banner.mouseleave(function(){
        t=setInterval(banmove,3000)
    });
//两个下标一起更新轮播点
    yuan.click(function(){
        let index=$(this).index()
        yuan.removeClass('hot')
        yuan.eq(index).addClass('hot')
        bannerimg.css({"z-index":0,"opacity":0});
        bannerimg.eq(index).animate().css({"z-index":1,"opacity":1})
    })
    $(".yuan").click(function(){
        let index=$(this).index()
        console.log($(this))
        console.log(index)
        $('.yuan').removeClass('hot');
        $(".yuan:eq("+index+")").addClass('hot');
        $('.banner-right-tu>li').css({"z-index":0,"opacity":0});
        $(".banner-right-tu>li:eq("+index+")").animate().css({"z-index":1,"opacity":1})
    })
    function banmove(){
		num++;
        if(num==bannerimg.length){
    	    num=0;
        }
    	bannerimg.css({"z-index":0,"opacity":0});
    	yuan.removeClass('hot')
        bannerimg.eq(num).animate().css({"z-index":1,"opacity":1})
        yuan.eq(num).addClass('hot')
    }
    // 标签
    let biaoqian=$('.biaoqian')
    let biaoqiana=biaoqian.children('a')
    $(window).scroll(function(){
        let st=$(document.body).scrollTop();
        if(st>0){
            // let index=biaoqiana.index()
            biaoqian.css("background","#fff");
            biaoqian.css({"border-bottom":"1px solid #D9D9D9"});
            biaoqiana.css("color","#2A333C");
            biaoqiana.hover(function(){
                biaoqiana.css("color","#2A333C");
                $(this).css("color","blue");
            })
            biaoqiana.hover(function(){},function(){
                biaoqiana.css("color","#2A333C");
            })
        }
        else{
            // let index=biaoqiana.index()
            biaoqian.css("background","rgba(0, 0, 0, 0.3)");
            biaoqian.css({"border-bottom":"0px solid #D9D9D9"});
            biaoqiana.css("color","#fff");
            biaoqiana.hover(function(){
                biaoqiana.css("color","#fff");
                $(this).css("color","blue");
            })
            biaoqiana.hover(function(){},function(){
                $(this).css("color","#fff");
            })
        }
    })
        
// 精选旅游
    let firstpbott=$('.firstp-bott')
    let firstlis=firstpbott.children('li')
    let rights=$('.icon-houtuiqianjin')
    let lefts=$('.icon-houtuiqianjin1')
    lefts.click(function(){
        firstpbott.css("transform","translateX(0px)")
    })
    rights.click(function(){
        firstpbott.css("transform","translateX(-1200px)")
    })
//旅游景点
	 
    
})
