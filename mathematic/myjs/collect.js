/**
 * @author wei
 */


function initial(){	//初始化圖像及字符
	block1.nume = pic_symbol.nume[6];	//給予分子分母數值
	block1.denom = pic_symbol.denom[6];
	block1.whole = 1;
	
	block2.nume = pic_symbol.nume[0];	//給予分子分母數值
	block2.denom = pic_symbol.denom[0];
	block2.whole = 0;
	
	block3.nume = pic_symbol.nume[3];	//給予分子分母數值
	block3.denom = pic_symbol.denom[3];
	block3.whole = 0;
	
	block4.nume = pic_symbol.nume[7];	//給予分子分母數值
	block4.denom = pic_symbol.denom[7];
	block4.whole = 1;
	
	block5.nume = pic_symbol.nume[1];	//給予分子分母數值
	block5.denom = pic_symbol.denom[1];
	block5.whole = 0;
	
	block6.nume = pic_symbol.nume[4];	//給予分子分母數值
	block6.denom = pic_symbol.denom[4];
	block6.whole = 0;
	
	block7.nume = pic_symbol.nume[8];	//給予分子分母數值
	block7.denom = pic_symbol.denom[8];
	block7.whole = 1;
	
	block8.nume = pic_symbol.nume[2];	//給予分子分母數值
	block8.denom = pic_symbol.denom[2];
	block8.whole = 0;
	
	block9.nume = pic_symbol.nume[5];	//給予分子分母數值
	block9.denom = pic_symbol.denom[5];
	block9.whole = 0;
	
	draw.initialMemberGra();
	//draw.initialMemberSym();
	draw.errorReport();
}

function nextStage(){
	if(A_next == true && B_next == true && C_next == true){
		window.location = "equivalence.html";
	}
}

function showNext(){
	if(A_check == true && B_check == true && C_check == true){
		block22.obj.css("display","block"), block23.obj.css("display","block"), block24.obj.css("display","block");
		block22.obj.animate({opacity:1},800), block23.obj.animate({opacity:1},800), block24.obj.animate({opacity:1},800);
	}
}

function GivePic(path, whole, denom, nume){	//給予完整圖形路徑
	var pic = new Image();
	switch(path){
		case "proper":
			pic.src = "collect_pic/proper/"+denom+"_"+nume+".png";
			return pic;
			break;
		case "improper":
			pic.src = "collect_pic/improper/"+denom+"_"+nume+".png";
			return pic;
			break;
		case "mix":
			pic.src = "collect_pic/mixed/"+whole+"_"+denom+"_"+nume+".png";
			return pic;
			break;
	}
}

function calTotalTime(){	//計算總花費時間
	time ++;
}

function calMember_A_Time(){	//計算member_A花費時間
	data_log.member_A_complete_time++;
}

function calMember_B_Time(){	//計算member_A花費時間
	data_log.member_B_complete_time++;
}

function calMember_C_Time(){	//計算member_A花費時間
	data_log.member_C_complete_time++;
}

function correctAnswer(){		//直接完成此階段
	var graArray = [block10, block11, block12, block13, block14, block15, block16, block17, block18];
	var symArray = [block1, block2, block3, block4, block5, block6, block7, block8, block9];
	
	for(var i=0; i<9; i++){
		graArray[i].nume = symArray[i].nume;
		graArray[i].denom = symArray[i].denom;
		graArray[i].whole = symArray[i].whole;
		graArray[i].type = symArray[i].type;
	}	
	for(var i=0; i<9; i++){
		draw.clearDraw(eval(graArray[i].pen), 200, 200);
	}
	for(var i=0; i<9; i++){
		draw.drawGra(eval(graArray[i].pen), GivePic(graArray[i].type, graArray[i].whole, graArray[i].denom, graArray[i].nume), graArray[i].type); //ctx, imgPath, type
	}
	
	check("A_confirm"), check("B_confirm"), check("C_confirm");
	showNext();
}

function check(selection){
	switch(selection){
		case "A_confirm":
			if(block1.empty =="false" && block2.empty =="false" && block3.empty =="false" && block10.empty =="false" && block11.empty =="false" && block12.empty =="false"){
				if((block1.denom == block10.denom) && (block1.nume == block10.nume) && (block1.whole == block10.whole) &&
				(block2.denom == block11.denom) && 	(block2.nume == block11.nume) && (block2.whole == block11.whole) &&
				(block3.denom == block12.denom) && (block3.nume == block12.nume) && (block3.whole == block12.whole)){		
					if($("#A_blank").length>0){
						$("div").remove("#A_blank");
					}										
					draw.drawCorrectSym(eval(block1.pen), block1.type, block1.whole, block1.denom, block1.nume);	//ctx, type, whole, denom, nume
					draw.drawCorrectSym(eval(block2.pen), block2.type, block2.whole, block2.denom, block2.nume);	//ctx, type, whole, denom, nume
					draw.drawCorrectSym(eval(block3.pen), block3.type, block3.whole, block3.denom, block3.nume);	//ctx, type, whole, denom, nume
					
					block1.use = false, block2.use = false, block3.use = false;
					block10.use = false, block11.use = false, block12.use = false;
					block25.obj.css("display","none");					
					handleObj.createResultBox("A_correct","correct",1010,390,"left");	//id, answer, top, left, position
					A_check = true;
					$.post("../mathematic/myphp/collect_picture_data/collect_personal_time.php", 
					{ p_time: data_log.member_A_complete_time, date:now.toString().substring(0,33), member: "member_A"} );//儲存A的完成時間
					clearTimeout(A_time);
					nextStage();
				}else{				
					if($("#A_blank").length>0){
						$("div").remove("#A_blank");
					}
					if((block1.denom != block10.denom) || (block1.nume != block10.nume) || (block1.whole != block10.whole)){
						//handleObj.createResultBox("A_error","error",300,400,"left");
						draw.drawErrorSym(eval(block1.pen), block1.type, block1.whole, block1.denom, block1.nume);	//ctx, type, whole, denom, nume												
					}else if((block1.denom == block10.denom) && (block1.nume == block10.nume) && (block1.whole == block10.whole)){
						draw.drawCorrectSym(eval(block1.pen), block1.type, block1.whole, block1.denom, block1.nume);
						block10.use = false;
					}
					if((block2.denom != block11.denom) || (block2.nume != block11.nume) || (block2.whole != block11.whole) ){
						//handleObj.createResultBox("A_error","error",550,400,"left");
						draw.drawErrorSym(eval(block2.pen), block2.type, block2.whole, block2.denom, block2.nume);	//ctx, type, whole, denom, nume	
					}else if((block2.denom == block11.denom) && (block2.nume == block11.nume) && (block2.whole == block11.whole)){
						draw.drawCorrectSym(eval(block2.pen), block2.type, block2.whole, block2.denom, block2.nume);
						block11.use = false;
					}
					if((block3.denom != block12.denom) || (block3.nume != block12.nume) || (block3.whole != block12.whole)){
						//handleObj.createResultBox("A_error","error",800,400,"left");
						draw.drawErrorSym(eval(block3.pen), block3.type, block3.whole, block3.denom, block3.nume);	//ctx, type, whole, denom, nume	
					}else if((block3.denom == block12.denom) && (block3.nume == block12.nume) && (block3.whole == block12.whole)){
						draw.drawCorrectSym(eval(block3.pen), block3.type, block3.whole, block3.denom, block3.nume);
						block12.use = false;
					}
				}
			}else{				
				handleObj.createResultBox("A_blank","blank",600,420,"left");	//id, answer, top, left, position				
			}
			break;
		case "B_confirm":
			if(block4.empty =="false" && block5.empty =="false" && block6.empty =="false" && block13.empty =="false" && block14.empty =="false" && block15.empty =="false"){
				if((block4.denom == block13.denom) && (block4.nume == block13.nume) && (block4.whole == block13.whole) &&
				(block5.denom == block14.denom) && (block5.nume == block14.nume) && (block5.whole == block14.whole) &&
				(block6.denom == block15.denom)	&& (block6.nume == block15.nume) && (block6.whole == block15.whole)){					
					if($("#B_blank").length>0){
						$("div").remove("#B_blank");
					}
					draw.drawCorrectSym(eval(block4.pen), block4.type, block4.whole, block4.denom, block4.nume);	//ctx, type, whole, denom, nume
					draw.drawCorrectSym(eval(block5.pen), block5.type, block5.whole, block5.denom, block5.nume);	//ctx, type, whole, denom, nume
					draw.drawCorrectSym(eval(block6.pen), block6.type, block6.whole, block6.denom, block6.nume);	//ctx, type, whole, denom, nume
					
					block4.use = false, block5.use = false, block6.use = false;
					block13.use = false, block14.use = false, block15.use = false;
					block26.obj.css("display","none");					
					handleObj.createResultBox("B_correct","correct",1050,1500,"bottom");					
					B_check = true;
					$.post("../mathematic/myphp/collect_picture_data/collect_personal_time.php", 
					{ p_time: data_log.member_B_complete_time, date:now.toString().substring(0,33), member: "member_B"} );//儲存B的完成時間
					clearTimeout(B_time);
					nextStage();
				}else{
					if($("#B_correct").length>0){
						$("div").remove("#B_correct");
					}
					if($("#B_blank").length>0){
						$("div").remove("#B_blank");
					}
					if((block4.denom != block13.denom) || (block4.nume != block13.nume)){
						//handleObj.createResultBox("B_error","error",1050,740,"bottom");
						draw.drawErrorSym(eval(block4.pen), block4.type, block4.whole, block4.denom, block4.nume);	//ctx, type, whole, denom, nume
					}else if((block4.denom == block13.denom) && (block4.nume == block13.nume)){
						draw.drawCorrectSym(eval(block4.pen), block4.type, block4.whole, block4.denom, block4.nume);
						block13.use = false;
					}
					if((block5.denom != block14.denom) || (block5.nume != block14.nume)){
					//	handleObj.createResultBox("B_error","error",1050,980,"bottom");
						draw.drawErrorSym(eval(block5.pen), block5.type, block5.whole, block5.denom, block5.nume);	//ctx, type, whole, denom, nume
					}else if((block5.denom == block14.denom) && (block5.nume == block14.nume)){
						draw.drawCorrectSym(eval(block5.pen), block5.type, block5.whole, block5.denom, block5.nume);
						block14.use = false;
					}
					if((block6.denom != block15.denom) || (block6.nume != block15.nume)){
						//handleObj.createResultBox("B_error","error",1050,1220,"bottom");
						draw.drawErrorSym(eval(block6.pen), block6.type, block6.whole, block6.denom, block6.nume);	//ctx, type, whole, denom, nume
					}else if((block6.denom == block15.denom) && (block6.nume == block15.nume)){
						draw.drawCorrectSym(eval(block6.pen), block6.type, block5.whole, block6.denom, block6.nume);
						block15.use = false;
					}	
				}
				
			}else{
				handleObj.createResultBox("B_blank","blank",1060,1050,"bottom");	//id, answer, top, left, position				
			}
			break;
		case "C_confirm":
			if(block7.empty =="false" && block8.empty =="false" && block9.empty =="false" && block16.empty =="false" && block17.empty =="false" && block18.empty =="false"){
				if((block7.denom == block16.denom) && (block7.nume == block16.nume) && (block7.whole == block16.whole) &&
				(block8.denom == block17.denom) && (block8.nume == block17.nume) && (block8.whole == block17.whole) &&
				(block9.denom == block18.denom)	&& (block9.nume == block18.nume) && (block9.whole == block18.whole) ){					
					if($("#C_blank").length>0){
						$("div").remove("#C_blank");
					}
					draw.drawCorrectSym(eval(block7.pen), block7.type, block7.whole, block7.denom, block7.nume);	//ctx, type, whole, denom, nume
					draw.drawCorrectSym(eval(block8.pen), block8.type, block8.whole, block8.denom, block8.nume);	//ctx, type, whole, denom, nume
					draw.drawCorrectSym(eval(block9.pen), block9.type, block9.whole, block9.denom, block9.nume);	//ctx, type, whole, denom, nume
					
					block7.use = false, block8.use = false, block9.use = false;
					block16.use = false, block17.use = false, block18.use = false;
					block27.obj.css("display","none");					
					handleObj.createResultBox("C_correct","correct",150,1680,"right");					
					C_check = true;
					$.post("../mathematic/myphp/collect_picture_data/collect_personal_time.php", 
					{ p_time: data_log.member_C_complete_time, date:now.toString().substring(0,33), member: "member_C"} );//儲存C的完成時間
					clearTimeout(C_time);
					nextStage();
				}else{					
					if($("#C_blank").length>0){
						$("div").remove("#C_blank");
					}
					if((block7.denom != block16.denom) || (block7.nume != block16.nume)){
					//	handleObj.createResultBox("C_error","error",850,1680,"right");
					draw.drawErrorSym(eval(block7.pen), block7.type, block7.whole, block7.denom, block7.nume);	//ctx, type, whole, denom, nume
					}else if((block7.denom == block16.denom) && (block7.nume == block16.nume) && (block7.whole == block16.whole)){
						draw.drawCorrectSym(eval(block7.pen), block7.type, block7.whole, block7.denom, block7.nume);
						block16.use = false;
					}
					if((block8.denom != block17.denom) || (block8.nume != block17.nume)){
						//handleObj.createResultBox("C_error","error",620,1680,"right");
						draw.drawErrorSym(eval(block8.pen), block8.type, block8.whole, block8.denom, block8.nume);	//ctx, type, whole, denom, nume
					}else if((block8.denom == block17.denom) && (block8.nume == block17.nume) && (block8.whole == block17.whole)){
						draw.drawCorrectSym(eval(block8.pen), block8.type, block8.whole, block8.denom, block8.nume);
						block17.use = false;
					}
					if((block9.denom != block18.denom) || (block9.nume != block18.nume)){
					//	handleObj.createResultBox("C_error","error",380,1680,"right");
					draw.drawErrorSym(eval(block9.pen), block9.type, block9.whole, block9.denom, block9.nume);	//ctx, type, whole, denom, nume
					}else if((block9.denom == block18.denom) && (block9.nume == block18.nume) && (block9.whole == block18.whole)){
						draw.drawCorrectSym(eval(block9.pen), block9.type, block9.whole, block9.denom, block9.nume);
						block18.use = false;
					}
				}
			}else{
				handleObj.createResultBox("C_blank","blank",600,1650,"right");	//id, answer, top, left, position				
			}
			break;
	}
	if(A_check == true && B_check == true && C_check == true){	//當三人都答對時
		$("#A_report").css("display","block"), $("#A_report").animate({opacity:1},600);
		$("#B_report").css("display","block"), $("#B_report").animate({opacity:1},600);
		$("#C_report").css("display","block"), $("#C_report").animate({opacity:1},600);
		$("#explain_A").css("display","none"), $("#explain_B").css("display","none"), $("#explain_C").css("display","none");
		handleObj.showMemberObject();
		block19.obj.css("display","none"), block20.obj.css("display","none"), block21.obj.css("display","none");
		block25.obj.css("display","none"), block26.obj.css("display","none"), block27.obj.css("display","none");
		$.post("../mathematic/myphp/collect_picture_data/collect_total_time.php", { t_time: time, date:now.toString().substring(0,33)} );	//儲存總完成時間
		clearTimeout(timer);
	}
} 

function singleCheck(block){	// 單張圖卡的對錯判斷
	var sym = [block1, block2, block3, block4, block5, block6, block7, block8, block9];
	var gra = [block10, block11, block12, block13, block14, block15, block16, block17, block18];
	
	
}

function touchstart(event){
	event.changedTouches = event.targetTouches;
	//console.log("x:"+event.targetTouches[0].pageX+" y:"+event.targetTouches[0].pageY);
	if(event.changedTouches.length >0){
		for(var i=0; i<blockArray.length; i++){
			for(j=0; j<event.changedTouches.length; j++){
				if(blockArray[i] !=null && event.changedTouches[j].target.id == blockArray[i].id){		
					//$.post("../mathematic/myphp/collect_picture_data/collect_picture_data.php", { obj: blockArray[i].id} );	//儲存資料
					
					switch(blockArray[i].position){			
						case "center":							
							switch(blockArray[i].id){
								case "A_accept":
									draw.clearDraw(ctx38, 270,160); 
									block52.obj.css("display","none");
									block52.target.use = true;
									handleObj.changePicData(true, block52.start, block52.target, block52);	//交換資料
									block52.target.obj.css("border-color","");
									draw.clearDraw(eval(block52.start.pen), 200,200), draw.clearDraw(eval(block52.target.pen), 200,200);
									draw.drawGra(eval(block52.start.pen), block52.start.src, block52.start.type);
									draw.drawGra(eval(block52.target.pen), block52.target.src, block52.target.type);	
									A_change_state = true;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									break;
								case "A_turn_down":
									draw.clearDraw(ctx38, 270,160); 
									block52.obj.css("display","none");
									block52.target.use = true;							
									block52.target.obj.css("border-color","");
									handleObj.changePicData(false, block52.start, block52.target, block52);				
									draw.drawGra(eval(block52.start.pen), block52.start.src, block52.start.type);	
									A_change_state = true;								
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									break;
								case "B_accept":
									draw.clearDraw(ctx39, 270,160); 
									block55.obj.css("display","none");
									block55.target.use = true;
									handleObj.changePicData(true, block55.start, block55.target, block55);	//交換資料
									block55.target.obj.css("border-color","");
									draw.clearDraw(eval(block55.start.pen), 200,200), draw.clearDraw(eval(block55.target.pen), 200,200);
									draw.drawGra(eval(block55.start.pen), block55.start.src, block55.start.type);
									draw.drawGra(eval(block55.target.pen), block55.target.src, block55.target.type);
									B_change_state = true;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									break;
								case "B_turn_down":
									draw.clearDraw(ctx39, 270,160); 
									block55.obj.css("display","none");	
									block55.target.use = true;								
									block55.target.obj.css("border-color","");
									handleObj.changePicData(false, block55.start, block55.target, block55);				
									draw.drawGra(eval(block55.start.pen), block55.start.src, block55.start.type);
									B_change_state = true;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									break;
								case "C_accept":
									draw.clearDraw(ctx40, 270,160); 
									block58.obj.css("display","none");
									block58.target.use = true;
									handleObj.changePicData(true, block58.start, block58.target, block58);	//交換資料
									block58.target.obj.css("border-color","");
									draw.clearDraw(eval(block58.start.pen), 200,200), draw.clearDraw(eval(block58.target.pen), 200,200);
									draw.drawGra(eval(block58.start.pen), block58.start.src, block58.start.type);
									draw.drawGra(eval(block58.target.pen), block58.target.src, block58.target.type);
									C_change_state = true;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									break;
								case "C_turn_down":
									draw.clearDraw(ctx40, 270,160); 
									block58.obj.css("display","none");		
									block58.target.use = true;							
									block58.target.obj.css("border-color","");
									handleObj.changePicData(false, block58.start, block58.target, block58);				
									draw.drawGra(eval(block58.start.pen), block58.start.src, block58.start.type);
									C_change_state = true;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									break;
							}
							break;						
						case "personal_area":
							if(blockArray[i].empty == "false" && blockArray[i].content == "graphic" && blockArray[i].use == true){	//拉取圖卡
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
								blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
								blockMap[blockArray[i].identifier] = blockArray[i];
							
								handleObj.createGraObj(blockArray[i].blockName, blockArray[i].type ,event.changedTouches[j].pageY-100, event.changedTouches[j].pageX-100);	//id, type, top, left		
								handleObj	.createGraProperty(blockArray[i].blockName, blockArray[i].denom, blockArray[i].nume, blockArray[i].src, blockArray[i].canvas, blockArray[i].block_pen, blockArray[i].type, blockArray[i]); //id, denom, nume, src, canvas, ctx, type
								handleObj.createCanvasProperty(blockArray[i].content, blockArray[i].type, blockArray[i].blockName, blockArray[i].canvas, blockArray[i].block_pen);	//index, type ,id, canvas, ctx
								draw.drawCentralGra(eval(blockArray[i].block_pen), blockArray[i].type, blockArray[i].src);	//ctx, fraction_kind, imgPath
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height()), blockArray[i].empty = "true";
								for(var a=0; a<blockArray.length; a++){
										if(blockArray[a] == null){
											//console.log("block:"+blockArray[i].blockName);
											blockArray[a] = eval(blockArray[i].blockName);				
											break;							
										}
								}
								handleObj.disableSinRubber();
								handleObj.calGraTakeTimes(blockArray[i]);//計算每張圖卡的抓取次數
								//console.log("pen:"+blockArray[i].block_pen+" canvas:"+blockArray[i].canvas);															
							}
						/*	if(blockArray[i].empty == "false" && blockArray[i].content == "symbol" && blockArray[i].use == true){	//拉取字符
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
								blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
								blockMap[blockArray[i].identifier] = blockArray[i];
								
								handleObj.createSymObj(blockArray[i].blockName, blockArray[i].type, event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, type,top, left		
								handleObj	.createSymProperty(blockArray[i].blockName, blockArray[i].denom, blockArray[i].nume, blockArray[i].whole, blockArray[i].block_pen, blockArray[i].canvas, blockArray[i].type);//id, denom, nume, whole, ctx, canvas, type
								handleObj.createCanvasProperty(blockArray[i].content, blockArray[i].type, blockArray[i].blockName, blockArray[i].canvas, blockArray[i].block_pen);	//index, id, canvas, ctx
								draw.drawCentralSym(eval(blockArray[i].block_pen), blockArray[i].type, blockArray[i].whole, blockArray[i].denom, blockArray[i].nume);	////ctx, type, whole, denom, nume
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height()), blockArray[i].empty = "true";
								for(var a=0; a<blockArray.length; a++){
										if(blockArray[a] == null){
											//console.log("block:"+blockArray[i].blockName);
											blockArray[a] = eval(blockArray[i].blockName);				
											break;							
										}
									}								
							}*/
							if(blockArray[i].id == "A_confirm"){
								check("A_confirm");
								showNext();
							}
							if(blockArray[i].id == "B_confirm"){
								check("B_confirm");
								showNext();
							}
							if(blockArray[i].id == "C_confirm"){
								check("C_confirm");
								showNext();
							}
							if(blockArray[i].id == "A_next"){
								A_next = true;
								blockArray[i].obj.html("OK");
								nextStage();
							}
							if(blockArray[i].id == "B_next"){
								B_next = true;
								blockArray[i].obj.html("OK");
								nextStage();
							}
							if(blockArray[i].id == "C_next"){
								C_next = true;
								blockArray[i].obj.html("OK");
								nextStage();
							}
							if(blockArray[i].id =="clozeExplainA"){				
								var symArray = [block1, block2, block3];
								var graArray = [block10, block11, block12];				
								switch(blockArray[i].func){
									case "close":
										$("#explain_A").animate({opacity:0},600, function(){
											$("#explain_A").css("display","none");
										});		
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","block");
											graArray[k].obj.css("display","block");
											symArray[k].obj.animate({opacity:1},800);
											graArray[k].obj.animate({opacity:1},800);
										}	
										block19.obj.css("display","block");
										block19.obj.animate({opacity:1},800);
										break;
									case "open":										
										$("#explain_A").css("display","block");
										$("#explain_A").animate({opacity:1},600);
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","none");
											graArray[k].obj.css("display","none");
											symArray[k].obj.animate({opacity:1},800);
											graArray[k].obj.animate({opacity:1},800);
											
										}										
										block19.obj.animate({opacity:0.1},800, function(){
											this.obj.css("display","none");
										});
										break;
								}
								handleObj.switchExplainButton(blockArray[i]);
							}
							if(blockArray[i].id =="clozeExplainB"){
								var symArray = [block4, block5, block6];
								var graArray = [block13, block14, block15];
								switch(blockArray[i].func){
									case "close":
										$("#explain_B").animate({opacity:0},600, function(){
											$("#explain_B").css("display","none");
										});	
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","block");
											graArray[k].obj.css("display","block");
											symArray[k].obj.animate({opacity:1},800);
											graArray[k].obj.animate({opacity:1},800);
										}	
										block20.obj.css("display","block");
										block20.obj.animate({opacity:1},800);
										break;
									case "open":										
										$("#explain_B").css("display","block");			
										$("#explain_B").animate({opacity:1},600);
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","none");
											graArray[k].obj.css("display","none");
											symArray[k].obj.animate({opacity:1},800);
											graArray[k].obj.animate({opacity:1},800);											
										}
										block20.obj.animate({opacity:0.1},800, function(){
											this.obj.css("display","none");
										});
										break;
								}
								handleObj.switchExplainButton(blockArray[i]);
							}
							if(blockArray[i].id =="clozeExplainC"){
								var symArray = [block7, block8, block9];
								var graArray = [block16, block17, block18];
								switch(blockArray[i].func){
									case "close":
										$("#explain_C").animate({opacity:0},600, function(){
											$("#explain_C").css("display","none");
										});		
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","block");
											graArray[k].obj.css("display","block");
											symArray[k].obj.animate({opacity:1},800);
											graArray[k].obj.animate({opacity:1},800);
										}
										block21.obj.css("display","block");
										block21.obj.animate({opacity:1},800);
										break;
									case "open":										
										$("#explain_C").css("display","block");				
										$("#explain_C").animate({opacity:1},600);
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","none");
											graArray[k].obj.css("display","none");
											symArray[k].obj.animate({opacity:1},800);
											graArray[k].obj.animate({opacity:1},800);
											
										}
										block21.obj.animate({opacity:0.1},800, function(){
											this.obj.css("display","none");
										});
										break;
								}
								handleObj.switchExplainButton(blockArray[i]);
							}
							break;			
						case "scatter":
							blockArray[i].identifier = event.changedTouches[j].identifier;
							blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							break;									
					}
				}
			}
		}
	}
}

function touchmove(event){
	event.changedTouches = event.targetTouches;
	
	for(var i=0; i<event.changedTouches.length; i++){
		var block = blockMap[event.changedTouches[i].identifier];		
		if(block){			
			if(block.position =="scatter"){
				block.x = block.offset.x + event.changedTouches[i].pageX;
				block.y = block.offset.y + event.changedTouches[i].pageY;
				if(block.obj.offset().top>=1271 || block.obj.offset().top<=0 || block.obj.offset().left>=2000 || block.obj.offset().left<=-1){
					if(block.obj.offset().top>=1271){ 
						block.obj.offset({top:block.obj.offset().top -= 10});
					}
					if(block.obj.offset().top<=0){
						block.obj.offset({top:block.obj.offset().top += 10});
					}
					if(block.obj.offset().left>=2000){
						block.obj.offset({left:block.obj.offset().left -= 10});
					}
					if(block.obj.offset().left<=-1){
						block.obj.offset({left:block.obj.offset().left += 10});
					}					
				}else{						
					block.obj.css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) ", "scale(0.7)"].join(""));
				}
				switch(block.orientation){		//橡皮筋功能(同儕互相交換圖卡)
					case "left": //Member A的操作
						if(block.x >300 && block.x<650){	//往上移動時，顯示橡皮筋的置放區域(左邊區塊)
							handleObj.showRubberBandArea("A_left");							
							for(var j=27; j<=29; j++){	//顯示左邊的Rubber band
								if(block.obj.offset().top>= blockArray[j].obj.offset().top && block.obj.offset().left>= blockArray[j].obj.offset().left 
								&& block.obj.offset().top<= blockArray[j].obj.offset().top+120 && block.obj.offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.use ==true
								&& blockArray[j].target.empty == "false" && C_change_state == true){
									$("#"+blockArray[j].linkLine).css("display","block");
								}else{
									$("#"+blockArray[j].linkLine).css("display","none");
								}
							}													
						}else{
							handleObj.hideRubberBandArea("A_left");
						}
						
						if(block.x >300 && block.x<650){	//往上移動時，顯示橡皮筋的置放區域(右邊區塊)
							handleObj.showRubberBandArea("A_right");							
							for(var j=31; j<=33; j++){	//顯示右邊的Rubber band
								if(block.obj.offset().top>= blockArray[j].obj.offset().top && block.obj.offset().left>= blockArray[j].obj.offset().left 
								&& block.obj.offset().top<= blockArray[j].obj.offset().top+120 && block.obj.offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.use ==true
								&& blockArray[j].target.empty == "false" && B_change_state == true){
									$("#"+blockArray[j].linkLine).css("display","block");
								}else{
									$("#"+blockArray[j].linkLine).css("display","none");
								}
							}	
						}else{
							handleObj.hideRubberBandArea("A_right");
						}
						break;
					case "bottom": //Member B的操作
						if(block.y <-140 && block.y >-400){
							handleObj.showRubberBandArea("B_left");							
							for(var j=35; j<=37; j++){	//顯示左邊的Rubber band
								if(block.obj.offset().top>= blockArray[j].obj.offset().top && block.obj.offset().left>= blockArray[j].obj.offset().left 
								&& block.obj.offset().top<= blockArray[j].obj.offset().top+120 && block.obj.offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.use ==true
								&& blockArray[j].target.empty == "false" && A_change_state == true){
									$("#"+blockArray[j].linkLine).css("display","block");
								}else{
									$("#"+blockArray[j].linkLine).css("display","none");
								}
							}
						}else{
							handleObj.hideRubberBandArea("B_left");
						}
												
						if(block.y <-140 && block.y >-400){
							handleObj.showRubberBandArea("B_right");							
							for(var j=39; j<=41; j++){	//顯示右邊的Rubber band
								if(block.obj.offset().top>= blockArray[j].obj.offset().top && block.obj.offset().left>= blockArray[j].obj.offset().left 
								&& block.obj.offset().top<= blockArray[j].obj.offset().top+120 && block.obj.offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.use ==true
								&& blockArray[j].target.empty == "false" && C_change_state == true){
									$("#"+blockArray[j].linkLine).css("display","block");
								}else{
									$("#"+blockArray[j].linkLine).css("display","none");
								}
							}
						}else{
							handleObj.hideRubberBandArea("B_right");
						}
						break;
					case "right": //Member C的操作
						if(block.x <-165 && block.x >-400){
							handleObj.showRubberBandArea("C_left");							
							for(var j=43; j<=45; j++){	//顯示左邊的Rubber band
								if(block.obj.offset().top>= blockArray[j].obj.offset().top && block.obj.offset().left>= blockArray[j].obj.offset().left 
								&& block.obj.offset().top<= blockArray[j].obj.offset().top+120 && block.obj.offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.use ==true
								&& blockArray[j].target.empty == "false" && B_change_state == true){
									$("#"+blockArray[j].linkLine).css("display","block");
								}else{
									$("#"+blockArray[j].linkLine).css("display","none");
								}
							}
						}else{
							handleObj.hideRubberBandArea("C_left");
						}
						
						if(block.x <-165 && block.x >-400){
							handleObj.showRubberBandArea("C_right");							
							for(var j=47; j<=49; j++){	//顯示右邊的Rubber band
								if(block.obj.offset().top>= blockArray[j].obj.offset().top && block.obj.offset().left>= blockArray[j].obj.offset().left 
								&& block.obj.offset().top<= blockArray[j].obj.offset().top+120 && block.obj.offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.use ==true
								&& blockArray[j].target.empty == "false" && A_change_state == true){
									$("#"+blockArray[j].linkLine).css("display","block");
								}else{
									$("#"+blockArray[j].linkLine).css("display","none");
								}
							}
						}else{
							handleObj.hideRubberBandArea("C_right");
						}
						break;
				}
							
				//console.log("block.x:"+block.x+" block.y:"+block.y);
			}
			if(block.position =="personal_area"){
				block.x = block.offset.x + event.changedTouches[i].pageX;
				block.y = block.offset.y + event.changedTouches[i].pageY;
				//console.log("block.x:"+block.x+" block.y:"+block.y);
				
				if($("#"+block.blockName).offset().top>=1271 || $("#"+block.blockName).offset().top<=0 || $("#"+block.blockName).offset().left>=2000 || $("#"+block.blockName).offset().left<=-1){
					if($("#"+block.blockName).offset().top>=1271){
						$("#"+block.blockName).offset({top:$("#"+block.blockName).offset().top -= 10});
					}
					if($("#"+block.blockName).offset().top<=0){
						$("#"+block.blockName).offset({top:$("#"+block.blockName).offset().top += 10});
					}
					if(block.obj.offset().left>=2000){
						$("#"+block.blockName).offset({left:$("#"+block.blockName).offset().left -= 10});
					}
					if($("#"+block.blockName).offset().left<=-1){
						$("#"+block.blockName).offset({left:$("#"+block.blockName).offset().left += 10});
					}					
				}else{
					block.x = block.offset.x + event.changedTouches[i].pageX;
					block.y = block.offset.y + event.changedTouches[i].pageY;	
					$("#"+block.blockName).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) ", "scale(0.7)"].join(""));						
				}				
				eval(block.blockName+".x=block.x"),eval(block.blockName+".y=block.y");
				switch(block.orientation){		//橡皮筋功能(同儕互相交換圖卡)
					case "left":
						if(block.x >300 && block.x<650){	//往上移動時，顯示橡皮筋的置放區域(左邊區塊)
							handleObj.showRubberBandArea("A_left");							
							switch(block.id){	//判斷點選哪個區塊
								case "member_A_fraction_graphic_first":
									if(block.y>-38 && block.y<=70 && block28.target.use ==true && block28.target.empty == "false" && C_change_state == true){	//顯示Rubber band
										$("#A_to_c2_link").css("display","block");																
									}else{
										$("#A_to_c2_link").css("display","none");
									}
									if(block.y>70 && block.y<=184 && block29.target.use ==true && block29.target.empty == "false" && C_change_state == true){
										$("#A_to_c1_link").css("display","block");		
									}else{
										$("#A_to_c1_link").css("display","none");
									}
									if(block.y>184 && block.y<=389 && block30.target.use ==true && block30.target.empty == "false" && C_change_state == true){
										$("#A_to_c0_link").css("display","block");	
									}else{
										$("#A_to_c0_link").css("display","none");
									}									
									break;
								case "member_A_fraction_graphic_second":
									if(block.y>=-290 && block.y<=-178 && block28.target.use ==true && block28.target.empty == "false" && C_change_state == true){	//顯示Rubber band
										$("#A_to_c2_link").css("display","block");							
									}else{
										$("#A_to_c2_link").css("display","none");
									}
									if(block.y>=-142 && block.y<=-4 && block29.target.use ==true && block29.target.empty == "false" && C_change_state == true){
										$("#A_to_c1_link").css("display","block");		
									}else{
										$("#A_to_c1_link").css("display","none");
									}
									if(block.y>2 && block.y<=116 && block30.target.use ==true && block30.target.empty == "false" && C_change_state == true){
										$("#A_to_c0_link").css("display","block");		
									}else{
										$("#A_to_c0_link").css("display","none");
									}
									break;
								case "member_A_fraction_graphic_third":
									if(block.y>=-448 && block.y<=-350 && block28.target.use ==true && block28.target.empty == "false" && C_change_state == true){
										$("#A_to_c2_link").css("display","block");		
									}else{
										$("#A_to_c2_link").css("display","none");
									}
									if(block.y>=-334 && block.y<=-218 && block29.target.use ==true && block29.target.empty == "false"){
										$("#A_to_c1_link").css("display","block");			
									}else{
										$("#A_to_c1_link").css("display","none");
									}
									if(block.y>=-212 && block.y<=-106 && block30.target.use ==true && block30.target.empty == "false" && C_change_state == true){
										$("#A_to_c0_link").css("display","block");	
									}else{
										$("#A_to_c0_link").css("display","none");
									}
									break;
							}							
						}else{
							handleObj.hideRubberBandArea("A_left");
						}
						
						if(block.x >300 && block.x<650){	//往上移動時，顯示橡皮筋的置放區域(右邊區塊)
							handleObj.showRubberBandArea("A_right");							
							switch(block.id){
								case "member_A_fraction_graphic_first":
									if(block.y>410 && block.y<=536 && block32.target.use ==true && block32.target.empty == "false" && B_change_state == true){
										$("#A_to_b2_link").css("display","block");		
									}else{
										$("#A_to_b2_link").css("display","none");
									}
									if(block.y>540 && block.y<=670 && block33.target.use ==true && block33.target.empty == "false" && B_change_state == true){
										$("#A_to_b1_link").css("display","block");		
									}else{
										$("#A_to_b1_link").css("display","none");
									}
									if(block.y>674 && block.y<=788 && block34.target.use ==true && block34.target.empty == "false" && B_change_state == true){
										$("#A_to_b0_link").css("display","block");		
									}else{
										$("#A_to_b0_link").css("display","none");
									}
									break;
								case "member_A_fraction_graphic_second":
									if(block.y>144 && block.y<=265 && block32.target.use ==true && block32.target.empty == "false" && B_change_state == true){
										$("#A_to_b2_link").css("display","block");	
									}else{
										$("#A_to_b2_link").css("display","none");
									}
									if(block.y>306 && block.y<=426 && block33.target.use ==true && block33.target.empty == "false" && B_change_state == true){
										$("#A_to_b1_link").css("display","block");
									}else{
										$("#A_to_b1_link").css("display","none");
									}
									if(block.y>464 && block.y<=590 && block34.target.use ==true && block34.target.empty == "false" && B_change_state == true){
										$("#A_to_b0_link").css("display","block");			
									}else{
										$("#A_to_b0_link").css("display","none");
									}
									break;
								case "member_A_fraction_graphic_third":
									if(block.y>=-26 && block.y<=94 && block32.target.use ==true && block32.target.empty == "false" && B_change_state == true){
										$("#A_to_b2_link").css("display","block");			
									}else{
										$("#A_to_b2_link").css("display","none");
									}
									if(block.y>=96 && block.y<=202 && block33.target.use ==true && block33.target.empty == "false" && B_change_state == true){
										$("#A_to_b1_link").css("display","block");		
									}else{
										$("#A_to_b1_link").css("display","none");
									}
									if(block.y>=226 && block.y<=340 && block34.target.use ==true && block34.target.empty == "false" && B_change_state == true){
										$("#A_to_b0_link").css("display","block");	
									}else{
										$("#A_to_b0_link").css("display","none");
									}
									break;
							}							
						}else{
							handleObj.hideRubberBandArea("A_right");
						}
						break;
					case "bottom":
						if(block.y <-140 && block.y >-400){
							handleObj.showRubberBandArea("B_left");							
							switch(block.id){
								case "member_B_fraction_graphic_first":
									if(block.x>=-73 && block.x<=106 && block36.target.use ==true && block36.target.empty == "false" && A_change_state == true){
										$("#B_to_a2_link").css("display","block");
									}else{
										$("#B_to_a2_link").css("display","none");
									}
									if(block.x>=91 && block.x<=215 && block37.target.use ==true && block37.target.empty == "false" && A_change_state == true){
										$("#B_to_a1_link").css("display","block");
									}else{
										$("#B_to_a1_link").css("display","none");
									}
									if(block.x>=212 && block.x<=338 && block38.target.use ==true && block38.target.empty == "false" && A_change_state == true){
										$("#B_to_a0_link").css("display","block");
									}else{
										$("#B_to_a0_link").css("display","none");
									}
									break;
								case "member_B_fraction_graphic_second":
									if(block.x>=-296 && block.x<=-152 && block36.target.use ==true && block36.target.empty == "false" && A_change_state == true){
										$("#B_to_a2_link").css("display","block");
									}else{
										$("#B_to_a2_link").css("display","none");
									}
									if(block.x>=-153 && block.x<=-36 && block37.target.use ==true && block37.target.empty == "false" && A_change_state == true){
										$("#B_to_a1_link").css("display","block");	
									}else{
										$("#B_to_a1_link").css("display","none");
									}
									if(block.x>=6 && block.x<=126 && block38.target.use ==true && block38.target.empty == "false" && A_change_state == true){
										$("#B_to_a0_link").css("display","block");
									}else{
										$("#B_to_a0_link").css("display","none");
									}
									break;
								case "member_B_fraction_graphic_third":
									if(block.x>=-518 && block.x<=-407 && block36.target.use ==true && block36.target.empty == "false" && A_change_state == true){
										$("#B_to_a2_link").css("display","block");
									}else{
										$("#B_to_a2_link").css("display","none");
									}
									if(block.x>=-374 && block.x<=-225 && block37.target.use ==true && block37.target.empty == "false" && A_change_state == true){
										$("#B_to_a1_link").css("display","block");
									}else{
										$("#B_to_a1_link").css("display","none");
									}
									if(block.x>=-207 && block.x<=-92 && block38.target.use ==true && block38.target.empty == "false" && A_change_state == true){
										$("#B_to_a0_link").css("display","block");							
									}else{
										$("#B_to_a0_link").css("display","none");
									}
									break;
							}
						}else{
							handleObj.hideRubberBandArea("B_left");
						}
												
						if(block.y <-140 && block.y >-400){
							handleObj.showRubberBandArea("B_right");							
							switch(block.id){
								case "member_B_fraction_graphic_first":
									if(block.x>=387 && block.x<=507 && block40.target.use ==true && block40.target.empty == "false" && C_change_state == true){
										$("#B_to_c2_link").css("display","block");
									}else{
										$("#B_to_c2_link").css("display","none");
									}
									if(block.x>=565 && block.x<=682 && block41.target.use ==true && block41.target.empty == "false" && C_change_state == true){
										$("#B_to_c1_link").css("display","block");
									}else{
										$("#B_to_c1_link").css("display","none");
									}
									if(block.x>=680 && block.x<=800 && block42.target.use ==true && block42.target.empty == "false" && C_change_state == true){
										$("#B_to_c0_link").css("display","block");
									}else{
										$("#B_to_c0_link").css("display","none");
									}
									break;
								case "member_B_fraction_graphic_second":
									if(block.x>=131 && block.x<=267 && block40.target.use ==true && block40.target.empty == "false" && C_change_state == true){
										$("#B_to_c2_link").css("display","block");
									}else{
										$("#B_to_c2_link").css("display","none");
									}
									if(block.x>=286 && block.x<=434 && block41.target.use ==true && block41.target.empty == "false" && C_change_state == true){
										$("#B_to_c1_link").css("display","block");
									}else{
										$("#B_to_c1_link").css("display","none");
									}
									if(block.x>=440 && block.x<=560 && block42.target.use ==true && block42.target.empty == "false" && C_change_state == true){
										$("#B_to_c0_link").css("display","block");
									}else{
										$("#B_to_c0_link").css("display","none");
									}
									break;
								case "member_B_fraction_graphic_third":
									if(block.x>=-54 && block.x<=66 && block40.target.use ==true && block40.target.empty == "false" && C_change_state == true){
										$("#B_to_c2_link").css("display","block");
									}else{
										$("#B_to_c2_link").css("display","none");
									}
									if(block.x>=87 && block.x<=198 && block41.target.use ==true && block41.target.empty == "false" && C_change_state == true){
										$("#B_to_c1_link").css("display","block");
									}else{
										$("#B_to_c1_link").css("display","none");
									}
									if(block.x>=233 && block.x<=347 && block42.target.use ==true && block42.target.empty == "false" && C_change_state == true){
										$("#B_to_c0_link").css("display","block");					
									}else{
										$("#B_to_c0_link").css("display","none");
									}
									break;
							}
						}else{
							handleObj.hideRubberBandArea("B_right");
						}
						break;
					case "right":
						if(block.x <-165 && block.x >-400){
							handleObj.showRubberBandArea("C_left");							
							switch(block.id){
								case "member_C_fraction_graphic_first":
									if(block.y>=-79 && block.y<=30 && block44.target.use ==true && block44.target.empty == "false" && B_change_state == true){
										$("#C_to_b2_link").css("display","block");					
									}else{
										$("#C_to_b2_link").css("display","none");
									}
									if(block.y>=-214 && block.y<=-99 && block45.target.use ==true && block45.target.empty == "false" && B_change_state == true){
										$("#C_to_b1_link").css("display","block");
									}else{
										$("#C_to_b1_link").css("display","none");
									}
									if(block.y>=-365 && block.y<=-250 && block46.target.use ==true && block46.target.empty == "false" && B_change_state == true){
										$("#C_to_b0_link").css("display","block");
									}else{
										$("#C_to_b0_link").css("display","none");
									}
									break;
								case "member_C_fraction_graphic_second":
									if(block.y>=140 && block.y<=258 && block44.target.use ==true && block44.target.empty == "false" && B_change_state == true){
										$("#C_to_b2_link").css("display","block");
									}else{
										$("#C_to_b2_link").css("display","none");
									}
									if(block.y>=-12 && block.y<=110 && block45.target.use ==true && block45.target.empty == "false" && B_change_state == true){
										$("#C_to_b1_link").css("display","block");
									}else{
										$("#C_to_b1_link").css("display","none");
									}
									if(block.y>=-142 && block.y<=-36 && block46.target.use ==true && block46.target.empty == "false" && B_change_state == true){
										$("#C_to_b0_link").css("display","block");
									}else{
										$("#C_to_b0_link").css("display","none");
									}
									break;
								case "member_C_fraction_graphic_third":
									if(block.y>=374 && block.y<=512 && block44.target.use ==true && block44.target.empty == "false" && B_change_state == true){
										$("#C_to_b2_link").css("display","block");
									}else{
										$("#C_to_b2_link").css("display","none");
									}
									if(block.y>=242 && block.y<=346 && block45.target.use ==true && block45.target.empty == "false" && B_change_state == true){
										$("#C_to_b1_link").css("display","block");
									}else{
										$("#C_to_b1_link").css("display","none");
									}
									if(block.y>=87 && block.y<=197 && block46.target.use ==true && block46.target.empty == "false" && B_change_state == true){
										$("#C_to_b0_link").css("display","block");
									}else{
										$("#C_to_b0_link").css("display","none");
									}
									break;
							}
						}else{
							handleObj.hideRubberBandArea("C_left");
						}
						
						if(block.x <-165 && block.x >-400){
							handleObj.showRubberBandArea("C_right");							
							switch(block.id){
								case "member_C_fraction_graphic_first":
									if(block.y>=-548 && block.y<=-428 && block48.target.use ==true && block48.target.empty == "false" && A_change_state == true){
										$("#C_to_a2_link").css("display","block");
									}else{
										$("#C_to_a2_link").css("display","none");
									}
									if(block.y>=-686 && block.y<=-582 && block49.target.use ==true && block49.target.empty == "false" && A_change_state == true){
										$("#C_to_a1_link").css("display","block");
									}else{
										$("#C_to_a1_link").css("display","none");
									}
									if(block.y>=-827 && block.y<=-688 && block50.target.use ==true && block50.target.empty == "false" && A_change_state == true){
										$("#C_to_a0_link").css("display","block");
									}else{
										$("#C_to_a0_link").css("display","none");
									}
									break;
								case "member_C_fraction_graphic_second":
									if(block.y>=-332 && block.y<=-221 && block48.target.use ==true && block48.target.empty == "false" && A_change_state == true){
										$("#C_to_a2_link").css("display","block");
									}else{
										$("#C_to_a2_link").css("display","none");
									}
									if(block.y>=-460 && block.y<=-356 && block49.target.use ==true && block49.target.empty == "false" && A_change_state == true){
										$("#C_to_a1_link").css("display","block");
									}else{
										$("#C_to_a1_link").css("display","none");
									}
									if(block.y>=-597 && block.y<=-489 && block50.target.use ==true && block50.target.empty == "false" && A_change_state == true){
										$("#C_to_a0_link").css("display","block");
									}else{
										$("#C_to_a0_link").css("display","none");
									}
									break;
								case "member_C_fraction_graphic_third":
									if(block.y>=-49 && block.y<=57 && block48.target.use ==true && block48.target.empty == "false" && A_change_state == true){
										$("#C_to_a2_link").css("display","block");
									}else{
										$("#C_to_a2_link").css("display","none");
									}
									if(block.y>=-198 && block.y<=-90 && block49.target.use ==true && block49.target.empty == "false" && A_change_state == true){
										$("#C_to_a1_link").css("display","block");
									}else{
										$("#C_to_a1_link").css("display","none");
									}
									if(block.y>=-330 && block.y<=-226 && block50.target.use ==true && block50.target.empty == "false" && A_change_state == true){
										$("#C_to_a0_link").css("display","block");
									}else{
										$("#C_to_a0_link").css("display","none");
									}
									break;
							}
						}else{
							handleObj.hideRubberBandArea("C_right");
						}
						break;
				}
			}
		}
	}
	event.preventDefault();
}

function touchend(event){
	event.changedTouches = event.targetTouches;
	for(var i=0; i<event.changedTouches.length; i++){
			var block =  blockMap[event.changedTouches[i].identifier];	
			if(block){
				if(block.position == "scatter" && block.content =="graphic"){		//圖卡移動到個人面版
					for(var j=9; j<18; j++){		//判斷圖卡移動到member A, B, C
						if((block.obj.offset().left+0 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+170 >=blockArray[j].obj.offset().top) && 
						(block.obj.offset().left+0 <=blockArray[j].obj.offset().left+250) && (block.obj.offset().top+170 <=blockArray[j].obj.offset().top+250) &&(blockArray[j].empty =="true")){
							draw.drawGra(eval(blockArray[j].pen), block.src, block.type);	//ctx, imgPath, which_fraction						
							blockArray[j].blockName = block.id;
							blockArray[j].denom = block.denom;
							blockArray[j].nume = block.nume;
							blockArray[j].whole = block.whole;
							blockArray[j].block_pen = block.pen;
							blockArray[j].canvas = block.canvas;
							blockArray[j].src = block.src;
							blockArray[j].type = block.type;
							for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
								if(blockArray[a] !=null && block.id == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
									block.obj.remove();
									eval(block.name+"=''");
									eval(block.canvas+"=''");
									eval(block.pen+"=''");
									blockArray[a] = null;
								}
							}							
							blockArray[j].empty ="false";
						}
					}															
				}
				
				if(block.position == "personal_area" && block.content =="graphic"){	//拖曳圖卡到Rubber band區域 (從個人面板拉出時)
					switch(block.orientation){
						case "left": //Member A的操作
							for(var j=27; j<=29; j++){	//傳送圖卡到C面板
								if($("#"+block.blockName).offset().left>=blockArray[j].obj.offset().left && $("#"+block.blockName).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.blockName).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.blockName).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true && C_change_state == true){
									$("#"+block.blockName).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										this.remove();
										block58.obj.css("display","block");										
									});	
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.blockName == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.blockName.name+"=''");
											eval(block.blockName.canvas+"=''");
											eval(block.blockName.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("C_whether_change", block63.pen, block.src, block.type);	//panel, ctx, imgPath, type
									block58.blockName = block.blockName;							
									block58.denom = block.denom;
									block58.nume = block.nume;
									block58.whole = block.whole;
									block58.block_pen = block.pen;
									block58.canvas = block.canvas;
									block58.src = block.src;
									block58.type = block.type;
									block58.start = block;
									block58.target = blockArray[j].target;
									
									block58.start.empty = "temp";	//代表此格目前在傳送當中
									handleObj.moveChangePanel(block58);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#A_rubberBandArea_right").css("display","none"), $("#A_rubberBandArea_left").css("display","none");
									$("#"+blockArray[j].linkLine).css("display","none");
									C_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id);
								}
							}
							for(var j=31; j<=33; j++){	//傳送圖卡到B面板
								if($("#"+block.blockName).offset().left>=blockArray[j].obj.offset().left && $("#"+block.blockName).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.blockName).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.blockName).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true && B_change_state == true){
									$("#"+block.blockName).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										this.remove();
										block55.obj.css("display","block");
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.blockName == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.blockName.name+"=''");
											eval(block.blockName.canvas+"=''");
											eval(block.blockName.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("B_whether_change", block62.pen, block.src, block.type);
									block55.blockName = block.blockName;							
									block55.denom = block.denom;
									block55.nume = block.nume;
									block55.whole = block.whole;
									block55.block_pen = block.pen;
									block55.canvas = block.canvas;
									block55.src = block.src;
									block55.type = block.type;
									block55.start = block;
									block55.target = blockArray[j].target;
									
									block55.start.empty = "temp";
									handleObj.moveChangePanel(block55);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#A_rubberBandArea_right").css("display","none"), $("#A_rubberBandArea_left").css("display","none");
									$("#"+blockArray[j].linkLine).css("display","none");	
									B_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id);
								}
							}
							break;
						case "bottom": //Member B的操作
							for(var j=35; j<=37; j++){	//傳送圖卡到A面板
								if($("#"+block.blockName).offset().left>=blockArray[j].obj.offset().left && $("#"+block.blockName).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.blockName).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.blockName).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true && A_change_state == true){
									$("#"+block.blockName).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										this.remove();
										block52.obj.css("display","block");
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.blockName == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.blockName.name+"=''");
											eval(block.blockName.canvas+"=''");
											eval(block.blockName.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("A_whether_change", block61.pen, block.src, block.type);
									block52.blockName = block.blockName;							
									block52.denom = block.denom;
									block52.nume = block.nume;
									block52.whole = block.whole;
									block52.block_pen = block.pen;
									block52.canvas = block.canvas;
									block52.src = block.src;
									block52.type = block.type;
									block52.start = block;
									block52.target = blockArray[j].target;									
									
									block52.start.empty = "temp";
									handleObj.moveChangePanel(block52);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#B_rubberBandArea_right").css("display","none"), $("#B_rubberBandArea_left").css("display","none");
									$("#"+blockArray[j].linkLine).css("display","none");	
									A_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id);
								}
							}
							for(var j=39; j<=41; j++){	//傳送圖卡到C面板
								if($("#"+block.blockName).offset().left>=blockArray[j].obj.offset().left && $("#"+block.blockName).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.blockName).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.blockName).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true && C_change_state == true){
									$("#"+block.blockName).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										this.remove();
										block58.obj.css("display","block");
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.blockName == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.blockName.name+"=''");
											eval(block.blockName.canvas+"=''");
											eval(block.blockName.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("C_whether_change", block63.pen, block.src, block.type);
									block58.blockName = block.blockName;							
									block58.denom = block.denom;
									block58.nume = block.nume;
									block58.whole = block.whole;
									block58.block_pen = block.pen;
									block58.canvas = block.canvas;
									block58.src = block.src;
									block58.type = block.type;
									block58.start = block;
									block58.target = blockArray[j].target;
									
									block58.start.empty = "temp";
									handleObj.moveChangePanel(block58);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#B_rubberBandArea_right").css("display","none"), $("#B_rubberBandArea_left").css("display","none");
									$("#"+blockArray[j].linkLine).css("display","none");	
									C_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id);
								}
							}
							break;
						case "right": //Member C的操作
							for(var j=43; j<=45; j++){	//傳送圖卡到B面板
								if($("#"+block.blockName).offset().left>=blockArray[j].obj.offset().left-200 && $("#"+block.blockName).offset().top>=blockArray[j].obj.offset().top-200
								&& $("#"+block.blockName).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.blockName).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true && B_change_state == true){
									$("#"+block.blockName).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){																			
										this.remove();						
										block55.obj.css("display","block");				
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.blockName == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.blockName.name+"=''");
											eval(block.blockName.canvas+"=''");
											eval(block.blockName.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("B_whether_change", block62.pen, block.src, block.type);
									block55.blockName = block.blockName;							
									block55.denom = block.denom;
									block55.nume = block.nume;
									block55.whole = block.whole;
									block55.block_pen = block.pen;
									block55.canvas = block.canvas;
									block55.src = block.src;
									block55.type = block.type;
									block55.start = block;
									block55.target = blockArray[j].target;
									
									block55.start.empty = "temp";
									handleObj.moveChangePanel(block55);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#C_rubberBandArea_right").css("display","none"), $("#C_rubberBandArea_left").css("display","none");
									$("#"+blockArray[j].linkLine).css("display","none");	
									B_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id + " j:"+j);
									break;
								}
							}
							for(var j=47; j<=49; j++){	//傳送圖卡到A面板
								if($("#"+block.blockName).offset().left>=blockArray[j].obj.offset().left-200 && $("#"+block.blockName).offset().top>=blockArray[j].obj.offset().top-200
								&& $("#"+block.blockName).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.blockName).offset().top<=blockArray[j].obj.offset().top+120  && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true  && A_change_state == true){
									$("#"+block.blockName).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600,function(){
										this.remove();
										block52.obj.css("display","block");
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.blockName == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.blockName.name+"=''");
											eval(block.blockName.canvas+"=''");
											eval(block.blockName.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("A_whether_change", block61.pen, block.src, block.type);
									block52.blockName = block.blockName;							
									block52.denom = block.denom;
									block52.nume = block.nume;
									block52.whole = block.whole;
									block52.block_pen = block.pen;
									block52.canvas = block.canvas;
									block52.src = block.src;
									block52.type = block.type;
									block52.start = block;
									block52.target = blockArray[j].target;
									
									block52.start.empty = "temp";
									handleObj.moveChangePanel(block52);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#C_rubberBandArea_right").css("display","none"), $("#C_rubberBandArea_left").css("display","none");	
									$("#"+blockArray[j].linkLine).css("display","none");	
									A_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id + " j:"+j);
									break;
								}							
							}
							break;
					}
				}
				
				if(block.position == "scatter" && block.content =="graphic"){	//拖曳圖卡到Rubber band區域 (從個人面板拉出，散落在面板外的區域)
					switch(block.orientation){
						case "left": //Member A的操作
							for(var j=27; j<=29; j++){	//傳送圖卡到C面板
								if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true  && C_change_state == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										this.remove();
										block58.obj.css("display","block");
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.id == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.name+"=''");
											eval(block.canvas+"=''");
											eval(block.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("C_whether_change", block63.pen, block.src, block.type);
									block58.blockName = block.id;							
									block58.denom = block.denom;
									block58.nume = block.nume;
									block58.whole = block.whole;
									block58.block_pen = block.pen;
									block58.canvas = block.canvas;
									block58.src = block.src;
									block58.type = block.type;
									block58.start = block.start;
									block58.target = blockArray[j].target;
									
									block58.start.empty = "temp";
									handleObj.moveChangePanel(block58);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#A_rubberBandArea_right").css("display","none"), $("#A_rubberBandArea_left").css("display","none");
									$("#"+blockArray[j].linkLine).css("display","none");	
									C_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id);
								}
							}
							for(var j=31; j<=33; j++){	//傳送圖卡到B面板
								if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true && B_change_state == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										this.remove();
										block55.obj.css("display","block");
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.id == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.name+"=''");
											eval(block.canvas+"=''");
											eval(block.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("B_whether_change", block62.pen, block.src, block.type);
									block55.blockName = block.id;							
									block55.denom = block.denom;
									block55.nume = block.nume;
									block55.whole = block.whole;
									block55.block_pen = block.pen;
									block55.canvas = block.canvas;
									block55.src = block.src;
									block55.type = block.type;
									block55.start = block.start;
									block55.target = blockArray[j].target;
									
									block55.start.empty = "temp";
									handleObj.moveChangePanel(block55);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#A_rubberBandArea_right").css("display","none"), $("#A_rubberBandArea_left").css("display","none");
									$("#"+blockArray[j].linkLine).css("display","none");	
									B_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id);
								}
							}
							break;
						case "bottom": //Member B的操作
							for(var j=35; j<=37; j++){	//傳送圖卡到A面板
								if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true && A_change_state == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										this.remove();
										block52.obj.css("display","block");
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.id == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.name+"=''");
											eval(block.canvas+"=''");
											eval(block.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("A_whether_change", block61.pen, block.src, block.type);
									block52.blockName = block.id;							
									block52.denom = block.denom;
									block52.nume = block.nume;
									block52.whole = block.whole;
									block52.block_pen = block.pen;
									block52.canvas = block.canvas;
									block52.src = block.src;
									block52.type = block.type;
									block52.start = block.start;
									block52.target = blockArray[j].target;
									
									block52.start.empty = "temp";
									handleObj.moveChangePanel(block52);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#B_rubberBandArea_right").css("display","none"), $("#B_rubberBandArea_left").css("display","none");
									$("#"+blockArray[j].linkLine).css("display","none");	
									A_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id);
								}
							}
							for(var j=39; j<=41; j++){	//傳送圖卡到C面板
								if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true && C_change_state == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										this.remove();
										block58.obj.css("display","block");
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.id == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.name+"=''");
											eval(block.canvas+"=''");
											eval(block.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("C_whether_change", block63.pen, block.src, block.type);
									block58.blockName = block.id;							
									block58.denom = block.denom;
									block58.nume = block.nume;
									block58.whole = block.whole;
									block58.block_pen = block.pen;
									block58.canvas = block.canvas;
									block58.src = block.src;
									block58.type = block.type;
									block58.start = block.start;
									block58.target = blockArray[j].target;
									
									block58.start.empty = "temp";
									handleObj.moveChangePanel(block58);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#B_rubberBandArea_right").css("display","none"), $("#B_rubberBandArea_left").css("display","none");
									$("#"+blockArray[j].linkLine).css("display","none");	
									C_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id);
								}
							}
							break;
						case "right": //Member C的操作
							for(var j=43; j<=45; j++){	//傳送圖卡到B面板
								if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120  && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true && B_change_state == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){																			
										this.remove();		
										block55.obj.css("display","block");								
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.id == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.name+"=''");
											eval(block.canvas+"=''");
											eval(block.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("B_whether_change", block62.pen, block.src, block.type);
									block55.blockName = block.id;							
									block55.denom = block.denom;
									block55.nume = block.nume;
									block55.whole = block.whole;
									block55.block_pen = block.pen;
									block55.canvas = block.canvas;
									block55.src = block.src;
									block55.type = block.type;
									block55.start = block.start;
									block55.target = blockArray[j].target;
									
									block55.start.empty = "temp";
									handleObj.moveChangePanel(block55);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#C_rubberBandArea_right").css("display","none"), $("#C_rubberBandArea_left").css("display","none");
									$("#"+blockArray[j].linkLine).css("display","none");	
									B_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id + " j:"+j);
									break;
								}
							}
							for(var j=47; j<=49; j++){	//傳送圖卡到A面板
								if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty == "false" 
								&&  blockArray[j].target.use == true && A_change_state == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600,function(){
										this.remove();
										block52.obj.css("display","block");
									});
									for(var a=0; a<blockArray.length; a++){	//當圖卡進入個人面板
										if(blockArray[a] !=null && block.id == blockArray[a].id){	//將此物件在陣列裡所佔有的位置消除
											//block.obj.remove();
											eval(block.name+"=''");
											eval(block.canvas+"=''");
											eval(block.pen+"=''");
											blockArray[a] = null;
										}
									}
									draw.drawChangePic("A_whether_change", block61.pen, block.src, block.type);
									block52.blockName = block.id;							
									block52.denom = block.denom;
									block52.nume = block.nume;
									block52.whole = block.whole;
									block52.block_pen = block.pen;
									block52.canvas = block.canvas;
									block52.src = block.src;
									block52.type = block.type;
									block52.start = block.start;
									block52.target = blockArray[j].target;
									
									block52.start.empty = "temp";									
									handleObj.moveChangePanel(block52);	//移動交換面板
									blockArray[j].linkTarget.css("border-color","blue");
									blockArray[j].target.use = false;
									$("#C_rubberBandArea_right").css("display","none"), $("#C_rubberBandArea_left").css("display","none");	
									$("#"+blockArray[j].linkLine).css("display","none");	
									A_change_state = false;
									handleObj.disableRubber();	//半透明化目前不能使用的Rubber band
									console.log(blockArray[j].id + " j:"+j);
									break;
								}							
							}
							break;
					}
				}
				
			/*	if(block.position == "scatter" && block.content =="symbol"){		//字符移動到個人面版
					for(var k=0; k<9;k++){
						if((block.obj.offset().left+50 >=blockArray[k].obj.offset().left) && (block.obj.offset().top+50 >=blockArray[k].obj.offset().top) && 
						(block.obj.offset().left <=blockArray[k].obj.offset().left+75) && (block.obj.offset().top <=blockArray[k].obj.offset().top+150) &&(blockArray[k].empty =="true")){
							switch(block.type){
								case "proper":
									draw.drawSymbol(eval(blockArray[k].pen), block.type, block.whole, block.denom, block.nume);	//ctx, type, whole, denom, nume
									blockArray[k].blockName = block.id;
									blockArray[k].denom = block.denom;
									blockArray[k].nume = block.nume;
									blockArray[k].whole = block.whole;
									blockArray[k].block_pen = block.pen;
									blockArray[k].canvas = block.canvas;
									blockArray[k].type = block.type;
									for(var a=0;a<blockArray.length; a++){	//當字符進入個人面板
										if(blockArray[a] !=null && block.id == blockArray[a].id){	//將該字符物件刪除，並放入暫存的物件陣列中												
										block.obj.remove();
										eval(block.name+"=''");
										eval(block.canvas+"=''");
										eval(block.pen+"=''");
										blockArray[a] = null;
									}
								}									
									blockArray[k].empty ="false";
									break;
								case "improper":
									draw.drawSymbol(eval(blockArray[k].pen), block.type, block.whole, block.denom, block.nume);	//ctx, type, whole, denom, nume
									blockArray[k].blockName = block.id;
									blockArray[k].denom = block.denom;
									blockArray[k].nume = block.nume;
									blockArray[k].whole = block.whole;
									blockArray[k].block_pen = block.pen;
									blockArray[k].canvas = block.canvas;
									blockArray[k].type = block.type;
									for(var a=0;a<blockArray.length; a++){	//當字符進入個人面板
										if(blockArray[a] !=null && block.id == blockArray[a].id){	//將該字符物件刪除，並放入暫存的物件陣列中
										block.obj.remove();
										eval(block.name+"=''");
										delete blockArray[a];
									}
								}
									blockArray[k].empty ="false";
									break;
								case "mix":
									draw.drawSymbol(eval(blockArray[k].pen), block.type, block.whole, block.denom, block.nume);	//ctx, type, whole, denom, nume
									blockArray[k].blockName = block.id;
									blockArray[k].denom = block.denom;
									blockArray[k].nume = block.nume;
									blockArray[k].whole = block.whole;
									blockArray[k].block_pen = block.pen;
									blockArray[k].canvas = block.canvas;
									blockArray[k].type = block.type;
									for(var a=0;a<blockArray.length; a++){	//當字符進入個人面板
										if(blockArray[a] !=null && block.id == blockArray[a].id){	//將該字符物件刪除，並放入暫存的物件陣列中
										block.obj.remove();
										eval(block.name+"=''");
										delete blockArray[a];
									}
								}
									blockArray[k].empty ="false";
									break;
							}							
						}						
					}
				}*/
								
				for(var j=0; j<18; j++){	//當手指點擊個人圖像面板離開時							
					if(block.id == blockArray[j].id){
						block.x =0, block.y=0;
					}
				}				
			}			
			draw.clearDraw(eval(ctx1),canvas1.width, canvas1.height);
			delete blockMap[event.changedTouches[i].identifier];
	}	
}

timer = setInterval(calTotalTime,1000);	//計算總時間
A_time = setInterval(calMember_A_Time,1000);	//計算A進行的時間
B_time = setInterval(calMember_B_Time,1000);		//計算B進行的時間
C_time = setInterval(calMember_C_Time,1000);	//計算C進行的時間
initial();	
document.addEventListener('touchstart', touchstart, false);//觸發touchstart事件
document.addEventListener('touchmove', touchmove, false);//觸發touchmove事件
document.addEventListener('touchend', touchend, false);//觸發touchend事件

addEventListener("keydown",function(event){
	switch(event.keyCode){
			case 65:	//A
				correctAnswer();
				break;
			case 66:	//B
				$("#A_to_c0").css("display","block"), $("#A_to_c1").css("display","block"), $("#A_to_c2").css("display","block");
				$("#A_to_b0").css("display","block"), $("#A_to_b1").css("display","block"), $("#A_to_b2").css("display","block");
				$("#B_to_a0").css("display","block"), $("#B_to_a1").css("display","block"), $("#B_to_a2").css("display","block");
				$("#B_to_c0").css("display","block"), $("#B_to_c1").css("display","block"), $("#B_to_c2").css("display","block");
				$("#C_to_a0").css("display","block"), $("#C_to_a1").css("display","block"), $("#C_to_a2").css("display","block");
				$("#C_to_b0").css("display","block"), $("#C_to_b1").css("display","block"), $("#C_to_b2").css("display","block");
				$("#A_rubberBandArea_left").css("display","block"), $("#A_rubberBandArea_right").css("display","block");
				$("#B_rubberBandArea_left").css("display","block"), $("#B_rubberBandArea_right").css("display","block");
				$("#C_rubberBandArea_left").css("display","block"), $("#C_rubberBandArea_right").css("display","block");
				break;
			case 67://C
				$("#A_to_c2_link").css("display","block"), $("#A_to_c1_link").css("display","block"), $("#A_to_c0_link").css("display","block");
				$("#A_to_b2_link").css("display","block"), $("#A_to_b1_link").css("display","block"), $("#A_to_b0_link").css("display","block");
				break;
			case 68:	//D
				$("#B_to_a2_link").css("display","block"), $("#B_to_a1_link").css("display","block"), $("#B_to_a0_link").css("display","block");
				$("#B_to_c2_link").css("display","block"), $("#B_to_c1_link").css("display","block"), $("#B_to_c0_link").css("display","block");
				break;
			case 69: //E
				$("#C_to_a2_link").css("display","block"), $("#C_to_a1_link").css("display","block"), $("#C_to_a0_link").css("display","block");
				$("#C_to_b2_link").css("display","block"), $("#C_to_b1_link").css("display","block"), $("#C_to_b0_link").css("display","block");
				break;
			case 70:	//F
				$("#A_to_c2_link").css("display","none"), $("#A_to_c1_link").css("display","none"), $("#A_to_c0_link").css("display","none");
				$("#A_to_b2_link").css("display","none"), $("#A_to_b1_link").css("display","none"), $("#A_to_b0_link").css("display","none");
				$("#B_to_a2_link").css("display","none"), $("#B_to_a1_link").css("display","none"), $("#B_to_a0_link").css("display","none");
				$("#B_to_c2_link").css("display","none"), $("#B_to_c1_link").css("display","none"), $("#B_to_c0_link").css("display","none");
				$("#C_to_a2_link").css("display","none"), $("#C_to_a1_link").css("display","none"), $("#C_to_a0_link").css("display","none");
				$("#C_to_b2_link").css("display","none"), $("#C_to_b1_link").css("display","none"), $("#C_to_b0_link").css("display","none");
				
				$("#A_whether_change").css("display","block");
				$("#B_whether_change").css("display","block");
				$("#C_whether_change").css("display","block");
				break;
	}		
},false);


