/**
 * @author wei
 */

function rand_number(min, max, amount ,array){
	var total = [];
	for(var i=0; i<max; i++){
		total.push(i+min);
	}
	for(var i=0; i<max;i++){
		var temp = total[i];
		var index = Math.ceil(Math.random() *(max-1));
		total[i] = total[index];
		total[index] = temp;
	}	
	for(var i=0;i<amount;i++){
		array[i] = total[i];		
	}
}

function initial(){
	
	var r = [];
	rand_number(0,3,3,r);	//min, max, amount ,array
	member_Sym.A_Sym.nume[0] = member_B.nume[ r[1] ],  member_Sym.A_Sym.denom[0] = member_B.denom[ r[1] ];
	member_Sym.A_Sym.nume[1] = member_B.nume[ r[2] ],  member_Sym.A_Sym.denom[1] = member_B.denom[ r[2] ];
	member_Sym.A_Sym.nume[2] = member_C.nume[ r[0] ],  member_Sym.A_Sym.denom[2] = member_C.denom[ r[0] ];
	member_Sym.A_Sym.original_nume[0] = member_B.original_nume[ r[1] ], member_Sym.A_Sym.original_denom[0] = member_B.original_denom[ r[1] ];
	member_Sym.A_Sym.original_nume[1] = member_B.original_nume[ r[2] ], member_Sym.A_Sym.original_denom[1] = member_B.original_denom[ r[2] ];
	member_Sym.A_Sym.original_nume[2] = member_C.original_nume[ r[0] ], member_Sym.A_Sym.original_denom[2] = member_C.original_denom[ r[0] ];
	member_Sym.A_Sym.value[0] = member_Sym.A_Sym.nume[0] / member_Sym.A_Sym.denom[0];
	member_Sym.A_Sym.value[1] = member_Sym.A_Sym.nume[1] / member_Sym.A_Sym.denom[1];
	member_Sym.A_Sym.value[2] = member_Sym.A_Sym.nume[2] / member_Sym.A_Sym.denom[2];
			
	member_Sym.B_Sym.nume[0] = member_C.nume[ r[1] ],  member_Sym.B_Sym.denom[0] = member_C.denom[ r[1] ];
	member_Sym.B_Sym.nume[1] = member_C.nume[ r[2] ],  member_Sym.B_Sym.denom[1] = member_C.denom[ r[2] ];
	member_Sym.B_Sym.nume[2] = member_A.nume[ r[0] ],  member_Sym.B_Sym.denom[2] = member_A.denom[ r[0] ];
	member_Sym.B_Sym.original_nume[0] = member_C.original_nume[ r[1] ], member_Sym.B_Sym.original_denom[0] = member_C.original_denom[ r[1] ];
	member_Sym.B_Sym.original_nume[1] = member_C.original_nume[ r[2] ], member_Sym.B_Sym.original_denom[1] = member_C.original_denom[ r[2] ];
	member_Sym.B_Sym.original_nume[2] = member_A.original_nume[ r[0] ], member_Sym.B_Sym.original_denom[2] = member_A.original_denom[ r[0] ];
	member_Sym.B_Sym.value[0] = member_Sym.B_Sym.nume[0] / member_Sym.B_Sym.denom[0];
	member_Sym.B_Sym.value[1] = member_Sym.B_Sym.nume[1] / member_Sym.B_Sym.denom[1];
	member_Sym.B_Sym.value[2] = member_Sym.B_Sym.nume[2] / member_Sym.B_Sym.denom[2];
			
	member_Sym.C_Sym.nume[0] = member_A.nume[ r[1] ],  member_Sym.C_Sym.denom[0] = member_A.denom[ r[1] ];
	member_Sym.C_Sym.nume[1] = member_A.nume[ r[2] ],  member_Sym.C_Sym.denom[1] = member_A.denom[ r[2] ];
	member_Sym.C_Sym.nume[2] = member_B.nume[ r[0] ],  member_Sym.C_Sym.denom[2] = member_B.denom[ r[0] ];
	member_Sym.C_Sym.original_nume[0] = member_A.original_nume[ r[1] ], member_Sym.C_Sym.original_denom[0] = member_A.original_denom[ r[1] ];
	member_Sym.C_Sym.original_nume[1] = member_A.original_nume[ r[2] ], member_Sym.C_Sym.original_denom[1] = member_A.original_denom[ r[2] ];
	member_Sym.C_Sym.original_nume[2] = member_B.original_nume[ r[0] ], member_Sym.C_Sym.original_denom[2] = member_B.original_denom[ r[0] ];
	member_Sym.C_Sym.value[0] = member_Sym.C_Sym.nume[0] / member_Sym.C_Sym.denom[0];
	member_Sym.C_Sym.value[1] = member_Sym.C_Sym.nume[1] / member_Sym.C_Sym.denom[1];
	member_Sym.C_Sym.value[2] = member_Sym.C_Sym.nume[2] / member_Sym.C_Sym.denom[2];
	
	for(var i=7; i<=9; i++){	//指定member_A字符空格內的值
		eval("block"+i+".denom=member_Sym.A_Sym.denom["+(i-7)+"]");
		eval("block"+i+".nume=member_Sym.A_Sym.nume["+(i-7)+"]");
		eval("block"+i+".original_denom=member_Sym.A_Sym.original_denom["+(i-7)+"]");
		eval("block"+i+".original_nume=member_Sym.A_Sym.original_nume["+(i-7)+"]");
		eval("block"+i+".value=member_Sym.A_Sym.nume["+(i-7)+"] / "+"member_Sym.A_Sym.denom["+(i-7)+"]");
		eval("block"+i+".first_denom=member_Sym.A_Sym.denom["+(i-7)+"]");
		eval("block"+i+".first_nume=member_Sym.A_Sym.nume["+(i-7)+"]");
		eval("block"+i+".blockName='A_s"+(i-7)+"'");	
	}
	for(var i=10; i<=12; i++){	//指定member_B字符空格內的值
		eval("block"+i+".denom=member_Sym.B_Sym.denom["+(i-10)+"]");
		eval("block"+i+".nume=member_Sym.B_Sym.nume["+(i-10)+"]");
		eval("block"+i+".original_denom=member_Sym.B_Sym.original_denom["+(i-10)+"]");
		eval("block"+i+".original_nume=member_Sym.B_Sym.original_nume["+(i-10)+"]");
		eval("block"+i+".value=member_Sym.B_Sym.nume["+(i-10)+"] / "+"member_Sym.B_Sym.denom["+(i-10)+"]");
		eval("block"+i+".first_denom=member_Sym.B_Sym.denom["+(i-10)+"]");
		eval("block"+i+".first_nume=member_Sym.B_Sym.nume["+(i-10)+"]");
		eval("block"+i+".blockName='B_s"+(i-10)+"'");
	}
	for(var i=13; i<=15; i++){	//指定member_C字符空格內的值
		eval("block"+i+".denom=member_Sym.C_Sym.denom["+(i-13)+"]");
		eval("block"+i+".nume=member_Sym.C_Sym.nume["+(i-13)+"]");
		eval("block"+i+".original_denom=member_Sym.C_Sym.original_denom["+(i-13)+"]");
		eval("block"+i+".original_nume=member_Sym.C_Sym.original_nume["+(i-13)+"]");
		eval("block"+i+".value=member_Sym.C_Sym.nume["+(i-13)+"] / "+"member_Sym.C_Sym.denom["+(i-13)+"]");
		eval("block"+i+".first_denom=member_Sym.C_Sym.denom["+(i-13)+"]");
		eval("block"+i+".first_nume=member_Sym.C_Sym.nume["+(i-13)+"]");
		eval("block"+i+".blockName='C_s"+(i-13)+"'");	
	}
	for(var i=16; i<=18; i++){	//指定member_A圖像空格內的值
		eval("block"+i+".denom=member_A.denom["+(i-16)+"]");
		eval("block"+i+".nume=member_A.nume["+(i-16)+"]");
		eval("block"+i+".value=member_A.nume["+(i-16)+"] / "+"member_A.denom["+(i-16)+"]");
		eval("block"+i+".original_denom=member_A.original_denom["+(i-16)+"]");
		eval("block"+i+".original_nume=member_A.original_nume["+(i-16)+"]");
		eval("block"+i+".first_denom=member_A.denom["+(i-16)+"]");
		eval("block"+i+".first_nume=member_A.nume["+(i-16)+"]");
		eval("block"+i+".max_extend=member_A.max_extend["+(i-16)+"]");
		eval("block"+i+".src=member_A.path["+(i-16)+"]");	
		eval("block"+i+".first_path=member_A.path["+(i-16)+"]");
		eval("block"+i+".blockName='A_"+(i-16)+"'");	
	}
	for(var i=19; i<=21; i++){	//指定member_B圖像空格內的值
		eval("block"+i+".denom=member_B.denom["+(i-19)+"]");
		eval("block"+i+".nume=member_B.nume["+(i-19)+"]");
		eval("block"+i+".value=member_B.nume["+(i-19)+"] / "+"member_B.denom["+(i-19)+"]");
		eval("block"+i+".original_denom=member_B.original_denom["+(i-19)+"]");
		eval("block"+i+".original_nume=member_B.original_nume["+(i-19)+"]");
		eval("block"+i+".first_denom=member_B.denom["+(i-19)+"]");
		eval("block"+i+".first_nume=member_B.nume["+(i-19)+"]");
		eval("block"+i+".max_extend=member_B.max_extend["+(i-19)+"]");
		eval("block"+i+".src=member_B.path["+(i-19)+"]");
		eval("block"+i+".first_path=member_B.path["+(i-19)+"]");	
		eval("block"+i+".blockName='B_"+(i-19)+"'");	
	}
	for(var i=22; i<=24; i++){	//指定member_C圖像空格內的值
		eval("block"+i+".denom=member_C.denom["+(i-22)+"]");
		eval("block"+i+".nume=member_C.nume["+(i-22)+"]");
		eval("block"+i+".value=member_C.nume["+(i-22)+"] / "+"member_C.denom["+(i-22)+"]");
		eval("block"+i+".original_denom=member_C.original_denom["+(i-22)+"]");
		eval("block"+i+".original_nume=member_C.original_nume["+(i-22)+"]");
		eval("block"+i+".first_denom=member_C.denom["+(i-22)+"]");
		eval("block"+i+".first_nume=member_C.nume["+(i-22)+"]");
		eval("block"+i+".max_extend=member_C.max_extend["+(i-22)+"]");
		eval("block"+i+".src=member_C.path["+(i-22)+"]");
		eval("block"+i+".first_path=member_C.path["+(i-22)+"]");	
		eval("block"+i+".blockName='C_"+(i-22)+"'");	
	}
	draw.initialMemberGra(member_A.path[0], member_A.path[1], member_A.path[2], member_B.path[0], member_B.path[1], member_B.path[2], member_C.path[0], member_C.path[1], member_C.path[2]);	//畫上A, B, C圖像
	draw.initialMemberSym(member_Sym.A_Sym, member_Sym.B_Sym, member_Sym.C_Sym);	//畫上A,B, C字符
	draw.errorReport();
	checkCorresponding();
	giveQues();
	window.onload = function(){	//載入頁面時，將圖卡及字符配對好
		correctCouple();
	}
}

function calTotalTime(){	//計算總花費時間
	time ++;
	//$("#time").html("目前花費的時間:"+time+"秒");
}

function GCD(a, b){
	var temp=0;
	while(a%b !=0){
		temp = a%b;
		a=b;
		b=temp;
	}
	return b;
}

function LCM(a, b){
	return (a*b)/ GCD(a, b);
}

function showCheck(){
	if(A_check == true && B_check == true && C_check == true){
		check();
	}
}

function showConfirm(){
	var confirmObj = [block79, block80, block81];
	switch(question.next){
		case false:
			if(block1.empty == "false" && block2.empty == "false"){
				$.each(confirmObj, function(){
					this.obj.css("display","block");
				});
			}else{
				$.each(confirmObj, function(){
					this.obj.css("display","none");
				});
			}
			break;
		case true:
			if(block91.empty == "false" && block92.empty == "false" && block93.empty == "false"){
				$.each(confirmObj, function(){
					this.obj.css("display","block");
				});
			}else{
				$.each(confirmObj, function(){
					this.obj.css("display","none");
				});
			}
			break;
	}	
}

function check(){		//判斷對錯		
	var  op = question.operator[0];	//第一題的運算子
	var  op2 = question.first_operator[0], op3 = question.second_operator[0];	//第二題的運算子
	switch(question.next){
		case false:
			if(block1.empty =="false" && block2.empty =="false"){	//有填值，進入判斷
				$("div").remove("#blank_report");
				if(eval(block1.value+op+block2.value) == block3.value || (block1.denom == block2.denom && block2.denom == block3.denom && eval(block1.nume+op+block2.nume)==block3.nume)){ //填值正確
					answerList.completeTime.push(time);
					handleObj.createResultBox("correct_report","correct",850,1150,"bottom");	//id, answer, top, left, position
					acheive ++;
					block88.obj.css("display","none"), block89.obj.css("display","none"), block90.obj.css("display","none");
					draw.clearDraw(ctx57, 500, 300);
					$("#correct_report").animate({top:150, left:520},1500, function(){
						this.remove();
					});		
					handleObj.showSecondQues();	//顯示第二道題目				
					handleObj.randomGraSym();	//打散每個人的圖卡
					draw.recoverGraSym();
					block79.obj.css("display", "none"), block79.obj.html("確定");
					block80.obj.css("display", "none"), block80.obj.html("確定");
					block81.obj.css("display", "none"), block81.obj.html("確定");
					A_check = false, B_check = false, C_check = false;	
					question.next = true;
					handleObj.closeCentralObject();	//關閉第一道題目
					showNextQues();	//顯示下一道題目			
					handleObj.changeRubberbandState(); //改變Rubber band的方向及位置		
					handleObj.hideAllbackButton();	//隱藏所有圖卡取回按鈕					
				}else{
					block79.obj.html("確定"), block80.obj.html("確定"), block81.obj.html("確定");
					A_check = false, B_check = false, C_check = false;
					block88.obj.css("display","none"), block89.obj.css("display","none"), block90.obj.css("display","none");
					draw.clearDraw(ctx57, 500, 300);
					handleObj.createResultBox("error_report","error",850,1150,"bottom");	//id, answer, top, left, position
					$("#error_report").animate({top:400, left:800},1500, function(){
						this.remove();
					});
				}
			}else{	//沒填值，顯示空白回饋		
				handleObj.createResultBox("blank_report","blank",915,1130,"bottom");	//id, answer, top, left, position
			}	
			break;
		case true:
			if(block91.empty =="false" && block92.empty =="false" && block93.empty =="false"){	//填值後
				$("div").remove("#blank_report");
				if(eval(block91.value+op2+block92.value+op3+block93.value) == block94.value 
				|| (block91.denom == block94.denom && block92.denom == block94.denom && block93.denom == block94.denom
					&& eval(block91.nume+op2+block92.nume+op3+block93.nume) == block94.nume)){	//填值正確
					complete = true;
					handleObj.showResult();
					block79.obj.css("display","none"), block80.obj.css("display","none"), block81.obj.css("display","none");
					block88.obj.css("display","none"), block89.obj.css("display","none");
					block82.obj.css("display","none"), block83.obj.css("display","none"), block84.obj.css("display","none");
					handleObj.hideAllbackButton();	//隱藏所有圖卡取回按鈕		
					console.log("完成");
				}else{	//填值錯誤
					block79.obj.html("確定"), block80.obj.html("確定"), block81.obj.html("確定");
					A_check = false, B_check = false, C_check = false;
					handleObj.createResultBox("error_report","error",850,1150,"bottom");	//id, answer, top, left, position
					$("#error_report").animate({top:400, left:800},1500, function(){
						this.remove();
					});
				}
			}else{//沒填值，顯示空白回饋		
				handleObj.createResultBox("blank_report","blank",915,1130,"bottom");	//id, answer, top, left, position
			}
			break;
	}	
}

function GivePic(path, original_denom, original_nume, denom, nume){	//給予完整圖形路徑
	var pic = new Image();
	switch(path){
		case "cut":
			pic.src = "add_sub_pic/cut_pro/c"+original_denom+"_"+original_nume+"/c"+denom+"_"+nume+".png";
			return pic;
			break;
		case "result":
			pic.src = "add_sub_pic/r_proper/r"+original_denom+"_"+original_nume+"/r"+denom+"_"+nume+".png";
			return pic;
			break;
		case "question":
			pic.src = "add_sub_pic/question/"+denom+"_"+nume+".png";
			return pic;
			break;
		case "mix":
			pic.src = "add_sub_pic/question/1_"+denom+"_"+nume+".png";
			return pic;
			break;
	}
}

function GivePic2(original_denom, original_nume, denom, nume){	//給予完整圖形路徑
	var pic = new Image();
	pic.src = "add_sub_pic/proper/"+original_denom+"_"+original_nume+"/"+denom+"_"+nume+".png";
	return pic;
}

function showNext(){
	if(A_next == true && B_next == true && C_next == true){
		console.log("結束活動");
	}
}

function giveQues(){	//產生中央區域題目
	var r1 = Math.floor(Math.random()*3), r2 = Math.floor(Math.random()*3);	//第一題亂數取圖卡
	var r3 = Math.floor(Math.random()*3), r4 = Math.floor(Math.random()*3), r5 = Math.floor(Math.random()*3);	//第二題亂數取圖卡
	
	if(member_Sym.A_Sym.value[r1] > member_Sym.B_Sym.value[r2]){	//儲存第一道題目
		var ex = LCM(member_Sym.A_Sym.original_denom[r1], member_Sym.B_Sym.original_denom[r2]);	//算出兩分母的LCM
		question.nume.push((member_Sym.A_Sym.original_nume[r1] * (ex/member_Sym.A_Sym.original_denom[r1])) - (member_Sym.B_Sym.original_nume[r2] * (ex/member_Sym.B_Sym.original_denom[r2])));	//儲存分子
		question.denom.push(ex);	//儲存分母
		question.value.push(question.nume / question.denom);	//儲存數值
		question.operator.push("-");				
	}else if(member_Sym.A_Sym.value[r1] <= member_Sym.B_Sym.value[r2]){
		var ex = LCM(member_Sym.A_Sym.original_denom[r1], member_Sym.B_Sym.original_denom[r2]);	//算出兩分母的LCM
		question.nume.push((member_Sym.A_Sym.original_nume[r1] * (ex/member_Sym.A_Sym.original_denom[r1])) + (member_Sym.B_Sym.original_nume[r2] * (ex/member_Sym.B_Sym.original_denom[r2])));	//儲存分子
		question.denom.push(ex);	//儲存分母
		question.value.push(question.nume / question.denom);	//儲存數值
		question.operator.push("+");		
	}
	
	if(member_Sym.A_Sym.value[r3] + member_Sym.B_Sym.value[r4] <= member_Sym.C_Sym.value[r5]){//儲存第二題
		var ex2 = LCM(member_Sym.A_Sym.original_denom[r3], member_Sym.B_Sym.original_denom[r4]);	//算出前兩數兩分母的LCM
		var fin =  LCM(ex2, member_Sym.C_Sym.original_denom[r5]); //算出最後的LCM
		var o_nume = (member_Sym.A_Sym.original_nume[r3] * (fin/member_Sym.A_Sym.original_denom[r3]))+(member_Sym.B_Sym.original_nume[r4] * (fin/member_Sym.B_Sym.original_denom[r4])) + (member_Sym.C_Sym.original_nume[r5] * (fin/member_Sym.C_Sym.original_denom[r5]))
		var reduce = GCD(fin, o_nume);	//算出分子分母約分的數值
		if(fin != o_nume){	//假設分子分母不相等，進行約分
			question.nume2.push(o_nume / reduce);	//儲存分子
			question.denom2.push(fin / reduce);	//儲存分母
		}else{	//不進行約分
			question.nume2.push(o_nume);	//儲存分子
			question.denom2.push(fin);	//儲存分母
		}		
		question.value2.push(question.nume2 / question.denom2);	//儲存數值
		question.first_operator.push("+");
		question.second_operator.push("+");
		console.log();
	//	console.log("original_denom1:"+member_Sym.A_Sym.original_denom[r3]+" original_denom2:"+member_Sym.B_Sym.original_denom[r4]+ " original_denom3:"+member_Sym.C_Sym.original_denom[r5]);
	//	console.log("original_nume1:"+member_Sym.A_Sym.original_nume[r3]+" original_nume2:"+member_Sym.B_Sym.original_nume[r4]+ " original_nume3:"+member_Sym.C_Sym.original_nume[r5]);
	//	console.log("question.denom2:"+question.denom2);
	//	console.log("question.nume2:"+question.nume2);
	}else if(member_Sym.A_Sym.value[r3] + member_Sym.B_Sym.value[r4] > member_Sym.C_Sym.value[r5]){
		var ex2 = LCM(member_Sym.A_Sym.original_denom[r3], member_Sym.B_Sym.original_denom[r4]);	//算出前兩數兩分母的LCM
		var fin =  LCM(ex2, member_Sym.C_Sym.original_denom[r5]); //算出最後的LCM
		var o_nume = (member_Sym.A_Sym.original_nume[r3] * (fin/member_Sym.A_Sym.original_denom[r3]))+(member_Sym.B_Sym.original_nume[r4] * (fin/member_Sym.B_Sym.original_denom[r4])) - (member_Sym.C_Sym.original_nume[r5] * (fin/member_Sym.C_Sym.original_denom[r5]))
		var reduce = GCD(fin, o_nume);	//算出分子分母約分的數值
		if(fin != o_nume){	//假設分子分母不相等，進行約分
			question.nume2.push(o_nume / reduce);	//儲存分子
			question.denom2.push(fin / reduce);	//儲存分母
		}else{	//不進行約分
			question.nume2.push(o_nume);	//儲存分子
			question.denom2.push(fin);	//儲存分母
		}
		question.value2.push(question.nume2 / question.denom2);	//儲存數值
		question.first_operator.push("+");
		question.second_operator.push("-");
		//console.log("original_denom1:"+member_Sym.A_Sym.original_denom[r3]+" original_denom2:"+member_Sym.B_Sym.original_denom[r4]+ " original_denom3:"+member_Sym.C_Sym.original_denom[r5]);
		//console.log("original_nume1:"+member_Sym.A_Sym.original_nume[r3]+" original_nume2:"+member_Sym.B_Sym.original_nume[r4]+ " original_nume3:"+member_Sym.C_Sym.original_nume[r5]);
		//console.log("question.denom2:"+question.denom2);
		//console.log("question.nume2:"+question.nume2);
	}	
	
	//block3.value = question.value[0], block3.nume = question.nume[0], block3.denom = question.denom[0];
	showQues();
}

function showQues(){	//顯示中央區域題目(第一題)
	block3.value = question.value[0], block3.nume = question.nume[0], block3.denom = question.denom[0];	
	draw.initialCentralSym(ctx7, question.denom[0], question.nume[0]);	//繪製題目字符
	$("#operator_mark1").html(question.operator[0]);	//載入運算子
	var pic = GivePic("question","", "",question.denom[0], question.nume[0]);	//載入問題之圖像
	pic.onload = function(){
		draw.drawClozeGra(ctx4, pic, question.denom[0], question.nume[0]);	//將圖像畫出		
	}
}

function showNextQues(){	//顯示中央區域題目(第二題)
	block94.value = question.value2[0], block94.nume = question.nume2[0], block94.denom = question.denom2[0];	
	draw.initialCentralSym(ctx61, question.denom2[0], question.nume2[0]);	//繪製題目字符
	$("#operator_mark3").html(question.first_operator[0]), $("#operator_mark4").html(question.second_operator[0]);	//載入運算子
	var pic = GivePic("question","", "",question.denom2[0], question.nume2[0]);	//載入問題之圖像
	pic.onload = function(){
		draw.drawClozeGra(ctx65, pic, question.denom2[0], question.nume2[0]);	//將圖像畫出		
	}	
}

function correctCouple(){	//直接顯示正確圖卡與字符的配對
	var symArray = [block7, block8, block9, block10, block11, block12, block13, block14, block15];
	var graArray = [block16, block17, block18, block19, block20, block21, block22, block23, block24];
	
	for(var i=0; i<9; i++){
		graArray[i].nume = symArray[i].nume;
		graArray[i].denom = symArray[i].denom;		
		graArray[i].original_nume = symArray[i].original_nume;
		graArray[i].original_denom = symArray[i].original_denom;	
		graArray[i].first_nume = symArray[i].first_nume;
		graArray[i].first_denom = symArray[i].first_denom;	
		graArray[i].src = GivePic2(graArray[i].original_denom, graArray[i].original_nume, graArray[i].denom, graArray[i].nume);
		graArray[i].first_path =  GivePic2(graArray[i].original_denom, graArray[i].original_nume, graArray[i].denom, graArray[i].nume);
	}
	for(var i=0; i<9; i++){
		draw.clearDraw(eval(graArray[i].pen), 200, 200);
	}
	for(var i=0; i<9; i++){
		draw.drawGra(eval(graArray[i].pen), graArray[i].src); //ctx, imgPath
	}
	handleObj.showCentralObject();
	checkCorresponding();
	draw.errorReport();
}

function checkCorresponding(){		//判斷字符與圖像是否一致
	var sym = [block7, block8, block9, block10, block11, block12, block13, block14, block15];
	var gra = [block16, block17, block18, block19, block20, block21, block22, block23, block24];	
	
	for(var i=0; i<9; i++){	//判斷字符與圖像的配對
		if(sym[i].nume == gra[i].nume && sym[i].denom == gra[i].denom && sym[i].empty == "false" && gra[i].empty == "false"){	
			sym[i].corresponding = true;
			gra[i].corresponding = true;
		}else{
			sym[i].corresponding = false;
			gra[i].corresponding = false;
		}
	}	
	
	if(block16.corresponding == true && block17.corresponding == true && block18.corresponding == true && block19.corresponding == true && block20.corresponding == true
			&& block21.corresponding == true && block22.corresponding == true && block23.corresponding == true && block24.corresponding == true && first_check == false){	//全部配對好，顯示中央區域題目
			handleObj.showCentralObject();
			first_check = true;
	}	
		
	/*for(var i=0; i<3; i++){		//判斷是否開啟轉換圖卡功能
		if(gra[i].corresponding == true){
			block64.use = true;
			block64.obj.css("display","block");
			break;
		}else{
			block64.use = false;
			block64.obj.css("display","none");
		}
	}
	for(var i=3; i<6; i++){
		if(gra[i].corresponding == true){
			block65.use = true;
			block65.obj.css("display","block");
			break;
		}else{
			block65.use = false;
			block65.obj.css("display","none");
		}
	}
	for(var i=6; i<9; i++){
		if(gra[i].corresponding == true){
			block66.use = true;
			block66.obj.css("display","block");
			break;
		}
		else{
			block66.use = false;
			block66.obj.css("display","none");
		}
	}*/
}

function showProcess(){	//顯現作答過程的方框
	if(block1.empty == "false" && block2.empty == "false" && block1.denom == block2.denom){
		block88.obj.css("display","block"), block89.obj.css("display","block"), block90.obj.css("display","block");
		draw.drawProcessGra(question.operator[0], block1.src, block2.src);
	}else{
		block88.obj.css("display","none"), block89.obj.css("display","none"), block90.obj.css("display","none");
		draw.clearDraw(ctx57, 500, 300);
	}
}

function touchstart(event){
	event.changedTouches = event.targetTouches;
	//console.log("x:"+event.changedTouches[0].pageX + " y:"+event.changedTouches[0].pageY);
	for(var i=0; i<blockArray.length; i++){
		for(var j=0; j<event.changedTouches.length; j++){			
			if(blockArray[i] !=null && event.changedTouches[j].target.id == blockArray[i].id){
				switch(blockArray[i].position){
					case "center":
						if(blockArray[i].id == "blank_1" && blockArray[i].empty =="false" && complete == false){
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								draw.clearDraw(eval(blockArray[i+3].pen), blockArray[i+3].obj.width(), blockArray[i+3].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].original_nume, blockArray[i].original_denom, blockArray[i].max_extend, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								blockArray[i].back.obj.css("display","none");	//關閉圖卡回收按鍵
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								showConfirm();
								//showProcess();
						}
						if(blockArray[i].id == "blank_2" && blockArray[i].empty =="false" && complete == false){
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								draw.clearDraw(eval(blockArray[i+3].pen), blockArray[i+3].obj.width(), blockArray[i+3].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].original_nume, blockArray[i].original_denom, blockArray[i].max_extend, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								blockArray[i].back.obj.css("display","none");	//關閉圖卡回收按鍵
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								showConfirm();
								//showProcess();
						}
						if(blockArray[i].id == "blank_4" && blockArray[i].empty =="false" && complete == false){
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].original_nume, blockArray[i].original_denom, blockArray[i].max_extend, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								blockArray[i].back.obj.css("display","none");	//關閉圖卡回收按鍵
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								showConfirm();
								//showProcess();
						}
						if(blockArray[i].id == "blank_5" && blockArray[i].empty =="false" && complete == false){
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].original_nume, blockArray[i].original_denom, blockArray[i].max_extend, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								blockArray[i].back.obj.css("display","none");	//關閉圖卡回收按鍵
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								showConfirm();
								//showProcess();
						}
						if(blockArray[i].id == "blank_6" && blockArray[i].empty =="false" && complete == false){
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].original_nume, blockArray[i].original_denom, blockArray[i].max_extend, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								blockArray[i].back.obj.css("display","none");	//關閉圖卡回收按鍵
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								showConfirm();
								//showProcess();
						}
						if(blockArray[i].id == "confirm"){
							check();
							block3.value = question.value[0];	//指定新數值給空格三
							block3.nume = question.nume[0];
							block3.denom = question.denom[0];
						}
						if(blockArray[i].id =="blank1_rotate"){
							block1.obj.animate({rotate:'+=90deg'},250);
						}
						if(blockArray[i].id =="blank2_rotate"){
							block2.obj.animate({rotate:'+=90deg'},250);
						}
						if(blockArray[i].id == "transMix"){
							switch(blockArray[i].tranFraction){
								case "mixed":
									draw.drawMixOrImproSym(ctx7, block3.denom, block3.nume - block3.denom, blockArray[i].tranFraction);	//ctx, denom, nume, blockState
									draw.drawMixOrImproGra(ctx4, GivePic("mix","","",block3.denom, block3.nume- block3.denom));	//ctx, imgPath, denom, nume
									break;
								case "improper":
									draw.drawMixOrImproSym(ctx7, block3.denom, block3.nume, blockArray[i].tranFraction);	//ctx, denom, nume, blockState
									draw.drawMixOrImproGra(ctx4, GivePic("question","","",block3.denom, block3.nume));	//ctx, imgPath, denom, nume
									break;	
							}
							handleObj.switchFraction(blockArray[i]);
						}
						switch(blockArray[i].id){		//取回圖卡功能
							case "A_take_back1":
								block114.obj.css("display","none");
								block114.whichBlock.empty = "true";
								draw.clearDraw(eval(block114.whichBlock.pen), 200, 200), draw.clearDraw(eval(block114.whichBlockSym.pen), 100, 100);	
								draw.drawGra(eval(block114.start.pen), block114.start.src);	//ctx, imgPath
								block114.start.empty = "false";
								//draw.clearOriExtendPic(block102.whichBlockSym, block102.whichBlock);	//blockSym, blockGra
								//handleObj.hideOriExtendArea(block102.whichBlockSym, block102.whichBlock, block102.whichBlock.id);	//blockSym, blockGra, blockId
								block114.whichBlock.obj.css("border-color","");
								block79.obj.css("display", "none");
								block80.obj.css("display", "none");
								block81.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								break;
							case "A_take_back2":
								block115.obj.css("display","none");
								block115.whichBlock.empty = "true";
								draw.clearDraw(eval(block115.whichBlock.pen), 200, 200), draw.clearDraw(eval(block115.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block115.start.pen), block115.start.src);	//ctx, imgPath
								block115.start.empty = "false";
								//draw.clearOriExtendPic(block103.whichBlockSym, block103.whichBlock);
								//handleObj.hideOriExtendArea(block103.whichBlockSym, block103.whichBlock, block103.whichBlock.id);	//blockSym, blockGra, blockId
								block115.whichBlock.obj.css("border-color","");
								block79.obj.css("display", "none");
								block80.obj.css("display", "none");
								block81.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								break;
							case "A_take_back3":
								block116.obj.css("display","none");
								block116.whichBlock.empty = "true";
								draw.clearDraw(eval(block116.whichBlock.pen), 200, 200), draw.clearDraw(eval(block116.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block116.start.pen), block116.start.src);	//ctx, imgPath
								block116.start.empty = "false";
								//draw.clearOriExtendPic(block104.whichBlockSym, block104.whichBlock);
								//handleObj.hideOriExtendArea(block104.whichBlockSym, block104.whichBlock, block104.whichBlock.id);	//blockSym, blockGra, blockId
								block116.whichBlock.obj.css("border-color","");
								block79.obj.css("display", "none");
								block80.obj.css("display", "none");
								block81.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								break;
							case "B_take_back1":
								block117.obj.css("display","none");
								block117.whichBlock.empty = "true";
								draw.clearDraw(eval(block117.whichBlock.pen), 200, 200), draw.clearDraw(eval(block117.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block117.start.pen), block117.start.src);	//ctx, imgPath
								block117.start.empty = "false";
								//draw.clearOriExtendPic(block105.whichBlockSym, block105.whichBlock);
								//handleObj.hideOriExtendArea(block105.whichBlockSym, block105.whichBlock, block105.whichBlock.id);	//blockSym, blockGra, blockId
								block117.whichBlock.obj.css("border-color","");
								block79.obj.css("display", "none");
								block80.obj.css("display", "none");
								block81.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								break;
							case "B_take_back2":
								block118.obj.css("display","none");
								block118.whichBlock.empty = "true";
								draw.clearDraw(eval(block118.whichBlock.pen), 200, 200), draw.clearDraw(eval(block118.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block118.start.pen), block118.start.src);	//ctx, imgPath
								block118.start.empty = "false";
								//draw.clearOriExtendPic(block106.whichBlockSym, block106.whichBlock);
								//handleObj.hideOriExtendArea(block106.whichBlockSym, block106.whichBlock, block106.whichBlock.id);	//blockSym, blockGra, blockId
								block118.whichBlock.obj.css("border-color","");
								block79.obj.css("display", "none");
								block80.obj.css("display", "none");
								block81.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								break;
							case "B_take_back3":
								block119.obj.css("display","none");
								block119.whichBlock.empty = "true";
								draw.clearDraw(eval(block119.whichBlock.pen), 200, 200), draw.clearDraw(eval(block119.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block119.start.pen), block119.start.src);	//ctx, imgPath
								block119.start.empty = "false";
								//draw.clearOriExtendPic(block107.whichBlockSym, block107.whichBlock);
								//handleObj.hideOriExtendArea(block107.whichBlockSym, block107.whichBlock, block107.whichBlock.id);	//blockSym, blockGra, blockId
								block119.whichBlock.obj.css("border-color","");
								block79.obj.css("display", "none");
								block80.obj.css("display", "none");
								block81.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								break;
							case "C_take_back1":
								block120.obj.css("display","none");
								block120.whichBlock.empty = "true";
								draw.clearDraw(eval(block120.whichBlock.pen), 200, 200), draw.clearDraw(eval(block120.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block120.start.pen), block120.start.src);	//ctx, imgPath
								block120.start.empty = "false";
								//draw.clearOriExtendPic(block108.whichBlockSym, block108.whichBlock);
								//handleObj.hideOriExtendArea(block108.whichBlockSym, block108.whichBlock, block108.whichBlock.id);	//blockSym, blockGra, blockId
								block120.whichBlock.obj.css("border-color","");
								block79.obj.css("display", "none");
								block80.obj.css("display", "none");
								block81.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								break;
							case "C_take_back2":
								block121.obj.css("display","none");
								block121.whichBlock.empty = "true";
								draw.clearDraw(eval(block121.whichBlock.pen), 200, 200), draw.clearDraw(eval(block121.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block121.start.pen), block121.start.src);	//ctx, imgPath
								block121.start.empty = "false";
								//draw.clearOriExtendPic(block109.whichBlockSym, block109.whichBlock);
								//handleObj.hideOriExtendArea(block109.whichBlockSym, block109.whichBlock, block109.whichBlock.id);	//blockSym, blockGra, blockId
								block121.whichBlock.obj.css("border-color","");
								block79.obj.css("display", "none");
								block80.obj.css("display", "none");
								block81.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								break;
							case "C_take_back3":
								block122.obj.css("display","none");
								block122.whichBlock.empty = "true";
								draw.clearDraw(eval(block122.whichBlock.pen), 200, 200), draw.clearDraw(eval(block122.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block122.start.pen), block122.start.src);	//ctx, imgPath
								block122.start.empty = "false";
								//draw.clearOriExtendPic(block110.whichBlockSym, block110.whichBlock);
								//handleObj.hideOriExtendArea(block110.whichBlockSym, block110.whichBlock, block110.whichBlock.id);	//blockSym, blockGra, blockId
								block122.whichBlock.obj.css("border-color","");
								block79.obj.css("display", "none");
								block80.obj.css("display", "none");
								block81.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								break;
						}
						break;
					case "personal_area":						
						if(blockArray[i].empty == "false" && blockArray[i].content == "graphic" && blockArray[i].trans != true && complete == false){	//拉取圖卡
							handleObj.createGraObj(blockArray[i].blockName,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, blockArray[i].corresponding);	//id, top, left, corrd		創造物件
							handleObj.createNewGraProperty(blockArray[i].blockName, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].canvas, blockArray[i].block_pen, blockArray[i].original_nume, blockArray[i].original_denom, blockArray[i].max_extend, blockArray[i].corresponding, blockArray[i]); //定義物件屬性 
							handleObj.createCanvasProperty(blockArray[i].content, blockArray[i].canvas, blockArray[i].block_pen, blockArray[i].blockName);	//content, canvas, ctx, id	定義畫布屬性	
							draw.drawGra(eval(blockArray[i].block_pen), blockArray[i].src);	//ctx, imgPath		畫上圖案
							for(var k=0; k<blockArray.length; k++){
								if(blockArray[k] == null){
									blockArray[k] = eval(blockArray[i].blockName);
									break;
								}
							}							
							draw.clearDraw(eval(blockArray[i].pen),  blockArray[i].obj.width(),  blockArray[i].obj.height());	//清除個人區域圖像
							//draw.clearDraw(eval(blockArray[i-9].pen),  blockArray[i-9].obj.width(),  blockArray[i-9].obj.height());	//清除個人區域字符							
							blockArray[i].empty ="true";
							blockArray[i].identifier = event.changedTouches[j].identifier;
							blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
						}
						if(blockArray[i].trans == true && complete == false){	//隱藏原本的面板
							handleObj.scaleCentralArea();	//控制中央面板大小	
							switch(blockArray[i].orientation){	
								case "left":
									$("#member_A").css("display","none");
									break;
								case "bottom":
									$("#member_B").css("display","none");
									break;
								case "right":
									$("#member_C").css("display","none");
									break;
							}
						}
						
					/*	if(blockArray[i].empty == "false" && blockArray[i].content == "symbol" && blockArray[i].trans != true){	//拉取字符
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
								blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
								blockMap[blockArray[i].identifier] = blockArray[i];
								
								handleObj.createSymObj(blockArray[i].blockName, blockArray[i].type, event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, type,top, left		
								handleObj	.createSymProperty(blockArray[i].blockName, blockArray[i].denom, blockArray[i].nume, blockArray[i].whole, blockArray[i].block_pen, blockArray[i].canvas, blockArray[i].type);//id, denom, nume, whole, ctx, canvas, type
								handleObj.createCanvasProperty(blockArray[i].content, blockArray[i].canvas, blockArray[i].block_pen, blockArray[i].blockName);	//content, canvas, ctx, id
								draw.drawNewMemberSym(eval(blockArray[i].block_pen), blockArray[i].denom, blockArray[i].nume);	//ctx, denom, nume
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height()), blockArray[i].empty = "true";								
								
								for(var a=0; a<blockArray.length; a++){
										if(blockArray[a] == null){
											//console.log("block:"+blockArray[i].blockName);
											blockArray[a] = eval(blockArray[i].blockName);				
											break;							
										}
								}							
						}*/
						if(blockArray[i].id =="A_next"){
							A_next = true;
							blockArray[i].obj.html("OK");
							showNext();
						}
						if(blockArray[i].id =="B_next"){
							B_next = true;
							blockArray[i].obj.html("OK");
							showNext();
						}
						if(blockArray[i].id =="C_next"){
							C_next = true;
							blockArray[i].obj.html("OK");
							showNext();							
						}
						if(blockArray[i].id =="A_check"){
							A_check = true;
							blockArray[i].obj.html("OK");
							showCheck();
						}
						if(blockArray[i].id =="B_check"){
							B_check = true;
							blockArray[i].obj.html("OK");
							showCheck();
						}
						if(blockArray[i].id =="C_check"){
							C_check = true;
							blockArray[i].obj.html("OK");
							showCheck();
						}
						if(blockArray[i].trans == true){	//驗證開始
							if(blockArray[i].empty !="true"){	//假如圖卡不為空，開啟轉換面板，進行轉換圖卡
								blockArray[i].tran_panel.css("display","block");
								switch(blockArray[i].tran_panel_id){
									case "A_panel":
										Panel_A.reduce_nume = blockArray[i].original_nume;	//紀錄該分數的最簡值
										Panel_A.reduce_denom = blockArray[i].original_denom;
										Panel_A.original_nume = blockArray[i].nume;	//紀錄選擇的分數圖卡分子
										Panel_A.original_denom = blockArray[i].denom;	//紀錄選擇的分數圖卡分母
										Panel_A.which_pic = blockArray[i];	//紀錄選擇的圖卡
										Panel_A.which_sym = blockArray[i-9];	//紀錄對應的字符
										Panel_A.max_extend =blockArray[i].max_extend;
										Panel_A.max_reduce = blockArray[i].max_extend;
										draw.drawPanelSym(eval(block26.pen),"A_symbol_panel");
										draw.drawPanelGra(eval(block29.pen), blockArray[i].src);
										break;
									case "B_panel":
										Panel_B.reduce_nume = blockArray[i].original_nume;	//紀錄該分數的最簡值
										Panel_B.reduce_denom = blockArray[i].original_denom;
										Panel_B.original_nume = blockArray[i].nume;
										Panel_B.original_denom = blockArray[i].denom;
										Panel_B.which_pic = blockArray[i];	//紀錄選擇的圖卡
										Panel_B.which_sym = blockArray[i-9];	//紀錄對應的字符
										Panel_B.max_extend =blockArray[i].max_extend;
										Panel_B.max_reduce = blockArray[i].max_extend;
										draw.drawPanelSym(eval(block39.pen),"B_symbol_panel");
										draw.drawPanelGra(eval(block42.pen), blockArray[i].src);										
										break;
									case "C_panel":
										Panel_C.reduce_nume = blockArray[i].original_nume;	//紀錄該分數的最簡值
										Panel_C.reduce_denom = blockArray[i].original_denom;
										Panel_C.original_nume = blockArray[i].nume;
										Panel_C.original_denom = blockArray[i].denom;
										Panel_C.which_pic = blockArray[i];	//紀錄選擇的圖卡
										Panel_C.which_sym = blockArray[i-9];	//紀錄對應的字符
										Panel_C.max_extend =blockArray[i].max_extend;
										Panel_C.max_reduce = blockArray[i].max_extend;
										draw.drawPanelSym(eval(block52.pen),"C_symbol_panel");
										draw.drawPanelGra(eval(block55.pen), blockArray[i].src);
										break;
								}
							}
						}						
						break;
					case "personal_panel":
						switch(blockArray[i].id){//驗證面板的操作
							case "A_translate":							
								handleObj.createResultBox("A_trans_explain","explain",550,240,"left");	//id, answer, top, left, position
								blockArray[15].trans = true, blockArray[16].trans = true, blockArray[17].trans = true;
								A_translate = true;
								break;
							case "B_translate":
								handleObj.createResultBox("B_trans_explain","explain",1040,900,"bottom");	//id, answer, top, left, position
								blockArray[18].trans = true, blockArray[19].trans = true, blockArray[20].trans = true;
								B_translate = true;
								break;
							case "C_translate":
								handleObj.createResultBox("C_trans_explain","explain",550,1460,"right");	//id, answer, top, left, position
								blockArray[21].trans = true, blockArray[22].trans = true, blockArray[23].trans = true;
								C_translate = true;
								break;
							case "A_close":
								handleObj.changePanelState("A_panel");
								handleObj.scaleCentralArea();	//控制中央面板大小	
								break;
							case "B_close":
								handleObj.changePanelState("B_panel");
								handleObj.scaleCentralArea();	//控制中央面板大小	
								break;
							case "C_close":
								handleObj.changePanelState("C_panel");
								handleObj.scaleCentralArea();	//控制中央面板大小	
								break;					
							case "A_extend_reduce":
								Panel_A.operator = blockArray[i].extend;
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								handleObj.switchExtendButton(blockArray[i]);		
								Panel_A.extend ="", Panel_A.count =0,block27.value = 0 ,block27.obj.html("");				
								Panel_A.result_nume ="", Panel_A.result_denom = "", block36.use= false, block36.obj.css("color","white");
								draw.clearDraw(eval(block30.pen), 150, 150), draw.clearDraw(eval(block31.pen), 150, 150);
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								$("#A_add").css("display","block"), $("#A_sub").css("display","block"), $("#A_count").css("display","block");
								$("#A_unit").css("display","block"), $("#A_ten").css("display","block");
								break;							
							case "B_extend_reduce":
								Panel_B.operator = blockArray[i].extend;
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								handleObj.switchExtendButton(blockArray[i]);
								Panel_B.extend ="", Panel_B.count =0, block40.value=0, block40.obj.html("");	
								Panel_B.result_nume ="", Panel_B.result_denom = "", block49.use= false, block49.obj.css("color","white");
								draw.clearDraw(eval(block43.pen), 150, 150), draw.clearDraw(eval(block44.pen), 150, 150);
								 draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								 $("#B_add").css("display","block"), $("#B_sub").css("display","block"), $("#B_count").css("display","block");
								 $("#B_unit").css("display","block"), $("#B_ten").css("display","block");
								break;
							case "C_extend_reduce":
								Panel_C.operator = blockArray[i].extend;
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								handleObj.switchExtendButton(blockArray[i]);
								Panel_C.extend ="", Panel_C.count =0, block53.value=0, block53.obj.html("");	
								Panel_C.result_nume ="", Panel_C.result_denom = "", block62.use= false, block62.obj.css("color","white");
								draw.clearDraw(eval(block56.pen), 150, 150), draw.clearDraw(eval(block57.pen), 150, 150);
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								$("#C_add").css("display","block"), $("#C_sub").css("display","block"), $("#C_count").css("display","block");
								$("#C_unit").css("display","block"), $("#C_ten").css("display","block");
								break;
							case "A_add":
								if(Panel_A.operator !=""){
									if(Panel_A.operator == "×"){	// && Panel_A.count <Panel_A.max_extend
										switch(Panel_A.input_type){
											case "unit":
												if(Panel_A.count %10 <9){
													Panel_A.count ++;
													if(Panel_A.count <10){
														block27.obj.html("0"+Panel_A.count);
													}else{
														block27.obj.html(Panel_A.count);
													}													
													block27.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 9;													
													(Panel_A.count<10) ? block27.obj.html("0"+Panel_A.count) : block27.obj.html(Panel_A.count);	
												}
												break;
											case "ten":
												if(Panel_A.count <30){
													Panel_A.count +=10;
													block27.obj.html(Panel_A.count);
													block27.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 30;
													block27.obj.html("0"+Panel_A.count);
												}
												break;
										}										
									}else if(Panel_A.operator == "÷" ){	//&& Panel_A.count <Panel_A.max_reduce
										switch(Panel_A.input_type){
											case "unit":
												if(Panel_A.count %10 <9){
													Panel_A.count ++;
													if(Panel_A.count <10){
														block27.obj.html("0"+Panel_A.count);
													}else{
														block27.obj.html(Panel_A.count);
													}													
													block27.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 9;
													(Panel_A.count<10) ? block27.obj.html("0"+Panel_A.count) : block27.obj.html(Panel_A.count);	
												}	
												break;
											case "ten":
												if(Panel_A.count <30){
													Panel_A.count +=10;
													block27.obj.html(Panel_A.count);
													block27.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 30;
													block27.obj.html("0"+Panel_A.count);
												}
												break;
										}	
									}									
								}								
								break;
							case "B_add":
								if(Panel_B.operator !="" ){
									if(Panel_B.operator == "×"){	// && Panel_B.count <Panel_B.max_extend
										switch(Panel_B.input_type){
											case "unit":
												if(Panel_B.count%10 <9){
													Panel_B.count ++;
													if(Panel_B.count <10){
														block40.obj.html("0"+Panel_B.count);
													}else{
														block40.obj.html(Panel_B.count);
													}
													block40.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 9;
													(Panel_B.count<10) ? block40.obj.html("0"+Panel_B.count) : block40.obj.html(Panel_B.count);	
												}
												break;
											case "ten":
												if(Panel_B.count <30){
													Panel_B.count +=10;
													block40.obj.html(Panel_B.count);
													block40.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 30;
													block40.obj.html("0"+Panel_B.count);
												}
												break;
										}										
									}else if(Panel_B.operator == "÷"){	// && Panel_B.count <Panel_B.max_reduce
										switch(Panel_B.input_type){
											case "unit":
												if(Panel_B.count%10 <9){
													Panel_B.count ++;
													if(Panel_B.count <10){
														block40.obj.html("0"+Panel_B.count);
													}else{
														block40.obj.html(Panel_B.count);
													}
													block40.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 9;
													(Panel_B.count<10) ? block40.obj.html("0"+Panel_B.count) : block40.obj.html(Panel_B.count);	
												}
												break;
											case "ten":
												if(Panel_B.count <30){
													Panel_B.count +=10;
													block40.obj.html(Panel_B.count);
													block40.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 30;
													block40.obj.html("0"+Panel_B.count);
												}
												break;
										}
									}
								}								
								break;
							case "C_add":
								if(Panel_C.operator !=""){
									if(Panel_C.operator == "×" ){	//&& Panel_C.count <Panel_C.max_extend
										switch(Panel_C.input_type){
											case "unit":
												if(Panel_C.count%10 <9){
													Panel_C.count ++;
													if(Panel_C.count <10){
														block53.obj.html("0"+Panel_C.count);
													}else{
														block53.obj.html(Panel_C.count);
													}
													block53.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 9;
													(Panel_C.count<10) ? block53.obj.html("0"+Panel_C.count) : block53.obj.html(Panel_C.count);	
												}										
												break;
											case "ten":
												if(Panel_C.count <30){
													Panel_C.count +=10;
													block53.obj.html(Panel_C.count);
													block53.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 30;
													block53.obj.html("0"+Panel_C.count);
												}
												break;
										}										
									}else if(Panel_C.operator == "÷" ){	//&& Panel_C.count <Panel_C.max_reduce
										switch(Panel_C.input_type){
											case "unit":
												if(Panel_C.count%10 <9){
													Panel_C.count ++;
													if(Panel_C.count <10){
														block53.obj.html("0"+Panel_C.count);
													}else{
														block53.obj.html(Panel_C.count);
													}
													block53.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 9;
													(Panel_C.count<10) ? block53.obj.html("0"+Panel_C.count) : block53.obj.html(Panel_C.count);	
												}												
												break;
											case "ten":
												if(Panel_C.count <30){
													Panel_C.count +=10;
													block53.obj.html(Panel_C.count);
													block53.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 30;
													block53.obj.html("0"+Panel_C.count);
												}
												break;
										}
									}
								}								
								break;							
							case "A_sub":
								if(Panel_A.operator !="" && Panel_A.count >0){
									switch(Panel_A.input_type){
											case "unit":
												if(Panel_A.count%10 >=1){
													Panel_A.count --;
													if(Panel_A.count<10){
														block27.obj.html("0"+Panel_A.count);
													}else{
														block27.obj.html(Panel_A.count);
													}													
													block27.value = Panel_A.count;
												}																				
												break;
											case "ten":
												if(Panel_A.count >=10){
													Panel_A.count -=10;
													if(Panel_A.count <10){
														block27.obj.html("0"+Panel_A.count);
													}else{
														block27.obj.html(Panel_A.count);
													}													
													block27.value = Panel_A.count;
												}
												break;
										}									
								}
								break;
							case "B_sub":
								if(Panel_B.operator !="" && Panel_B.count >0){
									switch(Panel_B.input_type){
											case "unit":
												if(Panel_B.count%10 >=1){
													Panel_B.count --;
													if(Panel_B.count <10){
														block40.obj.html("0"+Panel_B.count);
													}else{
														block40.obj.html(Panel_B.count);
													}													
													block40.value = Panel_B.count;
												}												
												break;
											case "ten":
												if(Panel_B.count >=10){
													Panel_B.count -=10;
													if(Panel_B.count <10){
														block40.obj.html("0"+Panel_B.count);
													}else{
														block40.obj.html(Panel_B.count);
													}													
													block40.value = Panel_B.count;
												}
												break;
										}									
								}
								break;
							case "C_sub":
								if(Panel_C.operator !="" && Panel_C.count >0){
									switch(Panel_C.input_type){
											case "unit":
												if(Panel_C.count%10 >=1){
													Panel_C.count --;
													if(Panel_C.count<10){
														block53.obj.html("0"+Panel_C.count);
													}else{
														block53.obj.html(Panel_C.count);
													}													
													block53.value = Panel_C.count;
												}												
												break;
											case "ten":
												if(Panel_C.count >=10){
													Panel_C.count -=10;
													if(Panel_C.count <10){
														block53.obj.html("0"+Panel_C.count);
													}else{
														block53.obj.html(Panel_C.count);
													}													
													block53.value = Panel_C.count;
												}
												break;
										}									
								}
								break;	
							case "A_unit":
								block73.obj.css("font-weight","900"), block73.obj.css("color","blue");
								block76.obj.css("font-weight","100"), block76.obj.css("color","black");
								$("#A_message").html("目前的數值從個位數開始修改");
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
								Panel_A.input_type = "unit";
								break;
							case "B_unit":
								block74.obj.css("font-weight","900"), block74.obj.css("color","blue");
								block77.obj.css("font-weight","100"), block77.obj.css("color","black");
								$("#B_message").html("目前的數值從個位數開始修改");
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
								Panel_B.input_type = "unit";
								break;
							case "C_unit":
								block75.obj.css("font-weight","900"), block75.obj.css("color","blue");
								block78.obj.css("font-weight","100"), block78.obj.css("color","black");
								$("#C_message").html("目前的數值從個位數開始修改");
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
								Panel_C.input_type = "unit";
								break;
							case "A_ten":
								block73.obj.css("font-weight","100"), block73.obj.css("color","black");
								block76.obj.css("font-weight","900"), block76.obj.css("color","blue");
								$("#A_message").html("目前的數值從十位數開始修改");
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
								Panel_A.input_type = "ten";
								break;
							case "B_ten":
								block74.obj.css("font-weight","100"), block74.obj.css("color","black");
								block77.obj.css("font-weight","900"), block77.obj.css("color","blue");
								$("#B_message").html("目前的數值從十位數開始修改");
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
								Panel_B.input_type = "ten";
								break;
							case "C_ten":
								block75.obj.css("font-weight","100"), block75.obj.css("color","black");
								block78.obj.css("font-weight","900"), block78.obj.css("color","blue");
								$("#C_message").html("目前的數值從十位數開始修改");
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
								Panel_C.input_type = "ten";
								break;					
							case "A_count":
								if(Panel_A.operator !=""){
									handleObj.createResponse("A_ans",event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, Panel_A.count, "left");	//id, top, left, value, position
									blockArray[i].identifier = event.changedTouches[j].identifier;
									blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
									blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
									blockMap[blockArray[i].identifier] = blockArray[i];
								}								
								break;
							case "B_count":
								if(Panel_B.operator !=""){
									handleObj.createResponse("B_ans",event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, Panel_B.count, "bottom");	//id, top, left, value, position
									blockArray[i].identifier = event.changedTouches[j].identifier;
									blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
									blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
									blockMap[blockArray[i].identifier] = blockArray[i];
								}								
								break;
							case "C_count":
								if(Panel_C.operator !=""){
									handleObj.createResponse("C_ans",event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, Panel_C.count, "right");	//id, top, left, value, position
									blockArray[i].identifier = event.changedTouches[j].identifier;
									blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
									blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
									blockMap[blockArray[i].identifier] = blockArray[i];
								}								
								break;
							case "A_confirm":
								if(blockArray[i].use == true){
									Panel_A.which_pic.denom = Panel_A.result_denom;
									Panel_A.which_pic.nume = Panel_A.result_nume;
									Panel_A.which_sym.denom = Panel_A.result_denom;
									Panel_A.which_sym.nume = Panel_A.result_nume;
									Panel_A.which_pic.max_extend = Panel_A.max_extend;
									Panel_A.which_pic.whetherExtend = true;
									Panel_A.which_pic.src = GivePic("result",Panel_A.reduce_denom, Panel_A.reduce_nume, Panel_A.result_denom, Panel_A.result_nume);
									draw.drawChangeGra(eval(Panel_A.which_pic.pen), Panel_A.reduce_denom, Panel_A.reduce_nume, Panel_A.result_denom, Panel_A.result_nume);
									draw.clearDraw(eval(Panel_A.which_pic.sym),150, 75);	//清除原本字符
									draw.draSym(eval(Panel_A.which_pic.sym), Panel_A.result_denom, Panel_A.result_nume);	//畫上字符
									Panel_A.which_pic.obj.effect('shake', { times: 3 }, 100);	//轉換完，用震動效果來提醒學生剛剛轉換的是哪張圖卡
									handleObj.changePanelState("A_panel");
									handleObj.scaleCentralArea();	//控制中央面板大小	
								}
								break;
							case "B_confirm":
								if(blockArray[i].use == true){
									Panel_B.which_pic.denom = Panel_B.result_denom;
									Panel_B.which_pic.nume = Panel_B.result_nume;
									Panel_B.which_sym.denom = Panel_B.result_denom;
									Panel_B.which_sym.nume = Panel_B.result_nume;
									Panel_B.which_pic.max_extend = Panel_B.max_extend;
									Panel_B.which_pic.whetherExtend = true;
									Panel_B.which_pic.src = GivePic("result",Panel_B.reduce_denom, Panel_B.reduce_nume, Panel_B.result_denom, Panel_B.result_nume);
									draw.drawChangeGra(eval(Panel_B.which_pic.pen), Panel_B.reduce_denom, Panel_B.reduce_nume, Panel_B.result_denom, Panel_B.result_nume);
									draw.clearDraw(eval(Panel_B.which_pic.sym),150, 75);	//清除原本字符
									draw.draSym(eval(Panel_B.which_pic.sym), Panel_B.result_denom, Panel_B.result_nume);	//畫上字符
									Panel_B.which_pic.obj.effect('shake', { times: 3 }, 100);
									handleObj.changePanelState("B_panel");
									handleObj.scaleCentralArea();	//控制中央面板大小	
								}
								break;
							case "C_confirm":
								if(blockArray[i].use == true){
									Panel_C.which_pic.denom = Panel_C.result_denom;
									Panel_C.which_pic.nume = Panel_C.result_nume;
									Panel_C.which_sym.denom = Panel_C.result_denom;
									Panel_C.which_sym.nume = Panel_C.result_nume;
									Panel_C.which_pic.max_extend = Panel_C.max_extend;
									Panel_C.which_pic.whetherExtend = true;
									Panel_C.which_pic.src = GivePic("result",Panel_C.reduce_denom, Panel_C.reduce_nume, Panel_C.result_denom, Panel_C.result_nume);
									draw.drawChangeGra(eval(Panel_C.which_pic.pen), Panel_C.reduce_denom, Panel_C.reduce_nume, Panel_C.result_denom, Panel_C.result_nume);
									draw.clearDraw(eval(Panel_C.which_pic.sym),150, 75);	//清除原本字符
									draw.draSym(eval(Panel_C.which_pic.sym), Panel_C.result_denom, Panel_C.result_nume);	//畫上字符
									Panel_C.which_pic.obj.effect('shake', { times: 3 }, 100);
									handleObj.changePanelState("C_panel");
									handleObj.scaleCentralArea();	//控制中央面板大小	
								}
								break;
							case "A_previous":
								if(blockArray[i].use == true){
									if(Panel_A.result_nume != "" || Panel_A.result_denom !=""){
										Panel_A.result_nume = "", Panel_A.result_denom = "";
										blockArray[i].use = false, blockArray[i].obj.css("color","white");
										draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
										draw.clearDraw(ctx38, 150, 150);
										block36.obj.css("color","white"), block36.use = false;
									}									
								}								
								break;
							case "B_previous":
								if(blockArray[i].use == true){
									if(Panel_B.result_nume != "" || Panel_B.result_denom !=""){
										Panel_B.result_nume = "", Panel_B.result_denom = "";
										blockArray[i].use = false, blockArray[i].obj.css("color","white");
										draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
										draw.clearDraw(ctx42, 150, 150);
										block49.obj.css("color","white"), block49.use = false;
									}									
								}								
								break;
							case "C_previous":
								if(blockArray[i].use == true){
									if(Panel_C.result_nume != "" || Panel_C.result_denom !=""){
										Panel_C.result_nume = "", Panel_C.result_denom = "";
										blockArray[i].use = false, blockArray[i].obj.css("color","white");
										draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
										draw.clearDraw(ctx46, 150, 150);
										block62.obj.css("color","white"), block62.use = false;
									}									
								}								
								break;
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

function touchmove(event){
	event.changedTouches = event.targetTouches;
	for(var i=0; i<event.changedTouches.length; i++){
		var block = blockMap[event.changedTouches[i].identifier];	
		
		if(block){
			switch(block.position){
				case "center":  //中央區域物件
					
					break;
				case "personal_area":  //個人區域
					block.x = block.offset.x + event.changedTouches[i].pageX;
					block.y = block.offset.y + event.changedTouches[i].pageY;	
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
						$("#"+block.blockName).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) ","scale(0.7)"].join(""));						
					}				
					eval(block.blockName+".x=block.x"),eval(block.blockName+".y=block.y");
					switch(block.orientation){
							case "left":
							if(block.x >240 && block.x<370){	//
								handleObj.showRubberBandArea("A_rubber_area");							
								for(var j=101; j<=103; j++){	//
									if($("#"+block.blockName).offset().top>= blockArray[j].obj.offset().top && $("#"+block.blockName).offset().left>= blockArray[j].obj.offset().left 
									&& $("#"+block.blockName).offset().top<= blockArray[j].obj.offset().top+120 && $("#"+block.blockName).offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.empty =="true"){
										$("#"+blockArray[j].linkLine).css("display","block");
									}else{
										$("#"+blockArray[j].linkLine).css("display","none");
									}
								}													
							}else{
								handleObj.hideRubberBandArea("A_rubber_area");
							}
						break;
					case "bottom":
						if(block.y >-360 && block.y<-182){	//
								handleObj.showRubberBandArea("B_rubber_area");							
								for(var j=104; j<=106; j++){	//
									if($("#"+block.blockName).offset().top>= blockArray[j].obj.offset().top && $("#"+block.blockName).offset().left>= blockArray[j].obj.offset().left 
									&& $("#"+block.blockName).offset().top<= blockArray[j].obj.offset().top+120 && $("#"+block.blockName).offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.empty =="true"){
										$("#"+blockArray[j].linkLine).css("display","block");
									}else{
										$("#"+blockArray[j].linkLine).css("display","none");
									}
								}													
							}else{
								handleObj.hideRubberBandArea("B_rubber_area");
							}
						break;
					case "right":
						if(block.x >-340 && block.x<-185){	//
								handleObj.showRubberBandArea("C_rubber_area");							
								for(var j=107; j<=109; j++){	//
									if($("#"+block.blockName).offset().top>= blockArray[j].obj.offset().top && $("#"+block.blockName).offset().left>= blockArray[j].obj.offset().left 
									&& $("#"+block.blockName).offset().top<= blockArray[j].obj.offset().top+120 && $("#"+block.blockName).offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.empty =="true"){
										$("#"+blockArray[j].linkLine).css("display","block");
									}else{
										$("#"+blockArray[j].linkLine).css("display","none");
									}
								}													
							}else{
								handleObj.hideRubberBandArea("C_rubber_area");
							}
						break;
					}					
					break;
				case "personal_panel":
					switch(block.id){
						case "A_count":
								block.x = block.offset.x + event.changedTouches[i].pageX;
								block.y = block.offset.y + event.changedTouches[i].pageY;	
								$("#"+block.ansObj).css("-webkit-transform",["translate3d(",block.x,"px, ",block.y,"px, 0px) ","rotate(",90,"deg)"].join(""));			
													
								if(Panel_A.result_nume =="" && Panel_A.result_denom =="" && $("#"+block.ansObj).offset().top>=400 && $("#"+block.ansObj).offset().top <=500 	//當經過時，告知目前這個位置可以填值
								&& $("#"+block.ansObj).offset().left>=426 && $("#"+block.ansObj).offset().left<=550){	//擴約分數值
									ctx39.clearRect(322,5,34,36), ctx39.clearRect(322,55,34,36);
									ctx39.fillText(block.value,335,40), ctx39.fillText(block.value,335,90);
								}
								else if(Panel_A.extend !="" && $("#"+block.ansObj).offset().top>=557 && $("#"+block.ansObj).offset().top<=666 
								&& $("#"+block.ansObj).offset().left>=499 && $("#"+block.ansObj).offset().left<=554){	//分子
									if(Panel_A.result_denom ==""){
										ctx39.clearRect(475,55,52,40);
									}
									ctx39.clearRect(475,5,52,40);
									ctx39.fillText(block.value,500,40);
								}
								else if(Panel_A.extend !="" && $("#"+block.ansObj).offset().top>=557 && $("#"+block.ansObj).offset().top<=666 
								&& $("#"+block.ansObj).offset().left>=427 && $("#"+block.ansObj).offset().left<=493){	//分母
									if(Panel_A.result_nume ==""){
										ctx39.clearRect(475,5,52,40);
									}
									ctx39.clearRect(475,55,52,40);
									ctx39.fillText(block.value,500,90);
								}
								else{
									draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								}
								break;
							case "B_count":
								block.x = block.offset.x + event.changedTouches[i].pageX;
								block.y = block.offset.y + event.changedTouches[i].pageY;	
								$("#"+block.ansObj).css("-webkit-transform",["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
								
								if(Panel_B.result_nume =="" && Panel_B.result_denom =="" && $("#"+block.ansObj).offset().top>=1077 && $("#"+block.ansObj).offset().top <=1196 
								&& $("#"+block.ansObj).offset().left>=1088 && $("#"+block.ansObj).offset().left<=1180){	//擴、約分數值
									ctx43.clearRect(322,5,34,36), ctx43.clearRect(322,55,34,36);
									ctx43.fillText(block.value,335,40), ctx43.fillText(block.value,335,90);
								}
								else if(Panel_B.extend !="" && $("#"+block.ansObj).offset().top>=1076 && $("#"+block.ansObj).offset().top<=1124 
								&& $("#"+block.ansObj).offset().left>=1246 && $("#"+block.ansObj).offset().left<=1357){	//分子
									if(Panel_B.result_denom ==""){
										ctx43.clearRect(475,55,52,40);
									}
									ctx43.clearRect(475,5,52,40);
									ctx43.fillText(block.value,500,40);
								}
								else if(Panel_B.extend !="" && $("#"+block.ansObj).offset().top>=1131 && $("#"+block.ansObj).offset().top<=1191 
								&& $("#"+block.ansObj).offset().left>=1246 && $("#"+block.ansObj).offset().left<=1357){	//分母
									if(Panel_B.result_nume ==""){
										ctx43.clearRect(475,5,52,40);
									}
									ctx43.clearRect(475,55,52,40);
									ctx43.fillText(block.value,500,90);
								}
								else{
									draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								}
								break;
							case "C_count":
								block.x = block.offset.x + event.changedTouches[i].pageX;
								block.y = block.offset.y + event.changedTouches[i].pageY;	
								$("#"+block.ansObj).css("-webkit-transform",["translate3d(",block.x,"px, ",block.y,"px, 0px) ","rotate(",-90,"deg)"].join(""));
								
								if(Panel_C.result_nume =="" && Panel_C.result_denom =="" && $("#"+block.ansObj).offset().top>=382 && $("#"+block.ansObj).offset().top <=478 
								&& $("#"+block.ansObj).offset().left>=1677 && $("#"+block.ansObj).offset().left<=1795){	//擴約分數值
									ctx47.clearRect(322,5,34,36), ctx47.clearRect(322,55,34,36);
									ctx47.fillText(block.value,335,40), ctx47.fillText(block.value,335,90);
								}
								else if(Panel_C.extend !="" && $("#"+block.ansObj).offset().top>=201 && $("#"+block.ansObj).offset().top<=334 
								&& $("#"+block.ansObj).offset().left>=1678 && $("#"+block.ansObj).offset().left<=1723){	//分子
									if(Panel_C.result_denom ==""){
										ctx47.clearRect(475,55,52,40);
									}
									ctx47.clearRect(475,5,52,40);
									ctx47.fillText(block.value,500,40);
								}
								else if(Panel_C.extend !="" && $("#"+block.ansObj).offset().top>=201 && $("#"+block.ansObj).offset().top<=334 
								&& $("#"+block.ansObj).offset().left>=1732 && $("#"+block.ansObj).offset().left<=1797){	//分母
									if(Panel_C.result_nume ==""){
										ctx47.clearRect(475,5,52,40);
									}
									ctx47.clearRect(475,55,52,40);
									ctx47.fillText(block.value,500,90);
								}								
								else{
									draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								}								
								break;
						}						
					break;
				case "scatter":  //產生的圖像/字符物件
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
						block.x = block.offset.x + event.changedTouches[i].pageX;
						block.y = block.offset.y + event.changedTouches[i].pageY;	
						block.obj.css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) ","scale(0.7)"].join(""));
					}
					switch(block.orientation){		//橡皮筋功能(丟圖到中央區域)
						case "left":  //Member A的操作
							if(block.x >240 && block.x<370){	//
								handleObj.showRubberBandArea("A_rubber_area");							
								for(var j=101; j<=103; j++){	//
									if(block.obj.offset().top>= blockArray[j].obj.offset().top && block.obj.offset().left>= blockArray[j].obj.offset().left 
									&& block.obj.offset().top<= blockArray[j].obj.offset().top+120 && block.obj.offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.empty =="true"){
										$("#"+blockArray[j].linkLine).css("display","block");
									}else{
										$("#"+blockArray[j].linkLine).css("display","none");
									}
								}													
							}else{
								handleObj.hideRubberBandArea("A_rubber_area");
							}
							break;
						case "bottom":  //Member B的操作
							if(block.y >-360 && block.y<-182){	//
								handleObj.showRubberBandArea("B_rubber_area");							
								for(var j=104; j<=106; j++){	//
									if(block.obj.offset().top>= blockArray[j].obj.offset().top && block.obj.offset().left>= blockArray[j].obj.offset().left 
									&& block.obj.offset().top<= blockArray[j].obj.offset().top+120 && block.obj.offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.empty =="true"){
										$("#"+blockArray[j].linkLine).css("display","block");
									}else{
										$("#"+blockArray[j].linkLine).css("display","none");
									}
								}													
							}else{
								handleObj.hideRubberBandArea("B_rubber_area");
							}
							break;
						case "right":  //Member C的操作
							if(block.x >-340 && block.x<-185){	//
								handleObj.showRubberBandArea("C_rubber_area");							
								for(var j=107; j<=109; j++){	//
									if(block.obj.offset().top>= blockArray[j].obj.offset().top && block.obj.offset().left>= blockArray[j].obj.offset().left 
									&& block.obj.offset().top<= blockArray[j].obj.offset().top+120 && block.obj.offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.empty =="true"){
										$("#"+blockArray[j].linkLine).css("display","block");
									}else{
										$("#"+blockArray[j].linkLine).css("display","none");
									}
								}													
							}else{
								handleObj.hideRubberBandArea("C_rubber_area");
							}
							break;
					}			
					break;
			}
		}
	}	
	event.preventDefault();
}

function touchend(event){
	event.changedTouches = event.targetTouches;
	for(var i=0; i<event.changedTouches.length; i++){
		var block = blockMap[event.changedTouches[i].identifier];		
		if(block){
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
			if(block.position == "personal_area" && block.content =="graphic"){	//直接從個人面板拉出來(Rubber band)
				switch(block.orientation){
					case "left":  //Member A的操作
						for(var j=101; j<=103; j++){
							if($("#"+block.blockName).offset().left>=blockArray[j].obj.offset().left && $("#"+block.blockName).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.blockName).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.blockName).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty =="true"
								&& eval(block.blockName).corrd == true){
									$("#"+block.blockName).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										handleObj.showMoveResult(eval(block.blockName));	//顯示填答結果
										this.remove();										
									});	
									$("#"+blockArray[j].linkLine).css("display","none");
									handleObj.hideRubberBandArea("A_rubber_area");									
									switch(block.id){	//儲存回收圖卡功能所需的資料
										case "member_A_fraction_graphic_first":
											block114.obj.css("display","block");
											block114.start = block16;	//儲存拉出圖卡的起始區域
											block114.picData = eval(block.blockName);	//儲存圖卡資料
											block114.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block114.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_second":
											block115.obj.css("display","block");
											block115.start = block17;	//儲存拉出圖卡的起始區域
											block115.picData = eval(block.blockName);
											block115.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block115.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_third":
											block116.obj.css("display","block");
											block116.start = block18;	//儲存拉出圖卡的起始區域
											block116.picData = eval(block.blockName);
											block116.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block116.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}															
							}
						}
						break;
					case "bottom":  //Member B的操作
						for(var j=104; j<=106; j++){	
							if($("#"+block.blockName).offset().left>=blockArray[j].obj.offset().left && $("#"+block.blockName).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.blockName).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.blockName).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty =="true"
								&& eval(block.blockName).corrd == true){
									$("#"+block.blockName).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										handleObj.showMoveResult(eval(block.blockName));	//顯示填答結果
										this.remove();
									});	
									$("#"+blockArray[j].linkLine).css("display","none");
									handleObj.hideRubberBandArea("B_rubber_area");									
									switch(block.id){	//儲存回收圖卡功能所需的資料
										case "member_B_fraction_graphic_first":
											block117.obj.css("display","block");
											block117.start = block19;	//儲存拉出圖卡的起始區域
											block117.picData = eval(block.blockName);
											block117.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block117.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_second":
											block118.obj.css("display","block");
											block118.start = block20;	//儲存拉出圖卡的起始區域
											block118.picData = eval(block.blockName);
											block118.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block118.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_third":
											block119.obj.css("display","block");
											block119.start = block21;	//儲存拉出圖卡的起始區域
											block119.picData = eval(block.blockName);
											block119.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block119.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																
							}
						}
						break;
					case "right":  //Member C的操作
						for(var j=107; j<=109; j++){	
							if($("#"+block.blockName).offset().left>=blockArray[j].obj.offset().left && $("#"+block.blockName).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.blockName).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.blockName).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty =="true"
								&& eval(block.blockName).corrd == true){
									$("#"+block.blockName).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										handleObj.showMoveResult(eval(block.blockName));	//顯示填答結果
										this.remove();
									});	
									$("#"+blockArray[j].linkLine).css("display","none");
									handleObj.hideRubberBandArea("C_rubber_area");									
									switch(block.id){	//儲存回收圖卡功能所需的資料
										case "member_C_fraction_graphic_first":
											block120.obj.css("display","block");
											block120.start = block22;	//儲存拉出圖卡的起始區域
											block120.picData = eval(block.blockName);
											block120.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block120.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_second":
											block121.obj.css("display","block");
											block121.start = block23;	//儲存拉出圖卡的起始區域
											block121.picData = eval(block.blockName);
											block121.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block121.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_third":
											block122.obj.css("display","block");
											block122.start = block24;	//儲存拉出圖卡的起始區域
											block122.picData = eval(block.blockName);
											block122.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block122.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																	
							}
						}
						break;
				}
			}
			
			if(block.position == "scatter" && block.content =="graphic"){	//散落在區域中(Rubber band)
				switch(block.orientation){
					case "left":  //Member A的操作
						for(var j=101; j<=103; j++){
							if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty =="true"
								&& block.corrd == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										handleObj.showMoveResult(eval(block.id));	//顯示填答結果
										this.remove();										
									});	
									$("#"+blockArray[j].linkLine).css("display","none");
									handleObj.hideRubberBandArea("A_rubber_area");									
									switch(block.from){	//儲存回收圖卡功能所需的資料
										case "member_A_fraction_graphic_first":
											block114.obj.css("display","block");
											block114.start = block16;	//儲存拉出圖卡的起始區域
											block114.picData = eval(block.blockName);
											block114.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block114.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_second":
											block115.obj.css("display","block");
											block115.start = block17;	//儲存拉出圖卡的起始區域
											block115.picData = eval(block.blockName);
											block115.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block115.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_third":
											block116.obj.css("display","block");
											block116.start = block18;	//儲存拉出圖卡的起始區域
											block116.picData = eval(block.blockName);
											block116.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block116.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																	
							}
						}
						break;
					case "bottom":  //Member B的操作
						for(var j=104; j<=106; j++){	
							if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty =="true"
								&& block.corrd == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										handleObj.showMoveResult(eval(block.id));	//顯示填答結果
										this.remove();
									});	
									$("#"+blockArray[j].linkLine).css("display","none");
									handleObj.hideRubberBandArea("B_rubber_area");									
									switch(block.from){	//儲存回收圖卡功能所需的資料
										case "member_B_fraction_graphic_first":
											block117.obj.css("display","block");
											block117.start = block19;	//儲存拉出圖卡的起始區域
											block117.picData = eval(block.blockName);
											block117.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block117.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_second":
											block118.obj.css("display","block");
											block118.start = block20;	//儲存拉出圖卡的起始區域
											block118.picData = eval(block.blockName);
											block118.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block118.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_third":
											block119.obj.css("display","block");
											block119.start = block21;	//儲存拉出圖卡的起始區域
											block119.picData = eval(block.blockName);
											block119.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block119.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																	
							}
						}
						break;
					case "right":  //Member C的操作
						for(var j=107; j<=109; j++){	
							if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty =="true"
								&& block.corrd == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										handleObj.showMoveResult(eval(block.id));	//顯示填答結果
										this.remove();
									});	
									$("#"+blockArray[j].linkLine).css("display","none");
									handleObj.hideRubberBandArea("C_rubber_area");		
									console.log(block.id);							
									switch(block.from){	//儲存回收圖卡功能所需的資料
										case "member_C_fraction_graphic_first":
											block120.obj.css("display","block");
											block120.start = block22;	//儲存拉出圖卡的起始區域
											block120.picData = eval(block.blockName);
											block120.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block120.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_second":
											block121.obj.css("display","block");
											block121.start = block23;	//儲存拉出圖卡的起始區域
											block121.picData = eval(block.blockName);
											block121.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block121.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_third":
											block122.obj.css("display","block");
											block122.start = block24;	//儲存拉出圖卡的起始區域
											block122.picData = eval(block.blockName);
											block122.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block122.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																	
							}
						}
						break;
				}
			}			
			
			for(var j=15; j<=23; j++){//判斷物件進入個人圖像填空區
				if((block.obj.offset().left+90 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+90 >=blockArray[j].obj.offset().top) && 	
					(block.obj.offset().left+90 <=blockArray[j].obj.offset().left+200) && (block.obj.offset().top+90 <=blockArray[j].obj.offset().top+200) &&(blockArray[j].empty =="true")
					&& (block.position =="scatter") && (block.content == "graphic") && (block.id == blockArray[j].blockName)){
					//console.log(block.id);
					draw.drawGra(eval(blockArray[j].pen), block.src);	//ctx, imgPath		畫上圖像
					blockArray[j].denom = block.denom;
					blockArray[j].nume = block.nume;
					blockArray[j].value = block.value;	
					blockArray[j].contain = block.id;		
					blockArray[j].blockName = block.id;		
					blockArray[j].original_nume = block.original_nume;
					blockArray[j].original_denom = block.original_denom;
					blockArray[j].max_extend = block.max_extend;
					blockArray[j].src = block.src;
					blockArray[j].corresponding = block.corrd;
					blockArray[j].empty = "false";
					//draw.draSym(eval(blockArray[j-9].pen), blockArray[j].denom, blockArray[j].nume);	//畫上字符
					
					if(first_check == false){	//當在配對圖卡時，才儲存圖卡原本的路徑
						blockArray[j].first_path = block.src;
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
					block.obj.remove();
				}
				if(block.id == blockArray[j].id){
					block.x =0, block.y=0;
				}
				checkCorresponding();
				draw.errorReport();								
			}
			
		/*	for(var j=6; j<=14; j++){//判斷物件進入個人字符填空區
				if((block.obj.offset().left+90 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+90 >=blockArray[j].obj.offset().top) && 	//圖像進入中央區域時
				(block.obj.offset().left+90 <=blockArray[j].obj.offset().left+200) && (block.obj.offset().top+90 <=blockArray[j].obj.offset().top+200) &&(blockArray[j].empty =="true")
				&& (block.position == "scatter") && block.content =="symbol"){
					draw.draSym(eval(blockArray[j].pen), block.denom, block.nume);	//ctx, denom, nume
					blockArray[j].denom = block.denom;
					blockArray[j].nume = block.nume;
					blockArray[j].value = block.value;	
					blockArray[j].contain = block.id;		
					blockArray[j].blockName = block.id;						
					blockArray[j].empty = "false";
					//draw.draSym(eval(blockArray[j-9].pen), blockArray[j].denom, blockArray[j].nume);	//畫上字符
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
				if(block.id == blockArray[j].id){
					block.x =0, block.y=0;
				}
				checkCorresponding();	
				draw.errorReport();				
			}		*/	
						
			if(block.id =="A_count"){	//輸入數值的判定
				if(Panel_A.result_nume =="" && Panel_A.result_denom =="" && $("#"+block.ansObj).offset().top>=400 && $("#"+block.ansObj).offset().top <=500 
				&& $("#"+block.ansObj).offset().left>=426 && $("#"+block.ansObj).offset().left<=550){	//填入擴、約分數值
					Panel_A.extend = block.value;
					switch(Panel_A.operator){
						case "÷":
							if((Panel_A.original_denom % Panel_A.extend ==0) &&(Panel_A.original_nume % Panel_A.extend ==0)){
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								draw.drawCutGra(eval(block30.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.original_nume, Panel_A.original_denom, Panel_A.extend, Panel_A.operator);								
								$("#A_message").html("");
							}else{
								Panel_A.extend ="";
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								$("#A_message").html("這個數值除不盡");
								draw.clearDraw(eval(block30.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
								
							}
							break;
						case "×":
							if(Panel_A.original_denom * Panel_A.extend <=30){
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								draw.drawCutGra(eval(block30.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.original_nume, Panel_A.original_denom, Panel_A.extend, Panel_A.operator);
								$("#A_message").html("");
							}else{
								Panel_A.extend ="";
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								$("#A_message").html("這個數值過大");
								draw.clearDraw(eval(block30.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;
					}
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;					
				}
				
				else if(Panel_A.extend !="" && $("#"+block.ansObj).offset().top>=557 && $("#"+block.ansObj).offset().top<=666 
				&& $("#"+block.ansObj).offset().left>=499 && $("#"+block.ansObj).offset().left<=554){	//填完擴充的數值後，進行結果的填值(分子部分)					
					Panel_A.result_nume = block.value;					
					switch(Panel_A.operator){
						case "÷":
							if(Panel_A.result_nume == Panel_A.original_nume / Panel_A.extend){
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								block85.obj.css("color","black"), block85.use = true;
								$("#A_message").html("");
							}else{
								Panel_A.result_nume = "";
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								draw.clearDraw(eval(block31.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_A.result_nume == Panel_A.original_nume * Panel_A.extend){
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								block85.obj.css("color","black"), block85.use = true;
								$("#A_message").html("");
							}else{
								Panel_A.result_nume = "";
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								draw.clearDraw(eval(block31.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_A.result_nume !="" && Panel_A.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block31.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.result_nume, Panel_A.result_denom, Panel_A.extend, Panel_A.operator); 
						block36.use = true, block36.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;					
				}
				
				else if(Panel_A.extend !="" && $("#"+block.ansObj).offset().top>=557 && $("#"+block.ansObj).offset().top<=666 
				&& $("#"+block.ansObj).offset().left>=427 && $("#"+block.ansObj).offset().left<=493){//填完擴充的數值後，進行結果的填值(分母部分)					
					Panel_A.result_denom = block.value;					
					switch(Panel_A.operator){
						case "÷":
							if(Panel_A.result_denom == Panel_A.original_denom / Panel_A.extend){
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								block85.obj.css("color","black"), block85.use = true;
								$("#A_message").html("");
							}else{
								Panel_A.result_denom = "";
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								draw.clearDraw(eval(block31.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_A.result_denom == Panel_A.original_denom * Panel_A.extend){
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								block85.obj.css("color","black"), block85.use = true;
								$("#A_message").html("");
							}else{
								Panel_A.result_denom = "";
								draw.drawPanelSym(eval(block26.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								draw.clearDraw(eval(block31.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_A.result_nume !="" && Panel_A.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block31.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.result_nume, Panel_A.result_denom, Panel_A.extend, Panel_A.operator); 
						block36.use = true, block36.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}else{
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}
			}
			
			else if(block.id =="B_count"){
				if(Panel_B.result_nume =="" && Panel_B.result_denom =="" && $("#"+block.ansObj).offset().top>=1077 && $("#"+block.ansObj).offset().top <=1196 
				&& $("#"+block.ansObj).offset().left>=1088 && $("#"+block.ansObj).offset().left<=1180){	//填入擴、約分數值
					Panel_B.extend = block.value;
					switch(Panel_B.operator){
						case "÷":
							if((Panel_B.original_denom % Panel_B.extend ==0) &&(Panel_B.original_nume % Panel_B.extend ==0)){
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								draw.drawCutGra(eval(block43.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.original_nume, Panel_B.original_denom, Panel_B.extend, Panel_B.operator);								
								$("#B_message").html("");
							}else{
								Panel_B.extend ="";
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								$("#B_message").html("這個數值除不盡");
								draw.clearDraw(eval(block43.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_B.original_denom * Panel_B.extend <=30){
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								draw.drawCutGra(eval(block43.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.original_nume, Panel_B.original_denom, Panel_B.extend, Panel_B.operator);
								$("#B_message").html("");
							}else{
								Panel_B.extend ="";
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								$("#B_message").html("這個數值過大");
								draw.clearDraw(eval(block43.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;
					}						
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}else if(Panel_B.extend !="" && $("#"+block.ansObj).offset().top>=1076 && $("#"+block.ansObj).offset().top<=1124 
				&& $("#"+block.ansObj).offset().left>=1246 && $("#"+block.ansObj).offset().left<=1357){	//填完擴充的數值後，進行結果的填值(分子部分)
					Panel_B.result_nume = block.value;					
					switch(Panel_B.operator){
						case "÷":
							if(Panel_B.result_nume == Panel_B.original_nume / Panel_B.extend){
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								block86.obj.css("color","black"), block86.use = true;
								$("#B_message").html("");
							}else{
								Panel_B.result_nume ="";
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								draw.clearDraw(eval(block44.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_B.result_nume == Panel_B.original_nume * Panel_B.extend){
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								block86.obj.css("color","black"), block86.use = true;
								$("#B_message").html("");
							}else{
								Panel_B.result_nume ="";
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								draw.clearDraw(eval(block44.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_B.result_nume !="" && Panel_B.result_denom != "" ){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block44.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.result_nume, Panel_B.result_denom, Panel_B.extend, Panel_B.operator); 
						block49.use = true, block49.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}
				
				else if(Panel_B.extend !="" && $("#"+block.ansObj).offset().top>=1131 && $("#"+block.ansObj).offset().top<=1191 
				&& $("#"+block.ansObj).offset().left>=1246 && $("#"+block.ansObj).offset().left<=1357){//填完擴充的數值後，進行結果的填值(分母部分)
					Panel_B.result_denom = block.value;
					switch(Panel_B.operator){
						case "÷":
							if(Panel_B.result_denom == Panel_B.original_denom / Panel_B.extend){
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								block86.obj.css("color","black"), block86.use = true;
								$("#B_message").html("");
							}else{
								Panel_B.result_denom = "";
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								draw.clearDraw(eval(block44.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_B.result_denom == Panel_B.original_denom * Panel_B.extend){
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								block86.obj.css("color","black"), block86.use = true;
								$("#B_message").html("");
							}else{
								Panel_B.result_denom = "";
								draw.drawPanelSym(eval(block39.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								draw.clearDraw(eval(block44.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_B.result_nume !="" && Panel_B.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block44.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.result_nume, Panel_B.result_denom, Panel_B.extend, Panel_B.operator); 
						block49.use = true, block49.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}else{
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}
			}
			
			else if(block.id =="C_count"){
				if(Panel_C.result_nume =="" && Panel_C.result_denom =="" && $("#"+block.ansObj).offset().top>=382 && $("#"+block.ansObj).offset().top <=478 
				&& $("#"+block.ansObj).offset().left>=1677 && $("#"+block.ansObj).offset().left<=1795){	//填入擴、約分數值				
					Panel_C.extend = block.value;
					switch(Panel_C.operator){
						case "÷":
							if((Panel_C.original_denom % Panel_C.extend ==0) &&(Panel_C.original_nume % Panel_C.extend ==0)){
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								draw.drawCutGra(eval(block56.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.original_nume, Panel_C.original_denom, Panel_C.extend, Panel_C.operator);								
								$("#C_message").html("");
							}else{
								Panel_C.extend = "";
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								$("#C_message").html("這個數值除不盡");
								draw.clearDraw(eval(block56.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_C.original_denom * Panel_C.extend <=30){
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								draw.drawCutGra(eval(block56.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.original_nume, Panel_C.original_denom, Panel_C.extend, Panel_C.operator);
								$("#C_message").html("");
							}else{
								Panel_C.extend = "";
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								$("#C_message").html("這個數值過大");
								draw.clearDraw(eval(block56.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;
					}
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}else if(Panel_C.extend !="" && $("#"+block.ansObj).offset().top>=201 && $("#"+block.ansObj).offset().top<=334 
				&& $("#"+block.ansObj).offset().left>=1678 && $("#"+block.ansObj).offset().left<=1723){	//填完擴充的數值後，進行結果的填值(分子部分)
					Panel_C.result_nume = block.value;
					switch(Panel_C.operator){
						case "÷":
							if(Panel_C.result_nume == Panel_C.original_nume / Panel_C.extend){
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								block87.obj.css("color","black"), block87.use = true;
								$("#C_message").html("");
							}else{
								Panel_C.result_nume = "";
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								draw.clearDraw(eval(block57.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_C.result_nume == Panel_C.original_nume * Panel_C.extend){
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								block87.obj.css("color","black"), block87.use = true;
								$("#C_message").html("");
							}else{
								Panel_C.result_nume = "";
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								draw.clearDraw(eval(block57.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_C.result_nume !="" && Panel_C.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block57.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.result_nume, Panel_C.result_denom, Panel_C.extend, Panel_C.operator); 
						block62.use = true, block62.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}else if(Panel_C.extend !="" && $("#"+block.ansObj).offset().top>=204 && $("#"+block.ansObj).offset().top<=334 
				&& $("#"+block.ansObj).offset().left>=1732 && $("#"+block.ansObj).offset().left<=1797){//填完擴充的數值後，進行結果的填值(分母部分)
					Panel_C.result_denom = block.value;
					switch(Panel_C.operator){
						case "÷":
							if(Panel_C.result_denom == Panel_C.original_denom / Panel_C.extend){
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								block87.obj.css("color","black"), block87.use = true;
								$("#C_message").html("");
							}else{
								Panel_C.result_denom = "";
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								draw.clearDraw(eval(block57.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_C.result_denom == Panel_C.original_denom * Panel_C.extend){
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								block87.obj.css("color","black"), block87.use = true;
								$("#C_message").html("");
							}else{
								Panel_C.result_denom = "";
								draw.drawPanelSym(eval(block52.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								draw.clearDraw(eval(block57.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_C.result_nume !="" && Panel_C.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block57.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.result_nume, Panel_C.result_denom, Panel_C.extend, Panel_C.operator); 
						block62.use = true, block62.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}else{
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}
			}
		}					
		delete blockMap[event.changedTouches[i].identifier];
	}
}


timer = setInterval(calTotalTime,1000);	
initial();
document.addEventListener('touchstart', touchstart, false);//觸發touchstart事件
document.addEventListener('touchmove', touchmove, false);//觸發touchmove事件
document.addEventListener('touchend', touchend, false);//觸發touchend事件

addEventListener('keydown', function(event){
	switch(event.keyCode){
		case 65: //A
			correctCouple();
			break;
		case 66: //B
			$("#direct").css("display","block");
			$("#process").css("display","block");
			$("#result").css("display","block");
			break;
		case 67: //C
			handleObj.randomGraSym();
			break;
		case 68: //D
			draw.recoverGraSym();
			break;
		case 69: //E
			switch(question.next){
				case false:
					block1.empty = "false", block2.empty = "false";
					question.operator[0] = "+";
					block1.value = block3.value /2, block2.value= block3.value/2;
					break;
				case true:
					block91.empty = "false", block92.empty = "false", block93.empty = "false";
					question.first_operator[0] = "+", question.second_operator[0] = "+";
					block94.value = 3;
					block91.value =1, block92.value= 1, block93.value= 1;
					break;
			}			
			check();
			break;
		case 70: //F
			$("#blank_4").css("display","block"), $("#blank_5").css("display","block"), $("#blank_6").css("display","block"), $("#blank_7").css("display","block");
			$("#blank_4").css("opacity",1), $("#blank_5").css("opacity",1), $("#blank_6").css("opacity",1), $("#blank_7").css("opacity",1);
			$("#central_symbol_4").css("display","block"), $("#central_symbol_5").css("display","block"), $("#central_symbol_6").css("display","block"), $("#central_symbol_7").css("display","block");
			$("#central_symbol_4").css("opacity",1), $("#central_symbol_5").css("opacity",1), $("#central_symbol_6").css("opacity",1), $("#central_symbol_7").css("opacity",1);
			$("#operator_mark3").css("display","block"), $("#operator_mark4").css("display","block"), $("#operator_mark5").css("display","block");
			$("#operator_mark3").css("opacity",1), $("#operator_mark4").css("opacity",1), $("#operator_mark5").css("opacity",1);
			break;
		case 71: //G
			block111.obj.css("display","block"), block112.obj.css("display","block"), block113.obj.css("display","block");
			break;
		case 72: //H
			switch(question.next){
				case false: //第一題
					$("#"+block102.linkLine).css("display", "block"), $("#"+block103.linkLine).css("display", "block");
					break;
				case true: //第二題
					$("#"+block102.linkLine).css("display", "block"), $("#"+block103.linkLine).css("display", "block"), $("#"+block104.linkLine).css("display", "block");
					break;
			}			
			break; 
		case 73: //I
			switch(question.next){
				case false:
					$("#"+block105.linkLine).css("display", "block"), $("#"+block106.linkLine).css("display", "block");
					break;
				case true:
					$("#"+block105.linkLine).css("display", "block"), $("#"+block106.linkLine).css("display", "block"), $("#"+block107.linkLine).css("display", "block");
					break;
			}			
			break;
		case 74: //J
			switch(question.next){
				case false:
					$("#"+block108.linkLine).css("display", "block"), $("#"+block109.linkLine).css("display", "block");
					break;
				case true:
					$("#"+block108.linkLine).css("display", "block"), $("#"+block109.linkLine).css("display", "block"), $("#"+block110.linkLine).css("display", "block");
					break;
			}			
			break;
	}
}, false);
