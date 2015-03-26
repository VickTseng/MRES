/**
 * @author wei
 */
function handleObj_3(){
	
}

handleObj_3.prototype = {
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
	createNewGraProperty: function(id, denom, nume, src, canvas, ctx, original_nume, original_denom, max_extend, corrd, block){	//還原圖卡物件屬性
		eval(id+"=$('#"+id+"').get("+0+")");
		eval(id+".offset="+"{x:"+0+", y:"+0+"}");
		eval(id+".identifier=''");
		eval(id+".x="+0);
		eval(id+".y="+0);
		eval(id+".content='graphic'");
		eval(id+".obj="+"$('#"+id+"')");
		eval(id+".denom="+denom);
		eval(id+".nume="+nume);
		eval(id+".position='scatter'");
		eval(id+".corrd="+corrd);
		eval(id+".original_nume="+original_nume);
		eval(id+".original_denom="+original_denom);
		eval(id+".max_extend="+max_extend);
		eval(id+".pen='"+ctx+"'");
		eval(id+".canvas ='"+canvas+"'");
		eval(id+".value ="+(nume / denom));
		eval(id+".first_denom="+block.first_denom);
		eval(id+".first_nume="+block.first_nume);
		eval(id+".beforeDenom="+block.beforeDenom);
		eval(id+".beforeNume="+block.beforeNume);
		eval(id+".whetherExtend="+block.whetherExtend);
		eval(id+".extendValue="+block.extendValue);
		eval(id+".operator='"+block.operator+"'");
		eval(id+".orientation='"+block.orientation+"'");
		eval(id+".from='"+block.id+"'");
		eval(id+".member='"+block.obj.parent().attr("id")+"'");
		eval(id+".src ="+"src");
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
	
	changePanelState: function(panel){	//還原面板初始狀態
		switch(panel){
			case "A_panel":
				$("#A_panel").css("display","none");
				blockArray[13].trans = false, blockArray[14].trans = false, blockArray[15].trans = false;
				blockArray[4].trans = false, blockArray[5].trans = false, blockArray[6].trans = false;
				Panel_A.operator ="", Panel_A.count="", block25.obj.html("");
				Panel_A.extend ="", Panel_A.result_nume = "", Panel_A.result_denom = "";
				draw.clearDraw(eval(block27.pen),150, 150), draw.clearDraw(eval(block28.pen),150, 150), draw.clearDraw(eval(block29.pen),150, 150);
				$("#A_message").html("");
				$("div").remove("#A_trans_explain");
				block34.use = false, block34.obj.css("color","white");
				block87.use = false, block87.obj.css("color","white");
				$("#A_add").css("display","none"), $("#A_sub").css("display","none"), $("#A_count").css("display","none");
				$("#A_add_ten").css("display","none"), $("#A_sub_ten").css("display","none");
				$("#A_unit").css("display","none"), $("#A_ten").css("display","none");
				$("#member_A").css("display","block");
				A_translate = false;
				break;
			case "B_panel":
				$("#B_panel").css("display","none");
				blockArray[16].trans = false, blockArray[17].trans = false, blockArray[18].trans = false;
				blockArray[7].trans = false, blockArray[8].trans = false, blockArray[9].trans = false;
				Panel_B.operator ="", Panel_B.count="", block38.obj.html("");
				Panel_B.extend ="", Panel_B.result_nume = "", Panel_B.result_denom = "";
				draw.clearDraw(eval(block40.pen),150, 150), draw.clearDraw(eval(block41.pen),150, 150), draw.clearDraw(eval(block42.pen),150, 150);
				$("div").remove("#B_trans_explain");
				$("#B_message").html("");
				block47.use = false, block47.obj.css("color","white");
				block88.use = false, block88.obj.css("color","white");
				$("#B_add").css("display","none"), $("#B_sub").css("display","none"), $("#B_count").css("display","none");
				$("#B_add_ten").css("display","none"), $("#B_sub_ten").css("display","none");
				$("#B_unit").css("display","none"), $("#B_ten").css("display","none");
				$("#member_B").css("display","block");
				B_translate = false;
				break;
			case "C_panel":
				$("#C_panel").css("display","none");
				blockArray[19].trans = false, blockArray[20].trans = false, blockArray[21].trans = false;
				blockArray[10].trans = false, blockArray[11].trans = false, blockArray[12].trans = false;
				Panel_C.operator ="", Panel_C.count="", block51.obj.html("");
				Panel_C.extend ="", Panel_C.result_nume = "", Panel_C.result_denom = "";
				draw.clearDraw(eval(block53.pen),150, 150), draw.clearDraw(eval(block54.pen),150, 150), draw.clearDraw(eval(block55.pen),150, 150);
				$("div").remove("#C_trans_explain");
				$("#C_message").html("");
				block60.use = false, block60.obj.css("color","white");
				block89.use = false, block89.obj.css("color","white");
				$("#C_add").css("display","none"), $("#C_sub").css("display","none"), $("#C_count").css("display","none");
				$("#C_add_ten").css("display","none"), $("#C_sub_ten").css("display","none");
				$("#C_unit").css("display","none"), $("#C_ten").css("display","none");
				$("#member_C").css("display","block");
				C_translate = false;
				break;
		}
	},
	
	createResultBox: function(id, answer, top, left, position){
		var div = document.createElement('div');
		div.style.position = "absolute";
		div.id = id;
		if(answer == "correct"){			
			div.style.width = 256+"px";
			div.style.height = 256+"px";
			div.style.top = top+"px";
			div.style.left = left+"px";
			$(div).css("background","url(../mathematic/result/correct.png) no-repeat");			
		}
		if(answer == "error"){					
			div.style.width = 256+"px";
			div.style.height = 256+"px";
			div.style.top = top+"px";
			div.style.left = left+"px";
			$(div).css("background","url(../mathematic/result/error.png) no-repeat");
		}
		if(answer == "blank"){
			div.style.width = 250+"px";
			div.style.height = 108+"px";
			div.style.top = top+"px";
			div.style.left = left+"px";
			$(div).css("background","url(../mathematic/result/blank2.png) no-repeat");
		}
		if(answer == "explain"){
			div.style.width = 505+"px";
			div.style.height = 63+"px";
			div.style.top = top+"px";
			div.style.left = left+"px";
			$(div).css("background","url(../mathematic/result/translate.png) no-repeat");
		}
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
			case "center":
				$(div).css("-webkit-transform","rotate("+0+"deg)");
				break;
		}
		o.appendChild(div);
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
	
	hideMemberObject: function(){	
		var symArray = [block5, block6, block7, block8, block9, block10, block11, block12, block13];
		var graArray = [block14, block15, block16, block17, block18, block19, block20, block21, block22];
		var transArray = [block62, block63, block64];
		
		$.each(symArray, function(){
			this.obj.css("display","none");
			this.obj.css("opacity","0.1");
		});
		$.each(graArray, function(){
			this.obj.css("display","none");
			this.obj.css("opacity","0.1");
		});
		$.each(transArray, function(){
			this.obj.css("display","none");
			this.obj.css("opacity","0.1");
		});
	},
	
	showCentralObject: function(){
		var object = [block1, block2, block3, block4, block65, block66, block67, block68, block69, block83];	//中央區域物件				
		$.each(object, function(){		
			this.obj.css("display","block");
			this.obj.animate({opacity:1},1000);
		});	
		$("#equal_mark3").css("display","block");
		$("#equal_mark3").animate({opacity:1},1000);
	},
	
	showTransObject: function(){
		var obj = [block62, block63, block64];
		$.each(obj, function(){
			this.use = true;
			this.obj.css("display","block");
			this.obj.animate({opacity:1},600);
		});
	},
	
	randomGraSym: function(){
		var memberA_sym = [block5, block6, block7], memberB_sym = [block8, block9, block10], memberC_sym = [block11, block12, block13];
		var memberA_gra = [block14, block15, block16], memberB_gra = [block17, block18, block19], memberC_gra = [block20, block21, block22];		
		
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
			var temp1 = memberA_sym[i].nume, temp2 = memberA_sym[i].denom, temp3 = memberA_sym[i].original_nume, temp4 = memberA_sym[i].original_denom;
			memberA_sym[i].nume = memberB_sym[i].nume;
			memberA_sym[i].denom = memberB_sym[i].denom;			
			memberB_sym[i].nume = temp1, memberB_sym[i].denom = temp2;				
			
			memberA_sym[i].original_nume = memberB_sym[i].original_nume;
			memberA_sym[i].original_denom = memberB_sym[i].original_denom;			
			memberB_sym[i].original_nume = temp3, memberB_sym[i].original_denom = temp4;	
			
			memberA_sym[i].first_nume = memberA_sym[i].nume, memberA_sym[i].first_denom = memberA_sym[i].denom;	//紀錄交換後的分子分母初始值
			memberB_sym[i].first_nume = memberB_sym[i].nume, memberB_sym[i].first_denom = memberB_sym[i].denom;						
		}
		
		for(var i=0; i<3; i++){	////交換B和C的分子分母(字符)
			var temp1 = memberB_sym[i].nume, temp2 = memberB_sym[i].denom, temp3 = memberB_sym[i].original_nume, temp4 = memberB_sym[i].original_denom;
			memberB_sym[i].nume = memberC_sym[i].nume;
			memberB_sym[i].denom = memberC_sym[i].denom;			
			memberC_sym[i].nume = temp1, memberC_sym[i].denom = temp2;
			
			memberB_sym[i].original_nume = memberC_sym[i].original_nume;
			memberB_sym[i].original_denom = memberC_sym[i].original_denom;			
			memberC_sym[i].original_nume = temp3, memberB_sym[i].original_denom = temp4;
			
			memberB_sym[i].first_nume = memberB_sym[i].nume, memberB_sym[i].first_denom = memberB_sym[i].denom;	//紀錄交換後的分子分母初始值
			memberC_sym[i].first_nume = memberC_sym[i].nume, memberC_sym[i].first_denom = memberC_sym[i].denom;
		}
		
		for(var i=0; i<3; i++){	//交換A和B的分子分母(圖卡)
			var temp1 = memberA_gra[i].nume, temp2 = memberA_gra[i].denom, temp3 = memberA_gra[i].src, temp4 =memberA_gra[i].original_nume, temp5 = memberA_gra[i].original_denom;
			memberA_gra[i].nume = memberB_gra[i].nume;
			memberA_gra[i].denom = memberB_gra[i].denom;		
			memberA_gra[i].src = memberB_gra[i].src;		
			memberB_gra[i].nume = temp1, memberB_gra[i].denom = temp2, memberB_gra[i].src = temp3;
			
			memberA_gra[i].original_nume = memberB_gra[i].original_nume;
			memberA_gra[i].original_denom = memberB_gra[i].original_denom;	
			memberB_gra[i].original_nume = temp4, memberB_gra[i].original_denom = temp5;
			
			memberA_gra[i].first_nume = memberA_gra[i].nume, memberA_gra[i].first_denom = memberA_gra[i].denom;	//紀錄交換後的分子分母初始值
			memberB_gra[i].first_nume = memberB_gra[i].nume, memberB_gra[i].first_denom = memberB_gra[i].denom;
			
			memberA_gra[i].first_path = memberA_gra[i].src;	//紀錄交換後的圖卡路徑
			memberB_gra[i].first_path = memberB_gra[i].src;
		}
		
		for(var i=0; i<3; i++){	////交換B和C的分子分母(圖卡)
			var temp1 = memberB_gra[i].nume, temp2 = memberB_gra[i].denom, temp3 = memberB_gra[i].src, temp4 =memberB_gra[i].original_nume, temp5 = memberB_gra[i].original_denom;
			memberB_gra[i].nume = memberC_gra[i].nume;
			memberB_gra[i].denom = memberC_gra[i].denom;		
			memberB_gra[i].src = memberC_gra[i].src;		
			memberC_gra[i].nume = temp1, memberC_gra[i].denom = temp2, memberC_gra[i].src = temp3;
			
			memberB_gra[i].original_nume = memberC_gra[i].original_nume;
			memberB_gra[i].original_denom = memberC_gra[i].original_denom;	
			memberC_gra[i].original_nume = temp4, memberC_gra[i].original_denom = temp5;
			
			memberB_gra[i].first_nume = memberB_gra[i].nume, memberB_gra[i].first_denom = memberB_gra[i].denom;		//紀錄交換後的分子分母初始值
			memberC_gra[i].first_nume = memberC_gra[i].nume, memberC_gra[i].first_denom = memberC_gra[i].denom;
			
			memberB_gra[i].first_path = memberB_gra[i].src;	//紀錄交換後的圖卡路徑
			memberC_gra[i].first_path = memberC_gra[i].src;
		}		
	},
	
	scaleCentralArea: function(){
		if(A_translate == true || B_translate == true || C_translate == true){
			$("#central_area").animate({scale:0.75},600);
		}else{
			$("#central_area").animate({scale:0.8},600);
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
	
	showMoveResult: function(block){
		for(var j=0; j<2; j++){//判斷物件進入中央圖像填空區
				if((block.obj.offset().left+90 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+90 >=blockArray[j].obj.offset().top) && 	//圖像進入中央區域時
					(block.obj.offset().left+90 <=blockArray[j].obj.offset().left+200) && (block.obj.offset().top+90 <=blockArray[j].obj.offset().top+200) &&(blockArray[j].empty =="true")
					&& block.content =="graphic"){
					draw.drawGra(eval(blockArray[j].pen), block.src);	//ctx, imgPath
					blockArray[j].denom = block.denom;
					blockArray[j].nume = block.nume;
					blockArray[j].first_denom = block.first_denom;
					blockArray[j].first_nume = block.first_nume;
					blockArray[j].value = block.value;	
					blockArray[j].contain = block.id;		
					blockArray[j].original_nume = block.original_nume;
					blockArray[j].original_denom = block.original_denom;
					blockArray[j].max_extend = block.max_extend;
					blockArray[j].src = block.src;					
					blockArray[j].blockCanvas = block.canvas;
					blockArray[j].blockPen = block.pen;
					blockArray[j].empty = "false";
					blockArray[j].corresponding = block.corrd;
					blockArray[j].whetherExtend = block.whetherExtend;
					blockArray[j].extendValue = block.extendValue;
					blockArray[j].beforeNume = block.beforeNume;
					blockArray[j].beforeDenom = block.beforeDenom;
					blockArray[j].operator = block.operator;
					blockArray[j].member = block.member;
					draw.initialCentralSym(eval(blockArray[j+2].pen),blockArray[j].denom, blockArray[j].nume);	//畫上字符
					for(var a=0; a<blockArray.length; a++){
						if(blockArray[a] != null && block.id == blockArray[a].id){
							block.obj.remove();
							eval(block.id+"=''");
							eval(block.pen+"=''");
							eval(block.canvas+"=''");
							blockArray[a] = null;
						}
					}
					 handleObj.calAnswerTimes(blockArray[j]);
					 singleCheck();
				}				
			}
			for(var j=65; j<=65; j++){//判斷物件進入中央圖像填空區
				if((block.obj.offset().left+90 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+90 >=blockArray[j].obj.offset().top) && 	//圖像進入中央區域時
					(block.obj.offset().left+90 <=blockArray[j].obj.offset().left+200) && (block.obj.offset().top+90 <=blockArray[j].obj.offset().top+200) &&(blockArray[j].empty =="true")
					&& block.content =="graphic"){
					draw.drawGra(eval(blockArray[j].pen), block.src);	//ctx, imgPath
					blockArray[j].denom = block.denom;
					blockArray[j].nume = block.nume;
					blockArray[j].first_denom = block.first_denom;
					blockArray[j].first_nume = block.first_nume;
					blockArray[j].value = block.value;	
					blockArray[j].contain = block.id;		
					blockArray[j].original_nume = block.original_nume;
					blockArray[j].original_denom = block.original_denom;
					blockArray[j].max_extend = block.max_extend;
					blockArray[j].src = block.src;
					blockArray[j].blockCanvas = block.canvas;
					blockArray[j].blockPen = block.pen;
					blockArray[j].empty = "false";
					blockArray[j].corresponding = block.corrd;
					blockArray[j].whetherExtend = block.whetherExtend;
					blockArray[j].extendValue = block.extendValue;
					blockArray[j].beforeNume = block.beforeNume;
					blockArray[j].beforeDenom = block.beforeDenom;
					blockArray[j].operator = block.operator;
					blockArray[j].member = block.member;
					draw.initialCentralSym(eval(blockArray[j-1].pen),blockArray[j].denom, blockArray[j].nume);	//畫上字符
					for(var a=0; a<blockArray.length; a++){
						if(blockArray[a] != null && block.id == blockArray[a].id){
							block.obj.remove();
							eval(block.id+"=''");
							eval(block.pen+"=''");
							eval(block.canvas+"=''");
							blockArray[a] = null;
						}
					}
					handleObj.calAnswerTimes(blockArray[j]);
					singleCheck();
				}				
			}	
	},
	
	takeRequestResult: function(block1, block2){	//拾取中央區域圖卡
		if(blockArray[i].id == "blank_1" && blockArray[i].empty =="false" && blockArray[i].use ==true && complete == false){
			draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
			draw.clearDraw(eval(blockArray[i+2].pen), blockArray[i+2].obj.width(), blockArray[i+2].obj.height());	//清除字符區
			handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, top, left		創造物件
			handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].original_nume, blockArray[i].original_denom, blockArray[i].max_extend, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx定義物件屬性 
			handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
			draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
			for(var k=0; k<blockArray.length; k++){
				if(blockArray[k] == null){
					blockArray[k] = eval(blockArray[i].contain);
					break;
				}
			}
			blockArray[i].empty = "true";
			blockArray[i].obj.css("border-color","");
			draw.clearDraw(eval(blockArray[i+2].showOriFra), 100, 60);	//清除圖卡初始值
			draw.clearDraw(eval(blockArray[i].showOriFra), 180, 180);
			draw.clearDraw(eval(blockArray[i+2].showExtendSym), 150, 60);	//清除圖卡擴充值
			draw.clearDraw(eval(blockArray[i].showExtendGra), 180, 180);
			blockArray[i+2].SymOriFraObj.css("display","none"), blockArray[i].OriFraObj.css("display","none");
			blockArray[i+2].SymExtendObj.css("display","none"), blockArray[i].ExtendObj.css("display","none");
			switch(blockArray[i].id){		
				case "blank_1":
					$("#link1").css("display","none"), $("#link2").css("display","none");
					$("#original1").css("display","none"), $("#extend1").css("display","none");
					break;
				case "blank_2":
					$("#link3").css("display","none"), $("#link4").css("display","none");
					$("#original2").css("display","none"), $("#extend2").css("display","none");
					break;
				case "blank_3":
					$("#link5").css("display","none"), $("#link6").css("display","none");
					$("#original3").css("display","none"), $("#extend3").css("display","none");
					break;
				}						
		}
	},
	
	calAnswerTimes: function(block){	//計算每個人的填答次數(中央區域)
		switch(block.member){
			case "member_A":
				data_log.member_A_answer_times ++;
				break;
			case "member_B":
				data_log.member_B_answer_times ++;
				break;
			case "member_C":
				data_log.member_C_answer_times ++;
				break;
		}
	},
	
	calErrorTimes: function(block){	//計算每個人的錯誤填答次數(中央區域)
		switch(block.member){
			case "member_A":
				data_log.member_A_error_times ++;
				break;
			case "member_B":
				data_log.member_B_error_times ++;
				break;
			case "member_C":
				data_log.member_C_error_times ++;
				break;
		}
	},
	
	calTransTimes: function(block){	//計算圖卡轉換次數
		switch(block.id){
			case "member_A_fraction_graphic_first":
				data_log.member_A_trans_times.gra_first++;
				break;
			case "member_A_fraction_graphic_second":
				data_log.member_A_trans_times.gra_second++;
				break;
			case "member_A_fraction_graphic_third":
				data_log.member_A_trans_times.gra_third++;
				break;
			case "member_B_fraction_graphic_first":
				data_log.member_B_trans_times.gra_first++;
				break;
			case "member_B_fraction_graphic_second":
				data_log.member_B_trans_times.gra_second++;
				break;
			case "member_B_fraction_graphic_third":
				data_log.member_B_trans_times.gra_third++;
				break;
			case "member_C_fraction_graphic_first":
				data_log.member_C_trans_times.gra_first++;
				break;
			case "member_C_fraction_graphic_second":
				data_log.member_C_trans_times.gra_second++;
				break;
			case "member_C_fraction_graphic_third":
				data_log.member_C_trans_times.gra_third++;
				break;
		}
	},
	
	calTransCancelTimes: function(block){	//計算圖卡轉換取消次數
		switch(block){
			case "member_A_fraction_graphic_first":
				data_log.member_A_trans_cancel_times.gra_first++;
				break;
			case "member_A_fraction_graphic_second":
				data_log.member_A_trans_cancel_times.gra_second++;
				break;
			case "member_A_fraction_graphic_third":
				data_log.member_A_trans_cancel_times.gra_third++;
				break;
			case "member_B_fraction_graphic_first":
				data_log.member_B_trans_cancel_times.gra_first++;
				break;
			case "member_B_fraction_graphic_second":
				data_log.member_B_trans_cancel_times.gra_second++;
				break;
			case "member_B_fraction_graphic_third":
				data_log.member_B_trans_cancel_times.gra_third++;
				break;
			case "member_C_fraction_graphic_first":
				data_log.member_C_trans_cancel_times.gra_first++;
				break;
			case "member_C_fraction_graphic_second":
				data_log.member_C_trans_cancel_times.gra_second++;
				break;
			case "member_C_fraction_graphic_third":
				data_log.member_C_trans_cancel_times.gra_third++;
				break;
		}
	},
	
	recoverAnsErrTimes: function(){	//進入新的一題時，還原每個人的錯誤填答次數、填答數
		data_log.member_A_error_times = 0;	//錯誤填答數 & 總填答次數
		data_log.member_A_answer_times = 0;				
			
		data_log.member_B_error_times = 0;
		data_log.member_B_answer_times = 0;				
			
		data_log.member_C_error_times = 0;
		data_log.member_C_answer_times = 0;
		
		data_log.member_A_trans_times.gra_first = 0;	//圖卡轉換次數
		data_log.member_A_trans_times.gra_second = 0;
		data_log.member_A_trans_times.gra_third = 0;
		
		data_log.member_B_trans_times.gra_first = 0;
		data_log.member_B_trans_times.gra_second = 0;
		data_log.member_B_trans_times.gra_third = 0;
		
		data_log.member_C_trans_times.gra_first = 0;
		data_log.member_C_trans_times.gra_second = 0;
		data_log.member_C_trans_times.gra_third = 0;
		
		data_log.member_A_trans_cancel_times.gra_first = 0;	//圖卡轉換取消次數
		data_log.member_A_trans_cancel_times.gra_second = 0;
		data_log.member_A_trans_cancel_times.gra_third = 0;
		
		data_log.member_B_trans_cancel_times.gra_first = 0;	
		data_log.member_B_trans_cancel_times.gra_second = 0;
		data_log.member_B_trans_cancel_times.gra_third = 0;
		
		data_log.member_C_trans_cancel_times.gra_first = 0;	
		data_log.member_C_trans_cancel_times.gra_second = 0;
		data_log.member_C_trans_cancel_times.gra_third = 0;
	},
	
	hideOriExtendArea: function(blockSym, blockGra, blockId){
		blockSym.SymOriFraObj.css("display","none"), blockGra.OriFraObj.css("display","none");
		blockSym.SymExtendObj.css("display","none"), blockGra.ExtendObj.css("display","none");
		switch(blockId){
			case "blank_1":
				$("#link1").css("display","none"), $("#link2").css("display","none");
				$("#original1").css("display","none"), $("#extend1").css("display","none");
				break;
			case "blank_2":
				$("#link3").css("display","none"), $("#link4").css("display","none");
				$("#original2").css("display","none"), $("#extend2").css("display","none");
				break;
			case "blank_3":
				$("#link5").css("display","none"), $("#link6").css("display","none");
				$("#original3").css("display","none"), $("#extend3").css("display","none");
				break;
		}
	},
	
	hideBackButton: function(){	//隱藏收回圖卡的按鈕
		var button = [];
		for(var i=102; i<=110; i++){
			button.push(eval("block"+i));
		}
		$.each(button, function(){
			this.obj.css("display","none");
		});
	},
	
	disableRubber: function(){	//半透明化目前不能使用的Rubber band area
		if(block1.empty == "false"){
			block90.obj.css("opacity","0.1");
			block93.obj.css("opacity","0.1");
			block96.obj.css("opacity","0.1");
		}else if(block1.empty == "true"){
			block90.obj.css("opacity","1");
			block93.obj.css("opacity","1");
			block96.obj.css("opacity","1");
		}
		if(block2.empty == "false"){
			block91.obj.css("opacity","0.1");
			block94.obj.css("opacity","0.1");
			block97.obj.css("opacity","0.1");
		}else if(block2.empty == "true"){
			block91.obj.css("opacity","1");
			block94.obj.css("opacity","1");
			block97.obj.css("opacity","1");
		}
		if(block66.empty == "false"){
			block92.obj.css("opacity","0.1");
			block95.obj.css("opacity","0.1");
			block98.obj.css("opacity","0.1");
		}else if(block66.empty == "true"){
			block92.obj.css("opacity","1");
			block95.obj.css("opacity","1");
			block98.obj.css("opacity","1");
		}
	},
	
	clearObj: function(){//	清除散落在中央區域的物件
		if(typeof(A_0) != "undefined" && typeof(A_0) != "string"){
			A_0.obj.remove();
		}
		if(typeof(A_1) != "undefined" && typeof(A_1) != "string"){
			A_1.obj.remove();
		}
		if(typeof(A_2) != "undefined" && typeof(A_2) != "string"){
			A_2.obj.remove();
		}
		if(typeof(B_0) != "undefined"  && typeof(B_0) != "string"){
			B_0.obj.remove();
		}
		if(typeof(B_1) != "undefined"  && typeof(B_1) != "string"){
			B_1.obj.remove();
		}
		if(typeof(B_2) != "undefined"  && typeof(B_2) != "string"){
			B_2.obj.remove();
		}
		if(typeof(C_0) != "undefined" && typeof(C_0) != "string"){
			C_0.obj.remove();
		}
		if(typeof(C_1) != "undefined" && typeof(C_1) != "string"){
			C_1.obj.remove();
		}
		if(typeof(C_2) != "undefined" && typeof(C_2) != "string"){
			C_2.obj.remove();
		}
	},
	
	showNextObj: function(){
		var next = [block70, block71, block72];	//下一階段的按鈕
		var explain = [block73, block74, block75];
		var trans = [block62, block63, block64];		
		for(var i=0; i<3; i++){
			next[i].obj.css("display","block");
			next[i].obj.animate({opacity:1}, 600);			
			explain[i].obj.animate({opacity:0.2}, 600, function(){
				this.obj.css("display","none");
			});
			trans[i].obj.animate({opacity:0.2}, 600, function(){
				this.obj.css("display","none");
			});
		}
		//$("#centralReport").css("display","block");
		//$("#centralReport").animate({opacity:1}, 600);
	}
}
