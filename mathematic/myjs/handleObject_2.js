/**
 * @author wei
 */
function handleObj_2(){
	
}

handleObj_2.prototype = {
	createGraObj: function(id, top, left, corrd){
		var gra = document.createElement('canvas'); 
		gra.id = id;
		gra.style.zIndex =1;
		gra.style.position ="absolute";
		gra.style.top = top+"px";
		gra.style.left = left+"px";
		$(gra).css("background","white");
		$(gra).css("border-color","black");
		$(gra).css("border-width","5px");
		$(gra).css("border-style","solid");
		$(gra).css("-webkit-border-radius","10px");
		gra.style.width = "180px";
		gra.style.height = "180px";
		switch(corrd){
			case true:
				$(gra).css("border-color","black");
				break;
			case false:
				$(gra).css("border-color","red");
				break;
		}
		$(gra).css("-webkit-transform","scale(0.7)");
		o.appendChild(gra);
	},
	createGraProperty: function(id, denom, nume, src, canvas, ctx){	//創建新圖卡物件屬性
		eval("var"+id+"=$('#"+id+"').get("+0+")");
		//eval(name+".id='proper_graphic_"+index+"'");
		eval(id+".offset="+"{x:"+0+", y:"+0+"}");
		eval(id+".identifier=''");
		eval(id+".x="+0);
		eval(id+".y="+0);
		eval(id+".content='graphic'");
		eval(id+".obj="+"$('#"+id+"')");
		eval(id+".denom="+denom);
		eval(id+".nume="+nume);
		eval(id+".position='scatter'");
		//eval(name+".index ="+index);
		eval(id+".pen='"+ctx+"'");
		eval(id+".canvas ='"+canvas+"'");
		eval(id+".value ="+(nume / denom));
		eval(id+".src ="+"src");
	},
	
	createNewGraProperty: function(id, denom, nume, src, canvas, ctx, corrd, block){	//還原圖卡物件屬性
		eval(id+"=$('#"+id+"').get("+0+")");
		//eval(name+".id='proper_graphic_"+index+"'");
		eval(id+".offset="+"{x:"+0+", y:"+0+"}");
		eval(id+".identifier=''");
		eval(id+".x="+0);
		eval(id+".y="+0);
		eval(id+".content='graphic'");
		eval(id+".obj="+"$('#"+id+"')");
		eval(id+".denom="+denom);
		eval(id+".nume="+nume);
		eval(id+".position='scatter'");
		eval(id+".corrd ="+corrd);
		eval(id+".pen='"+ctx+"'");
		eval(id+".canvas ='"+canvas+"'");
		eval(id+".value ="+(nume / denom));
		eval(id+".src ="+"src");
		eval(id+".select ='"+block.select+"'");
		eval(id+".from='"+block.obj.parent().attr("id")+"'");
		eval(id+".indiviualFrom='"+block.id+"'");
		eval(id+".orientation='"+block.orientation+"'");
	},
	
	createSymObj: function(id, type, top, left){
		var sym = document.createElement('canvas'); 
		sym.id = id;
		sym.style.position ="absolute";
		sym.style.top = top+"px";
		sym.style.left = left+"px";
		sym.style.width = "100px";
		sym.style.height = "100px";
		sym.style.zIndex =1;
		$(sym).css("background","url(../mathematic/mycss/photo/11.png) no-repeat");
		$(sym).css("-webkit-border-radius","10px");
		o.appendChild(sym); 		
	},
	
	createSymProperty: function(id, denom, nume, whole, ctx, canvas){
		eval(id+"=$('#"+id+"').get("+0+")");
		eval(id+".offset="+"{x:"+0+", y:"+0+"}");
		eval(id+".identifier=''");
		eval(id+".x="+0);
		eval(id+".y="+0);
		eval(id+".content='symbol'");
		eval(id+".obj="+"$('#"+id+"')");
		eval(id+".denom="+denom);
		eval(id+".nume="+nume);
		eval(id+".position='scatter'");
		eval(id+".pen='"+ctx+"'");
		eval(id+".canvas ='"+canvas+"'");
		eval(id+".value ="+(nume / denom));				
	},
	
	createCanvasProperty: function(content, canvas, ctx, id){
		if(content =="symbol"){
			eval(canvas+ "= document.getElementById('"+id+"')");
			eval(canvas+".width = 100"), eval(canvas+".height = 100");
			eval(ctx+ "= "+canvas+".getContext('2d')");
		}		
		if(content =="graphic"){
			eval(canvas+ "= document.getElementById('"+id+"')");
			eval(canvas+".width = 180"), eval(canvas+".height = 180");
			eval(ctx+ "= "+canvas+".getContext('2d')");
		}		
	},	
	
	scaleCentralArea: function(){
		if(A_translate == true || B_translate == true || C_translate == true){
			$("#central_area").animate({scale:0.75},600);
		}else{
			$("#central_area").animate({scale:0.8},600);
		}
	},
	
	hideAllbackButton: function(){
		var button = [];
		for(var i=117; i<=125; i++){
			eval("button.push(block"+i+")");
		}
		$.each(button, function(){
			this.obj.css("display","none");
		});
	},
	
	changePanelState: function(panel){	//還原面板初始狀態
		switch(panel){
			case "A_panel":
				$("#A_panel").css("display","none");
				blockArray[20].trans = false, blockArray[21].trans = false, blockArray[22].trans = false;
				//blockArray[4].trans = false, blockArray[5].trans = false, blockArray[6].trans = false;
				Panel_A.operator ="", Panel_A.count="", block53.obj.html("");
				Panel_A.extend ="", Panel_A.result_nume = "", Panel_A.result_denom = "";
				draw.clearDraw(eval(block55.pen),150, 150), draw.clearDraw(eval(block56.pen),150, 150), draw.clearDraw(eval(block57.pen),150, 150);
				$("#A_message").html("");
				$("div").remove("#A_trans_explain");
				block62.use = false, block62.obj.css("color","white");
				block93.use = false, block93.obj.css("color","white");
				$("#A_add").css("display","none"), $("#A_sub").css("display","none"), $("#A_count").css("display","none");
				$("#A_unit").css("display","none"), $("#A_ten").css("display","none");
				$("#member_A").css("display","block");
				A_translate = false;
				break;
			case "B_panel":
				$("#B_panel").css("display","none");
				blockArray[23].trans = false, blockArray[24].trans = false, blockArray[25].trans = false;
				//blockArray[7].trans = false, blockArray[8].trans = false, blockArray[9].trans = false;
				Panel_B.operator ="", Panel_B.count="", block66.obj.html("");
				Panel_B.extend ="", Panel_B.result_nume = "", Panel_B.result_denom = "";
				draw.clearDraw(eval(block68.pen),150, 150), draw.clearDraw(eval(block69.pen),150, 150), draw.clearDraw(eval(block70.pen),150, 150);
				$("div").remove("#B_trans_explain");
				$("#B_message").html("");
				block75.use = false, block75.obj.css("color","white");
				block94.use = false, block94.obj.css("color","white");
				$("#B_add").css("display","none"), $("#B_sub").css("display","none"), $("#B_count").css("display","none");
				$("#B_unit").css("display","none"), $("#B_ten").css("display","none");
				$("#member_B").css("display","block");
				B_translate = false;
				break;
			case "C_panel":
				$("#C_panel").css("display","none");
				blockArray[26].trans = false, blockArray[27].trans = false, blockArray[28].trans = false;
				//blockArray[10].trans = false, blockArray[11].trans = false, blockArray[12].trans = false;
				Panel_C.operator ="", Panel_C.count="", block79.obj.html("");
				Panel_C.extend ="", Panel_C.result_nume = "", Panel_C.result_denom = "";
				draw.clearDraw(eval(block81.pen),150, 150), draw.clearDraw(eval(block82.pen),150, 150), draw.clearDraw(eval(block83.pen),150, 150);
				$("div").remove("#C_trans_explain");
				$("#C_message").html("");
				block88.use = false, block88.obj.css("color","white");
				block95.use = false, block95.obj.css("color","white");
				$("#C_add").css("display","none"), $("#C_sub").css("display","none"), $("#C_count").css("display","none");
				$("#C_unit").css("display","none"), $("#C_ten").css("display","none");
				$("#member_C").css("display","block");
				C_translate = false;
				break;
		}
	},
	
	showRubberBandArea: function(position){	//開啟橡皮筋
		switch(position){
			case "A_rubber_area":
				$("#A_rubberBandArea").css("display","block");
				break;
			case "B_rubber_area":
				$("#B_rubberBandArea").css("display","block");
				break;
			case "C_rubber_area":
				$("#C_rubberBandArea").css("display","block");
				break;
		}
	},
	
	hideRubberBandArea: function(position){	//關閉橡皮筋
		switch(position){
			case "A_rubber_area":
				$("#A_rubberBandArea").css("display","none");
				break;
			case "B_rubber_area":
				$("#B_rubberBandArea").css("display","none");
				break;
			case "C_rubber_area":
				$("#C_rubberBandArea").css("display","none");
				break;
		}
	},
	
	switchExtendButton: function(block){	//擴、約分的按鍵轉換
		switch(block.extend){
			case "×":
				block.extend = "÷"
				block.obj.html("約分");
				break;
			case "÷":
				block.extend = "×";
				block.obj.html("擴分");
				break;
		}
	},
	
	createResponse: function(id, top, left, value, position){	//創造填答的物件
		var div = document.createElement('div');
		div.style.position = "absolute";
		div.id = id;
		div.style.zIndex =1;
		div.style.width = "60px";
		div.style.height = "60px";
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.fontSize = '50px';
		div.style.textAlign = 'center';
		$(div).css("background","white");
		$(div).css("border-color","black");
		$(div).css("border-width","5px");
		$(div).css("border-style","solid");
		$(div).html(value);
		switch(position){
			case "left":
				$(div).css("-webkit-transform","rotate("+90+"deg)");
				break;
			case "bottom":
				$(div).css("-webkit-transform","rotate("+0+"deg)");
				break;
			case "right":
				$(div).css("-webkit-transform","rotate("+-90+"deg)");
				break;
		}
		o.appendChild(div);
	},
	
	createResultBox: function(id, answer, top, left){
		var div = document.createElement('div');
		div.style.position = "absolute";
		div.id = id;
		switch(answer){
			case "correct":
				div.style.width = 126+"px";
				div.style.height = 94+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("background","url(../mathematic/result/correct.png) no-repeat");
				break;
			case "error":
				div.style.width = 126+"px";
				div.style.height = 94+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("background","url(../mathematic/result/error.png) no-repeat");
				break;
			case "blank":
				div.style.width = 250+"px";
				div.style.height = 108+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("background","url(../mathematic/result/blank2.png) no-repeat");
				break;
			case "A_no_operate":
				div.style.width = 437+"px";
				div.style.height = 199+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("background","url(../mathematic/result/left_input.png) no-repeat");
				break;
			case "B_no_operate":
				div.style.width = 437+"px";
				div.style.height = 326+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("background","url(../mathematic/result/bottom_input.png) no-repeat");
				break;
			case "C_no_operate":
				div.style.width = 437+"px";
				div.style.height = 199+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("background","url(../mathematic/result/right_input.png) no-repeat");
				break;
			case "A_warn":
				div.style.width = 600+"px";
				div.style.height = 55+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("-webkit-transform","rotate(90deg)");
				$(div).css("background","url(../mathematic/result/other_warn.png) no-repeat");
				break;
			case "B_warn":
				div.style.width = 600+"px";
				div.style.height = 55+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("background","url(../mathematic/result/other_warn.png) no-repeat");
				break;
			case "C_warn":
				div.style.width = 600+"px";
				div.style.height = 55+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("-webkit-transform","rotate(-90deg)");
				$(div).css("background","url(../mathematic/result/other_warn.png) no-repeat");
				break;
			case "A_take_warn":
				div.style.width = 550+"px";
				div.style.height = 70+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("-webkit-transform","rotate(90deg)");
				$(div).css("background","url(../mathematic/result/warn.png) no-repeat");
				break;
			case "B_take_warn":
				div.style.width = 550+"px";
				div.style.height = 70+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("background","url(../mathematic/result/warn.png) no-repeat");
				break;
			case "C_take_warn":
				div.style.width = 550+"px";
				div.style.height = 70+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("-webkit-transform","rotate(-90deg)");
				$(div).css("background","url(../mathematic/result/warn.png) no-repeat");
				break;
			case "explain":
				div.style.width = 505+"px";
				div.style.height = 63+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";
				$(div).css("background","url(../mathematic/result/translate.png) no-repeat");
				break;
		}
		switch(id){
			case "A_trans_explain":
				$(div).css("-webkit-transform","rotate("+90+"deg)");
				break;
			case "B_trans_explain":
				$(div).css("-webkit-transform","rotate("+0+"deg)");
				break;
			case "C_trans_explain":
				$(div).css("-webkit-transform","rotate("+(-90)+"deg)");
				break;
		}
		o.appendChild(div);
	},
	
	showCentralObject: function(){
		var object1 = [block43, block44, block45, block46, block47, block48, block49, block50];
		var object2 = [block1, block2, block3, block4, block5, block6, block7, block8, block32, block33, block31];
		switch(ques_index){
			case 1:
				$.each(object1, function(i, value){			
					this.obj.css("display","block");
					this.obj.animate({opacity:1},1000);
				});
				break;
			case 2:
				$.each(object2, function(i, value){			
					this.obj.css("display","block");
					this.obj.animate({opacity:1},1000);
				});
				break;
		}		
	},
	
	hideCentralObject: function(){
		var object1 = [block43, block44, block45, block46, block47, block48, block49, block50];
		var object2 = [block1, block2, block3, block4, block5, block6, block7, block8, block32, block33, block31];	
		switch(ques_index){
			case 1:
				$.each(object2, function(i, value){						
					this.obj.animate({opacity:0.1},1000);
					this.obj.css("display","none");
				});
				break;
			case 2:
				$.each(object1, function(i, value){						
					this.obj.animate({opacity:0.1},1000);
					this.obj.css("display","none");
				});
				break;
		}		
	},
	
	closeRemind: function(){
		$("#A_remind").animate({opacity:0},10000, function(){
			this.remove();
		});
		$("#B_remind").animate({opacity:0},10000, function(){
			this.remove();
		});
		$("#C_remind").animate({opacity:0},10000, function(){
			this.remove();
		});
	},
	
	showMemberObject: function(){	
		var symArray = [block12, block13, block14, block15, block16, block17, block18, block19, block20];
		var graArray = [block21, block22, block23, block24, block25, block26, block27, block28, block29];
		
		$.each(symArray, function(){
			this.obj.css("display","block");
			this.obj.css("opacity","1");
		});
		$.each(graArray, function(){
			this.obj.css("display","block");
			this.obj.css("opacity","1");
		});
	},
	
	hideMemberObject: function(){	
		var symArray = [block12, block13, block14, block15, block16, block17, block18, block19, block20];
		var graArray = [block21, block22, block23, block24, block25, block26, block27, block28, block29];
		
		$.each(symArray, function(){
			this.obj.css("display","none");
			this.obj.css("opacity","0.1");
		});
		$.each(graArray, function(){
			this.obj.css("display","none");
			this.obj.css("opacity","0.1");
		});
	},
	
	randomGraSym: function(){				
		var memberA_sym = [block12, block13, block14], memberB_sym = [block15, block16, block17], memberC_sym = [block18, block19, block20];
		var memberA_gra = [block21, block22, block23], memberB_gra = [block24, block25, block26], memberC_gra = [block27, block28, block29];	
			
		for(var i=0; i<3; i++){	//還原字符初始值
			memberA_sym[i].nume = memberA_sym[i].first_nume, memberA_sym[i].denom = memberA_sym[i].first_denom;
			memberB_sym[i].nume = memberB_sym[i].first_nume, memberB_sym[i].denom = memberB_sym[i].first_denom;
			memberC_sym[i].nume = memberC_sym[i].first_nume, memberC_sym[i].denom = memberC_sym[i].first_denom;
		}		
		
		for(var i=0; i<3; i++){	//還原圖卡初始值
			memberA_gra[i].nume = memberA_gra[i].first_nume, memberA_gra[i].denom = memberA_gra[i].first_denom;
			memberB_gra[i].nume = memberB_gra[i].first_nume, memberB_gra[i].denom = memberB_gra[i].first_denom;
			memberC_gra[i].nume = memberC_gra[i].first_nume, memberC_gra[i].denom = memberC_gra[i].first_denom;
		}
		
		for(var i=0; i<3; i++){	//還原圖卡初始路徑
			memberA_gra[i].src = memberA_gra[i].first_path;
			memberB_gra[i].src = memberB_gra[i].first_path;
			memberC_gra[i].src = memberC_gra[i].first_path;
		}
		
		
		for(var i=0; i<3; i++){	//交換A和B的分子分母(字符)
			var temp1 = memberA_sym[i].nume, temp2 = memberA_sym[i].denom ,temp3 = memberA_sym[i].original_nume, temp4 =memberA_sym[i].original_denom;
			memberA_sym[i].nume = memberB_sym[i].nume;
			memberA_sym[i].denom = memberB_sym[i].denom;
			memberA_sym[i].original_nume = memberB_sym[i].original_nume;
			memberA_sym[i].original_denom = memberB_sym[i].original_denom;
			
			memberB_sym[i].nume = temp1, memberB_sym[i].denom = temp2;
			memberB_sym[i].original_nume = temp3, memberB_sym[i].original_denom = temp4;
			
			memberA_sym[i].first_nume = memberA_sym[i].nume, memberA_sym[i].first_denom = memberA_sym[i].denom;	//紀錄交換後的分子分母初始值
			memberB_sym[i].first_nume = memberB_sym[i].nume, memberB_sym[i].first_denom = memberB_sym[i].denom;
		}
		
		for(var i=0; i<3; i++){	////交換B和C的分子分母(字符)
			var temp1 = memberB_sym[i].nume, temp2 = memberB_sym[i].denom ,temp3 = memberB_sym[i].original_nume, temp4 =memberB_sym[i].original_denom;
			memberB_sym[i].nume = memberC_sym[i].nume;
			memberB_sym[i].denom = memberC_sym[i].denom;		
			memberB_sym[i].original_nume = memberC_sym[i].original_nume;
			memberB_sym[i].original_denom = memberC_sym[i].original_denom;
				
			memberC_sym[i].nume = temp1, memberC_sym[i].denom = temp2;
			memberC_sym[i].original_nume = temp3, memberC_sym[i].original_denom = temp4;
			
			memberB_sym[i].first_nume = memberB_sym[i].nume, memberB_sym[i].first_denom = memberB_sym[i].denom;	//紀錄交換後的分子分母初始值
			memberC_sym[i].first_nume = memberC_sym[i].nume, memberC_sym[i].first_denom = memberC_sym[i].denom;
		}
		
		for(var i=0; i<3; i++){	//交換A和B的分子分母(圖卡)
			var temp1 = memberA_gra[i].nume, temp2 = memberA_gra[i].denom, temp3 = memberA_gra[i].src, temp4 = memberA_gra[i].original_nume, temp5 = memberA_gra[i].original_denom;
			memberA_gra[i].nume = memberB_gra[i].nume;
			memberA_gra[i].denom = memberB_gra[i].denom;		
			memberA_gra[i].original_nume = memberB_gra[i].original_nume;
			memberA_gra[i].original_denom = memberB_gra[i].original_denom;
			memberA_gra[i].src = memberB_gra[i].src;			
			
			memberB_gra[i].nume = temp1, memberB_gra[i].denom = temp2, memberB_gra[i].src = temp3;
			memberB_gra[i].original_nume = temp4, memberB_gra[i].original_denom = temp5;
			
			memberA_gra[i].first_nume = memberA_gra[i].nume, memberA_gra[i].first_denom = memberA_gra[i].denom;	//紀錄交換後的分子分母初始值
			memberB_gra[i].first_nume = memberB_gra[i].nume, memberB_gra[i].first_denom = memberB_gra[i].denom;
			
			memberA_gra[i].first_path = memberA_gra[i].src;	//紀錄交換後的圖卡路徑
			memberB_gra[i].first_path = memberB_gra[i].src;
		}
		
		for(var i=0; i<3; i++){	////交換B和C的分子分母(圖卡)
			var temp1 = memberB_gra[i].nume, temp2 = memberB_gra[i].denom, temp3 = memberB_gra[i].src, temp4 = memberB_gra[i].original_nume, temp5 = memberB_gra[i].original_denom;
			memberB_gra[i].nume = memberC_gra[i].nume;
			memberB_gra[i].denom = memberC_gra[i].denom;
			memberB_gra[i].original_nume = memberC_gra[i].original_nume;
			memberB_gra[i].original_denom = memberC_gra[i].original_denom;	
			memberB_gra[i].src = memberC_gra[i].src;
			
			memberC_gra[i].nume = temp1, memberC_gra[i].denom = temp2, memberC_gra[i].src = temp3;
			memberC_gra[i].original_nume = temp4, memberC_gra[i].original_denom = temp5;
			
			memberB_gra[i].first_nume = memberB_gra[i].nume, memberB_gra[i].first_denom = memberB_gra[i].denom;		//紀錄交換後的分子分母初始值
			memberC_gra[i].first_nume = memberC_gra[i].nume, memberC_gra[i].first_denom = memberC_gra[i].denom;
			
			memberB_gra[i].first_path = memberB_gra[i].src;	//紀錄交換後的圖卡路徑
			memberC_gra[i].first_path = memberC_gra[i].src;
		}		
	},
	
	changeRubberbandState: function(){	//進入第二題時，改變Rubber band的方向及位置、屬性
		$("#"+block103.linkLine).css("width",400);
		$("#"+block104.linkLine).css("width",650), $("#"+block104.linkLine).css("top",230);
		
		$("#"+block105.linkLine).css("left",-230), $("#"+block105.linkLine).css("-webkit-transform","rotate(60deg)");
		$("#"+block106.linkLine).css("left",-20), $("#"+block106.linkLine).css("top",-210), $("#"+block106.linkLine).css("-webkit-transform","rotate(70deg)");
		$("#"+block107.linkLine).css("left",160), $("#"+block107.linkLine).css("-webkit-transform","rotate(90deg)");
		
		$("#"+block108.linkLine).css("left",-800), $("#"+block108.linkLine).css("width",850);
		$("#"+block109.linkLine).css("left",-630), $("#"+block109.linkLine).css("width",680);
		$("#"+block110.linkLine).css("left",-350), $("#"+block110.linkLine).css("width",400), $("#"+block110.linkLine).css("-webkit-transform","rotate(0deg)");
		
		block102.target = block1, block103.target = block2, block104.target = block3;
		block105.target = block1, block106.target = block2, block107.target = block3;
		block108.target = block1, block109.target = block2, block110.target = block3;
		
		block102.targetSym = block5, block103.targetSym = block6, block104.targetSym = block7;
		block105.targetSym = block5, block106.targetSym = block6, block107.targetSym = block7;
		block108.targetSym = block5, block109.targetSym = block6, block110.targetSym = block7;
		
		block102.linkTarget = $("#blank_1"), block103.linkTarget = $("#blank_2"), block104.linkTarget = $("#blank_3");
		block105.linkTarget = $("#blank_1"), block106.linkTarget = $("#blank_2"), block107.linkTarget = $("#blank_3");
		block108.linkTarget = $("#blank_1"), block109.linkTarget = $("#blank_2"), block110.linkTarget = $("#blank_3");
	},
	
	switchExplainButton: function(block){
		switch(block.func){
			case "close":
				block.func = "open";
				block.obj.html("開啟說明");
				break;
			case "open":
				block.func = "close";
				block.obj.html("關閉說明");
				break;
		}
	},
	
	showMoveResult: function(block){
		for(var j=0; j<4; j++){	//判斷物件進入中央圖像填空區(第二題)
				if((block.obj.offset().left+90 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+90 >=blockArray[j].obj.offset().top) && 	//圖像進入中央區域時
				(block.obj.offset().left+90 <=blockArray[j].obj.offset().left+200) && (block.obj.offset().top+90 <=blockArray[j].obj.offset().top+200) &&(blockArray[j].empty =="true") 
				&& (block.content == "graphic") && ques_index == 2){
					draw.drawGra(eval(blockArray[j].pen), block.src);	//ctx, imgPath
					blockArray[j].denom = block.denom;
					blockArray[j].nume = block.nume;
					blockArray[j].value = block.value;	
					blockArray[j].contain = block.id;		
					blockArray[j].src = block.src;
					blockArray[j].blockCanvas = block.canvas;
					blockArray[j].blockPen = block.pen;
					blockArray[j].empty = "false";
					blockArray[j].corresponding = block.corrd;
					
					if(block.corrd == true){	//假如字符和圖卡有對應好											
						draw.initialCentralSym(eval(blockArray[j+4].pen),blockArray[j].denom, blockArray[j].nume);	//畫上字符
						blockArray[j+4].nume = block.nume;
						blockArray[j+4].denom = block.denom;
						blockArray[j+4].empty = "false";
						blockArray[j+4].value = block.value;
						blockArray[j+4].corresponding = true;
						blockArray[j].corresponding = true;
					}
					
					for(var a=0; a<blockArray.length; a++){
						if(blockArray[a] != null && block.id == blockArray[a].id){
							block.obj.remove();
							eval(block.id+"=''");
							eval(block.pen+"=''");
							eval(block.canvas+"=''");
							blockArray[a] = null;
						}
					}					
				}
				showConfirm();
			}
			
			for(var j=42; j<45; j++){	//判斷物件進入中央圖像填空區(第一題)
				if((block.obj.offset().left+90 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+90 >=blockArray[j].obj.offset().top) && 	//圖像進入中央區域時
				(block.obj.offset().left+90 <=blockArray[j].obj.offset().left+200) && (block.obj.offset().top+90 <=blockArray[j].obj.offset().top+200) &&(blockArray[j].empty =="true") 
				&& (block.content == "graphic")  && ques_index == 1){
					draw.drawGra(eval(blockArray[j].pen), block.src);	//ctx, imgPath
					blockArray[j].denom = block.denom;
					blockArray[j].nume = block.nume;
					blockArray[j].value = block.value;	
					blockArray[j].contain = block.id;		
					blockArray[j].src = block.src;
					blockArray[j].blockCanvas = block.canvas;
					blockArray[j].blockPen = block.pen;
					blockArray[j].empty = "false";
					blockArray[j].corresponding = block.corrd;
					blockArray[j].select = block.select;
					blockArray[j].from = block.from;
					
					if(block.corrd == true){	//假如字符和圖卡有對應好											
						draw.initialCentralSym(eval(blockArray[j+3].pen),blockArray[j].denom, blockArray[j].nume);	//畫上字符
						blockArray[j+3].nume = block.nume;
						blockArray[j+3].denom = block.denom;
						blockArray[j+3].empty = "false";
						blockArray[j+3].value = block.value;
						blockArray[j+3].corresponding = true;
						blockArray[j].corresponding = true;
					}
					
					for(var a=0; a<blockArray.length; a++){
						if(blockArray[a] != null && block.id == blockArray[a].id){
							block.obj.remove();
							eval(block.id+"=''");
							eval(block.pen+"=''");
							eval(block.canvas+"=''");
							blockArray[a] = null;
						}
					}					
				}
				showConfirm();
			}
	},
	
	showResult: function(){
		$("#A_report").css("display","block"), $("#B_report").css("display","block"), $("#C_report").css("display","block");
		$("#A_report").animate({opacity:1}, 600), $("#B_report").animate({opacity:1}, 600), $("#C_report").animate({opacity:1}, 600);
		$("#central_area").children().css("display","none");	//將中央區域的題目關閉
	},
	
	whetherThow: function(index){	//判斷每個人是否有丟圖卡		
		var A_panel = [block21, block22, block23], B_panel = [block24, block25, block26], C_panel = [block27, block28, block29];		
		switch(index){
			case 1:
				for(var i=0; i<3; i++){
					if(A_panel[i].empty == "true"){
						member_operate.A_first_thow = true;
					}
					if(B_panel[i].empty == "true"){
						member_operate.B_first_thow = true;
					}
					if(C_panel[i].empty == "true"){
						member_operate.C_first_thow = true;
					}
				}
				break;
			case 2:
				for(var i=0; i<3; i++){
					if(A_panel[i].empty == "true"){
						member_operate.A_second_thow = true;
					}
					if(B_panel[i].empty == "true"){
						member_operate.B_second_thow = true;
					}
					if(C_panel[i].empty == "true"){
						member_operate.C_second_thow = true;
					}
				}
				break;
		}		
	},
	
	switchOrder: function(order){
		switch(order){
			case "incresing":
				order1 = "decresing";
				break;
			case "decresing":
				order1 = "incresing";
				break;
		}
	},
	
	calculateMemberOperate: function(block, type){	//計算每個人的丟卡次數
		if(type == "drag"){
			switch(block.orientation){
			case "left":
				if(member_operate.A_first_operate<3 && ques_index ==1){
					member_operate.A_first_operate++;
				}
				if(member_operate.A_first_operate<3 && ques_index ==2){
					member_operate.A_second_operate++;
				}
				break;
			case "bottom":
				if(member_operate.B_first_operate<3 && ques_index ==1){
					member_operate.B_first_operate++;
				}
				if(member_operate.B_first_operate<3 && ques_index ==2){
					member_operate.B_second_operate++;
				}
				break;
			case "right":
				if(member_operate.C_first_operate<3 && ques_index ==1){
					member_operate.C_first_operate++;
				}
				if(member_operate.C_first_operate<3 && ques_index ==2){
					member_operate.C_second_operate++;
				}
				break;
			}
		}
		
		if(type == "drop"){
			switch(block.orientation){
			case "left":
				if(member_operate.A_first_operate>=0 && ques_index ==1){
					member_operate.A_first_operate--;
				}
				if(member_operate.A_second_operate>=0 && ques_index ==2){
					member_operate.A_second_operate--;
				}
				break;
			case "bottom":
				if(member_operate.B_first_operate>0 && ques_index ==1){
					member_operate.B_first_operate--;
				}
				if(member_operate.B_second_operate>=0 && ques_index ==2){
					member_operate.B_second_operate--;
				}
				break;
			case "right":
				if(member_operate.C_first_operate>0 && ques_index ==1){
					member_operate.C_first_operate--;
				}
				if(member_operate.C_second_operate>=0 && ques_index ==2){
					member_operate.C_second_operate--;
				}
				break;
			}
		}				
	}
}
