window.onload=function(){
	let duobianxing=document.querySelector('.icon-duobianxing')
	let jiao=document.querySelector('.icon-wujiaoxing')
	let xiang=document.querySelector('.icon-xiangpi1')
	let zhezhao=document.querySelector('.zhezhao')
	let canvas=document.querySelector('canvas');
	let palette=new Palette(canvas,zhezhao);
	let input=document.querySelectorAll('input')
	let label=document.querySelector('label')
	let tools=document.querySelectorAll('.tool')
	let style=document.querySelectorAll('.style')
	let wen=document.querySelector('.icon-wenziICON')
	let ret=document.querySelector('.icon-lishijilu')
	let save=document.querySelector('.icon-baocun1')
	let caiqie=document.querySelector('.icon-caiqie1')
	let clipObj=document.querySelector('.clip')
//	//直线
//	line.onclick=function(){
//		palette.draw('line')
//	}
//	//虚线
//	xuxian.onclick=function(){
//		palette.draw('xu')
//	}
//	//铅笔
//	qianbi.onclick=function(){
//		palette.qian()
//	}
//	//圆
//	yuan.onclick=function(){
//		palette.draw('yu');
//	}
//	//矩形
//	ju.onclick=function(){
//		palette.draw('ju');
//	}
	//橡皮
    let eraser=document.querySelector('.eraser')
    xiang.onclick=function(){
		palette.xiang(eraser,50,50);
	}
    //封装点击事件
    tools.forEach(element=>{
		element.onclick=function(){
			let active=document.querySelector('label[active=true]');
			active.setAttribute('active',false);
			this.setAttribute('active',true);
			if(this.id=='qian'){
				palette.qian()
			}
			else if(this.id=='duobian'){
				palette.ployNum=prompt('请输入边数',6)
		        palette.draw(this.id)
			}
			else if(this.id=='jiao'){
				palette.ployJNum=prompt('请输入角数',8)
				palette.draw(this.id);
			}
			else{
				palette.draw(this.id)
			}
		}
	})
    //描边
    style.forEach((element)=>{
    	element.onclick=function(){
    		let active1=document.querySelector('.left>label[active=true]');
    		console.log(active1)
    		active1.setAttribute('active',false);
    		this.setAttribute('active',true);
    		palette.style=this.id;
    	}
    })
    //换色
    input.forEach((element,index)=>{
    	element.onchange=function(){
    		if(index==0){
    			palette.strokeStyle=this.value;
    		}
    		else if(index==1){
    			palette.fillStyle=this.value;
    		}
    	}
    })
    //文字
    wen.onclick=function(){
    	palette.wen()
    }
    //返回
    ret.onclick=function(){
    	palette.ret()
    }
    //保存
    save.onclick=function(){
    	save.href=canvas.toDataURL('image/png')
    	save.download="a.png"
    }
    //裁切
    caiqie.onclick=function(){
    	palette.clip(clipObj)
    }
    //多边形
//	duobianxing.onclick=function(){
//		palette.ployNum=prompt('请输入边数',6)
//		palette.draw('duobian')
//	}
	//角
//	jiao.onclick=function(){
//		palette.ployJNum=prompt('请输入角数',8)
//		palette.draw('jiao');
//  }
//  //er 
//  tools.forEach(element=>{
//		element.onclick=function(){
//     		for(let i=0;i<tools.length;i++){
//          	tools[i].setAttribute('active',false);
//          }
//			element.setAttribute('active',true);
//			if(element.id=='qian'){
//				palette.qian()
//			}
//			else{
//				palette.draw(this.id)
//			}
//		}
//	})
	//删除
	document.onkeydown=function(e){
        if(e.ctrlKey&&e.keyCode==90){
        	//删去最后一个
        	let img=palette.history.pop();
        	//将剩余的放入,
        	palette.ctx.putImageData(img,0,0)
        }
    }
	
	
	
}
