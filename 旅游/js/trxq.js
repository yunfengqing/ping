/*
* @Author: jiaqi
* @Date:   2017-08-27 13:56:15
* @Last Modified by:   jiaqi
* @Last Modified time: 2017-09-17 21:24:06
*/
$(function(){
    // let ch=window.innerHeight;
    let hsul=$('.hs-ul')
	let floor=hsul.children('li')
	let posArr=[]
	let lis11=$('right-ul li');
	let guding=$('.guding')
	let num11=0;
	floor.each(function(){
	    posArr.push($(this).offset().top)
	})
	console.log(posArr)
	$('.right-ul>li').on('click',function () {
		let index=$(this).index()
	   	$('body').animate({scrollTop:posArr[index]},'normal');
	})
	guding.click(function(){
		$('body').animate({scrollTop:0},'normal');
	})
	// window.onscroll=function(){
 //        let st=document.body.scrollTop;
	// 	posArr.forEach(function(value,index){
	//         if(ch+st>=value+110){
	// 		    lis11[num11].classList.remove(`color${num11}`)
	// 		    lis11[index].classList.add(`color${index}`)
	// 		    num11=index
 //            }
	// 	})
 //    }		
})