/**
 * @author wei
 */
var blockMap = new Object();//用來監控物件狀態
var blockArray = new Array(120);//儲存物件
var draw = new draw();	//建立畫圖物件
var handleObj = new handleObj_3();	//建立處理物件類別
var o = document.body;
var A_next = false, B_next = false, C_next = false;
var A_check = false, B_check = false, C_check = false;
var first_check = false; //判斷是否有確定過配對，同時判斷進行到第幾階段
var ques_index = 1; //目前進行的題號
var complete = false;
var corrcet_amount = 0;
var central_ques = {
	nume:[],
	denom:[],
	original_nume: [],
	original_denom: []
}
//var time =0;
var A_translate =false, B_translate = false, C_translate = false;
var A_trans_time, B_trans_time, C_trans_time;

var member_A = {
	nume: [],
	denom: [],
	original_nume: [],
	original_denom: [],
	max_extend: [],
	path: []
}

var member_B = {
	nume: [],
	denom: [],
	original_nume: [],
	original_denom: [],
	max_extend: [],
	path: []
}

var member_C = {
	nume: [],
	denom: [],
	original_nume: [],
	original_denom: [],
	max_extend: [],
	path: []
}

var member_Sym = {	//紀錄個人面板字符初始值
	A_Sym: {
		nume: [],
		denom: [],
		original_nume: [],
		original_denom: [],
		value:[]
	},
	B_Sym: {
		nume: [],
		denom: [],
		original_nume: [],
		original_denom: [],
		value:[]
	},	
	C_Sym: {
		nume: [],
		denom: [],
		original_nume: [],
		original_denom: [],
		value:[]
	}
}

var Panel_A = {	//A 驗證面板狀態
	reduce_nume: "",	//紀錄該分數的最簡值	
	reduce_denom: "",
	original_nume:"", 	//紀錄第一個空格的值
	original_denom:"",
	operator:"",
	extend:"",
	result_nume:"",	//紀錄擴、約分後的值
	result_denom:"",
	count:0,
	max_extend:0,
	max_reduce:0,
	which_pic:"",	//紀錄點選的圖卡
	which_sym:"",//紀錄對應的字符 
	input_type:"unit"
}
var Panel_B = {	//B 驗證面板狀態
	reduce_nume: "",	//紀錄該分數的最簡值	
	reduce_denom: "",
	original_nume:"",
	original_denom:"",
	operator:"",
	extend:"",
	result_nume:"",
	result_denom:"",
	count:0,
	max_extend:0,
	max_reduce:0,
	which_pic:"",	//紀錄點選的圖卡
	which_sym:"",//紀錄對應的字符 
	input_type:"unit"
}
var Panel_C = {	//C 驗證面板狀態
	reduce_nume: "",	//紀錄該分數的最簡值	
	reduce_denom: "",
	original_nume:"",
	original_denom:"",
	operator:"",
	extend:"",
	result_nume:"",
	result_denom:"",
	count:0,
	max_extend:0,
	max_reduce:0,
	which_pic:"",	//紀錄點選的圖卡
	which_sym:"",//紀錄對應的字符 
	input_type:"unit"
}


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

var que_index =[];	//儲存抓取的分數題號
rand_number(0, 15, 3, que_index);		//min, max, amount ,array


var temp_fraction = {	//儲存抓出的分數
	nume: [],
	denom: []
}	
for(var i = 0; i<3; i++){
	temp_fraction.nume[i] =proper.nume[ que_index[i] ];
	temp_fraction.denom[i] =proper.denom[ que_index[i] ];
}

var question_fraction = {	//儲存擴分完的分數
	nume: [],
	denom: [],
	original_nume: [],
	original_denom: [],
	each_extend: [],	//儲存每個分數的擴充值
	max_extend: []
}

for(var i=0; i<3; i++){		//對抓取的分數進行擴分	
	switch(temp_fraction.denom[i]){
		case 2:				
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,3,3,extend);
			for(var j=0; j<3;j++){
				question_fraction.nume.push(temp_fraction.nume[i] * extend[j]);
				question_fraction.denom.push(temp_fraction.denom[i] * extend[j]);
				question_fraction.original_nume.push(temp_fraction.nume[i]);
				question_fraction.original_denom.push(temp_fraction.denom[i]);
				question_fraction.each_extend.push(extend[j]);
				question_fraction.max_extend.push(8);	//紀錄每個最簡分數擴分的最大值
			}			
			break;
		case 3:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,3,3,extend);
			for(var j=0; j<3;j++){
				question_fraction.nume.push(temp_fraction.nume[i] * extend[j]);
				question_fraction.denom.push(temp_fraction.denom[i] * extend[j]);
				question_fraction.original_nume.push(temp_fraction.nume[i]);
				question_fraction.original_denom.push(temp_fraction.denom[i]);
				question_fraction.each_extend.push(extend[j]);
				question_fraction.max_extend.push(10);
			}	
			break;
		case 4:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,3,3,extend);
			for(var j=0; j<3;j++){
				question_fraction.nume.push(temp_fraction.nume[i] * extend[j]);
				question_fraction.denom.push(temp_fraction.denom[i] * extend[j]);
				question_fraction.original_nume.push(temp_fraction.nume[i]);
				question_fraction.original_denom.push(temp_fraction.denom[i]);
				question_fraction.each_extend.push(extend[j]);
				question_fraction.max_extend.push(7);
			}	
			break;
		case 5:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,3,3,extend);
			for(var j=0; j<3;j++){
				question_fraction.nume.push(temp_fraction.nume[i] * extend[j]);
				question_fraction.denom.push(temp_fraction.denom[i] * extend[j]);
				question_fraction.original_nume.push(temp_fraction.nume[i]);
				question_fraction.original_denom.push(temp_fraction.denom[i]);
				question_fraction.each_extend.push(extend[j]);
				question_fraction.max_extend.push(6);
			}	
			break;
		case 6:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,3,3,extend);
			for(var j=0; j<3;j++){
				question_fraction.nume.push(temp_fraction.nume[i] * extend[j]);
				question_fraction.denom.push(temp_fraction.denom[i] * extend[j]);
				question_fraction.original_nume.push(temp_fraction.nume[i]);
				question_fraction.original_denom.push(temp_fraction.denom[i]);
				question_fraction.each_extend.push(extend[j]);
				question_fraction.max_extend.push(5);
			}
			break;		
	}	
}

var image_list1 = [new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image];	//儲存Member A, B, C圖卡路徑
for(var i=0; i<9; i++){	//指定圖卡路徑
	image_list1[i].src = "equivalence_pic/proper/"+question_fraction.original_denom[i]+"_"+question_fraction.original_nume[i]+"/"+question_fraction.denom[i]+"_"+question_fraction.nume[i]+".png";
}


for(var i =1;i<question_fraction.max_extend[0]; i++){	//儲存第一道題目
	if(i != question_fraction.each_extend[0] && i != question_fraction.each_extend[1] && i != question_fraction.each_extend[2] ){
		central_ques.nume.push(temp_fraction.nume[0] * i);
		central_ques.denom.push(temp_fraction.denom[0] * i);
		central_ques.original_nume.push(temp_fraction.nume[0]);
		central_ques.original_denom.push(temp_fraction.denom[0]);
		break;
	}
}

for(var i =1;i<question_fraction.max_extend[0]; i++){	//儲存第二道題目
	if(i != question_fraction.each_extend[3] && i != question_fraction.each_extend[4] && i != question_fraction.each_extend[5] ){
		central_ques.nume.push(temp_fraction.nume[1] * i);
		central_ques.denom.push(temp_fraction.denom[1] * i);
		central_ques.original_nume.push(temp_fraction.nume[1]);
		central_ques.original_denom.push(temp_fraction.denom[1]);
		break;
	}
}

for(var i =1;i<question_fraction.max_extend[0]; i++){	//儲存第三道題目
	if(i != question_fraction.each_extend[6] && i != question_fraction.each_extend[7] && i != question_fraction.each_extend[8] ){
		central_ques.nume.push(temp_fraction.nume[2] * i);
		central_ques.denom.push(temp_fraction.denom[2] * i);
		central_ques.original_nume.push(temp_fraction.nume[2]);
		central_ques.original_denom.push(temp_fraction.denom[2]);
		break;
	}
}

for(var i=0; i<3; i++){		//分配分數給Member A, B, C
	switch(i){
		case 0:
			var r = [], f1 = [5, 3, 4];
			rand_number(0,3,3,r);
			var i_1 = f1[ r[0] ], i_2 = f1[ r[1] ], i_3 = f1[ r[2] ];
			member_A.nume[i] = question_fraction.nume[i_1];
			member_A.denom[i] = question_fraction.denom[i_1];
			member_A.original_nume[i] = question_fraction.original_nume[i_1];
			member_A.original_denom[i] = question_fraction.original_denom[i_1];
			member_A.max_extend[i] = question_fraction.max_extend[i_1];
			member_A.path[i] = image_list1[i_1];
			
			member_B.nume[i] = question_fraction.nume[i_2];
			member_B.denom[i] = question_fraction.denom[i_2];
			member_B.original_nume[i] = question_fraction.original_nume[i_2];
			member_B.original_denom[i] = question_fraction.original_denom[i_2];
			member_B.max_extend[i] = question_fraction.max_extend[i_2];
			member_B.path[i] = image_list1[i_2];
			
			member_C.nume[i] = question_fraction.nume[i_3];
			member_C.denom[i] = question_fraction.denom[i_3];
			member_C.original_nume[i] = question_fraction.original_nume[i_3];
			member_C.original_denom[i] = question_fraction.original_denom[i_3];
			member_C.max_extend[i] = question_fraction.max_extend[i_3];
			member_C.path[i] = image_list1[i_3];
		//	console.log("i_1:"+i_1+" i_2:"+i_2+" i_3:"+i_3);
			break;
		case 1:
			var r = [], f1 = [8, 6, 7];
			rand_number(0,3,3,r);
			var i_1 = f1[ r[0] ], i_2 = f1[ r[1] ], i_3 = f1[ r[2] ];
			member_A.nume[i] = question_fraction.nume[i_1];
			member_A.denom[i] = question_fraction.denom[i_1];
			member_A.original_nume[i] = question_fraction.original_nume[i_1];
			member_A.original_denom[i] = question_fraction.original_denom[i_1];
			member_A.max_extend[i] = question_fraction.max_extend[i_1];
			member_A.path[i] = image_list1[i_1];
			
			member_B.nume[i] = question_fraction.nume[i_2];
			member_B.denom[i] = question_fraction.denom[i_2];
			member_B.original_nume[i] = question_fraction.original_nume[i_2];
			member_B.original_denom[i] = question_fraction.original_denom[i_2];
			member_B.max_extend[i] = question_fraction.max_extend[i_2];
			member_B.path[i] = image_list1[i_2];
			
			member_C.nume[i] = question_fraction.nume[i_3];
			member_C.denom[i] = question_fraction.denom[i_3];
			member_C.original_nume[i] = question_fraction.original_nume[i_3];
			member_C.original_denom[i] = question_fraction.original_denom[i_3];
			member_C.max_extend[i] = question_fraction.max_extend[i_3];
			member_C.path[i] = image_list1[i_3];
		//	console.log("i_1:"+i_1+" i_2:"+i_2+" i_3:"+i_3);
			break;
		case 2:
			var r = [], f1 = [2, 0, 1];
			rand_number(0,3,3,r);
			var i_1 = f1[ r[0] ], i_2 = f1[ r[1] ], i_3 = f1[ r[2] ];
			member_A.nume[i] = question_fraction.nume[i_1];
			member_A.denom[i] = question_fraction.denom[i_1];
			member_A.original_nume[i] = question_fraction.original_nume[i_1];
			member_A.original_denom[i] = question_fraction.original_denom[i_1];
			member_A.max_extend[i] = question_fraction.max_extend[i_1];
			member_A.path[i] = image_list1[i_1];
			
			member_B.nume[i] = question_fraction.nume[i_2];
			member_B.denom[i] = question_fraction.denom[i_2];
			member_B.original_nume[i] = question_fraction.original_nume[i_2];
			member_B.original_denom[i] = question_fraction.original_denom[i_2];
			member_B.max_extend[i] = question_fraction.max_extend[i_2];
			member_B.path[i] = image_list1[i_2];
			
			member_C.nume[i] = question_fraction.nume[i_3];
			member_C.denom[i] = question_fraction.denom[i_3];
			member_C.original_nume[i] = question_fraction.original_nume[i_3];
			member_C.original_denom[i] = question_fraction.original_denom[i_3];
			member_C.max_extend[i] = question_fraction.max_extend[i_3];
			member_C.path[i] = image_list1[i_3];
		//	console.log("i_1:"+i_1+" i_2:"+i_2+" i_3:"+i_3);
			break;
	}	
}


//member_A.path[0] = image_list1[0], member_A.path[1] = image_list1[3], member_A.path[2] = image_list1[6];
//member_B.path[0] = image_list1[1], member_B.path[1] = image_list1[4], member_B.path[2] = image_list1[7];
//member_C.path[0] = image_list1[2], member_C.path[1] = image_list1[5], member_C.path[2] = image_list1[8];

for(var i =1; i<=2; i++){		//中央區域的圖像填空區
	eval("var block"+i+"=$('#blank_"+i+"').get("+0+")");
	eval("block"+i+".id='blank_"+i+"'");
	eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+i+".identifier");
	eval("block"+i+".x="+0);
	eval("block"+i+".y="+0);
	eval("block"+i+".obj="+"$('#blank_"+i+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".empty='true'");
	eval("block"+i+".value");
	eval("block"+i+".position='center'");
	eval("block"+i+".name = 'block"+i+"'");
	//eval("block"+i+".index ="+i);
	eval("block"+i+".answer = false");
	eval("block"+i+".original_nume=''");
	eval("block"+i+".original_denom=''");
	eval("block"+i+".max_extend=''");
	eval("block"+i+".pen ='ctx"+(i+1)+"'");
	eval("block"+i+".canvas ='canvas"+(i+1)+"'");
	eval("block"+i+".blockCanvas=''");
	eval("block"+i+".blockPen=''");
	eval("block"+i+".use=true");	
	eval("block"+i+".take=true");
	eval("block"+i+".showOriFra='ctx"+(i+69)+"'");	
	eval("block"+i+".showExtendGra='ctx"+(i+73)+"'");
	eval("block"+i+".ExtendObj=$('#central_extendGra"+i+"')");
	eval("block"+i+".OriFraObj=$('#Central_original_gra"+i+"')");
	//eval("block"+i+".occupy='false'");
}

for(var i =1; i<=2; i++){		//中央區域的字符區
	eval("var block"+(i+2)+"=$('#central_symbol_"+i+"').get("+0+")");
	eval("block"+(i+2)+".id='central_symbol_"+i+"'");
	eval("block"+(i+2)+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+(i+2)+".identifier");
	eval("block"+(i+2)+".x="+0);
	eval("block"+(i+2)+".y="+0);
	eval("block"+(i+2)+".obj="+"$('#central_symbol_"+i+"')");
	eval("block"+(i+2)+".denom=''");
	eval("block"+(i+2)+".nume=''");
	eval("block"+(i+2)+".position='center'");
	eval("block"+(i+2)+".name = 'block"+(i+2)+"'");
	//eval("block"+(i+2)+".index ="+i);
	eval("block"+(i+2)+".pen ='ctx"+(i+3)+"'");
	eval("block"+(i+2)+".showOriFra='ctx"+(i+66)+"'");	
	eval("block"+(i+2)+".canvas ='canvas"+(i+3)+"'");
	eval("block"+(i+2)+".showExtendSym='ctx"+(i+76)+"'");
	eval("block"+(i+2)+".SymExtendObj=$('#central_extendSym"+i+"')");
	eval("block"+(i+2)+".SymOriFraObj=$('#Central_original_sym"+i+"')");
}

var block5 = $("#member_A_fraction_symbol_first").get(0);
block5.id = "member_A_fraction_symbol_first";
block5.position = "personal_area";
block5.empty = "false";
block5.offset = {x:0, y:0}
block5.x =0, block5.y =0;
block5.orientation = "left";
block5.obj = $("#member_A_fraction_symbol_first");
block5.pen = "ctx6";
block5.contain = "";
block5.blockName = "";
block5.index = "";
block5.original_nume ="";
block5.original_denom ="";
block5.denom = "";
block5.nume = "";
block5.whole = "";
block5.block_pen = "ctx48";
block5.canvas = "canvas48";
block5.content = "symbol";
block5.trans = false;

var block6 = $("#member_A_fraction_symbol_second").get(0);
block6.id = "member_A_fraction_symbol_second";
block6.position = "personal_area";
block6.empty = "false";
block6.offset = {x:0, y:0}
block6.x =0, block6.y =0;
block6.orientation = "left";
block6.obj = $("#member_A_fraction_symbol_second");
block6.pen = "ctx7";
block6.contain = "";
block6.blockName = "";
block6.index = "";
block6.original_nume ="";
block6.original_denom ="";
block6.denom = "";
block6.nume = "";
block6.whole = "";
block6.block_pen = "ctx49";
block6.canvas = "canvas49";
block6.content = "symbol";
block6.trans = false;

var block7 = $("#member_A_fraction_symbol_third").get(0);
block7.id = "member_A_fraction_symbol_third";
block7.position = "personal_area";
block7.empty = "false";
block7.offset = {x:0, y:0}
block7.x =0, block7.y =0;
block7.orientation = "left";
block7.obj = $("#member_A_fraction_symbol_third");
block7.pen = "ctx8";
block7.contain = "";
block7.blockName = "";
block7.index = "";
block7.original_nume ="";
block7.original_denom ="";
block7.denom = "";
block7.nume = "";
block7.whole = "";
block7.block_pen = "ctx50";
block7.canvas = "canvas50";
block7.content = "symbol";
block7.trans = false;

var block8 = $("#member_B_fraction_symbol_first").get(0);
block8.id = "member_B_fraction_symbol_first";
block8.position = "personal_area";
block8.empty = "false";
block8.offset = {x:0, y:0}
block8.x =0, block8.y =0;
block8.orientation = "bottom";
block8.obj = $("#member_B_fraction_symbol_first");
block8.pen = "ctx9";
block8.contain = "";
block8.blockName = "";
block8.index = "";
block8.original_nume ="";
block8.original_denom ="";
block8.denom = "";
block8.nume = "";
block8.whole = "";
block8.block_pen = "ctx51";
block8.canvas = "canvas51";
block8.content = "symbol";
block8.trans = false;

var block9 = $("#member_B_fraction_symbol_second").get(0);
block9.id = "member_B_fraction_symbol_second";
block9.position = "personal_area";
block9.empty = "false";
block9.offset = {x:0, y:0}
block9.x =0, block9.y =0;
block9.orientation = "bottom";
block9.obj = $("#member_B_fraction_symbol_second");
block9.pen = "ctx10";
block9.contain = "";
block9.blockName = "";
block9.index = "";
block9.original_nume ="";
block9.original_denom ="";
block9.denom = "";
block9.nume = "";
block9.whole = "";
block9.block_pen = "ctx52";
block9.canvas = "canvas52";
block9.content = "symbol";
block9.trans = false;

var block10 = $("#member_B_fraction_symbol_third").get(0);
block10.id = "member_B_fraction_symbol_third";
block10.position = "personal_area";
block10.empty = "false";
block10.offset = {x:0, y:0}
block10.x =0, block10.y =0;
block10.orientation = "bottom";
block10.obj = $("#member_B_fraction_symbol_third");
block10.pen = "ctx11";
block10.contain = "";
block10.blockName = "";
block10.index = "";
block10.denom = "";
block10.original_nume ="";
block10.original_denom ="";
block10.nume = "";
block10.whole = "";
block10.block_pen = "ctx53";
block10.canvas = "canvas53";
block10.content = "symbol";
block10.trans = false;

var block11 = $("#member_C_fraction_symbol_first").get(0);
block11.id = "member_C_fraction_symbol_first";
block11.position = "personal_area";
block11.empty = "false";
block11.offset = {x:0, y:0}
block11.x =0, block11.y =0;
block11.orientation = "right";
block11.obj = $("#member_C_fraction_symbol_first");
block11.pen = "ctx12";
block11.contain = "";
block11.blockName = "";
block11.index = "";
block11.original_nume ="";
block11.original_denom ="";
block11.denom = "";
block11.nume = "";
block11.whole = "";
block11.block_pen = "ctx54";
block11.canvas = "canvas54";
block11.content = "symbol";
block11.trans = false;

var block12 = $("#member_C_fraction_symbol_second").get(0);
block12.id = "member_C_fraction_symbol_second";
block12.position = "personal_area";
block12.empty = "false";
block12.offset = {x:0, y:0}
block12.x =0, block12.y =0;
block12.orientation = "right";
block12.obj = $("#member_C_fraction_symbol_second");
block12.pen = "ctx13";
block12.contain = "";
block12.blockName = "";
block12.index = "";
block12.original_nume ="";
block12.original_denom ="";
block12.denom = "";
block12.nume = "";
block12.whole = "";
block12.block_pen = "ctx55";
block12.canvas = "canvas55";
block12.content = "symbol";
block12.trans = false;

var block13 = $("#member_C_fraction_symbol_third").get(0);
block13.id = "member_C_fraction_symbol_third";
block13.position = "personal_area";
block13.empty = "false";
block13.offset = {x:0, y:0}
block13.x =0, block13.y =0;
block13.orientation = "right";
block13.obj = $("#member_C_fraction_symbol_third");
block13.pen = "ctx14";
block13.contain = "";
block13.blockName = "";
block13.index = "";
block13.original_nume ="";
block13.original_denom ="";
block13.denom = "";
block13.nume = "";
block13.whole = "";
block13.block_pen = "ctx56";
block13.canvas = "canvas56";
block13.content = "symbol";
block13.trans = false;

var block14 = $("#member_A_fraction_graphic_first").get(0);
block14.id = "member_A_fraction_graphic_first";
block14.position = "personal_area";
block14.empty = "false";
block14.offset = {x:0, y:0}
block14.x =0, block14.y =0;
block14.orientation = "left";
block14.obj = $("#member_A_fraction_graphic_first");
block14.pen = "ctx15";
block14.contain = "";
block14.blockName = "";
block14.index = "";
block14.denom = "";
block14.nume = "";
block14.whole = "";
block14.original_nume ="";
block14.original_denom ="";
block14.max_extend="";
block14.block_pen = "ctx25";
block14.canvas = "canvas25";
block14.src = "";
block14.content = "graphic";
block14.value = "";
block14.trans = false;
block14.tran_panel = $("#A_panel");
block14.tran_panel_id = "A_panel";
block14.showOriFra = "ctx58";	//紀錄初始分數的面板
block14.sym = "ctx6";	//紀錄對應的字符面板
block14.whetherExtend = false;	//判斷圖卡是否有被轉換過
block14.extendValue = 0;
block14.beforeNume = 0;
block14.beforeDenom = 0;

var block15 = $("#member_A_fraction_graphic_second").get(0);
block15.id = "member_A_fraction_graphic_second";
block15.position = "personal_area";
block15.empty = "false";
block15.offset = {x:0, y:0}
block15.x =0, block15.y =0;
block15.orientation = "left";
block15.obj = $("#member_A_fraction_graphic_second");
block15.pen = "ctx16";
block15.contain = "";
block15.blockName = "";
block15.index = "";
block15.denom = "";
block15.nume = "";
block15.whole = "";
block15.original_nume ="";
block15.original_denom ="";
block15.max_extend="";
block15.block_pen = "ctx26";
block15.canvas = "canvas26";
block15.src = "";
block15.content = "graphic";
block15.value = "";
block15.trans = false;
block15.tran_panel = $("#A_panel");
block15.tran_panel_id = "A_panel";
block15.showOriFra = "ctx59";	//紀錄初始分數的面板
block15.sym = "ctx7";	//紀錄對應的字符面板
block15.whetherExtend = false;	//判斷圖卡是否有被轉換過
block15.extendValue = 0;
block15.beforeNume = 0;
block15.beforeDenom = 0;

var block16 = $("#member_A_fraction_graphic_third").get(0);
block16.id = "member_A_fraction_graphic_third";
block16.position = "personal_area";
block16.empty = "false";
block16.offset = {x:0, y:0}
block16.x =0, block16.y =0;
block16.orientation = "left";
block16.obj = $("#member_A_fraction_graphic_third");
block16.pen = "ctx17";
block16.contain = "";
block16.blockName = "";
block16.index = "";
block16.denom = "";
block16.nume = "";
block16.whole = "";
block16.original_nume ="";
block16.original_denom ="";
block16.max_extend="";
block16.block_pen = "ctx27";
block16.canvas = "canvas27";
block16.src = "";
block16.content = "graphic";
block16.value = "";
block16.trans = false;
block16.tran_panel = $("#A_panel");
block16.tran_panel_id = "A_panel";
block16.showOriFra = "ctx60";	//紀錄初始分數的面板
block16.sym = "ctx8";	//紀錄對應的字符面板
block16.whetherExtend = false;	//判斷圖卡是否有被轉換過
block16.extendValue = 0;
block16.beforeNume = 0;
block16.beforeDenom = 0;

var block17 = $("#member_B_fraction_graphic_first").get(0);
block17.id = "member_B_fraction_graphic_first";
block17.position = "personal_area";
block17.empty = "false";
block17.offset = {x:0, y:0}
block17.x =0, block17.y =0;
block17.orientation = "bottom";
block17.obj = $("#member_B_fraction_graphic_first");
block17.pen = "ctx18";
block17.contain = "";
block17.blockName = "";
block17.index = "";
block17.denom = "";
block17.nume = "";
block17.whole = "";
block17.original_nume ="";
block17.original_denom ="";
block17.max_extend="";
block17.block_pen = "ctx28";
block17.canvas = "canvas28";
block17.src = "";
block17.content = "graphic";
block17.value = "";
block17.trans = false;
block17.tran_panel = $("#B_panel");
block17.tran_panel_id = "B_panel";
block17.showOriFra = "ctx61";	//紀錄初始分數的面板
block17.sym = "ctx9";	//紀錄對應的字符面板
block17.whetherExtend = false;	//判斷圖卡是否有被轉換過
block17.extendValue = 0;
block17.beforeNume = 0;
block17.beforeDenom = 0;

var block18 = $("#member_B_fraction_graphic_second").get(0);
block18.id = "member_B_fraction_graphic_second";
block18.position = "personal_area";
block18.empty = "false";
block18.offset = {x:0, y:0}
block18.x =0, block18.y =0;
block18.orientation = "bottom";
block18.obj = $("#member_B_fraction_graphic_second");
block18.pen = "ctx19";
block18.contain = "";
block18.blockName = "";
block18.index = "";
block18.denom = "";
block18.nume = "";
block18.whole = "";
block18.original_nume ="";
block18.original_denom ="";
block18.max_extend="";
block18.block_pen = "ctx29";
block18.canvas = "canvas29";
block18.src = "";
block18.content = "graphic";
block18.value = "";
block18.trans = false;
block18.tran_panel = $("#B_panel");
block18.tran_panel_id = "B_panel";
block18.showOriFra = "ctx62";	//紀錄初始分數的面板
block18.sym = "ctx10";	//紀錄對應的字符面板
block18.whetherExtend = false;	//判斷圖卡是否有被轉換過
block18.extendValue = 0;
block18.beforeNume = 0;
block18.beforeDenom = 0;

var block19 = $("#member_B_fraction_graphic_third").get(0);
block19.id = "member_B_fraction_graphic_third";
block19.position = "personal_area";
block19.empty = "false";
block19.offset = {x:0, y:0}
block19.x =0, block19.y =0;
block19.orientation = "bottom";
block19.obj = $("#member_B_fraction_graphic_third");
block19.pen = "ctx20";
block19.contain = "";
block19.blockName = "";
block19.index = "";
block19.denom = "";
block19.nume = "";
block19.whole = "";
block19.original_nume ="";
block19.original_denom ="";
block19.max_extend="";
block19.block_pen = "ctx30";
block19.canvas = "canvas30";
block19.src = "";
block19.content = "graphic";
block19.value = "";
block19.trans = false;
block19.tran_panel = $("#B_panel");
block19.tran_panel_id = "B_panel";
block19.showOriFra = "ctx63";	//紀錄初始分數的面板
block19.sym = "ctx11";	//紀錄對應的字符面板
block19.whetherExtend = false;	//判斷圖卡是否有被轉換過
block19.extendValue = 0;
block19.beforeNume = 0;
block19.beforeDenom = 0;

var block20 = $("#member_C_fraction_graphic_first").get(0);
block20.id = "member_C_fraction_graphic_first";
block20.position = "personal_area";
block20.empty = "false";
block20.offset = {x:0, y:0}
block20.x =0, block20.y =0;
block20.orientation = "right";
block20.obj = $("#member_C_fraction_graphic_first");
block20.pen = "ctx21";
block20.contain = "";
block20.blockName = "";
block20.index = "";
block20.denom = "";
block20.nume = "";
block20.whole = "";
block20.original_nume ="";
block20.original_denom ="";
block20.max_extend="";
block20.block_pen = "ctx31";
block20.canvas = "canvas31";
block20.src = "";
block20.content = "graphic";
block20.value = "";
block20.trans = false;
block20.tran_panel = $("#C_panel");
block20.tran_panel_id = "C_panel";
block20.showOriFra = "ctx64";	//紀錄初始分數的面板
block20.sym = "ctx12";	//紀錄對應的字符面板
block20.whetherExtend = false;	//判斷圖卡是否有被轉換過
block20.extendValue = 0;
block20.beforeNume = 0;
block20.beforeDenom = 0;

var block21 = $("#member_C_fraction_graphic_second").get(0);
block21.id = "member_C_fraction_graphic_second";
block21.position = "personal_area";
block21.empty = "false";
block21.offset = {x:0, y:0}
block21.x =0, block21.y =0;
block21.orientation = "right";
block21.obj = $("#member_C_fraction_graphic_second");
block21.pen = "ctx22";
block21.contain = "";
block21.blockName = "";
block21.index = "";
block21.denom = "";
block21.nume = "";
block21.whole = "";
block21.original_nume ="";
block21.original_denom ="";
block21.max_extend="";
block21.block_pen = "ctx32";
block21.canvas = "canvas32";
block21.src = "";
block21.content = "graphic";
block21.value = "";
block21.trans = false;
block21.tran_panel = $("#C_panel");
block21.tran_panel_id = "C_panel";
block21.showOriFra = "ctx65";	//紀錄初始分數的面板
block21.sym = "ctx13";	//紀錄對應的字符面板
block21.whetherExtend = false;	//判斷圖卡是否有被轉換過
block21.extendValue = 0;
block21.beforeNume = 0;
block21.beforeDenom = 0;

var block22 = $("#member_C_fraction_graphic_third").get(0);
block22.id = "member_C_fraction_graphic_third";
block22.position = "personal_area";
block22.empty = "false";
block22.offset = {x:0, y:0}
block22.x =0, block22.y =0;
block22.orientation = "right";
block22.obj = $("#member_C_fraction_graphic_third");
block22.pen = "ctx23";
block22.contain = "";
block22.blockName = "";
block22.index = "";
block22.denom = "";
block22.nume = "";
block22.whole = "";
block22.original_nume ="";
block22.original_denom ="";
block22.max_extend="";
block22.block_pen = "ctx33";
block22.canvas = "canvas33";
block22.src = "";
block22.content = "graphic";
block22.value = "";
block22.trans = false;
block22.tran_panel = $("#C_panel");
block22.tran_panel_id = "C_panel";
block22.showOriFra = "ctx66";	//紀錄初始分數的面板
block22.sym = "ctx14";	//紀錄對應的字符面板
block22.whetherExtend = false;	//判斷圖卡是否有被轉換過
block22.extendValue = 0;
block22.beforeNume = 0;
block22.beforeDenom = 0;

/*  member A 驗證面板物件*/
var block23= $("#A_panel").get(0);
block23.id = "A_panel";
block23.position = "personal_panel";
block23.offset = {x:0, y:0}
block23.obj = $("#A_panel");
block23.x =0, block23.y =0;
block23.identifier;

var block24 = $("#A_symbol_panel").get(0);
block24.id = "A_symbol_panel";
block24.position = "personal_panel";
block24.offset = {x:0, y:0}
block24.obj = $("#A_panel");
block24.x =0, block24.y =0;
block24.canvas = "canvas37";
block24.pen = "ctx37";

var block25 = $("#A_count").get(0);
block25.id = "A_count";
block25.position = "personal_panel";
block25.obj = $("#A_count");
block25.value;
block25.offset = {x:0, y:0}
block25.ansObj = "A_ans";
block25.x =0, block25.y=0;

var block26 = $("#A_close").get(0);
block26.id = "A_close";
block26.position = "personal_panel";
block26.obj = $("#A_close");

for(var i=27; i<=29; i++){
	eval("var block"+i+"=$('#A_cloze"+(i-26)+"').get("+0+")" );
	eval("block"+i+".id='A_cloze"+(i-26)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#A_cloze"+(i-26)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".canvas='canvas"+(i+7)+"'");
	eval("block"+i+".pen='ctx"+(i+7)+"'");
}

for(var i =30; i<=31; i++){
	eval("var block"+i+"=$('#A_equal"+(i-29)+"').get("+0+")" );
	eval("block"+i+".id='A_equal"+(i-29)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#A_equal"+(i-29)+"')");
	eval("block"+i+".canvas=''");
	eval("block"+i+".pen=''");
}

var block32 = $("#A_add").get(0);
block32.id = "A_add";
block32.position = "personal_panel";
block32.obj = $("#A_add");

var block33 = $("#A_sub").get(0);
block33.id = "A_sub";
block33.position = "personal_panel";
block33.obj = $("#A_sub");

var block34 = $("#A_confirm").get(0);
block34.id = "A_confirm";
block34.position = "personal_panel";
block34.obj = $("#A_confirm");
block34.use = false;

var block35 = $("#A_extend_reduce").get(0);
block35.id = "A_extend_reduce";
block35.position = "personal_panel";
block35.obj = $("#A_extend_reduce");
block35.extend ='×';
/** */


/*  member B 驗證面板物件*/
var block36= $("#B_panel").get(0);
block36.id = "B_panel";
block36.position = "personal_panel";
block36.offset = {x:0, y:0}
block36.obj = $("#B_panel");
block36.x =0, block36.y =0;
block36.identifier;

var block37 = $("#B_symbol_panel").get(0);
block37.id = "B_symbol_panel";
block37.position = "personal_panel";
block37.offset = {x:0, y:0}
block37.obj = $("#B_panel");
block37.x =0, block37.y =0;
block37.canvas = "canvas41";
block37.pen = "ctx41";

var block38 = $("#B_count").get(0);
block38.id = "B_count";
block38.position = "personal_panel";
block38.obj = $("#B_count");
block38.value;
block38.offset = {x:0, y:0}
block38.ansObj = "B_ans";
block38.x=0, block38.y=0;

var block39 = $("#B_close").get(0);
block39.id = "B_close";
block39.position = "personal_panel";
block39.obj = $("#B_close");

for(var i=40; i<=42; i++){
	eval("var block"+i+"=$('#B_cloze"+(i-39)+"').get("+0+")" );
	eval("block"+i+".id='B_cloze"+(i-39)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#B_cloze"+(i-39)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".canvas='canvas"+(i-2)+"'");
	eval("block"+i+".pen='ctx"+(i-2)+"'");
	
}

for(var i =43; i<=44; i++){
	eval("var block"+i+"=$('#A_equal"+(i-42)+"').get("+0+")" );
	eval("block"+i+".id='A_equal"+(i-42)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#A_equal"+(i-42)+"')");
	eval("block"+i+".canvas=''");
	eval("block"+i+".pen=''");
}

var block45 = $("#B_add").get(0);
block45.id = "B_add";
block45.position = "personal_panel";
block45.obj = $("#B_add");

var block46 = $("#B_sub").get(0);
block46.id = "B_sub";
block46.position = "personal_panel";
block46.obj = $("#B_sub");

var block47 = $("#B_confirm").get(0);
block47.id = "B_confirm";
block47.position = "personal_panel";
block47.obj = $("#B_confirm");
block47.use = false;

var block48 = $("#B_extend_reduce").get(0);
block48.id = "B_extend_reduce";
block48.position = "personal_panel";
block48.obj = $("#B_extend_reduce");
block48.extend = '×';
/***/

/*  member C 驗證面板物件*/
var block49= $("#C_panel").get(0);
block49.id = "C_panel";
block49.position = "personal_panel";
block49.offset = {x:0, y:0}
block49.obj = $("#C_panel");
block49.x =0, block49.y =0;
block49.identifier;

var block50 = $("#C_symbol_panel").get(0);
block50.id = "C_symbol_panel";
block50.position = "personal_panel";
block50.offset = {x:0, y:0}
block50.obj = $("#C_panel");
block50.x =0, block50.y =0;
block50.canvas = "canvas45";
block50.pen = "ctx45";

var block51 = $("#C_count").get(0);
block51.id = "C_count";
block51.position = "personal_panel";
block51.obj = $("#C_count");
block51.value;
block51.offset ={x:0, y:0}
block51.ansObj = "C_ans";
block51.x=0, block51.y=0;

var block52 = $("#C_close").get(0);
block52.id = "C_close";
block52.position = "personal_panel";
block52.obj = $("#C_close");

for(var i=53; i<=55; i++){
	eval("var block"+i+"=$('#C_cloze"+(i-52)+"').get("+0+")" );
	eval("block"+i+".id='C_cloze"+(i-52)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#C_cloze"+(i-52)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".canvas='canvas"+(i-11)+"'");
	eval("block"+i+".pen='ctx"+(i-11)+"'");
}

for(var i =56; i<=57; i++){
	eval("var block"+i+"=$('#C_equal"+(i-55)+"').get("+0+")" );
	eval("block"+i+".id='C_equal"+(i-55)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#C_equal"+(i-55)+"')");
	eval("block"+i+".canvas=''");
	eval("block"+i+".pen=''");
}

var block58 = $("#C_add").get(0);
block58.id = "C_add";
block58.position = "personal_panel";
block58.obj = $("#C_add");

var block59 = $("#C_sub").get(0);
block59.id = "C_sub";
block59.position = "personal_panel";
block59.obj = $("#C_sub");

var block60 = $("#C_confirm").get(0);
block60.id = "C_confirm";
block60.position = "personal_panel";
block60.obj = $("#C_confirm");
block60.use = false;

var block61 = $("#C_extend_reduce").get(0);
block61.id = "C_extend_reduce";
block61.position = "personal_panel";
block61.obj = $("#C_extend_reduce");
block61.extend = '×';
/***/

var block62 = $("#A_translate").get(0);
block62.id = "A_translate";
block62.position = "personal_panel";
block62.obj = $("#A_translate");
block62.use = false;

var block63 = $("#B_translate").get(0);
block63.id = "B_translate";
block63.position = "personal_panel";
block63.obj = $("#B_translate");
block63.use = false;

var block64 = $("#C_translate").get(0);
block64.id = "C_translate";
block64.position = "personal_panel";
block64.obj = $("#C_translate");
block64.use = false;

for(var i =65; i<=65; i++){		//中央區域的字符區
	eval("var block"+i+"=$('#central_symbol_"+(i-62)+"').get("+0+")");
	eval("block"+i+".id='central_symbol_"+(i-62)+"'");
	eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+i+".identifier");
	eval("block"+i+".x="+0);
	eval("block"+i+".y="+0);
	eval("block"+i+".obj="+"$('#central_symbol_"+(i-62)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".position='center'");
	eval("block"+i+".name = 'block"+i+"'");
	eval("block"+i+".pen ='ctx"+(i-19)+"'");
	eval("block"+i+".canvas ='canvas"+(i-19)+"'");
	eval("block"+i+".showOriFra='ctx69'");	
	eval("block"+i+".showExtendSym='ctx79'");
	eval("block"+i+".SymExtendObj=$('#central_extendSym3')");
	eval("block"+i+".SymOriFraObj=$('#Central_original_sym3')");
}

for(var i =66; i<=66; i++){		//中央區域的圖像填空區
	eval("var block"+i+"=$('#blank_"+(i-63)+"').get("+0+")");
	eval("block"+i+".id='blank_"+(i-63)+"'");
	eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+i+".identifier");
	eval("block"+i+".x="+0);
	eval("block"+i+".y="+0);
	eval("block"+i+".obj="+"$('#blank_"+(i-63)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".empty='true'");
	eval("block"+i+".value");
	eval("block"+i+".position='center'");
	eval("block"+i+".name = 'block"+i+"'");
	eval("block"+i+".original_nume=''");
	eval("block"+i+".original_denom=''");
	eval("block"+i+".max_extend=''");
	eval("block"+i+".pen ='ctx"+(i-19)+"'");
	eval("block"+i+".canvas ='canvas"+(i-19)+"'");
	eval("block"+i+".blockCanvas=''");
	eval("block"+i+".blockPen=''");
	eval("block"+i+".use=true");
	eval("block"+i+".take=true");
	eval("block"+i+".showOriFra='ctx72'");	
	eval("block"+i+".showExtendGra='ctx76'");
	eval("block"+i+".ExtendObj=$('#central_extendGra3')");
	eval("block"+i+".OriFraObj=$('#Central_original_gra3')");
}

var block67 = $("#fraction1").get(0);
block67.nume = "";
block67.denom = "";
block67.original_nume = "";
block67.original_denom = "";
block67.obj = $("#fraction1");
block67.canvas = "canvas57";
block67.pen = "ctx57";

var block68 = $("#equal_mark1").get(0);
block68.obj = $("#equal_mark1");
block68.id = "equal_mark1";
block68.position = "center";

var block69 = $("#equal_mark2").get(0);
block69.obj = $("#equal_mark2");
block69.id = "equal_mark2";
block69.position = "center";

var block70 = $("#A_next").get(0);
block70.obj = $("#A_next");
block70.id = "A_next";
block70.position = "personal_area";

var block71 = $("#B_next").get(0);
block71.obj = $("#B_next");
block71.id = "B_next";
block71.position = "personal_area";

var block72 = $("#C_next").get(0);
block72.obj = $("#C_next");
block72.id = "C_next";
block72.position = "personal_area";

var block73 = $("#clozeExplainA").get(0);
block73.obj = $("#clozeExplainA");
block73.id = "clozeExplainA";
block73.func = "close";
block73.position = "personal_area";

var block74 = $("#clozeExplainB").get(0);
block74.obj = $("#clozeExplainB");
block74.id = "clozeExplainB";
block74.func = "close";
block74.position = "personal_area";

var block75 = $("#clozeExplainC").get(0);
block75.obj = $("#clozeExplainC");
block75.id = "clozeExplainC";
block75.func = "close";
block75.position = "personal_area";

var block76 = $("#A_unit").get(0);
block76.id = "A_unit";
block76.position = "personal_panel";
block76.obj = $("#A_unit");

var block77 = $("#B_unit").get(0);
block77.id = "B_unit";
block77.position = "personal_panel";
block77.obj = $("#B_unit");

var block78 = $("#C_unit").get(0);
block78.id = "C_unit";
block78.position = "personal_panel";
block78.obj = $("#C_unit");

var block79 = $("#A_ten").get(0);
block79.id = "A_ten";
block79.position = "personal_panel";
block79.obj = $("#A_ten");

var block80 = $("#B_ten").get(0);
block80.id = "B_ten";
block80.position = "personal_panel";
block80.obj = $("#B_ten");

var block81 = $("#C_ten").get(0);
block81.id = "C_ten";
block81.position = "personal_panel";
block81.obj = $("#C_ten");

var block82 = $("#confirm").get(0);
block82.id = "confirm";
block82.position = "center";
block82.obj = $("#confirm");

var block83 = $("#fraction_gra").get(0);
block83.id = "fraction_gra";
block83.position = "center";
block83.obj = $("#fraction_gra");
block83.pen = "ctx73";

var block84 = $("#A_check").get(0);
block84.id = "A_check";
block84.position = "personal_area";
block84.obj = $("#A_check");

var block85 = $("#B_check").get(0);
block85.id = "B_check";
block85.position = "personal_area";
block85.obj = $("#B_check");

var block86 = $("#C_check").get(0);
block86.id = "C_check";
block86.position = "personal_area";
block86.obj = $("#C_check");

var block87 = $("#A_previous").get(0);
block87.id = "A_previous";
block87.position = "personal_panel";
block87.obj = $("#A_previous");
block87.use = false;

var block88 = $("#B_previous").get(0);
block88.id = "B_previous";
block88.position = "personal_panel";
block88.obj = $("#B_previous");
block88.use = false;

var block89 = $("#C_previous").get(0);
block89.id = "C_previous";
block89.position = "personal_panel";
block89.obj = $("#C_previous");
block89.use = false;

var block90 = $("#A_to_center1").get(0);
block90.id = "A_to_center1";
block90.obj = $("#A_to_center1");
block90.group = "A_rubberBandArea";
block90.linkTarget = $("#blank_1");
block90.target = block1;
block90.targetSym = block3;
block90.linkLine = "A_to_center1_link";

var block91 = $("#A_to_center2").get(0);
block91.id = "A_to_center2";
block91.obj = $("#A_to_center2");
block91.group = "A_rubberBandArea";
block91.linkTarget = $("#blank_2");
block91.target = block2;
block91.targetSym = block4;
block91.linkLine = "A_to_center2_link";

var block92 = $("#A_to_center3").get(0);
block92.id = "A_to_center3";
block92.obj = $("#A_to_center3");
block92.group = "A_rubberBandArea";
block92.linkTarget = $("#blank_3");
block92.target = block66;
block92.targetSym = block65;
block92.linkLine = "A_to_center3_link";

var block93 = $("#B_to_center1").get(0);
block93.id = "B_to_center1";
block93.obj = $("#B_to_center1");
block93.group = "B_rubberBandArea";
block93.linkTarget = $("#blank_1");
block93.target = block1;
block93.targetSym = block3;
block93.linkLine = "B_to_center1_link";

var block94 = $("#B_to_center2").get(0);
block94.id = "B_to_center2";
block94.obj = $("#B_to_center2");
block94.group = "B_rubberBandArea";
block94.linkTarget = $("#blank_2");
block94.target = block2;
block94.targetSym = block4;
block94.linkLine = "B_to_center2_link";

var block95 = $("#B_to_center3").get(0);
block95.id = "B_to_center3";
block95.obj = $("#B_to_center3");
block95.group = "B_rubberBandArea";
block95.linkTarget = $("#blank_3");
block95.target = block66;
block95.targetSym = block65;
block95.linkLine = "B_to_center3_link";

var block96 = $("#C_to_center1").get(0);
block96.id = "C_to_center1";
block96.obj = $("#C_to_center1");
block96.group = "C_rubberBandArea";
block96.linkTarget = $("#blank_1");
block96.target = block1;
block96.targetSym = block3;
block96.linkLine = "C_to_center1_link";

var block97 = $("#C_to_center2").get(0);
block97.id = "C_to_center2";
block97.obj = $("#C_to_center2");
block97.group = "C_rubberBandArea";
block97.linkTarget = $("#blank_2");
block97.target = block2;
block97.targetSym = block4;
block97.linkLine = "C_to_center2_link";

var block98 = $("#C_to_center3").get(0);
block98.id = "C_to_center3";
block98.obj = $("#C_to_center3");
block98.group = "C_rubberBandArea";
block98.linkTarget = $("#blank_3");
block98.target = block66;
block98.targetSym = block65;
block98.linkLine = "C_to_center3_link";

var block99 = $("#A_rubberBandArea").get(0);
block99.id = "A_rubberBandArea";
block99.obj = $("#A_rubberBandArea");

var block100 = $("#B_rubberBandArea").get(0);
block100.id = "B_rubberBandArea";
block100.obj = $("#B_rubberBandArea");

var block101 = $("#C_rubberBandArea").get(0);
block101.id = "C_rubberBandArea";
block101.obj = $("#C_rubberBandArea");

var block102= $("#A_take_back1").get(0);
block102.id = "A_take_back1";
block102.position = "center";
block102.obj = $("#A_take_back1");

var block103= $("#A_take_back2").get(0);
block103.id = "A_take_back2";
block103.position = "center";
block103.obj = $("#A_take_back2");

var block104= $("#A_take_back3").get(0);
block104.id = "A_take_back3";
block104.position = "center";
block104.obj = $("#A_take_back3");

var block105= $("#B_take_back1").get(0);
block105.id = "B_take_back1";
block105.position = "center";
block105.obj = $("#B_take_back1");

var block106= $("#B_take_back2").get(0);
block106.id = "B_take_back2";
block106.position = "center";
block106.obj = $("#B_take_back2");

var block107= $("#B_take_back3").get(0);
block107.id = "B_take_back3";
block107.position = "center";
block107.obj = $("#B_take_back3");

var block108= $("#C_take_back1").get(0);
block108.id = "C_take_back1";
block108.position = "center";
block108.obj = $("#C_take_back1");

var block109= $("#C_take_back2").get(0);
block109.id = "C_take_back2";
block109.position = "center";
block109.obj = $("#C_take_back2");

var block110= $("#C_take_back3").get(0);
block110.id = "C_take_back3";
block110.position = "center";
block110.obj = $("#C_take_back3");

for(var i =0; i<110; i++){	//儲存所有物件
	blockArray[i] = eval("block"+(i+1));
}