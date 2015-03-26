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

function initial(){	//初始化題目	
	var which_1 =0, which_2 = Math.round(Math.random() *1);
	var which_show = Math.round(Math.random() *3);
	var show = {	//選擇哪個空格畫上圖像及字符
		graphic: ["ctx2","ctx3","ctx4","ctx5"],
		symbol: ["ctx27","ctx28","ctx29","ctx30"],
		gra_block:[block1, block2, block3, block4],
		sym_block:[block5, block6, block7, block8]
	}	
	
	 if(show_style[which_1] == "cloze"){	//初始化第二道題目
		if(order_type[which_2] == "decresing"){
			order = order_type[which_2];
			handleObj.switchOrder(order);	//判斷第一題的排序
			Central_question.value[0] = decresing[2];
			Central_question.value[1] = decresing[5];
			Central_question.value[2] = decresing[7];
			Central_question.value[3] = decresing[9];						
			Central_question.imgPath[0] = image.decresing[2];
			Central_question.imgPath[1] = image.decresing[5];
			Central_question.imgPath[2] = image.decresing[7];
			Central_question.imgPath[3] = image.decresing[9];			
			Central_question.denom[0] = decre_symbol.denom[2], Central_question.denom[1] = decre_symbol.denom[5];
			Central_question.denom[2] = decre_symbol.denom[7], Central_question.denom[3] = decre_symbol.denom[9];			
			Central_question.nume[0] = decre_symbol.nume[2], Central_question.nume[1] = decre_symbol.nume[5];
			Central_question.nume[2] = decre_symbol.nume[7], Central_question.nume[3] = decre_symbol.nume[9];
			
			for(var i=0; i<10; i++){
				if(ori_symbol.nume[i] == Central_question.nume[which_show] && ori_symbol.denom[i] == Central_question.denom[which_show] ){
					cloze_question.graphic = show.graphic[which_show], cloze_question.symbol = show.symbol[which_show];
					cloze_question.nume = Central_question.nume[which_show], cloze_question.denom = Central_question.denom[which_show];
					cloze_question.gra_path = image.original[i], cloze_question.order = "decresing", cloze_question.gra_block = show.gra_block[which_show];
					cloze_question.sym_block = show.sym_block[which_show];
					ori_symbol.nume.splice(i,1), ori_symbol.denom.splice(i,1), ori_path.splice(i,1), image.original.splice(i,1); 
				}
			}
			
			/**紀錄圖卡資料**/	
			member.A_Sym.nume[0] = ori_symbol.nume[0], member.A_Sym.denom[0] = ori_symbol.denom[0];	//member A 分子分母			
			member.A_Sym.nume[1] = ori_symbol.nume[1], member.A_Sym.denom[1] = ori_symbol.denom[1];	//member A 分子分母
			member.A_Sym.nume[2] = ori_symbol.nume[2], member.A_Sym.denom[2] = ori_symbol.denom[2];	//member A 分子分母
			
			
			member.B_Sym.nume[0] = ori_symbol.nume[3], member.B_Sym.denom[0] = ori_symbol.denom[3];	//member B 分子分母
			member.B_Sym.nume[1] = ori_symbol.nume[4], member.B_Sym.denom[1] = ori_symbol.denom[4];	//member B 分子分母
			member.B_Sym.nume[2] = ori_symbol.nume[5], member.B_Sym.denom[2] = ori_symbol.denom[5];	//member B 分子分母
			
			
			member.C_Sym.nume[0] = ori_symbol.nume[6], member.C_Sym.denom[0] = ori_symbol.denom[6];	//member C 分子分母
			member.C_Sym.nume[1] = ori_symbol.nume[7], member.C_Sym.denom[1] = ori_symbol.denom[7];	//member C 分子分母
			member.C_Sym.nume[2] = ori_symbol.nume[8], member.C_Sym.denom[2] = ori_symbol.denom[8];	//member C 分子分母
			
			
			member.A_Gra[0] = image.original[0], member.A_Gra[1] = image.original[1], member.A_Gra[2] = image.original[2];	//member A的圖檔
			member.B_Gra[0] = image.original[3], member.B_Gra[1] = image.original[4], member.B_Gra[2] = image.original[5];	//member B的圖檔
			member.C_Gra[0] = image.original[6], member.C_Gra[1] = image.original[7], member.C_Gra[2] = image.original[8];	//member C的圖檔
			/***/
			
			/**紀錄字符資料*/
			var r = [];
			rand_number(0,3,3,r);	//min, max, amount ,array
			member_Sym.A_Sym.nume[0] = member.B_Sym.nume[ r[1] ],  member_Sym.A_Sym.denom[0] = member.B_Sym.denom[ r[1] ];
			member_Sym.A_Sym.nume[1] = member.B_Sym.nume[ r[2] ],  member_Sym.A_Sym.denom[1] = member.B_Sym.denom[ r[2] ];
			member_Sym.A_Sym.nume[2] = member.C_Sym.nume[ r[0] ],  member_Sym.A_Sym.denom[2] = member.C_Sym.denom[ r[0] ];
			
			member_Sym.B_Sym.nume[0] = member.C_Sym.nume[ r[1] ],  member_Sym.B_Sym.denom[0] = member.C_Sym.denom[ r[1] ];
			member_Sym.B_Sym.nume[1] = member.C_Sym.nume[ r[2] ],  member_Sym.B_Sym.denom[1] = member.C_Sym.denom[ r[2] ];
			member_Sym.B_Sym.nume[2] = member.A_Sym.nume[ r[0] ],  member_Sym.B_Sym.denom[2] = member.A_Sym.denom[ r[0] ];
			
			member_Sym.C_Sym.nume[0] = member.A_Sym.nume[ r[1] ],  member_Sym.C_Sym.denom[0] = member.A_Sym.denom[ r[1] ];
			member_Sym.C_Sym.nume[1] = member.A_Sym.nume[ r[2] ],  member_Sym.C_Sym.denom[1] = member.A_Sym.denom[ r[2] ];
			member_Sym.C_Sym.nume[2] = member.B_Sym.nume[ r[0] ],  member_Sym.C_Sym.denom[2] = member.B_Sym.denom[ r[0] ];
			
			/***/
			
			draw.drawOrder(order_type[which_2] );
			draw.initialMemberGra(member.A_Gra[0], member.A_Gra[1], member.A_Gra[2], member.B_Gra[0], member.B_Gra[1], member.B_Gra[2], member.C_Gra[0], member.C_Gra[1], member.C_Gra[2]);	//載入member A, B, C圖像
			draw.initialMemberSym(member_Sym.A_Sym, member_Sym.B_Sym, member_Sym.C_Sym);	//載入member_A,B,C字符
			
			for(var i = 12; i<=14; i++){	//指定member_A字符空格內的值
				eval("block"+i+".denom=member_Sym.A_Sym.denom["+(i-12)+"]");
				eval("block"+i+".nume=member_Sym.A_Sym.nume["+(i-12)+"]");
				eval("block"+i+".value=member_Sym.A_Sym.nume["+(i-12)+"] / "+"member_Sym.A_Sym.denom["+(i-12)+"]");				
				eval("block"+i+".blockName='A_s"+(i-12)+"'");	
			}			
			for(var i = 15; i<=17; i++){	//指定member_B字符空格內的值
				eval("block"+i+".denom=member_Sym.B_Sym.denom["+(i-15)+"]");
				eval("block"+i+".nume=member_Sym.B_Sym.nume["+(i-15)+"]");
				eval("block"+i+".value=member_Sym.B_Sym.nume["+(i-15)+"] / "+"member_Sym.B_Sym.denom["+(i-15)+"]");				
				eval("block"+i+".blockName='B_s"+(i-15)+"'");	
			}						
			for(var i = 18; i<=20; i++){	//指定member_C字符空格內的值
				eval("block"+i+".denom=member_Sym.C_Sym.denom["+(i-18)+"]");
				eval("block"+i+".nume=member_Sym.C_Sym.nume["+(i-18)+"]");
				eval("block"+i+".value=member_Sym.C_Sym.nume["+(i-18)+"] / "+"member_Sym.C_Sym.denom["+(i-18)+"]");				
				eval("block"+i+".blockName='C_s"+(i-18)+"'");	
			}
			for(var i = 21; i<=23; i++){	//指定member_A圖像空格內的值
				eval("block"+i+".denom=member.A_Sym.denom["+(i-21)+"]");
				eval("block"+i+".nume=member.A_Sym.nume["+(i-21)+"]");				
				eval("block"+i+".value=member.A_Sym.nume["+(i-21)+"] / "+"member.A_Sym.denom["+(i-21)+"]");				
				eval("block"+i+".src=member.A_Gra["+(i-21)+"]");	
				eval("block"+i+".blockName='A_"+(i-21)+"'");
			}			
			for(var i = 24; i<=26; i++){	//指定member_B圖像空格內的值
				eval("block"+i+".denom=member.B_Sym.denom["+(i-24)+"]");
				eval("block"+i+".nume=member.B_Sym.nume["+(i-24)+"]");				
				eval("block"+i+".value=member.B_Sym.nume["+(i-24)+"] / "+"member.B_Sym.denom["+(i-24)+"]");
				eval("block"+i+".src=member.B_Gra["+(i-24)+"]");	
				eval("block"+i+".blockName='B_"+(i-24)+"'");	
			}
			for(var i = 27; i<=29; i++){	//指定member_C圖像空格內的值
				eval("block"+i+".denom=member.C_Sym.denom["+(i-27)+"]");
				eval("block"+i+".nume=member.C_Sym.nume["+(i-27)+"]");				
				eval("block"+i+".value=member.C_Sym.nume["+(i-27)+"] / "+"member.C_Sym.denom["+(i-27)+"]");
				eval("block"+i+".src=member.C_Gra["+(i-27)+"]");	
				eval("block"+i+".blockName='C_"+(i-27)+"'");	
			}
			draw.errorReport();	//讓學生了解目前哪組配對錯誤
		}
		if(order_type[which_2] == "incresing"){
			order = order_type[which_2];
			handleObj.switchOrder(order);	//判斷第一題的排序
			Central_question.value[0] = incresing[2];
			Central_question.value[1] = incresing[5];
			Central_question.value[2] = incresing[7];
			Central_question.value[3] = incresing[9];						
			Central_question.imgPath[0] = image.incresing[2];
			Central_question.imgPath[1] = image.incresing[5];
			Central_question.imgPath[2] = image.incresing[7];
			Central_question.imgPath[3] = image.incresing[9];			
			Central_question.denom[0] = incre_symbol.denom[2], Central_question.denom[1] = incre_symbol.denom[5];
			Central_question.denom[2] = incre_symbol.denom[7], Central_question.denom[3] = incre_symbol.denom[9];			
			Central_question.nume[0] = incre_symbol.nume[2], Central_question.nume[1] = incre_symbol.nume[5];
			Central_question.nume[2] = incre_symbol.nume[7], Central_question.nume[3] = incre_symbol.nume[9];
			
			for(var i=0; i<10; i++){
				if(ori_symbol.nume[i] == Central_question.nume[which_show] && ori_symbol.denom[i] == Central_question.denom[which_show] ){
					cloze_question.graphic = show.graphic[which_show], cloze_question.symbol = show.symbol[which_show];
					cloze_question.nume = Central_question.nume[which_show], cloze_question.denom = Central_question.denom[which_show];
					cloze_question.gra_path = image.original[i], cloze_question.order = "incresing", cloze_question.gra_block = show.gra_block[which_show];
					cloze_question.sym_block = show.sym_block[which_show];
					ori_symbol.nume.splice(i,1), ori_symbol.denom.splice(i,1), ori_path.splice(i,1), image.original.splice(i,1); 
				}
			}
			/**紀錄圖卡資料**/	
			member.A_Sym.nume[0] = ori_symbol.nume[0], member.A_Sym.denom[0] = ori_symbol.denom[0];	//member A 分子分母
			member.A_Sym.nume[1] = ori_symbol.nume[1], member.A_Sym.denom[1] = ori_symbol.denom[1];	//member A 分子分母
			member.A_Sym.nume[2] = ori_symbol.nume[2], member.A_Sym.denom[2] = ori_symbol.denom[2];	//member A 分子分母			
			
			member.B_Sym.nume[0] = ori_symbol.nume[3], member.B_Sym.denom[0] = ori_symbol.denom[3];	//member B 分子分母
			member.B_Sym.nume[1] = ori_symbol.nume[4], member.B_Sym.denom[1] = ori_symbol.denom[4];	//member B 分子分母
			member.B_Sym.nume[2] = ori_symbol.nume[5], member.B_Sym.denom[2] = ori_symbol.denom[5];	//member B 分子分母			
			
			member.C_Sym.nume[0] = ori_symbol.nume[6], member.C_Sym.denom[0] = ori_symbol.denom[6];	//member C 分子分母
			member.C_Sym.nume[1] = ori_symbol.nume[7], member.C_Sym.denom[1] = ori_symbol.denom[7];	//member C 分子分母
			member.C_Sym.nume[2] = ori_symbol.nume[8], member.C_Sym.denom[2] = ori_symbol.denom[8];	//member C 分子分母
			
			
			member.A_Gra[0] = image.original[0], member.A_Gra[1] = image.original[1], member.A_Gra[2] = image.original[2];	//member A的圖檔
			member.B_Gra[0] = image.original[3], member.B_Gra[1] = image.original[4], member.B_Gra[2] = image.original[5];	//member B的圖檔
			member.C_Gra[0] = image.original[6], member.C_Gra[1] = image.original[7], member.C_Gra[2] = image.original[8];	//member C的圖檔
			/***/
			
			/**紀錄字符資料*/
			var r = [];
			rand_number(0,3,3,r);	//min, max, amount ,array
			member_Sym.A_Sym.nume[0] = member.B_Sym.nume[ r[1] ],  member_Sym.A_Sym.denom[0] = member.B_Sym.denom[ r[1] ];
			member_Sym.A_Sym.nume[1] = member.B_Sym.nume[ r[2] ],  member_Sym.A_Sym.denom[1] = member.B_Sym.denom[ r[2] ];
			member_Sym.A_Sym.nume[2] = member.C_Sym.nume[ r[0] ],  member_Sym.A_Sym.denom[2] = member.C_Sym.denom[ r[0] ];
			
			member_Sym.B_Sym.nume[0] = member.C_Sym.nume[ r[1] ],  member_Sym.B_Sym.denom[0] = member.C_Sym.denom[ r[1] ];
			member_Sym.B_Sym.nume[1] = member.C_Sym.nume[ r[2] ],  member_Sym.B_Sym.denom[1] = member.C_Sym.denom[ r[2] ];
			member_Sym.B_Sym.nume[2] = member.A_Sym.nume[ r[0] ],  member_Sym.B_Sym.denom[2] = member.A_Sym.denom[ r[0] ];
			
			member_Sym.C_Sym.nume[0] = member.A_Sym.nume[ r[1] ],  member_Sym.C_Sym.denom[0] = member.A_Sym.denom[ r[1] ];
			member_Sym.C_Sym.nume[1] = member.A_Sym.nume[ r[2] ],  member_Sym.C_Sym.denom[1] = member.A_Sym.denom[ r[2] ];
			member_Sym.C_Sym.nume[2] = member.B_Sym.nume[ r[0] ],  member_Sym.C_Sym.denom[2] = member.B_Sym.denom[ r[0] ];
			
			/***/
			
			draw.drawOrder(order_type[which_2] );
			draw.initialMemberGra(member.A_Gra[0], member.A_Gra[1], member.A_Gra[2], member.B_Gra[0], member.B_Gra[1], member.B_Gra[2], member.C_Gra[0], member.C_Gra[1], member.C_Gra[2]);	//載入member A, B, C圖像
			draw.initialMemberSym(member_Sym.A_Sym, member_Sym.B_Sym, member_Sym.C_Sym);	//載入member_A,B,C字符
			
			for(var i = 12; i<=14; i++){	//指定member_A字符空格內的值
				eval("block"+i+".denom=member_Sym.A_Sym.denom["+(i-12)+"]");
				eval("block"+i+".nume=member_Sym.A_Sym.nume["+(i-12)+"]");
				eval("block"+i+".value=member_Sym.A_Sym.nume["+(i-12)+"] / "+"member_Sym.A_Sym.denom["+(i-12)+"]");				
				eval("block"+i+".blockName='A_s"+(i-12)+"'");	
			}			
			for(var i = 15; i<=17; i++){	//指定member_B字符空格內的值
				eval("block"+i+".denom=member_Sym.B_Sym.denom["+(i-15)+"]");
				eval("block"+i+".nume=member_Sym.B_Sym.nume["+(i-15)+"]");
				eval("block"+i+".value=member_Sym.B_Sym.nume["+(i-15)+"] / "+"member_Sym.B_Sym.denom["+(i-15)+"]");				
				eval("block"+i+".blockName='B_s"+(i-15)+"'");	
			}						
			for(var i = 18; i<=20; i++){	//指定member_C字符空格內的值
				eval("block"+i+".denom=member_Sym.C_Sym.denom["+(i-18)+"]");
				eval("block"+i+".nume=member_Sym.C_Sym.nume["+(i-18)+"]");
				eval("block"+i+".value=member_Sym.C_Sym.nume["+(i-18)+"] / "+"member_Sym.C_Sym.denom["+(i-18)+"]");				
				eval("block"+i+".blockName='C_s"+(i-18)+"'");	
			}		
			for(var i = 21; i<=23; i++){	//指定member_A圖像空格內的值
				eval("block"+i+".denom=member.A_Sym.denom["+(i-21)+"]");
				eval("block"+i+".nume=member.A_Sym.nume["+(i-21)+"]");			
				eval("block"+i+".value=member.A_Sym.nume["+(i-21)+"] / "+"member.A_Sym.denom["+(i-21)+"]");
				eval("block"+i+".src=member.A_Gra["+(i-21)+"]");	
				eval("block"+i+".blockName='A_"+(i-21)+"'");	
			}			
			for(var i = 24; i<=26; i++){	//指定member_B圖像空格內的值
				eval("block"+i+".denom=member.B_Sym.denom["+(i-24)+"]");
				eval("block"+i+".nume=member.B_Sym.nume["+(i-24)+"]");				
				eval("block"+i+".value=member.B_Sym.nume["+(i-24)+"] / "+"member.B_Sym.denom["+(i-24)+"]");
				eval("block"+i+".src=member.B_Gra["+(i-24)+"]");	
				eval("block"+i+".blockName='B_"+(i-24)+"'");	
			}
			for(var i = 27; i<=29; i++){	//指定member_C圖像空格內的值
				eval("block"+i+".denom=member.C_Sym.denom["+(i-27)+"]");
				eval("block"+i+".nume=member.C_Sym.nume["+(i-27)+"]");				
				eval("block"+i+".value=member.C_Sym.nume["+(i-27)+"] / "+"member.C_Sym.denom["+(i-27)+"]");
				eval("block"+i+".src=member.C_Gra["+(i-27)+"]");	
				eval("block"+i+".blockName='C_"+(i-27)+"'");	
			}			
			draw.errorReport();	//讓學生了解目前哪組配對錯誤			
		}
	}
	giveFirstQues();	//產生第一道題目
	handleObj.closeRemind();	//十秒後關閉說明
	window.onload = function(){
		correctCouple();
		for(i=20; i<=28; i++){	//儲存每張圖卡的初始分子分母、圖卡路徑、圖卡擴約分前的值
			blockArray[i].original_nume =blockArray[i].nume / GCD(blockArray[i].nume, blockArray[i].denom);
			blockArray[i].original_denom =blockArray[i].denom / GCD(blockArray[i].nume, blockArray[i].denom);
			blockArray[i].first_nume = blockArray[i].nume;
			blockArray[i].first_denom = blockArray[i].denom;
			blockArray[i].first_path = blockArray[i].src;
		}
		for(var i=11; i<=19; i++){	//儲存每張字符的初始分子分母、圖卡路徑、圖卡擴約分前的值
			blockArray[i].original_nume =blockArray[i].nume / GCD(blockArray[i].nume, blockArray[i].denom);
			blockArray[i].original_denom =blockArray[i].denom / GCD(blockArray[i].nume, blockArray[i].denom);
			blockArray[i].first_nume = blockArray[i].nume;
			blockArray[i].first_denom = blockArray[i].denom;
		}
		showCloze();
	}
}

function GCD(a, b){	//計算最大公因數
	var temp=0;
	while(a%b !=0){
		temp = a%b;
		a=b;
		b=temp;
	}
	return b;
}

function showConfirm(){
	var confirmObj = [block40, block41, block42];
	switch(ques_index){
		case 1:
			if(block43.empty == "false" && block44.empty == "false" && block45.empty == "false"){
				$.each(confirmObj, function(){
					this.obj.css("display","block");
				});
			}else{
				$.each(confirmObj, function(){
					this.obj.css("display","none");
				});
			}
			break;
		case 2:
			if(block1.empty == "false" && block2.empty == "false" && block3.empty == "false" && block4.empty == "false"){
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

function giveFirstQues(){	//產生第一道題目
	var a = Math.round(Math.random() *2), b = Math.round(Math.random() *2), c = Math.round(Math.random() *2);
	var member_A = [block21, block22, block23], member_B = [block24, block25, block26], member_C = [block27, block28, block29];
	member_A[a].select = "yes", member_B[b].select = "yes", member_C[c].select = "yes";
	for(var i =20; i<=28; i++){
		if(blockArray[i].select == "yes"){
			blockArray[i].obj.css("border-color", "blue");
		}
	}
}

function checkCorresponding(){		//判斷字符與圖像是否一致
	var sym = [block12, block13, block14, block15, block16, block17, block18, block19, block20];
	var gra = [block21, block22, block23, block24, block25, block26, block27, block28, block29];	
	
	for(var i=0; i<9; i++){
		if(sym[i].nume == gra[i].nume && sym[i].denom == gra[i].denom && sym[i].empty == "false" && gra[i].empty == "false"){	
			sym[i].corresponding = true;
			gra[i].corresponding = true;
		}else{
			sym[i].corresponding = false;
			gra[i].corresponding = false;
		}
	}
	
	if(block21.corresponding == true && block22.corresponding == true && block23.corresponding == true && block24.corresponding == true && block25.corresponding == true
			&& block26.corresponding == true && block27.corresponding == true && block28.corresponding == true && block29.corresponding == true && first_check == false){	//全部配對好，顯示中央區域題目
			handleObj.showCentralObject();
			/*$("#explain_A").css("opacity","1"), $("#explain_B").css("opacity","1"), $("#explain_C").css("opacity","1");
			$("#explain_A").css("display","block"), $("#explain_B").css("display","block"), $("#explain_C").css("display","block");
			$("#explain_A").html("在此活動中，每個人至少選擇一張圖卡，與同伴完成中央區域大小排序，按下關閉說明後，開始進行活動。");
			$("#explain_B").html("在此活動中，每個人至少選擇一張圖卡，與同伴完成中央區域大小排序，按下關閉說明後，開始進行活動。");
			$("#explain_C").html("在此活動中，每個人至少選擇一張圖卡，與同伴完成中央區域大小排序，按下關閉說明後，開始進行活動。");
			handleObj.hideMemberObject();			
			block37.func = "close", block38.func = "close", block39.func = "close";
			block37.obj.html("關閉說明"), block38.obj.html("關閉說明"), block39.obj.html("關閉說明");*/
			first_check = true;
	}
}

function showCloze(){//顯示填空題目題目
	cloze_question.gra_block.nume = cloze_question.nume, cloze_question.gra_block.denom = cloze_question.denom;	
	cloze_question.sym_block.nume = cloze_question.nume, cloze_question.sym_block.denom = cloze_question.denom;
	cloze_question.gra_block.obj.css("border-color","blue");
	cloze_question.gra_block.occupy = "true";	
	cloze_question.gra_block.empty = "false", cloze_question.sym_block.empty = "false";
	cloze_question.gra_block.value = cloze_question.nume / cloze_question.denom, cloze_question.sym_block.value = cloze_question.nume / cloze_question.denom;
	draw.drawOrder(cloze_question.order), order = cloze_question.order;
	draw.initialCentralSym(eval(cloze_question.symbol), cloze_question.denom, cloze_question.nume);//ctx, denom, nume	畫上字符
	draw.initialCentralGra(eval(cloze_question.graphic), cloze_question.gra_path);////ctx, imgPath  畫上圖像	
}

function showNextQues(){	//顯示下一道題目
	
}

function GivePic(denom, nume){	//給予完整圖形路徑
	var pic = new Image();
	pic.src = "compare_pic/proper/"+denom+"_"+nume+".png";
	return pic;
}

function GivePic2(path, original_denom, original_nume, denom, nume){	//給予完整圖形路徑
	var pic = new Image();
	switch(path){
		case "cut":
			pic.src = "compare_pic/cut_pro/c"+original_denom+"_"+original_nume+"/c"+denom+"_"+nume+".png";
			return pic;
			break;
		case "result":
			pic.src = "compare_pic/r_proper/r"+original_denom+"_"+original_nume+"/r"+denom+"_"+nume+".png";
			return pic;
			break;
	}
}

function showCheck(){
	if(A_check == true && B_check == true && C_check == true){
		check();
	}
}

function correctCouple(){	//直接顯示正確圖卡與字符的配對
	var symArray = [block12, block13, block14, block15, block16, block17, block18, block19, block20];
	var graArray = [block21, block22, block23, block24, block25, block26, block27, block28, block29];
	
	for(var i=0; i<9; i++){
		graArray[i].nume = symArray[i].nume;
		graArray[i].denom = symArray[i].denom;		
		graArray[i].src = GivePic(graArray[i].denom, graArray[i].nume);
	}
	for(var i=0; i<9; i++){
		draw.clearDraw(eval(graArray[i].pen), 200, 200);
	}
	for(var i=0; i<9; i++){
		draw.drawGra(eval(graArray[i].pen), GivePic(graArray[i].denom, graArray[i].nume)); //ctx, imgPath
	}
	//handleObj.showMemberObject();
	checkCorresponding();
	draw.errorReport();
}

function nextStage(){
	if(A_next == true && B_next == true && C_next == true){
		window.location = "add_sub.html";
	}
}

function showNext(){
	if(complete == true){
		block34.obj.css("display","block"), block35.obj.css("display","block"), block36.obj.css("display","block");
		block34.obj.animate({opacity:1},600), block35.obj.animate({opacity:1},600), block36.obj.animate({opacity:1},600);
		handleObj.hideAllbackButton();	//隱藏所有圖卡取回按鈕	
	}
}

function check(){	//判斷最後對錯
	switch(ques_index){
		case 2:
			switch(order){
				case "decresing":
					if(blockArray[0].empty =="false" && blockArray[1].empty == "false" && blockArray[2].empty == "false" && blockArray[3].empty == "false"){				
						if(ques_index == 1 && member_operate.A_first_operate >0 && member_operate.B_first_operate >0 && member_operate.C_first_operate >0){	//判斷是否每個人都有丟圖卡(第一題)					
							if((blockArray[0].value>blockArray[1].value) && (blockArray[1].value >blockArray[2].value) && (blockArray[2].value>blockArray[3].value)){	
								handleObj.createResultBox("correct" ,"correct",700,1450);	//answer, top, left
								$("#correct").animate({top:100, left:500},1500, 
									function(){
										this.remove(); 		
										showNextQues();					
									}
								);
								for(var i=1; i<=8; i++){	//答對時，將空格內的值清除
									eval("block"+i+".empty='true'");
									eval("block"+i+".nume=''");
									eval("block"+i+".denom=''");
									eval("block"+i+".value=''");
									eval("block"+i+".src=''");
								}
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
								A_check = false, B_check = false, C_check = false;
								draw.clearDraw(eval(block1.pen),200,200), draw.clearDraw(eval(block2.pen),200,200);	//清除圖卡
								draw.clearDraw(eval(block3.pen),200,200), draw.clearDraw(eval(block4.pen),200,200);	//清除圖卡
								draw.clearDraw(eval(block5.pen),100,100), draw.clearDraw(eval(block6.pen),100,100);	//清除字符
								draw.clearDraw(eval(block7.pen),100,100), draw.clearDraw(eval(block8.pen),100,100);	//清除字符
								handleObj.randomGraSym();
								draw.recoverGraSym();						
								handleObj.hideAllbackButton();	//隱藏所有圖卡取回按鈕									
						}else{					
							handleObj.createResultBox("error" , "error",700,1450);	//answer, top, left
							block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
							A_check = false, B_check = false, C_check = false;
							$("#error").animate({top:100, left:500},1500, function(){
								this.remove();
							});			
						}						
					}else if(ques_index == 2 && member_operate.A_second_operate >0 && member_operate.B_second_operate >0 && member_operate.C_second_operate >0){	//判斷是否每個人都有丟圖卡(第二題)
						if((blockArray[0].value>blockArray[1].value) && (blockArray[1].value >blockArray[2].value) && (blockArray[2].value>blockArray[3].value)){						
						handleObj.createResultBox("correct","correct",700,1450);	//answer, top, left
						$("#correct").animate({top:100, left:500},1500, 
							function(){
								this.remove();				
						});
						handleObj.showResult();
						block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
						block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
						A_check = false, B_check = false, C_check = false;
						complete = true;
						block30.obj.css("display","none");
						block37.obj.css("display","none"), block38.obj.css("display","none"), block39.obj.css("display","none");
						handleObj.randomGraSym();
						draw.recoverGraSym();
						showNext();															
					}else{						
						handleObj.createResultBox("error","error",700,1450);	//answer, top, left		
						block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
						A_check = false, B_check = false, C_check = false;
						$("#error").animate({top:100, left:500},1500, function(){
							this.remove();
						});			
					}						
				}else{	//假如有人沒丟圖卡
					block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
					block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
					A_check = false, B_check = false, C_check = false;
					switch(ques_index){
						case 1:
							if(member_operate.A_first_operate ==0){
								handleObj.createResultBox("A_no_operate","A_no_operate",500,150);	//answer, top, left
								handleObj.createResultBox("B_warn","B_warn",1020,800);	//answer, top, left
								handleObj.createResultBox("C_warn","C_warn",700,1410);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								A_check = false, B_check = false, C_check = false;
								$("#A_no_operate").animate({left:400},4000, function(){
									this.remove();
								});	
								$("#B_warn").animate({top:1020},4000, function(){
									this.remove();
								});	
								$("#C_warn").animate({top:700},4000, function(){
									this.remove();
								});	
							}else if(member_operate.B_first_operate ==0){
								handleObj.createResultBox("B_no_operate","B_no_operate",1000,950);	//answer, top, left
								handleObj.createResultBox("A_warn","A_warn",640,190);	//answer, top, left
								handleObj.createResultBox("C_warn","C_warn",700,1410);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								A_check = false, B_check = false, C_check = false;
								$("#B_no_operate").animate({top:600},4000, function(){
									this.remove();
								});
								$("#A_warn").animate({top:640},4000, function(){
									this.remove();
								});	
								$("#C_warn").animate({top:700},4000, function(){
									this.remove();
								});	
							}else if(member_operate.C_first_operate ==0){
								handleObj.createResultBox("C_no_operate","C_no_operate",450,1650);	//answer, top, left
								handleObj.createResultBox("A_warn","A_warn",640,190);	//answer, top, left
								handleObj.createResultBox("B_warn","B_warn",1020,800);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								A_check = false, B_check = false, C_check = false;
								$("#C_no_operate").animate({left:1500},4000, function(){
									this.remove();
								});
								$("#A_warn").animate({top:640},4000, function(){
									this.remove();
								});	
								$("#B_warn").animate({top:1020},4000, function(){
									this.remove();
								});	
							}
							break;
						case 2:
							if(member_operate.A_second_operate ==0 && member_operate.B_second_operate !=0 && member_operate.C_second_operate !=0){
								handleObj.createResultBox("A_no_operate","A_no_operate",500,150);	//answer, top, left
								handleObj.createResultBox("B_warn","B_warn",1020,800);	//answer, top, left
								handleObj.createResultBox("C_warn","C_warn",700,1410);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								A_check = false, B_check = false, C_check = false;
								$("#A_no_operate").animate({left:400},4000, function(){
									this.remove();
								});	
								$("#B_warn").animate({top:1020},4000, function(){
									this.remove();
								});	
								$("#C_warn").animate({top:700},4000, function(){
									this.remove();
								});
							}
							if(member_operate.B_second_operate ==0 && member_operate.A_second_operate !=0 && member_operate.C_second_operate !=0){
								handleObj.createResultBox("B_no_operate","B_no_operate",1000,950);	//answer, top, left
								handleObj.createResultBox("A_warn","A_warn",640,190);	//answer, top, left
								handleObj.createResultBox("C_warn","C_warn",700,1410);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								A_check = false, B_check = false, C_check = false;
								$("#B_no_operate").animate({top:600},4000, function(){
									this.remove();
								});
								$("#A_warn").animate({top:640},4000, function(){
									this.remove();
								});	
								$("#C_warn").animate({top:700},4000, function(){
									this.remove();
								});	
							}
							if(member_operate.C_second_operate ==0 && member_operate.A_second_operate !=0 && member_operate.B_second_operate !=0){
								handleObj.createResultBox("C_no_operate","C_no_operate",450,1650);	//answer, top, left
								handleObj.createResultBox("A_warn","A_warn",640,190);	//answer, top, left
								handleObj.createResultBox("B_warn","B_warn",1020,800);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								A_check = false, B_check = false, C_check = false;
								$("#C_no_operate").animate({left:1500},4000, function(){
									this.remove();
								});
								$("#A_warn").animate({top:640},4000, function(){
									this.remove();
								});	
								$("#B_warn").animate({top:1020},4000, function(){
									this.remove();
								});	
							}
							if(member_operate.A_second_operate ==0 && member_operate.B_second_operate ==0){
								handleObj.createResultBox("A_no_operate","A_no_operate",500,150);	//answer, top, left
								handleObj.createResultBox("B_no_operate","B_no_operate",1000,950);	//answer, top, left
								handleObj.createResultBox("C_warn","C_warn",700,1410);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								A_check = false, B_check = false, C_check = false;
								$("#A_no_operate").animate({left:400},4000, function(){
									this.remove();
								});	
								$("#B_no_operate").animate({top:600},4000, function(){
									this.remove();
								});
								$("#C_warn").animate({top:700},4000, function(){
									this.remove();
								});
							}
							if(member_operate.B_second_operate ==0 && member_operate.C_second_operate ==0){
								handleObj.createResultBox("B_no_operate","B_no_operate",1000,950);	//answer, top, left
								handleObj.createResultBox("C_no_operate","C_no_operate",450,1650);	//answer, top, left
								handleObj.createResultBox("A_warn","A_warn",640,190);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								A_check = false, B_check = false, C_check = false;
								$("#B_no_operate").animate({top:600},4000, function(){
									this.remove();
								});
								$("#C_no_operate").animate({left:1500},4000, function(){
									this.remove();
								});
								$("#A_warn").animate({top:640},4000, function(){
									this.remove();
								});	
							}
							if(member_operate.A_second_operate ==0 && member_operate.C_second_operate ==0){
								handleObj.createResultBox("A_no_operate","A_no_operate",500,150);	//answer, top, left
								handleObj.createResultBox("C_no_operate","C_no_operate",450,1650);	//answer, top, left
								handleObj.createResultBox("B_warn","B_warn",1020,800);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								A_check = false, B_check = false, C_check = false;
								$("#A_no_operate").animate({left:400},4000, function(){
									this.remove();
								});	
								$("#C_no_operate").animate({left:1500},4000, function(){
									this.remove();
								});
								$("#B_warn").animate({top:1020},4000, function(){
									this.remove();
								});	
							}
							break;
					}						
				}				
			}else{		//假如沒丟任何圖卡在中央區域
				handleObj.createResultBox("blank","blank",700,1400);	//answer, top, left
				block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
				A_check = false, B_check = false, C_check = false;
				$("#blank").animate({width:250},2000, function(){
					this.remove();
				});
			}
			break;
		case "incresing":
			if(blockArray[0].empty =="false" && blockArray[1].empty == "false" && blockArray[2].empty == "false" && blockArray[3].empty == "false"){				
				if(ques_index == 1 && member_operate.A_first_operate >0 && member_operate.B_first_operate >0 && member_operate.C_first_operate >0){	//判斷是否每個人都有丟圖卡(第一題)					
					if((blockArray[0].value<blockArray[1].value) && (blockArray[1].value <blockArray[2].value) && (blockArray[2].value<blockArray[3].value)){						
						handleObj.createResultBox("correct","correct",700,1450);	//answer, top, left
						$("#correct").animate({top:100, left:500},1500, 
							function(){
								this.remove(); 		
								showNextQues();					
							}
						);
						for(var i=1; i<=8; i++){	//答對時，將空格內的值清除
							eval("block"+i+".empty='true'");
							eval("block"+i+".nume=''");
							eval("block"+i+".denom=''");
							eval("block"+i+".value=''");
							eval("block"+i+".src=''");
						}
						block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
						block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
						A_check = false, B_check = false, C_check = false;
						draw.clearDraw(eval(block1.pen),200,200), draw.clearDraw(eval(block2.pen),200,200);	//清除圖卡
						draw.clearDraw(eval(block3.pen),200,200), draw.clearDraw(eval(block4.pen),200,200);	//清除圖卡
						draw.clearDraw(eval(block5.pen),100,100), draw.clearDraw(eval(block6.pen),100,100);	//清除字符
						draw.clearDraw(eval(block7.pen),100,100), draw.clearDraw(eval(block8.pen),100,100);	//清除字符
						handleObj.randomGraSym();
						draw.recoverGraSym();						
						handleObj.hideAllbackButton();	//隱藏所有圖卡取回按鈕	
				}else{					
					handleObj.createResultBox("error","error",700,1450);	//answer, top, left	
					block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
					A_check = false, B_check = false, C_check = false;
					$("#error").animate({top:100, left:500},1500, function(){
						this.remove();
					});				
				}						
			}else if(ques_index == 2 && member_operate.A_second_operate >0 && member_operate.B_second_operate >0 && member_operate.C_second_operate >0){	//判斷是否每個人都有丟圖卡(第二題)
				if((blockArray[0].value<blockArray[1].value) && (blockArray[1].value <blockArray[2].value) && (blockArray[2].value<blockArray[3].value)){				
					handleObj.createResultBox("correct","correct",700,1450);	//answer, top, left
					$("#correct").animate({top:100, left:500},1500, 
							function(){
								this.remove();				
					});
					handleObj.showResult();
					block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
					block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
					A_check = false, B_check = false, C_check = false;
					complete = true;
					block30.obj.css("display","none");
					block37.obj.css("display","none"), block38.obj.css("display","none"), block39.obj.css("display","none");
					handleObj.randomGraSym();
					draw.recoverGraSym();
					showNext();															
				}else{					
					handleObj.createResultBox("error","error",700,1450);	//answer, top, left			
					block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
					A_check = false, B_check = false, C_check = false;
						$("#error").animate({top:100, left:500},1500, function(){
							this.remove();
						});		
				}							
			}else{	//假設有人沒丟圖卡
				block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
				block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
				A_check = false, B_check = false, C_check = false;
					switch(ques_index){
							case 1:
								if(member_operate.A_first_operate ==0){
									handleObj.createResultBox("A_no_operate","A_no_operate",500,150);	//answer, top, left
									handleObj.createResultBox("B_warn","B_warn",1020,800);	//answer, top, left
									handleObj.createResultBox("C_warn","C_warn",700,1410);	//answer, top, left
									block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
									A_check = false, B_check = false, C_check = false;
									$("#A_no_operate").animate({left:400},4000, function(){
										this.remove();
									});	
									$("#B_warn").animate({top:1020},4000, function(){
										this.remove();
									});	
									$("#C_warn").animate({top:700},4000, function(){
										this.remove();
									});	
								}else if(member_operate.B_first_operate ==0){
									handleObj.createResultBox("B_no_operate","B_no_operate",1000,950);	//answer, top, left
									handleObj.createResultBox("A_warn","A_warn",640,190);	//answer, top, left
									handleObj.createResultBox("C_warn","C_warn",700,1410);	//answer, top, left
									block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
									A_check = false, B_check = false, C_check = false;
									$("#B_no_operate").animate({top:600},4000, function(){
										this.remove();
									});
									$("#A_warn").animate({top:640},4000, function(){
										this.remove();
									});	
									$("#C_warn").animate({top:700},4000, function(){
										this.remove();
									});	
								}else if(member_operate.C_first_operate ==0){
									handleObj.createResultBox("C_no_operate","C_no_operate",450,1650);	//answer, top, left
									handleObj.createResultBox("A_warn","A_warn",640,190);	//answer, top, left
									handleObj.createResultBox("B_warn","B_warn",1020,800);	//answer, top, left
									block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
									A_check = false, B_check = false, C_check = false;
									$("#C_no_operate").animate({left:1500},4000, function(){
										this.remove();
									});
									$("#A_warn").animate({top:640},4000, function(){
										this.remove();
									});	
									$("#B_warn").animate({top:1020},4000, function(){
										this.remove();
									});	
								}
								break;
							case 2:
								if(member_operate.A_second_operate ==0 && member_operate.B_second_operate !=0 && member_operate.C_second_operate !=0){
									handleObj.createResultBox("A_no_operate","A_no_operate",500,150);	//answer, top, left
									handleObj.createResultBox("B_warn","B_warn",1020,800);	//answer, top, left
									handleObj.createResultBox("C_warn","C_warn",700,1410);	//answer, top, left
									block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
									A_check = false, B_check = false, C_check = false;
									$("#A_no_operate").animate({left:400},4000, function(){
										this.remove();
									});	
									$("#B_warn").animate({top:1020},4000, function(){
										this.remove();
									});	
									$("#C_warn").animate({top:700},4000, function(){
										this.remove();
									});	
								}
								if(member_operate.B_second_operate ==0 && member_operate.A_second_operate !=0 && member_operate.C_second_operate !=0){
									handleObj.createResultBox("B_no_operate","B_no_operate",1000,950);	//answer, top, left
									handleObj.createResultBox("A_warn","A_warn",640,190);	//answer, top, left
									handleObj.createResultBox("C_warn","C_warn",700,1410);	//answer, top, left
									block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
									A_check = false, B_check = false, C_check = false;
									$("#B_no_operate").animate({top:600},4000, function(){
										this.remove();
									});
									$("#A_warn").animate({top:640},4000, function(){
										this.remove();
									});	
									$("#C_warn").animate({top:700},4000, function(){
										this.remove();
									});	
								}
								if(member_operate.C_second_operate ==0 && member_operate.B_second_operate !=0 && member_operate.A_second_operate !=0){
									handleObj.createResultBox("C_no_operate","C_no_operate",450,1650);	//answer, top, left
									handleObj.createResultBox("A_warn","A_warn",640,190);	//answer, top, left
									handleObj.createResultBox("B_warn","B_warn",1020,800);	//answer, top, left
									block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
									A_check = false, B_check = false, C_check = false;
									$("#C_no_operate").animate({left:1500},4000, function(){
										this.remove();
									});
									$("#A_warn").animate({top:640},4000, function(){
										this.remove();
									});	
									$("#B_warn").animate({top:1020},4000, function(){
										this.remove();
									});
								}
								if(member_operate.A_second_operate ==0 && member_operate.B_second_operate ==0){
									handleObj.createResultBox("A_no_operate","A_no_operate",500,150);	//answer, top, left
									handleObj.createResultBox("B_no_operate","B_no_operate",1000,950);	//answer, top, left
									handleObj.createResultBox("C_warn","C_warn",700,1410);	//answer, top, left
									block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
									A_check = false, B_check = false, C_check = false;
									$("#A_no_operate").animate({left:400},4000, function(){
										this.remove();
									});	
									$("#B_no_operate").animate({top:600},4000, function(){
										this.remove();
									});
									$("#C_warn").animate({top:700},4000, function(){
										this.remove();
									});
								}
								if(member_operate.B_second_operate ==0 && member_operate.C_second_operate ==0){
									handleObj.createResultBox("B_no_operate","B_no_operate",1000,950);	//answer, top, left
									handleObj.createResultBox("C_no_operate","C_no_operate",450,1650);	//answer, top, left
									handleObj.createResultBox("A_warn","A_warn",640,190);	//answer, top, left
									block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
									A_check = false, B_check = false, C_check = false;
									$("#B_no_operate").animate({top:600},4000, function(){
										this.remove();
									});
									$("#C_no_operate").animate({left:1500},4000, function(){
										this.remove();
									});
									$("#A_warn").animate({top:640},4000, function(){
										this.remove();
									});	
								}
								if(member_operate.A_second_operate ==0 && member_operate.C_second_operate ==0){
									handleObj.createResultBox("A_no_operate","A_no_operate",500,150);	//answer, top, left
									handleObj.createResultBox("C_no_operate","C_no_operate",450,1650);	//answer, top, left
									handleObj.createResultBox("B_warn","B_warn",1020,800);	//answer, top, left
									block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
									A_check = false, B_check = false, C_check = false;
									$("#A_no_operate").animate({left:400},4000, function(){
										this.remove();
									});	
									$("#C_no_operate").animate({left:1500},4000, function(){
										this.remove();
									});
									$("#B_warn").animate({top:1020},4000, function(){
										this.remove();
									});	
								}
								break;
						}	
				}	
			}else{		//假如沒丟任何圖卡在中央區域
				handleObj.createResultBox("blank","blank",700,1400);	//answer, top, left
				block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
				A_check = false, B_check = false, C_check = false;
				$("#blank").animate({width:250},2000, function(){
						this.remove();
				});	
			}
			break;
		}
			break;
		case 1:						
			switch(order1){
				case "incresing":
					if(block43.empty == "false" && block44.empty == "false" && block45.empty == "false"){	//判斷是否填進圖卡
						if(block43.select == "yes" && block44.select == "yes" && block45.select == "yes"){	//判斷填入圖卡是否是系統所選擇的
							if((block43.value < block44.value) && (block44.value < block45.value) && (block43.value < block45.value)){	//判斷最後答案是否正確
								handleObj.createResultBox("correct","correct",700,1450);	//answer, top, left
								$("#correct").animate({top:100, left:500},1000, 
									function(){
										this.remove(); 		
										ques_index = 2;
										handleObj.showCentralObject();
										handleObj.hideCentralObject();
										handleObj.randomGraSym();
										draw.recoverGraSym();									
									}
								);
								handleObj.changeRubberbandState();
								handleObj.hideAllbackButton();	//隱藏所有圖卡取回按鈕
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
								A_check = false, B_check = false, C_check = false;
								for(var i=20; i<=28; i++){	//將圖卡標記去除
									blockArray[i].obj.css("border-color","");
								}
							}else{	//答案錯誤
								handleObj.createResultBox("error","error",700,1450);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
								A_check = false, B_check = false, C_check = false;
								$("#error").animate({top:100, left:500},1500, function(){
									this.remove();
								});
							}
						}else{	//圖卡非系統所選
							for(var i=42; i<=44; i++){
								if(blockArray[i].select !="yes"){
									switch(blockArray[i].from){
										case "member_A":
											handleObj.createResultBox("A_take_warn","A_take_warn",640,190);
											$("#A_take_warn").animate({opacity:0}, 3000, function(){
												this.remove();
											});
											break;
										case "member_B":
											handleObj.createResultBox("B_take_warn","B_take_warn",1020,800);
											$("#B_take_warn").animate({opacity:0}, 3000, function(){
												this.remove();
											});
											break;
										case "member_C":
											handleObj.createResultBox("C_take_warn","C_take_warn",700,1440);
											$("#C_take_warn").animate({opacity:0}, 3000, function(){
												this.remove();
											});
											break;
									}
								}
							}
							block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
							block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
							A_check = false, B_check = false, C_check = false;
						}
					}else{	//尚未填入圖卡
						handleObj.createResultBox("blank","blank",700,1400);	//answer, top, left
						block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
						block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
						A_check = false, B_check = false, C_check = false;
						$("#blank").animate({width:250},2000, function(){
							this.remove();
						});	
					}
					break;
				case "decresing":
					if(block43.empty == "false" && block44.empty == "false" && block45.empty == "false" ){
						if(block43.select == "yes" && block44.select == "yes" && block45.select == "yes"){	//判斷填入圖卡是否是系統所選擇的
							if((block43.value > block44.value) && (block44.value > block45.value) && (block43.value > block45.value)){	//判斷最後答案是否正確
								handleObj.createResultBox("correct","correct",700,1450);	//answer, top, left
								$("#correct").animate({top:100, left:500},1000, 
									function(){
										this.remove(); 		
										ques_index = 2;
										handleObj.showCentralObject();
										handleObj.hideCentralObject();		
										handleObj.randomGraSym();
										draw.recoverGraSym();								
									}
								);
								handleObj.changeRubberbandState();
								handleObj.hideAllbackButton();	//隱藏所有圖卡取回按鈕
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
								A_check = false, B_check = false, C_check = false;			
								for(var i=20; i<=28; i++){	//將圖卡標記去除
									blockArray[i].obj.css("border-color","");
								}	
							}else{//答案錯誤
								handleObj.createResultBox("error","error",700,1450);	//answer, top, left
								block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
								block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
								A_check = false, B_check = false, C_check = false;
								$("#error").animate({top:100, left:500},1500, function(){
									this.remove();
								});
							}
						}else{	//圖卡非系統所選
							for(var i=42; i<=44; i++){
								if(blockArray[i].select !="yes"){
									switch(blockArray[i].from){
										case "member_A":
											handleObj.createResultBox("A_take_warn","A_take_warn",640,190);
											$("#A_take_warn").animate({opacity:0}, 3000, function(){
												this.remove();
											});
											break;
										case "member_B":
											handleObj.createResultBox("B_take_warn","B_take_warn",1020,800);
											$("#B_take_warn").animate({opacity:0}, 3000, function(){
												this.remove();
											});
											break;
										case "member_C":
											handleObj.createResultBox("C_take_warn","C_take_warn",700,1440);
											$("#C_take_warn").animate({opacity:0}, 3000, function(){
												this.remove();
											});
											break;
									}
								}
							}
							block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
							block40.obj.css("display","none"), block41.obj.css("display","none"), block42.obj.css("display","none");
							A_check = false, B_check = false, C_check = false;
						}
					}else{	//尚未填入圖卡
						handleObj.createResultBox("blank","blank",700,1400);	//answer, top, left
						block40.obj.html("確定"), block41.obj.html("確定"), block42.obj.html("確定");
						A_check = false, B_check = false, C_check = false;
						$("#blank").animate({width:250},2000, function(){
							this.remove();
						});	
					}
					break;
			}			
			break;
	}	
}

function touchstart(event){
	event.changedTouches = event.targetTouches;
	if(event.changedTouches.length >0){
		//console.log("X:"+event.changedTouches[0].pageX+" Y:"+event.changedTouches[0].pageY);
		for(var i=0; i<blockArray.length; i++){
			for(var j=0; j<event.changedTouches.length; j++){
				if(blockArray[i] !=null && event.changedTouches[j].target.id == blockArray[i].id){
					switch(blockArray[i].position){
						case "center":							
							/*if(blockArray[i].id == "central_symbol_1" && blockArray[i].empty =="false" && blockArray[i].occupy == "false" && complete == false && blockArray[i].corresponding != true){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
								blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
								blockMap[blockArray[i].identifier] = blockArray[i];
								
								handleObj.createSymObj(blockArray[i].blockName, blockArray[i].type, event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, type,top, left		
								handleObj	.createSymProperty(blockArray[i].blockName, blockArray[i].denom, blockArray[i].nume, blockArray[i].whole, blockArray[i].blockPen, blockArray[i].canvas);//id, denom, nume, whole, ctx, canvas
								handleObj.createCanvasProperty("symbol", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].blockName);	//content, canvas, ctx, id
								draw.drawCentralSym(eval(blockArray[i].blockPen), blockArray[i].denom, blockArray[i].nume);	//ctx, denom, nume
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height()), blockArray[i].empty = "true";
								for(var a=0; a<blockArray.length; a++){
										if(blockArray[a] == null){
											//console.log("block:"+blockArray[i].blockName);
											blockArray[a] = eval(blockArray[i].blockName);				
											break;							
										}
									}	
							}
							
							if(blockArray[i].id == "central_symbol_2" && blockArray[i].empty =="false" &&  blockArray[i].occupy == "false" && complete == false && blockArray[i].corresponding != true){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
								blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
								blockMap[blockArray[i].identifier] = blockArray[i];
								
								handleObj.createSymObj(blockArray[i].blockName, blockArray[i].type, event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, type,top, left		
								handleObj	.createSymProperty(blockArray[i].blockName, blockArray[i].denom, blockArray[i].nume, blockArray[i].whole, blockArray[i].blockPen, blockArray[i].canvas);//id, denom, nume, whole, ctx, canvas
								handleObj.createCanvasProperty("symbol", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].blockName);	//content, canvas, ctx, id
								draw.drawCentralSym(eval(blockArray[i].blockPen), blockArray[i].denom, blockArray[i].nume);	//ctx, denom, nume
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height()), blockArray[i].empty = "true";
								for(var a=0; a<blockArray.length; a++){
										if(blockArray[a] == null){
											//console.log("block:"+blockArray[i].blockName);
											blockArray[a] = eval(blockArray[i].blockName);				
											break;							
										}
									}
							}
							
							if(blockArray[i].id == "central_symbol_3" && blockArray[i].empty =="false" && blockArray[i].occupy == "false" && complete == false && blockArray[i].corresponding != true){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
								blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
								blockMap[blockArray[i].identifier] = blockArray[i];
								
								handleObj.createSymObj(blockArray[i].blockName, blockArray[i].type, event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, type,top, left		
								handleObj	.createSymProperty(blockArray[i].blockName, blockArray[i].denom, blockArray[i].nume, blockArray[i].whole, blockArray[i].blockPen, blockArray[i].canvas);//id, denom, nume, whole, ctx, canvas
								handleObj.createCanvasProperty("symbol", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].blockName);	//content, canvas, ctx, id
								draw.drawCentralSym(eval(blockArray[i].blockPen), blockArray[i].denom, blockArray[i].nume);	//ctx, denom, nume
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height()), blockArray[i].empty = "true";
								for(var a=0; a<blockArray.length; a++){
										if(blockArray[a] == null){
											//console.log("block:"+blockArray[i].blockName);
											blockArray[a] = eval(blockArray[i].blockName);				
											break;							
										}
									}
							}
							
							if(blockArray[i].id == "central_symbol_4" && blockArray[i].empty =="false" && blockArray[i].occupy == "false" && complete == false && blockArray[i].corresponding != true){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
								blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
								blockMap[blockArray[i].identifier] = blockArray[i];
								
								handleObj.createSymObj(blockArray[i].blockName, blockArray[i].type, event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, type,top, left		
								handleObj	.createSymProperty(blockArray[i].blockName, blockArray[i].denom, blockArray[i].nume, blockArray[i].whole, blockArray[i].blockPen, blockArray[i].canvas);//id, denom, nume, whole, ctx, canvas
								handleObj.createCanvasProperty("symbol", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].blockName);	//content, canvas, ctx, id
								draw.drawCentralSym(eval(blockArray[i].blockPen), blockArray[i].denom, blockArray[i].nume);	//ctx, denom, nume
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height()), blockArray[i].empty = "true";
								for(var a=0; a<blockArray.length; a++){
										if(blockArray[a] == null){
											//console.log("block:"+blockArray[i].blockName);
											blockArray[a] = eval(blockArray[i].blockName);				
											break;							
										}
									}
							}*/							
							
							if(blockArray[i].id == "blank_1" && blockArray[i].empty =="false" && blockArray[i].occupy == "false" && complete == false){
								//產生圖像物件
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, blockArray[i].corresponding);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx, block定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								if(blockArray[i].corresponding == true){	//假設放進的圖卡是配對好的
									blockArray[i+4].empty = "true"; 	//使對應的字符區為空
									draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
									blockArray[i+4].nume = "", blockArray[i+4].denom = "", blockArray[i+4].value = "", blockArray[i+4].corresponding = "";
								}
								showConfirm();
							}
							if(blockArray[i].id == "blank_2" && blockArray[i].empty =="false" && blockArray[i].occupy == "false" && complete == false){
								//產生圖像物件
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								//draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, blockArray[i].corresponding);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								if(blockArray[i].corresponding == true){	//假設放進的圖卡是配對好的
									blockArray[i+4].empty = "true"; 	//使對應的字符區為空
									draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
									blockArray[i+4].nume = "", blockArray[i+4].denom = "", blockArray[i+4].value = "", blockArray[i+4].corresponding = "";
								}
								showConfirm();		
							}
							if(blockArray[i].id == "blank_3" && blockArray[i].empty =="false" && blockArray[i].occupy == "false" && complete == false){
								//產生圖像物件
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								//draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, blockArray[i].corresponding);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								if(blockArray[i].corresponding == true){	//假設放進的圖卡是配對好的
									blockArray[i+4].empty = "true"; 	//使對應的字符區為空
									draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
									blockArray[i+4].nume = "", blockArray[i+4].denom = "", blockArray[i+4].value = "", blockArray[i+4].corresponding = "";
								}
								showConfirm();
							}
							if(blockArray[i].id == "blank_4" && blockArray[i].empty =="false" && blockArray[i].occupy == "false" && complete == false){
								//產生圖像物件
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								//draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, blockArray[i].corresponding);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx, corrd定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								if(blockArray[i].corresponding == true){	//假設放進的圖卡是配對好的
									blockArray[i+4].empty = "true"; 	//使對應的字符區為空
									draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
									blockArray[i+4].nume = "", blockArray[i+4].denom = "", blockArray[i+4].value = "", blockArray[i+4].corresponding = "";
								}
								showConfirm();
							}
							if(blockArray[i].id == "blank_5" && blockArray[i].empty =="false" && blockArray[i].occupy == "false" && complete == false){
								//產生圖像物件
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								//draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, blockArray[i].corresponding);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx, corrd定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								if(blockArray[i].corresponding == true){	//假設放進的圖卡是配對好的
									blockArray[i+3].empty = "true"; 	//使對應的字符區為空
									draw.clearDraw(eval(blockArray[i+3].pen), blockArray[i+3].obj.width(), blockArray[i+3].obj.height());	//清除字符區
									blockArray[i+3].nume = "", blockArray[i+3].denom = "", blockArray[i+3].value = "", blockArray[i+3].corresponding = "";
								}
								showConfirm();
							}
							if(blockArray[i].id == "blank_6" && blockArray[i].empty =="false" && blockArray[i].occupy == "false" && complete == false){
								//產生圖像物件
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								//draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, blockArray[i].corresponding);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx, corrd定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								if(blockArray[i].corresponding == true){	//假設放進的圖卡是配對好的
									blockArray[i+3].empty = "true"; 	//使對應的字符區為空
									draw.clearDraw(eval(blockArray[i+3].pen), blockArray[i+3].obj.width(), blockArray[i+3].obj.height());	//清除字符區
									blockArray[i+3].nume = "", blockArray[i+3].denom = "", blockArray[i+3].value = "", blockArray[i+3].corresponding = "";
								}
								showConfirm();
							}
							if(blockArray[i].id == "blank_7" && blockArray[i].empty =="false" && blockArray[i].occupy == "false" && complete == false){
								//產生圖像物件
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height());	//清除圖樣區
								//draw.clearDraw(eval(blockArray[i+4].pen), blockArray[i+4].obj.width(), blockArray[i+4].obj.height());	//清除字符區
								handleObj.createGraObj(blockArray[i].contain,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, blockArray[i].corresponding);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].contain, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx, corrd定義物件屬性 
								handleObj.createCanvasProperty("graphic", blockArray[i].blockCanvas, blockArray[i].blockPen, blockArray[i].contain);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].blockPen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].contain);
										break;
									}
								}
								blockArray[i].empty = "true";
								if(blockArray[i].corresponding == true){	//假設放進的圖卡是配對好的
									blockArray[i+3].empty = "true"; 	//使對應的字符區為空
									draw.clearDraw(eval(blockArray[i+3].pen), blockArray[i+3].obj.width(), blockArray[i+3].obj.height());	//清除字符區
									blockArray[i+3].nume = "", blockArray[i+3].denom = "", blockArray[i+3].value = "", blockArray[i+3].corresponding = "";
								}
								showConfirm();
							}
							
							switch(blockArray[i].id){		//取回圖卡功能
							case "A_take_back1":
								block117.obj.css("display","none");
								block117.whichBlock.empty = "true";
								draw.clearDraw(eval(block117.whichBlock.pen), 200, 200), draw.clearDraw(eval(block117.whichBlockSym.pen), 100, 100);	
								draw.drawGra(eval(block117.start.pen), block117.start.src);	//ctx, imgPath
								block117.start.empty = "false";
								//draw.clearOriExtendPic(block102.whichBlockSym, block102.whichBlock);	//blockSym, blockGra
								//handleObj.hideOriExtendArea(block102.whichBlockSym, block102.whichBlock, block102.whichBlock.id);	//blockSym, blockGra, blockId
								block117.whichBlock.obj.css("border-color","");
								block40.obj.css("display", "none");
								block41.obj.css("display", "none");
								block42.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								break;
							case "A_take_back2":
								block118.obj.css("display","none");
								block118.whichBlock.empty = "true";
								draw.clearDraw(eval(block118.whichBlock.pen), 200, 200), draw.clearDraw(eval(block118.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block118.start.pen), block118.start.src);	//ctx, imgPath
								block118.start.empty = "false";
								//draw.clearOriExtendPic(block103.whichBlockSym, block103.whichBlock);
								//handleObj.hideOriExtendArea(block103.whichBlockSym, block103.whichBlock, block103.whichBlock.id);	//blockSym, blockGra, blockId
								block118.whichBlock.obj.css("border-color","");
								block40.obj.css("display", "none");
								block41.obj.css("display", "none");
								block42.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								break;
							case "A_take_back3":
								block119.obj.css("display","none");
								block119.whichBlock.empty = "true";
								draw.clearDraw(eval(block119.whichBlock.pen), 200, 200), draw.clearDraw(eval(block119.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block119.start.pen), block119.start.src);	//ctx, imgPath
								block119.start.empty = "false";
								//draw.clearOriExtendPic(block104.whichBlockSym, block104.whichBlock);
								//handleObj.hideOriExtendArea(block104.whichBlockSym, block104.whichBlock, block104.whichBlock.id);	//blockSym, blockGra, blockId
								block119.whichBlock.obj.css("border-color","");
								block40.obj.css("display", "none");
								block41.obj.css("display", "none");
								block42.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								break;
							case "B_take_back1":
								block120.obj.css("display","none");
								block120.whichBlock.empty = "true";
								draw.clearDraw(eval(block120.whichBlock.pen), 200, 200), draw.clearDraw(eval(block120.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block120.start.pen), block120.start.src);	//ctx, imgPath
								block120.start.empty = "false";
								//draw.clearOriExtendPic(block105.whichBlockSym, block105.whichBlock);
								//handleObj.hideOriExtendArea(block105.whichBlockSym, block105.whichBlock, block105.whichBlock.id);	//blockSym, blockGra, blockId
								block120.whichBlock.obj.css("border-color","");
								block40.obj.css("display", "none");
								block41.obj.css("display", "none");
								block42.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();	
								break;
							case "B_take_back2":
								block121.obj.css("display","none");
								block121.whichBlock.empty = "true";
								draw.clearDraw(eval(block121.whichBlock.pen), 200, 200), draw.clearDraw(eval(block121.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block121.start.pen), block121.start.src);	//ctx, imgPath
								block121.start.empty = "false";
								//draw.clearOriExtendPic(block106.whichBlockSym, block106.whichBlock);
								//handleObj.hideOriExtendArea(block106.whichBlockSym, block106.whichBlock, block106.whichBlock.id);	//blockSym, blockGra, blockId
								block121.whichBlock.obj.css("border-color","");
								block40.obj.css("display", "none");
								block41.obj.css("display", "none");
								block42.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								break;
							case "B_take_back3":
								block122.obj.css("display","none");
								block122.whichBlock.empty = "true";
								draw.clearDraw(eval(block122.whichBlock.pen), 200, 200), draw.clearDraw(eval(block122.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block122.start.pen), block122.start.src);	//ctx, imgPath
								block122.start.empty = "false";
								//draw.clearOriExtendPic(block107.whichBlockSym, block107.whichBlock);
								//handleObj.hideOriExtendArea(block107.whichBlockSym, block107.whichBlock, block107.whichBlock.id);	//blockSym, blockGra, blockId
								block122.whichBlock.obj.css("border-color","");
								block40.obj.css("display", "none");
								block41.obj.css("display", "none");
								block42.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								break;
							case "C_take_back1":
								block123.obj.css("display","none");
								block123.whichBlock.empty = "true";
								draw.clearDraw(eval(block123.whichBlock.pen), 200, 200), draw.clearDraw(eval(block123.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block123.start.pen), block123.start.src);	//ctx, imgPath
								block123.start.empty = "false";
								//draw.clearOriExtendPic(block108.whichBlockSym, block108.whichBlock);
								//handleObj.hideOriExtendArea(block108.whichBlockSym, block108.whichBlock, block108.whichBlock.id);	//blockSym, blockGra, blockId
								block123.whichBlock.obj.css("border-color","");
								block40.obj.css("display", "none");
								block41.obj.css("display", "none");
								block42.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								break;
							case "C_take_back2":
								block124.obj.css("display","none");
								block124.whichBlock.empty = "true";
								draw.clearDraw(eval(block124.whichBlock.pen), 200, 200), draw.clearDraw(eval(block124.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block124.start.pen), block124.start.src);	//ctx, imgPath
								block124.start.empty = "false";
								//draw.clearOriExtendPic(block109.whichBlockSym, block109.whichBlock);
								//handleObj.hideOriExtendArea(block109.whichBlockSym, block109.whichBlock, block109.whichBlock.id);	//blockSym, blockGra, blockId
								block124.whichBlock.obj.css("border-color","");
								block40.obj.css("display", "none");
								block41.obj.css("display", "none");
								block42.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								break;
							case "C_take_back3":
								block125.obj.css("display","none");
								block125.whichBlock.empty = "true";
								draw.clearDraw(eval(block125.whichBlock.pen), 200, 200), draw.clearDraw(eval(block125.whichBlockSym.pen), 100, 100);
								draw.drawGra(eval(block125.start.pen), block125.start.src);	//ctx, imgPath
								block125.start.empty = "false";
								//draw.clearOriExtendPic(block110.whichBlockSym, block110.whichBlock);
								//handleObj.hideOriExtendArea(block110.whichBlockSym, block110.whichBlock, block110.whichBlock.id);	//blockSym, blockGra, blockId
								block125.whichBlock.obj.css("border-color","");
								block40.obj.css("display", "none");
								block41.obj.css("display", "none");
								block42.obj.css("display", "none");
								checkCorresponding();
								draw.errorReport();
								break;
						}
							break;
						case "personal_area":
							if(blockArray[i].empty == "false" && blockArray[i].content == "graphic" && blockArray[i].trans != true && complete == false){	//抓取圖卡
								handleObj.createGraObj(blockArray[i].blockName,event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50, blockArray[i].corresponding);	//id, top, left		創造物件
								handleObj.createNewGraProperty(blockArray[i].blockName, blockArray[i].denom, blockArray[i].nume, blockArray[i].src,  blockArray[i].canvas, blockArray[i].block_pen, blockArray[i].corresponding, blockArray[i]);	//id, denom, nume	, src	, canvas, ctx, corrd定義物件屬性 
								handleObj.createCanvasProperty(blockArray[i].content, blockArray[i].canvas, blockArray[i].block_pen, blockArray[i].blockName);	//content, canvas, ctx, id	定義畫布屬性		
								draw.drawGra(eval(blockArray[i].block_pen), blockArray[i].src);	//ctx, imgPath		畫上圖案
								for(var k=0; k<blockArray.length; k++){
									if(blockArray[k] == null){
										blockArray[k] = eval(blockArray[i].blockName);
										break;
									}
								}
								blockArray[i].empty = "true";
								draw.clearDraw(eval(blockArray[i].pen),  blockArray[i].obj.width(),  blockArray[i].obj.height());	//清除個人區域圖像
								//draw.clearDraw(eval(blockArray[i-9].pen),  blockArray[i-9].obj.width(),  blockArray[i-9].obj.height());	//清除個人區域字符								
								
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
								blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
								blockMap[blockArray[i].identifier] = blockArray[i];
								
								handleObj.calculateMemberOperate(blockArray[i], "drag");
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
							/*if(blockArray[i].empty == "false" && blockArray[i].content == "symbol"){	//抓取字符
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockArray[i].offset.x = blockArray[i].x- event.changedTouches[j].pageX;
								blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
								blockMap[blockArray[i].identifier] = blockArray[i];
								
								handleObj.createSymObj(blockArray[i].blockName, blockArray[i].type, event.changedTouches[j].pageY-50, event.changedTouches[j].pageX-50);	//id, type,top, left		
								handleObj	.createSymProperty(blockArray[i].blockName, blockArray[i].denom, blockArray[i].nume, blockArray[i].whole, blockArray[i].block_pen, blockArray[i].canvas, blockArray[i].type);//id, denom, nume, whole, ctx, canvas, type
								handleObj.createCanvasProperty(blockArray[i].content, blockArray[i].canvas, blockArray[i].block_pen, blockArray[i].blockName);	//content, canvas, ctx, id
								draw.drawCentralSym(eval(blockArray[i].block_pen), blockArray[i].denom, blockArray[i].nume);	//ctx, denom, nume
								draw.clearDraw(eval(blockArray[i].pen), blockArray[i].obj.width(), blockArray[i].obj.height()), blockArray[i].empty = "true";
								for(var a=0; a<blockArray.length; a++){
										if(blockArray[a] == null){
											//console.log("block:"+blockArray[i].blockName);
											blockArray[a] = eval(blockArray[i].blockName);				
											break;							
										}
									}	
							}		*/	
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
								var symArray = [block12, block13, block14];
								var graArray = [block21, block22, block23];					
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
										break;
								}
								handleObj.switchExplainButton(blockArray[i]);
							}
							if(blockArray[i].id =="clozeExplainB"){
								var symArray = [block15, block16, block17];
								var graArray = [block24, block25, block26];
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
										break;
								}
								handleObj.switchExplainButton(blockArray[i]);
							}
							if(blockArray[i].id =="clozeExplainC"){
								var symArray = [block18, block19, block20];
								var graArray = [block27, block28, block29];
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
											draw.drawPanelSym(eval(block52.pen),"A_symbol_panel");
											draw.drawPanelGra(eval(block55.pen), blockArray[i].src);
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
											draw.drawPanelSym(eval(block65.pen),"B_symbol_panel");
											draw.drawPanelGra(eval(block68.pen), blockArray[i].src);		
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
											draw.drawPanelSym(eval(block78.pen),"C_symbol_panel");
											draw.drawPanelGra(eval(block81.pen), blockArray[i].src);
										//draw.drawOriginalSym(eval(blockArray[i].showOriFra), blockArray[i].first_denom, blockArray[i].first_nume);	//顯示圖卡初始值
											break;
									}
								}
							}													
							break;
						case "personal_panel": //個人面板的操作
							switch(blockArray[i].id){
								case "A_translate":			
								if(blockArray[i].use == true){
									handleObj.createResultBox("A_trans_explain","explain",550,240);	//id, answer, top, left
									blockArray[20].trans = true, blockArray[21].trans = true, blockArray[22].trans = true;
									//blockArray[4].trans = true, blockArray[5].trans = true, blockArray[6].trans = true;
									A_translate = true;
								}								
								break;
							case "B_translate":
								if(blockArray[i].use == true){
									handleObj.createResultBox("B_trans_explain","explain",1040,900);	//id, answer, top, left
									blockArray[23].trans = true, blockArray[24].trans = true, blockArray[25].trans = true;
									//blockArray[7].trans = true, blockArray[8].trans = true, blockArray[9].trans = true;
									B_translate = true;
								}								
								break;
							case "C_translate":
								if(blockArray[i].use == true){
									handleObj.createResultBox("C_trans_explain","explain",550,1460);	//id, answer, top, left
									blockArray[26].trans = true, blockArray[27].trans = true, blockArray[28].trans = true;
									//blockArray[10].trans = true, blockArray[11].trans = true, blockArray[12].trans = true;
									C_translate = true;
								}								
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
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								handleObj.switchExtendButton(blockArray[i]);		
								Panel_A.extend ="", Panel_A.count =0,block53.value = 0 ,block53.obj.html("");				
								Panel_A.result_nume ="", Panel_A.result_denom = "", block62.use= false, block62.obj.css("color","white");
								draw.clearDraw(eval(block56.pen), 150, 150), draw.clearDraw(eval(block57.pen), 150, 150);
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								$("#A_add").css("display","block"), $("#A_sub").css("display","block"), $("#A_count").css("display","block");								
								$("#A_unit").css("display","block"), $("#A_ten").css("display","block");
								break;
							case "B_extend_reduce":
								Panel_B.operator = blockArray[i].extend;
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								handleObj.switchExtendButton(blockArray[i]);
								Panel_B.extend ="", Panel_B.count =0, block66.value=0, block66.obj.html("");	
								Panel_B.result_nume ="", Panel_B.result_denom = "", block75.use= false, block75.obj.css("color","white");
								draw.clearDraw(eval(block69.pen), 150, 150), draw.clearDraw(eval(block70.pen), 150, 150);
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								$("#B_add").css("display","block"), $("#B_sub").css("display","block"), $("#B_count").css("display","block");
								$("#B_unit").css("display","block"), $("#B_ten").css("display","block");
								break;
							case "C_extend_reduce":
								Panel_C.operator = blockArray[i].extend;
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								handleObj.switchExtendButton(blockArray[i]);
								Panel_C.extend ="", Panel_C.count =0, block79.value=0, block79.obj.html("");	
								Panel_C.result_nume ="", Panel_C.result_denom = "", block88.use= false, block88.obj.css("color","white");
								draw.clearDraw(eval(block82.pen), 150, 150), draw.clearDraw(eval(block83.pen), 150, 150);
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
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
														block53.obj.html("0"+Panel_A.count);
													}else{
														block53.obj.html(Panel_A.count);
													}													
													block53.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 9;													
													(Panel_A.count<10) ? block53.obj.html("0"+Panel_A.count) : block53.obj.html(Panel_A.count);	
												}											
												break;
											case "ten":
												if(Panel_A.count <30){
													Panel_A.count +=10;
													block53.obj.html(Panel_A.count);
													block53.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 30;
													block53.obj.html("0"+Panel_A.count);
												}
												break;
										}										
									}else if(Panel_A.operator == "÷" ){	//&& Panel_A.count <Panel_A.max_reduce
										switch(Panel_A.input_type){
											case "unit":
												if(Panel_A.count%10 <9){
													Panel_A.count ++;
													if(Panel_A.count <10){
														block53.obj.html("0"+Panel_A.count);
													}else{
														block53.obj.html(Panel_A.count);
													}													
													block53.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 9;													
													(Panel_A.count<10) ? block53.obj.html("0"+Panel_A.count) : block53.obj.html(Panel_A.count);	
												}												
												break;
											case "ten":
												if(Panel_A.count <30){
													Panel_A.count +=10;
													block53.obj.html(Panel_A.count);
													block53.value = Panel_A.count;
												}else{
													Panel_A.count = Panel_A.count - 30;
													block53.obj.html("0"+Panel_A.count);
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
														block66.obj.html("0"+Panel_B.count);
													}else{
														block66.obj.html(Panel_B.count);
													}
													block66.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 9;													
													(Panel_B.count<10) ? block66.obj.html("0"+Panel_B.count) : block66.obj.html(Panel_B.count);	
												}											
												break;
											case "ten":
												if(Panel_B.count <30){
													Panel_B.count +=10;
													block66.obj.html(Panel_B.count);
													block66.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 30;
													block66.obj.html("0"+Panel_A.count);
												}
												break;
										}
									}else if(Panel_B.operator == "÷"){	// && Panel_B.count <Panel_B.max_reduce
										switch(Panel_B.input_type){
											case "unit":
												if(Panel_B.count%10 <9){
													Panel_B.count ++;
													if(Panel_B.count <10){
														block66.obj.html("0"+Panel_B.count);
													}else{
														block66.obj.html(Panel_B.count);
													}
													block66.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 9;													
													(Panel_B.count<10) ? block66.obj.html("0"+Panel_B.count) : block66.obj.html(Panel_B.count);	
												}												
												break;
											case "ten":
												if(Panel_B.count <30){
													Panel_B.count +=10;
													block66.obj.html(Panel_B.count);
													block66.value = Panel_B.count;
												}else{
													Panel_B.count = Panel_B.count - 30;
													block66.obj.html("0"+Panel_A.count);
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
														block79.obj.html("0"+Panel_C.count);
													}else{
														block79.obj.html(Panel_C.count);
													}
													block79.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 9;													
													(Panel_C.count<10) ? block79.obj.html("0"+Panel_C.count) : block79.obj.html(Panel_C.count);	
												}											
												break;
											case "ten":
												if(Panel_C.count <30){
													Panel_C.count +=10;
													block79.obj.html(Panel_C.count);
													block79.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 30;
													block79.obj.html("0"+Panel_A.count);
												}
												break;
										}
									}else if(Panel_C.operator == "÷" ){	//&& Panel_C.count <Panel_C.max_reduce
										switch(Panel_C.input_type){
											case "unit":
												if(Panel_C.count%10 <9){
													Panel_C.count ++;
													if(Panel_C.count <10){
														block79.obj.html("0"+Panel_C.count);
													}else{
														block79.obj.html(Panel_C.count);
													}
													block79.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 9;													
													(Panel_C.count<10) ? block79.obj.html("0"+Panel_C.count) : block79.obj.html(Panel_C.count);	
												}											
												break;
											case "ten":
												if(Panel_C.count <=30){
													Panel_C.count +=10;
													block79.obj.html(Panel_C.count);
													block79.value = Panel_C.count;
												}else{
													Panel_C.count = Panel_C.count - 30;
													block79.obj.html("0"+Panel_A.count);
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
														block53.obj.html("0"+Panel_A.count);
													}else{
														block53.obj.html(Panel_A.count);
													}													
													block53.value = Panel_A.count;
												}												
												break;
											case "ten":
												if(Panel_A.count >=10){
													Panel_A.count -=10;
													if(Panel_A.count <10){
														block53.obj.html("0"+Panel_A.count);
													}else{
														block53.obj.html(Panel_A.count);
													}													
													block53.value = Panel_A.count;
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
														block66.obj.html("0"+Panel_B.count);
													}else{
														block66.obj.html(Panel_B.count);
													}													
													block66.value = Panel_B.count;
												}												
												break;
											case "ten":
												if(Panel_B.count >=10){
													Panel_B.count -=10;
													if(Panel_B.count <10){
														block66.obj.html("0"+Panel_B.count);
													}else{
														block66.obj.html(Panel_B.count);
													}													
													block66.value = Panel_B.count;
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
														block79.obj.html("0"+Panel_C.count);
													}else{
														block79.obj.html(Panel_C.count);
													}													
													block79.value = Panel_C.count;
												}												
												break;
											case "ten":
												if(Panel_C.count >=10){
													Panel_C.count -=10;
													if(Panel_C.count <10){
														block79.obj.html("0"+Panel_C.count);
													}else{
														block79.obj.html(Panel_C.count);
													}													
													block79.value = Panel_C.count;
												}
												break;
										}
								}
								break;
							case "A_unit":
								block96.obj.css("font-weight","900"), block96.obj.css("color","blue");
								block99.obj.css("font-weight","100"), block99.obj.css("color","black");
								$("#A_message").html("目前的數值從個位數開始修改");
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
								Panel_A.input_type = "unit";
								break;
							case "B_unit":
								block97.obj.css("font-weight","900"), block97.obj.css("color","blue");
								block100.obj.css("font-weight","100"), block100.obj.css("color","black");
								$("#B_message").html("目前的數值從個位數開始修改");
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
								Panel_B.input_type = "unit";
								break;
							case "C_unit":
								block98.obj.css("font-weight","900"), block98.obj.css("color","blue");
								block101.obj.css("font-weight","100"), block101.obj.css("color","black");
								$("#C_message").html("目前的數值從個位數開始修改");
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
								Panel_C.input_type = "unit";
								break;
							case "A_ten":
								block96.obj.css("font-weight","100"), block96.obj.css("color","black");
								block99.obj.css("font-weight","900"), block99.obj.css("color","blue");
								$("#A_message").html("目前的數值從十位數開始修改");
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
								Panel_A.input_type = "ten";
								break;
							case "B_ten":
								block97.obj.css("font-weight","100"), block97.obj.css("color","black");
								block100.obj.css("font-weight","900"), block100.obj.css("color","blue");
								$("#B_message").html("目前的數值從十位數開始修改");
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
								Panel_B.input_type = "ten";
								break;
							case "C_ten":
								block98.obj.css("font-weight","100"), block98.obj.css("color","black");
								block101.obj.css("font-weight","900"), block101.obj.css("color","blue");
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
									Panel_A.which_pic.src = GivePic2("result",Panel_A.reduce_denom, Panel_A.reduce_nume, Panel_A.result_denom, Panel_A.result_nume);									
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
									Panel_B.which_pic.beforeDenom = Panel_B.original_denom;
									Panel_B.which_pic.beforeNume = Panel_B.original_nume;
									Panel_B.which_pic.extendValue = Panel_B.extend;
									Panel_B.which_pic.operator = Panel_B.operator;
									Panel_B.which_pic.whetherExtend = true;
									Panel_B.which_sym.denom = Panel_B.result_denom;
									Panel_B.which_sym.nume = Panel_B.result_nume;
									Panel_B.which_pic.max_extend = Panel_B.max_extend;
									Panel_B.which_pic.src = GivePic2("result",Panel_B.reduce_denom, Panel_B.reduce_nume, Panel_B.result_denom, Panel_B.result_nume);
									draw.drawChangeGra(eval(Panel_B.which_pic.pen), Panel_B.reduce_denom, Panel_B.reduce_nume, Panel_B.result_denom, Panel_B.result_nume);
									draw.clearDraw(eval(Panel_B.which_pic.sym),150, 75);	//清除原本字符
									draw.draSym(eval(Panel_B.which_pic.sym), Panel_B.result_denom, Panel_B.result_nume);	//畫上字符
									Panel_B.which_pic.obj.effect('shake', { times: 3 }, 100);	//轉換完，用震動效果來提醒學生剛剛轉換的是哪張圖卡
									handleObj.changePanelState("B_panel");
									handleObj.scaleCentralArea();	//控制中央面板大小	
									//console.log(Panel_B.which_sym);
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
									Panel_C.which_pic.src = GivePic2("result",Panel_C.reduce_denom, Panel_C.reduce_nume, Panel_C.result_denom, Panel_C.result_nume);
									draw.drawChangeGra(eval(Panel_C.which_pic.pen), Panel_C.reduce_denom, Panel_C.reduce_nume, Panel_C.result_denom, Panel_C.result_nume);
									draw.clearDraw(eval(Panel_C.which_pic.sym),150, 75);	//清除原本字符
									draw.draSym(eval(Panel_C.which_pic.sym), Panel_C.result_denom, Panel_C.result_nume);	//畫上字符
									Panel_C.which_pic.obj.effect('shake', { times: 3 }, 100);	//轉換完，用震動效果來提醒學生剛剛轉換的是哪張圖卡
									handleObj.changePanelState("C_panel");
									handleObj.scaleCentralArea();	//控制中央面板大小	
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
}

function touchmove(event){
	event.changedTouches = event.targetTouches;
	for(var i=0; i<event.changedTouches.length; i++){
		
		var block = blockMap[event.changedTouches[i].identifier];
		if(block){
			switch(block.position){
				case "personal_area":
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
						$("#"+block.blockName).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) ", "scale(0.7)"].join(""));						
					}				
					eval(block.blockName+".x=block.x"),eval(block.blockName+".y=block.y");					
					switch(block.orientation){
							case "left":
							if(block.x >240 && block.x<370){	//
								handleObj.showRubberBandArea("A_rubber_area");							
								for(var j=101; j<=103; j++){	//
									if($("#"+block.blockName).offset().top>= blockArray[j].obj.offset().top && $("#"+block.blockName).offset().left>= blockArray[j].obj.offset().left 
									&& $("#"+block.blockName).offset().top<= blockArray[j].obj.offset().top+120 && $("#"+block.blockName).offset().left<= blockArray[j].obj.offset().left+120 
									&& blockArray[j].target.empty =="true" && blockArray[j].target.occupy == "false"){
										$("#"+blockArray[j].linkLine).css("display","block");
									}else{
										$("#"+blockArray[j].linkLine).css("display","none");
									}
								}
								for(var k=113; k<=113;k++){ //第四個傳送區域的判斷
									if(ques_index == 2 && blockArray[k].target.occupy == "false" && $("#"+block.blockName).offset().top>= blockArray[k].obj.offset().top && $("#"+block.blockName).offset().left>= blockArray[k].obj.offset().left 
									&& $("#"+block.blockName).offset().top<= blockArray[k].obj.offset().top+120 && $("#"+block.blockName).offset().left<= blockArray[k].obj.offset().left+120 
									&& blockArray[k].target.empty =="true"){
										$("#"+blockArray[k].linkLine).css("display","block");
									}else{
										$("#"+blockArray[k].linkLine).css("display","none");
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
									&& $("#"+block.blockName).offset().top<= blockArray[j].obj.offset().top+120 && $("#"+block.blockName).offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.empty =="true"
									&& blockArray[j].target.empty =="true" && blockArray[j].target.occupy == "false"){
										$("#"+blockArray[j].linkLine).css("display","block");
									}else{
										$("#"+blockArray[j].linkLine).css("display","none");
									}
								}
								for(var k=114; k<=114;k++){ //第四個傳送區域的判斷
									if(ques_index == 2 && blockArray[k].target.occupy == "false" && $("#"+block.blockName).offset().top>= blockArray[k].obj.offset().top && $("#"+block.blockName).offset().left>= blockArray[k].obj.offset().left 
									&& $("#"+block.blockName).offset().top<= blockArray[k].obj.offset().top+120 && $("#"+block.blockName).offset().left<= blockArray[k].obj.offset().left+120 
									&& blockArray[k].target.empty =="true"){
										$("#"+blockArray[k].linkLine).css("display","block");
									}else{
										$("#"+blockArray[k].linkLine).css("display","none");
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
									&& $("#"+block.blockName).offset().top<= blockArray[j].obj.offset().top+120 && $("#"+block.blockName).offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.empty =="true"
									&& blockArray[j].target.empty =="true" && blockArray[j].target.occupy == "false"){
										$("#"+blockArray[j].linkLine).css("display","block");
									}else{
										$("#"+blockArray[j].linkLine).css("display","none");
									}
								}
								for(var k=115; k<=115;k++){ //第四個傳送區域的判斷
									if(ques_index == 2 && blockArray[k].target.occupy == "false" && $("#"+block.blockName).offset().top>= blockArray[k].obj.offset().top && $("#"+block.blockName).offset().left>= blockArray[k].obj.offset().left 
									&& $("#"+block.blockName).offset().top<= blockArray[k].obj.offset().top+120 && $("#"+block.blockName).offset().left<= blockArray[k].obj.offset().left+120 
									&& blockArray[k].target.empty =="true"){
										$("#"+blockArray[k].linkLine).css("display","block");
									}else{
										$("#"+blockArray[k].linkLine).css("display","none");
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
									ctx60.clearRect(322,5,34,36), ctx60.clearRect(322,55,34,36);
									ctx60.fillText(block.value,335,40), ctx60.fillText(block.value,335,90);
								}
								else if(Panel_A.extend !="" && $("#"+block.ansObj).offset().top>=557 && $("#"+block.ansObj).offset().top<=666 
								&& $("#"+block.ansObj).offset().left>=499 && $("#"+block.ansObj).offset().left<=554){	//分子
									if(Panel_A.result_denom ==""){
										ctx60.clearRect(475,55,52,40);
									}
									ctx60.clearRect(475,5,52,40);
									ctx60.fillText(block.value,500,40);
								}
								else if(Panel_A.extend !="" && $("#"+block.ansObj).offset().top>=557 && $("#"+block.ansObj).offset().top<=666 
								&& $("#"+block.ansObj).offset().left>=427 && $("#"+block.ansObj).offset().left<=493){	//分母
									if(Panel_A.result_nume ==""){
										ctx60.clearRect(475,5,52,40);
									}
									ctx60.clearRect(475,55,52,40);
									ctx60.fillText(block.value,500,90);
								}
								else{
									draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								}
								break;
							case "B_count":
								block.x = block.offset.x + event.changedTouches[i].pageX;
								block.y = block.offset.y + event.changedTouches[i].pageY;	
								$("#"+block.ansObj).css("-webkit-transform",["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
								
								if(Panel_B.result_nume =="" && Panel_B.result_denom =="" && $("#"+block.ansObj).offset().top>=1077 && $("#"+block.ansObj).offset().top <=1196 
								&& $("#"+block.ansObj).offset().left>=1088 && $("#"+block.ansObj).offset().left<=1180){	//擴、約分數值
									ctx64.clearRect(322,5,34,36), ctx64.clearRect(322,55,34,36);
									ctx64.fillText(block.value,335,40), ctx64.fillText(block.value,335,90);
								}
								else if(Panel_B.extend !="" && $("#"+block.ansObj).offset().top>=1076 && $("#"+block.ansObj).offset().top<=1124 
								&& $("#"+block.ansObj).offset().left>=1246 && $("#"+block.ansObj).offset().left<=1357){	//分子
									if(Panel_B.result_denom ==""){
										ctx64.clearRect(475,55,52,40);
									}
									ctx64.clearRect(475,5,52,40);
									ctx64.fillText(block.value,500,40);
								}
								else if(Panel_B.extend !="" && $("#"+block.ansObj).offset().top>=1131 && $("#"+block.ansObj).offset().top<=1191 
								&& $("#"+block.ansObj).offset().left>=1246 && $("#"+block.ansObj).offset().left<=1357){	//分母
									if(Panel_B.result_nume ==""){
										ctx64.clearRect(475,5,52,40);
									}
									ctx64.clearRect(475,55,52,40);
									ctx64.fillText(block.value,500,90);
								}
								else{
									draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								}
								break;
							case "C_count":
								block.x = block.offset.x + event.changedTouches[i].pageX;
								block.y = block.offset.y + event.changedTouches[i].pageY;	
								$("#"+block.ansObj).css("-webkit-transform",["translate3d(",block.x,"px, ",block.y,"px, 0px) ","rotate(",-90,"deg)"].join(""));
								
								if(Panel_C.result_nume =="" && Panel_C.result_denom =="" && $("#"+block.ansObj).offset().top>=382 && $("#"+block.ansObj).offset().top <=478 
								&& $("#"+block.ansObj).offset().left>=1677 && $("#"+block.ansObj).offset().left<=1795){	//擴、約分數值
									ctx68.clearRect(322,5,34,36), ctx68.clearRect(322,55,34,36);
									ctx68.fillText(block.value,335,40), ctx68.fillText(block.value,335,90);
								}
								else if(Panel_C.extend !="" && $("#"+block.ansObj).offset().top>=201 && $("#"+block.ansObj).offset().top<=334 
								&& $("#"+block.ansObj).offset().left>=1678 && $("#"+block.ansObj).offset().left<=1723){	//分子
									if(Panel_C.result_denom ==""){
										ctx68.clearRect(475,55,52,40);
									}
									ctx68.clearRect(475,5,52,40);
									ctx68.fillText(block.value,500,40);
								}
								else if(Panel_C.extend !="" && $("#"+block.ansObj).offset().top>=201 && $("#"+block.ansObj).offset().top<=334 
								&& $("#"+block.ansObj).offset().left>=1732 && $("#"+block.ansObj).offset().left<=1797){	//分母
									if(Panel_C.result_nume ==""){
										ctx68.clearRect(475,5,52,40);
									}
									ctx68.clearRect(475,55,52,40);
									ctx68.fillText(block.value,500,90);
								}								
								else{
									draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								}
								break;
					}
					break;
				case "scatter":
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
						block.obj.css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) ", "scale(0.7)"].join(""));
					}
					
					switch(block.orientation){		//橡皮筋功能(丟圖到中央區域)
						case "left":  //Member A的操作
							if(block.x >240 && block.x<370){	//
								handleObj.showRubberBandArea("A_rubber_area");							
								for(var j=101; j<=103; j++){	//
									if(block.obj.offset().top>= blockArray[j].obj.offset().top && block.obj.offset().left>= blockArray[j].obj.offset().left 
									&& block.obj.offset().top<= blockArray[j].obj.offset().top+120 && block.obj.offset().left<= blockArray[j].obj.offset().left+120 && blockArray[j].target.empty =="true"
									&& blockArray[j].target.empty =="true" && blockArray[j].target.occupy == "false"){
										$("#"+blockArray[j].linkLine).css("display","block");
									}else{
										$("#"+blockArray[j].linkLine).css("display","none");
									}
								}
								for(var k=113; k<=113;k++){ //第四個傳送區域的判斷
									if(ques_index == 2 && blockArray[k].target.occupy == "false" && block.obj.offset().top>= blockArray[k].obj.offset().top && block.obj.offset().left>= blockArray[k].obj.offset().left 
									&& block.obj.offset().top<= blockArray[k].obj.offset().top+120 && block.obj.offset().left<= blockArray[k].obj.offset().left+120 
									&& blockArray[k].target.empty =="true"){
										$("#"+blockArray[k].linkLine).css("display","block");
									}else{
										$("#"+blockArray[k].linkLine).css("display","none");
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
								for(var k=114; k<=114;k++){ //第四個傳送區域的判斷
									if(ques_index == 2 && blockArray[k].target.occupy == "false" && block.obj.offset().top>= blockArray[k].obj.offset().top && block.obj.offset().left>= blockArray[k].obj.offset().left 
									&& block.obj.offset().top<= blockArray[k].obj.offset().top+120 && block.obj.offset().left<= blockArray[k].obj.offset().left+120 
									&& blockArray[k].target.empty =="true"){
										$("#"+blockArray[k].linkLine).css("display","block");
									}else{
										$("#"+blockArray[k].linkLine).css("display","none");
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
								for(var k=115; k<=115;k++){ //第四個傳送區域的判斷
									if(ques_index == 2 && blockArray[k].target.occupy == "false" && block.obj.offset().top>= blockArray[k].obj.offset().top && block.obj.offset().left>= blockArray[k].obj.offset().left 
									&& block.obj.offset().top<= blockArray[k].obj.offset().top+120 && block.obj.offset().left<= blockArray[k].obj.offset().left+120 
									&& blockArray[k].target.empty =="true"){
										$("#"+blockArray[k].linkLine).css("display","block");
									}else{
										$("#"+blockArray[k].linkLine).css("display","none");
									}
								}												
							}else{
								handleObj.hideRubberBandArea("C_rubber_area");
							}
							break;
					}
				//	console.log("block.x:"+block.x);
					break;
			}				
		}
	}	
	event.preventDefault();
}

function touchend(event){
	event.changedTouches = event.targetTouches;
	
	for(var i=0; i<event.changedTouches.length; i++){
		block = blockMap[event.changedTouches[i].identifier];
		
		if(block){
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
											block117.obj.css("display","block");
											block117.start = block21;	//儲存拉出圖卡的起始區域
											block117.picData = eval(block.blockName);	//儲存圖卡資料
											block117.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block117.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_second":
											block118.obj.css("display","block");
											block118.start = block22;	//儲存拉出圖卡的起始區域
											block118.picData = eval(block.blockName);
											block118.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block118.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_third":
											block119.obj.css("display","block");
											block119.start = block23;	//儲存拉出圖卡的起始區域
											block119.picData = eval(block.blockName);
											block119.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block119.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}															
							}
						}
						for(var j=113; j<=113; j++){
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
											block117.obj.css("display","block");
											block117.start = block21;	//儲存拉出圖卡的起始區域
											block117.picData = eval(block.blockName);	//儲存圖卡資料
											block117.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block117.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_second":
											block118.obj.css("display","block");
											block118.start = block22;	//儲存拉出圖卡的起始區域
											block118.picData = eval(block.blockName);
											block118.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block118.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_third":
											block119.obj.css("display","block");
											block119.start = block23;	//儲存拉出圖卡的起始區域
											block119.picData = eval(block.blockName);
											block119.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block119.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
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
											block120.obj.css("display","block");
											block120.start = block24;	//儲存拉出圖卡的起始區域
											block120.picData = eval(block.blockName);
											block120.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block120.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_second":
											block121.obj.css("display","block");
											block121.start = block25;	//儲存拉出圖卡的起始區域
											block121.picData = eval(block.blockName);
											block121.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block121.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_third":
											block122.obj.css("display","block");
											block122.start = block26;	//儲存拉出圖卡的起始區域
											block122.picData = eval(block.blockName);
											block122.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block122.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																
							}
						}
						for(var j=114; j<=114; j++){	
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
											block120.obj.css("display","block");
											block120.start = block24;	//儲存拉出圖卡的起始區域
											block120.picData = eval(block.blockName);
											block120.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block120.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_second":
											block121.obj.css("display","block");
											block121.start = block25;	//儲存拉出圖卡的起始區域
											block121.picData = eval(block.blockName);
											block121.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block121.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_third":
											block122.obj.css("display","block");
											block122.start = block26;	//儲存拉出圖卡的起始區域
											block122.picData = eval(block.blockName);
											block122.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block122.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
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
											block123.obj.css("display","block");
											block123.start = block27;	//儲存拉出圖卡的起始區域
											block123.picData = eval(block.blockName);
											block123.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block123.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_second":
											block124.obj.css("display","block");
											block124.start = block28;	//儲存拉出圖卡的起始區域
											block124.picData = eval(block.blockName);
											block124.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block124.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_third":
											block125.obj.css("display","block");
											block125.start = block29;	//儲存拉出圖卡的起始區域
											block125.picData = eval(block.blockName);
											block125.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block125.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																	
							}
						}
						for(var j=115; j<=115; j++){	
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
											block123.obj.css("display","block");
											block123.start = block27;	//儲存拉出圖卡的起始區域
											block123.picData = eval(block.blockName);
											block123.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block123.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_second":
											block124.obj.css("display","block");
											block124.start = block28;	//儲存拉出圖卡的起始區域
											block124.picData = eval(block.blockName);
											block124.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block124.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_third":
											block125.obj.css("display","block");
											block125.start = block29;	//儲存拉出圖卡的起始區域
											block125.picData = eval(block.blockName);
											block125.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block125.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
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
									switch(block.indiviualFrom){	//儲存回收圖卡功能所需的資料
										case "member_A_fraction_graphic_first":
											block117.obj.css("display","block");
											block117.start = block21;	//儲存拉出圖卡的起始區域
											block117.picData = eval(block.blockName);
											block117.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block117.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_second":
											block118.obj.css("display","block");
											block118.start = block22;	//儲存拉出圖卡的起始區域
											block118.picData = eval(block.blockName);
											block118.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block118.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_third":
											block119.obj.css("display","block");
											block119.start = block23;	//儲存拉出圖卡的起始區域
											block119.picData = eval(block.blockName);
											block119.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block119.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																	
							}
						}
						for(var j=114; j<=114; j++){
							if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty =="true"
								&& block.corrd == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										handleObj.showMoveResult(eval(block.id));	//顯示填答結果
										this.remove();										
									});	
									$("#"+blockArray[j].linkLine).css("display","none");
									handleObj.hideRubberBandArea("A_rubber_area");									
									switch(block.indiviualFrom){	//儲存回收圖卡功能所需的資料
										case "member_A_fraction_graphic_first":
											block117.obj.css("display","block");
											block117.start = block21;	//儲存拉出圖卡的起始區域
											block117.picData = eval(block.blockName);
											block117.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block117.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_second":
											block118.obj.css("display","block");
											block118.start = block22;	//儲存拉出圖卡的起始區域
											block118.picData = eval(block.blockName);
											block118.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block118.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_A_fraction_graphic_third":
											block119.obj.css("display","block");
											block119.start = block23;	//儲存拉出圖卡的起始區域
											block119.picData = eval(block.blockName);
											block119.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block119.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
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
									switch(block.indiviualFrom){	//儲存回收圖卡功能所需的資料
										case "member_B_fraction_graphic_first":
											block120.obj.css("display","block");
											block120.start = block24;	//儲存拉出圖卡的起始區域
											block120.picData = eval(block.blockName);
											block120.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block120.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_second":
											block121.obj.css("display","block");
											block121.start = block25;	//儲存拉出圖卡的起始區域
											block121.picData = eval(block.blockName);
											block121.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block121.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_third":
											block122.obj.css("display","block");
											block122.start = block26;	//儲存拉出圖卡的起始區域
											block122.picData = eval(block.blockName);
											block122.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block122.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																	
							}
						}
						for(var j=115; j<=115; j++){	
							if($("#"+block.id).length >0 && $("#"+block.id).offset().left>=blockArray[j].obj.offset().left && $("#"+block.id).offset().top>=blockArray[j].obj.offset().top
								&& $("#"+block.id).offset().left<=blockArray[j].obj.offset().left+120 && $("#"+block.id).offset().top<=blockArray[j].obj.offset().top+120 && blockArray[j].target.empty =="true"
								&& block.corrd == true){
									$("#"+block.id).animate({left:blockArray[j].linkTarget.offset().left - block.x, top:blockArray[j].linkTarget.offset().top - block.y},600, function(){
										handleObj.showMoveResult(eval(block.id));	//顯示填答結果
										this.remove();
									});	
									$("#"+blockArray[j].linkLine).css("display","none");
									handleObj.hideRubberBandArea("B_rubber_area");									
									switch(block.indiviualFrom){	//儲存回收圖卡功能所需的資料
										case "member_B_fraction_graphic_first":
											block120.obj.css("display","block");
											block120.start = block24;	//儲存拉出圖卡的起始區域
											block120.picData = eval(block.blockName);
											block120.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block120.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_second":
											block121.obj.css("display","block");
											block121.start = block25;	//儲存拉出圖卡的起始區域
											block121.picData = eval(block.blockName);
											block121.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block121.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_B_fraction_graphic_third":
											block122.obj.css("display","block");
											block122.start = block26;	//儲存拉出圖卡的起始區域
											block122.picData = eval(block.blockName);
											block122.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block122.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
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
									switch(block.indiviualFrom){	//儲存回收圖卡功能所需的資料
										case "member_C_fraction_graphic_first":
											block123.obj.css("display","block");
											block123.start = block27;	//儲存拉出圖卡的起始區域
											block123.picData = eval(block.blockName);
											block123.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block123.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_second":
											block124.obj.css("display","block");
											block124.start = block28;	//儲存拉出圖卡的起始區域
											block124.picData = eval(block.blockName);
											block124.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block124.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_third":
											block125.obj.css("display","block");
											block125.start = block29;	//儲存拉出圖卡的起始區域
											block125.picData = eval(block.blockName);
											block125.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block125.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																	
							}
						}
						for(var j=115; j<=115; j++){	
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
									switch(block.indiviualFrom){	//儲存回收圖卡功能所需的資料
										case "member_C_fraction_graphic_first":
											block123.obj.css("display","block");
											block123.start = block27;	//儲存拉出圖卡的起始區域
											block123.picData = eval(block.blockName);
											block123.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block123.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_second":
											block124.obj.css("display","block");
											block124.start = block28;	//儲存拉出圖卡的起始區域
											block124.picData = eval(block.blockName);
											block124.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block124.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										case "member_C_fraction_graphic_third":
											block125.obj.css("display","block");
											block125.start = block29;	//儲存拉出圖卡的起始區域
											block125.picData = eval(block.blockName);
											block125.whichBlock =  blockArray[j].target;	//判斷是傳送到哪個區塊?
											block125.whichBlockSym =  blockArray[j].targetSym;	//判斷是傳送到哪個區塊?(字符)
											break;
										}																	
							}
						}
						break;
				}
			}	
						
			/*for(var j =4; j<8; j++){	//判斷物件進入中央字符填空區
				if((block.obj.offset().left >=blockArray[j].obj.offset().left) && (block.obj.offset().top >=blockArray[j].obj.offset().top) && 	//圖像進入中央區域時
				(block.obj.offset().left <=blockArray[j].obj.offset().left+100) && (block.obj.offset().top <=blockArray[j].obj.offset().top+100) &&(blockArray[j].empty =="true")
				&& (block.content == "symbol")){					
					draw.initialCentralSym(eval(blockArray[j].pen), block.denom, block.nume);	//ctx, denom, nume
					blockArray[j].denom = block.denom;
					blockArray[j].nume = block.nume;
					blockArray[j].value = block.value;	
					blockArray[j].blockName = block.id;	
					blockArray[j].blockCanvas = block.canvas;
					blockArray[j].blockPen = block.pen;
					blockArray[j].empty = "false";					
					
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
			}*/
			
			for(var j = 20; j<=28; j++){	//判斷圖像物件進入個人區域
				if((block.obj.offset().left+90 >=blockArray[j].obj.offset().left) && (block.obj.offset().top+90 >=blockArray[j].obj.offset().top) && 	//圖像進入中央區域時
				(block.obj.offset().left+90 <=blockArray[j].obj.offset().left+200) && (block.obj.offset().top+90 <=blockArray[j].obj.offset().top+200) &&(blockArray[j].empty =="true")
				&& (block.position == "scatter") && (block.content =="graphic") && (block.id == blockArray[j].blockName)){
					draw.drawGra(eval(blockArray[j].pen), block.src);	//ctx, imgPath		畫上圖像
					blockArray[j].denom = block.denom;
					blockArray[j].nume = block.nume;
					blockArray[j].value = block.value;	
					blockArray[j].contain = block.id;		
					blockArray[j].blockName = block.id;		
					blockArray[j].src = block.src;					
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
					handleObj.calculateMemberOperate(blockArray[j], "drop");
				}
				checkCorresponding();
				draw.errorReport();
			}
			/*for(var j=11; j<=19; j++){	//判斷字符物件進入個人區域
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
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								draw.drawCutGra(eval(block56.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.original_nume, Panel_A.original_denom, Panel_A.extend, Panel_A.operator);								
								$("#A_message").html("");
							}else{
								Panel_A.extend ="";
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");								
								$("#A_message").html("這個數值除不盡");
								draw.clearDraw(eval(block56.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_A.original_denom * Panel_A.extend <=30){
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								draw.drawCutGra(eval(block56.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.original_nume, Panel_A.original_denom, Panel_A.extend, Panel_A.operator);
								$("#A_message").html("");
							}else{
								Panel_A.extend ="";
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								$("#A_message").html("這個數值過大");
								draw.clearDraw(eval(block56.pen),150,150);
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
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								block93.obj.css("color","black"), block93.use = true;	
								$("#A_message").html("");
							}else{
								Panel_A.result_nume = "";
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								block62.use = false, block62.obj.css("color","white");
								draw.clearDraw(eval(block57.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_A.result_nume == Panel_A.original_nume * Panel_A.extend){
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								block93.obj.css("color","black"), block93.use = true;	
								$("#A_message").html("");
							}else{
								Panel_A.result_nume = "";
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								block62.use = false, block62.obj.css("color","white");
								draw.clearDraw(eval(block57.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_A.result_nume !="" && Panel_A.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block57.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.result_nume, Panel_A.result_denom, Panel_A.extend, Panel_A.operator); 
						block62.use = true, block62.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;					
				}
				
				else if(Panel_A.extend !="" && $("#"+block.ansObj).offset().top>=557 && $("#"+block.ansObj).offset().top<=666 
				&& $("#"+block.ansObj).offset().left>=427 && $("#"+block.ansObj).offset().left<=493){//填完擴充的數值後，進行結果的填值(分母部分)					
					Panel_A.result_denom = block.value;	
					block93.obj.css("color","black"), block93.use = true;				
					switch(Panel_A.operator){
						case "÷":
							if(Panel_A.result_denom == Panel_A.original_denom / Panel_A.extend){
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								block93.obj.css("color","black"), block93.use = true;	
								$("#A_message").html("");
							}else{
								Panel_A.result_denom = "";
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								block62.use = false, block62.obj.css("color","white");
								draw.clearDraw(eval(block57.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_A.result_denom == Panel_A.original_denom * Panel_A.extend){
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								block93.obj.css("color","black"), block93.use = true;	
								$("#A_message").html("");
							}else{
								Panel_A.result_denom = "";
								draw.drawPanelSym(eval(block52.pen), "A_symbol_panel");
								$("#A_message").html("數值填錯，重填");
								block62.use = false, block62.obj.css("color","white");
								draw.clearDraw(eval(block57.pen),150,150);
								$("#A_message").css("display","block");
								$("#A_message").animate({width:700},2000, function(){
									$("#A_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_A.result_nume !="" && Panel_A.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block57.pen), Panel_A.reduce_nume, Panel_A.reduce_denom, Panel_A.result_nume, Panel_A.result_denom, Panel_A.extend, Panel_A.operator); 
						block62.use = true, block62.obj.css("color","black");
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
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								draw.drawCutGra(eval(block69.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.original_nume, Panel_B.original_denom, Panel_B.extend, Panel_B.operator);								
								$("#B_message").html("");
							}else{
								Panel_B.extend ="";
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								$("#B_message").html("這個數值除不盡");
								draw.clearDraw(eval(block69.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_B.original_denom * Panel_B.extend <=30){
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								draw.drawCutGra(eval(block69.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.original_nume, Panel_B.original_denom, Panel_B.extend, Panel_B.operator);
								$("#B_message").html("");
							}else{
								Panel_B.extend ="";
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								$("#B_message").html("這個數值過大");
								draw.clearDraw(eval(block69.pen),150,150);
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
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								block94.obj.css("color","black"), block94.use = true;
								$("#B_message").html("");
							}else{
								Panel_B.result_nume ="";
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								block75.use = false, block75.obj.css("color","white");
								draw.clearDraw(eval(block70.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_B.result_nume == Panel_B.original_nume * Panel_B.extend){
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								block88.obj.css("color","black"), block88.use = true;
								$("#B_message").html("");
							}else{
								Panel_B.result_nume ="";
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								block75.use = false, block75.obj.css("color","white");
								draw.clearDraw(eval(block70.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_B.result_nume !="" && Panel_B.result_denom != "" ){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block70.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.result_nume, Panel_B.result_denom, Panel_B.extend, Panel_B.operator); 
						block75.use = true, block75.obj.css("color","black");
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
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								block94.obj.css("color","black"), block94.use = true;
								$("#B_message").html("");
							}else{
								Panel_B.result_denom = "";
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								block75.use = false, block75.obj.css("color","white");
								draw.clearDraw(eval(block70.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_B.result_denom == Panel_B.original_denom * Panel_B.extend){
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								block94.obj.css("color","black"), block94.use = true;
								$("#B_message").html("");
							}else{
								Panel_B.result_denom = "";
								draw.drawPanelSym(eval(block65.pen), "B_symbol_panel");
								$("#B_message").html("數值填錯，重填");
								block75.use = false, block75.obj.css("color","white");
								draw.clearDraw(eval(block70.pen),150,150);
								$("#B_message").css("display","block");
								$("#B_message").animate({width:700},2000, function(){
									$("#B_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_B.result_nume !="" && Panel_B.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block70.pen), Panel_B.reduce_nume, Panel_B.reduce_denom, Panel_B.result_nume, Panel_B.result_denom, Panel_B.extend, Panel_B.operator); 
						block75.use = true, block75.obj.css("color","black");
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
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								draw.drawCutGra(eval(block82.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.original_nume, Panel_C.original_denom, Panel_C.extend, Panel_C.operator);								
								$("#C_message").html("");
							}else{
								Panel_C.extend = "";
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								$("#C_message").html("這個數值除不盡");
								draw.clearDraw(eval(block82.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_C.original_denom * Panel_C.extend <=30){
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								draw.drawCutGra(eval(block82.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.original_nume, Panel_C.original_denom, Panel_C.extend, Panel_C.operator);
								$("#C_message").html("");
							}else{
								Panel_C.extend = "";
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								$("#C_message").html("這個數值過大");
								draw.clearDraw(eval(block82.pen),150,150);
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
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								block95.obj.css("color","black"), block95.use = true;
								$("#C_message").html("");
							}else{
								Panel_C.result_nume = "";
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								block88.use = false, block88.obj.css("color","white");
								draw.clearDraw(eval(block83.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_C.result_nume == Panel_C.original_nume * Panel_C.extend){
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								block95.obj.css("color","black"), block95.use = true;
								$("#C_message").html("");
							}else{
								Panel_C.result_nume = "";
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								block88.use = false, block88.obj.css("color","white");
								draw.clearDraw(eval(block83.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_C.result_nume !="" && Panel_C.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block83.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.result_nume, Panel_C.result_denom, Panel_C.extend, Panel_C.operator); 
						block88.use = true, block88.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}else if(Panel_C.extend !="" && $("#"+block.ansObj).offset().top>=201 && $("#"+block.ansObj).offset().top<=334 
				&& $("#"+block.ansObj).offset().left>=1732 && $("#"+block.ansObj).offset().left<=1797){//填完擴充的數值後，進行結果的填值(分母部分)
					Panel_C.result_denom = block.value;					
					switch(Panel_C.operator){
						case "÷":
							if(Panel_C.result_denom == Panel_C.original_denom / Panel_C.extend){
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								block95.obj.css("color","black"), block95.use = true;
								$("#C_message").html("");
							}else{
								Panel_C.result_denom = "";
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								block88.use = false, block88.obj.css("color","white");
								draw.clearDraw(eval(block83.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;
						case "×":
							if(Panel_C.result_denom == Panel_C.original_denom * Panel_C.extend){
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								block95.obj.css("color","black"), block95.use = true;
								$("#C_message").html("");
							}else{
								Panel_C.result_denom = "";
								draw.drawPanelSym(eval(block78.pen), "C_symbol_panel");
								$("#C_message").html("數值填錯，重填");
								block88.use = false, block88.obj.css("color","white");
								draw.clearDraw(eval(block83.pen),150,150);
								$("#C_message").css("display","block");
								$("#C_message").animate({width:700},2000, function(){
									$("#C_message").css("display", "none");
								});
							}
							break;	
					}
					if(Panel_C.result_nume !="" && Panel_C.result_denom != ""){	//若分子及分母都填入時，畫出該圖像
						draw.drawResultGra(eval(block83.pen), Panel_C.reduce_nume, Panel_C.reduce_denom, Panel_C.result_nume, Panel_C.result_denom, Panel_C.extend, Panel_C.operator); 
						block88.use = true, block88.obj.css("color","black");
					}				
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}else{
					$("#"+block.ansObj).remove();
					block.x=0, block.y=0;
				}
			}
			
			for(var j=11; j<=28; j++){	//當手指點擊個人圖像面板並離開時			
			/*	if($("#"+blockArray[j].blockName).length >0){
					if($("#"+blockArray[j].blockName).offset().top >=blockArray[j].obj.offset().top && $("#"+blockArray[j].blockName).offset().top <= blockArray[j].obj.offset().top+200
					 && $("#"+blockArray[j].blockName).offset().left >=blockArray[j].obj.offset().left && $("#"+blockArray[j].blockName).offset().left <=blockArray[j].obj.offset().left+200){
						$("#"+blockArray[j].blockName).remove();
						
					}	
				}*/				
				if(block.id == blockArray[j].id){
					block.x =0, block.y=0;
				}
			}			
		}		
		delete blockMap[event.changedTouches[i].identifier];
	}
}

initial();
checkCorresponding();	//判定字符與圖像是否有配對
document.addEventListener('touchstart', touchstart, false);//觸發touchstart事件
document.addEventListener('touchmove', touchmove, false);//觸發touchmove事件
document.addEventListener('touchend', touchend, false);//觸發touchend事件
addEventListener('keydown',function(event){
	switch(event.keyCode){
		case 65:	//A
			correctCouple();
			break;
		case 66:	//B
			handleObj.hideCentralObject();
			break;
		case 67:	//C
			handleObj.randomGraSym();
			break;
		case 68:	//D
			draw.recoverGraSym();
			break;
		case 69:	//E
			switch(ques_index){
				case 1:
					for(var i=42; i<=44; i++){
						blockArray[i].empty = "false";
						blockArray[i].value = i;
						blockArray[i].select = "yes";
					}
					order1 = "incresing";
					check();
					break;
				case 2:
					for(var i=0; i<4; i++){
						blockArray[i].empty = "false";
						blockArray[i].value = i;
					}
					member_operate.A_first_operate =1, member_operate.B_first_operate =1, member_operate.C_first_operate =1;
					member_operate.A_second_operate =1, member_operate.B_second_operate =1, member_operate.C_second_operate =1;
					order = "incresing";
					check();
					break;
			}			
			break;
		case 70: //F
			block111.obj.css("display","block"), block112.obj.css("display","block"), block113.obj.css("display","block");
			break;
		case 71: //G
			$("#"+block102.linkLine).css("display", "block"), $("#"+block103.linkLine).css("display", "block"), $("#"+block104.linkLine).css("display", "block");
			$("#A_to_center4_link").css("display","block");
			break;
		case 72: //H
			$("#"+block105.linkLine).css("display", "block"), $("#"+block106.linkLine).css("display", "block"), $("#"+block107.linkLine).css("display", "block");
			$("#B_to_center4_link").css("display","block");
			break;
		case 73: //I
			$("#"+block108.linkLine).css("display", "block"), $("#"+block109.linkLine).css("display", "block"), $("#"+block110.linkLine).css("display", "block");
			$("#C_to_center4_link").css("display","block");
			break;
	}
}, false);