$(function(){
    //banner图
    var next=0,now=0;
    var t;
    let=flag=true;
    t=setInterval(function(){move("l")},2000)
    //翻页
    var tu=$('.banner0>a')
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
        $(".yuan:eq("+next+")").css({"background":"#808080"});
        $('.banner0>a').css({"z-index":0,"opacity":0});
        $(".banner0>a:eq("+next+")").animate().css({"z-index":1,"opacity":1})
        // tu[next].style.left=`${widths}px`
        // animate(tu[now],{left:-widths})
        // animate(tu[next],{left:0},function(){flag=true})  /*调用函数*/
        // now=next;
    }

    $(".banner0").hover(function(){
        t=clearInterval(t)
    })
    $(".banner0").mouseleave(function(){
        t=setInterval(function(){move("l")},2000)
    });
        
    //点击时只出现一张图
    $('.banner-r-left').click(function(){
        move("l")
        if(!flag){
            return;
        }
        flag=false;
        
    })
    $('.banner-r-right').click(function(){
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
        $(".yuan:eq("+index+")").css({"background":"#808080"});
        $('.banner0>a').css({"z-index":0,"opacity":0});
        $(".banner0>a:eq("+index+")").animate().css({"z-index":1,"opacity":1})
    })
    })