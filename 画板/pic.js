/*
         属性
              线宽  端点  颜色  边数  角  尺寸  宽高  history  ctx  canvas
 * 
 * 方法
 *   画线    虚线  铅笔  多边形  圆  矩形  多角形
 *   橡皮  裁切  文字
 *   新建  保存*/
function Palette(canvas,zhezhao){
	this.canvas=canvas;
	this.ctx=this.canvas.getContext('2d')
	//历史记录和画板尺寸
	this.history=[];
	this.cw=this.canvas.width;
	this.ch=this.canvas.height;
	//画图样式
	this.lineWidth=1;
	this.lineCap='butt';
	this.fillStyle='black';
	this.strokeStyle='black';
	this.temp=null
	//决定是否描边
	this.style='fill';
	//存入边和角，法一：num传参，法二：定义为Palette的一个属性
	this.ployJNum;
	this.ployNum;
	this.zhezhao=zhezhao
//	//左宽
//	this.leftw
}
Palette.prototype={
	//初始化样式
	ini:function(){
		this.ctx.strokeStyle=this.strokeStyle;
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.lineCap=this.lineCap;
		this.ctx.fillStyle=this.fillStyle;
		this.ctx.style=this.style;
		this.ctx.temp=this.temp;
		this.ctx.setLineDash([0,0]);
	},
	//直线
	line:function(ox,oy,cx,cy){
//		this.ini();
		this.ctx.beginPath()
		this.ctx.moveTo(ox,oy)
		this.ctx.lineTo(cx,cy)
		this.ctx.closePath()
		this.ctx.stroke();
	},
    //虚线
	xu:function(ox,oy,cx,cy){
//		this.ini();
		
		this.ctx.beginPath()
		this.ctx.moveTo(ox,oy)
		//虚线，接受数组，一个代表长度一个代表间隙
	    this.ctx.setLineDash([10,10])
		this.ctx.lineTo(cx,cy)
		this.ctx.closePath()
		this.ctx.stroke();
    },
	//铅笔
	qian:function(){
		let that=this;
		this.zhezhao.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			that.ini();
			that.ctx.beginPath()
			that.ctx.moveTo(ox,oy)
			that.zhezhao.onmousemove=function(e){
				let cx=e.offsetX;cy=e.offsetY;
				that.ctx.lineWidth=that.lineWidth
				that.ctx.clearRect(0,0,that.cw,that.ch)
				if(that.history.length>0){
                	//将最后一条历史记录放入
                	that.ctx.putImageData(that.history[that.history.length-1],0,0)
                }
				that.ctx.lineTo(cx,cy)
//				that.ctx.closePath()
				that.ctx.stroke();
			}
			that.zhezhao.onmouseup=function(){
				that.history.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height));
		        this.onmousemove=null;
		        this.onmouseup=null;
	        }
		}
	},
	//多边形
	duobian:function(ox,oy,cx,cy){
		let ang=360/this.ployNum/180*Math.PI;
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2))
		this.ini();
		this.ctx.beginPath()
        this.ctx.moveTo(ox+r,oy);
        for (let i=0;i<this.ployNum;i++) {
	        this.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
        }
        this.ctx.closePath()
//      this.ctx.fill()
	},
	//圆
	yu:function(ox,oy,cx,cy){
		let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2))
		//调用初始化样式
//		this.ini();
		this.ctx.beginPath()
		this.ctx.arc(ox,oy,r,0,Math.PI*2,false);
		this.ctx.closePath()
//		this.ctx.stroke()
		//设置元的样式为填充或描边
//		this.ctx[this.style]()
	},
	//矩形
	ju:function(ox,oy,cx,cy){
		//调用初始化样式
		this.ini();
		this.ctx.beginPath()
//		this.ctx.moveTo(ox,oy);
		this.ctx.rect(ox,oy,cx-ox,cy-oy)
		this.ctx.closePath()
//		this.ctx.stroke()
		//设置元的样式为填充或描边
//		this.ctx[this.tyle]()
	},
    //五角星
	jiao:function(ox,oy,cx,cy){
		let ang=360/(this.ployJNum*2)/180*Math.PI;
        let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2))
		this.ini();
		this.ctx.beginPath()
        this.ctx.moveTo(ox+r,oy);
        for (let i=0;i<this.ployJNum*2;i++) {
            if(i%2==0){
                this.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
			}
	        else{
				this.ctx.lineTo(ox+r*Math.cos(ang*i)/2,oy+r*Math.sin(ang*i)/2);
			}
        }
        this.ctx.closePath()
//      this.ctx.stroke()
	},
	//橡皮
	xiang:function(obj,w,h){
		let that=this;
		this.zhezhao.onmousedown=function(e){
            obj.style.display='block'
            //禁止去掉浏览器的默认行为
			e.preventDefault()
			that.zhezhao.onmousemove=function(e){
				let cx=e.offsetX;cy=e.offsetY;
				let lefts=cx-w/2;
				let tops=cy-h/2;
				if(lefts<=0){
					lefts=0
				}
				if(lefts>=that.cx-2*w){
				    lefts=that.cx-2*w
				}
				if(tops<=0){
					tops=0;
				}
				if(tops>=that.cy-2*h){
					tops=that.cy-2*h
				}
				obj.style.left=`${lefts}px`
				obj.style.top=`${tops}px`;
				//鼠标到哪橡皮擦到哪
				that.ctx.clearRect(lefts,tops,w,h)
			}
		
		//在橡皮上抬起无法去消，解决办法遮罩
		    that.zhezhao.onmouseup=function(){
				obj.style.display='none'
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
				this.onmousemove=null;
				this.onmouseup=null;
	        }
		}
	},
	//文字
	wen:function(){
		this.zhezhao.onmousedown=function(e){
			let that=this;
			let ox=e.offsetX,oy=e.offsetY;
			let divs=document.createElement('div')
			divs.style.cssText=`
			width:50px;
			height:50px;
			border:1px solid red;
			position: absolute;
			top:${oy}px;
			left:${ox}px;
			`
			divs.contentEditable=true;
			this.zhezhao.appendChild(divs);
			this.zhezhao.onmousedown=null;
//			if(this.history.length>0){
//              //将最后一条历史记录放入
//              this.ctx.putImageData(this.history[this.history.length-1],0,0)
//          }
			let lefts,tops;
			divs.onmousedown=function(e){
		    //浏览器-ox-offsetLeft
				let ox=e.clientX,oy=e.clientY;
				let ol=divs.offsetLeft,ot=divs.offsetTop;
				that.zhezhao.onmousemove=function(e){
					let cx=e.clientX,cy=e.clientY;
					//后面要调用放入外面
					lefts=cx-ox+ol;
					tops=cy-oy+ot;
					if(lefts<=0){
					    lefts=0
				    }
					if(lefts>=that.cx-ox+ol){
					    lefts=that.cx-ox+ol
					}
					if(tops<=0){
						tops=0;
					}
					if(tops>=that.cy-oy+ot){
						tops=that.cy-oy+ot
					}
					divs.style.left=`${lefts}px`;
					divs.style.top=`${tops}px`
				}
				divs.onmouseup=function(){
					that.zhezhao.onmousemove=null;
					this.onmouseup=null;
				}
			
		    }
			divs.onblur=function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
				let value=this.innerText;
				that.zhezhao.removeChild(this)
				that.ctx.textAlign='center';
				that.ctx.fillText(value,lefts,tops)
		    }
		}.bind(this)
//法二		
//		divs.onmousedown=function(e){
	    //浏览器-ox-offsetLeft
//			let ox=e.offsetx;
//			let leftsw=e.clientX-ox-this.offsetLeft;
//			that.zhezhao.onmousemove=function(e){
//				let cx=e.clientX;
//				let lefts=cx-ox-leftsw
//				
//			}
//			divs.onmouseup=function(){
//				that.zhezhao.onmousemove=null;
//				divs.onmouseup=null
//			}
//		}
	},
	//返回
	ret:function(){
		let Img=this.ctx.getImageData(0,0,this.cw,this.ch);
		let data=Img.data;
		console.log(data)
		for(let i=0; i<data.length;i+=4){
			data[i]=255-data[i];
			data[i+1]=255-data[i+1]
			data[i+2]=255-data[i+2]
		}
		this.ctx.putImageData(Img,0,0)
	},
	clip:function(clipObj){
		let that=this
		this.zhezhao.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			let w,h,minx,miny
			that.zhezhao.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				minx=cx>ox?ox:cx
				miny=cy>oy?oy:cy
				w=Math.abs(cx-ox);
				h=Math.abs(cy-oy);
				clipObj.style.cssText=`
				display:block;
				left:${minx}px;
				top:${miny}px;
				width:${w}px;
				height:${h}px;
				`
			}
		    that.zhezhao.onmouseup=function(){
		    	//截取部分，位置，尺寸
				that.temp=that.ctx.getImageData(minx,miny,w,h)
				that.ctx.clearRect(minx,miny,w,h)		
				//清除某部分
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				//放入清除的部分
				that.ctx.putImageData(that.temp,minx,miny)
				that.zhezhao.onmousemove=null;
				that.zhezhao.onmouseup=null;
				//拖拽选取,位置,尺寸,对象
				that.drag(minx,miny,w,h,clipObj)
		    }
		}
	},
	drag:function(minx,miny,w,h,clipobj){
		let that=this;
		//定义移入移出的手势
		this.zhezhao.onmousemove=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			if(ox>minx&&ox<minx+w&&oy>miny&&oy<miny+h){
				that.zhezhao.style.cursor='move'
			}
			else{
				that.zhezhao.style.cursor='default'
			}
		}
		//按下鼠标拖拽裁剪狂 
		this.zhezhao.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			that.zhezhao.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				let lefts=cx-ox+minx,tops=cy-oy+miny;
				//设置边距
                if(lefts<=0){
                	left=0;
                }
                if(lefts>=that.cw-w){
                	left=that.cw-w
                }
				if(tops<=0){
                	top=0;
                }
                if(tops>=that.ch-h){
                	top=that.ch-h
                }
				clipobj.style.left=`${lefts}px`;
				clipobj.style.top=`${tops}px`
				//裁切的部分使其一直放置
				that.ctx.clearRect(0,0,that.cw,that.ch)
				//拖拽一次
				if(that.history.length>0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.ctx.putImageData(that.temp,lefts,tops)
			}
			that.zhezhao.onmouseup=function(){
				clipobj.style.display='none'
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.temp=null
				that.zhezhao.onmousemove=null;
		        that.zhezhao.onmouseup=null;
		        
			}
		}
	},
	//将相同代码封装
	draw:function(type){
		this.zhezhao.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			this.zhezhao.onmousemove=function(e){
				let cx=e.offsetX;cy=e.offsetY;
				this.ctx.clearRect(0,0,this.cw,this.ch)
				if(this.history.length>0){
                	//将最后一条历史记录放入
                	this.ctx.putImageData(this.history[this.history.length-1],0,0)
                }
				//初始化样式
			    this.ini();
                //决定是否描边
                this.ctx[this.style]()
			    this[type](ox,oy,cx,cy)
			}.bind(this)
			this.zhezhao.onmouseup=function(){
				this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
		        this.zhezhao.onmousemove=null;
		        this.zhezhao.onmouseup=null;
	        }.bind(this)
		}.bind(this)
	},
}
