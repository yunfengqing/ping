window.onload=function(){
	let banner=document.getElementsByClassName('banner-right')[0];
    let widths=banner.offsetWidth;
    let bannerrighttu=document.getElementsByClassName('banner-right-tu');
    let tu=bannerrighttu[0].getElementsByTagName('li')
    let yuan=document.getElementsByClassName('yuan')
    let back=document.getElementsByClassName('fanye1')[0];
    let backer=document.getElementsByClassName('fanye2')[0];
    let next=now=0;
    let t;
    let=flag=true;
    t=setInterval(move,3000)
    yuan[0].classList.add('hot')
//移入清除轮播
banner.onmouseenter=function(){
	t=clearInterval(t)
	
}
banner.onmouseleave=function(){
	t=setInterval(move,3000)
}
//两个下标一起更新轮播点
for(let i=0;i<yuan.length;i++){
	yuan[i].onclick=function(){
		if(i==now){return}/*如果为本张图片返回自身*/
//如果小与i从左往右
		if(now<i){
			yuan[i].classList.add('hot')
		    yuan[now].classList.remove('hot')
    	    tu[i].style.left=`${widths}px`
    	animate(tu[now],{left:-widths})
        animate(tu[i],{left:0},function(){flag=true})  /*调用函数*/
		}
		else if(now>i){
			yuan[i].classList.add('hot')
		    yuan[now].classList.remove('hot')
    	    tu[i].style.left=`${-widths}px`
    	animate(tu[now],{left:widths})
        animate(tu[i],{left:0},function(){flag=true})  /*调用函数*/
		}
		
    	now=i;
	}
	
}
//点击时只出现一张图
back.onclick=function(){
	
	if(!flag){
		return;
	}
	flag=false;
	move()
}
backer.onclick=function(){
	move1()
	if(!flag){
		return;
	}
	flag=false;
}
//翻页
    function move(){
    	next++;
    	if(next==tu.length){
    		next=0;
    	}
    	yuan[now].classList.remove('hot')
    	yuan[next].classList.add('hot')
    	tu[next].style.left=`${widths}px`
    	animate(tu[now],{left:-widths})
//  	animate(tu[next],{left:0})
    	animate(tu[next],{left:0},function(){flag=true})  /*调用函数*/
    	now=next;
    }
    //翻页往右
     function move1(){
    	next--;
    	if(next==-1){
    		next=tu.length-1;
    	}
    	yuan[now].classList.remove('hot')
    	yuan[next].classList.add('hot')
    	tu[next].style.left=`${-widths}px`/*放右边*/
    	animate(tu[now],{left:widths})
//  	animate(tu[next],{left:0})
    	animate(tu[next],{left:0},function(){flag=true})  /*调用函数*/
    	now=next;
    }
}




法二:
	//banner图引入
let bannerrighttu=document.getElementsByClassName('banner-right-tu');
let tu=bannerrighttu[0].getElementsByTagName('li')
//let tu=document.getElementsByClassName('banner-right-tu1');
let yuan=document.getElementsByClassName('yuan')
let banner=document.getElementsByClassName('banner-right');
let back=document.getElementsByClassName('fanye1')[0];
let backer=document.getElementsByClassName('fanye2')[0];
//第num个显示第i个清除可以只调用两个图便可
let num=0 
//自动轮播
let t
t=setInterval(fn,3000)
//移入清除轮播
banner[0].onmouseenter=function(){
	t=clearInterval(t)
}

banner[0].onmouseleave=function(){
	t=setInterval(fn,3000)
}
//点击翻页左翻页和轮播图方向一致直接调用同一个fn
backer.onclick=fn
back.onclick=fn1
//右翻页
function fn1(){
	num--
if (num==-1) {
	num=tu.length-1
}
for (let i=0;i<tu.length;i++) {
	tu[i].style.display='none'
	yuan[i].classList.remove('hot')
}
    tu[num].style.display='block'
	yuan[num].classList.add('hot')
}
//屏蔽a的默认行为
backer.onclick=function(){
	fn1()
	return false;
}
back.onclick=function(){
	fn()
	return false;
}
//banner图的轮播
function fn(){
	num++
if (num==tu.length) {
	num=0
}
for (let i=0;i<tu.length;i++) {
	tu[i].style.display='none'
	yuan[i].classList.remove('hot')
}
    tu[num].style.display='block'
	yuan[num].classList.add('hot')
}
//清除
//t=clearInterval(t)
//for (let i=0;i<tu.length;i++) {
//	banner[i].onmouseenter=function(){
//		tu[num].style.display='none'
//		tu[i].style.display='block'
//		num=i  
// }
//}
for (let i=0;i<yuan.length;i++) {
	yuan[i].onclick=function(){
		tu[num].style.display='none'
		tu[i].style.display='block'
		num=i
	}
}
