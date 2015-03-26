/**
 * @author wei
 */

function handleObj(){
	
}

handleObj.prototype = {
	createGraObj: function(id, type, top, left){
		var gra = document.createElement('canvas'); 
		gra.id = id;
		gra.style.zIndex =1;
		gra.style.position ="absolute";
		gra.style.top = top+"px";
		gra.style.left = left+"px";		
		$(gra).css("background","white");
		$(gra).css("border-color","red");
		$(gra).css("border-width","5px");
		$(gra).css("border-style","solid");
		$(gra).css("-webkit-border-radius","10px");
		$(gra).css("z-index","1");		
		switch(type){
			case "proper":
				gra.style.width = "180px";
				gra.style.height = "180px";	
				break;
			case "improper":
				gra.style.width = "360px";
				gra.style.height = "180px";	
				break;
			case "mix":
				gra.style.width = "360px";
				gra.style.height = "180px";	
				break;
		}
		$(gra).css("-webkit-transform","scale(0.7)");	
		o.appendChild(gra);
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
	
	createSymProperty: function(id, denom, nume, whole, ctx, canvas, type){
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
		eval(id+".type ="+"type");
		switch(type){
			case "proper":
				eval(id+".whole="+0);
				break;
			case "improper":
				eval(id+".whole="+0);
				break;
			case "mix":
				eval(id+".whole="+1);
				break;
		}
	},
	
	createGraProperty: function(id, denom, nume, src, canvas, ctx, type, block){	//還原圖卡物件屬性
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
		//eval(name+".index ="+index);
		eval(id+".pen='"+ctx+"'");
		eval(id+".canvas ='"+canvas+"'");
		eval(id+".value ="+(nume / denom));
		eval(id+".src ="+"src");
		eval(id+".type ="+"type");
		eval(id+".start=block");
		switch(type){
			case "proper":
				eval(id+".whole="+0);
				break;
			case "improper":
				eval(id+".whole="+0);
				break;
			case "mix":
				eval(id+".whole="+1);
				break;
		}
		switch(block.orientation){
			case "left":
				eval(id+".orientation='left'");
				break;
			case "bottom":
				eval(id+".orientation='bottom'");
				break;
			case "right":
				eval(id+".orientation='right'");
				break;
		}
	},
	
	createCanvasProperty: function(content, type, id, canvas, ctx){
		if(content =="symbol"){
			eval(canvas+ "= document.getElementById('"+id+"')");
			eval(canvas+".width = 100"), eval(canvas+".height = 100");
			eval(ctx+ "= "+canvas+".getContext('2d')");
		}		
		if(content =="graphic"){
			switch(type){
				case "proper":
					eval(canvas+ "= document.getElementById('"+id+"')");
					eval(canvas+".width = 180"), eval(canvas+".height = 180");
					eval(ctx+ "= "+canvas+".getContext('2d')");
					break;
				case "improper":
					eval(canvas+ "= document.getElementById('"+id+"')");
					eval(canvas+".width = 180"), eval(canvas+".height = 180");
					eval(ctx+ "= "+canvas+".getContext('2d')");
					break;
				case "mix":
					eval(canvas+ "= document.getElementById('"+id+"')");
					eval(canvas+".width = 180"), eval(canvas+".height = 180");
					eval(ctx+ "= "+canvas+".getContext('2d')");
					break;
			}
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
			div.style.width = 141+"px";
			div.style.height = 32+"px";
			div.style.top = top+"px";
			div.style.left = left+"px";
			$(div).css("background","url(../mathematic/result/blank.png) no-repeat");
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
		}
		o.appendChild(div);
	},
	
	calGraTakeTimes: function(block){	//計算每張圖卡的抓取次數
		switch(block.id){
			case "member_A_fraction_graphic_first":
				data_log.member_A_first_take_times++;
				break;
			case "member_A_fraction_graphic_second":
				data_log.member_A_second_take_times++;
				break;
			case "member_A_fraction_graphic_third":
				data_log.member_A_third_take_times++;
				break;
			case "member_B_fraction_graphic_first":
				data_log.member_B_first_take_times++;
				break;
			case "member_B_fraction_graphic_second":
				data_log.member_B_second_take_times++;
				break;	
			case "member_B_fraction_graphic_third":
				data_log.member_B_third_take_times++;
				break;
			case "member_C_fraction_graphic_first":
				data_log.member_C_first_take_times++;
				break;
			case "member_C_fraction_graphic_second":
				data_log.member_C_second_take_times++;
				break;
			case "member_C_fraction_graphic_third":
				data_log.member_C_third_take_times++;
				break;
		}
	},
	
	changePicData: function(change, start, target, panelData){	//將圖卡資料做交換	
		switch(change){
			case true:	//true則進行交換
				start.blockName = target.blockName;			
				start.denom = target.denom;
				start.nume = target.nume;
				start.whole = target.whole;
				//start.block_pen = target.block_pen;
				start.canvas = target.canvas;
				start.src = target.src;
				start.type = target.type;
				start.empty = "false";
				
				target.blockName = panelData.blockName;						
				target.denom = panelData.denom;
				target.nume = panelData.nume;
				target.whole = panelData.whole;
				//target.block_pen =panelData.block_pen;
				target.canvas = panelData.canvas;
				target.src = panelData.src;
				target.type = panelData.type;
				target.empty = "false";
				break;
			case false:	//false則不進行交換				
				start.empty = "false";	
				break;
		}		
	},
	
	showMemberObject: function(){	
		var symArray = [block1, block2, block3, block4, block5, block6, block7, block8, block9];
		var graArray = [block10, block11, block12, block13, block14, block15, block16, block17, block18];
		
		$.each(symArray, function(){
			this.obj.css("display","block");
			this.obj.css("opacity","1");
		});
		$.each(graArray, function(){
			this.obj.css("display","block");
			this.obj.css("opacity","1");
		});
	},
	
	showRubberBandArea: function(position){	//開啟橡皮筋
		switch(position){
			case "A_left":
				$("#A_rubberBandArea_left").css("display","block");
				$("#A_to_c0").css("display","block"), $("#A_to_c1").css("display","block"), $("#A_to_c2").css("display","block");
				break;
			case "A_right":
				$("#A_rubberBandArea_right").css("display","block");
				$("#A_to_b0").css("display","block"), $("#A_to_b1").css("display","block"), $("#A_to_b2").css("display","block");
				break;
			case "B_left":
				$("#B_rubberBandArea_left").css("display","block");
				$("#B_to_a0").css("display","block"), $("#B_to_a1").css("display","block"), $("#B_to_a2").css("display","block");
				break;
			case "B_right":
				$("#B_rubberBandArea_right").css("display","block");
				$("#B_to_c0").css("display","block"), $("#B_to_c1").css("display","block"), $("#B_to_c2").css("display","block");
				break;
			case "C_left":
				$("#C_rubberBandArea_left").css("display","block");
				$("#C_to_b0").css("display","block"), $("#C_to_b1").css("display","block"), $("#C_to_b2").css("display","block");
				break;
			case "C_right":
				$("#C_rubberBandArea_right").css("display","block");
				$("#C_to_a0").css("display","block"), $("#C_to_a1").css("display","block"), $("#C_to_a2").css("display","block");
				break;
		}
	},
	
	hideRubberBandArea: function(position){	//關閉橡皮筋
		switch(position){
			case "A_left":
				$("#A_rubberBandArea_left").css("display","none");
				$("#A_to_c0").css("display","none"), $("#A_to_c1").css("display","none"), $("#A_to_c2").css("display","none");
				$("#A_to_c0_link").css("display","none"), $("#A_to_c1_link").css("display","none"), $("#A_to_c2_link").css("display","none");
				break;
			case "A_right":
				$("#A_rubberBandArea_right").css("display","none");
				$("#A_to_b0").css("display","none"), $("#A_to_b1").css("display","none"), $("#A_to_b2").css("display","none");
				$("#A_to_b0_link").css("display","none"), $("#A_to_b1_link").css("display","none"), $("#A_to_b2_link").css("display","none");
				break;
			case "B_left":
				$("#B_rubberBandArea_left").css("display","none");
				$("#B_to_a0").css("display","none"), $("#B_to_a1").css("display","none"), $("#B_to_a2").css("display","none");
				$("#B_to_a0_link").css("display","none"), $("#B_to_a1_link").css("display","none"), $("#B_to_a2_link").css("display","none");
				break;
			case "B_right":
				$("#B_rubberBandArea_right").css("display","none");
				$("#B_to_c0").css("display","none"), $("#B_to_c1").css("display","none"), $("#B_to_c2").css("display","none");
				$("#B_to_c0_link").css("display","none"), $("#B_to_c1_link").css("display","none"), $("#B_to_c2_link").css("display","none");
				break;
			case "C_left":
				$("#C_rubberBandArea_left").css("display","none");
				$("#C_to_b0").css("display","none"), $("#C_to_b1").css("display","none"), $("#C_to_b2").css("display","none");
				$("#C_to_b0_link").css("display","none"), $("#C_to_b1_link").css("display","none"), $("#C_to_b2_link").css("display","none");
				break;
			case "C_right":
				$("#C_rubberBandArea_right").css("display","none");
				$("#C_to_a0").css("display","none"), $("#C_to_a1").css("display","none"), $("#C_to_a2").css("display","none");
				$("#C_to_a0_link").css("display","none"), $("#C_to_a1_link").css("display","none"), $("#C_to_a2_link").css("display","none");
				break;
		}
	},
	
	moveChangePanel: function(panel){	//移動交換面板
		//block.obj.offset({top:block.obj.offset().top -= 10});
		switch(panel.id){
			case "A_whether_change":
				switch(panel.target.id){
					case "member_A_fraction_graphic_first":
						panel.obj.css("left",450);
						panel.obj.css("top",200);
						break;
					case "member_A_fraction_graphic_second":
						panel.obj.css("left",450);
						panel.obj.css("top",450);
						break;
					case "member_A_fraction_graphic_third":
						panel.obj.css("left",450);
						panel.obj.css("top",680);
						break;
				}
				break;
			case "B_whether_change":
				switch(panel.target.id){
					case "member_B_fraction_graphic_first":
						panel.obj.css("top",800);
						panel.obj.css("left",710);
						break;
					case "member_B_fraction_graphic_second":
						panel.obj.css("top",800);
						panel.obj.css("left",910);
						break;
					case "member_B_fraction_graphic_third":
						panel.obj.css("top",800);
						panel.obj.css("left",1150);
						break;
				}
				break;
			case "C_whether_change":
				switch(panel.target.id){
					case "member_C_fraction_graphic_first":
						panel.obj.css("top",780);
						panel.obj.css("left",1450);
						break;
					case "member_C_fraction_graphic_second":
						panel.obj.css("top",550);
						panel.obj.css("left",1450);
						break;
					case "member_C_fraction_graphic_third":
						panel.obj.css("top",300);
						panel.obj.css("left",1450);
						break;
				}
				break;
		}
	},
	
	disableRubber: function(){	//半透明化目前不能使用的Rubber band area
		if(A_change_state == false){
			block39.obj.css("opacity",0.1);
			block51.obj.css("opacity",0.1);
		}else{
			block39.obj.css("opacity",1);
			block51.obj.css("opacity",1);
		}
		
		if(B_change_state == false){
			block35.obj.css("opacity",0.1);
			block47.obj.css("opacity",0.1);
		}else{
			block35.obj.css("opacity",1);
			block47.obj.css("opacity",1);
		}
		
		if(C_change_state == false){
			block31.obj.css("opacity",0.1);
			block43.obj.css("opacity",0.1);
		}else{
			block31.obj.css("opacity",1);
			block43.obj.css("opacity",1);
		}
	},
	
	disableSinRubber: function(){ //半透明化目前不能使用的Rubber band(Single)
		for(var i=27; i<=49; i++){
			if(i==30 || i==34 || i==38 || i==42 || i==46){
				continue;
			}
			if(blockArray[i].target.empty == "temp" || blockArray[i].target.use == false){
				blockArray[i].obj.css("opacity",0.1);
			}else if(blockArray[i].target.empty == "false" && blockArray[i].target.use == true){
				blockArray[i].obj.css("opacity",1);
			}					
		}
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
	}	
}
