/*
* @Author: jiaqi
* @Date:   2017-08-27 15:37:37
* @Last Modified by:   jiaqi
* @Last Modified time: 2017-09-17 20:29:59
*/
$(function(){
    let write=document.querySelector('.jian-ri>.write')
    // 名字
    let name=document.querySelector('.jian-ri>.name')
    let tip=document.querySelector('.tip>span')
    // let tip=document.querySelector('.color')
    let sub=document.querySelector('.jian-ri>.sub')
    let max=write.maxLength;
    write.onkeyup=function(){
    	let val=this.value;
    	let valname=this.value
    	tip.innerText=`${max-val.length}`
    }
    write.onkeyup=function(){
    	
    }
    let ul=document.querySelector('ul.jian-le')
    // 点击和键盘触发事件一样，相等
    sub.onclick=write.onkeydown=function(e){
    	// 判断是否提交
    	// 判断事件类型。不加on
    	if(e.type=='click'){
    		// fn冒充给write,this指向write
    		fn.call(write)
    	}
    	else if(e.type=='keydown'){
            if(e.shiftKey&&e.keyCode==13){
            	fn.call(write)
            }
    	}
    	function fn(){
        	let val=write.value;
        	let valname=name.value;
        	write.value='';
        	name.value=''
        	let lis=document.createElement('li');
        	lis.innerHTML=`
            <img src='img/wo.png' alt="">
	    	<div class="">
	    		<h3>${valname}</h3>
	    		<p>${val}</p>
	    	</div>
            `
            ul.prependChild(lis)
        }
    }
})    