$(function(){
		let ban=$('.ban')[0];
		let photo=$('.photo')[0];
        let lis=$('li',photo);
        let lbd=$('.banner-right3')[0];
        let lbds=$('li',lbd);
        let widths=ban.offsetWidth;
        let t;
        let next=0;
        let now=0;
        t=setInterval(fn,3000);
        lbds[0].classList.add('hot');

        //自动播放
        function fn(){
            next++;
            if(next==lis.length){
            	next=0;
            }
            
            lbds[next].classList.add('hot');
            lbds[now].classList.remove('hot');
            lis[next].style.left=`${widths}px`;  
            animate(lis[now],{left:-widths});
            animate(lis[next],{left:0});
            now=next;
        }

        //轮播点点击
        for(let i=0;i<lbds.length;i++){
        	lbds[i].onclick=function(){
                lbds[i].classList.add('hot');
                lbds[now].classList.remove('hot');
                lis[i].style.left=`${widths}px`;  
                animate(lis[now],{left:-widths});
                animate(lis[i],{left:0});
                now=next=i;
        	}
        }
	})