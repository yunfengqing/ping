/*
* @Author: jiaqi
* @Date:   2017-08-26 22:28:08
* @Last Modified by:   jiaqi
* @Last Modified time: 2017-09-17 20:59:43
*/
$(function(){
    let ul0=$('.All-bot .all-bott ul:first-child')
    let ul1=$('.All-bot .all-bott ul:nth-child(2)')
    console.log(ul0);
    console.log(ul1);
    let jsl0=$('.jsl0');
    let jsl1=$('.jsl1');
    let js20=$('.js20');
    let js21=$('.js21');
    jsl0.click(function(){
    	jsl0.css("color","blue");
    	jsl1.css("color","#939b94");
    	js20.css("color","#939b94");
    	js21.css("color","#939b94");
    	ul0.css("display","block");
    	ul1.css("display","none");
    })
    jsl1.click(function(){
    	jsl0.css("color","#939b94");
    	jsl1.css("color","blue");
    	js20.css("color","#939b94");
    	js21.css("color","#939b94");
    	ul0.css("display","block");
    	ul1.css("display","none");
    })
    js20.click(function(){
    	jsl0.css("color","#939b94");
    	jsl1.css("color","#939b94");
    	js20.css("color","blue");
    	js21.css("color","#939b94");
    	ul0.css("display","none");
    	ul1.css("display","block");
    })
    js21.click(function(){
    	jsl0.css("color","#939b94");
    	jsl1.css("color","#939b94");
    	js20.css("color","#939b94");
    	js21.css("color","blue");
    	ul0.css("display","none");
    	ul1.css("display","block");
    })
})