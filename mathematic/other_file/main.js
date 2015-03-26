/**
 * @author wei
 */

var o = document.getElementById("touchLayer");
var easy_class = new easy(1000,650,30,530);
var medium_class = new medium(1100,600,30,460);
var hard_class = new hard(1100,600,30,460);
var tech = new tech();	//創造工具面板
var load = new loadTech();	//載入工具
var Q_create = false; //判斷問題面板是否開啟
var level;	//判斷選擇難度
var canvas = document.getElementById('drawLayer');	
var PathDraw = canvas.getContext('2d');
canvas.width = 2000, canvas.height = 1000; 

var cre = new create();	//宣告以create之物件
var blockMap = new Object(); //用來監控物件狀態
var blockArray = new Array(); //儲存每個block
var obj_Array = new Array(); //存放圖像物件
var answer, answer2; //存放所做之答案
var question; //存放題目
var n1,n2,n3,n4,n5,n6,n7,n8,o1,o2,o3,o4,c1,c2,row1_sum,row2_sum;	//存放數字和運算子
var c1, c2; //第一列空格
var c3, c4 ,c5;//第二列空格
var n4=null, n5=null;
var trans = false;
var sum1 = "",sum2 = "", sum3 = ""; 	//合併數字初值
var sym1="",sym2="",sym3="";	//儲存運算子
var operator = new Array("+", "-", "*", "/"); //存放運算子
/*
 * 
 */

var ea = $("#easy").get(0);
ea.dom = $("#easy");
ea.id = "easy";
ea.loc = "#cloze_1"
ea.cla = easy_class;

var me = $("#medium").get(0);
me.dom = $("#medium");
me.id = "medium";
me.loc = "#cloze_2";
me.cla = medium_class;

var ha = $("#hard").get(0);
ha.dom = $("#hard");
ha.id = "hard";
ha.loc = "#cloze_3";
ha.cla = hard_class;

/*
 * 
 */

	



var DomArray = new Array(ea, me, ha);
var address = "";
var url;

function touchstart(event){
	event.changedTouches= event.targetTouches;
	console.log(["translate(",event.changedTouches[0].pageX,"px, ",event.changedTouches[0].pageY,"px)"].join(""));	//監控座標
	for(var i=0; i<DomArray.length; i++){		//初始選擇難度
		for(var j=0; j<event.targetTouches.length;j++){
			if(event.targetTouches[j].target.id == DomArray[i].id){
				url = DomArray[i].loc;
				level = DomArray[i].id;
				DomArray[i].dom.each(function(){
					DomArray[i].dom.css("position",'relative').animate(
						{
							opacity:0,
							top:$(window).height()-$(this).height()-$(this).position().top
						},
						'normal',
						function(){
							$(this).remove();
							address = window.location.toString();
							window.location.assign(url);							
						}
					);
				});
			}
			
		}
		
	}
		if(url == "#cloze_1" && Q_create == false){		//載入easy面板
			ea.cla.createQuestionBox(), ea.cla.createNumberBox(200,10,"cloze1"), ea.cla.createNumberBox(200,190,"cloze2"), ea.cla.createNumberBox(200,370,"cloze3");	//創造數字空格(問題)		
			ea.cla.createOperatorBox(210,110,"fixed_box1"), ea.cla.createOperatorBox(210,290,"fixed_box2"), ea.cla.createOperatorBox(210,470,"fixed_box3");	//創造運算子空格
			ea.cla.createPicBox(300,10,"Picture_cloze1"), ea.cla.createPicBox(300,260,"Picture_cloze2"), ea.cla.createPicBox(300,510,"Picture_cloze3");		//圖像空格			
			ea.cla.createResultBox(200,550,"cloze5");	//創造計算結果空格
			ea.cla.createTrue_or_False_Box(200,720,"true_or_false");
			ea.cla.createButton(550,700,"butt", "Next", "#526"), ea.cla.createButton(550,790,"butt2", "Verify", "321"); 	//創造按鈕物件
			ea.cla.initial();
			
			load.loadArea();
			load.loadFirstTech();
			load.loadSecondTech();
			load.loadThirdTech();
			
			$("#fixed_box3").html("=");
			me.dom.remove(), ha.dom.remove(), $("#title").remove();		
			Q_create = true;
		}
		
		
		
		if(url == "#cloze_2" && Q_create == false){		//載入medium			
			me.cla.createQuestionBox(),me.cla.createNumberBox(40,10,"cloze1"), me.cla.createNumberBox(40,190,"cloze2"), me.cla.createNumberBox(40,370,"cloze3"), me.cla.createNumberBox(40,550,"cloze4");	//創造數字空格(問題)	;			
			me.cla.createOperatorBox(55,110,"fixed_box1"), me.cla.createOperatorBox(55,290,"fixed_box2"), me.cla.createOperatorBox(55,470,"fixed_box3"), me.cla.createOperatorBox(55,650,"fixed_box4");
			me.cla.createResultBox(40,720,"cloze5"), me.cla.createTrue_or_False_Box(15,870,"true_or_false");
			load.loadArea();
			load.loadFirstTech();
			load.loadSecondTech();
			load.loadThirdTech();
			
			$("#fixed_box4").html("=");
			ea.dom.remove(), ha.dom.remove(), $("#title").remove();		
			Q_create = true;
		}
		
		
		if(url == "#cloze_3" && Q_create == false){		//載入hard			
			ha.cla.createQuestionBox(),ha.cla.createNumberBox(40,10,"cloze1"), ha.cla.createNumberBox(40,190,"cloze2"), ha.cla.createNumberBox(40,370,"cloze3"), ha.cla.createNumberBox(40,550,"cloze4");	//創造數字空格(問題)	;			
			ha.cla.createOperatorBox(55,110,"fixed_box1"), ha.cla.createOperatorBox(55,290,"fixed_box2"), ha.cla.createOperatorBox(55,470,"fixed_box3"), ha.cla.createOperatorBox(55,650,"fixed_box4");
			ha.cla.createResultBox(40,720,"cloze5"), ha.cla.createTrue_or_False_Box(15,870,"true_or_false");			
			
			load.loadArea();
			load.loadFirstTech();
			load.loadSecondTech();
			load.loadThirdTech();
			
		
			
			ea.dom.remove(), me.dom.remove(), $("#title").remove();		
			Q_create = true;
		}
	
		if(Q_create == true){
			
			for(var i=0, a="block", b="b";i<=29;i++){	//創造物件(數字)
				var temp = a + i.toString(), temp2 = b + i.toString();					
				eval("var block"+i+"=$('#block"+i+"').get("+0+")");
				eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
				eval("block"+i+".x="+0);
				eval("block"+i+".y="+0);
				eval("block"+i+".identifier");
				eval("block"+i+".id="+"temp");
				eval("block"+i+".genname="+"temp2");
				eval("block"+i+".text="+i%10);
				eval("block"+i+".obj="+"$('#block"+i+"')");
				blockArray[i] = eval("block"+i);
			}
			
			for(var q=1; q<=3; q++){	//創造合併後數字物件
				var temp = "combine_area"+q.toString(), temp2 = "c"+q.toString();
				eval("var comb"+q+"=$('#combine_area"+q+"').get(0)");
				eval("comb"+q+".offset="+"{x:"+0+", y:"+0+"}");
				eval("comb"+q+".x="+0);
				eval("comb"+q+".y="+0);
				eval("comb"+q+".identifier");
				eval("comb"+q+".id"+"temp");
				eval("comb"+q+".genname="+"temp2");
				eval("comb"+q+".text");
				eval("comb"+q+".obj="+"$('#combine_area"+q+"')");
				blockArray[q+41] = eval("comb"+q);
			}
			
			for(var q=1; q<=3; q++){	//創造運算子物件(輸出區)
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
				blockArray[q+44] = eval("opea"+q);
			}
			
			for(var i=30, a="block", b="b";i<=41;i++){	//創造物件(運算子)
				var temp = a + i.toString(), temp2 = b + i.toString();					
				eval("var block"+i+"=$('#block"+i+"').get("+0+")");
				eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
				eval("block"+i+".x="+0);
				eval("block"+i+".y="+0);
				eval("block"+i+".identifier");
				eval("block"+i+".id="+"temp");
				eval("block"+i+".genname="+"temp2");
				eval("block"+i+".text");
				eval("block"+i+".obj="+"$('#block"+i+"')");
				blockArray[i] = eval("block"+i);
			}
			block30.text = "+", block31.text = "-", block32.text = "×", block33.text = "÷";
			block34.text = "+", block35.text = "-", block36.text = "×", block37.text = "÷";
			block38.text = "+", block39.text = "-", block40.text = "×", block41.text = "÷";
			
			
			for(var i=30;i<=41;i++){	//將運算子丟入DOM中
				eval("$('#block"+i+"').html(block"+i+".text)");
			}
			
			
			for(var i=0; i<blockArray.length; i++){		//將每個數字丟入DOM當中
				if(i==30 || i==31 || i==32 || i==33 || i==34 || i==35 || i==36 || i==37 || i==38 || i==39 || i==40 || i==41 || i==42 || i==43 || i==44 || i==45 || i==46 || i==47){
					continue;
				}
				blockArray[i].obj.html(blockArray[i].text);
			}
			
			
			
			if(event.changedTouches.length>0){
				for(var i=0;i<blockArray.length;i++){
					for(var j=0;j<event.changedTouches.length;j++){
						if(event.changedTouches[j].target.id == blockArray[i].id){
						
						if(blockArray[i].obj.parent().attr("id") == "number_area1"){	//合併數字、丟入
							if(cre.isNumber(blockArray[i].text) && sum1.length<2){
								sum1 += blockArray[i].text;
								$("#combine_area1").html(sum1);
							}else if(cre.isOperator(blockArray[i].text)){
								sym1 = blockArray[i].text;
								$("#operator_area1").html(blockArray[i].text);
							}
						}
						else if(blockArray[i].obj.parent().attr("id") == "number_area2"){
							if(cre.isNumber(blockArray[i].text) && sum2.length<2){
								sum2 += blockArray[i].text;
								$("#combine_area2").html(sum2);
							}else if(cre.isOperator(blockArray[i].text)){
								sym2 = blockArray[i].text;
								$("#operator_area2").html(blockArray[i].text);
							}
							
						}else if(blockArray[i].obj.parent().attr("id") == "number_area3"){
							if(cre.isNumber(blockArray[i].text) && sum3.length<2){
								sum3 += blockArray[i].text;
								$("#combine_area3").html(sum3);
							}else if(cre.isOperator(blockArray[i].text)){
								sym3 = blockArray[i].text;
								$("#operator_area3").html(blockArray[i].text);
							}
						}
						if(blockArray[i].id == "combine_area1"){								
							blockArray[i].text = sum1;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX-50, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];	
							cre.createTransmit(930,357,"numberTrans1");	//創造傳送空間
							PathDraw.beginPath();
							PathDraw.strokeStyle = "rgba(255,0,0,0.4)";
							PathDraw.lineWidth = 80;
							PathDraw.moveTo($("#numberTrans1").offset().left+30,$("#numberTrans1").offset().top+30);
							PathDraw.lineTo($("#cloze2").offset().left+30,$("#cloze2").offset().top+30);
							PathDraw.stroke();									
							PathDraw.fill();
							PathDraw.closePath();	
							//console.log("Start: " +blockArray[i].identifier);	
						}
						if(blockArray[i].id == "combine_area2"){								
							blockArray[i].text = sum2;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							cre.createTransmit(835,1386,"numberTrans2");	//創造傳送空間
							PathDraw.beginPath();
							PathDraw.strokeStyle = "rgba(255,0,0,0.4)";
							PathDraw.lineWidth = 80;
							PathDraw.moveTo($("#numberTrans2").offset().left+30,$("#numberTrans2").offset().top+30);
							PathDraw.lineTo($("#cloze2").offset().left+30,$("#cloze2").offset().top+30);
							PathDraw.stroke();									
							PathDraw.fill();
							PathDraw.closePath();	
							//console.log("Start: " +blockArray[i].identifier);	
						}
						if(blockArray[i].id == "combine_area3"){
							blockArray[i].text = sum3;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							cre.createTransmit(60,1544,"numberTrans3");	//創造傳送空間
							PathDraw.beginPath();
							PathDraw.strokeStyle = "rgba(255,0,0,0.4)";
							PathDraw.lineWidth = 80;
							PathDraw.moveTo($("#numberTrans3").offset().left+30,$("#numberTrans3").offset().top+30);
							PathDraw.lineTo($("#cloze2").offset().left+30,$("#cloze2").offset().top+30);
							PathDraw.stroke();									
							PathDraw.fill();
							PathDraw.closePath();	
							//console.log("Start: " +blockArray[i].identifier);	
						}
						if(blockArray[i].id == "operator_area1"){
							blockArray[i].text = sym1;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							//console.log("Start: " +blockArray[i].identifier);	
						}
						if(blockArray[i].id == "operator_area2"){
							blockArray[i].text = sym2;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							//console.log("Start: " +blockArray[i].identifier);	
						}
						if(blockArray[i].id == "operator_area3"){
							blockArray[i].text = sym3;	//將合併數字區值丟入
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							//console.log("Start: " +blockArray[i].identifier);	
						}
					}
						
						
						if(event.changedTouches[j].target.id == "block42"){	//清除數字功能
							$("#combine_area1").html(""), $("#operator_area1").html("");
							sum1 = "",sym1="";
						}else if(event.changedTouches[j].target.id == "block43"){
							$("#combine_area2").html(""), $("#operator_area2").html("");
							sum2 = "",sym2="";
						}else if(event.changedTouches[j].target.id == "block44"){
							$("#combine_area3").html(""), $("#operator_area3").html("");
							sum3 = "",sym3="";
						}			
						
						
						if(event.changedTouches[j].target.id == "butt"){
							ea.cla.initial(), ea.cla.next();
							
						}else if(event.changedTouches[j].target.id == "butt2"){
							ea.cla.verify();
						}
					
					
					
						if(event.changedTouches[j].target.id == "question_box"){
							trans=true;
							//$("question_box1").css("-webkit-transform-origin-x",1024+"px");
							//$("question_box1").css("-webkit-transform-origin-y",267+"px");
						}
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
				
					if(block.genname == "c1"){	//合併後之數字
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
					}else if(block.genname == "op1"){//輸出之運算子
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
					
				
				//block.gen_id.css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
				//console.log(block.gen_id);						
			}
			if(trans == true){
					
					
					var node1 = {x:1024, y:267}, node2 = {x:event.changedTouches[i].pageX, y:event.changedTouches[i].pageY};
					var rotation = cre.ConvertPositionAngel(node2,node1);
   					$("#question_box").css("-webkit-transform",["translate3d(0px,20px,0px)","rotate(",rotation,"deg)"].join(""));
   					
   					
			
				
			}
			
			
		}
	
	
	event.preventDefault();
}

function touchend(event){
	event.changedTouches= event.targetTouches;
	if(Q_create == true && level == "easy"){
		for(var i=0; i<event.changedTouches.length; i++){
			var block =  blockMap[event.changedTouches[i].identifier];	
			if(block){	//當物件存在時跑判斷
				if($('#'+block.genname).length>0){	//當手指離開時消除物件			
					if($('#'+block.genname).offset().left>=357-50 && $('#'+block.genname).offset().top>=930-50 && $('#'+block.genname).offset().left<=357+100 && $('#'+block.genname).offset().top<=930+100 && cre.isNumber(block.text)){
						$('#'+block.genname).each(	//數字前進特效
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top,
										left:$("#cloze2").offset().left-50
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = block.text;
										block.x=0, block.y=0;
									}
								);
							}
						);						
							
					}else if($('#'+block.genname).offset().left>=1386-50 && $('#'+block.genname).offset().top>=835-50 && $('#'+block.genname).offset().left<=1386+100 && $('#'+block.genname).offset().top<=835+100 && cre.isNumber(block.text)){
						$('#'+block.genname).each(	//數字前進特效
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top+60,
										left:$("#cloze2").offset().left-50
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = block.text;
										block.x=0, block.y=0;
									}
								);
							}
						);		
						
					}else if($('#'+block.genname).offset().left>=1544-50 && $('#'+block.genname).offset().top>=60-50 && $('#'+block.genname).offset().left<=1544+100 && $('#'+block.genname).offset().top<=60+100 && cre.isNumber(block.text)){
						$('#'+block.genname).each(	//數字前進特效
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top+20,
										left:$("#cloze2").offset().left+50
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = block.text;
										block.x=0, block.y=0;
									}
								);
							}
						);		
						
					}else if($('#'+block.genname).offset().left>=$('#cloze2').offset().left-50 && $('#'+block.genname).offset().top>=$('#cloze2').offset().top-50 && $('#'+block.genname).offset().left<=$('#cloze2').offset().left+100 && $('#'+block.genname).offset().top<=$('#cloze2').offset().top+100 && cre.isNumber(block.text)){	//cloze2
						$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
						n2 = block.text;
						block.x=0, block.y=0;
						$('#'+block.genname).remove();								
					}else {
						$('#'+block.genname).remove();
						block.x=0, block.y=0;						
					}					
					
				}						
				delete blockMap[event.changedTouches[i].identifier];
			
			}
			
			
		}trans=false; //手指離開後設定無法轉動
		$("#numberTrans1").remove(), $("#numberTrans2").remove(), $("#numberTrans3").remove();
	}
	
	if(Q_create == true && level == "medium"){
		for(var i=0; i<event.changedTouches.length; i++){
			var block =  blockMap[event.changedTouches[i].identifier];	
			if(block){	//當物件存在時跑判斷
				if($('#'+block.genname).length>0){	//當手指離開時消除物件			
					if($('#'+block.genname).offset().left>=357-50 && $('#'+block.genname).offset().top>=930-50 && $('#'+block.genname).offset().left<=357+100 && $('#'+block.genname).offset().top<=930+100 && cre.isNumber(block.text)){
						$('#'+block.genname).each(	//數字前進特效
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top,
										left:$("#cloze2").offset().left-50
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = block.text;
										block.x=0, block.y=0;
									}
								);
							}
						);						
							
					}else if($('#'+block.genname).offset().left>=1386-50 && $('#'+block.genname).offset().top>=835-50 && $('#'+block.genname).offset().left<=1386+100 && $('#'+block.genname).offset().top<=835+100 && cre.isNumber(block.text)){
						$('#'+block.genname).each(	//數字前進特效
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top+60,
										left:$("#cloze2").offset().left-50
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = block.text;
										block.x=0, block.y=0;
									}
								);
							}
						);		
						
					}else if($('#'+block.genname).offset().left>=1544-50 && $('#'+block.genname).offset().top>=60-50 && $('#'+block.genname).offset().left<=1544+100 && $('#'+block.genname).offset().top<=60+100 && cre.isNumber(block.text)){
						$('#'+block.genname).each(	//數字前進特效
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top+20,
										left:$("#cloze2").offset().left+50
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = block.text;
										block.x=0, block.y=0;
									}
								);
							}
						);		
						
					}					
					
					else if($('#'+block.genname).offset().left>=$('#cloze2').offset().left-50 && $('#'+block.genname).offset().top>=$('#cloze2').offset().top-50 && $('#'+block.genname).offset().left<=$('#cloze2').offset().left+100 && $('#'+block.genname).offset().top<=$('#cloze2').offset().top+100 && cre.isNumber(block.text)){	//cloze2
						$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
						n2 = block.text;
						block.x=0, block.y=0;
						$('#'+block.genname).remove();								
					}
					else {
						$('#'+block.genname).remove();
						block.x=0, block.y=0;						
					}
					
					
					
				}						
				delete blockMap[event.changedTouches[i].identifier];
			
			}
			
			
		}trans=false; //手指離開後設定無法轉動
		$("#numberTrans1").remove(), $("#numberTrans2").remove(), $("#numberTrans3").remove();
	}
	
	if(Q_create == true && level == "hard"){
		for(var i=0; i<event.changedTouches.length; i++){
			var block =  blockMap[event.changedTouches[i].identifier];	
			if(block){	//當物件存在時跑判斷
				
				if($('#'+block.genname).offset().left>=357-50 && $('#'+block.genname).offset().top>=930-50 && $('#'+block.genname).offset().left<=357+100 && $('#'+block.genname).offset().top<=930+100 && cre.isNumber(block.text)){
						$('#'+block.genname).each(	//數字前進特效
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top,
										left:$("#cloze2").offset().left-50
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = block.text;
										block.x=0, block.y=0;
									}
								);
							}
						);						
							
					}else if($('#'+block.genname).offset().left>=1386-50 && $('#'+block.genname).offset().top>=835-50 && $('#'+block.genname).offset().left<=1386+100 && $('#'+block.genname).offset().top<=835+100 && cre.isNumber(block.text)){
						$('#'+block.genname).each(	//數字前進特效
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top+60,
										left:$("#cloze2").offset().left-50
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = block.text;
										block.x=0, block.y=0;
									}
								);
							}
						);		
						
					}else if($('#'+block.genname).offset().left>=1544-50 && $('#'+block.genname).offset().top>=60-50 && $('#'+block.genname).offset().left<=1544+100 && $('#'+block.genname).offset().top<=60+100 && cre.isNumber(block.text)){
						$('#'+block.genname).each(	//數字前進特效
							function(){
								$("#"+block.genname).animate(
									{
										top:$("#cloze2").offset().top+20,
										left:$("#cloze2").offset().left+50
									},
									'normal',
									function(){
										$('#'+block.genname).remove();
										$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
										n2 = block.text;
										block.x=0, block.y=0;
									}
								);
							}
						);		
						
					}
				
				else if($('#'+block.genname).length>0){	//當手指離開時消除物件			
					if($('#'+block.genname).offset().left>=$('#cloze2').offset().left-50 && $('#'+block.genname).offset().top>=$('#cloze2').offset().top-50 && $('#'+block.genname).offset().left<=$('#cloze2').offset().left+100 && $('#'+block.genname).offset().top<=$('#cloze2').offset().top+100 && cre.isNumber(block.text)){	//cloze2
						$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
						n2 = block.text;
						block.x=0, block.y=0;
						$('#'+block.genname).remove();								
					}
					else {
						$('#'+block.genname).remove();
						block.x=0, block.y=0;						
					}
					
					
					
				}						
				delete blockMap[event.changedTouches[i].identifier];
			
			}
			
			
		}trans=false; //手指離開後設定無法轉動
		$("#numberTrans1").remove(), $("#numberTrans2").remove(), $("#numberTrans3").remove();
	}
	PathDraw.clearRect(0,0,canvas.width,canvas.height);
	
	event.preventDefault();
}

document.addEventListener("touchstart",touchstart,false);
document.addEventListener("touchmove",touchmove,false);
document.addEventListener("touchend",touchend,false);
