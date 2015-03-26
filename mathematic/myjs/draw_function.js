/**
 * @author wei
 */

function drawGra(){
	
}

drawGra.prototype = {
	initialMemberGra: function(){	//初始化每位成員的圖像
		var r = [];
		for(var i=0; i<3; i++){
			r.push(i);
		}
		for(var i=0; i<3; i++){
			var temp;
			var index = Math.floor(Math.random()*3);
			temp = r[i];
			r[i]=r[index];
			r[index] = temp;
		}		
		var pic1 = [image1, image2, image3];	//真分數圖檔
		var pic2 = [image4, image5, image6];	//假分數圖檔
		var pic3 = [image7, image8, image9];	//帶分數圖檔
		window.onload = function(){			
			block10.nume = pic_symbol.nume[5], block10.denom = pic_symbol.denom[5], block10.whole = pic_symbol.whole[5], block10.src =eval("image"+6);	//給予分子分母數值
			block11.nume = pic_symbol.nume[8], block11.denom = pic_symbol.denom[8], block11.whole = pic_symbol.whole[8], block11.src =eval("image"+9);
			block12.nume = pic_symbol.nume[1], block12.denom = pic_symbol.denom[1], block12.whole = pic_symbol.whole[1], block12.src =eval("image"+2);
			ctx11.drawImage(block10.src, 5,55,195,95);
			ctx12.drawImage(block11.src, 5,55,195,95);
			ctx13.drawImage(block12.src, 50,55,95,95);			
			
			block13.nume = pic_symbol.nume[3], block13.denom = pic_symbol.denom[3], block13.whole = pic_symbol.whole[3],block13.src =eval("image"+4);	//給予分子分母數值
			block14.nume = pic_symbol.nume[6], block14.denom = pic_symbol.denom[6], block14.whole = pic_symbol.whole[6],block14.src =eval("image"+7);
			block15.nume = pic_symbol.nume[2], block15.denom = pic_symbol.denom[2], block15.whole = pic_symbol.whole[2], block15.src =eval("image"+3);
			ctx14.drawImage(block13.src,5,55,195,95);
			ctx15.drawImage(block14.src, 5,55,195,95);
			ctx16.drawImage(block15.src, 50,55,95,95);			
			
			block16.nume = pic_symbol.nume[4], block16.denom = pic_symbol.denom[4], block16.whole = pic_symbol.whole[4],block16.src = eval("image"+5);	//給予分子分母數值
			block17.nume = pic_symbol.nume[7], block17.denom = pic_symbol.denom[7], block17.whole = pic_symbol.whole[7],block17.src =  eval("image"+8);
			block18.nume = pic_symbol.nume[0], block18.denom = pic_symbol.denom[0], block18.whole = pic_symbol.whole[0], block18.src =  eval("image"+1);
			ctx17.drawImage(block16.src,5,55,195,95);
			ctx18.drawImage(block17.src, 5,55,195,95);
			ctx19.drawImage(block18.src, 50,55,95,95);
		}
	},
	initialMemberSym: function(){		//初始化每位成員的字符	
	
	/*** Member A  */	
	//ctx2.fillStyle = "rgba(0,255,255,0.5)"; 
	//ctx2.fillRect(40,0,80,90);
	ctx2.fillStyle = "black"; 
	ctx2.font = "italic bold 40px serif";
	ctx2.textAlign = "center";
	ctx2.fillText(1,30,50);
	ctx2.fillText(mixed.denom[total[6]],70,70);	//分母
	ctx2.fillText("    ___",55,30)
	ctx2.fillText(mixed.nume[total[6]],75,30);	//分子
	
	
	//ctx3.fillStyle = "rgba(0,255,255,0.5)"; 
	//ctx3.fillRect(40,0,80,90);
	ctx3.fillStyle = "black"; 
	ctx3.font = "italic bold 40px serif";
	ctx3.textAlign = "center";
	ctx3.fillText(proper.denom[total[0]],70,70);	//分母
	ctx3.fillText("    ___",55,30)
	ctx3.fillText(proper.nume[total[0]],75,30);	//分子
	
	
	//ctx4.fillStyle = "rgba(0,255,255,0.5)"; 
	//ctx4.fillRect(40,0,80,90);
	ctx4.fillStyle = "black"; 
	ctx4.font = "italic bold 40px serif";
	ctx4.textAlign = "center";
	ctx4.fillText(improper.denom[total[3]],70,70);	//分母
	ctx4.fillText("    ___",55,30)
	ctx4.fillText(improper.nume[total[3]],75,30);	//分子
	
	
	/*** Member B  */
	//ctx5.fillStyle = "rgba(0,255,255,0.5)"; 
	//ctx5.fillRect(40,0,80,90);
	ctx5.fillStyle = "black"; 
	ctx5.font = "italic bold 40px serif";
	ctx5.textAlign = "center";
	ctx5.fillText(1,30,50);
	ctx5.fillText(mixed.denom[total[7]],70,70);	//分母
	ctx5.fillText("    ___",55,30)
	ctx5.fillText(mixed.nume[total[7]],75,30);	//分子
	
	
	//ctx6.fillStyle = "rgba(0,255,255,0.5)"; 
	//ctx6.fillRect(40,0,80,90);
	ctx6.fillStyle = "black"; 
	ctx6.font = "italic bold 40px serif";
	ctx6.textAlign = "center";
	ctx6.fillText(proper.denom[total[1]],70,70);	//分母
	ctx6.fillText("    ___",55,30)
	ctx6.fillText(proper.nume[total[1]],75,30);	//分子
	
	
	//ctx7.fillStyle = "rgba(0,255,255,0.5)"; 
	//ctx7.fillRect(40,0,80,90);
	ctx7.fillStyle = "black"; 
	ctx7.font = "italic bold 40px serif";
	ctx7.textAlign = "center";
	ctx7.fillText(improper.denom[total[4]],70,70);	//分母
	ctx7.fillText("    ___",55,30)
	ctx7.fillText(improper.nume[total[4]],75,30);	//分子
	
	
	/*** Member C  */
	//ctx8.fillStyle = "rgba(0,255,255,0.5)"; 
	//ctx8.fillRect(40,0,80,90);
	ctx8.fillStyle = "black"; 
	ctx8.font = "italic bold 40px serif";
	ctx8.textAlign = "center";
	ctx8.fillText(1,30,50);
	ctx8.fillText(mixed.denom[total[8]],70,70);	//分母
	ctx8.fillText("    ___",55,30)
	ctx8.fillText(mixed.nume[total[8]],75,30);	//分子
	
	
	//ctx9.fillStyle = "rgba(0,255,255,0.5)"; 
	//ctx9.fillRect(40,0,80,90);
	ctx9.fillStyle = "black"; 
	ctx9.font = "italic bold 40px serif";
	ctx9.textAlign = "center";
	ctx9.fillText(proper.denom[total[2]],70,70);	//分母
	ctx9.fillText("    ___",55,30)
	ctx9.fillText(proper.nume[total[2]],75,30);	//分子
	
	
	//ctx10.fillStyle = "rgba(0,255,255,0.5)"; 
	//ctx10.fillRect(40,0,80,90);
	ctx10.fillStyle = "black"; 
	ctx10.font = "italic bold 40px serif";
	ctx10.textAlign = "center";
	ctx10.fillText(improper.denom[total[5]],70,70);	//分母
	ctx10.fillText("    ___",55,30)
	ctx10.fillText(improper.nume[total[5]],75,30);	//分子
	
	},	
	
	drawRubberBand: function(ctx, start_x, start_y, destination_x, destination_y, orien){
		if(orien =="left"){
			ctx.strokeStyle = "rgba(240,0,0,0.4)";
		}
		if(orien =="bottom"){
			ctx.strokeStyle = "rgba(0,0,240,0.4)";
		}
		if(orien =="right"){
			ctx.strokeStyle = "rgba(0,240,0,0.4)";
		}
		ctx.beginPath();
		ctx.lineWidth = 80;
		ctx.moveTo(start_x,start_y);
		ctx.lineTo(destination_x, destination_y);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
	},
	drawGra: function(ctx, imgPath, type){	//描繪個人面板上圖像
		
		if(type == "proper"){
			ctx.drawImage(imgPath,50,55,95,95);
		}
		if(type == "improper"){
			ctx.drawImage(imgPath,5,55,195,95);
		}
		if(type == "mix"){
			ctx.drawImage(imgPath,5,55,195,95);
		}			
	},
	
	drawSymbol: function(ctx, type, whole, denom, nume){	//描繪個人面板上字符
		switch(type){
			case "proper":
				//ctx.fillStyle = "rgba(0,255,255,0.5)"; 
				//ctx.fillRect(40,0,80,90);
				ctx.fillStyle = "black"; 
				ctx.font = "italic bold 40px serif";
				ctx.textAlign = "center";
				ctx.fillText(denom,70,70);	//分母
				ctx.fillText("    ___",55,30)
				ctx.fillText(nume,75,30);	//分子
				break;
			case "improper":
				//ctx.fillStyle = "rgba(0,255,255,0.5)"; 
				//ctx.fillRect(40,0,80,90);
				ctx.fillStyle = "black"; 
				ctx.font = "italic bold 40px serif";
				ctx.textAlign = "center";
				ctx.fillText(denom,70,70);	//分母
				ctx.fillText("    ___",55,30)
				ctx.fillText(nume,75,30);	//分子
				break;
			case "mix":
				//ctx.fillStyle = "rgba(0,255,255,0.5)"; 
				//ctx.fillRect(30,0,100,90);
				ctx.fillStyle = "black"; 
				ctx.font = "italic bold 40px serif";
				ctx.textAlign = "center";
				ctx.fillText(whole,30,50);
				ctx.fillText(denom,70,70);	//分母
				ctx.fillText("    ___",55,30)
				ctx.fillText(nume,75,30);	//分子
				break;
		}
	},
	
	drawCentralSym :function(ctx, type, whole, denom, nume){
		switch(type){
			case "proper":			
				ctx.font = "italic bold 40px serif";
				ctx.textAlign = "center";
				ctx.fillText(denom,45,75);	//分母
				ctx.fillText("    ___",30,35)
				ctx.fillText(nume,50,35);	//分子
				break;
			case "improper":				
				ctx.font = "italic bold 40px serif";
				ctx.textAlign = "center";
				ctx.fillText(denom,45,75);	//分母
				ctx.fillText("    ___",30,35)
				ctx.fillText(nume,50,35);	//分子
				break;
			case "mix":
				ctx.font = "italic bold 40px serif";
				ctx.textAlign = "center";
				ctx.fillText(whole,15,55);
				ctx.fillText(denom,55,75);	//分母
				ctx.fillText("    ___",40,35)
				ctx.fillText(nume,60,35);	//分子
				break;
		}
	},
	
	drawCentralGra: function(ctx, fraction_kind, imgPath){
	
		switch(fraction_kind){
			case "proper":			
				ctx.drawImage(imgPath,10,20,150,150);
				break;
			case "improper":				
				ctx.drawImage(imgPath,10,20,150,150);
				break;
			case "mix":
				ctx.drawImage(imgPath,10,20,150,150);
				break;
		}
						
	},
	
	drawErrorSym: function(ctx, type, whole, denom, nume){
		switch(type){
			case "proper":			
				ctx.font = "italic bold 40px serif";
				ctx.fillStyle = "red";
				ctx.textAlign = "center";
				ctx.fillText(denom,70,70);	//分母
				ctx.fillText("    ___",55,30)
				ctx.fillText(nume,75,30);	//分子
				break;
			case "improper":				
				ctx.font = "italic bold 40px serif";
				ctx.fillStyle = "red";
				ctx.textAlign = "center";
				ctx.fillText(denom,70,70);	//分母
				ctx.fillText("    ___",55,30)
				ctx.fillText(nume,75,30);	//分子
				break;
			case "mix":
				ctx.font = "italic bold 40px serif";
				ctx.fillStyle = "red";
				ctx.textAlign = "center";
				ctx.fillText(whole,30,50);
				ctx.fillText(denom,70,70);	//分母
				ctx.fillText("    ___",55,30)
				ctx.fillText(nume,75,30);	//分子
				break;
		}
	},
	
	drawCorrectSym: function(ctx, type, whole, denom, nume){
		switch(type){
			case "proper":			
				ctx.font = "italic bold 40px serif";
				ctx.fillStyle = "black";
				ctx.textAlign = "center";
				ctx.fillText(denom,70,70);	//分母
				ctx.fillText("    ___",55,30)
				ctx.fillText(nume,75,30);	//分子
				break;
			case "improper":				
				ctx.font = "italic bold 40px serif";
				ctx.fillStyle = "black";
				ctx.textAlign = "center";
				ctx.fillText(denom,70,70);	//分母
				ctx.fillText("    ___",55,30)
				ctx.fillText(nume,75,30);	//分子
				break;
			case "mix":
				ctx.font = "italic bold 40px serif";
				ctx.fillStyle = "black";
				ctx.textAlign = "center";
				ctx.fillText(whole,30,50);
				ctx.fillText(denom,70,70);	//分母
				ctx.fillText("    ___",55,30)
				ctx.fillText(nume,75,30);	//分子
				break;
		}
	},
	
	errorReport: function(){	//配對錯誤時，給予視覺回饋
		var symArray = [block1, block2, block3, block4, block5, block6, block7, block8, block9];
		var graArray = [block10, block11, block12, block13, block14, block15, block16, block17, block18];
		
		for(var i =0; i<9; i++){
			if(symArray[i].whole != graArray[i].whole || symArray[i].nume != graArray[i].nume || symArray[i].denom != graArray[i].denom){
				this.drawErrorSym(eval(symArray[i].pen), symArray[i].type, symArray[i].whole, symArray[i].denom, symArray[i].nume); //ctx, type, whole, denom, nume
			}else{
				this.drawCorrectSym(eval(symArray[i].pen), symArray[i].type, symArray[i].whole, symArray[i].denom, symArray[i].nume); //ctx, type, whole, denom, nume
			}
		}
	},
	
	drawChangePic: function(panel, ctx, imgPath, type){	//畫出交換面板上的圖像
		switch(panel){
			case "A_whether_change":
				if(type == "proper"){
					ctx.drawImage(imgPath,85,35,95,95);
				}else{
					ctx.drawImage(imgPath,40,35,195,95);
				}				
				break;
			case "B_whether_change":
				if(type == "proper"){
					ctx.drawImage(imgPath,85,35,95,95);
				}else{
					ctx.drawImage(imgPath,40,35,195,95);
				}
				break;
			case "C_whether_change":
				if(type == "proper"){
					ctx.drawImage(imgPath,85,35,95,95);
				}else{
					ctx.drawImage(imgPath,40,35,195,95);
				}
				break;
		}
	},
	
	clearDraw: function(ctx, width, height){
		ctx.clearRect(0, 0, width, height);
	}
}
