/**
 * @author wei
 */
function draw(){
	
}

draw.prototype = {
	initialCentralGra: function(ctx ,imgPath){
		//imgPath.onload = function(){
			ctx.drawImage(imgPath, 10,20,150,150);
		//}
	},
	
	initialCentralSym: function(ctx, denom, nume){
		ctx.font = "italic bold 40px serif";
		ctx.textAlign = "center";
		ctx.fillText(denom,40,75);	//分母
		ctx.fillText("    ___",25,35)
		ctx.fillText(nume,45,35);	//分子
	},
	
	initialMemberGra: function(img1, img2, img3, img4, img5, img6, img7, img8, img9){
		window.onload = function(){					
			ctx18.drawImage(img1,10,20,150,150);
			ctx19.drawImage(img2,10,20,150,150);
			ctx20.drawImage(img3,10,20,150,150);					
			ctx21.drawImage(img4,10,20,150,150);
			ctx22.drawImage(img5,10,20,150,150);
			ctx23.drawImage(img6,10,20,150,150);				
			ctx24.drawImage(img7,10,20,150,150);
			ctx25.drawImage(img8,10,20,150,150);
			ctx26.drawImage(img9,10,20,150,150);			
		}		
	},
	
	initialMemberSym: function(member_A, member_B, member_C){
		//ctx9.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx9.fillRect(40,0,80,90);
		ctx9.textAlign = "center";
		ctx9.fillStyle = "black"; 
		ctx9.font = "italic bold 40px serif";
		ctx9.fillText(member_A.denom[0],70,70);	//分母
		ctx9.fillText("    ___",55,30)
		ctx9.fillText(member_A.nume[0],75,30);	//分子
		
		//ctx10.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx10.fillRect(40,0,80,90);
		ctx10.textAlign = "center";
		ctx10.fillStyle = "black"; 
		ctx10.font = "italic bold 40px serif";
		ctx10.fillText(member_A.denom[1],70,70);	//分母
		ctx10.fillText("    ___",55,30)
		ctx10.fillText(member_A.nume[1],75,30);	//分子
		
		//ctx11.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx11.fillRect(40,0,80,90);
		ctx11.textAlign = "center";
		ctx11.fillStyle = "black"; 
		ctx11.font = "italic bold 40px serif";
		ctx11.fillText(member_A.denom[2],70,70);	//分母
		ctx11.fillText("    ___",55,30)
		ctx11.fillText(member_A.nume[2],75,30);	//分子
		
		//ctx12.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx12.fillRect(40,0,80,90);
		ctx12.textAlign = "center";
		ctx12.fillStyle = "black"; 
		ctx12.font = "italic bold 40px serif";
		ctx12.fillText(member_B.denom[0],70,70);	//分母
		ctx12.fillText("    ___",55,30)
		ctx12.fillText(member_B.nume[0],75,30);	//分子
		
		//ctx13.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx13.fillRect(40,0,80,90);
		ctx13.textAlign = "center";
		ctx13.fillStyle = "black"; 
		ctx13.font = "italic bold 40px serif";
		ctx13.fillText(member_B.denom[1],70,70);	//分母
		ctx13.fillText("    ___",55,30)
		ctx13.fillText(member_B.nume[1],75,30);	//分子
		
		//ctx14.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx14.fillRect(40,0,80,90);
		ctx14.textAlign = "center";
		ctx14.fillStyle = "black"; 
		ctx14.font = "italic bold 40px serif";
		ctx14.fillText(member_B.denom[2],70,70);	//分母
		ctx14.fillText("    ___",55,30)
		ctx14.fillText(member_B.nume[2],75,30);	//分子
		
		//ctx15.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx15.fillRect(40,0,80,90);
		ctx15.textAlign = "center";
		ctx15.fillStyle = "black"; 
		ctx15.font = "italic bold 40px serif";
		ctx15.fillText(member_C.denom[0],70,70);	//分母
		ctx15.fillText("    ___",55,30)
		ctx15.fillText(member_C.nume[0],75,30);	//分子
		
		//ctx16.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx16.fillRect(40,0,80,90);
		ctx16.textAlign = "center";
		ctx16.fillStyle = "black"; 
		ctx16.font = "italic bold 40px serif";
		ctx16.fillText(member_C.denom[1],70,70);	//分母
		ctx16.fillText("    ___",55,30)
		ctx16.fillText(member_C.nume[1],75,30);	//分子
		
		//ctx17.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx17.fillRect(40,0,80,90);
		ctx17.textAlign = "center";
		ctx17.fillStyle = "black"; 
		ctx17.font = "italic bold 40px serif";
		ctx17.fillText(member_C.denom[2],70,70);	//分母
		ctx17.fillText("    ___",55,30)
		ctx17.fillText(member_C.nume[2],75,30);	//分子
	},
	
	drawOrder: function(order){
		switch(order){
			case "decresing":
				for(var i=6;i<=8; i++){	//第二題的排序
					eval("ctx"+i+".clearRect(0,0,50,50)");
					eval("ctx"+i+".font ='italic bold 50px serif'");
					eval("ctx"+i+".fillText('>',15,40)");
				}
				for(var i=55;i<=56; i++){	//第一題的排序
					eval("ctx"+i+".clearRect(0,0,50,50)");
					eval("ctx"+i+".font ='italic bold 50px serif'");
					eval("ctx"+i+".fillText('<',15,40)");
				}	
				break;
			case "incresing":
				for(var i=6;i<=8; i++){	//第二題的排序
					eval("ctx"+i+".clearRect(0,0,50,50)");
					eval("ctx"+i+".font ='italic bold 50px serif'");
					eval("ctx"+i+".fillText('<',15,40)");
				}
				for(var i=55;i<=56; i++){	//第一題的排序
					eval("ctx"+i+".clearRect(0,0,50,50)");
					eval("ctx"+i+".font ='italic bold 50px serif'");
					eval("ctx"+i+".fillText('>',15,40)");
				}
				break;
		}
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
	
	drawPanelGra: function(ctx, imgPath){	//負責畫上驗證面板圖案
		ctx.drawImage(imgPath,10,10,120,120);
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
		var imgPath = "compare_pic/cut_pro/c"+original_denom+"_"+original_nume+"/c"+d+"_"+n+".png";
		pic.src = imgPath;		
		pic.onload = function(){
			ctx.drawImage(pic,10,10,120,120);
		}		
	},
	
	drawResultGra: function(ctx, original_nume, original_denom, nume, denom, extend, operator){	//描繪擴、約分後的圖卡
		var pic = new Image();		
		var imgPath = "compare_pic/r_proper/r"+original_denom+"_"+original_nume+"/r"+denom+"_"+nume+".png";
		pic.src = imgPath;
		pic.onload = function(){
			ctx.drawImage(pic,10,10,120,120);
		}
	},
	
	drawChangeGra: function(ctx, original_denom, original_nume, denom, nume){	//描繪進行擴、約分後的圖
		var pic = new Image();		
		var imgPath = "compare_pic/r_proper/r"+original_denom+"_"+original_nume+"/r"+denom+"_"+nume+".png";
		pic.src = imgPath;
		pic.onload = function(){
			ctx.drawImage(pic,10,20,150,150);
		}		
	},
	
	drawGra: function(ctx, imgPath){	//繪製圖形
		/*var path = new Image();
		var fraction_size;
		switch(fraction_kind.slice(0,5)){
			case "prope":			
				path.src = "collect_pic/proper/"+imgPath+".png";
				fraction_size = "prope";
				break;
			case "impro":				
				path.src = "collect_pic/improper/"+imgPath+".png";
				fraction_size = "impro";
				break;
			case "mixed":
				path.src = "collect_pic/mixed/"+imgPath+".png";
				fraction_size = "mixed";
				break;
		}*/
		ctx.drawImage(imgPath,10,20,150,150);				
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
		var symArray = [block12, block13, block14, block15, block16, block17, block18, block19, block20];
		var graArray = [block21, block22, block23, block24, block25, block26, block27, block28, block29];
		
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
	
	recoverGraSym: function(){
		var symArray = [block12, block13, block14, block15, block16, block17, block18, block19, block20];
		var graArray = [block21, block22, block23, block24, block25, block26, block27, block28, block29];
		
		for(var i=0; i<9; i++){
			this.drawCorrectSym(eval(symArray[i].pen), symArray[i].denom, symArray[i].nume);
			this.drawGra(eval(graArray[i].pen), graArray[i].src);
			graArray[i].empty = "false", graArray[i].corresponding = true, symArray[i].corresponding = true;			
		}
	},
	
	draSym: function(ctx, denom, nume){	//繪製字符(個人面板)
		//ctx.fillStyle = "rgba(0,255,255,0.5)"; 
		//ctx.fillRect(40,0,80,90);
		ctx.textAlign = "center";
		ctx.fillStyle = "black"; 
		ctx.font = "italic bold 40px serif";
		ctx.fillText(denom,70,70);	//分母
		ctx.fillText("    ___",55,30)
		ctx.fillText(nume,75,30);	//分子
	},
	
	drawCentralSym: function(ctx, denom, nume){
		ctx.textAlign = "center";
		ctx.fillStyle = "black"; 
		ctx.font = "italic bold 40px serif";
		ctx.fillText(denom,40,70);	//分母
		ctx.fillText("    ___",30,30)
		ctx.fillText(nume,45,30);	//分子
	},
	
	clearDraw: function(ctx, width, height){
		ctx.clearRect(0, 0, width, height);
	}
}
