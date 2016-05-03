function getClass(classname,obj){
	obj=obj||document;
	if(obj.getElementsByClassName!=undefined){
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var Tags=obj.getElementsTagName("*");  //把全部都获得
		for(var i=0;i<Tags.length;i++){
			if(check(Tags[i].className,classname)){
				arr.push(Tags[i]);
			}
		}
		return arr;
	}
}

function inp(obj,val){
	if(val==undefined){
		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.textContent;
		}
	}else{
		if(obj.innerText){
			obj.innerText=val;
		}else{
			obj.textContent=val;
		}
	}
}

function check(oldclass,newclass){
	var arr=oldclass.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==newclass){
			return true;
		}
	}
	return false;
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}