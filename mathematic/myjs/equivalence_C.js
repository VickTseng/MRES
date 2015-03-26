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
	member_Sym.A_Sym.nume[0] = question_fraction.nume[0],  member_Sym.A_Sym.denom[0] = question_fraction.denom[0];
	member_Sym.A_Sym.nume[1] = question_fraction.nume[3],  member_Sym.A_Sym.denom[1] = question_fraction.denom[3];
	member_Sym.A_Sym.nume[2] = question_fraction.nume[6],  member_Sym.A_Sym.denom[2] = question_fraction.denom[6];
	member_Sym.A_Sym.original_nume[0] = question_fraction.original_nume[0], member_Sym.A_Sym.original_denom[0] = question_fraction.original_denom[0];
	member_Sym.A_Sym.original_nume[1] = question_fraction.original_nume[3],  member_Sym.A_Sym.original_denom[1] = question_fraction.original_denom[3];
	member_Sym.A_Sym.original_nume[2] = question_fraction.original_nume[6],  member_Sym.A_Sym.original_denom[2] = question_fraction.original_denom[6];
			
	member_Sym.B_Sym.nume[0] = question_fraction.nume[1],  member_Sym.B_Sym.denom[0] = question_fraction.denom[1];
	member_Sym.B_Sym.nume[1] = question_fraction.nume[4],  member_Sym.B_Sym.denom[1] = question_fraction.denom[4];
	member_Sym.B_Sym.nume[2] = question_fraction.nume[7],  member_Sym.B_Sym.denom[2] = question_fraction.denom[7];
	member_Sym.B_Sym.original_nume[0] = question_fraction.original_nume[1],  member_Sym.B_Sym.original_denom[0] = question_fraction.original_denom[1];
	member_Sym.B_Sym.original_nume[1] = question_fraction.original_nume[4],  member_Sym.B_Sym.original_denom[1] = question_fraction.original_denom[4];
	member_Sym.B_Sym.original_nume[2] = question_fraction.original_nume[7],  member_Sym.B_Sym.original_denom[2] = question_fraction.original_denom[7];
			
	member_Sym.C_Sym.nume[0] = question_fraction.nume[2 ],  member_Sym.C_Sym.denom[0] = question_fraction.denom[2];
	member_Sym.C_Sym.nume[1] = question_fraction.nume[5],  member_Sym.C_Sym.denom[1] = question_fraction.denom[5];
	member_Sym.C_Sym.nume[2] = question_fraction.nume[8],  member_Sym.C_Sym.denom[2] = question_fraction.denom[8];
	member_Sym.C_Sym.original_nume[0] = question_fraction.original_nume[2],  member_Sym.C_Sym.original_denom[0] = question_fraction.original_denom[2];
	member_Sym.C_Sym.original_nume[1] = question_fraction.original_nume[5],  member_Sym.C_Sym.original_denom[1] = question_fraction.original_denom[5];
	member_Sym.C_Sym.original_nume[2] = question_fraction.original_nume[8],  member_Sym.C_Sym.original_denom[2] = question_fraction.original_denom[8];
	
	for(var i=5; i<=7; i++){	//指定member_A字符空格內的值
		eval("block"+i+".denom=member_Sym.A_Sym.denom["+(i-5)+"]");
		eval("block"+i+".nume=member_Sym.A_Sym.nume["+(i-5)+"]");
		eval("block"+i+".original_denom=member_Sym.A_Sym.original_denom["+(i-5)+"]");
		eval("block"+i+".original_nume=member_Sym.A_Sym.original_nume["+(i-5)+"]");
		eval("block"+i+".value=member_Sym.A_Sym.nume["+(i-5)+"] / "+"member_Sym.A_Sym.denom["+(i-5)+"]");
		eval("block"+i+".first_denom=member_Sym.A_Sym.denom["+(i-5)+"]");
		eval("block"+i+".first_nume=member_Sym.A_Sym.nume["+(i-5)+"]");
		eval("block"+i+".blockName='A_s"+(i-5)+"'");	
	}
	for(var i=8; i<=10; i++){	//指定member_B字符空格內的值
		eval("block"+i+".denom=member_Sym.B_Sym.denom["+(i-8)+"]");
		eval("block"+i+".nume=member_Sym.B_Sym.nume["+(i-8)+"]");
		eval("block"+i+".original_denom=member_Sym.B_Sym.original_denom["+(i-8)+"]");
		eval("block"+i+".original_nume=member_Sym.B_Sym.original_nume["+(i-8)+"]");
		eval("block"+i+".value=member_Sym.B_Sym.nume["+(i-8)+"] / "+"member_Sym.B_Sym.denom["+(i-8)+"]");
		eval("block"+i+".first_denom=member_Sym.B_Sym.denom["+(i-8)+"]");
		eval("block"+i+".first_nume=member_Sym.B_Sym.nume["+(i-8)+"]");
		eval("block"+i+".blockName='B_s"+(i-8)+"'");	
	}
	for(var i=11; i<=13; i++){	//指定member_C字符空格內的值
		eval("block"+i+".denom=member_Sym.C_Sym.denom["+(i-11)+"]");
		eval("block"+i+".nume=member_Sym.C_Sym.nume["+(i-11)+"]");
		eval("block"+i+".original_denom=member_Sym.C_Sym.original_denom["+(i-11)+"]");
		eval("block"+i+".original_nume=member_Sym.C_Sym.original_nume["+(i-11)+"]");
		eval("block"+i+".value=member_Sym.C_Sym.nume["+(i-11)+"] / "+"member_Sym.C_Sym.denom["+(i-11)+"]");
		eval("block"+i+".first_denom=member_Sym.C_Sym.denom["+(i-11)+"]");
		eval("block"+i+".first_nume=member_Sym.C_Sym.nume["+(i-11)+"]");
		eval("block"+i+".blockName='C_s"+(i-11)+"'");	
	}
	for(var i=14; i<=16; i++){	//指定member_A圖像空格內的值
		eval("block"+i+".denom=member_A.denom["+(i-14)+"]");
		eval("block"+i+".nume=member_A.nume["+(i-14)+"]");
		eval("block"+i+".value=member_A.nume["+(i-14)+"] / "+"member_A.denom["+(i-14)+"]");
		eval("block"+i+".original_denom=member_A.original_denom["+(i-14)+"]");
		eval("block"+i+".original_nume=member_A.original_nume["+(i-14)+"]");
		eval("block"+i+".max_extend=member_A.max_extend["+(i-14)+"]");
		eval("block"+i+".src=member_A.path["+(i-14)+"]");	
		eval("block"+i+".first_denom=member_Sym.A_Sym.denom["+(i-14)+"]");
		eval("block"+i+".first_nume=member_Sym.A_Sym.nume["+(i-14)+"]");
		eval("block"+i+".first_path=member_A.path["+(i-14)+"]");
		eval("block"+i+".blockName='A_"+(i-14)+"'");	
	}
	for(var i=17; i<=19; i++){	//指定member_B圖像空格內的值
		eval("block"+i+".denom=member_B.denom["+(i-17)+"]");
		eval("block"+i+".nume=member_B.nume["+(i-17)+"]");
		eval("block"+i+".value=member_B.nume["+(i-17)+"] / "+"member_B.denom["+(i-17)+"]");
		eval("block"+i+".original_denom=member_B.original_denom["+(i-17)+"]");
		eval("block"+i+".original_nume=member_B.original_nume["+(i-17)+"]");
		eval("block"+i+".max_extend=member_B.max_extend["+(i-17)+"]");
		eval("block"+i+".src=member_B.path["+(i-17)+"]");	
		eval("block"+i+".first_denom=member_Sym.B_Sym.denom["+(i-17)+"]");
		eval("block"+i+".first_nume=member_Sym.B_Sym.nume["+(i-17)+"]");
		eval("block"+i+".first_path=member_B.path["+(i-17)+"]");
		eval("block"+i+".blockName='B_"+(i-17)+"'");	
	}
	for(var i=20; i<=22; i++){	//指定member_C圖像空格內的值
		eval("block"+i+".denom=member_C.denom["+(i-20)+"]");
		eval("block"+i+".nume=member_C.nume["+(i-20)+"]");
		eval("block"+i+".value=member_C.nume["+(i-20)+"] / "+"member_C.denom["+(i-20)+"]");
		eval("block"+i+".original_denom=member_C.original_denom["+(i-20)+"]");
		eval("block"+i+".original_nume=member_C.original_nume["+(i-20)+"]");
		eval("block"+i+".max_extend=member_C.max_extend["+(i-20)+"]");
		eval("block"+i+".src=member_C.path["+(i-20)+"]");	
		eval("block"+i+".first_denom=member_Sym.C_Sym.denom["+(i-20)+"]");
		eval("block"+i+".first_nume=member_Sym.C_Sym.nume["+(i-20)+"]");
		eval("block"+i+".first_path=member_C.path["+(i-20)+"]");
		eval("block"+i+".blockName='C_"+(i-20)+"'");	
	}
	draw.initialMemberGra(member_A.path[0], member_A.path[1], member_A.path[2], member_B.path[0], member_B.path[1], member_B.path[2], member_C.path[0], member_C.path[1], member_C.path[2]);	//畫上A, B, C圖像
	draw.initialMemberSym(member_Sym.A_Sym, member_Sym.B_Sym, member_Sym.C_Sym);	//畫上A,B, C字符
	draw.errorReport();
	checkCorresponding();
	giveQuestion();
	window.onload = function(){	//載入頁面時，將圖卡及字符配對好
		correctCouple();
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_question.php", 
		{date:now.toString().substring(0,33), first_ques: central_ques.nume[0]+"_"+central_ques.denom[0],
		second_ques: central_ques.nume[1]+"_"+central_ques.denom[1],
		third_ques: central_ques.nume[2]+"_"+central_ques.denom[2]});//紀錄題目
		
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_member_card.php", 
		{date:now.toString().substring(0,33), ques: switchSymbol(ques_index), who: "member_A",
		gra_first: block14.nume+"_"+block14.denom, gra_second: block15.nume+"_"+block15.denom,
		gra_third: block16.nume+"_"+block16.denom});//儲存A所持有的圖卡
		
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_member_card.php", 
		{date:now.toString().substring(0,33), ques: switchSymbol(ques_index), who: "member_B",
		gra_first: block17.nume+"_"+block17.denom, gra_second: block18.nume+"_"+block18.denom,
		gra_third: block19.nume+"_"+block19.denom});//儲存B所持有的圖卡
		
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_member_card.php", 
		{date:now.toString().substring(0,33), ques: switchSymbol(ques_index), who: "member_C",
		gra_first: block20.nume+"_"+block20.denom, gra_second: block21.nume+"_"+block21.denom,
		gra_third: block22.nume+"_"+block22.denom});//儲存C所持有的圖卡
	}	
}

function calTotalTime(){	//計算總花費時間
	data_log.time ++;
	//	$("#time").html("目前花費的時間:"+time+"秒");
}

function nextStage(){	//進入下一階段活動
	if(A_next == true && B_next == true && C_next == true){
		window.location = "compare.html";
	}
}

function giveQuestion(){	//給予題目	
	block67.nume = central_ques.nume[0], block67.denom = central_ques.denom[0];		
	block67.original_nume = central_ques.original_nume[0], block67.original_denom = central_ques.original_denom[0];
	draw.drawNewMemberSym(eval(block67.pen),block67.denom, block67.nume);
	draw.drawQuesGra(eval(block83.pen), GivePic2(block67.original_denom,  block67.original_nume, block67.denom, block67.nume));
}

function GivePic(path, original_denom, original_nume, denom, nume){	//給予完整圖形路徑
	var pic = new Image();
	switch(path){
		case "cut":
			pic.src = "equivalence_pic/cut_pro/c"+original_denom+"_"+original_nume+"/c"+denom+"_"+nume+".png";
			return pic;
			break;
		case "result":
			pic.src = "equivalence_pic/r_proper/r"+original_denom+"_"+original_nume+"/r"+denom+"_"+nume+".png";
			return pic;
			break;
	}
}

function GivePic2(original_denom, original_nume, denom, nume){	//給予完整圖形路徑
	var pic = new Image();
	pic.src = "equivalence_pic/proper/"+original_denom+"_"+original_nume+"/"+denom+"_"+nume+".png";
	return pic;
}

function correctCouple(){	//直接顯示正確圖卡與字符的配對
	var symArray = [block5, block6, block7, block8, block9, block10, block11, block12, block13];
	var graArray = [block14, block15, block16, block17, block18, block19, block20, block21, block22];
	
	for(var i=0; i<9; i++){
		graArray[i].nume = symArray[i].nume;
		graArray[i].denom = symArray[i].denom;		
		graArray[i].original_nume = symArray[i].original_nume;
		graArray[i].original_denom = symArray[i].original_denom;	
		graArray[i].first_nume = symArray[i].first_nume;
		graArray[i].first_denom = symArray[i].first_denom;
		graArray[i].src = GivePic2(graArray[i].original_denom, graArray[i].original_nume, graArray[i].denom, graArray[i].nume);
		graArray[i].first_path =  GivePic2(graArray[i].original_denom, graArray[i].original_nume, graArray[i].denom, graArray[i].nume);
		graArray[i].corresponding = true;
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

function showCheck(){
	if(A_check == true && B_check == true && C_check == true){
		handleObj.clearObj();
		check();
	}
}

function switchSymbol(sym){	//轉換題號
	switch(sym){
		case 1:
			return "first";
			break;
		case 2:
			return "second";
			break;
		case 3:
			return "third";
			break;
	}
}

function check(){	//判斷對錯
	var cloze_gra = [block1, block2, block66];
	var cloze_sym = [block3, block4, block65];	
	var centralOriSym = [$("#Central_original_sym1"), $("#Central_original_sym2"), $("#Central_original_sym3")];
	var centralOriGra = [$("#Central_original_gra1"), $("#Central_original_gra2"), $("#Central_original_gra3")];
	var centralextendSym = [$("#central_extendSym1"), $("#central_extendSym2"), $("#central_extendSym3")];
	var centralextendGra = [$("#central_extendGra1"), $("#central_extendGra2"), $("#central_extendGra3")];	
	var otherObject = [$("#original1"), $("#original2"), $("#original3"), $("#extend1"), $("#extend2"), $("#extend3"), $("#link1"), $("#link2"), $("#link3"), $("#link4"), $("#link5"), $("#link6")];
	handleObj.randomGraSym();
	draw.recoverGraSym();	
	handleObj.hideBackButton();
	
	if(block1.use == false && block2.use == false && block66.use == false){		//假如三個空格的值都填對了
		handleObj.createResultBox("correct_report","correct",500,1050,"bottom");	//id, answer, top, left, position
		$("#correct_report").css("webkit-transform","scale(3)");
			$("#correct_report").animate({top:600, left:1050},1000, function(){
				this.remove();
			});
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_total_time.php", 
		{time: data_log.time, date:now.toString().substring(0,33), ques: switchSymbol(ques_index)});//儲存此題的完成時間
		data_log.time = 0; //將時間歸零
		
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_times.php", 
		{date:now.toString().substring(0,33), ques: switchSymbol(ques_index), 
		A_gra1: "A_gra_first", A_gra2: "A_gra_second", A_gra3: "A_gra_third",
		B_gra1: "B_gra_first", B_gra2: "B_gra_second", B_gra3: "B_gra_third",
		C_gra1: "C_gra_first", C_gra2: "C_gra_second", C_gra3: "C_gra_third",
		A_gra1_times: data_log.member_A_trans_times.gra_first, 
		A_gra2_times: data_log.member_A_trans_times.gra_second,
		A_gra3_times: data_log.member_A_trans_times.gra_third,
		B_gra1_times: data_log.member_B_trans_times.gra_first, 
		B_gra2_times: data_log.member_B_trans_times.gra_second,
		B_gra3_times: data_log.member_B_trans_times.gra_third,
		C_gra1_times: data_log.member_C_trans_times.gra_first, 
		C_gra2_times: data_log.member_C_trans_times.gra_second,
		C_gra3_times: data_log.member_C_trans_times.gra_third,});//儲存每個人的圖卡轉換次數
		
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_operate_times.php", 
		{ques: switchSymbol(ques_index) ,member: "member_A", error: data_log.member_A_error_times, answer: data_log.member_A_answer_times, date:now.toString().substring(0,33)});//紀錄memberA的填答次數
		
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_operate_times.php", 
		{ques: switchSymbol(ques_index),member: "member_B", error: data_log.member_B_error_times, answer: data_log.member_B_answer_times, date:now.toString().substring(0,33)});//紀錄memberB的填答次數
		
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_operate_times.php", 
		{ques: switchSymbol(ques_index),member: "member_C", error: data_log.member_C_error_times, answer: data_log.member_C_answer_times, date:now.toString().substring(0,33)});//紀錄memberC的填答次數
		
		handleObj.recoverAnsErrTimes(); //進入新的一題時，還原每個人的錯誤填答次數、填答數	
				
		central_ques.nume.splice(0,1), central_ques.denom.splice(0,1), central_ques.original_nume.splice(0,1), central_ques.original_denom.splice(0,1);
		ques_index ++;
		
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_member_card.php", 
		{date:now.toString().substring(0,33), ques: switchSymbol(ques_index), who: "member_A",
		gra_first: block14.nume+"_"+block14.denom, gra_second: block15.nume+"_"+block15.denom,
		gra_third: block16.nume+"_"+block16.denom});//儲存A所持有的圖卡
		
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_member_card.php", 
		{date:now.toString().substring(0,33), ques: switchSymbol(ques_index), who: "member_B",
		gra_first: block17.nume+"_"+block17.denom, gra_second: block18.nume+"_"+block18.denom,
		gra_third: block19.nume+"_"+block19.denom});//儲存B所持有的圖卡
		
		$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_member_card.php", 
		{date:now.toString().substring(0,33), ques: switchSymbol(ques_index), who: "member_C",
		gra_first: block20.nume+"_"+block20.denom, gra_second: block21.nume+"_"+block21.denom,
		gra_third: block22.nume+"_"+block22.denom});//儲存C所持有的圖卡
		
		for(var i=0; i<cloze_gra.length; i++){	//將空格內的值清空
			cloze_gra[i].nume = "", cloze_gra[i].denom = "", cloze_gra[i].empty = "true", cloze_gra[i].src = "", cloze_gra[i].value = "";
			cloze_gra[i].use = true, cloze_gra[i].obj.css("border-color","");;
			draw.clearDraw(eval(cloze_gra[i].pen),200,200), draw.clearDraw(eval(cloze_sym[i].pen),100,60);
			draw.clearDraw(eval(block67.pen),100,100);
		}
		if(central_ques.nume.length !=0 && central_ques.denom.length !=0){	//假如題數不為空，出新題目						
			giveQuestion();
			for(var i=0; i<3; i++){
				draw.clearDraw(eval(cloze_sym[i].showOriFra), 100, 60);	//清除圖卡初始值
				draw.clearDraw(eval(cloze_gra[i].showOriFra), 180, 180);
				draw.clearDraw(eval(cloze_sym[i].showExtendSym), 150, 60);	//清除圖卡擴充值
				draw.clearDraw(eval(cloze_gra[i].showExtendGra), 180, 180);
				centralOriSym[i].css("display","none"), centralOriGra[i].css("display","none");
				centralextendSym[i].css("display","none"), centralextendGra[i].css("display","none");				
			}
			$.each(otherObject, function(){	//隱藏鏈結線
				this.css("display", "none");
			});
			block84.obj.css("display", "none"), block84.obj.html("確定");
			block85.obj.css("display", "none"), block85.obj.html("確定");
			block86.obj.css("display", "none"), block86.obj.html("確定");
			A_check = false, B_check = false, C_check = false;
		}else{	//題數出完，表示此階段活動結束
			block84.obj.css("display","none"), block85.obj.css("display","none"), block86.obj.css("display","none");
			$("#central_area").children().css("display","none");	//將中央區域的題目關閉
			complete = true;
			$("#A_report").css("display","block"), $("#B_report").css("display","block"), $("#C_report").css("display","block");
			$("#A_report").animate({opacity:1},600), $("#B_report").animate({opacity:1},600), $("#C_report").animate({opacity:1},600);
			block62.use = false, block63.use = false, block64.use = false;
			//handleObj.showNextObj();	//顯示下一階段的按鍵
		}		
	}
}

function calTransTime_A(){
	data_log.member_A_trans_time ++;
}

function calTransTime_B(){
	data_log.member_B_trans_time ++;
}

function calTransTime_C(){
	data_log.member_C_trans_time ++;
}

function method(op){	//判斷擴/約分
	switch(op){
		case "×":
			return "extend";
			break;
		case "÷":
			return "reduce";
			break;
		default:
			return "null";
			break;
	}
}

function selectCard(block){	//判斷選擇的圖卡(圖卡取消次數)
	switch(block){
		case "member_A_fraction_graphic_first":
				return data_log.member_A_trans_cancel_times.gra_first;
				break;
			case "member_A_fraction_graphic_second":
				return data_log.member_A_trans_cancel_times.gra_second;
				break;
			case "member_A_fraction_graphic_third":
				return data_log.member_A_trans_cancel_times.gra_third;
				break;
			case "member_B_fraction_graphic_first":
				return data_log.member_B_trans_cancel_times.gra_first;
				break;
			case "member_B_fraction_graphic_second":
				return data_log.member_B_trans_cancel_times.gra_second;
				break;
			case "member_B_fraction_graphic_third":
				return data_log.member_B_trans_cancel_times.gra_third;
				break;
			case "member_C_fraction_graphic_first":
				return data_log.member_C_trans_cancel_times.gra_first;
				break;
			case "member_C_fraction_graphic_second":
				return data_log.member_C_trans_cancel_times.gra_second;
				break;
			case "member_C_fraction_graphic_third":
				return data_log.member_C_trans_cancel_times.gra_third;
				break;
	}
}

function showextendObj(){
	var centralOriSym = [$("#Central_original_sym1"), $("#Central_original_sym2"), $("#Central_original_sym3")];
	var centralOriGra = [$("#Central_original_gra1"), $("#Central_original_gra2"), $("#Central_original_gra3")];
	
	var centralextendSym = [$("#central_extendSym1"), $("#central_extendSym2"), $("#central_extendSym3")];
	var centralextendGra = [$("#central_extendGra1"), $("#central_extendGra2"), $("#central_extendGra3")];
	
	var otherObject = [$("#original1"), $("#original2"), $("#original3"), $("#extend1"), $("#extend2"), $("#extend3"), $("#link1"), $("#link2"), $("#link3"), $("#link4"), $("#link5"), $("#link6")];
	
	for(var i=0; i<3; i++){
		centralOriSym[i].css("display", "block");
		centralOriSym[i].css("opacity", "1");
		
		centralOriGra[i].css("display", "block");
		centralOriGra[i].css("opacity", "1");
		
		centralextendSym[i].css("display", "block");
		centralextendSym[i].css("opacity", "1");
		
		centralextendGra[i].css("display", "block");
		centralextendGra[i].css("opacity", "1");
	}
	$.each(otherObject, function(){
		this.css("display", "block");
		this.css("opacity", "1");
	});
}

function singleCheck(){	//判斷單一空格的對錯
	var cloze_sym = [block3, block4, block65];
	var cloze_gra = [block1, block2, block66];	
	var centralOriSym = [$("#Central_original_sym1"), $("#Central_original_sym2"), $("#Central_original_sym3")];
	var centralOriGra = [$("#Central_original_gra1"), $("#Central_original_gra2"), $("#Central_original_gra3")];
	var centralExtendSym= [$("#central_extendSym1"), $("#central_extendSym2"), $("#central_extendSym3")];
	var centralExtendGra= [$("#central_extendGra1"), $("#central_extendGra2"), $("#central_extendGra3")];	
	
	for(var i=0; i<3; i++){
		if(cloze_gra[i].empty == "false"){
			if(cloze_gra[i].nume == block67.nume && cloze_gra[i].denom == block67.denom){	//此格答對了
				cloze_gra[i].obj.css("border-color","blue");
				cloze_gra[i].use = false;
				cloze_gra[i].answer = true;
				centralOriSym[i].css("display","block");
				centralOriSym[i].animate({opacity:1}, 600);
				centralOriGra[i].css("display","block");
				centralOriGra[i].animate({opacity:1}, 600);
				
				centralExtendSym[i].css("display","block");
				centralExtendSym[i].animate({opacity:1}, 600);
				centralExtendGra[i].css("display","block");
				centralExtendGra[i].animate({opacity:1}, 600);
				
				switch(cloze_gra[i].id){
					case "blank_1":
						$("#link1").css("display","block"), $("#link2").css("display","block");
						$("#link1").animate({opacity:1}, 600), $("#link2").animate({opacity:1}, 600);
						$("#original1").css("display","block"), $("#extend1").css("display","block");
						$("#original1").animate({opacity:1}, 600), $("#extend1").animate({opacity:1}, 600);
						break;
					case "blank_2":
						$("#link3").css("display","block"), $("#link4").css("display","block");
						$("#link3").animate({opacity:1}, 600), $("#link4").animate({opacity:1}, 600);
						$("#original2").css("display","block"), $("#extend2").css("display","block");
						$("#original2").animate({opacity:1}, 600), $("#extend2").animate({opacity:1}, 600);
						break;
					case "blank_3":
						$("#link5").css("display","block"), $("#link6").css("display","block");
						$("#link5").animate({opacity:1}, 600), $("#link6").animate({opacity:1}, 600);
						$("#original3").css("display","block"), $("#extend3").css("display","block");
						$("#original3").animate({opacity:1}, 600), $("#extend3").animate({opacity:1}, 600);
						break;
				}				
				draw.initialCentralSym(eval(cloze_sym[i].showOriFra), cloze_gra[i].beforeDenom, cloze_gra[i].beforeNume);	//畫出該分數擴約分前的字符
				draw.drawGra(eval(cloze_gra[i].showOriFra), GivePic2(cloze_gra[i].original_denom, cloze_gra[i].original_nume, cloze_gra[i].beforeDenom, cloze_gra[i].beforeNume));	//畫出該分數擴約分前的圖像		
						
				draw.drawExtendSym(eval(cloze_sym[i].showExtendSym), cloze_gra[i].beforeDenom, cloze_gra[i].beforeNume, cloze_gra[i].operator, cloze_gra[i].extendValue, cloze_gra[i]);	//畫出該分數擴約分的字符		ctx, denom, nume, ope, extendValue,block
				draw.drawGra(eval(cloze_gra[i].showExtendGra), GivePic("cut", cloze_gra[i].original_denom, cloze_gra[i].original_nume, cloze_gra[i].denom, cloze_gra[i].nume));	//畫出該分數擴約分的圖像
			}else{	//此格答錯了
				handleObj.calErrorTimes(cloze_gra[i]);
				cloze_gra[i].obj.css("border-color","red");
				if(cloze_gra[i].whetherExtend == true){
					cloze_gra[i].answer = false;
					cloze_gra[i].obj.css("border-color","red");
					centralOriSym[i].css("display","block");
					centralOriSym[i].animate({opacity:1}, 600);
					centralOriGra[i].css("display","block");
					centralOriGra[i].animate({opacity:1}, 600);
				
					centralExtendSym[i].css("display","block");
					centralExtendSym[i].animate({opacity:1}, 600);
					centralExtendGra[i].css("display","block");
					centralExtendGra[i].animate({opacity:1}, 600);
				
				switch(cloze_gra[i].id){
					case "blank_1":
						$("#link1").css("display","block"), $("#link2").css("display","block");
						$("#link1").animate({opacity:1}, 600), $("#link2").animate({opacity:1}, 600);
						$("#original1").css("display","block"), $("#extend1").css("display","block");
						$("#original1").animate({opacity:1}, 600), $("#extend1").animate({opacity:1}, 600);
						break;
					case "blank_2":
						$("#link3").css("display","block"), $("#link4").css("display","block");
						$("#link3").animate({opacity:1}, 600), $("#link4").animate({opacity:1}, 600);
						$("#original2").css("display","block"), $("#extend2").css("display","block");
						$("#original2").animate({opacity:1}, 600), $("#extend2").animate({opacity:1}, 600);
						break;
					case "blank_3":
						$("#link5").css("display","block"), $("#link6").css("display","block");
						$("#link5").animate({opacity:1}, 600), $("#link6").animate({opacity:1}, 600);
						$("#original3").css("display","block"), $("#extend3").css("display","block");
						$("#original3").animate({opacity:1}, 600), $("#extend3").animate({opacity:1}, 600);
						break;
				}				
				draw.initialCentralSym(eval(cloze_sym[i].showOriFra), cloze_gra[i].beforeDenom, cloze_gra[i].beforeNume);	//畫出該分數擴約分前的字符
				draw.drawGra(eval(cloze_gra[i].showOriFra), GivePic2(cloze_gra[i].original_denom, cloze_gra[i].original_nume, cloze_gra[i].beforeDenom, cloze_gra[i].beforeNume));	//畫出該分數擴約分前的圖像		
						
				draw.drawExtendSym(eval(cloze_sym[i].showExtendSym), cloze_gra[i].beforeDenom, cloze_gra[i].beforeNume, cloze_gra[i].operator, cloze_gra[i].extendValue, cloze_gra[i]);	//畫出該分數擴約分的字符		ctx, denom, nume, ope, extendValue,block
				draw.drawGra(eval(cloze_gra[i].showExtendGra), GivePic("cut", cloze_gra[i].original_denom, cloze_gra[i].original_nume, cloze_gra[i].denom, cloze_gra[i].nume));	//畫出該分數擴約分的圖像
				}				
			}
		}
	}	
	if(block1.nume == block67.nume && block1.denom == block67.denom && block2.nume == block67.nume && block2.denom == block67.denom &&
		block66.nume == block67.nume && block66.denom == block67.denom&& block1.empty == "false" && block2.empty == "false" && block66.empty == "false"){	//三格都正確填滿時，顯示最後確認鍵
		block84.obj.css("display", "block");
		block85.obj.css("display", "block");
		block86.obj.css("display", "block");
	}
}

function checkCorresponding(){		//判斷字符與圖像是否一致
	var sym = [block5, block6, block7, block8, block9, block10, block11, block12, block13];
	var gra = [block14, block15, block16, block17, block18, block19, block20, block21, block22];	
	
	for(var i=0; i<9; i++){	//判斷字符與圖像的配對
		if(sym[i].nume == gra[i].nume && sym[i].denom == gra[i].denom && sym[i].empty == "false" && gra[i].empty == "false"){	
			sym[i].corresponding = true;
			gra[i].corresponding = true;
		}else{
			sym[i].corresponding = false;
			gra[i].corresponding = false;
		}
	}	
	if(block14.corresponding == true && block15.corresponding == true && block16.corresponding == true && block17.corresponding == true && block18.corresponding == true
			&& block19.corresponding == true && block20.corresponding == true && block21.corresponding == true && block22.corresponding == true && first_check == false){	//全部配對好，顯示中央區域題目
			handleObj.showCentralObject();
			//$("#explain_A").css("opacity","1"), $("#explain_B").css("opacity","1"), $("#explain_C").css("opacity","1");
			//$("#explain_A").css("display","block"), $("#explain_B").css("display","block"), $("#explain_C").css("display","block");
			//$("#explain_A").html("在此階段中，依照中央區域給的分數，在自己的面板裡，挑選一張圖卡，利用轉換圖卡功能，轉換成對應的分數圖卡數值，按下關閉說明後，開始進行活動");
			//$("#explain_B").html("在此階段中，依照中央區域給的分數，在自己的面板裡，挑選一張圖卡，利用轉換圖卡功能，轉換成對應的分數圖卡數值，按下關閉說明後，開始進行活動");
			//$("#explain_C").html("在此階段中，依照中央區域給的分數，在自己的面板裡，挑選一張圖卡，利用轉換圖卡功能，轉換成對應的分數圖卡數值，按下關閉說明後，開始進行活動");
			//handleObj.hideMemberObject();			
			handleObj.showTransObject();
		//	block73.func = "close", block74.func = "close", block75.func = "close";
		//	block73.obj.html("關閉說明"), block74.obj.html("關閉說明"), block75.obj.html("關閉說明");
			first_check = true;
	}
	/*for(var i=0; i<3; i++){		//判斷是否開啟轉換圖卡功能
		if(gra[i].corresponding == true){
			block62.use = true;
			block62.obj.css("display","block");
			break;
		}else{
			block62.use = false;
			block62.obj.css("display","none");
		}
	}
	for(var i=3; i<6; i++){
		if(gra[i].corresponding == true){
			block63.use = true;
			block63.obj.css("display","block");
			break;
		}else{
			block63.use = false;
			block63.obj.css("display","none");
		}
	}
	for(var i=6; i<9; i++){
		if(gra[i].corresponding == true){
			block64.use = true;
			block64.obj.css("display","block");
			break;
		}
		else{
			block64.use = false;
			block64.obj.css("display","none");
		}
	}*/
}

function touchstart(event){
	//event.changedTouches = event.targetTouches;
	//console.log("x:"+event.changedTouches[0].pageX+" y:"+event.changedTouches[0].pageY)
	for(var i=0; i<blockArray.length; i++){
		for(var j=0; j<event.changedTouches.length; j++){			
			if(blockArray[i] !=null && event.changedTouches[j].target.id == blockArray[i].id){
				switch(blockArray[i].position){
					case "center":
						if(blockArray[i].id == "blank_1" && blockArray[i].empty =="false" && blockArray[i].take == true && complete == false){
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
						if(blockArray[i].id == "blank_2" && blockArray[i].empty =="false" && blockArray[i].take == true && complete == false){
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
						if(blockArray[i].id == "blank_3" && blockArray[i].empty =="false" && blockArray[i].take == true && complete == false){
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								draw.clearDraw(eval(blockArray[i-1].pen), blockArray[i-1].obj.width(), blockArray[i-1].obj.height());	//清除字符區
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
								draw.clearDraw(eval(blockArray[i-1].showOriFra), 100, 60);	//清除圖卡初始值
								draw.clearDraw(eval(blockArray[i].showOriFra), 180, 180);
								draw.clearDraw(eval(blockArray[i-1].showExtendSym), 150, 60);	//清除圖卡擴充值
								draw.clearDraw(eval(blockArray[i].showExtendGra), 180, 180);
								blockArray[i-1].SymOriFraObj.css("display","none"), blockArray[i].OriFraObj.css("display","none");
								blockArray[i-1].SymExtendObj.css("display","none"), blockArray[i].ExtendObj.css("display","none");
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
						switch(blockArray[i].id){		//取回圖卡功能
							case "A_take_back1":
								block102.obj.css("display","none");
								block102.whichBlock.empty = "true";
								draw.clearDraw(eval(block102.whichBlock.pen), 180, 180), draw.clearDraw(eval(block102.whichBlockSym.pen), 100, 60);	
								draw.drawGra(eval(block102.start.pen), block102.start.src);	//ctx, imgPath
								block102.start.empty = "false";
								draw.clearOriExtendPic(block102.whichBlockSym, block102.whichBlock);	//blockSym, blockGra
								handleObj.hideOriExtendArea(block102.whichBlockSym, block102.whichBlock, block102.whichBlock.id);	//blockSym, blockGra, blockId
								block102.whichBlock.obj.css("border-color","");
								block84.obj.css("display", "none");
								block85.obj.css("display", "none");
								block86.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								block102.whichBlock.take = true; //讓接下來放上去的圖卡能夠被拉取
								break;
							case "A_take_back2":
								block103.obj.css("display","none");
								block103.whichBlock.empty = "true";
								draw.clearDraw(eval(block103.whichBlock.pen), 180, 180), draw.clearDraw(eval(block103.whichBlockSym.pen), 100, 60);
								draw.drawGra(eval(block103.start.pen), block103.start.src);	//ctx, imgPath
								block103.start.empty = "false";
								draw.clearOriExtendPic(block103.whichBlockSym, block103.whichBlock);
								handleObj.hideOriExtendArea(block103.whichBlockSym, block103.whichBlock, block103.whichBlock.id);	//blockSym, blockGra, blockId
								block103.whichBlock.obj.css("border-color","");
								block84.obj.css("display", "none");
								block85.obj.css("display", "none");
								block86.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								block103.whichBlock.take = true; //讓接下來放上去的圖卡能夠被拉取
								break;
							case "A_take_back3":
								block104.obj.css("display","none");
								block104.whichBlock.empty = "true";
								draw.clearDraw(eval(block104.whichBlock.pen), 180, 180), draw.clearDraw(eval(block104.whichBlockSym.pen), 100, 60);
								draw.drawGra(eval(block104.start.pen), block104.start.src);	//ctx, imgPath
								block104.start.empty = "false";
								draw.clearOriExtendPic(block104.whichBlockSym, block104.whichBlock);
								handleObj.hideOriExtendArea(block104.whichBlockSym, block104.whichBlock, block104.whichBlock.id);	//blockSym, blockGra, blockId
								block104.whichBlock.obj.css("border-color","");
								block84.obj.css("display", "none");
								block85.obj.css("display", "none");
								block86.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								block104.whichBlock.take = true; //讓接下來放上去的圖卡能夠被拉取
								break;
							case "B_take_back1":
								block105.obj.css("display","none");
								block105.whichBlock.empty = "true";
								draw.clearDraw(eval(block105.whichBlock.pen), 180, 180), draw.clearDraw(eval(block105.whichBlockSym.pen), 100, 60);
								draw.drawGra(eval(block105.start.pen), block105.start.src);	//ctx, imgPath
								block105.start.empty = "false";
								draw.clearOriExtendPic(block105.whichBlockSym, block105.whichBlock);
								handleObj.hideOriExtendArea(block105.whichBlockSym, block105.whichBlock, block105.whichBlock.id);	//blockSym, blockGra, blockId
								block105.whichBlock.obj.css("border-color","");
								block84.obj.css("display", "none");
								block85.obj.css("display", "none");
								block86.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								block105.whichBlock.take = true; //讓接下來放上去的圖卡能夠被拉取
								break;
							case "B_take_back2":
								block106.obj.css("display","none");
								block106.whichBlock.empty = "true";
								draw.clearDraw(eval(block106.whichBlock.pen), 180, 180), draw.clearDraw(eval(block106.whichBlockSym.pen), 100, 60);
								draw.drawGra(eval(block106.start.pen), block106.start.src);	//ctx, imgPath
								block106.start.empty = "false";
								draw.clearOriExtendPic(block106.whichBlockSym, block106.whichBlock);
								handleObj.hideOriExtendArea(block106.whichBlockSym, block106.whichBlock, block106.whichBlock.id);	//blockSym, blockGra, blockId
								block106.whichBlock.obj.css("border-color","");
								block84.obj.css("display", "none");
								block85.obj.css("display", "none");
								block86.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								block106.whichBlock.take = true; //讓接下來放上去的圖卡能夠被拉取
								break;
							case "B_take_back3":
								block107.obj.css("display","none");
								block107.whichBlock.empty = "true";
								draw.clearDraw(eval(block107.whichBlock.pen), 180, 180), draw.clearDraw(eval(block107.whichBlockSym.pen), 100, 60);
								draw.drawGra(eval(block107.start.pen), block107.start.src);	//ctx, imgPath
								block107.start.empty = "false";
								draw.clearOriExtendPic(block107.whichBlockSym, block107.whichBlock);
								handleObj.hideOriExtendArea(block107.whichBlockSym, block107.whichBlock, block107.whichBlock.id);	//blockSym, blockGra, blockId
								block107.whichBlock.obj.css("border-color","");
								block84.obj.css("display", "none");
								block85.obj.css("display", "none");
								block86.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								block107.whichBlock.take = true; //讓接下來放上去的圖卡能夠被拉取
								break;
							case "C_take_back1":
								block108.obj.css("display","none");
								block108.whichBlock.empty = "true";
								draw.clearDraw(eval(block108.whichBlock.pen), 180, 180), draw.clearDraw(eval(block108.whichBlockSym.pen), 100, 60);
								draw.drawGra(eval(block108.start.pen), block108.start.src);	//ctx, imgPath
								block108.start.empty = "false";
								draw.clearOriExtendPic(block108.whichBlockSym, block108.whichBlock);
								handleObj.hideOriExtendArea(block108.whichBlockSym, block108.whichBlock, block108.whichBlock.id);	//blockSym, blockGra, blockId
								block108.whichBlock.obj.css("border-color","");
								block84.obj.css("display", "none");
								block85.obj.css("display", "none");
								block86.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								block108.whichBlock.take = true; //讓接下來放上去的圖卡能夠被拉取
								break;
							case "C_take_back2":
								block109.obj.css("display","none");
								block109.whichBlock.empty = "true";
								draw.clearDraw(eval(block109.whichBlock.pen), 180, 180), draw.clearDraw(eval(block109.whichBlockSym.pen), 100, 60);
								draw.drawGra(eval(block109.start.pen), block109.start.src);	//ctx, imgPath
								block109.start.empty = "false";
								draw.clearOriExtendPic(block109.whichBlockSym, block109.whichBlock);
								handleObj.hideOriExtendArea(block109.whichBlockSym, block109.whichBlock, block109.whichBlock.id);	//blockSym, blockGra, blockId
								block109.whichBlock.obj.css("border-color","");
								block84.obj.css("display", "none");
								block85.obj.css("display", "none");
								block86.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								block109.whichBlock.take = true; //讓接下來放上去的圖卡能夠被拉取
								break;
							case "C_take_back3":
								block110.obj.css("display","none");
								block110.whichBlock.empty = "true";
								draw.clearDraw(eval(block110.whichBlock.pen), 180, 180), draw.clearDraw(eval(block110.whichBlockSym.pen), 100, 60);
								draw.drawGra(eval(block110.start.pen), block110.start.src);	//ctx, imgPath
								block110.start.empty = "false";
								draw.clearOriExtendPic(block110.whichBlockSym, block110.whichBlock);
								handleObj.hideOriExtendArea(block110.whichBlockSym, block110.whichBlock, block110.whichBlock.id);	//blockSym, blockGra, blockId
								block110.whichBlock.obj.css("border-color","");
								block84.obj.css("display", "none");
								block85.obj.css("display", "none");
								block86.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								block110.whichBlock.take = true; //讓接下來放上去的圖卡能夠被拉取
								break;
						}						
						break;
					case "personal_area":						
						if(blockArray[i].empty == "false" && blockArray[i].content == "graphic" && blockArray[i].trans != true && complete == false){	//拉取圖卡
							handleObj.createGraObj(blockArray[i].blockName,blockArray[i].obj.offset().top, blockArray[i].obj.offset().left, blockArray[i].corresponding);	//id, top, left	, corrd	創造物件
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
						if(blockArray[i].trans == true && complete == false && blockArray[i].corresponding == true){	//隱藏原本的面板
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
						/*if(blockArray[i].empty == "false" && blockArray[i].content == "symbol" && blockArray[i].trans != true && blockArray[i].corresponding == false){	//拉取字符
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
								var symArray = [block5, block6, block7];
								var graArray = [block14, block15, block16];					
								switch(blockArray[i].func){
									case "close":
										$("#explain_A").animate({opacity:0},600, function(){
											$("#explain_A").css("display","none");
										});	
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","block");
											graArray[k].obj.css("display","block");
											symArray[k].obj.animate({opacity:1},600);
											graArray[k].obj.animate({opacity:1},600);
										}
										if(first_check == true){	//第一階段結束，可以開啟轉換功能
											block62.obj.css("display","block");			
											block62.obj.animate({opacity:1},600);
										}																										
										break;
									case "open":										
										$("#explain_A").css("display","block");
										$("#explain_A").animate({opacity:1},600);
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","none");
											graArray[k].obj.css("display","none");
											symArray[k].obj.animate({opacity:1},600);
											graArray[k].obj.animate({opacity:1},600);											
										}
										if(first_check == true){
											block62.obj.animate({opacity:0.1}, 600, function(){
												this.obj.css("display","none");
											});
										}										
										break;
								}
								handleObj.switchExplainButton(blockArray[i]);
							}
							if(blockArray[i].id =="clozeExplainB"){
								var symArray = [block8, block9, block10];
								var graArray = [block17, block18, block19];
								switch(blockArray[i].func){
									case "close":
										$("#explain_B").animate({opacity:0},600, function(){
											$("#explain_B").css("display","none");
										});	
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","block");
											graArray[k].obj.css("display","block");
											symArray[k].obj.animate({opacity:1},600);
											graArray[k].obj.animate({opacity:1},600);
										}
										if(first_check == true){
											block63.obj.css("display","block");			
											block63.obj.animate({opacity:1},600);
										}													
										break;
									case "open":							
										$("#explain_B").css("display","block");			
										$("#explain_B").animate({opacity:1},600);
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","none");
											graArray[k].obj.css("display","none");
											symArray[k].obj.animate({opacity:1},600);
											graArray[k].obj.animate({opacity:1},600);											
										}
										if(first_check == true){
											block63.obj.animate({opacity:0.1}, 600, function(){
												this.obj.css("display","none");
											});
										}										
										break;
								}
								handleObj.switchExplainButton(blockArray[i]);
							}
							if(blockArray[i].id =="clozeExplainC"){
								var symArray = [block11, block12, block13];
								var graArray = [block20, block21, block22];
								switch(blockArray[i].func){
									case "close":
										$("#explain_C").animate({opacity:0},600, function(){
											$("#explain_C").css("display","none");
										});						
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","block");
											graArray[k].obj.css("display","block");
											symArray[k].obj.animate({opacity:1},600);
											graArray[k].obj.animate({opacity:1},600);
										}
										if(first_check == true){
											block64.obj.css("display","block");			
											block64.obj.animate({opacity:1},600);
										}										
										break;
									case "open":						
										$("#explain_C").css("display","block");				
										$("#explain_C").animate({opacity:1},600);
										for(var k=0; k<3; k++){
											symArray[k].obj.css("display","none");
											graArray[k].obj.css("display","none");
											symArray[k].obj.animate({opacity:1},600);
											graArray[k].obj.animate({opacity:1},600);											
										}
										if(first_check == true){
											block64.obj.animate({opacity:0.1}, 600, function(){
												this.obj.css("display","none");
											});
										}										
										break;
								}
								handleObj.switchExplainButton(blockArray[i]);
							}
						if(blockArray[i].trans == true && blockArray[i].content =="graphic" && blockArray[i].corresponding == true){	//驗證開始
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
										draw.drawPanelSym(eval(block24.pen),"A_symbol_panel");
										draw.drawPanelGra(eval(block27.pen), blockArray[i].src);
										A_trans_time = setInterval(calTransTime_A, 1000); //計算A的轉換時間
									//	draw.drawOriginalSym(eval(blockArray[i].showOriFra), blockArray[i].first_denom, blockArray[i].first_nume);	//顯示圖卡初始值
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
										draw.drawPanelSym(eval(block37.pen),"B_symbol_panel");
										draw.drawPanelGra(eval(block40.pen), blockArray[i].src);
										B_trans_time = setInterval(calTransTime_B, 1000); //計算B的轉換時間		
									//	draw.drawOriginalSym(eval(blockArray[i].showOriFra), blockArray[i].first_denom, blockArray[i].first_nume);		//顯示圖卡初始值					
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
										draw.drawPanelSym(eval(block50.pen),"C_symbol_panel");
										draw.drawPanelGra(eval(block53.pen), blockArray[i].src);
										C_trans_time = setInterval(calTransTime_C, 1000); //計算C的轉換時間
									//draw.drawOriginalSym(eval(blockArray[i].showOriFra), blockArray[i].first_denom, blockArray[i].first_nume);	//顯示圖卡初始值
										break;
								}
							}
						}						
						break;
					case "personal_panel":
						switch(blockArray[i].id){	//驗證面板的操作
							case "A_translate":			
								if(blockArray[i].use == true){
									handleObj.createResultBox("A_trans_explain","explain",550,240,"left");	//id, answer, top, left, position
									blockArray[13].trans = true, blockArray[14].trans = true, blockArray[15].trans = true;
									blockArray[4].trans = true, blockArray[5].trans = true, blockArray[6].trans = true;
									A_translate = true;
								}								
								break;
							case "B_translate":
								if(blockArray[i].use == true){
									handleObj.createResultBox("B_trans_explain","explain",1040,900,"bottom");	//id, answer, top, left, position
									blockArray[16].trans = true, blockArray[17].trans = true, blockArray[18].trans = true;
									blockArray[7].trans = true, blockArray[8].trans = true, blockArray[9].trans = true;
									B_translate = true;
								}								
								break;
							case "C_translate":
								if(blockArray[i].use == true){
									handleObj.createResultBox("C_trans_explain","explain",550,1460,"right");	//id, answer, top, left, position
									blockArray[19].trans = true, blockArray[20].trans = true, blockArray[21].trans = true;
									blockArray[10].trans = true, blockArray[11].trans = true, blockArray[12].trans = true;
									C_translate = true;
								}								
								break;
							case "A_close":
								handleObj.changePanelState("A_panel");
								handleObj.scaleCentralArea();	//控制中央面板大小	
								handleObj.calTransCancelTimes(Panel_A.which_pic.id); //計算圖卡轉換取消次數
								clearTimeout(A_trans_time); //停止計算轉換時間
								data_log.member_A_trans_time = 0;	//轉換時間 歸零
								$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_cancel_times.php", 
								{date:now.toString().substring(0,33), card: Panel_A.which_pic.id, ques: switchSymbol(ques_index),
								cancel_times: selectCard(Panel_A.which_pic.id)});//儲存此圖卡的轉換取消次數
								data_log.member_A_trans_error_times = 0;	//錯誤次數 歸零
								data_log.member_A_trans_previous_times =0; //遞增上一步次數歸零
								break;
							case "B_close":
								handleObj.changePanelState("B_panel");
								handleObj.scaleCentralArea();	//控制中央面板大小	
								handleObj.calTransCancelTimes(Panel_B.which_pic.id); //計算圖卡轉換取消次數
								clearTimeout(B_trans_time); //停止計算轉換時間
								data_log.member_B_trans_time = 0;	//轉換時間 歸零
								$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_cancel_times.php", 
								{date:now.toString().substring(0,33), card: Panel_B.which_pic.id, ques: switchSymbol(ques_index),
								cancel_times: selectCard(Panel_B.which_pic.id)});//儲存此圖卡的轉換取消次數
								data_log.member_B_trans_error_times = 0;	//錯誤次數 歸零
								data_log.member_B_trans_previous_times =0; //遞增上一步次數歸零
								break;
							case "C_close":
								handleObj.changePanelState("C_panel");
								handleObj.scaleCentralArea();	//控制中央面板大小	
								handleObj.calTransCancelTimes(Panel_C.which_pic.id); //計算圖卡轉換取消次數
								clearTimeout(C_trans_time); //停止計算轉換時間
								data_log.member_C_trans_time = 0;	//轉換時間 歸零
								$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_cancel_times.php", 
								{date:now.toString().substring(0,33), card: Panel_C.which_pic.id, ques: switchSymbol(ques_index),
								cancel_times: selectCard(Panel_C.which_pic.id)});//儲存此圖卡的轉換取消次數
								data_log.member_C_trans_error_times = 0;	//錯誤次數 歸零
								data_log.member_C_trans_previous_times =0; //遞增上一步次數歸零
								break;					
							case "A_extend_reduce":
								Panel_A.operator = blockArray[i].extend;
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								handleObj.switchExtendButton(blockArray[i]);		
								Panel_A.extend ="", Panel_A.count =0,block25.value = 0 ,block25.obj.html("");				
								Panel_A.result_nume ="", Panel_A.result_denom = "", block34.use= false, block34.obj.css("color","white");
								draw.clearDraw(eval(block28.pen), 150, 150), draw.clearDraw(eval(block29.pen), 150, 150);
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								$("#A_add").css("display","block"), $("#A_sub").css("display","block"), $("#A_count").css("display","block");
								$("#A_add_ten").css("display","block"), $("#A_sub_ten").css("display","block");
								$("#A_unit").css("display","block"), $("#A_ten").css("display","block");
								break;
							case "B_extend_reduce":
								Panel_B.operator = blockArray[i].extend;
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								handleObj.switchExtendButton(blockArray[i]);
								Panel_B.extend ="", Panel_B.count =0, block38.value=0, block38.obj.html("");	
								Panel_B.result_nume ="", Panel_B.result_denom = "", block47.use= false, block47.obj.css("color","white");
								draw.clearDraw(eval(block41.pen), 150, 150), draw.clearDraw(eval(block42.pen), 150, 150);
								 draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								 $("#B_add").css("display","block"), $("#B_sub").css("display","block"), $("#B_count").css("display","block");
								  $("#B_add_ten").css("display","block"), $("#B_sub_ten").css("display","block");
								  $("#B_unit").css("display","block"), $("#B_ten").css("display","block");
								break;
							case "C_extend_reduce":
								Panel_C.operator = blockArray[i].extend;
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								handleObj.switchExtendButton(blockArray[i]);
								Panel_C.extend ="", Panel_C.count =0, block51.value=0, block51.obj.html("");	
								Panel_C.result_nume ="", Panel_C.result_denom = "", block60.use= false, block60.obj.css("color","white");
								draw.clearDraw(eval(block54.pen), 150, 150), draw.clearDraw(eval(block55.pen), 150, 150);
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								$("#C_add").css("display","block"), $("#C_sub").css("display","block"), $("#C_count").css("display","block");
								$("#C_add_ten").css("display","block"), $("#C_sub_ten").css("display","block");
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
														block25.obj.html("0"+Panel_A.count);
													}else{
														block25.obj.html(Panel_A.count);
													}													
													block25.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 9;													
													(Panel_A.count<10) ? block25.obj.html("0"+Panel_A.count) : block25.obj.html(Panel_A.count);	
												}										
												break;
											case "ten":
												if(Panel_A.count <30){
													Panel_A.count +=10;
													block25.obj.html(Panel_A.count);
													block25.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 30;
													block25.obj.html("0"+Panel_A.count);
												}
												break;
										}										
									}else if(Panel_A.operator == "÷" ){	//&& Panel_A.count <Panel_A.max_reduce
										switch(Panel_A.input_type){
											case "unit":
												if(Panel_A.count%10 <9){
													Panel_A.count ++;
													if(Panel_A.count <10){
														block25.obj.html("0"+Panel_A.count);
													}else{
														block25.obj.html(Panel_A.count);
													}													
													block25.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 9;													
													(Panel_A.count<10) ? block25.obj.html("0"+Panel_A.count) : block25.obj.html(Panel_A.count);	
												}											
												break;
											case "ten":
												if(Panel_A.count <30){
													Panel_A.count +=10;
													block25.obj.html(Panel_A.count);
													block25.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 30;
													block25.obj.html("0"+Panel_A.count);
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
														block38.obj.html("0"+Panel_B.count);
													}else{
														block38.obj.html(Panel_B.count);
													}
													block38.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 9;													
													(Panel_B.count<10) ? block38.obj.html("0"+Panel_B.count) : block38.obj.html(Panel_B.count);	
												}									
												break;
											case "ten":
												if(Panel_B.count <30){
													Panel_B.count +=10;
													block38.obj.html(Panel_B.count);
													block38.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 30;
													block38.obj.html("0"+Panel_B.count);
												}
												break;
										}
									}else if(Panel_B.operator == "÷"){	// && Panel_B.count <Panel_B.max_reduce
										switch(Panel_B.input_type){
											case "unit":
												if(Panel_B.count%10 <9){
													Panel_B.count ++;
													if(Panel_B.count <10){
														block38.obj.html("0"+Panel_B.count);
													}else{
														block38.obj.html(Panel_B.count);
													}
													block38.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 9;													
													(Panel_B.count<10) ? block38.obj.html("0"+Panel_B.count) : block38.obj.html(Panel_B.count);	
												}											
												break;
											case "ten":
												if(Panel_B.count <30){
													Panel_B.count +=10;
													block38.obj.html(Panel_B.count);
													block38.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 30;
													block38.obj.html("0"+Panel_B.count);
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
														block51.obj.html("0"+Panel_C.count);
													}else{
														block51.obj.html(Panel_C.count);
													}
													block51.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 9;													
													(Panel_C.count<10) ? block51.obj.html("0"+Panel_C.count) : block51.obj.html(Panel_C.count);	
												}											
												break;
											case "ten":
												if(Panel_C.count <30){
													Panel_C.count +=10;
													block51.obj.html(Panel_C.count);
													block51.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 30;
													block51.obj.html("0"+Panel_C.count);
												}
												break;
										}
									}else if(Panel_C.operator == "÷" ){	//&& Panel_C.count <Panel_C.max_reduce
										switch(Panel_C.input_type){
											case "unit":
												if(Panel_C.count%10 <9){
													Panel_C.count ++;
													if(Panel_C.count <10){
														block51.obj.html("0"+Panel_C.count);
													}else{
														block51.obj.html(Panel_C.count);
													}
													block51.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 9;													
													(Panel_C.count<10) ? block51.obj.html("0"+Panel_C.count) : block51.obj.html(Panel_C.count);	
												}											
												break;
											case "ten":
												if(Panel_C.count <=30){
													Panel_C.count +=10;
													block51.obj.html(Panel_C.count);
													block51.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 30;
													block51.obj.html("0"+Panel_C.count);
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
														block25.obj.html("0"+Panel_A.count);
													}else{
														block25.obj.html(Panel_A.count);
													}													
													block25.value = Panel_A.count;
												}												
												break;
											case "ten":
												if(Panel_A.count >=10){
													Panel_A.count -=10;
													if(Panel_A.count <10){
														block25.obj.html("0"+Panel_A.count);
													}else{
														block25.obj.html(Panel_A.count);
													}													
													block25.value = Panel_A.count;
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
														block38.obj.html("0"+Panel_B.count);
													}else{
														block38.obj.html(Panel_B.count);
													}													
													block38.value = Panel_B.count;
												}												
												break;
											case "ten":
												if(Panel_B.count >=10){
													Panel_B.count -=10;
													if(Panel_B.count <10){
														block38.obj.html("0"+Panel_B.count);
													}else{
														block38.obj.html(Panel_B.count);
													}													
													block38.value = Panel_B.count;
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
														block51.obj.html("0"+Panel_C.count);
													}else{
														block51.obj.html(Panel_C.count);
													}													
													block51.value = Panel_C.count;
												}												
												break;
											case "ten":
												if(Panel_C.count >=10){
													Panel_C.count -=10;
													if(Panel_C.count <10){
														block51.obj.html("0"+Panel_C.count);
													}else{
														block51.obj.html(Panel_C.count);
													}													
													block51.value = Panel_C.count;
												}
												break;
										}
								}
								break;
							case "A_unit":
								block76.obj.css("font-weight","900"), block76.obj.css("color","blue");
								block79.obj.css("font-weight","100"), block79.obj.css("color","black");
								$("#A_message").html("目前的數值從個位數開始修改");
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
								Panel_A.input_type = "unit";
								break;
							case "B_unit":
								block77.obj.css("font-weight","900"), block77.obj.css("color","blue");
								block80.obj.css("font-weight","100"), block80.obj.css("color","black");
								$("#B_message").html("目前的數值從個位數開始修改");
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
								Panel_B.input_type = "unit";
								break;
							case "C_unit":
								block78.obj.css("font-weight","900"), block78.obj.css("color","blue");
								block81.obj.css("font-weight","100"), block81.obj.css("color","black");
								$("#C_message").html("目前的數值從個位數開始修改");
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
								Panel_C.input_type = "unit";
								break;
							case "A_ten":
								block76.obj.css("font-weight","100"), block76.obj.css("color","black");
								block79.obj.css("font-weight","900"), block79.obj.css("color","blue");
								$("#A_message").html("目前的數值從十位數開始修改");
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
								Panel_A.input_type = "ten";
								break;
							case "B_ten":
								block77.obj.css("font-weight","100"), block77.obj.css("color","black");
								block80.obj.css("font-weight","900"), block80.obj.css("color","blue");
								$("#B_message").html("目前的數值從十位數開始修改");
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
								Panel_B.input_type = "ten";
								break;
							case "C_ten":
								block78.obj.css("font-weight","100"), block78.obj.css("color","black");
								block81.obj.css("font-weight","900"), block81.obj.css("color","blue");
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
									Panel_A.which_pic.beforeDenom = Panel_A.original_denom;
									Panel_A.which_pic.beforeNume = Panel_A.original_nume;
									Panel_A.which_pic.extendValue = Panel_A.extend;
									Panel_A.which_pic.operator = Panel_A.operator;
									Panel_A.which_pic.whetherExtend = true;
									Panel_A.which_sym.denom = Panel_A.result_denom;
									Panel_A.which_sym.nume = Panel_A.result_nume;
									Panel_A.which_pic.max_extend = Panel_A.max_extend;
									Panel_A.which_pic.src = GivePic("result",Panel_A.reduce_denom, Panel_A.reduce_nume, Panel_A.result_denom, Panel_A.result_nume);									
									draw.drawChangeGra(eval(Panel_A.which_pic.pen), Panel_A.reduce_denom, Panel_A.reduce_nume, Panel_A.result_denom, Panel_A.result_nume);
									draw.clearDraw(eval(Panel_A.which_pic.sym),150, 75);	//清除原本字符
									draw.draSym(eval(Panel_A.which_pic.sym), Panel_A.result_denom, Panel_A.result_nume);	//畫上字符
									Panel_A.which_pic.obj.effect('shake', { times: 3 }, 100);	//轉換完，用震動效果來提醒學生剛剛轉換的是哪張圖卡
									handleObj.changePanelState("A_panel");
									handleObj.scaleCentralArea();	//控制中央面板大小	
									clearTimeout(A_trans_time); //停止計算轉換時間
									$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_time.php", 
									{time: data_log.member_A_trans_time, date:now.toString().substring(0,33), 
									ques: switchSymbol(ques_index), card: Panel_A.which_pic.id, 
									before_trans: Panel_A.original_nume+"_"+Panel_A.original_denom,
									after_trans:Panel_A.which_pic.nume+"_"+Panel_A.which_pic.denom,
									condition: method(Panel_A.which_pic.operator)});//儲存此圖卡的轉換時間
									data_log.member_A_trans_time = 0;	//轉換時間 歸零
									handleObj.calTransTimes(Panel_A.which_pic)	//計算轉換次數		
									
									$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_error_times.php",
									{date:now.toString().substring(0,33), ques: switchSymbol(ques_index),
									card: Panel_A.which_pic.id, before_trans: Panel_A.original_nume+"_"+Panel_A.original_denom,
									after_trans:Panel_A.which_pic.nume+"_"+Panel_A.which_pic.denom,
									condition: method(Panel_A.which_pic.operator),
									error_times: data_log.member_A_trans_error_times}); //儲存錯誤轉換次數	
									data_log.member_A_trans_error_times = 0;	//錯誤時間 歸零
									
									$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_previous_times.php",
									{date:now.toString().substring(0,33), ques: switchSymbol(ques_index),
									card: Panel_A.which_pic.id, condition: method(Panel_A.which_pic.operator),
									pre_times: data_log.member_A_trans_previous_times}); //儲存上一步次數	
									data_log.member_A_trans_previous_times = 0;	//上一步次數	歸零
								}
								break;
							case "B_confirm":
								if(blockArray[i].use == true){									
									Panel_B.which_pic.denom = Panel_B.result_denom;
									Panel_B.which_pic.nume = Panel_B.result_nume;
									Panel_B.which_pic.beforeDenom = Panel_B.original_denom;
									Panel_B.which_pic.beforeNume = Panel_B.original_nume;
									Panel_B.which_pic.extendValue = Panel_B.extend;
									Panel_B.which_pic.operator = Panel_B.operator;
									Panel_B.which_pic.whetherExtend = true;
									Panel_B.which_sym.denom = Panel_B.result_denom;
									Panel_B.which_sym.nume = Panel_B.result_nume;
									Panel_B.which_pic.max_extend = Panel_B.max_extend;
									Panel_B.which_pic.src = GivePic("result",Panel_B.reduce_denom, Panel_B.reduce_nume, Panel_B.result_denom, Panel_B.result_nume);
									draw.drawChangeGra(eval(Panel_B.which_pic.pen), Panel_B.reduce_denom, Panel_B.reduce_nume, Panel_B.result_denom, Panel_B.result_nume);
									draw.clearDraw(eval(Panel_B.which_pic.sym),150, 75);	//清除原本字符
									draw.draSym(eval(Panel_B.which_pic.sym), Panel_B.result_denom, Panel_B.result_nume);	//畫上字符
									Panel_B.which_pic.obj.effect('shake', { times: 3 }, 100);	//轉換完，用震動效果來提醒學生剛剛轉換的是哪張圖卡
									handleObj.changePanelState("B_panel");
									handleObj.scaleCentralArea();	//控制中央面板大小	
									clearTimeout(B_trans_time); //停止計算轉換時間
									$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_time.php", 
									{time: data_log.member_B_trans_time, date:now.toString().substring(0,33), 
									ques: switchSymbol(ques_index), card: Panel_B.which_pic.id, 
									before_trans: Panel_B.original_nume+"_"+Panel_B.original_denom,
									after_trans:Panel_B.which_pic.nume+"_"+Panel_B.which_pic.denom,
									condition: method(Panel_B.which_pic.operator)});//儲存此圖卡的轉換時間
									data_log.member_B_trans_time = 0;
									handleObj.calTransTimes(Panel_B.which_pic)	//計算轉換次數		
									
									$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_error_times.php",
									{date:now.toString().substring(0,33), ques: switchSymbol(ques_index),
									card: Panel_B.which_pic.id, before_trans: Panel_B.original_nume+"_"+Panel_B.original_denom,
									after_trans:Panel_B.which_pic.nume+"_"+Panel_B.which_pic.denom,
									condition: method(Panel_B.which_pic.operator),
									error_times: data_log.member_B_trans_error_times}); //儲存錯誤轉換次數	
									data_log.member_B_trans_error_times = 0;	//錯誤時間 歸零
									
									$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_previous_times.php",
									{date:now.toString().substring(0,33), ques: switchSymbol(ques_index),
									card: Panel_B.which_pic.id, condition: method(Panel_B.which_pic.operator),
									pre_times: data_log.member_B_trans_previous_times}); //儲存上一步次數	
									data_log.member_B_trans_previous_times = 0;	//上一步次數	歸零
								}
								break;
							case "C_confirm":
								if(blockArray[i].use == true){
									Panel_C.which_pic.denom = Panel_C.result_denom;
									Panel_C.which_pic.nume = Panel_C.result_nume;
									Panel_C.which_pic.beforeDenom = Panel_C.original_denom;
									Panel_C.which_pic.beforeNume = Panel_C.original_nume;
									Panel_C.which_pic.extendValue = Panel_C.extend;
									Panel_C.which_pic.operator = Panel_C.operator;
									Panel_C.which_pic.whetherExtend = true;
									Panel_C.which_sym.denom = Panel_C.result_denom;
									Panel_C.which_sym.nume = Panel_C.result_nume;
									Panel_C.which_pic.max_extend = Panel_C.max_extend;
									Panel_C.which_pic.src = GivePic("result",Panel_C.reduce_denom, Panel_C.reduce_nume, Panel_C.result_denom, Panel_C.result_nume);
									draw.drawChangeGra(eval(Panel_C.which_pic.pen), Panel_C.reduce_denom, Panel_C.reduce_nume, Panel_C.result_denom, Panel_C.result_nume);
									draw.clearDraw(eval(Panel_C.which_pic.sym),150, 75);	//清除原本字符
									draw.draSym(eval(Panel_C.which_pic.sym), Panel_C.result_denom, Panel_C.result_nume);	//畫上字符
									Panel_C.which_pic.obj.effect('shake', { times: 3 }, 100);	//轉換完，用震動效果來提醒學生剛剛轉換的是哪張圖卡
									handleObj.changePanelState("C_panel");
									handleObj.scaleCentralArea();	//控制中央面板大小	
									clearTimeout(C_trans_time); //停止計算轉換時間
									$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_time.php", 
									{time: data_log.member_C_trans_time, date:now.toString().substring(0,33), 
									ques: switchSymbol(ques_index), card: Panel_C.which_pic.id, 
									before_trans: Panel_C.original_nume+"_"+Panel_C.original_denom,
									after_trans:Panel_C.which_pic.nume+"_"+Panel_C.which_pic.denom,
									condition: method(Panel_C.which_pic.operator)});//儲存此圖卡的轉換時間
									data_log.member_C_trans_time = 0;
									handleObj.calTransTimes(Panel_C.which_pic)	//計算轉換次數		
									
									$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_error_times.php",
									{date:now.toString().substring(0,33), ques: switchSymbol(ques_index),
									card: Panel_C.which_pic.id, before_trans: Panel_C.original_nume+"_"+Panel_C.original_denom,
									after_trans:Panel_C.which_pic.nume+"_"+Panel_C.which_pic.denom,
									condition: method(Panel_C.which_pic.operator),
									error_times: data_log.member_C_trans_error_times}); //儲存錯誤轉換次數	
									data_log.member_C_trans_error_times = 0;	//錯誤時間 歸零
									
									$.post("../mathematic/myphp/equivalence_data/C_collect_data/equivalence_C_trans_previous_times.php",
									{date:now.toString().substring(0,33), ques: switchSymbol(ques_index),
									card: Panel_C.which_pic.id, condition: method(Panel_C.which_pic.operator),
									pre_times: data_log.member_C_trans_previous_times}); //儲存上一步次數	
									data_log.member_C_trans_previous_times = 0;	//上一步次數	歸零
								}
								break;
							case "A_previous":
								if(blockArray[i].use == true){
									if(Panel_A.result_nume != "" || Panel_A.result_denom !=""){
										Panel_A.result_nume = "", Panel_A.result_denom = "";
										blockArray[i].use = false, blockArray[i].obj.css("color","white");
										draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
										draw.clearDraw(ctx36, 150, 150);
										block34.obj.css("color","white"), block34.use = false;
										data_log.member_A_trans_previous_times ++; //遞增上一步次數
									}									
								}								
								break;
							case "B_previous":
								if(blockArray[i].use == true){
									if(Panel_B.result_nume != "" || Panel_B.result_denom !=""){
										Panel_B.result_nume = "", Panel_B.result_denom = "";
										blockArray[i].use = false, blockArray[i].obj.css("color","white");
										draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
										draw.clearDraw(ctx40, 150, 150);
										block47.obj.css("color","white"), block47.use = false;
										data_log.member_B_trans_previous_times ++; //遞增上一步次數
									}									
								}								
								break;
							case "C_previous":
								if(blockArray[i].use == true){
									if(Panel_C.result_nume != "" || Panel_C.result_denom !=""){
										Panel_C.result_nume = "", Panel_C.result_denom = "";
										blockArray[i].use = false, blockArray[i].obj.css("color","white");
										draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
										draw.clearDraw(ctx44, 150, 150);
										block60.obj.css("color","white"), block60.use = false;
										data_log.member_C_trans_previous_times ++; //遞增上一步次數
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
	//event.changedTouches = event.targetTouches;
	
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
				//console.log("x:"+block.x+" y:"+block.y);
				switch(block.orientation){
					case "left":
						if(block.x >240 && block.x<370){	//
								handleObj.showRubberBandArea("A_rubber_area");							
								for(var j=89; j<=91; j++){	//
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
								for(var j=92; j<=94; j++){	//
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
								for(var j=95; j<=97; j++){	//
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
								&& $("#"+block.ansObj).offset().left>=426 && $("#"+block.ansObj).offset().left<=550){
									ctx37.clearRect(322,5,34,36), ctx37.clearRect(322,55,34,36);
									ctx37.fillText(block.value,335,40), ctx37.fillText(block.value,335,90);
								}
								else if(Panel_A.extend !="" && $("#"+block.ansObj).offset().top>=557 && $("#"+block.ansObj).offset().top<=666 
								&& $("#"+block.ansObj).offset().left>=499 && $("#"+block.ansObj).offset().left<=554){	//分子
									if(Panel_A.result_denom ==""){
										ctx37.clearRect(475,55,52,40);
									}
									ctx37.clearRect(475,5,52,40);
									ctx37.fillText(block.value,500,40);
								}
								else if(Panel_A.extend !="" && $("#"+block.ansObj).offset().top>=557 && $("#"+block.ansObj).offset().top<=666 
								&& $("#"+block.ansObj).offset().left>=427 && $("#"+block.ansObj).offset().left<=493){	//分母
									if(Panel_A.result_nume ==""){
										ctx37.clearRect(475,5,52,40);
									}
									ctx37.clearRect(475,55,52,40);
									ctx37.fillText(block.value,500,90);
								}
								else{
									draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								}
								break;
							case "B_count":
								block.x = block.offset.x + event.changedTouches[i].pageX;
								block.y = block.offset.y + event.changedTouches[i].pageY;	
								$("#"+block.ansObj).css("-webkit-transform",["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
								
								if(Panel_B.result_nume =="" && Panel_B.result_denom =="" && $("#"+block.ansObj).offset().top>=1077 && $("#"+block.ansObj).offset().top <=1196 
								&& $("#"+block.ansObj).offset().left>=1088 && $("#"+block.ansObj).offset().left<=1180){	//擴、約分數值
									ctx41.clearRect(322,5,34,36), ctx41.clearRect(322,55,34,36);
									ctx41.fillText(block.value,335,40), ctx41.fillText(block.value,335,90);
								}
								else if(Panel_B.extend !="" && $("#"+block.ansObj).offset().top>=1076 && $("#"+block.ansObj).offset().top<=1124 
								&& $("#"+block.ansObj).offset().left>=1246 && $("#"+block.ansObj).offset().left<=1357){	//分子
									if(Panel_B.result_denom ==""){
										ctx41.clearRect(475,55,52,40);
									}
									ctx41.clearRect(475,5,52,40);
									ctx41.fillText(block.value,500,40);
								}
								else if(Panel_B.extend !="" && $("#"+block.ansObj).offset().top>=1131 && $("#"+block.ansObj).offset().top<=1191 
								&& $("#"+block.ansObj).offset().left>=1246 && $("#"+block.ansObj).offset().left<=1357){	//分母
									if(Panel_B.result_nume ==""){
										ctx41.clearRect(475,5,52,40);
									}
									ctx41.clearRect(475,55,52,40);
									ctx41.fillText(block.value,500,90);
								}
								else{
									draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								}
								break;
							case "C_count":
								block.x = block.offset.x + event.changedTouches[i].pageX;
								block.y = block.offset.y + event.changedTouches[i].pageY;	
								$("#"+block.ansObj).css("-webkit-transform",["translate3d(",block.x,"px, ",block.y,"px, 0px) ","rotate(",-90,"deg)"].join(""));
								
								if(Panel_C.result_nume =="" && Panel_C.result_denom =="" && $("#"+block.ansObj).offset().top>=382 && $("#"+block.ansObj).offset().top <=478 
								&& $("#"+block.ansObj).offset().left>=1677 && $("#"+block.ansObj).offset().left<=1795){	//擴、約分數值
									ctx45.clearRect(322,5,34,36), ctx45.clearRect(322,55,34,36);
									ctx45.fillText(block.value,335,40), ctx45.fillText(block.value,335,90);
								}
								else if(Panel_C.extend !="" && $("#"+block.ansObj).offset().top>=201 && $("#"+block.ansObj).offset().top<=334 
								&& $("#"+block.ansObj).offset().left>=1678 && $("#"+block.ansObj).offset().left<=1723){	//分子
									if(Panel_C.result_denom ==""){
										ctx45.clearRect(475,55,52,40);
									}
									ctx45.clearRect(475,5,52,40);
									ctx45.fillText(block.value,500,40);
								}
								else if(Panel_C.extend !="" && $("#"+block.ansObj).offset().top>=201 && $("#"+block.ansObj).offset().top<=334 
								&& $("#"+block.ansObj).offset().left>=1732 && $("#"+block.ansObj).offset().left<=1797){	//分母
									if(Panel_C.result_nume ==""){
										ctx45.clearRect(475,5,52,40);
									}
									ctx45.clearRect(475,55,52,40);
									ctx45.fillText(block.value,500,90);
								}								
								else{
									draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								}
								break;
					}
					break;				
				case "scatter":  //散落在區域的圖卡
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
					//console.log("x:"+block.x+" y:"+block.y);
					switch(block.orientation){		//橡皮筋功能(丟圖到中央區域)
						case "left":  //Member A的操作
							if(block.x >240 && block.x<370){	//
								handleObj.showRubberBandArea("A_rubber_area");							
								for(var j=89; j<=91; j++){	//
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
								for(var j=92; j<=94; j++){	//
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
								for(var j=95; j<=97; j++){	//
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
	//event.changedTouches = event.targetTouches;
	
	for(var i=0; i<event.changedTouches.length; i++){
		var block = blockMap[event.changedTouches[i].identifier];		
		if(block){
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
					singleCheck();
				}				
			}	
			for(var j=13; j<=21; j++){//判斷物件進入個人圖像填空區
				if((block.obj.offset().left+90 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+90 >=blockArray[j].obj.offset().top) && 	
					(block.obj.offset().left+90 <=blockArray[j].obj.offset().left+200) && (block.obj.offset().top+90 <=blockArray[j].obj.offset().top+200) && (blockArray[j].empty =="true")
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
				checkCorresponding();
				draw.errorReport();				
			}
			if(block.position == "personal_area" && block.content =="graphic"){	//直接從個人面板拉出來(Rubber band)
				switch(block.orientation){
					case "left":  //Member A的操作
						for(var j=89; j<=91; j++){
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
											block102.obj.css("display","block");
											block102.start = block14;	//儲存拉出圖卡的起始區域
											block102.picData = eval(block.blockName);	//儲存圖卡資料
											block102.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block102.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block102.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_A_fraction_graphic_second":
											block103.obj.css("display","block");
											block103.start = block15;	//儲存拉出圖卡的起始區域
											block103.picData = eval(block.blockName);
											block103.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block103.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block103.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_A_fraction_graphic_third":
											block104.obj.css("display","block");
											block104.start = block16;	//儲存拉出圖卡的起始區域
											block104.picData = eval(block.blockName);
											block104.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block104.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block104.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										}															
							}
						}
						break;
					case "bottom":  //Member B的操作
						for(var j=92; j<=94; j++){	
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
											block105.obj.css("display","block");
											block105.start = block17;	//儲存拉出圖卡的起始區域
											block105.picData = eval(block.blockName);
											block105.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block105.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block105.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_B_fraction_graphic_second":
											block106.obj.css("display","block");
											block106.start = block18;	//儲存拉出圖卡的起始區域
											block106.picData = eval(block.blockName);
											block106.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block106.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block106.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_B_fraction_graphic_third":
											block107.obj.css("display","block");
											block107.start = block19;	//儲存拉出圖卡的起始區域
											block107.picData = eval(block.blockName);
											block107.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block107.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block107.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										}																
							}
						}
						break;
					case "right":  //Member C的操作
						for(var j=95; j<=97; j++){	
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
											block108.obj.css("display","block");
											block108.start = block20;	//儲存拉出圖卡的起始區域
											block108.picData = eval(block.blockName);
											block108.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block108.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block108.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_C_fraction_graphic_second":
											block109.obj.css("display","block");
											block109.start = block21;	//儲存拉出圖卡的起始區域
											block109.picData = eval(block.blockName);
											block109.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block109.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block109.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_C_fraction_graphic_third":
											block110.obj.css("display","block");
											block110.start = block22;	//儲存拉出圖卡的起始區域
											block110.picData = eval(block.blockName);
											block110.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block110.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block110.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
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
						for(var j=89; j<=91; j++){
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
											block102.obj.css("display","block");
											block102.start = block14;	//儲存拉出圖卡的起始區域
											block102.picData = eval(block.blockName);
											block102.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block102.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block102.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_A_fraction_graphic_second":
											block103.obj.css("display","block");
											block103.start = block15;	//儲存拉出圖卡的起始區域
											block103.picData = eval(block.blockName);
											block103.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block103.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block103.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_A_fraction_graphic_third":
											block104.obj.css("display","block");
											block104.start = block16;	//儲存拉出圖卡的起始區域
											block104.picData = eval(block.blockName);
											block104.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block104.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block104.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										}																	
							}
						}
						break;
					case "bottom":  //Member B的操作
						for(var j=92; j<=94; j++){	
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
											block105.obj.css("display","block");
											block105.start = block17;	//儲存拉出圖卡的起始區域
											block105.picData = eval(block.blockName);
											block105.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block105.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block105.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_B_fraction_graphic_second":
											block106.obj.css("display","block");
											block106.start = block18;	//儲存拉出圖卡的起始區域
											block106.picData = eval(block.blockName);
											block106.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block106.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block106.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_B_fraction_graphic_third":
											block107.obj.css("display","block");
											block107.start = block19;	//儲存拉出圖卡的起始區域
											block107.picData = eval(block.blockName);
											block107.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block107.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block107.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										}																	
							}
						}
						break;
					case "right":  //Member C的操作
						for(var j=95; j<=97; j++){	
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
											block108.obj.css("display","block");
											block108.start = block20;	//儲存拉出圖卡的起始區域
											block108.picData = eval(block.blockName);
											block108.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block108.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block108.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_C_fraction_graphic_second":
											block109.obj.css("display","block");
											block109.start = block21;	//儲存拉出圖卡的起始區域
											block109.picData = eval(block.blockName);
											block109.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block109.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block109.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										case "member_C_fraction_graphic_third":
											block110.obj.css("display","block");
											block110.start = block22;	//儲存拉出圖卡的起始區域
											block110.picData = eval(block.blockName);
											block110.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block110.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											block110.whichBlock.take = false; //暫時不讓中央區域的圖卡被拖曳
											break;
										}																	
							}
						}
						break;
				}
			}
		/*	for(var j=4; j<=12; j++){//判斷物件進入個人字符填空區
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
			}*/
			if(block.id =="A_count"){	//輸入數值的判定
				if(Panel_A.result_nume =="" && Panel_A.result_denom =="" && $("#"+block.ansObj).offset().top>=400 && $("#"+block.ansObj).offset().top <=500 
				&& $("#"+block.ansObj).offset().left>=426 && $("#"+block.ansObj).offset().left<=550){	//填入擴、約分數值
					Panel_A.extend = block.value;
					switch(Panel_A.operator){
						case "÷":
							if((Panel_A.original_denom % Panel_A.extend ==0) &&(Panel_A.original_nume % Panel_A.extend ==0)){
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								draw.drawCutGra(eval(block28.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.original_nume, Panel_A.original_denom, Panel_A.extend, Panel_A.operator);								
								$("#A_message").html("");
							}else{
								data_log.member_A_trans_error_times ++;	//記錄錯誤次數
								Panel_A.extend ="";
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");								
								$("#A_message").html("這個數值除不盡");
								draw.clearDraw(eval(block28.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_A.original_denom * Panel_A.extend <=30){
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								draw.drawCutGra(eval(block28.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.original_nume, Panel_A.original_denom, Panel_A.extend, Panel_A.operator);
								$("#A_message").html("");
							}else{
								data_log.member_A_trans_error_times ++;	//記錄錯誤次數
								Panel_A.extend ="";
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								$("#A_message").html("這個數值過大");
								draw.clearDraw(eval(block28.pen),150,150);
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
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								block87.obj.css("color","black"), block87.use = true;	
								$("#A_message").html("");
							}else{
								data_log.member_A_trans_error_times ++;	//記錄錯誤次數
								Panel_A.result_nume = "";
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								block34.use = false, block34.obj.css("color","white");
								draw.clearDraw(eval(block29.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_A.result_nume == Panel_A.original_nume * Panel_A.extend){
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								block87.obj.css("color","black"), block87.use = true;	
								$("#A_message").html("");
							}else{
								data_log.member_A_trans_error_times ++;	//記錄錯誤次數
								Panel_A.result_nume = "";
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								block34.use = false, block34.obj.css("color","white");
								draw.clearDraw(eval(block29.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_A.result_nume !="" && Panel_A.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block29.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.result_nume, Panel_A.result_denom, Panel_A.extend, Panel_A.operator); 
						block34.use = true, block34.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;					
				}
				
				else if(Panel_A.extend !="" && $("#"+block.ansObj).offset().top>=557 && $("#"+block.ansObj).offset().top<=666 
				&& $("#"+block.ansObj).offset().left>=427 && $("#"+block.ansObj).offset().left<=493){//填完擴充的數值後，進行結果的填值(分母部分)					
					Panel_A.result_denom = block.value;	
					block87.obj.css("color","black"), block87.use = true;				
					switch(Panel_A.operator){
						case "÷":
							if(Panel_A.result_denom == Panel_A.original_denom / Panel_A.extend){
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								block87.obj.css("color","black"), block87.use = true;	
								$("#A_message").html("");
							}else{
								data_log.member_A_trans_error_times ++;	//記錄錯誤次數
								Panel_A.result_denom = "";
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								block34.use = false, block34.obj.css("color","white");
								draw.clearDraw(eval(block29.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_A.result_denom == Panel_A.original_denom * Panel_A.extend){
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								block87.obj.css("color","black"), block87.use = true;	
								$("#A_message").html("");
							}else{
								data_log.member_A_trans_error_times ++;	//記錄錯誤次數
								Panel_A.result_denom = "";
								draw.drawPanelSym(eval(block24.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								block34.use = false, block34.obj.css("color","white");
								draw.clearDraw(eval(block29.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_A.result_nume !="" && Panel_A.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block29.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.result_nume, Panel_A.result_denom, Panel_A.extend, Panel_A.operator); 
						block34.use = true, block34.obj.css("color","black");
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
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								draw.drawCutGra(eval(block41.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.original_nume, Panel_B.original_denom, Panel_B.extend, Panel_B.operator);								
								$("#B_message").html("");
							}else{
								data_log.member_B_trans_error_times ++;	//記錄錯誤次數
								Panel_B.extend ="";
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								$("#B_message").html("這個數值除不盡");
								draw.clearDraw(eval(block41.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_B.original_denom * Panel_B.extend <=30){
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								draw.drawCutGra(eval(block41.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.original_nume, Panel_B.original_denom, Panel_B.extend, Panel_B.operator);
								$("#B_message").html("");
							}else{
								data_log.member_B_trans_error_times ++;	//記錄錯誤次數
								Panel_B.extend ="";
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								$("#B_message").html("這個數值過大");
								draw.clearDraw(eval(block41.pen),150,150);
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
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								block88.obj.css("color","black"), block88.use = true;
								$("#B_message").html("");
							}else{
								data_log.member_B_trans_error_times ++;	//記錄錯誤次數
								Panel_B.result_nume ="";
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								block47.use = false, block47.obj.css("color","white");
								draw.clearDraw(eval(block42.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_B.result_nume == Panel_B.original_nume * Panel_B.extend){
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								block88.obj.css("color","black"), block88.use = true;
								$("#B_message").html("");
							}else{
								data_log.member_B_trans_error_times ++;	//記錄錯誤次數
								Panel_B.result_nume ="";
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								block47.use = false, block47.obj.css("color","white");
								draw.clearDraw(eval(block42.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_B.result_nume !="" && Panel_B.result_denom != "" ){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block42.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.result_nume, Panel_B.result_denom, Panel_B.extend, Panel_B.operator); 
						block47.use = true, block47.obj.css("color","black");
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
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								block88.obj.css("color","black"), block88.use = true;
								$("#B_message").html("");
							}else{
								data_log.member_B_trans_error_times ++;	//記錄錯誤次數
								Panel_B.result_denom = "";
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								block47.use = false, block47.obj.css("color","white");
								draw.clearDraw(eval(block42.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_B.result_denom == Panel_B.original_denom * Panel_B.extend){
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								block88.obj.css("color","black"), block88.use = true;
								$("#B_message").html("");
							}else{
								data_log.member_B_trans_error_times ++;	//記錄錯誤次數
								Panel_B.result_denom = "";
								draw.drawPanelSym(eval(block37.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								block47.use = false, block47.obj.css("color","white");
								draw.clearDraw(eval(block42.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_B.result_nume !="" && Panel_B.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block42.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.result_nume, Panel_B.result_denom, Panel_B.extend, Panel_B.operator); 
						block47.use = true, block47.obj.css("color","black");
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
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								draw.drawCutGra(eval(block54.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.original_nume, Panel_C.original_denom, Panel_C.extend, Panel_C.operator);								
								$("#C_message").html("");
							}else{
								data_log.member_C_trans_error_times ++;	//記錄錯誤次數
								Panel_C.extend = "";
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								$("#C_message").html("這個數值除不盡");
								draw.clearDraw(eval(block54.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_C.original_denom * Panel_C.extend <=30){
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								draw.drawCutGra(eval(block54.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.original_nume, Panel_C.original_denom, Panel_C.extend, Panel_C.operator);
								$("#C_message").html("");
							}else{
								data_log.member_C_trans_error_times ++;	//記錄錯誤次數
								Panel_C.extend = "";
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								$("#C_message").html("這個數值過大");
								draw.clearDraw(eval(block54.pen),150,150);
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
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								block89.obj.css("color","black"), block89.use = true;
								$("#C_message").html("");
							}else{
								data_log.member_C_trans_error_times ++;	//記錄錯誤次數
								Panel_C.result_nume = "";
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								block60.use = false, block60.obj.css("color","white");
								draw.clearDraw(eval(block55.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_C.result_nume == Panel_C.original_nume * Panel_C.extend){
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								block89.obj.css("color","black"), block89.use = true;
								$("#C_message").html("");
							}else{
								data_log.member_C_trans_error_times ++;	//記錄錯誤次數
								Panel_C.result_nume = "";
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								block60.use = false, block60.obj.css("color","white");
								draw.clearDraw(eval(block55.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_C.result_nume !="" && Panel_C.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block55.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.result_nume, Panel_C.result_denom, Panel_C.extend, Panel_C.operator); 
						block60.use = true, block60.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}else if(Panel_C.extend !="" && $("#"+block.ansObj).offset().top>=201 && $("#"+block.ansObj).offset().top<=334 
				&& $("#"+block.ansObj).offset().left>=1732 && $("#"+block.ansObj).offset().left<=1797){//填完擴充的數值後，進行結果的填值(分母部分)
					Panel_C.result_denom = block.value;					
					switch(Panel_C.operator){
						case "÷":
							if(Panel_C.result_denom == Panel_C.original_denom / Panel_C.extend){
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								block89.obj.css("color","black"), block89.use = true;
								$("#C_message").html("");
							}else{
								data_log.member_C_trans_error_times ++;	//記錄錯誤次數
								Panel_C.result_denom = "";
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								block60.use = false, block60.obj.css("color","white");
								draw.clearDraw(eval(block55.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_C.result_denom == Panel_C.original_denom * Panel_C.extend){
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								block89.obj.css("color","black"), block89.use = true;
								$("#C_message").html("");
							}else{
								data_log.member_C_trans_error_times ++;	//記錄錯誤次數
								Panel_C.result_denom = "";
								draw.drawPanelSym(eval(block50.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								block60.use = false, block60.obj.css("color","white");
								draw.clearDraw(eval(block55.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_C.result_nume !="" && Panel_C.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block55.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.result_nume, Panel_C.result_denom, Panel_C.extend, Panel_C.operator); 
						block60.use = true, block60.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}else{
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}
			}
			
			for(var j=13; j<=21; j++){	//當手指點擊個人圖像面板離開時							
					if(block.id == blockArray[j].id){
						block.x =0, block.y=0;
					}
			}
		}
		
		delete blockMap[event.changedTouches[i].identifier];
	}
}

timer = setInterval(calTotalTime,1000);
initial();
setInterval(handleObj.disableRubber, 1000);	//判斷目前Rubber band區域是可用?
document.addEventListener('touchstart', touchstart, false);//觸發touchstart事件
document.addEventListener('touchmove', touchmove, false);//觸發touchmove事件
document.addEventListener('touchend', touchend, false);//觸發touchend事件

addEventListener('keydown',function(event){
	switch(event.keyCode){
		case 65:	//A
			correctCouple();
			break;
		case 66:	//B
			showextendObj();			
			break;
		case 67:	//C
			handleObj.randomGraSym();
			break;
		case 68:	//D
			draw.recoverGraSym();
			break;
		case 69:	//E
			block1.use = false, block2.use = false ,block66.use = false;
			check();
			break;
		case 70: //F
			block99.obj.css("display","block"), block100.obj.css("display","block"), block101.obj.css("display","block");
			break;
		case 71:	//G
			$("#"+block90.linkLine).css("display", "block"), $("#"+block91.linkLine).css("display", "block"), $("#"+block92.linkLine).css("display", "block");
			break;
		case 72:	//H
			$("#"+block93.linkLine).css("display", "block"), $("#"+block94.linkLine).css("display", "block"), $("#"+block95.linkLine).css("display", "block");
			break;
		case 73:	//I
			$("#"+block96.linkLine).css("display", "block"), $("#"+block97.linkLine).css("display", "block"), $("#"+block98.linkLine).css("display", "block");
			break;
	}
}, false);