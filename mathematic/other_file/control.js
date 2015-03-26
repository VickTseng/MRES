	var touchLayer = document.getElementById('touchLayer'); 
	var o = document.body; 
	var blockMap = new Object(); //用來處理物件狀態
	var blockArray = new Array(block, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10); //儲存每個block
	var genberate_block = new Array("b","b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"); //存放新增物件
	var answer; //存放正確答案
	var question; //存放題目
	var dot = 1; //計算Canvas上畫了多少點 

	var block = $("#block").get(0);
	block.offset = {x:0, y:0};
	block.x = $("#block").offset().left = 0;
	block.y = $("#block").offset().top = 0;
	block.identifier;
	block.id = "block";
	block.genname = "b";
	block.times = 1;
	block.text= "0";
	
	var block1 = $("#block1").get(0);
	block1.offset = {x:0, y:0};
	block1.x = 0;
	block1.y = 0;
	block1.identifier;
	block1.id = "block1";
	block1.genname = "b1";
	block1.times = 1;
	block1.text= "1";
	
	var block2 = $("#block2").get(0);
	block2.offset = {x:0, y:0};
	block2.x = $("#block2").offset().left = 0;
	block2.y = $("#block2").offset().top = 0;
	block2.identifier;
	block2.id = "block2";
	block2.genname = "b2";
	block2.times = 1;
	block2.text= "2";

	var block3 = $("#block3").get(0);
	block3.offset = {x:0, y:0};
	block3.x = $("#block3").offset().left = 0;
	block3.y = $("#block3").offset().top = 0;
	block3.identifier;
	block3.id = "block3";
	block3.genname = "b3";
	block3.times = 1;
	block3.text= "3";
	

	var block4 = $("#block4").get(0);
	block4.offset = {x:0, y:0};
	block4.x = $("#block4").offset().left = 0;
	block4.y = $("#block4").offset().top = 0;
	block4.identifier;
	block4.id = "block4";
	block4.genname = "b4";
	block4.times = 1;
	block4.text= "4";


	var block5 = $("#block5").get(0);
	block5.offset = {x:0, y:0};
	block5.x = $("#block5").offset().left = 0;
	block5.y = $("#block5").offset().top = 0;
	block5.identifier;
	block5.id = "block5";
	block5.genname = "b5";
	block5.times = 1;
	block5.text= "5";


	var block6 = $("#block6").get(0);
	block6.offset = {x:0, y:0};
	block6.x = $("#block6").offset().left = 0;
	block6.y = $("#block6").offset().top = 0;
	block6.identifier;
	block6.id = "block6";
	block6.genname = "b6";
	block6.times = 1;
	block6.text= "6";

	
	var block7 = $("#block7").get(0);
	block7.offset = {x:0, y:0};
	block7.x = $("#block7").offset().left = 0;
	block7.y = $("#block7").offset().top = 0;
	block7.identifier;
	block7.id = "block7";
	block7.genname = "b7";
	block7.times = 1;
	block7.text= "7";


	var block8 = $("#block8").get(0);
	block8.offset = {x:0, y:0};
	block8.x = $("#block8").offset().left = 0;
	block8.y = $("#block8").offset().top = 0;
	block8.identifier;
	block8.id = "block8";
	block8.genname = "b8";
	block8.times = 1;
	block8.text= "8";


	var block9 = $("#block9").get(0);
	block9.offset = {x:0, y:0};
	block9.x = $("#block9").offset().left = 0;
	block9.y = $("#block9").offset().top = 0;
	block9.identifier;
	block9.id = "block9";
	block9.genname = "b9";
	block9.times = 1;
	block9.text= "9";
	
	var block10 = $("#block10").get(0);
	block10.offset = {x:0, y:0};
	block10.x = $("#block10").offset().left = 0;
	block10.y = $("#block10").offset().top = 0;
	block10.identifier;
	block10.id = "block10";
	block10.genname = "b10";
	block10.times = 1;
	block10.text= "obj";
	
	


	
	$("#Qspace").html(test());  //初始化題目

	function createDIV(text, top, left, name) {	 //創建DIV(數字)
		var div = document.createElement(name); 
		div.innerHTML = text; 
		div.id = name;
		div.style.position = 'absolute';
		div.style.width = '0px';
		div.style.height = '0px';
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.background = 'blue';
		o.appendChild(div); 
	} 
	
	function createObj(top, left, name){	//創造物件
		var pic = document.createElement(name);
		pic.style.position = 'absolute';
		pic.id = name;
		pic.style.width = '50px';
		pic.style.height = '50px';
		pic.style.top = top+"px";
		pic.style.left = left+"px";
		pic.style.background = 'rgba(159,80,60,0.7)';
		pic.style.opacity = "0.9";
		$(pic).css("-webkit-border-radius","50px");
		o.appendChild(pic);
		
	}
	
	function test(){	//產生題目
		var operator = new Array("+", "-", "×", "÷");
		var which1 = Math.round(Math.random()*3), which2 = Math.round(Math.random()*3);
		var num1 = Math.round(Math.random()*(6-4)+4), num2 = Math.round(Math.random()*3), num3 = Math.round(Math.random()*3);
		
		if(operator[which1] == "+" && operator[which2] == "+"){			
			answer = num1 + num2 + num3; 
		}else if(operator[which1] == "+" && operator[which2] == "-"){
			answer = num1 + num2 - num3; 	
		}else if(operator[which1] == "-" && operator[which2] == "-"){
			answer = num1 - num2 - num3; 	
		}else if(operator[which1] == "-" && operator[which2] == "+"){
			answer = num1 - num2 + num3; 	
		}else if(operator[which1] == "+" && operator[which2] == "+"){
			answer = num1 + num2 + num3; 	
		}
		
		$("#Qspace").html(num1 + operator[which1] + num2 + operator[which2] + num3 + "=");  //顯示題目
		question = num1 + operator[which1] + num2 + operator[which2] + num3 + "=";
		$(".display").html("");		
	}
	
	function verify(block){
		if(answer != null){
			if(block.text == answer){
				$(".display").css("color","blue"), $(".display").css("text-decoration","underline"), $(".display").html("You got it."), $("#Qspace").html(question + block.text + " (O)");
			}else{
				$(".display").css("color","#FF0000"),$(".display").css("text-decoration","underline"), $(".display").html("You got the wrong answer."),$("#Qspace").html(question + block.text + " (X)");	
			}
		}
	}
	
	function draw_pot(dot){	//在Canvas上畫圖
		var canvas = document.getElementById('draw');
		var ctx = canvas.getContext('2d');
		canvas.width = 500;
		canvas.height = 150;
		var beginDegree = 0, EndDegree = 360 * Math.PI / 180;
		if(dot == 1){
			ctx.beginPath();  //開始繪圖
			ctx.arc(50, 50, 15, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
			ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
			ctx.fill();
		}else if(dot == 2){
			ctx.beginPath();  //開始繪圖
			ctx.arc(50, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(90, 50, 15, beginDegree, EndDegree, false); 
			ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  
			ctx.fill();
		}else if(dot == 3){
			ctx.beginPath();  //開始繪圖
			ctx.arc(50, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(90, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(130, 50, 15, beginDegree, EndDegree, false); 
			ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  
			ctx.fill();
		}else if(dot == 4){
			ctx.beginPath();  //開始繪圖
			ctx.arc(50, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(90, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(130, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(170, 50, 15, beginDegree, EndDegree, false); 
			ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  
			ctx.fill();
		}else if(dot == 5){
			ctx.beginPath();  //開始繪圖
			ctx.arc(50, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(90, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(130, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(170, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(210, 50, 15, beginDegree, EndDegree, false); 
			ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  
			ctx.fill();
		}else if(dot == 6){
			ctx.beginPath();  //開始繪圖
			ctx.arc(50, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(90, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(130, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(170, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(210, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(250, 50, 15, beginDegree, EndDegree, false); 
			ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  
			ctx.fill();
		}else if(dot == 7){
			ctx.beginPath();  //開始繪圖
			ctx.arc(50, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(90, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(130, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(170, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(210, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(250, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(290, 50, 15, beginDegree, EndDegree, false); 
			ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  
			ctx.fill();
		}else if(dot == 8){
			ctx.beginPath();  //開始繪圖
			ctx.arc(50, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(90, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(130, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(170, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(210, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(250, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(290, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(330, 50, 15, beginDegree, EndDegree, false);
			ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  
			ctx.fill();
		}else if(dot == 9){
			ctx.beginPath();  //開始繪圖
			ctx.arc(50, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(90, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(130, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(170, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(210, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(250, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(290, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(330, 50, 15, beginDegree, EndDegree, false);
			ctx.arc(370, 50, 15, beginDegree, EndDegree, false);
			ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  
			ctx.fill();
		}else if(dot > 9){
			ctx.beginPath();  //開始繪圖
			dot = 9;
			ctx.arc(50, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(90, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(130, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(170, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(210, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(250, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(290, 50, 15, beginDegree, EndDegree, false); 
			ctx.arc(330, 50, 15, beginDegree, EndDegree, false);
			ctx.arc(370, 50, 15, beginDegree, EndDegree, false);
			ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  
			ctx.fill();
		}
	}
		
		
		
	function touchstart(event){
		event.changedTouches= event.targetTouches;
		console.log(["translate(",event.changedTouches[0].pageX,"px, ",event.changedTouches[0].pageY,"px)"].join(""));	//監控座標
		
		if(event.changedTouches.length>0){	
			for(var i=0; i<blockArray.length; i++){	//判斷每個block
				for(var j=0; j<event.changedTouches.length; j++){	//判斷被哪隻手指觸碰到					
					if(event.changedTouches[j].target.id == blockArray[i].id){
						if(blockArray[i].id == "block10"){
							createObj(event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
						}else{
							createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							console.log("Start: " +blockArray[i].identifier);	
							
						}
					}
					
					if(event.changedTouches[j].target.className == "button"){	//判斷按鈕點擊
						$(".button").click();
					}
				
						
				}
				
					
			}
			
		}
			
			
			
			
			
			event.preventDefault();
		}
	
		
	
	
	function touchmove(event){
		event.changedTouches= event.targetTouches;
		for(var i=0; i<event.changedTouches.length; i++){
			var block = blockMap[event.changedTouches[i].identifier];
			
			if(block){
				block.x = block.offset.x + event.changedTouches[i].pageX;
				block.y = block.offset.y + event.changedTouches[i].pageY;
				switch (block.genname){
					case "b":
						$("b").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b").css("text-shadow","5px 5px 10px #CC9999");
						$("b").css("font-size",70);
						break;
					case "b1":
						$("b1").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b1").css("text-shadow","5px 5px 10px #CC9999");
						$("b1").css("font-size",70);
						break;
					case "b2":
						$("b2").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b2").css("text-shadow","5px 5px 10px #CC9999");
						$("b2").css("font-size",70);
						break;
					case "b3":
						$("b3").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b3").css("text-shadow","5px 5px 10px #CC9999");
						$("b3").css("font-size",70);
						break;
					case "b4":
						$("b4").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b4").css("text-shadow","5px 5px 10px #CC9999");
						$("b4").css("font-size",70);
						break;
					case "b5":
						$("b5").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b5").css("text-shadow","5px 5px 10px #CC9999");
						$("b5").css("font-size",70);
						break;
					case "b6":
						$("b6").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b6").css("text-shadow","5px 5px 10px #CC9999");
						$("b6").css("font-size",70);
						break;
					case "b7":
						$("b7").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b7").css("text-shadow","5px 5px 10px #CC9999");
						$("b7").css("font-size",70);
						break;
					case "b8":
						$("b8").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b8").css("text-shadow","5px 5px 10px #CC9999");
						$("b8").css("font-size",70);
						break;
					case "b9":
						$("b9").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b9").css("text-shadow","5px 5px 10px #CC9999");
						$("b9").css("font-size",70);
						break;
					case "b10":
						$("b10").css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("b10").css("-webkit-box-shadow","5px 5px 10px #CC9999");
						$("b10").css("font-size",70);
						break;
				}
				//block.gen_id.css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
				//console.log(block.gen_id);
							
			} 
		}
		
		
		
		
		event.preventDefault();
	}
	
	
	
	
	function touchend(event){
		event.changedTouches= event.targetTouches;
		console.log("End: " +event.changedTouches.length);
		for(var i=0; i<event.changedTouches.length; i++){
			var block =  blockMap[event.changedTouches[i].identifier];	
			if(block){	//當物件存在時跑判斷
				if($(block.genname).length>0){	//當手指離開時消除物件
					if(block.genname!="b10" && $(block.genname).offset().left>=350 && $(block.genname).offset().top>=30 && $(block.genname).offset().left<=850 && $(block.genname).offset().top<=180){
						verify(block);
						block.x=0, block.y=0;
						$(block.genname).remove();								
					}
					if(block.genname=="b10" && ($(block.genname).offset().left >= 350) &&($(block.genname).offset().top >= 190) &&($(block.genname).offset().left <= 850) && ($(block.genname).offset().top <= 340)){	//假如圖像物件存在時跑下面判斷				
						draw_pot(dot);
						dot++;	
						block.x=0 , block.y=0;
						$(block.genname).remove();
				    }
					else {
						$(block.genname).remove();
						block.x=0, block.y=0;						
					}			
				}
							
				delete blockMap[event.changedTouches[i].identifier];
			
			}	
		
		}
		
	}
	
	touchLayer.addEventListener('touchstart',touchstart, false);	//觸發touchstart事件
	touchLayer.addEventListener('touchmove',touchmove, false);		//觸發touchmove事件
	touchLayer.addEventListener('touchend',touchend, false);		//觸發touchend事件
	
	



