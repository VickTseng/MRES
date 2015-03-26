/**
 * @author wei
 */
var q;	//問題面板空間


function easy(width, height, top, left){
	this.width = width;
	this.height = height;
	this.top = top;
	this.left = left;
}

easy.prototype = {
	
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
		div.style.size = "55px";
		div.style.fontFamily = "impact";
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
		div.style.textAlign = "center";
		div.style.size = "55px";
		div.style.fontFamily = "impact";
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
	},
	
	createPicBox: function(top, left, id){
		var canvas = document.createElement('canvas');
		canvas.style.position = "absolute";
		canvas.id = id;
		canvas.style.width = "180px";
		canvas.style.height	= "250px";
		canvas.style.top = top+"px";
		canvas.style.left = left+"px";
		canvas.style.backgroundColor = "#B67E54";
		$(canvas).css("-webkit-border-radius","15px");
		q.appendChild(canvas);
	},
	
	initial: function(){
		for(var a=1;a<=6;a++){
			eval("var num"+a+"=Math.round(Math.random()*(15-1)+1)");	//亂數跑固定空格數字
		}
		
		for(var i=1; i<=4; i++){	//跑運算子		which4為第二列正確答案
			eval("var which"+i+"=Math.round(Math.random()*3)");
		}
		
		

		n1 = num1,n3 = num3, o1 = operator[which1], o2 = operator[which2]; //存入全域變數中   n1、n2為固定有的數字
		n4 = num4, n5 = num5, n6=num6, o3 = operator[which3], c1 = operator[which4];
		o3 = operator[which3];	

		row1_sum = eval("Math.round(num1"+o1+"num2"+o2+"num3)");

		
		$("#cloze1").html(num1), $("#cloze3").html(num3), $("#fixed_box1").html(cre.translateOperator(o1)), $("#fixed_box2").html(cre.translateOperator(o2)), $("#cloze5").html(row1_sum);
		
		
		
		
	},
	
	next: function(){
		$("#cloze2").html(""), $("#fixed_box6").html(""), $("#true_or_false").html(""), $("#true_or_false2").html("");
		$("#combine_number1").html(""), $("#combine_number2").html(""), $("#combine_number3").html("");
		$("#operator_area1").html(""), $("#operator_area2").html(""), $("#operator_area3").html("");
		$("#true_or_false3").html(""), cre.createClear("Picture_cloze2");
		n2 = null, o4 = null;
	},
	
	verify: function(){
		if(n2 != null){
			answer = eval("n1"+o1+"n2"+o2+"n3");
			if(row1_sum ==answer){
				$("#true_or_false").html("○"),$("#true_or_false").css("color","green"),$("#true_or_false").css("font-size",80);
			}else{
				$("#true_or_false").html("×"),$("#true_or_false").css("color","red"),$("#true_or_false").css("font-size",80);
			}		
		}else if(n2 == null){
			$("#true_or_false").html("Please drag the number."),$("#true_or_false").css("color","black"),$("#true_or_false").css("font-size",26);
		}
	}
	
}
