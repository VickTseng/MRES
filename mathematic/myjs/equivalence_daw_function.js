/**
 * @author wei
 */
function draw(){
	
}

draw.prototype = {
	initialMemberGra: function(img1, img2, img3, img4, img5, img6, img7, img8, img9){
		window.onload = function(){					
			ctx15.drawImage(img1,10,20,150,150);
			ctx16.drawImage(img2,10,20,150,150);
			ctx17.drawImage(img3,10,20,150,150);					
			ctx18.drawImage(img4,10,20,150,150);
			ctx19.drawImage(img5,10,20,150,150);
			ctx20.drawImage(img6,10,20,150,150);				
			ctx21.drawImage(img7,10,20,150,150);
			ctx22.drawImage(img8,10,20,150,150);
			ctx23.drawImage(img9,10,20,150,150);			
		}		
	},
	
	initialMemberSym: function(member_A, member_B, member_C){
		//ctx6.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx6.fillRect(40,0,80,90);
		ctx6.fillStyle = "black"; 
		ctx6.font = "italic bold 40px serif";
		ctx6.textAlign = "center";
		ctx6.fillText(member_A.denom[0],70,70);	//分母
		ctx6.fillText("    ___",55,30)
		ctx6.fillText(member_A.nume[0],75,30);	//分子
		
		//ctx7.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx7.fillRect(40,0,80,90);
		ctx7.fillStyle = "black"; 
		ctx7.font = "italic bold 40px serif";
		ctx7.textAlign = "center";
		ctx7.fillText(member_A.denom[1],70,70);	//分母
		ctx7.fillText("    ___",55,30)
		ctx7.fillText(member_A.nume[1],75,30);	//分子
		
		//ctx8.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx8.fillRect(40,0,80,90);
		ctx8.fillStyle = "black"; 
		ctx8.font = "italic bold 40px serif";
		ctx8.textAlign = "center";
		ctx8.fillText(member_A.denom[2],70,70);	//分母
		ctx8.fillText("    ___",55,30)
		ctx8.fillText(member_A.nume[2],75,30);	//分子
		
		//ctx9.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx9.fillRect(40,0,80,90);
		ctx9.fillStyle = "black"; 
		ctx9.font = "italic bold 40px serif";
		ctx9.textAlign = "center";
		ctx9.fillText(member_B.denom[0],70,70);	//分母
		ctx9.fillText("    ___",55,30)
		ctx9.fillText(member_B.nume[0],75,30);	//分子
		
		//ctx10.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx10.fillRect(40,0,80,90);
		ctx10.fillStyle = "black"; 
		ctx10.font = "italic bold 40px serif";
		ctx10.textAlign = "center";
		ctx10.fillText(member_B.denom[1],70,70);	//分母
		ctx10.fillText("    ___",55,30)
		ctx10.fillText(member_B.nume[1],75,30);	//分子
		
		//ctx11.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx11.fillRect(40,0,80,90);
		ctx11.fillStyle = "black"; 
		ctx11.font = "italic bold 40px serif";
		ctx11.textAlign = "center";
		ctx11.fillText(member_B.denom[2],70,70);	//分母
		ctx11.fillText("    ___",55,30)
		ctx11.fillText(member_B.nume[2],75,30);	//分子
		
		//ctx12.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx12.fillRect(40,0,80,90);
		ctx12.fillStyle = "black"; 
		ctx12.font = "italic bold 40px serif";
		ctx12.textAlign = "center";
		ctx12.fillText(member_C.denom[0],70,70);	//分母
		ctx12.fillText("    ___",55,30)
		ctx12.fillText(member_C.nume[0],75,30);	//分子
		
		//ctx13.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx13.fillRect(40,0,80,90);
		ctx13.fillStyle = "black"; 
		ctx13.font = "italic bold 40px serif";
		ctx13.textAlign = "center";
		ctx13.fillText(member_C.denom[1],70,70);	//分母
		ctx13.fillText("    ___",55,30)
		ctx13.fillText(member_C.nume[1],75,30);	//分子
		
		//ctx14.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx14.fillRect(40,0,80,90);
		ctx14.fillStyle = "black"; 
		ctx14.font = "italic bold 40px serif";
		ctx14.textAlign = "center";
		ctx14.fillText(member_C.denom[2],70,70);	//分母
		ctx14.fillText("    ___",55,30)
		ctx14.fillText(member_C.nume[2],75,30);	//分子
	},
	
	draSym: function(ctx, denom, nume){	//繪製字符(個人面板)
		//ctx.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx.fillRect(40,0,80,90);
		ctx.fillStyle = "black"; 
		ctx.font = "italic bold 40px serif";
		ctx.textAlign = "center";
		ctx.fillText(denom,70,70);	//分母
		ctx.fillText("    ___",55,30)
		ctx.fillText(nume,75,30);	//分子
	},
	
	initialCentralSym: function(ctx, denom, nume){
		ctx.font = "italic bold 30px serif";
		ctx.textAlign = "center";
		ctx.fillText(denom,40,55);	//分母
		ctx.fillText("    ___",25,25)
		ctx.fillText(nume,45,25);	//分子
	},	
	
	drawGra: function(ctx, imgPath){	//繪製圖形		
		switch(imgPath.complete){
			case true:
				ctx.drawImage(imgPath,10,20,150,150);
				break;
			case false:
				imgPath.onload = function(){
					ctx.drawImage(imgPath,10,20,150,150);
				}
				break;
		}						
	},
	
	drawQuesGra: function(ctx, imgPath){	//繪製中央區域的問題圖形
		imgPath.onload = function(){
			ctx.drawImage(imgPath,10,20,150,150);	
		}
	},
	
	drawPanelGra: function(ctx, imgPath){	//負責畫上驗證面板圖案
		ctx.drawImage(imgPath,10,10,120,120);
	},
	
	drawPanelSym: function(ctx, id){	//描繪
		switch(id){
			case "A_symbol_panel":
				/* 描繪背景*/
				ctx.font = "italic bold 50px serif";
				ctx.fillStyle = "rgb(255,255,255)"; 
				ctx.fillRect(40,0,600,110);
				
				/* 第一張圖的字符*/
				ctx.fillStyle = "black"; 
				ctx.textAlign = "center";
				ctx.fillText(Panel_A.original_nume,70,40);
				ctx.fillText("   ___",50,40);
				ctx.fillText(Panel_A.original_denom,65,90);
				ctx.fillText("=",190,70);
				
				/* 第二張圖的字符*/
				ctx.fillText(Panel_A.original_nume,250,40);
				ctx.fillText(Panel_A.operator,290,40);
				ctx.fillText("(",310,40);
				ctx.fillText(Panel_A.extend,335,40);
				ctx.fillText(")",360,40);
				ctx.fillText("        ______",250,40);
				ctx.fillText(Panel_A.original_denom,250,90);
				ctx.fillText(Panel_A.operator,290,90);
				ctx.fillText("(",310,90);
				ctx.fillText(Panel_A.extend,330,90);
				ctx.fillText(")",360,90);
				ctx.fillText("=",420,70);				
				
				/* 第三張圖的字符*/
				ctx.fillText(Panel_A.result_nume,500,40);
				ctx.fillText("(",460,40);	
				ctx.fillText(")",540,40);
				ctx.fillText("       ____",460,40);
				ctx.fillText(Panel_A.result_denom,500,90);
				ctx.fillText("(",460,90);	
				ctx.fillText(")",540,90);
				ctx.fillText("=",420,70);				
				break;
			case "B_symbol_panel":
				/* 描繪背景*/
				ctx.font = "italic bold 50px serif";
				ctx.fillStyle = "rgb(255,255,255)"; 
				ctx.fillRect(40,0,600,110);
				
				/* 第一張圖的字符*/
				ctx.fillStyle = "black"; 
				ctx.textAlign = "center";
				ctx.fillText(Panel_B.original_nume,70,40);
				ctx.fillText("   ___",50,40);
				ctx.fillText(Panel_B.original_denom,65,90);
				ctx.fillText("=",190,70);
				
				/* 第二張圖的字符*/
				ctx.fillText(Panel_B.original_nume,250,40);
				ctx.fillText(Panel_B.operator,290,40);
				ctx.fillText("(",310,40);
				ctx.fillText(Panel_B.extend,335,40);
				ctx.fillText(")",360,40);
				ctx.fillText("        ______",250,40);
				ctx.fillText(Panel_B.original_denom,250,90);
				ctx.fillText(Panel_B.operator,290,90);
				ctx.fillText("(",310,90);
				ctx.fillText(Panel_B.extend,335,90);
				ctx.fillText(")",360,90);
				ctx.fillText("=",420,70);
				
				/* 第三張圖的字符*/
				ctx.fillText(Panel_B.result_nume,500,40);
				ctx.fillText("(",460,40);	
				ctx.fillText(")",540,40);
				ctx.fillText("       ____",460,40);				
				ctx.fillText("(",460,90);	
				ctx.fillText(Panel_B.result_denom,500,90);
				ctx.fillText(")",540,90);
				break;
			case "C_symbol_panel":
				/* 描繪背景*/
				ctx.font = "italic bold 50px serif";
				ctx.fillStyle = "rgb(255,255,255)"; 
				ctx.fillRect(40,0,600,110);
				
				/* 第一張圖的字符*/
				ctx.fillStyle = "black"; 
				ctx.textAlign = "center";
				ctx.fillText(Panel_C.original_nume,70,40);
				ctx.fillText("   ___",50,40);
				ctx.fillText(Panel_C.original_denom,65,90);
				ctx.fillText("=",190,70);
				
				/* 第二張圖的字符*/
				ctx.fillText(Panel_C.original_nume,250,40);
				ctx.fillText(Panel_C.operator,290,40);
				ctx.fillText("(",310,40);
				ctx.fillText(Panel_C.extend,335,40);
				ctx.fillText(")",360,40);
				ctx.fillText("        ______",250,40);
				ctx.fillText(Panel_C.original_denom,250,90);
				ctx.fillText(Panel_C.operator,290,90);
				ctx.fillText("(",310,90);
				ctx.fillText(Panel_C.extend,335,90);
				ctx.fillText(")",360,90);
				ctx.fillText("=",420,70);
				
				/* 第三張圖的字符*/
				ctx.fillText(Panel_C.result_nume,500,40);
				ctx.fillText("(",460,40);	
				ctx.fillText(")",540,40);	
				ctx.fillText("       ____",460,40);
				ctx.fillText(Panel_C.result_denom,500,90);	
				ctx.fillText("(",460,90);	
				ctx.fillText(")",540,90);					
				break;
		}			
	},
	
	drawErrorSym: function(ctx, denom, nume){
		ctx.clearRect(0, 0, 150, 75);
		ctx.font = "italic bold 40px serif";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		ctx.fillText(denom,70,70);	//分母
		ctx.fillText("    ___",55,30)
		ctx.fillText(nume,75,30);	//分子
	},
	
	drawCorrectSym: function(ctx, denom, nume){		
		ctx.clearRect(0, 0, 150, 75);				
		ctx.font = "italic bold 40px serif";
		ctx.fillStyle = "black";
		ctx.textAlign = "center";
		ctx.fillText(denom,70,70);	//分母
		ctx.fillText("    ___",55,30)
		ctx.fillText(nume,75,30);	//分子	
	},
	
	drawBlanktSym: function(ctx, denom, nume){		
		ctx.clearRect(0, 0, 150, 75);				
		ctx.font = "italic bold 40px serif";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText(denom,70,70);	//分母
		ctx.fillText("    ___",55,30)
		ctx.fillText(nume,75,30);	//分子	
	},
	
	errorReport: function(){	//配對錯誤時，給予視覺回饋
		var symArray = [block5, block6, block7, block8, block9, block10, block11, block12, block13];
		var graArray = [block14, block15, block16, block17, block18, block19, block20, block21, block22];
		
		for(var i =0; i<9; i++){
			if(symArray[i].nume != graArray[i].nume || symArray[i].denom != graArray[i].denom){
				this.drawErrorSym(eval(symArray[i].pen), symArray[i].denom, symArray[i].nume); //ctx, type, whole, denom, nume
			}else if(graArray[i].empty == "true"){
				this.drawBlanktSym(eval(symArray[i].pen), symArray[i].denom, symArray[i].nume);
			}
			else{
				this.drawCorrectSym(eval(symArray[i].pen), symArray[i].denom, symArray[i].nume); //ctx, type, whole, denom, nume
			}
		}
	},
	
	drawOriginalSym: function(ctx, denom, nume){	//描繪圖卡初始值
		ctx.textAlign = "center";
		ctx.fillStyle = "blue"; 
		ctx.font = "italic bold 30px serif";
		ctx.fillText(denom,25,50);	//分母
		ctx.fillText("    ___",20,20)
		ctx.fillText(nume,30,20);	//分子
	},
	
	drawNewMemberSym: function(ctx, denom, nume){
		ctx.textAlign = "center";
		ctx.fillStyle = "black"; 
		ctx.font = "italic bold 40px serif";
		ctx.fillText(denom,40,70);	//分母
		ctx.fillText("    ___",30,30)
		ctx.fillText(nume,45,30);	//分子
	},
	
	drawCompleteMemberSym: function(ctx, denom, nume){
		ctx.clearRect(0, 0, 150, 75);
		ctx.textAlign = "center";
		ctx.fillStyle = "black"; 
		ctx.font = "italic bold 40px serif";
		ctx.fillText(denom,70,70);	//分母
		ctx.fillText("    ___",55,30)
		ctx.fillText(nume,75,30);	//分子
	},
		
	drawCutGra: function(ctx, original_nume, original_denom, nume, denom, extend, operator){	//描繪擴、約分圖卡
		var pic = new Image(), d, n;
		switch(operator){
			case "×":
				d = denom * extend;
				n = nume * extend;
				break;
			case "÷":
				d = denom / extend;
				n = nume / extend;
				break;
		}
		var imgPath = "equivalence_pic/cut_pro/c"+original_denom+"_"+original_nume+"/c"+d+"_"+n+".png";
		pic.src = imgPath;		
		pic.onload = function(){
			ctx.drawImage(pic,10,10,120,120);
		}		
	},
	
	drawResultGra: function(ctx, original_nume, original_denom, nume, denom, extend, operator){	//描繪擴、約分後的圖卡
		var pic = new Image();		
		var imgPath = "equivalence_pic/r_proper/r"+original_denom+"_"+original_nume+"/r"+denom+"_"+nume+".png";
		pic.src = imgPath;
		pic.onload = function(){
			ctx.drawImage(pic,10,10,120,120);
		}
	},
	
	drawChangeGra: function(ctx, original_denom, original_nume, denom, nume){	//描繪進行擴、約分後的圖
		var pic = new Image();		
		var imgPath = "equivalence_pic/r_proper/r"+original_denom+"_"+original_nume+"/r"+denom+"_"+nume+".png";
		pic.src = imgPath;
		pic.onload = function(){
			ctx.drawImage(pic,10,20,150,150);
		}		
	},
	
	drawExtendSym: function(ctx, denom, nume, ope, extendValue,block){		//描繪中央區域擴約分的字符表示
		switch(block.id){
			case "blank_1":
				if(ope == "÷"){
					$("#extend1").html("約分");
					ctx.textAlign = "center";
					ctx.font = "italic bold 30px serif";
					ctx.fillText(nume,40,22);
					ctx.fillText(ope,70,22);
					ctx.fillText(extendValue,100,22);
					ctx.fillText("        ______",40,25);
					ctx.fillText(denom,40,55);
					ctx.fillText(ope,70,55);
					ctx.fillText(extendValue,100,55);
				}
				if(ope == "×"){
					$("#extend1").html("擴分");
					ctx.textAlign = "center";
					ctx.font = "italic bold 30px serif";
					ctx.fillText(nume,40,22);
					ctx.fillText(ope,70,22);
					ctx.fillText(extendValue,100,22);
					ctx.fillText("        ______",40,25);
					ctx.fillText(denom,40,55);
					ctx.fillText(ope,70,55);
					ctx.fillText(extendValue,100,55);
				}
				break;
			case "blank_2":
				if(ope == "÷"){
					$("#extend2").html("約分");
					ctx.textAlign = "center";
					ctx.font = "italic bold 30px serif";
					ctx.fillText(nume,40,22);
					ctx.fillText(ope,70,22);
					ctx.fillText(extendValue,100,22);
					ctx.fillText("        ______",40,25);
					ctx.fillText(denom,40,55);
					ctx.fillText(ope,70,55);
					ctx.fillText(extendValue,100,55);
				}
				if(ope == "×"){
					$("#extend2").html("擴分");
					ctx.textAlign = "center";
					ctx.font = "italic bold 30px serif";
					ctx.fillText(nume,40,22);
					ctx.fillText(ope,70,22);
					ctx.fillText(extendValue,100,22);
					ctx.fillText("        ______",40,25);
					ctx.fillText(denom,40,55);
					ctx.fillText(ope,70,55);
					ctx.fillText(extendValue,100,55);
				}
				break;
			case "blank_3":
				if(ope == "÷"){
					$("#extend3").html("約分");
					ctx.textAlign = "center";
					ctx.font = "italic bold 30px serif";
					ctx.fillText(nume,40,22);
					ctx.fillText(ope,70,22);
					ctx.fillText(extendValue,100,22);
					ctx.fillText("        ______",40,25);
					ctx.fillText(denom,40,55);
					ctx.fillText(ope,70,55);
					ctx.fillText(extendValue,100,55);
				}
				if(ope == "×"){
					$("#extend3").html("擴分");
					ctx.textAlign = "center";
					ctx.font = "italic bold 30px serif";
					ctx.fillText(nume,40,22);
					ctx.fillText(ope,70,22);
					ctx.fillText(extendValue,100,22);
					ctx.fillText("        ______",40,25);
					ctx.fillText(denom,40,55);
					ctx.fillText(ope,70,55);
					ctx.fillText(extendValue,100,55);
				}
				break;
		}
	},
	
	recoverGraSym: function(){
		var symArray = [block5, block6, block7, block8, block9, block10, block11, block12, block13];
		var graArray = [block14, block15, block16, block17, block18, block19, block20, block21, block22];
		
		for(var i=0; i<9; i++){
			this.drawCorrectSym(eval(symArray[i].pen), symArray[i].denom, symArray[i].nume);
			this.drawGra(eval(graArray[i].pen), graArray[i].src);
			graArray[i].empty = "false", graArray[i].corresponding = true, symArray[i].corresponding = true;			
		}
	},	
	
	clearOriExtendPic: function(blockSym, blockGra){	//清除中央區域的初始值及擴約分的圖
		this.clearDraw(eval(blockSym.showOriFra), 100, 60);	//清除圖卡初始值
		this.clearDraw(eval(blockGra.showOriFra), 180, 180);
		this.clearDraw(eval(blockSym.showExtendSym), 150, 60);	//清除圖卡擴充值
		this.clearDraw(eval(blockGra.showExtendGra), 180, 180);
	},
	
	clearDraw: function(ctx, width, height){
		ctx.clearRect(0, 0, width, height);
	}	
}
