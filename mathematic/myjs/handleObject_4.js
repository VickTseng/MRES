/**
 * @author wei
 */
function handleObj_4(){
	
}

handleObj_4.prototype = {
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
		eval(id+".corrd="+corrd);
		eval(id+".original_nume="+original_nume);
		eval(id+".original_denom="+original_denom);
		eval(id+".max_extend="+max_extend);
		eval(id+".pen='"+ctx+"'");
		eval(id+".canvas ='"+canvas+"'");
		eval(id+".value ="+(nume / denom));
		eval(id+".whetherExtend="+block.whetherExtend);
		eval(id+".src ="+"src");
		eval(id+".orientation='"+block.orientation+"'");
		eval(id+".from='"+block.id+"'");
		eval(id+".back=block.back");
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
	
	hideAllbackButton: function(){
		var button = [];
		for(var i=114; i<=122; i++){
			eval("button.push(block"+i+")");
		}
		$.each(button, function(){
			this.obj.css("display","none");
		});
	},
	
	showMoveResult: function(block){
		for(var j=0; j<2; j++){//判斷物件進入中央圖像填空區(第一題)
				if((block.obj.offset().left+90 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+90 >=blockArray[j].obj.offset().top) && 	//圖像進入中央區域時
					(block.obj.offset().left+90 <=blockArray[j].obj.offset().left+200) && (block.obj.offset().top+90 <=blockArray[j].obj.offset().top+200) &&(blockArray[j].empty =="true")
					&& (block.content == "graphic")){
					draw.drawGra(eval(blockArray[j].pen), block.src);	//ctx, imgPath
					blockArray[j].denom = block.denom;
					blockArray[j].nume = block.nume;
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
					blockArray[j].back = block.back;
					draw.initialCentralSym(eval(blockArray[j+3].pen),blockArray[j].denom, blockArray[j].nume);	//畫上字符
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
				//showProcess();
			}
			for(var j=90; j<93; j++){//判斷物件進入中央圖像填空區(第二題)
				if((block.obj.offset().left+90 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+90 >=blockArray[j].obj.offset().top) && 	//圖像進入中央區域時
					(block.obj.offset().left+90 <=blockArray[j].obj.offset().left+200) && (block.obj.offset().top+90 <=blockArray[j].obj.offset().top+200) &&(blockArray[j].empty =="true")
					&& (block.content == "graphic") && question.next == true){
					draw.drawGra(eval(blockArray[j].pen), block.src);	//ctx, imgPath
					blockArray[j].denom = block.denom;
					blockArray[j].nume = block.nume;
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
					blockArray[j].back = block.back;
					draw.initialCentralSym(eval(blockArray[j+4].pen),blockArray[j].denom, blockArray[j].nume);	//畫上字符
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
				//showProcess();
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
				blockArray[15].trans = false, blockArray[16].trans = false, blockArray[17].trans = false;
				Panel_A.operator ="", Panel_A.count="", block27.obj.html("");
				Panel_A.extend ="", Panel_A.result_nume = "", Panel_A.result_denom = "";
				draw.clearDraw(eval(block29.pen),150, 150), draw.clearDraw(eval(block30.pen),150, 150), draw.clearDraw(eval(block31.pen),150, 150);
				$("#A_message").html("");
				$("div").remove("#A_trans_explain");
				block36.use = false, block36.obj.css("color","white");
				block85.use = false, block85.obj.css("color","white");
				$("#A_add").css("display","none"), $("#A_sub").css("display","none"), $("#A_count").css("display","none");
				$("#A_unit").css("display","none"), $("#A_ten").css("display","none");
				$("#member_A").css("display","block");
				A_translate = false;
				break;
			case "B_panel":
				$("#B_panel").css("display","none");
				blockArray[18].trans = false, blockArray[19].trans = false, blockArray[20].trans = false;
				Panel_B.operator ="", Panel_B.count="", block40.obj.html("");
				Panel_B.extend ="", Panel_B.result_nume = "", Panel_B.result_denom = "";
				draw.clearDraw(eval(block42.pen),150, 150), draw.clearDraw(eval(block43.pen),150, 150), draw.clearDraw(eval(block44.pen),150, 150);
				$("div").remove("#B_trans_explain");
				$("#B_message").html("");
				block49.use = false, block49.obj.css("color","white");
				block86.use = false, block86.obj.css("color","white");
				$("#B_add").css("display","none"), $("#B_sub").css("display","none"), $("#B_count").css("display","none");
				$("#B_unit").css("display","none"), $("#B_ten").css("display","none");
				$("#member_B").css("display","block");
				B_translate = false;
				break;
			case "C_panel":
				$("#C_panel").css("display","none");
				blockArray[21].trans = false, blockArray[22].trans = false, blockArray[23].trans = false;
				Panel_C.operator ="", Panel_C.count="", block53.obj.html("");
				Panel_C.extend ="", Panel_C.result_nume = "", Panel_C.result_denom = "";
				draw.clearDraw(eval(block55.pen),150, 150), draw.clearDraw(eval(block56.pen),150, 150), draw.clearDraw(eval(block57.pen),150, 150);
				$("div").remove("#C_trans_explain");
				$("#C_message").html("");
				block62.use = false, block62.obj.css("color","white");
				block87.use = false, block87.obj.css("color","white");
				$("#C_add").css("display","none"), $("#C_sub").css("display","none"), $("#C_count").css("display","none");
				$("#C_unit").css("display","none"), $("#C_ten").css("display","none");
				$("#member_C").css("display","block");
				C_translate = false;
				break;
		}
	},	
	
	switchFraction: function(block){	//轉換按鍵狀態(帶分數轉假分數or假分數轉帶分數)
		switch(block.tranFraction){
			case "mixed":
				block.obj.html("轉成假分數");
				block.tranFraction = "improper";
				break;
			case "improper":
				block.obj.html("轉成帶分數");
				block.tranFraction = "mixed";
				break;
		}
	},
	
	createResultBox: function(id, answer, top, left, position){
		var div = document.createElement('div');
		div.style.position = "absolute";
		div.id = id;
		if(answer == "correct"){			
			div.style.width = 126+"px";
			div.style.height = 94+"px";
			div.style.top = top+"px";
			div.style.left = left+"px";
			$(div).css("background","url(../mathematic/result/correct.png) no-repeat");			
		}
		if(answer == "error"){					
			div.style.width = 126+"px";
			div.style.height = 94+"px";
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
	
	randomGraSym: function(){		
		var memberA_sym = [block7, block8, block9], memberB_sym = [block10, block11, block12], memberC_sym = [block13, block14, block15];
		var memberA_gra = [block16, block17, block18], memberB_gra = [block19, block20, block21], memberC_gra = [block22, block23, block24];		
		
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
	
	showCentralObject: function(){	//顯示第一種形式的題目
		var object = [block1, block2, block3, block4, block5, block6, block71, block72];	//中央區域物件
		var trans_object = [block64, block65, block66];	//轉換按鈕
		
		$.each(object, function(){		
			this.obj.css("display","block");
			this.obj.animate({opacity:1},1000);
		});		
		$.each(trans_object, function(i){			
			switch(i){
				case 0:
					this.use = true;
					this.obj.css("display","block");
					this.obj.animate({opacity: 1},600);
					break;
				case 1:
					this.use = true;
					this.obj.css("display","block");
					this.obj.animate({opacity: 1},600);
					break;
				case 2:
					this.use = true;
					this.obj.css("display","block");
					this.obj.animate({opacity: 1},600);
					break;
			}
		});
	},
	
	closeCentralObject: function(){	//關閉第一種形式的題目
		var object = [block1, block2, block3, block4, block5, block6, block71, block72];	//中央區域物件		
		$.each(object, function(){		
			this.obj.css("display","none");
			this.obj.animate({opacity:0.2},1000);
		});	
	},
	
	showSecondQues: function(){	//顯示第二種形式的題目
		var object = [block91, block92, block93, block94, block95, block96, block97, block98, block99, block100, block101];	//中央區域物件
		$.each(object, function(){		
			this.obj.css("display","block");
			this.obj.animate({opacity:1},1000);
		});
	},
	
	hidePersonalObject: function(){
		var symArray = [block7, block8, block9, block10, block11, block12, block13, block14, block15];
		var graArray = [block16, block17, block18, block19, block20, block21, block22, block23, block24];		
		$.each(symArray, function(){		
			this.obj.css("display","none");		
			this.obj.css("opacity","0.2");	
		});		
		$.each(graArray, function(){	
			this.obj.css("display","none");
			this.obj.css("opacity","0.2");				
		});		
	},
	
	showPersonalObject: function(a, b, c){
		var personalSym_A = [block7, block8, block9], personalGra_A = [block16, block17, block18];
		var personalSym_B = [block10, block11, block12], personalGra_B = [block19, block20, block21];
		var personalSym_C = [block13, block14, block15], personalGra_C = [block22, block23, block24];			
		
		personalSym_A[a].obj.css("display","block"), personalSym_A[a].obj.animate({opacity:1},800);
		personalGra_A[a].obj.css("display","block"), personalGra_A[a].obj.animate({opacity:1},800);
		
		personalSym_B[b].obj.css("display","block"), personalSym_B[b].obj.animate({opacity:1},800);
		personalGra_B[b].obj.css("display","block"), personalGra_B[b].obj.animate({opacity:1},800);
		
		personalSym_C[c].obj.css("display","block"), personalSym_C[c].obj.animate({opacity:1},800);
		personalGra_C[c].obj.css("display","block"), personalGra_C[c].obj.animate({opacity:1},800);
		
	},
	
	randomGraSym: function(){		
		var memberA_sym = [block7, block8, block9], memberB_sym = [block10, block11, block12], memberC_sym = [block13, block14, block15];
		var memberA_gra = [block16, block17, block18], memberB_gra = [block19, block20, block21], memberC_gra = [block22, block23, block24];		
		
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
	
	showResult: function(){	//顯現最後結果
		$("#A_report").css("display","block"), $("#B_report").css("display","block"), $("#C_report").css("display","block");
		$("#A_report").animate({opacity:1}, 600), $("#B_report").animate({opacity:1}, 600), $("#C_report").animate({opacity:1}, 600);
		$("#central_area").children().css("display","none");	//將中央區域的題目關閉
		block82.obj.css("display","block"), block83.obj.css("display","block"), block84.obj.css("display","block");
		block82.obj.animate({opacity:1}, 600), block83.obj.animate({opacity:1}, 600), block84.obj.animate({opacity:1}, 600);
		block64.obj.css("display","none"), block65.obj.css("display","none"), block66.obj.css("display","none");
	},
	
	changeRubberbandState: function(){	//進入第二題時，改變Rubber band的方向及位置、屬性
		$("#"+block103.linkLine).css("width",350);
		$("#"+block105.linkLine).css("left", -250), $("#"+block105.linkLine).css("-webkit-transform", "rotate(55deg)");
		$("#"+block106.linkLine).css("left", -50), $("#"+block106.linkLine).css("-webkit-transform", "rotate(65deg)");
		$("#"+block108.linkLine).css("left", -880), $("#"+block108.linkLine).css("-webkit-transform", "rotate(5deg)"), $("#"+block108.linkLine).css("width", 900);
		$("#"+block109.linkLine).css("top", 180), $("#"+block109.linkLine).css("left", -650), $("#"+block109.linkLine).css("width", 680);		
		block104.obj.css("display","block"), block107.obj.css("display","block"), block110.obj.css("display","block");
		
		block102.target = block91, block103.target = block92;
		block102.targetSym = block95, block103.targetSym = block96;
		block102.linkTarget = $("#blank_4"), block103.linkTarget = $("#blank_5");
		
		block105.target = block91, block106.target = block92;
		block105.targetSym = block95, block106.targetSym = block96;	
		block105.linkTarget = $("#blank_4"), block106.linkTarget = $("#blank_5");
		
		block108.target = block91, block109.target = block92;
		block108.targetSym = block95, block109.targetSym = block96;
		block108.linkTarget = $("#blank_4"), block109.linkTarget = $("#blank_5");
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
	
	recoverGraEmpty: function(){
		var graArray = [block16, block17, block18, block19, block20, block21, block22, block23, block24];		
		$.each(graArray, function(){	
			this.empty = "false";		
		});			
	}
}
