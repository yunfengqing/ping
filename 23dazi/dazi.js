/*
* @Author: jiaqi
* @Date:   2017-08-23 10:23:26
* @Last Modified by:   jiaqi
* @Last Modified time: 2017-08-24 09:03:10
*/
 //     属性
 //         this.ibj=obj
 //         那些字符
 //         个数
 //         速度
 //         得分 减分 关卡 生命 
 //     方法
 //         start 
 //         move 
 //         消除
 //         产生字符
 //         下一关
 //         重新开始  
function Game(){
	this.fen=document.querySelector('.fen>span')  
	this.guan=document.querySelector('.guan>span') 
	this.ming=document.querySelector('.ming>span')    
	this.charsheet=[['A','img/A.png'],
	['B','img/B.png'],
	['C','img/C.png'],
	['D','img/D.png'],
	['E','img/E.png'],['F','img/F.png'],
	['G','img/G.png'],['H','img/H.png'],
	['I','img/I.png'],['J','img/J.png'],['K','img/K.png'],
	['L','img/L.png'],['M','img/M.png'],['N','img/N.png'],
	['O','img/O.png'],['P','img/P.png'],['Q','img/Q.png'],
	['R','img/R.png'],['S','img/S.png'],['T','img/T.png'],
	['U','img/U.png'],['V','img/V.png'],['W','img/W.png'],
	['X','img/X.png'],['Y','img/Y.png'],['Z','img/Z.png']];
	// 产生字数
	this.length=5;
	// 定义速度
	this.speed=10;
	// 定义新数组
	this.elements=[];
    this.fenobj=0;
    this.guanobj=1;
    this.mingobj=10;
    this.xun=10;
    this.position=[];
}
Game.prototype={
	// 开始
	start:function(){
		// 调用getChars产生对应长度字符
        this.getChars(this.length)
        this.drop()
        this.key()
	},
	getChars:function(length){
		for(let i=0;i<length;i++){
			// 用于产生多个getChar
			this.getChar()
		}
	},
// 去除元素重叠
	checkRepeat:function(num){
        // 改为num对应的字母
        return this.elements.some(value=>value.innerText==this.charsheet[num][0]) 
    },
 //    去除位置重叠
    checkPosition:function(lefts){
         // 改为num对应的字母
        return this.position.some(function(value){
        	// 左边或右边重叠一个
        return Math.abs(value-lefts)<50;
        }) 
    },
	// 创建
	getChar:function(){
        let num=Math.floor(Math.random()*this.charsheet.length)
        let divs=document.createElement('div')
        let lefts=(innerWidth-200)*Math.random()+100;
        let tops=Math.random()*100
        // 去重
        do{
           num=Math.floor(Math.random()*this.charsheet.length)
        }
        while(this.checkRepeat(num))
        do{
        	lefts=(innerWidth-200)*Math.random()+100;
        }
        while(this.checkPosition(lefts))
		divs.classList.add('char');
        divs.style.cssText=`left:${lefts}px;top:${tops}px;`
        divs.style.backgroundImage=`url(${this.charsheet[num][1]})`
        // 设置内容
        divs.innerText=this.charsheet[num][0];
        document.body.appendChild(divs)
        // 将元素插入数组
        this.elements.push(divs);
        this.position.push(lefts)
    },
    drop:function(){
    	let that=this
        that.t=setInterval(function(){
        	// 关卡每次获取字符的长度
			for(let i=0;i<that.elements.length;i++){
				// 获取每个元素对应的位置
				let tops=that.elements[i].offsetTop;
				that.elements[i].style.top=`${tops+that.speed}px`
				if(tops>500){
					// 移出超出的第i个元素
					document.body.removeChild(that.elements[i])
                    // 移出数组
                    that.elements.splice(i,1)
                    that.position.splice(i,1)
                    // 删除后添加
                    that.mingobj--;
                    that.ming.innerText=that.mingobj;
                    
				}
				if(that.mingobj==0){
					confirm('请重新开始')
					that.tuichu()
				}
				/*不能放下方，会闪动，判断位置删除后会改变i。放上面，先运行改变位置，判断后再删除
				that.elements[i].style.top=`${tops+that.speed}px`*/
				
			}
			if(that.elements.length<that.length){
					that.getChar()
			}
		},300);
    },
    key:function(){
    	let that=this;
        document.onkeydown=function(e){
        	let char=String.fromCharCode(e.keyCode)
        	for(let i=0;i<that.elements.length;i++){
        		if(char==that.elements[i].innerText){
        			document.body.removeChild(that.elements[i])
        			that.elements.splice(i,1);
        			that.position.splice(i,1)
                    that.fenobj++;
                    that.fen.innerText=that.fenobj;
                    if(that.fenobj==10){
                    	confirm('要进入下一关吗')
                        that.next();
                    }
        		}
        	}
        }
    },
    next:function(){
    	let guanobj=0;
    	this.guanobj++
        this.guan.innerText=this.guanobj;
        console.log(guanobj)
        clearInterval(this.t)
        for(let i=0;i<this.elements.length;i++){
        	document.body.removeChild(this.elements[i])
        }
        this.position=[]
        this.elements=[];
        if(this.length<15){
        	this.length++;
        }
        else{
        	this.speed++;
        }
        this.fenobj=0;
        this.start()
    },
    tuichu:function(){
    	clearInterval(this.t)
    	for(let i=0;i<this.elements.length;i++){
        	document.body.removeChild(this.elements[i])
        }
        this.fen.innerText=0
        this.elements=[];
        this.length=5;
	    this.speed=10;
	    this.elements=[];
        this.fenobj=0;
        this.mingobj=11;
        this.xun=10;
        this.position=[];
        this.start()
    }
}
