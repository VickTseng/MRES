/**
 * @author wei
 */

var t;	//工具面板空間

function tech(){	
	
}

tech.prototype = {
	
	createNumberBox: function(top, left, width, height, id){
		var div = document.createElement('div');
		div.style.position = 'absolute';
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.id = id;
		div.style.width = width+"px";
		div.style.height = height+"px";
		$(div).css("background","-webkit-gradient(linear,left top,right bottom, from(#99E353),to(#6CBD1F))");
		$(div).css("opacity","0.7");
		$(div).css("-webkit-border-radius","20px");
		$(div).css("-webkit-box-shadow","5px 5px 10px #BC8888");
		o.appendChild(div); 
	},
	
	createNumber: function(top, left, id, area, rotate){
		var div = document.createElement('div');
		div.id = id;
		div.style.position = 'absolute';
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.width = "70px";
		div.style.height = "70px";
		div.style.textAlign = "center";
		div.style.fontSize = "55px";
		div.style.fontFamily = "impact";
		$(div).css("background","#BCD");
		$(div).css("-webkit-border-radius","20px");
		$(div).css("-webkit-box-shadow","5px 5px 10px #BC8888");
		$(div).css("-webkit-transform",["rotate(",rotate,"deg)"].join(""));
		document.getElementById(area).appendChild(div); 
	},
	
	createOperator: function(top, left, id, area, rotate){
		var div = document.createElement('div');
		div.id = id;
		div.style.position = 'absolute';
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.width = "70px";
		div.style.height = "70px";
		div.style.textAlign = "center";
		div.style.fontSize = "55px";
		div.style.fontFamily = "impact";
		$(div).css("background","#BCD");
		$(div).css("-webkit-border-radius","20px");
		$(div).css("-webkit-box-shadow","5px 5px 10px #BC8888");
		$(div).css("-webkit-transform",["rotate(",rotate,"deg)"].join(""));
		document.getElementById(area).appendChild(div); 
	},
	
	createClean: function(top,left,width,height,id,area,rotate,text){
		var div = document.createElement('div');
		div.style.position = 'absolute';
		div.id = id;
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.width = width+"px";
		div.style.height = height+"px";
		$(div).html(text);
		$(div).css("text-align","center");
		$(div).css("font-size","45px");
		$(div).css("font-family","Impact");
		$(div).css("background","-webkit-gradient(linear,left top,right bottom, from(rgb(255,15,15)),to(rgb(255,113,113)))");
		$(div).css("-webkit-box-shadow","5px 5px 10px #BC8888");
		$(div).css("-webkit-border-radius","10px");
		$(div).css("-webkit-transform",["rotate(",rotate,"deg)"].join(""));
		document.getElementById(area).appendChild(div); 
	},
	
	createCombineArea: function(top, left, id, rotate){
		var div = document.createElement('div');
		div.style.position = 'absolute';
		div.id = id;
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.textAlign = "center";
		div.style.fontSize = "60px";
		div.style.width = "150px";
		div.style.height = "150px";
		div.style.borderStyle = "outset";
		div.style.borderColor = "rgba(50, 50, 239, 0.5)";
		$(div).css("-webkit-transform",["rotate(",rotate,"deg)"].join(""));	
		o.appendChild(div);
	},
	
	createOperatorArea: function(top, left, id, rotate){
		var div = document.createElement('div');
		div.style.position = 'absolute';
		div.id = id;
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.textAlign = "center";
		div.style.fontSize = "60px";
		div.style.width = "150px";
		div.style.height = "150px";
		div.style.borderStyle = "outset";
		div.style.borderColor = "rgba(50, 50, 239, 0.5)";
		$(div).css("-webkit-transform",["rotate(",rotate,"deg)"].join(""));
		o.appendChild(div);
	},
	
	createText: function(top,left,id,text,rotate,color){
		var div = document.createElement('div');
		div.style.position = 'absolute';
		div.id = id;
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.textAlign = "center";
		div.style.fontSize = "50px";
		div.style.color = color;
		div.textContent = text;
		$(div).css("-webkit-transform",["rotate(",rotate,"deg)"].join(""));
		o.appendChild(div);
	},
	
	createImageArea: function(top, left, id, rotation){	
		var div = document.createElement('div');
		div.id = id;
		div.style.position = "absolute";
		div.style.width = "500px";
		div.style.height = "230px";
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.borderStyle = "outset";
		div.style.borderColor = "rgba(20, 126, 239, 0.5)";
		div.style.borderWidth = "5px";
		$(div).css("-webkit-transform",["rotate(",rotation,"deg)"].join(""));
		o.appendChild(div);
		t = document.getElementById(id);
	},	
	
	createObjectCircle: function(top, left, id, rotation){
		var div = document.createElement('div');
		div.id = id;
		div.style.position = "absolute";
		div.style.width = "100px";
		div.style.height = "100px";
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.background = "#BCA";
		t.appendChild(div);
	},
	
	createObjectSquare: function(top, left, id, rotation){
		var div = document.createElement('div');
		div.id = id;
		div.style.position = "absolute";
		div.style.width = "100px";
		div.style.height = "100px";
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.background = "#ACA";
		t.appendChild(div);
	}
	
}
