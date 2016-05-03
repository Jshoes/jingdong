window.onload=function(){
	var pics=getClass("bannerpic")[0].getElementsByTagName("a");
	var btns=getClass("anniu")[0].getElementsByTagName("span");
	var stop=getClass("bannerpic")[0];
	var huanYe=getClass("left-right")[0];
	var left=getClass("leFt")[0];
	var right=getClass("riGht")[0];
	var t;
	var m=0;
	t=setInterval(move,2000)
function move(){     //  打包执行轮播图的函数
		m++;
		if(m==pics.length){
			m=0;
		}
		for(var i=0;i<pics.length;i++){
			pics[i].style.opacity=0;
			btns[i].className="";
		}
		animate(pics[m],{opacity:1});
		btns[m].className="col";
	}


  for(var i=0;i<pics.length;i++){   //轮播图下面的按钮  并实现选项卡功能
	    	btns[i].index=i;

			btns[i].onclick=function(){
				for(var j=0;j<pics.length;j++){
					pics[j].style.opacity=0;
					btns[j].className="";
				}
				m=this.index;
				animate(pics[m],{opacity:1});
				btns[m].className="col";
				
			}
		}

		stop.onmouseover=function(){  //鼠标在移动到图片上时停止轮播  并显示左右箭头
			huanYe.style.display="block";
			clearInterval(t);
		}
		stop.onmouseout=function(){  //鼠标在离开图片后继续轮播并隐藏左右箭头
			huanYe.style.display="none";
			t=setInterval(move,2000);
		}
		right.onclick=function(){   //右箭头功能实现
			move();
		}
		left.onclick=function(){  //左箭头功能实现  就是轮播图的倒序转换
			m--;
		if(m==-1){
			m=pics.length-1;
		}
		for(var i=0;i<pics.length;i++){
			pics[i].style.opacity=0;
			btns[i].className="";
		}
		animate(pics[m],{opacity:1});
		btns[m].className="col";
		}


var alianJ=getClass("fuzhuangxiebaotitleright")[0].getElementsByTagName("a");
var bianH=getClass("fuzhuangxiebaoneirongr",getClass("baoguo1")[0]);
xuanxiangka(alianJ,bianH);
var alianJi=getClass("gehumeizhuangtitleright")[0].getElementsByTagName("a");
var bianHi=getClass("gehumeizhuangneirongr",getClass("baoguo2")[0]);
xuanxiangka(alianJi,bianHi);
var alianJie=getClass("shoujitongxuntitleright")[0].getElementsByTagName("a");
var bianHia=getClass("fuzhuangxiebaoneirongr",getClass("baoguo1")[1]);
xuanxiangka(alianJie,bianHia);
var blianJ=getClass("jiayongdianqititleright")[0].getElementsByTagName("a");
var cianH=getClass("fuzhuangxiebaoneirongr",getClass("baoguo1")[2]);
xuanxiangka(blianJ,cianH);
var blianJi=getClass("jiayongshumatitleright")[0].getElementsByTagName("a");
var cianHi=getClass("fuzhuangxiebaoneirongr",getClass("baoguo1")[3]);
xuanxiangka(blianJi,cianHi);
var blianJia=getClass("yundongjianshentitleright")[0].getElementsByTagName("a");
var cianHia=getClass("gehumeizhuangneirongr",getClass("baoguo2")[1]);
xuanxiangka(blianJia,cianHia);
var clianJ=getClass("yundongjianshentitleright")[1].getElementsByTagName("a");
var dianH=getClass("gehumeizhuangneirongr",getClass("baoguo2")[2]);
xuanxiangka(clianJ,dianH);
var clianJi=getClass("yundongjianshentitleright")[2].getElementsByTagName("a");
var dianHi=getClass("gehumeizhuangneirongr",getClass("baoguo2")[3]);
xuanxiangka(clianJi,dianHi);
var clianJia=getClass("yundongjianshentitleright")[3].getElementsByTagName("a");
var dianHia=getClass("gehumeizhuangneirongr",getClass("baoguo2")[4]);
xuanxiangka(clianJia,dianHia);
var clianJian=getClass("yundongjianshentitleright")[4].getElementsByTagName("a");
var dianHian=getClass("gehumeizhuangneirongr",getClass("baoguo2")[5]);
xuanxiangka(clianJian,dianHian);

function xuanxiangka(links,lists){  //选项卡打包函数
		for(var i=0;i<links.length;i++){
	    	links[i].index=i;

			links[i].onmouseover=function(){
				for(var j=0;j<links.length;j++){
					lists[j].style.display="none";
					links[j].className="";
				}
				lists[this.index].style.display="block";
				links[this.index].className="bianK";
			}
		}
	}


	var dongX=getClass("tesezhengwenlrt")[0].getElementsByTagName("img")[0];
	// dongX.onmouseover=function(){
	// 	animate(dongX,{marginLeft:-20},1000);
	// }
	// dongX.onmouseout=function(){
	// 	animate(dongX,{marginLeft:0},1000);
	// }
	var dongZ=getClass("tiantiandijianrleft")[0].getElementsByTagName("img")[0];
	var dongY=getClass("chaoliuleft")[0].getElementsByTagName("img")[0];
	var movePic=getClass("tiantiandijianrright");
	for(var a=0;a<movePic.length;a++){//循环获取movePic中的img标签进行操作
		yidong(movePic[a].getElementsByTagName("img")[0]);
	}
	yidong(dongX)
	yidong(dongY)
	yidong(dongZ)
	function yidong(obj){    //鼠标移动到图片后图片向左移动的动画效果打包函数
		obj.onmouseover=function(){
			animate(obj,{marginLeft:-10});
		}
		obj.onmouseout=function(){
			animate(obj,{marginLeft:0});
		}
	}

	var ceB=getClass("cebian0");
	// for(var i=0;i<ceB.length;i++){
	// 	ceB[i].onmouseover=function(){
	// 		animate(ceB[i],{width:94},1000);
	// 	}
	// 	ceB[i].onmouseout=function(){
	// 		animate(ceB[i],{width:34},1000);
	// 	}
	// }
	for(var i=0;i<ceB.length;i++){
		cebian(ceB[i]);
	}
	function cebian(obj){    //侧边栏的鼠标移动上去后的  外移内容效果  
		obj.onmouseover=function(){
		animate(obj,{width:84},300,Tween.Quad.easeIn);
		obj.style.zIndex=99;
		}
	obj.onmouseout=function(){
		animate(obj,{width:34},600,Tween.Bounce.easeOut);
	}
	}



	var imgs=getClass("img-box")[0];
	var biGs=getClass("change-box")[0];
	var imgsW=imgs.getElementsByTagName("img");
	var w=parseInt(getStyle(imgsW[0],"width"));
	var bTNs=getClass("change-btn")[0].getElementsByTagName("span");
	var leftBtns=getClass("left-btn")[0];
	var btnLeft=getClass("LefT")[0];
	var btnRight=getClass("RighT")[0];

	var bTNs1=getClass("change-btn1")[0].getElementsByTagName("span");
	var leftBtns1=getClass("left-btn1")[0];
	var btnLeft1=getClass("LefT")[0];
	var btnRight1=getClass("RighT")[0];
	var imgs1=getClass("img-box1")[0];
	var biGs1=getClass("change-box1")[0];
	var imgsW2=imgs1.getElementsByTagName("img");
	var w2=parseInt(getStyle(imgsW2[0],"width"));

     // *
	var bTNs11=getClass("change-btn")[4].getElementsByTagName("span");
	var leftBtns11=getClass("left-btn")[4];
	var btnLeft11=getClass("LefT")[4];
	var btnRight11=getClass("RighT")[4];
	var imgs11=getClass("img-box3")[0];
	var biGs11=getClass("change-box3")[0];
	var imgsW3=imgs11.getElementsByTagName("img");
	var w3=parseInt(getStyle(imgsW3[0],"width"));

	var bTNs12=getClass("change-btn")[5].getElementsByTagName("span");
	var leftBtns12=getClass("left-btn")[5];
	var btnLeft12=getClass("LefT")[5];
	var btnRight12=getClass("RighT")[5];
	var imgs12=getClass("img-box3")[1];
	var biGs12=getClass("change-box3")[1];
	

	var bTNs6=getClass("change-btn1")[1].getElementsByTagName("span");
	var leftBtns6=getClass("left-btn1")[1];
	var btnLeft6=getClass("LefT1")[1];
	var btnRight6=getClass("RighT1")[1];
	var imgs6=getClass("img-box1")[1];
	var biGs6=getClass("change-box1")[1];

	var bTNs7=getClass("change-btn1")[2].getElementsByTagName("span");
	var leftBtns7=getClass("left-btn1")[2];
	var btnLeft7=getClass("LefT1")[2];
	var btnRight7=getClass("RighT1")[2];
	var imgs7=getClass("img-box1")[2];
	var biGs7=getClass("change-box1")[2];

	var bTNs8=getClass("change-btn1")[3].getElementsByTagName("span");
	var leftBtns8=getClass("left-btn1")[3];
	var btnLeft8=getClass("LefT1")[3];
	var btnRight8=getClass("RighT1")[3];
	var imgs8=getClass("img-box1")[3];
	var biGs8=getClass("change-box1")[3];

	var bTNs9=getClass("change-btn1")[4].getElementsByTagName("span");
	var leftBtns9=getClass("left-btn1")[4];
	var btnLeft9=getClass("LefT1")[4];
	var btnRight9=getClass("RighT1")[4];
	var imgs9=getClass("img-box1")[4];
	var biGs9=getClass("change-box1")[4];

	var bTNs10=getClass("change-btn1")[5].getElementsByTagName("span");
	var leftBtns10=getClass("left-btn1")[5];
	var btnLeft10=getClass("LefT1")[5];
	var btnRight10=getClass("RighT1")[5];
	var imgs10=getClass("img-box2")[3];
	var biGs10=getClass("change-box2")[3];

	var imgs3=getClass("img-box2")[0];
	var biGs3=getClass("change-box2")[0];
	var bTNs3=getClass("change-btn")[1].getElementsByTagName("span");
	var leftBtns3=getClass("left-btn")[1];
	var btnLeft3=getClass("LefT")[1];
	var btnRight3=getClass("RighT")[1];

	var imgs4=getClass("img-box2")[1];
	var biGs4=getClass("change-box2")[1];
	var bTNs4=getClass("change-btn")[2].getElementsByTagName("span");
	var leftBtns4=getClass("left-btn")[2];
	var btnLeft4=getClass("LefT")[2];
	var btnRight4=getClass("RighT")[2];

	var imgs5=getClass("img-box2")[2];
	var biGs5=getClass("change-box2")[2];
	var bTNs5=getClass("change-btn")[3].getElementsByTagName("span");
	var leftBtns5=getClass("left-btn")[3];
	var btnLeft5=getClass("LefT")[3];
	var btnRight5=getClass("RighT")[3];

	var imgs2=getClass("huaDong")[0];
	var biGs2=getClass("jinrituijianright")[0];
	var imgsW1=imgs2.getElementsByTagName("img");
	var w1=parseInt(getStyle(imgsW1[0],"width"))*4;
	var btnLeft2=getClass("huadonglan")[0].getElementsByTagName("a")[0];
	var btnRight2=getClass("huadonglan1")[0].getElementsByTagName("a")[0];

	//今日推荐轮播效果
	var n=0;
	var f;
	function dongXiao(){
		n++;
		if(n==imgsW1.length/4){
			n=0;
		}
		animate(imgs2,{marginLeft:-n*w1},500)
	}
	f=setInterval(dongXiao,2000)
	biGs2.onmouseover=function(){
		clearInterval(f);
	}
	biGs2.onmouseout=function(){
		f=setInterval(dongXiao,2000)
	}
	btnRight2.onclick=function(){
		dongXiao();
	}
	btnLeft2.onclick=function(){
		n--;
		if(n==-1){
			n=imgsW1.length/4-1;
		}
		animate(imgs2,{marginLeft:-n*w1},500)
	}


	//下面是热门中的轮播效果打包函数和调用
	baozhuang(imgs12,biGs12,bTNs12,leftBtns12,btnLeft12,btnRight12,w3,imgsW3);
	baozhuang(imgs11,biGs11,bTNs11,leftBtns11,btnLeft11,btnRight11,w3,imgsW3);
	baozhuang(imgs10,biGs10,bTNs10,leftBtns10,btnLeft10,btnRight10,w,imgsW);
	baozhuang(imgs9,biGs9,bTNs9,leftBtns9,btnLeft9,btnRight9,w2,imgsW2);
	baozhuang(imgs8,biGs8,bTNs8,leftBtns8,btnLeft8,btnRight8,w2,imgsW2);
	baozhuang(imgs7,biGs7,bTNs7,leftBtns7,btnLeft7,btnRight7,w2,imgsW2);
	baozhuang(imgs6,biGs6,bTNs6,leftBtns6,btnLeft6,btnRight6,w2,imgsW2);
	baozhuang(imgs5,biGs5,bTNs5,leftBtns5,btnLeft5,btnRight5,w,imgsW);
	baozhuang(imgs4,biGs4,bTNs4,leftBtns4,btnLeft4,btnRight4,w,imgsW);
	baozhuang(imgs3,biGs3,bTNs3,leftBtns3,btnLeft3,btnRight3,w,imgsW);
	baozhuang(imgs,biGs,bTNs,leftBtns,btnLeft,btnRight,w,imgsW);
    baozhuang(imgs1,biGs1,bTNs1,leftBtns1,btnLeft1,btnRight1,w2,imgsW2);
	function baozhuang(imgs,biGs,bTNs,leftBtns,btnLeft,btnRight,w,imgsW){
	var m=0;
	var t;
	function dongXiao(){
		m++;
		if(m==bTNs.length){
			m=0;
		}
		for(var i=0;i<bTNs.length;i++){
			bTNs[i].className="";
		}
		animate(imgs,{marginLeft:-m*w},500)
		bTNs[m].className="choosed";
	}

	t=setInterval(dongXiao,2000);

	biGs.onmouseover=function(){
		leftBtns.style.display="block";
		clearInterval(t);
	}

	biGs.onmouseout=function(){
		leftBtns.style.display="none";
		t=setInterval(dongXiao,2000)
	}

	for(var j=0;j<bTNs.length;j++){
		bTNs[j].index=j;
		bTNs[j].onclick=function(){
			for(var i=0;i<imgsW.length;i++){
			bTNs[i].className="";
		}
		animate(imgs,{marginLeft:-this.index*w},500)
		bTNs[this.index].className="choosed";
		m=this.index;
		}
	}

	btnRight.onclick=function(){
		dongXiao();
	}
	btnLeft.onclick=function(){
		m--;
		if(m==-1){
			m=imgsW.length-1;
		}
		for(var i=0;i<imgsW.length;i++){
			bTNs[i].className="";
		}
		animate(imgs,{marginLeft:-m*w},500)
		bTNs[m].className="choosed";
	}



var outerBox=getClass("sj-outBox");
	var touchBox=getClass("sj-imgBox");
	for(var i=0;i<outerBox.length;i++){
		touchBox[i].index=i;
		touchBox[i].onmouseover=function(){
			animate(outerBox[this.index],{right:40},300);
			touchBox[this.index].style.background="#c81623";
	}
		touchBox[i].onmouseout=function(){
			var m=this.index;
			animate(outerBox[this.index],{right:-22},300,function(){
				touchBox[m].style.background="#7a6e6e";
			})

   }
}




}


   //电梯制作

   var elevators=getClass("sj-elevator");
   //1f
   elevators[0].onmouseover=function(){
   	  elevators[0].innerHTML="服饰";
   	  elevators[0].style.background="#c81623";
   	  elevators[0].style.color="white";
   }
   elevators[0].onmouseout=function(){
   	  elevators[0].innerHTML="1F";
   	  elevators[0].style.background="white";
   	  elevators[0].style.color="black";
   }
   //2f
   elevators[1].onmouseover=function(){
   	  elevators[1].innerHTML="美妆";
   	  elevators[1].style.background="#c81623";
   	  elevators[1].style.color="white";
   }
   elevators[1].onmouseout=function(){
   	  elevators[1].innerHTML="2F";
   	  elevators[1].style.background="white";
   	  elevators[1].style.color="black";
   }
   //3f
   elevators[2].onmouseover=function(){
   	  elevators[2].innerHTML="手机";
   	  elevators[2].style.background="#c81623";
   	  elevators[2].style.color="white";
   }
   elevators[2].onmouseout=function(){
   	  elevators[2].innerHTML="3F";
   	  elevators[2].style.background="white";
   	  elevators[2].style.color="black";
   }
   //4f
   elevators[3].onmouseover=function(){
   	  elevators[3].innerHTML="家电";
   	  elevators[3].style.background="#c81623";
   	  elevators[3].style.color="white";
   }
   elevators[3].onmouseout=function(){
   	  elevators[3].innerHTML="4F";
   	  elevators[3].style.background="white";
   	  elevators[3].style.color="black";
   }
   //5f
   elevators[4].onmouseover=function(){
   	  elevators[4].innerHTML="数码";
   	  elevators[4].style.background="#c81623";
   	  elevators[4].style.color="white";
   }
   elevators[4].onmouseout=function(){
   	  elevators[4].innerHTML="5F";
   	  elevators[4].style.background="white";
   	  elevators[4].style.color="black";
   }
   //6f
   elevators[5].onmouseover=function(){
   	  elevators[5].innerHTML="运动";
   	  elevators[5].style.background="#c81623";
   	  elevators[5].style.color="white";
   }
   elevators[5].onmouseout=function(){
   	  elevators[5].innerHTML="6F";
   	  elevators[5].style.background="white";
   	  elevators[5].style.color="black";
   }
   //7f
   elevators[6].onmouseover=function(){
   	  elevators[6].innerHTML="居家";
   	  elevators[6].style.background="#c81623";
   	  elevators[6].style.color="white";
   }
   elevators[6].onmouseout=function(){
   	  elevators[6].innerHTML="7F";
   	  elevators[6].style.background="white";
   	  elevators[6].style.color="black";
   }
   //8f
   elevators[7].onmouseover=function(){
   	  elevators[7].innerHTML="母婴";
   	  elevators[7].style.background="#c81623";
   	  elevators[7].style.color="white";
   }
   elevators[7].onmouseout=function(){
   	  elevators[7].innerHTML="8F";
   	  elevators[7].style.background="white";
   	  elevators[7].style.color="black";
   }
   //9f
   elevators[8].onmouseover=function(){
   	  elevators[8].innerHTML="食品";
   	  elevators[8].style.background="#c81623";
   	  elevators[8].style.color="white";
   }
   elevators[8].onmouseout=function(){
   	  elevators[8].innerHTML="9F";
   	  elevators[8].style.background="white";
   	  elevators[8].style.color="black";
   }
   //10f
   elevators[9].onmouseover=function(){
   	  elevators[9].innerHTML="图书";
   	  elevators[9].style.background="#c81623";
   	  elevators[9].style.color="white";
   }
   elevators[9].onmouseout=function(){
   	  elevators[9].innerHTML="10F";
   	  elevators[9].style.background="white";
   	  elevators[9].style.color="black";
   }
   //11f
   elevators[10].onmouseover=function(){
   	  elevators[10].innerHTML="服务";
   	  elevators[10].style.background="#c81623";
   	  elevators[10].style.color="white";
   }
   elevators[10].onmouseout=function(){
   	  elevators[10].innerHTML="11F";
   	  elevators[10].style.background="white";
   	  elevators[10].style.color="black";
   }
   var arrH=[1513,2288,3027,3643,4242,5017,5615,6196,6777,7569,8150];
   var arrM=["1F","2F","3F","4F","5F","6F","7F","8F","9F","10F","11F"];
   var arrN=["服饰","美妆","手机","家电","数码","运动","居家","母婴","食品","图书","服务"];
   for(var a=0;a<elevators.length;a++){
   	elevators[a].index=a;
   	elevators[a].onclick=function(){
   		var b=this.index;
   		animate(document.body,{scrollTop:arrH[b]},600);
   		animate(document.documentElement,{scrollTop:arrH[b]},600);
   	}
   }





var bannerimg=getClass("banner")[0].getElementsByTagName("img");
var jinrituijianimg=getClass("jinrituijian")[0].getElementsByTagName("img");
var cainixihuanimg=getClass("cainixihuan")[0].getElementsByTagName("img");
var jingdongteseimg=getClass("jingdongtese")[0].getElementsByTagName("img");
var fuzhuangxiebaoimg=getClass("fuzhuangxiebao")[0].getElementsByTagName("img");
var fengepinpaiimg=getClass("fengepinpai")[0].getElementsByTagName("img");
var fengepinpai1img=getClass("fengepinpai1")[0].getElementsByTagName("img");
var gehumeizhuangimg=getClass("fuzhuangxiebao")[1].getElementsByTagName("img");
var fengepinpaiimg1=getClass("fengepinpai")[1].getElementsByTagName("img");
var fengepinpai1img1=getClass("fengepinpai1")[1].getElementsByTagName("img");
var shoujitongxunimg=getClass("fuzhuangxiebao")[2].getElementsByTagName("img");
var fengepinpai1img2=getClass("fengepinpai1")[2].getElementsByTagName("img");
var jiayongdianqiimg=getClass("fuzhuangxiebao")[3].getElementsByTagName("img");
var fengepinpai1img3=getClass("fengepinpai1")[3].getElementsByTagName("img");
var diannaoshumaimg=getClass("fuzhuangxiebao")[4].getElementsByTagName("img");
var fengepinpai1img4=getClass("fengepinpai1")[4].getElementsByTagName("img");
var fengepinpaiimg4=getClass("fengepinpai")[2].getElementsByTagName("img");
var yundongjianshenimg=getClass("fuzhuangxiebao")[5].getElementsByTagName("img");
var fengepinpai1img5=getClass("fengepinpai1")[5].getElementsByTagName("img");
var jujiashenghuoimg=getClass("fuzhuangxiebao")[6].getElementsByTagName("img");
var fengepinpai1img6=getClass("fengepinpai1")[6].getElementsByTagName("img");
var muyinwanjuimg=getClass("fuzhuangxiebao")[7].getElementsByTagName("img");
var fengepinpai1img7=getClass("fengepinpai1")[7].getElementsByTagName("img");
var shipinbaojianimg=getClass("fuzhuangxiebao")[8].getElementsByTagName("img");
var fengepinpai1img8=getClass("fengepinpai1")[8].getElementsByTagName("img");
var fengepinpaiimg8=getClass("fengepinpai")[3].getElementsByTagName("img");
var tushuyinxiangimg=getClass("fuzhuangxiebao")[9].getElementsByTagName("img");
var fengepinpai1img9=getClass("fengepinpai1")[9].getElementsByTagName("img");
var shenghuofuwuimg=getClass("fuzhuangxiebao")[10].getElementsByTagName("img");
window.onscroll=function(){
	var doc=document.body.scrollTop?document.body:document.documentElement;
	for(var b=0;b<elevators.length;b++){
	if(doc.scrollTop>arrH[b]){
		for(var a=0;a<elevators.length;a++){
			elevators[a].style.background="white";
			elevators[a].innerHTML=arrM[a];
			elevators[a].style.color="black";
		}
		elevators[b].style.background="#c81623";
		elevators[b].innerHTML=arrN[b];
		elevators[b].style.color="white";
	}

}

    
    if(doc.scrollTop>10){
    	for(var z=0;z<bannerimg.length;z++){
    		bannerimg[z].src=bannerimg[z].getAttribute("asrc");
    	}
    }	
    if(doc.scrollTop>200){
    	for(var z=0;z<jinrituijianimg.length;z++){
    		jinrituijianimg[z].src=jinrituijianimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>300){
    	for(var z=0;z<cainixihuanimg.length;z++){
    		cainixihuanimg[z].src=cainixihuanimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>600){
    	for(var z=0;z<jingdongteseimg.length;z++){
    		jingdongteseimg[z].src=jingdongteseimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>1000){
    	for(var z=0;z<fuzhuangxiebaoimg.length;z++){
    		fuzhuangxiebaoimg[z].src=fuzhuangxiebaoimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>1500){
    	for(var z=0;z<fengepinpaiimg.length;z++){
    		fengepinpaiimg[z].src=fengepinpaiimg[z].getAttribute("asrc");
    		fengepinpai1img[z].src=fengepinpai1img[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>1800){
    	for(var z=0;z<gehumeizhuangimg.length;z++){
    		gehumeizhuangimg[z].src=gehumeizhuangimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>2300){
    	for(var z=0;z<fengepinpaiimg1.length;z++){
    		fengepinpaiimg1[z].src=fengepinpaiimg1[z].getAttribute("asrc");
    		fengepinpai1img1[z].src=fengepinpai1img1[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>2600){
    	for(var z=0;z<shoujitongxunimg.length;z++){
    		shoujitongxunimg[z].src=shoujitongxunimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>3000){
    	for(var z=0;z<fengepinpai1img2.length;z++){
    		fengepinpai1img2[z].src=fengepinpai1img2[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>3200){
    	for(var z=0;z<jiayongdianqiimg.length;z++){
    		jiayongdianqiimg[z].src=jiayongdianqiimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>3600){
    	for(var z=0;z<fengepinpai1img3.length;z++){
    		fengepinpai1img3[z].src=fengepinpai1img3[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>3700){
    	for(var z=0;z<diannaoshumaimg.length;z++){
    		diannaoshumaimg[z].src=diannaoshumaimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>4200){
    	for(var z=0;z<fengepinpai1img4.length;z++){
    		fengepinpaiimg4[z].src=fengepinpaiimg4[z].getAttribute("asrc");
    		fengepinpai1img4[z].src=fengepinpai1img4[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>4500){
    	for(var z=0;z<yundongjianshenimg.length;z++){
    		yundongjianshenimg[z].src=yundongjianshenimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>4900){
    	for(var z=0;z<fengepinpai1img5.length;z++){
    		fengepinpai1img5[z].src=fengepinpai1img5[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>5100){
    	for(var z=0;z<jujiashenghuoimg.length;z++){
    		jujiashenghuoimg[z].src=jujiashenghuoimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>5590){
    	for(var z=0;z<fengepinpai1img6.length;z++){
    		fengepinpai1img6[z].src=fengepinpai1img6[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>5690){
    	for(var z=0;z<muyinwanjuimg.length;z++){
    		muyinwanjuimg[z].src=muyinwanjuimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>6190){
    	for(var z=0;z<fengepinpai1img7.length;z++){
    		fengepinpai1img7[z].src=fengepinpai1img7[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>6290){
    	for(var z=0;z<shipinbaojianimg.length;z++){
    		shipinbaojianimg[z].src=shipinbaojianimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>6790){
    	for(var z=0;z<fengepinpai1img8.length;z++){
    		fengepinpaiimg8[z].src=fengepinpaiimg8[z].getAttribute("asrc");
    		fengepinpai1img8[z].src=fengepinpai1img8[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>7090){
    	for(var z=0;z<tushuyinxiangimg.length;z++){
    		tushuyinxiangimg[z].src=tushuyinxiangimg[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>7500){
    	for(var z=0;z<fengepinpai1img9.length;z++){
    		fengepinpai1img9[z].src=fengepinpai1img9[z].getAttribute("asrc");
    	}
    }
    if(doc.scrollTop>7590){
    	for(var z=0;z<shenghuofuwuimg.length;z++){
    		shenghuofuwuimg[z].src=shenghuofuwuimg[z].getAttribute("asrc");
    	}
    }
}	



	var songzhi=getClass("songzhi")[0];
	var addsong=getClass("addsong")[0];
	var clears=addsong.getElementsByTagName("a");
	songzhi.onmouseover=function(){
		for(var ml=0;ml<cleararr.length;ml++){
			cleararr[ml].style.display="none";
			cleararr1[ml].style.background="";
		}
		songzhi.style.background="white";
		addsong.style.display="block";
	}
	hover(addsong,function(){},function(){
		addsong.style.display="none";
		songzhi.style.background="";
	})
	addsong.onclick=function(e){
		var ev=e||window.event;
		var elm=ev.target||ev.srcElement;
		if(elm.nodeName=="A"){
			for(var f=0;f<clears.length;f++){
				clears[f].style.background="#fff";
				clears[f].style.color="#666";
			}
			elm.style.background="#c81623";
			elm.style.color="white";
		}
	}


	var nihaoa=getClass("nihao")[0].getElementsByTagName("a");
	var myjd=getClass("myjd")[0];
	var phonejd=getClass("phonejd")[0];
	var focusjd=getClass("focusjd")[0];
	var foryou=getClass("foryou")[0];
	var towhere=getClass("towhere")[0];
	cleararr=[addsong,myjd,phonejd,focusjd,foryou,towhere];
	cleararr1=[songzhi,nihaoa[3],nihaoa[6],nihaoa[7],nihaoa[8],nihaoa[9]];
	titles(nihaoa[3],myjd);
	titles(nihaoa[6],phonejd);
	titles(nihaoa[7],focusjd);
	titles(nihaoa[8],foryou);
	titles(nihaoa[9],towhere);
function titles(nihaoa,myjd){
	nihaoa.onmouseover=function(){
		for(var ml=0;ml<cleararr.length;ml++){
			cleararr[ml].style.display="none";
			cleararr1[ml].style.background="";
			myjd.style.display="block";
		}
		nihaoa.style.background="#fff";
	}
	hover(myjd,function(){
		for(var ml=0;ml<cleararr.length;ml++){
			cleararr[ml].style.display="none";
			myjd.style.display="block";
		}
	},function(){
		myjd.style.display="none";
		nihaoa.style.background="";
	})
}




var closejiayong=getClass("closejiayong");
var addcontent=getClass("addcontent");


hover(closejiayong[0],function(){
	addcontent[0].style.display="block";
},function(){
	addcontent[0].style.display="none";
})

hover(closejiayong[1],function(){
	addcontent[1].style.display="block";
},function(){
	addcontent[1].style.display="none";
})


hover(closejiayong[2],function(){
	addcontent[2].style.display="block";
},function(){
	addcontent[2].style.display="none";
})

hover(closejiayong[3],function(){
	addcontent[3].style.display="block";
},function(){
	addcontent[3].style.display="none";
})

hover(closejiayong[4],function(){
	addcontent[4].style.display="block";
},function(){
	addcontent[4].style.display="none";
})

hover(closejiayong[5],function(){
	addcontent[5].style.display="block";
},function(){
	addcontent[5].style.display="none";
})

hover(closejiayong[6],function(){
	addcontent[6].style.display="block";
},function(){
	addcontent[6].style.display="none";
})

hover(closejiayong[7],function(){
	addcontent[7].style.display="block";
},function(){
	addcontent[7].style.display="none";
})

hover(closejiayong[8],function(){
	addcontent[8].style.display="block";
},function(){
	addcontent[8].style.display="none";
})

hover(closejiayong[9],function(){
	addcontent[9].style.display="block";
},function(){
	addcontent[9].style.display="none";
})

hover(closejiayong[10],function(){
	addcontent[10].style.display="block";
},function(){
	addcontent[10].style.display="none";
})

hover(closejiayong[11],function(){
	addcontent[11].style.display="block";
},function(){
	addcontent[11].style.display="none";
})

hover(closejiayong[12],function(){
	addcontent[12].style.display="block";
},function(){
	addcontent[12].style.display="none";
})

hover(closejiayong[13],function(){
	addcontent[13].style.display="block";
},function(){
	addcontent[13].style.display="none";
})

hover(closejiayong[14],function(){
	addcontent[14].style.display="block";
},function(){
	addcontent[14].style.display="none";
})















}