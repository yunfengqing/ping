function insertAfter(insert,position){
	let next=position.nextElementSibling;
	let parent=position.parentNode;
	if(next){
		parent.insertBefore(insert, next);
	}else{
		parent.appendChild(insert);
	}
}


HTMLElement.prototype.insertAfter=function(insert){
    let next=this.nextElementSibling;
	let parent=this.parentNode;
	if(next){
		parent.insertBefore(insert, next);
	}else{
		parent.appendChild(insert);
	}
}

HTMLElement.prototype.prependChild=function(insert){
	let first=this.firstElementChild;
	if(first){
		this.insertBefore(insert, first);
	}else{
		this.appendChild(insert);
	}
}

HTMLElement.prototype.prependTo=function(parent){
	parent.prependChild(this);
}

HTMLElement.prototype.appendTo=function(parent){
	parent.appendChild(this);
}

//清空子元素
HTMLElement.prototype.empty=function(){
	// let child=this.childNodes;
	// for(let i=child.length-1;i>0;i--){
	// 	this.removeChild(child[i]);
	// }

	this.innerHTML='';
}
 //移除自己
HTMLElement.prototype.remove=function(){
	let parent=this.parentNode;
	parent.removeChild(this);
}
//next():获取下一个元素节点
//nextAll():获取下面所有元素节点
//nextUntil()
//previous()  previousAll()   previousUntil()
//closet()  parent()   parents()   parentUntil()
HTMLElement.prototype.next=function(){
	let next=this.nextElementSibling;
	return next;
}