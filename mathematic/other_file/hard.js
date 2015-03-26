/**
 * @author wei
 */
var q;

function hard(width, height, top, left){
	this.width = width;
	this.height = height;
	this.top = top;
	this.left = left;
}

hard.prototype = {
	
	createQuestionBox: function(){	//創造題目空間
		var div = document.createElement('div');
		div.style.position = "absolute";
		div.style.background = "-webkit-gradient(linear,left top,right bottom, from(#87cefa),to(#afeeee))";
		div.id = "question_box";
		div.style.width = this.width+"px";
		div.style.height = this.height+"px";
		div.style.top = this.top+"px";
		div.style.left = this.left+"px";
		$(div).css("opacity","0.8");
		$(div).css("-webkit-box-shadow","5px 5px 10px #BC8888");
		$(div).css("-webkit-border-radius","20px");
		o.appendChild(div); 
		q = document.getElementById("question_box");
	},
	
	createNumberBox: function(top, left, id){	//創造數字空格
		var div = document.createElement('div');
		div.style.position = "absolute";
		div.id = id;
		div.style.width = "80px";
		div.style.height = "80px";
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.textAlign = "center";
		$(div).css("background-color","#A67E54");
		$(div).css("opacity","0.8");
		$(div).css("font-size","70px");
		$(div).css("font-family","impact");
		$(div).css("-webkit-border-radius","20px");
		q.appendChild(div); 
	},
	
	createOperatorBox: function(top, left, id){	//創造運算子空格
		var div = document.createElement('div');
		div.style.position = "absolute";
		div.id = id;
		div.style.width = "60px";
		div.style.height = "60px";
		div.style.top = top+"px";
		div.style.left = left+"px";
		$(div).css("background-color","white");
		$(div).css("opacity","0.7");
		$(div).css("font-size","55px");
		$(div).css("font-family","impact");
		$(div).css("-webkit-border-radius","20px");
		q.appendChild(div); 
	},
	
	createResultBox: function(top, left, id){	//創造結果空格
		var div = document.createElement('div');
		div.style.position = "absolute";
		div.id = id;
		div.style.width = "140px";
		div.style.height = "80px";
		div.style.top = top+"px";
		div.style.left = left+"px";
		$(div).css("background-color","#A67E54");
		div.style.fontSize = "65px";
		div.style.fontFamily = "impact";
		div.style.textAlign = "center";
		$(div).css("opacity","0.8");
		$(div).css("font-size","65px");
		$(div).css("-webkit-border-radius","20px");
		q.appendChild(div); 
	},
	
	createTrue_or_False_Box: function(top, left, id){
		var div = document.createElement('div');
		div.style.position = "absolute";
		div.id = id;
		div.style.width = "120px";
		div.style.height = "100px";
		div.style.top = top+"px";
		div.style.left = left+"px";
		$(div).css("background-color","white");
		div.style.fontSize = "65px";
		div.style.fontFamily = "impact";
		div.style.textAlign = "center";
		$(div).css("opacity","0.8");
		$(div).css("font-size","65px");
		$(div).css("-webkit-border-radius","20px");
		q.appendChild(div); 
	},
	
	createButton: function(top, left, id, text, color){
		var Butt = document.createElement('button');
		Butt.style.position = "absolute";
		Butt.id = id;
		Butt.textContent = text;
		Butt.style.width = "85px";
		Butt.style.height = "40px";
		Butt.style.top = top+"px";
		Butt.style.left = left+"px";
		$(Butt).css("color",color);
		Butt.style.fontSize = "30px";
		Butt.style.fontFamily = "impact";
		Butt.style.textAlign = "center";
		q.appendChild(Butt); 	
	}
	
	
}
