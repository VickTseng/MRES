/**
 * @author wei
 */
	var touchLayer = document.getElementById('touchLayer');
	var operator = new Array("+", "-", "*", "/"); //存放運算子
	var cre = new create();	//宣告以create之物件
	var o = document.body; 
	var blockMap = new Object(); //用來監控物件狀態
	var blockArray = new Array(); //儲存每個block
	var obj_Array = new Array(); //存放圖像物件
	var answer, answer2; //存放所做之答案
	var question; //存放題目
	var n1,n2,n3,n4,n5,n6,o1,o2,o3,o4,c1,c2,row1_sum,row2_sum,row3_sum;	//存放數字和運算子
	var p1_ten, p1_unit, p2_ten=0, p2_unit=0, p3_ten, p3_unit; //儲存位數
	var n4=null, n5=null;
	var trans = false;
	//var start_conbine1 = false, start_conbine2 = false, start_conbine3 = false;	//判斷是否開始合併數字
	var sum1="",sum2="", sum3=""; 	//合併數字初值
	var sym1="",sym2="",sym3="";	//儲存運算子
	var PicAnswer; //圖像計算結果
	var canvas = document.getElementById('drawLayer');	
	var PathDraw = canvas.getContext('2d');
	canvas.width = 2099, canvas.height = 1000; 
	
	for(var i=0, a="block", b="b";i<=47;i++){	//創造物件
		var temp = a + i.toString(), temp2 = b + i.toString();
		if(i==30 || i==31 || i==32){
			continue;
		}
		eval("var block"+i+"=$('#block"+i+"').get("+0+")");
		eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
		eval("block"+i+".x="+0);
		eval("block"+i+".y="+0);
		eval("block"+i+".identifier");
		eval("block"+i+".id="+"temp");
		eval("block"+i+".genname="+"temp2");
		eval("block"+i+".text="+i%10);
		eval("block"+i+".obj="+"$('#block"+i+"')");
	}
	
	for(var q=1; q<=3; q++){	//創造合併後數字物件
		var temp = "combine_number"+q.toString(), temp2 = "c"+q.toString();
		eval("var comb"+q+"=$('#combine_number"+q+"').get(0)");
		eval("comb"+q+".offset="+"{x:"+0+", y:"+0+"}");
		eval("comb"+q+".x="+0);
		eval("comb"+q+".y="+0);
		eval("comb"+q+".identifier");
		eval("comb"+q+".id"+"temp");
		eval("comb"+q+".genname="+"temp2");
		eval("comb"+q+".text");
		eval("comb"+q+".obj="+"$('#combine_number"+q+"')");
	}
	
	for(var q=1; q<=3; q++){	//創造運算子物件
		var temp = "Operator_area"+q.toString(), temp2 = "op"+q.toString();
		eval("var opea"+q+"=$('#operator_area"+q+"').get(0)");
		eval("opea"+q+".offset="+"{x:"+0+", y:"+0+"}");
		eval("opea"+q+".x="+0);
		eval("opea"+q+".y="+0);
		eval("opea"+q+".identifier");
		eval("opea"+q+".id"+"temp");
		eval("opea"+q+".genname="+"temp2");
		eval("opea"+q+".text");
		eval("opea"+q+".obj="+"$('#operator_area"+q+"')");
	}
	
	for(var q=1; q<=3; q++){	//創造圖像物件(圓點)
		var temp = "Circle"+q.toString(), temp2 = "ci"+q.toString(), text="Dot";
		eval("var cir"+q+"=$('#Circle"+q+"').get(0)");
		eval("cir"+q+".offset="+"{x:"+0+", y:"+0+"}");
		eval("cir"+q+".x="+0);
		eval("cir"+q+".y="+0);
		eval("cir"+q+".identifier");
		eval("cir"+q+".id"+"temp");
		eval("cir"+q+".genname="+"temp2");
		eval("cir"+q+".text=text");
		eval("cir"+q+".obj="+"$('#Circle"+q+"')");
	}
	
	for(var q=1; q<=3; q++){	//創造圖像物件(箱子)
		var temp = "square"+q.toString(), temp2 = "sq"+q.toString(), box = "box";
		eval("var squ"+q+"=$('#square"+q+"').get(0)");
		eval("squ"+q+".offset="+"{x:"+0+", y:"+0+"}");
		eval("squ"+q+".x="+0);
		eval("squ"+q+".y="+0);
		eval("squ"+q+".identifier");
		eval("squ"+q+".id"+"temp");
		eval("squ"+q+".genname="+"temp2");
		eval("squ"+q+".text=box");
		eval("squ"+q+".obj="+"$('#square"+q+"')");
	}
	
	for(var t=1; t<=3;t++){	//創造轉動按鈕
		var temp = "RotateArea"+t.toString(), temp2 = "ro"+t.toString();
		eval("var rotate"+t+"=$('#RotateArea"+t+"').get(0)");
		eval("rotate"+t+".offset="+"{x:"+0+", y:"+0+"}");
		eval("rotate"+t+".x="+0);
		eval("rotate"+t+".y="+0);
		eval("rotate"+t+".identifier");
		eval("rotate"+t+".id"+"temp");
		eval("rotate"+t+".genname="+"temp2");
		eval("rotate"+t+".text");
		eval("rotate"+t+".obj="+"$('#RotateArea"+t+"')");
	}
	
	for(var q=33;q<=44;q++){	//貼上運算子符號
		eval("block"+q+".text="+"document.getElementById('block"+q+"').textContent");
	}
	
	
	
	
	for(var h=0;h<=47;h++){		//將物件儲存在陣列中
		if(h==30 || h==31 || h==32){
			continue;
		}
		blockArray[h]=eval('block'+h);
	}
	
	for(var a=1; a<=3;a++){
		blockArray[a+47]=eval("comb"+a);
	}
	
	for(var b=1; b<=3;b++){
		blockArray[b+50]=eval("opea"+b);
	}

	for(var a=1;a<=3;a++){
		blockArray[a+53] = eval("cir"+a);
	}
	
	for(var c=1;c<=3;c++){
		blockArray[c+56] = eval("squ"+c);
	}
	
	for(var x=1;x<=3;x++){
		blockArray[x+59] = eval("rotate"+x);
	}
	
	function initial(){	//分配數字
		var index = Math.ceil(Math.random()*counter_easy); //題號
		var n2_temp ,o2_temp;
		n1 = eval("easy_ques.q"+index+"[0]"), n2_temp = eval("easy_ques.q"+index+"[2]"), n3 = eval("easy_ques.q"+index+"[4]"),o1 = eval("easy_ques.q"+index+"[1]"), o2_temp =eval("easy_ques.q"+index+"[3]");
		
		console.log("index:"+index+" "+n1+","+o1+","+n2_temp+","+o2_temp+","+n3);
		row1_sum = eval("n1"+o1+"n2_temp"+o2_temp+"n3");
		
		$("#cloze1").html(n1),$("#cloze3").html(n3),$("#cloze5").html(row1_sum),$("#fixed_box1").html(cre.translateOperator(o1)),$("#Picture_operator1").html(cre.translateOperator(o1));
		
		for(var u=45;u<=47;u++){	//重新載入後，合併數字區歸零
			eval("block"+u+".text="+"''");
		}				
		
		for(var i=0; i<blockArray.length; i++){		//將每個數字丟入DOM當中
			if(i==30 || i==31 || i==32 || i==45 || i==46 || i==47 || i == 48 || i ==49 || i==50 || i==51 || i==52 || i==53 || i==60 || i==61 || i==62){
				continue;
			}
			blockArray[i].obj.html(blockArray[i].text);
		}
		
		initialPic();
		
		//console.log("one row answer:"+num2+" operator:"+operator[which2]);
	}
	
	function initialPic(){	//初始化物件題目
		
		/*p1_unit = n1%10, p1_ten = (n1 - p1_unit) / 10;		
		p3_unit = n3%10, p3_ten = (n3 - p3_unit) / 10;
		
		cre.drawCircle("Picture_cloze1_ten",p1_ten,150,150), cre.drawCircle("Picture_cloze1_unit",p1_unit,150,150);		
		cre.drawCircle("Picture_cloze3_ten",p3_ten,150,150), cre.drawCircle("Picture_cloze3_unit",p3_unit,150,150);*/
		
	}
	
	function next(){	//跳下一題
		initial();
		$("#cloze2").html(""), $("#fixed_box2").html(""), $("#true_or_false").html(""), $("#true_or_false1").html("");		
		n2 = null, o4 = null;
	}
	
	function verify(){
		if(n2 != null && o2 !=null){
			answer = eval("n1"+o1+"n2"+o2+"n3");
			if(answer == row1_sum){
				$("#true_or_false1").html("○"),$("#true_or_false1").css("color","green"),$("#true_or_false1").css("font-size",80);
			}else{
				$("#true_or_false1").html("×"),$("#true_or_false1").css("color","red"),$("#true_or_false1").css("font-size",80);
			}		
		}else{
			$("#true_or_false1").html("Please drag the number."),$("#true_or_false1").css("color","black"),$("#true_or_false1").css("font-size",26);
		}
		
		//console.log("answer:"+answer+" row1_sun:"+row1_sum + " n1:"+n1+" n2:"+n2+" n3:"+n3+" o1:"+o1+" o2:"+o2);
		
		
		
		
		
	}
	
	
		
		
	function touchstart(event){
		event.changedTouches= event.targetTouches;
		console.log(["translate(",event.changedTouches[0].pageX,"px, ",event.changedTouches[0].pageY,"px)"].join(""));	//監控座標
		//console.log("cloze2 X:"+$('#cloze2').offset().left+ " cloze2 Y:"+$('#cloze2').offset().top);
		console.log("trans:"+trans);
		if(event.changedTouches.length>0){	
			for(var i=0; i<blockArray.length; i++){	//判斷每個block
				
				if(i==30 || i==31 || i==32){continue;}
				for(var j=0; j<event.changedTouches.length; j++){	//被哪隻手指觸碰到					
					if(event.changedTouches[j].target.id == blockArray[i].id){
						console.log(event.changedTouches[j].target.id);
						if(blockArray[i].id == "block45"){	//清除數字功能
							blockArray[i].identifier = event.changedTouches[j].identifier;
							blockMap[blockArray[i].identifier] = blockArray[i];
							$("#block45").css("font-family","impact"), $("#combine_number1").html(""), $("#operator_area1").html("");
							sum1 ="",sym1="";
						}else if(blockArray[i].id == "block46"){
							blockArray[i].identifier = event.changedTouches[j].identifier;
							blockMap[blockArray[i].identifier] = blockArray[i];
							$("#block46").css("font-family","impact"),$("#combine_number2").html(""), $("#operator_area2").html("");
							sum2 ="",sym2="";
						}else if(blockArray[i].id == "block47"){
							blockArray[i].identifier = event.changedTouches[j].identifier;
							blockMap[blockArray[i].identifier] = blockArray[i];
							$("#block47").css("font-family","impact"), $("#combine_number3").html(""), $("#operator_area3").html("");
							sum3 ="",sym3="";
						}
						
						
						if(blockArray[i].obj.parent().attr("id") == "number_area1"){	//合併數字、丟入
							if(cre.isNumber(blockArray[i].text) && sum1.length<2){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								sum1 += blockArray[i].text;
								$("#combine_number1").html(sum1);
								cre.largeView(blockArray[i].obj);
							}else if(cre.isOperator(blockArray[i].text)){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								sym1 = blockArray[i].text;
								$("#operator_area1").html(blockArray[i].text);
								cre.largeView(blockArray[i].obj);
							}
						}else if(blockArray[i].obj.parent().attr("id") == "number_area2"){
							if(cre.isNumber(blockArray[i].text) && sum2.length<2){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								sum2 += blockArray[i].text;
								$("#combine_number2").html(sum2);
								cre.largeView(blockArray[i].obj);
							}else if(cre.isOperator(blockArray[i].text)){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								sym2 = blockArray[i].text;
								$("#operator_area2").html(blockArray[i].text);
								cre.largeView(blockArray[i].obj);
							}
							
						}else if(blockArray[i].obj.parent().attr("id") == "number_area3"){
							if(cre.isNumber(blockArray[i].text) && sum3.length<2){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								sum3 += blockArray[i].text;
								$("#combine_number3").html(sum3);
								cre.largeView(blockArray[i].obj);
							}else if(cre.isOperator(blockArray[i].text)){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								sym3 = blockArray[i].text;
								$("#operator_area3").html(blockArray[i].text);
								cre.largeView(blockArray[i].obj);
							}
						}
						else if(blockArray[i].id == "combine_number1"){
							blockArray[i].text = sum1;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							cre.createTransmit(880,380,"numberTrans1");	//創造傳送空間
							PathDraw.beginPath();
							PathDraw.strokeStyle = "rgba(255,0,0,0.4)";
							PathDraw.lineWidth = 80;
							PathDraw.moveTo($("#numberTrans1").offset().left+30,$("#numberTrans1").offset().top+30);
							PathDraw.lineTo($("#cloze2").offset().left+30,$("#cloze2").offset().top);
							PathDraw.stroke();									
							PathDraw.fill();
							PathDraw.closePath();	
							//console.log("Start: " +blockArray[i].identifier);	
						}else if(blockArray[i].id == "combine_number2"){
							blockArray[i].text = sum2;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							cre.createTransmit(740,1440,"numberTrans2");	//創造傳送空間
							PathDraw.beginPath();
							PathDraw.strokeStyle = "rgba(255,0,0,0.4)";
							PathDraw.lineWidth = 80;
							PathDraw.moveTo($("#numberTrans2").offset().left+30,$("#numberTrans2").offset().top+30);
							PathDraw.lineTo($("#cloze2").offset().left+30,$("#cloze2").offset().top);
							PathDraw.stroke();									
							PathDraw.fill();
							PathDraw.closePath();	
							
							//console.log("Start: " +blockArray[i].identifier);	
						}else if(blockArray[i].id == "combine_number3"){
							blockArray[i].text = sum3;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							cre.createTransmit(80,1570,"numberTrans3");	//創造傳送空間
							PathDraw.beginPath();
							PathDraw.strokeStyle = "rgba(255,0,0,0.4)";
							PathDraw.lineWidth = 80;
							PathDraw.moveTo($("#numberTrans3").offset().left+30,$("#numberTrans3").offset().top+30);
							PathDraw.lineTo($("#cloze2").offset().left+30,$("#cloze2").offset().top);
							PathDraw.stroke();									
							PathDraw.fill();
							PathDraw.closePath();
							//console.log("Start: " +blockArray[i].identifier);	
						}else if(blockArray[i].id == "operator_area1"){
							blockArray[i].text = sym1;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							cre.createTransmit(660,400,"OperatorTrans1");	//創造傳送空間
							PathDraw.beginPath();
							PathDraw.strokeStyle = "rgba(255,0,0,0.4)";
							PathDraw.lineWidth = 80;
							PathDraw.moveTo($("#OperatorTrans1").offset().left+30,$("#OperatorTrans1").offset().top+30);
							PathDraw.lineTo($("#fixed_box2").offset().left+30,$("#fixed_box2").offset().top);
							PathDraw.stroke();									
							PathDraw.fill();
							PathDraw.closePath();
							//console.log("Start: " +blockArray[i].identifier);	
						}else if(blockArray[i].id == "operator_area2"){
							blockArray[i].text = sym2;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							cre.createTransmit(740,1190,"OperatorTrans2");	//創造傳送空間
							PathDraw.beginPath();
							PathDraw.strokeStyle = "rgba(255,0,0,0.4)";
							PathDraw.lineWidth = 80;
							PathDraw.moveTo($("#OperatorTrans2").offset().left+30,$("#OperatorTrans2").offset().top+30);
							PathDraw.lineTo($("#fixed_box2").offset().left+30,$("#fixed_box2").offset().top);
							PathDraw.stroke();									
							PathDraw.fill();
							PathDraw.closePath();
							//console.log("Start: " +blockArray[i].identifier);	
						}else if(blockArray[i].id == "operator_area3"){
							blockArray[i].text = sym3;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							cre.createTransmit(350,1580,"OperatorTrans3");	//創造傳送空間
							PathDraw.beginPath();
							PathDraw.strokeStyle = "rgba(255,0,0,0.4)";
							PathDraw.lineWidth = 80;
							PathDraw.moveTo($("#OperatorTrans3").offset().left+30,$("#OperatorTrans3").offset().top+30);
							PathDraw.lineTo($("#fixed_box2").offset().left+30,$("#fixed_box2").offset().top);
							PathDraw.stroke();									
							PathDraw.fill();
							PathDraw.closePath();
							//console.log("Start: " +blockArray[i].identifier);	
						}else if(blockArray[i].obj.parent().attr("id") == "technique1"){
							cre.largeView(blockArray[i].obj);
							cre.createObj(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname,90);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
						}else if(blockArray[i].obj.parent().attr("id") == "technique2"){
							cre.largeView(blockArray[i].obj);
							cre.createObj(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname,0);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
						}else if(blockArray[i].obj.parent().attr("id") == "technique3"){
							cre.largeView(blockArray[i].obj);
							cre.createObj(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname,-90);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
						}else if(blockArray[i].id == "RotateArea1"){	//讓使用者轉動問題空間
							//$("#question_box1").css("-webkit-transform","rotate(90deg)");		
							$("#question_box1").animate({rotate: '90deg'},250);
						}else if(blockArray[i].id == "RotateArea2"){
							//$("#question_box1").css("-webkit-transform","rotate(0deg)");
							$("#question_box1").animate({rotate: '0deg'},250);
						}else if(blockArray[i].id == "RotateArea3"){
							//$("#question_box1").css("-webkit-transform","rotate(-90deg)");
							$("#question_box1").animate({rotate: '-90deg'},250);
						}/*else{
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
						}*/
												
					}
					
				
					
					if(event.changedTouches[j].target.className == "butt"){
						next();
					}else if(event.changedTouches[j].target.className == "butt2"){
						verify();
					}
					
					
					
					/*if(event.changedTouches[j].target.id == "question_box1"){
						trans=true;
						//$("question_box1").css("-webkit-transform-origin-x",1024+"px");
						//$("question_box1").css("-webkit-transform-origin-y",267+"px");
					}*/
				
						
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
				if(block.obj.parent().attr("id") == "number_area"){
					$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
					$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
					$("#"+block.genname).css("font-size",70);
				}else if(block.obj.parent().attr("id") == "number_area2"){
					$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",90,"deg)"].join(""));
					$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
					$("#"+block.genname).css("font-size",70);
				}else if(block.obj.parent().attr("id") == "number_area3"){
					$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",-90,"deg)"].join(""));
					$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
					$("#"+block.genname).css("font-size",70);
				}else if(block.obj.parent().attr("id") == "technique1"){
					$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",90,"deg)"].join(""));
					$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
					$("#"+block.genname).css("font-size",50);
				}else if(block.obj.parent().attr("id") == "technique2"){
					$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",0,"deg)"].join(""));
					$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
					$("#"+block.genname).css("font-size",50);
				}else if(block.obj.parent().attr("id") == "technique3"){
					$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",-90,"deg)"].join(""));
					$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
					$("#"+block.genname).css("font-size",50);
				}else{
					if(block.genname == "c1"){
						$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",90,"deg)"].join(""));
						$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
						$("#"+block.genname).css("font-size",70);
					}else if(block.genname == "c2"){
						$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
						$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
						$("#"+block.genname).css("font-size",70);
					}else if(block.genname == "c3"){
						$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",-90,"deg)"].join(""));
						$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
						$("#"+block.genname).css("font-size",70);
					}else if(block.genname == "op1"){
						$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",0,"deg)"].join(""));
						$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
						$("#"+block.genname).css("font-size",70);
					}else if(block.genname == "op2"){
						$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",90,"deg)"].join(""));
						$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
						$("#"+block.genname).css("font-size",70);
					}else if(block.genname == "op3"){
						$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",-90,"deg)"].join(""));
						$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
						$("#"+block.genname).css("font-size",70);
					}
					
				}
				//block.gen_id.css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
				//console.log(block.gen_id);						
			}
		
			
			
		}
		
		
		
		
		event.preventDefault();
	}
	
	
	
	
	function touchend(event){
		event.changedTouches= event.targetTouches;
	//	console.log("End: " +event.changedTouches.length);
		for(var i=0; i<event.changedTouches.length; i++){
			var block =  blockMap[event.changedTouches[i].identifier];	
			if(block){	//當物件存在時跑判斷
				if($('#'+block.genname).length>0){	
					
					if($('#'+block.genname).offset().left>=$('#cloze2').offset().left-50 && $('#'+block.genname).offset().top>=$('#cloze2').offset().top-50 && $('#'+block.genname).offset().left<=$('#cloze2').offset().left+100 && $('#'+block.genname).offset().top<=$('#cloze2').offset().top+100 && cre.isNumber(block.text)){	//cloze2
						$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
						n2 = eval(block.text);
						block.x=0, block.y=0;
						$('#'+block.genname).remove();								
					}else if($('#'+block.genname).offset().left>=$('#fixed_box2').offset().left-50 && $('#'+block.genname).offset().top>=$('#fixed_box2').offset().top-50 && $('#'+block.genname).offset().left<=$('#fixed_box2').offset().left+100 && $('#'+block.genname).offset().top<=$('#fixed_box2').offset().top+100 && cre.isOperator(block.text)){
						$("#fixed_box2").html(block.text),$("#fixed_box2").css("color","#13A");
						o2 = cre.transSymbol(block.text);
						block.x=0, block.y=0;
						$('#'+block.genname).remove();							
					}else if($('#'+block.genname).offset().left>=380-50 && $('#'+block.genname).offset().top>=880-50 && $('#'+block.genname).offset().left<=380+100 && $('#'+block.genname).offset().top<=880+100 && cre.isNumber(block.text) && $("#numberTrans1").length>0){
						$('#'+block.genname).each(	//數字前進特效(1) numberTrans1
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top+50,
										left:$("#cloze2").offset().left-130
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = eval(block.text);
										block.x=0, block.y=0;
									}
								);
							}
						);						
							
					}	
					else if($('#'+block.genname).offset().left>=1440-50 && $('#'+block.genname).offset().top>=740-50 && $('#'+block.genname).offset().left<=1440+100 && $('#'+block.genname).offset().top<=740+100 && cre.isNumber(block.text) && $("#numberTrans2").length>0){
						$('#'+block.genname).each(	//數字前進特效(2)numberTrans2
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top+150,
										left:$("#cloze2").offset().left+50
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = eval(block.text);
										block.x=0, block.y=0;
									}
								);
							}
						);						
							
					}
					else if($('#'+block.genname).offset().left>=1570-50 && $('#'+block.genname).offset().top>=80-50 && $('#'+block.genname).offset().left<=1570+100 && $('#'+block.genname).offset().top<=80+100 && cre.isNumber(block.text) && $("#numberTrans3").length>0){
						$('#'+block.genname).each(	//數字前進特效(3)numberTrans3
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top+20,
										left:$("#cloze2").offset().left+150
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = eval(block.text);
										block.x=0, block.y=0;
									}
								);
							}
						);		
						
					}
					else if($('#'+block.genname).offset().left>=400-50 && $('#'+block.genname).offset().top>=660-50 && $('#'+block.genname).offset().left<=400+100 && $('#'+block.genname).offset().top<=660+100 && cre.isOperator(block.text) && $("#OperatorTrans1").length>0){
						$('#'+block.genname).each(	//運算子前進特效(1) operator1
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#fixed_box2").offset().top+50,
										left:$("#fixed_box2").offset().left-130
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#fixed_box2").html(block.text),$("#fixed_box2").css("color","#13A");
										o2 = cre.transSymbol(block.text);
										block.x=0, block.y=0;
									}
								);
							}
						);		
					}
					else if($('#'+block.genname).offset().left>=1190-50 && $('#'+block.genname).offset().top>=740-50 && $('#'+block.genname).offset().left<=1190+100 && $('#'+block.genname).offset().top<=740+100 && cre.isOperator(block.text) && $("#OperatorTrans2").length>0){
						$('#'+block.genname).each(	//運算子前進特效(2) operator2
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#fixed_box2").offset().top+180,
										left:$("#fixed_box2").offset().left+20
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#fixed_box2").html(block.text),$("#fixed_box2").css("color","#13A");
										o2 = cre.transSymbol(block.text);
										block.x=0, block.y=0;
									}
								);
							}
						);		
					}
					else if($('#'+block.genname).offset().left>=1580-50 && $('#'+block.genname).offset().top>=350-50 && $('#'+block.genname).offset().left<=1580+100 && $('#'+block.genname).offset().top<=350+100 && cre.isOperator(block.text) && $("#OperatorTrans3").length>0){
						$('#'+block.genname).each(	//運算子前進特效(3) operator3
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#fixed_box2").offset().top+20,
										left:$("#fixed_box2").offset().left+180
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#fixed_box2").html(block.text),$("#fixed_box2").css("color","#13A");
										o2 = cre.transSymbol(block.text);
										block.x=0, block.y=0;
									}
								);
							}
						);		
					}
					else {
						$('#'+block.genname).remove();
						block.x=0, block.y=0;												
					}					
				}	
				cre.smallView(block.obj);	//touch結束後，回復字型大小			
				delete blockMap[event.changedTouches[i].identifier];	
				
				if(blockMap[event.changedTouches[i].identifier] == null){
					$("#numberTrans1").remove(), $("#numberTrans2").remove(), $("#numberTrans3").remove(), $("#OperatorTrans1").remove(), $("#OperatorTrans2").remove(), $("#OperatorTrans3").remove();
					PathDraw.clearRect(0,0,canvas.width,canvas.height);
				}		
			}		
			
		}
		
		
		event.preventDefault();
	}
	
	initial(); //分配題目
	document.addEventListener('touchstart',touchstart, false);	//觸發touchstart事件
	document.addEventListener('touchmove',touchmove, false);		//觸發touchmove事件
	document.addEventListener('touchend',touchend, false);		//觸發touchend事件
		
