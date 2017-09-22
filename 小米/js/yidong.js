$(function(){
	let btns=$('button')
	let lbtn=btns[1]
	let rbtn=btns[0]
	let disanhang=$('.disanhang')
    //自动
//    function move(){
//  	
//  	if(next==disanhang.length){
//  		next=0;
//  	}
//  	next++;
////  	yuan[now].classList.remove('hot')
////  	yuan[next].classList.add('hot')
//  	disanhang[next].style.left=`${widths}px`
//  	animate(disanhang[now],{left:-widths})
////  	animate(tu[next],{left:0})
//  	animate(disanhang [next],{left:0},function(){flag=true})  /*调用函数*/
//  	now=next;
//  }
      lbtn.onclick=function(){
		//两次过后禁用点击
//		this.disable=true;
		disanhang[0].style.marginLeft=`-1226px`
		disanhang[1].style.marginLeft=`-1226px`
//		disanhang.style.Left=`-1226px`
	}
	rbtn.onclick=function(){
		//两次过后禁用点击
//		this.disable=true;
		disanhang[0].style.marginLeft=0
		disanhang[1].style.marginLeft=0
	}
})


//window.onload=function(){
//	let disanhang=document.getElementsByClassName('disanhang');
//  let widths=(window.innerWidth-1226)/2
// 
////  let bannerrighttu=document.getElementsByClassName('banner-right-tu');
////  let tu=bannerrighttu[0].getElementsByTagName('li')
////  let yuan=document.getElementsByClassName('yuan')
////  let back=document.getElementsByClassName('fanye1')[0];
////  let backer=document.getElementsByClassName('fanye2')[0];
//  let next=now=0;
//  let t;
////  let=flag=true;
//  t=setInterval(move,3000)
////  yuan[0].classList.add('hot')
////两个下标一起更新轮播点
////for(let i=0;i<yuan.length;i++){
////	yuan[i].onclick=function(){
////		if(i==now){return}/*如果为本张图片返回自身*/
//////如果小与i从左往右
////		if(now<i){
////			yuan[i].classList.add('hot')
////		    yuan[now].classList.remove('hot')
////  	    tu[i].style.left=`${widths}px`
////  	animate(tu[now],{left:-widths})
////      animate(tu[i],{left:0},function(){flag=true})  /*调用函数*/
////		}
////		else if(now>i){
////			yuan[i].classList.add('hot')
////		    yuan[now].classList.remove('hot')
////  	    tu[i].style.left=`${-widths}px`
////  	animate(tu[now],{left:widths})
////      animate(tu[i],{left:0},function(){flag=true})  /*调用函数*/
////		}
////		
////  	now=i;
////	}
////	
////}
////点击时只出现一张图
////back.onclick=function(){
////	
////	if(!flag){
////		return;
////	}
////	flag=false;
////	move()
////}
////backer.onclick=function(){
////	move1()
////	if(!flag){
////		return;
////	}
////	flag=false;
////}
////翻页
//  function move(){
//  	 let lefts=disanhang.offsetLeft;
//  	next++;
//  	if(next==disanhang.length){
//  		next=0;
//  	}
////  	yuan[now].classList.remove('hot')
////  	yuan[next].classList.add('hot')
//  	disanhang[next].style.left=`${lefts}px`
//  	animate(disanhang[now],{left:-lefts})
////  	animate(tu[next],{left:0})
//  	animate(disanhang[next],{left:widths},function(){flag=true})  /*调用函数*/
//  	now=next;
//  }
//  //翻页往右
////   function move1(){
////  	next--;
////  	if(next==-1){
////  		next=tu.length-1;
////  	}
////  	yuan[now].classList.remove('hot')
////  	yuan[next].classList.add('hot')
////  	tu[next].style.left=`${-widths}px`/*放右边*/
////  	animate(tu[now],{left:widths})
//////  	animate(tu[next],{left:0})
////  	animate(tu[next],{left:0},function(){flag=true})  /*调用函数*/
////  	now=next;
////  }
//}

