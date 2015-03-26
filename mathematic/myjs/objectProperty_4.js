/**
 * @author wei
 */
var blockMap = new Object();//用來監控物件狀態
var blockArray = new Array(150);//儲存物件
var draw = new draw();	//建立畫圖物件
var handleObj = new handleObj_4();	//建立處理物件類別
var o = document.body;
var corrcet_amount = 0;
var time = 0;
var complete = false;
var A_next = false, B_next = false, C_next = false;
var A_check = false, B_check = false, C_check = false;
var first_check = false; //判斷是否有確定過配對，同時判斷進行到第幾階段
var acheive = 1;
var a_count =1;
var which_show = {	//判斷哪個個人物件先出現
	first_show: [],
	second_show: [],
	third_show: [],	
}
var timer;	//計時器

var questionList = {		//紀錄中央區域的初始題目(通分前)
	nume: [],
	denom: [],
	original_nume:[],
	original_denom:[],
	value: [],
	path: []
}

var question ={	//紀錄中央區域題目(通分後])
		value: [],	//第一題
		nume:[],
		denom:[],		
		operator: [],
		next: false,
		
		value2:[],	//第二題
		nume2:[],
		denom2:[],		
		first_operator: [],
		second_operator: [],
		path: []
}
var A_translate =false, B_translate = false, C_translate = false;
var member_A = {
	nume: [],
	denom: [],
	original_nume: [],
	original_denom: [],
	max_extend: [],
	extend:[],	//紀錄該分數是乘以多少
	value: [],
	path: []
}

var member_B = {
	nume: [],
	denom: [],
	original_nume: [],
	original_denom: [],
	max_extend: [],
	extend:[],	//紀錄該分數是乘以多少
	value: [],
	path: []
}

var member_C = {
	nume: [],
	denom: [],
	original_nume: [],
	original_denom: [],
	max_extend: [],
	extend:[],	//紀錄該分數是乘以多少
	value: [],
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

var list = [member_A, member_B, member_C];

var answerList = {
	index:["一","二","三","四"],
	completeTime:[],
	x: [650,650,650,650],
	y: [40,90,140,190]
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
rand_number(0, 15, 9, que_index);		//min, max, amount ,array

var temp_fraction = {	//儲存抓出的分數
	nume: [],
	denom: []
}	

for(var i = 0; i<9; i++){
	temp_fraction.nume[i] =proper.nume[ que_index[i] ];
	temp_fraction.denom[i] =proper.denom[ que_index[i] ];
}

var question_fraction = {	//儲存擴分完的分數
	nume: [],
	denom: [],
	original_nume: [],
	original_denom: [],
	max_extend: [],
	extend:[]	//紀錄該分數是乘以多少
}

for(var i=0; i<9; i++){		//對抓取的分數進行擴分	
	switch(temp_fraction.denom[i]){
		case 2:				
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,15,1,extend);			
			question_fraction.nume.push(temp_fraction.nume[i] * extend[0]);
			question_fraction.denom.push(temp_fraction.denom[i] * extend[0]);
			question_fraction.original_nume.push(temp_fraction.nume[i]);
			question_fraction.original_denom.push(temp_fraction.denom[i]);
			question_fraction.extend.push(extend[0]);
			question_fraction.max_extend.push(15);	//紀錄每個最簡分數擴分的最大值						
			break;
		case 3:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,10,1,extend);			
			question_fraction.nume.push(temp_fraction.nume[i] * extend[0]);
			question_fraction.denom.push(temp_fraction.denom[i] * extend[0]);
			question_fraction.original_nume.push(temp_fraction.nume[i]);
			question_fraction.original_denom.push(temp_fraction.denom[i]);
			question_fraction.extend.push(extend[0]);
			question_fraction.max_extend.push(10);				
			break;
		case 4:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,7,1,extend);			
			question_fraction.nume.push(temp_fraction.nume[i] * extend[0]);
			question_fraction.denom.push(temp_fraction.denom[i] * extend[0]);
			question_fraction.original_nume.push(temp_fraction.nume[i]);
			question_fraction.original_denom.push(temp_fraction.denom[i]);
			question_fraction.extend.push(extend[0]);
			question_fraction.max_extend.push(7);		
			break;
		case 5:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,6,3,extend);			
			question_fraction.nume.push(temp_fraction.nume[i] * extend[0]);
			question_fraction.denom.push(temp_fraction.denom[i] * extend[0]);
			question_fraction.original_nume.push(temp_fraction.nume[i]);
			question_fraction.original_denom.push(temp_fraction.denom[i]);
			question_fraction.extend.push(extend[0]);
			question_fraction.max_extend.push(6);				
			break;
		case 6:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,5,1,extend);			
			question_fraction.nume.push(temp_fraction.nume[i] * extend[0]);
			question_fraction.denom.push(temp_fraction.denom[i] * extend[0]);
			question_fraction.original_nume.push(temp_fraction.nume[i]);
			question_fraction.original_denom.push(temp_fraction.denom[i]);
			question_fraction.extend.push(extend[0]);
			question_fraction.max_extend.push(5);		
			break;
		case 7:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,4,1,extend);		
			question_fraction.nume.push(temp_fraction.nume[i] * extend[0]);
			question_fraction.denom.push(temp_fraction.denom[i] * extend[0]);
			question_fraction.original_nume.push(temp_fraction.nume[i]);
			question_fraction.original_denom.push(temp_fraction.denom[i]);
			question_fraction.extend.push(extend[0]);
			question_fraction.max_extend.push(4);		
			break;
		case 8:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,4,1,extend);			
			question_fraction.nume.push(temp_fraction.nume[i] * extend[0]);
			question_fraction.denom.push(temp_fraction.denom[i] * extend[0]);
			question_fraction.original_nume.push(temp_fraction.nume[i]);
			question_fraction.original_denom.push(temp_fraction.denom[i]);
			question_fraction.extend.push(extend[0]);
			question_fraction.max_extend.push(3);		
			break;
		case 9:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,4,1,extend);			
			question_fraction.nume.push(temp_fraction.nume[i] * extend[0]);
			question_fraction.denom.push(temp_fraction.denom[i] * extend[0]);
			question_fraction.original_nume.push(temp_fraction.nume[i]);
			question_fraction.original_denom.push(temp_fraction.denom[i]);
			question_fraction.extend.push(extend[0]);
			question_fraction.max_extend.push(3);			
			break;
		case 10:
			var extend = [];	//儲存擴分的大小數值
			rand_number(1,4,1,extend);			
			question_fraction.nume.push(temp_fraction.nume[i] * extend[0]);
			question_fraction.denom.push(temp_fraction.denom[i] * extend[0]);
			question_fraction.original_nume.push(temp_fraction.nume[i]);
			question_fraction.original_denom.push(temp_fraction.denom[i]);
			question_fraction.extend.push(extend[0]);
			question_fraction.max_extend.push(3);		
			break;
	}	
}

var image_list1 = [new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image];	//儲存Member A, B, C圖卡路徑
for(var i=0; i<9; i++){	//指定圖卡路徑
	image_list1[i].src = "add_sub_pic/proper/"+question_fraction.original_denom[i]+"_"+question_fraction.original_nume[i]+"/"+question_fraction.denom[i]+"_"+question_fraction.nume[i]+".png";
}

for(var i=0; i<3; i++){		//分配分數給Member A, B, C
	switch(i){
		case 0:						
			member_A.nume[i] = question_fraction.nume[0];
			member_A.denom[i] = question_fraction.denom[0];
			member_A.original_nume[i] = question_fraction.original_nume[0];
			member_A.original_denom[i] = question_fraction.original_denom[0];
			member_A.value[i] = question_fraction.original_nume[0] / question_fraction.original_denom[0];
			member_A.max_extend[i] = question_fraction.max_extend[0];
			member_A.extend[i] = question_fraction.extend[0];
			member_A.path[i] = image_list1[0];
			
			member_B.nume[i] = question_fraction.nume[1];
			member_B.denom[i] = question_fraction.denom[1];
			member_B.original_nume[i] = question_fraction.original_nume[1];
			member_B.original_denom[i] = question_fraction.original_denom[1];
			member_B.value[i] = question_fraction.original_nume[1] / question_fraction.original_denom[1];
			member_B.max_extend[i] = question_fraction.max_extend[1];
			member_B.extend[i] = question_fraction.extend[1];
			member_B.path[i] = image_list1[1];
			
			member_C.nume[i] = question_fraction.nume[2];
			member_C.denom[i] = question_fraction.denom[2];
			member_C.original_nume[i] = question_fraction.original_nume[2];
			member_C.original_denom[i] = question_fraction.original_denom[2];
			member_C.value[i] = question_fraction.original_nume[2] / question_fraction.original_denom[2];
			member_C.max_extend[i] = question_fraction.max_extend[2];
			member_C.extend[i] = question_fraction.extend[2];
			member_C.path[i] = image_list1[2];
			break;
		case 1:			
			member_A.nume[i] = question_fraction.nume[3];
			member_A.denom[i] = question_fraction.denom[3];
			member_A.original_nume[i] = question_fraction.original_nume[3];
			member_A.original_denom[i] = question_fraction.original_denom[3];
			member_A.value[i] = question_fraction.original_nume[3] / question_fraction.original_denom[3];
			member_A.max_extend[i] = question_fraction.max_extend[3];
			member_A.extend[i] = question_fraction.extend[3];
			member_A.path[i] = image_list1[3];
			
			member_B.nume[i] = question_fraction.nume[4];
			member_B.denom[i] = question_fraction.denom[4];
			member_B.original_nume[i] = question_fraction.original_nume[4];
			member_B.original_denom[i] = question_fraction.original_denom[4];
			member_B.value[i] = question_fraction.original_nume[4] / question_fraction.original_denom[4];
			member_B.max_extend[i] = question_fraction.max_extend[4];
			member_B.extend[i] = question_fraction.extend[4];
			member_B.path[i] = image_list1[4];
			
			member_C.nume[i] = question_fraction.nume[5];
			member_C.denom[i] = question_fraction.denom[5];
			member_C.original_nume[i] = question_fraction.original_nume[5];
			member_C.original_denom[i] = question_fraction.original_denom[5];
			member_C.value[i] = question_fraction.original_nume[5] / question_fraction.original_denom[5];
			member_C.max_extend[i] = question_fraction.max_extend[5];
			member_C.extend[i] = question_fraction.extend[5];
			member_C.path[i] = image_list1[5];
			break;
		case 2:			
			member_A.nume[i] = question_fraction.nume[6];
			member_A.denom[i] = question_fraction.denom[6];
			member_A.original_nume[i] = question_fraction.original_nume[6];
			member_A.original_denom[i] = question_fraction.original_denom[6];
			member_A.value[i] = question_fraction.original_nume[6] / question_fraction.original_denom[6];
			member_A.max_extend[i] = question_fraction.max_extend[6];
			member_A.extend[i] = question_fraction.extend[6];
			member_A.path[i] = image_list1[6];
			
			member_B.nume[i] = question_fraction.nume[7];
			member_B.denom[i] = question_fraction.denom[7];
			member_B.original_nume[i] = question_fraction.original_nume[7];
			member_B.original_denom[i] = question_fraction.original_denom[7];
			member_B.value[i] = question_fraction.original_nume[7] / question_fraction.original_denom[7];
			member_B.max_extend[i] = question_fraction.max_extend[7];
			member_B.extend[i] = question_fraction.extend[7];
			member_B.path[i] = image_list1[7];
			
			member_C.nume[i] = question_fraction.nume[8];
			member_C.denom[i] = question_fraction.denom[8];
			member_C.original_nume[i] = question_fraction.original_nume[8];
			member_C.original_denom[i] = question_fraction.original_denom[8];
			member_C.value[i] = question_fraction.original_nume[8] / question_fraction.original_denom[8];
			member_C.max_extend[i] = question_fraction.max_extend[8];
			member_C.extend[i] = question_fraction.extend[8];
			member_C.path[i] = image_list1[8];		
			break;
	}	
}

//var another = [member_A, member_B, member_C];	//紀錄A, B, C三個人的面板資料
//var index = Math.floor(Math.random() *3);

for(var i=0; i<9; i++){		//儲存題目
	switch(i){
		case 0:			
			questionList.nume[i] =question_fraction.nume[0]; 
			questionList.denom[i] =question_fraction.denom[0]; 
			questionList.original_nume[i] =question_fraction.original_nume[0];
			questionList.original_denom[i] =question_fraction.original_denom[0];
			questionList.value[i] =question_fraction.nume[0] / question_fraction.denom[0]; 
			break;
		case 1:
			questionList.nume[i] =question_fraction.nume[1]; 
			questionList.denom[i] =question_fraction.denom[1]; 
			questionList.original_nume[i] =question_fraction.original_nume[1];
			questionList.original_denom[i] =question_fraction.original_denom[1];
			questionList.value[i] =question_fraction.nume[1] / question_fraction.denom[1]; 
			break;
		case 2:
			questionList.nume[i] =question_fraction.nume[2]; 
			questionList.denom[i] =question_fraction.denom[2]; 
			questionList.original_nume[i] =question_fraction.original_nume[2];
			questionList.original_denom[i] =question_fraction.original_denom[2];
			questionList.value[i] =question_fraction.nume[2] / question_fraction.denom[2]; 
			break;
		case 3:
			questionList.nume[i] =question_fraction.nume[3]; 
			questionList.denom[i] =question_fraction.denom[3]; 
			questionList.original_nume[i] =question_fraction.original_nume[3];
			questionList.original_denom[i] =question_fraction.original_denom[3];
			questionList.value[i] =question_fraction.nume[4] / question_fraction.denom[3]; 
			break;
		case 4:
			questionList.nume[i] =question_fraction.nume[4]; 
			questionList.denom[i] =question_fraction.denom[4]; 
			questionList.original_nume[i] =question_fraction.original_nume[4];
			questionList.original_denom[i] =question_fraction.original_denom[4];
			questionList.value[i] =question_fraction.nume[4] / question_fraction.denom[4]; 
			break;
		case 5:
			questionList.nume[i] =question_fraction.nume[5]; 
			questionList.denom[i] =question_fraction.denom[5]; 
			questionList.original_nume[i] =question_fraction.original_nume[5];
			questionList.original_denom[i] =question_fraction.original_denom[5];
			questionList.value[i] =question_fraction.nume[5] / question_fraction.denom[5]; 
			break;
		case 6:
			questionList.nume[i] =question_fraction.nume[6]; 
			questionList.denom[i] =question_fraction.denom[6]; 
			questionList.original_nume[i] =question_fraction.original_nume[6];
			questionList.original_denom[i] =question_fraction.original_denom[6];
			questionList.value[i] =question_fraction.nume[6] / question_fraction.denom[6]; 
			break;
		case 7:
			questionList.nume[i] =question_fraction.nume[7]; 
			questionList.denom[i] =question_fraction.denom[7]; 
			questionList.original_nume[i] =question_fraction.original_nume[7];
			questionList.original_denom[i] =question_fraction.original_denom[7];
			questionList.value[i] =question_fraction.nume[7] / question_fraction.denom[7]; 
			break;
		case 8:
			questionList.nume[i] =question_fraction.nume[8]; 
			questionList.denom[i] =question_fraction.denom[8]; 
			questionList.original_nume[i] =question_fraction.original_nume[8];
			questionList.original_denom[i] =question_fraction.original_denom[8];
			questionList.value[i] =question_fraction.nume[8] / question_fraction.denom[8]; 
			break;
	}
}

for(var i =1; i<=3; i++){		//中央區域的圖像填空區
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
	eval("block"+i+".original_nume=''");
	eval("block"+i+".original_denom=''");
	eval("block"+i+".max_extend=''");
	eval("block"+i+".pen ='ctx"+(i+1)+"'");
	eval("block"+i+".canvas ='canvas"+(i+1)+"'");
	eval("block"+i+".blockCanvas=''");
	eval("block"+i+".blockPen=''");
	//eval("block"+i+".occupy='false'");
}

for(var i =1; i<=3; i++){		//中央區域的字符區
	eval("var block"+(i+3)+"=$('#central_symbol_"+i+"').get("+0+")");
	eval("block"+(i+3)+".id='central_symbol_"+i+"'");
	eval("block"+(i+3)+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+(i+3)+".identifier");
	eval("block"+(i+3)+".x="+0);
	eval("block"+(i+3)+".y="+0);
	eval("block"+(i+3)+".obj="+"$('#central_symbol_"+i+"')");
	eval("block"+(i+3)+".denom=''");
	eval("block"+(i+3)+".nume=''");
	eval("block"+(i+3)+".position='center'");
	eval("block"+(i+3)+".name = 'block"+(i+3)+"'");
	//eval("block"+(i+3)+".index ="+i);
	eval("block"+(i+3)+".pen ='ctx"+(i+4)+"'");
	eval("block"+(i+3)+".canvas ='canvas"+(i+4)+"'");
}

var block7 = $("#member_A_fraction_symbol_first").get(0);
block7.id = "member_A_fraction_symbol_first";
block7.position = "personal_area";
block7.empty = "false";
block7.offset = {x:0, y:0}
block7.x =0, block7.y =0;
block7.orientation = "left";
block7.obj = $("#member_A_fraction_symbol_first");
block7.pen = "ctx8";
block7.contain = "";
block7.blockName = "";
block7.index = "";
block7.denom = "";
block7.nume = "";
block7.whole = "";
block7.block_pen = "ctx48";
block7.canvas = "canvas48";
block7.content = "symbol";

var block8 = $("#member_A_fraction_symbol_second").get(0);
block8.id = "member_A_fraction_symbol_second";
block8.position = "personal_area";
block8.empty = "false";
block8.offset = {x:0, y:0}
block8.x =0, block8.y =0;
block8.orientation = "left";
block8.obj = $("#member_A_fraction_symbol_second");
block8.pen = "ctx9";
block8.contain = "";
block8.blockName = "";
block8.index = "";
block8.denom = "";
block8.nume = "";
block8.whole = "";
block8.block_pen = "ctx49";
block8.canvas = "canvas49";
block8.content = "symbol";

var block9 = $("#member_A_fraction_symbol_third").get(0);
block9.id = "member_A_fraction_symbol_third";
block9.position = "personal_area";
block9.empty = "false";
block9.offset = {x:0, y:0}
block9.x =0, block9.y =0;
block9.orientation = "left";
block9.obj = $("#member_A_fraction_symbol_third");
block9.pen = "ctx10";
block9.contain = "";
block9.blockName = "";
block9.index = "";
block9.denom = "";
block9.nume = "";
block9.whole = "";
block9.block_pen = "ctx50";
block9.canvas = "canvas50";
block9.content = "symbol";

var block10 = $("#member_B_fraction_symbol_first").get(0);
block10.id = "member_B_fraction_symbol_first";
block10.position = "personal_area";
block10.empty = "false";
block10.offset = {x:0, y:0}
block10.x =0, block10.y =0;
block10.orientation = "bottom";
block10.obj = $("#member_B_fraction_symbol_first");
block10.pen = "ctx11";
block10.contain = "";
block10.blockName = "";
block10.index = "";
block10.denom = "";
block10.nume = "";
block10.whole = "";
block10.block_pen = "ctx51";
block10.canvas = "canvas51";
block10.content = "symbol";

var block11 = $("#member_B_fraction_symbol_second").get(0);
block11.id = "member_B_fraction_symbol_second";
block11.position = "personal_area";
block11.empty = "false";
block11.offset = {x:0, y:0}
block11.x =0, block11.y =0;
block11.orientation = "bottom";
block11.obj = $("#member_B_fraction_symbol_second");
block11.pen = "ctx12";
block11.contain = "";
block11.blockName = "";
block11.index = "";
block11.denom = "";
block11.nume = "";
block11.whole = "";
block11.block_pen = "ctx52";
block11.canvas = "canvas52";
block11.content = "symbol";

var block12 = $("#member_B_fraction_symbol_third").get(0);
block12.id = "member_B_fraction_symbol_third";
block12.position = "personal_area";
block12.empty = "false";
block12.offset = {x:0, y:0}
block12.x =0, block12.y =0;
block12.orientation = "bottom";
block12.obj = $("#member_B_fraction_symbol_third");
block12.pen = "ctx13";
block12.contain = "";
block12.blockName = "";
block12.index = "";
block12.denom = "";
block12.nume = "";
block12.whole = "";
block12.block_pen = "ctx53";
block12.canvas = "canvas53";
block12.content = "symbol";

var block13 = $("#member_C_fraction_symbol_first").get(0);
block13.id = "member_C_fraction_symbol_first";
block13.position = "personal_area";
block13.empty = "false";
block13.offset = {x:0, y:0}
block13.x =0, block13.y =0;
block13.orientation = "right";
block13.obj = $("#member_C_fraction_symbol_first");
block13.pen = "ctx14";
block13.contain = "";
block13.blockName = "";
block13.index = "";
block13.denom = "";
block13.nume = "";
block13.whole = "";
block13.block_pen = "ctx54";
block13.canvas = "canvas54";
block13.content = "symbol";

var block14 = $("#member_C_fraction_symbol_second").get(0);
block14.id = "member_C_fraction_symbol_second";
block14.position = "personal_area";
block14.empty = "false";
block14.offset = {x:0, y:0}
block14.x =0, block14.y =0;
block14.orientation = "right";
block14.obj = $("#member_C_fraction_symbol_second");
block14.pen = "ctx15";
block14.contain = "";
block14.blockName = "";
block14.index = "";
block14.denom = "";
block14.nume = "";
block14.whole = "";
block14.block_pen = "ctx55";
block14.canvas = "canvas55";
block14.content = "symbol";

var block15 = $("#member_C_fraction_symbol_third").get(0);
block15.id = "member_C_fraction_symbol_third";
block15.position = "personal_area";
block15.empty = "false";
block15.offset = {x:0, y:0}
block15.x =0, block15.y =0;
block15.orientation = "right";
block15.obj = $("#member_C_fraction_symbol_third");
block15.pen = "ctx16";
block15.contain = "";
block15.blockName = "";
block15.index = "";
block15.denom = "";
block15.nume = "";
block15.whole = "";
block15.block_pen = "ctx56";
block15.canvas = "canvas56";
block15.content = "symbol";

var block16 = $("#member_A_fraction_graphic_first").get(0);
block16.id = "member_A_fraction_graphic_first";
block16.position = "personal_area";
block16.empty = "false";
block16.offset = {x:0, y:0}
block16.x =0, block16.y =0;
block16.orientation = "left";
block16.obj = $("#member_A_fraction_graphic_first");
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
block16.sym = "ctx8";	//紀錄對應的字符面板
block16.whetherExtend = false;	//判斷圖卡是否有被轉換過

var block17 = $("#member_A_fraction_graphic_second").get(0);
block17.id = "member_A_fraction_graphic_second";
block17.position = "personal_area";
block17.empty = "false";
block17.offset = {x:0, y:0}
block17.x =0, block17.y =0;
block17.orientation = "left";
block17.obj = $("#member_A_fraction_graphic_second");
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
block17.tran_panel = $("#A_panel");
block17.tran_panel_id = "A_panel";
block17.sym = "ctx9";	//紀錄對應的字符面板
block17.whetherExtend = false;	//判斷圖卡是否有被轉換過

var block18 = $("#member_A_fraction_graphic_third").get(0);
block18.id = "member_A_fraction_graphic_third";
block18.position = "personal_area";
block18.empty = "false";
block18.offset = {x:0, y:0}
block18.x =0, block18.y =0;
block18.orientation = "left";
block18.obj = $("#member_A_fraction_graphic_third");
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
block18.tran_panel = $("#A_panel");
block18.tran_panel_id = "A_panel";
block18.sym = "ctx10";	//紀錄對應的字符面板
block18.whetherExtend = false;	//判斷圖卡是否有被轉換過

var block19 = $("#member_B_fraction_graphic_first").get(0);
block19.id = "member_B_fraction_graphic_first";
block19.position = "personal_area";
block19.empty = "false";
block19.offset = {x:0, y:0}
block19.x =0, block19.y =0;
block19.orientation = "bottom";
block19.obj = $("#member_B_fraction_graphic_first");
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
block19.sym = "ctx11";	//紀錄對應的字符面板
block19.whetherExtend = false;	//判斷圖卡是否有被轉換過

var block20 = $("#member_B_fraction_graphic_second").get(0);
block20.id = "member_B_fraction_graphic_second";
block20.position = "personal_area";
block20.empty = "false";
block20.offset = {x:0, y:0}
block20.x =0, block20.y =0;
block20.orientation = "bottom";
block20.obj = $("#member_B_fraction_graphic_second");
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
block20.tran_panel = $("#B_panel");
block20.tran_panel_id = "B_panel";
block20.sym = "ctx12";	//紀錄對應的字符面板
block20.whetherExtend = false;	//判斷圖卡是否有被轉換過

var block21 = $("#member_B_fraction_graphic_third").get(0);
block21.id = "member_B_fraction_graphic_third";
block21.position = "personal_area";
block21.empty = "false";
block21.offset = {x:0, y:0}
block21.x =0, block21.y =0;
block21.orientation = "bottom";
block21.obj = $("#member_B_fraction_graphic_third");
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
block21.tran_panel = $("#B_panel");
block21.tran_panel_id = "B_panel";
block21.sym = "ctx13";	//紀錄對應的字符面板
block21.whetherExtend = false;	//判斷圖卡是否有被轉換過

var block22 = $("#member_C_fraction_graphic_first").get(0);
block22.id = "member_C_fraction_graphic_first";
block22.position = "personal_area";
block22.empty = "false";
block22.offset = {x:0, y:0}
block22.x =0, block22.y =0;
block22.orientation = "right";
block22.obj = $("#member_C_fraction_graphic_first");
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
block22.sym = "ctx14";	//紀錄對應的字符面板
block22.whetherExtend = false;	//判斷圖卡是否有被轉換過

var block23 = $("#member_C_fraction_graphic_second").get(0);
block23.id = "member_C_fraction_graphic_second";
block23.position = "personal_area";
block23.empty = "false";
block23.offset = {x:0, y:0}
block23.x =0, block23.y =0;
block23.orientation = "right";
block23.obj = $("#member_C_fraction_graphic_second");
block23.pen = "ctx24";
block23.contain = "";
block23.blockName = "";
block23.index = "";
block23.denom = "";
block23.nume = "";
block23.whole = "";
block23.original_nume ="";
block23.original_denom ="";
block23.max_extend="";
block23.block_pen = "ctx34";
block23.canvas = "canvas34";
block23.src = "";
block23.content = "graphic";
block23.value = "";
block23.trans = false;
block23.tran_panel = $("#C_panel");
block23.tran_panel_id = "C_panel";
block23.sym = "ctx15";	//紀錄對應的字符面板
block23.whetherExtend = false;	//判斷圖卡是否有被轉換過

var block24 = $("#member_C_fraction_graphic_third").get(0);
block24.id = "member_C_fraction_graphic_third";
block24.position = "personal_area";
block24.empty = "false";
block24.offset = {x:0, y:0}
block24.x =0, block24.y =0;
block24.orientation = "right";
block24.obj = $("#member_C_fraction_graphic_third");
block24.pen = "ctx25";
block24.contain = "";
block24.blockName = "";
block24.index = "";
block24.denom = "";
block24.nume = "";
block24.whole = "";
block24.original_nume ="";
block24.original_denom ="";
block24.max_extend="";
block24.block_pen = "ctx35";
block24.canvas = "canvas35";
block24.src = "";
block24.content = "graphic";
block24.value = "";
block24.trans = false;
block24.tran_panel = $("#C_panel");
block24.tran_panel_id = "C_panel";
block24.sym = "ctx16";	//紀錄對應的字符面板
block24.whetherExtend = false;	//判斷圖卡是否有被轉換過

/*  member A 驗證面板物件*/
var block25= $("#A_panel").get(0);
block25.id = "A_panel";
block25.position = "personal_panel";
block25.offset = {x:0, y:0}
block25.obj = $("#A_panel");
block25.x =0, block25.y =0;
block25.identifier;

var block26 = $("#A_symbol_panel").get(0);
block26.id = "A_symbol_panel";
block26.position = "personal_panel";
block26.offset = {x:0, y:0}
block26.obj = $("#A_panel");
block26.x =0, block26.y =0;
block26.canvas = "canvas39";
block26.pen = "ctx39";

var block27 = $("#A_count").get(0);
block27.id = "A_count";
block27.position = "personal_panel";
block27.obj = $("#A_count");
block27.value;
block27.offset = {x:0, y:0}
block27.ansObj = "A_ans";
block27.x =0, block27.y=0;

var block28 = $("#A_close").get(0);
block28.id = "A_close";
block28.position = "personal_panel";
block28.obj = $("#A_close");

for(var i=29; i<=31; i++){
	eval("var block"+i+"=$('#A_cloze"+(i-28)+"').get("+0+")" );
	eval("block"+i+".id='A_cloze"+(i-28)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#A_cloze"+(i-28)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".canvas='canvas"+(i+7)+"'");
	eval("block"+i+".pen='ctx"+(i+7)+"'");
}

for(var i =32; i<=33; i++){
	eval("var block"+i+"=$('#A_equal"+(i-31)+"').get("+0+")" );
	eval("block"+i+".id='A_equal"+(i-31)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#A_equal"+(i-31)+"')");
	eval("block"+i+".canvas=''");
	eval("block"+i+".pen=''");
}

var block34 = $("#A_add").get(0);
block34.id = "A_add";
block34.position = "personal_panel";
block34.obj = $("#A_add");

var block35 = $("#A_sub").get(0);
block35.id = "A_sub";
block35.position = "personal_panel";
block35.obj = $("#A_sub");

var block36 = $("#A_confirm").get(0);
block36.id = "A_confirm";
block36.position = "personal_panel";
block36.obj = $("#A_confirm");
block36.use = false;

var block37 = $("#A_extend_reduce").get(0);
block37.id = "A_extend_reduce";
block37.position = "personal_panel";
block37.obj = $("#A_extend_reduce");
block37.extend ="×";
/** */

/*  member B 驗證面板物件*/
var block38= $("#B_panel").get(0);
block38.id = "B_panel";
block38.position = "personal_panel";
block38.offset = {x:0, y:0}
block38.obj = $("#B_panel");
block38.x =0, block38.y =0;
block38.identifier;

var block39 = $("#B_symbol_panel").get(0);
block39.id = "B_symbol_panel";
block39.position = "personal_panel";
block39.offset = {x:0, y:0}
block39.obj = $("#B_panel");
block39.x =0, block39.y =0;
block39.canvas = "canvas43";
block39.pen = "ctx43";

var block40 = $("#B_count").get(0);
block40.id = "B_count";
block40.position = "personal_panel";
block40.obj = $("#B_count");
block40.value;
block40.offset = {x:0, y:0}
block40.ansObj = "B_ans";
block40.x=0, block40.y=0;

var block41 = $("#B_close").get(0);
block41.id = "B_close";
block41.position = "personal_panel";
block41.obj = $("#B_close");

for(var i=42; i<=44; i++){
	eval("var block"+i+"=$('#B_cloze"+(i-41)+"').get("+0+")" );
	eval("block"+i+".id='B_cloze"+(i-41)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#B_cloze"+(i-41)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".canvas='canvas"+(i-2)+"'");
	eval("block"+i+".pen='ctx"+(i-2)+"'");
	
}

for(var i =45; i<=46; i++){
	eval("var block"+i+"=$('#A_equal"+(i-44)+"').get("+0+")" );
	eval("block"+i+".id='A_equal"+(i-44)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#A_equal"+(i-44)+"')");
	eval("block"+i+".canvas=''");
	eval("block"+i+".pen=''");
}

var block47 = $("#B_add").get(0);
block47.id = "B_add";
block47.position = "personal_panel";
block47.obj = $("#B_add");

var block48 = $("#B_sub").get(0);
block48.id = "B_sub";
block48.position = "personal_panel";
block48.obj = $("#B_sub");

var block49 = $("#B_confirm").get(0);
block49.id = "B_confirm";
block49.position = "personal_panel";
block49.obj = $("#B_confirm");
block49.use = false;

var block50 = $("#B_extend_reduce").get(0);
block50.id = "B_extend_reduce";
block50.position = "personal_panel";
block50.obj = $("#B_extend_reduce");
block50.extend = "×";
/***/

/*  member C 驗證面板物件*/
var block51= $("#C_panel").get(0);
block51.id = "C_panel";
block51.position = "personal_panel";
block51.offset = {x:0, y:0}
block51.obj = $("#C_panel");
block51.x =0, block51.y =0;
block51.identifier;

var block52 = $("#C_symbol_panel").get(0);
block52.id = "C_symbol_panel";
block52.position = "personal_panel";
block52.offset = {x:0, y:0}
block52.obj = $("#C_panel");
block52.x =0, block52.y =0;
block52.canvas = "canvas47";
block52.pen = "ctx47";

var block53 = $("#C_count").get(0);
block53.id = "C_count";
block53.position = "personal_panel";
block53.obj = $("#C_count");
block53.value;
block53.offset ={x:0, y:0}
block53.ansObj = "C_ans";
block53.x=0, block53.y=0;

var block54 = $("#C_close").get(0);
block54.id = "C_close";
block54.position = "personal_panel";
block54.obj = $("#C_close");

for(var i=55; i<=57; i++){
	eval("var block"+i+"=$('#C_cloze"+(i-54)+"').get("+0+")" );
	eval("block"+i+".id='C_cloze"+(i-54)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#C_cloze"+(i-54)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".canvas='canvas"+(i-11)+"'");
	eval("block"+i+".pen='ctx"+(i-11)+"'");
}

for(var i =58; i<=59; i++){
	eval("var block"+i+"=$('#C_equal"+(i-57)+"').get("+0+")" );
	eval("block"+i+".id='C_equal"+(i-57)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#C_equal"+(i-57)+"')");
	eval("block"+i+".canvas=''");
	eval("block"+i+".pen=''");
}

var block60 = $("#C_add").get(0);
block60.id = "C_add";
block60.position = "personal_panel";
block60.obj = $("#C_add");

var block61 = $("#C_sub").get(0);
block61.id = "C_sub";
block61.position = "personal_panel";
block61.obj = $("#C_sub");

var block62 = $("#C_confirm").get(0);
block62.id = "C_confirm";
block62.position = "personal_panel";
block62.obj = $("#C_confirm");
block62.use = false;

var block63 = $("#C_extend_reduce").get(0);
block63.id = "C_extend_reduce";
block63.position = "personal_panel";
block63.obj = $("#C_extend_reduce");
block63.extend = "×";
/***/

var block64 = $("#A_translate").get(0);
block64.id = "A_translate";
block64.position = "personal_panel";
block64.obj = $("#A_translate");

var block65 = $("#B_translate").get(0);
block65.id = "B_translate";
block65.position = "personal_panel";
block65.obj = $("#B_translate");

var block66 = $("#C_translate").get(0);
block66.id = "C_translate";
block66.position = "personal_panel";
block66.obj = $("#C_translate");

var block67 = $("#confirm").get(0);	//此物件不使用
block67.id = "confirm";
block67.position = "center";
block67.obj = $("#confirm");

var block68 = $("#blank1_rotate").get(0);
block68.id = "blank1_rotate";
block68.position = "center";
block68.obj = $("#blank1_rotate");

var block69 = $("#blank2_rotate").get(0);
block69.id = "blank2_rotate";
block69.position = "center";
block69.obj = $("#blank2_rotate");

var block70 = $("#transMix").get(0);
block70.id = "transMix";
block70.position = "center";
block70.tranFraction = "mixed";
block70.obj = $("#transMix");

var block71 = $("#operator_mark1").get(0);
block71.id = "operator_mark1";
block71.obj = $("#operator_mark1");

var block72 = $("#operator_mark2").get(0);
block72.id = "operator_mark2";
block72.obj = $("#operator_mark2");

var block73 = $("#A_unit").get(0);
block73.id = "A_unit";
block73.position = "personal_panel";
block73.obj = $("#A_unit");

var block74 = $("#B_unit").get(0);
block74.id = "B_unit";
block74.position = "personal_panel";
block74.obj = $("#B_unit");

var block75 = $("#C_unit").get(0);
block75.id = "C_unit";
block75.position = "personal_panel";
block75.obj = $("#C_unit");

var block76 = $("#A_ten").get(0);
block76.id = "A_ten";
block76.position = "personal_panel";
block76.obj = $("#A_ten");

var block77 = $("#B_ten").get(0);
block77.id = "B_ten";
block77.position = "personal_panel";
block77.obj = $("#B_ten");

var block78 = $("#C_ten").get(0);
block78.id = "C_ten";
block78.position = "personal_panel";
block78.obj = $("#C_ten");

var block79 = $("#A_check").get(0);
block79.id = "A_check";
block79.obj = $("#A_check");
block79.position = "personal_area";

var block80 = $("#B_check").get(0);
block80.id = "B_check";
block80.obj = $("#B_check");
block80.position = "personal_area";

var block81 = $("#C_check").get(0);
block81.id = "C_check";
block81.obj = $("#C_check");
block81.position = "personal_area";

var block82 = $("#A_next").get(0);
block82.id = "A_next";
block82.obj = $("#A_next");
block82.position = "personal_area";

var block83 = $("#B_next").get(0);
block83.id = "B_next";
block83.obj = $("#B_next");
block83.position = "personal_area";

var block84 = $("#C_next").get(0);
block84.id = "C_next";
block84.obj = $("#C_next");
block84.position = "personal_area";

var block85 = $("#A_previous").get(0);
block85.id = "A_previous";
block85.obj = $("#A_previous");
block85.position = "personal_panel";
block85.use = false;

var block86 = $("#B_previous").get(0);
block86.id = "B_previous";
block86.obj = $("#B_previous");
block86.position = "personal_panel";
block86.use = false;

var block87 = $("#C_previous").get(0);
block87.id = "C_previous";
block87.obj = $("#C_previous");
block87.position = "personal_panel";
block87.use = false;

var block88 = $("#direct").get(0);
block88.id = "direct";
block88.obj = $("#direct");
block88.position = "center";

var block89 = $("#process").get(0);
block89.id = "process";
block89.obj = $("#process");
block89.position = "center";

var block90 = $("#result").get(0);
block90.id = "result";
block90.obj = $("#result");
block90.position = "center";

for(var i =91; i<=94; i++){		//中央區域的圖像填空區
	eval("var block"+i+"=$('#blank_"+(i-87)+"').get("+0+")");
	eval("block"+i+".id='blank_"+(i-87)+"'");
	eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+i+".identifier");
	eval("block"+i+".x="+0);
	eval("block"+i+".y="+0);
	eval("block"+i+".obj="+"$('#blank_"+(i-87)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".empty='true'");
	eval("block"+i+".value");
	eval("block"+i+".position='center'");
	eval("block"+i+".name = 'block"+i+"'");
	//eval("block"+i+".index ="+i);
	eval("block"+i+".original_nume=''");
	eval("block"+i+".original_denom=''");
	eval("block"+i+".max_extend=''");
	eval("block"+i+".pen ='ctx"+(i-29)+"'");
	eval("block"+i+".canvas ='canvas"+(i-29)+"'");
	eval("block"+i+".blockCanvas=''");
	eval("block"+i+".blockPen=''");
	//eval("block"+i+".occupy='false'");
}

for(var i =95; i<=98; i++){		//中央區域的字符區
	eval("var block"+i+"=$('#central_symbol_"+(i-91)+"').get("+0+")");
	eval("block"+i+".id='central_symbol_"+(i-91)+"'");
	eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+i+".identifier");
	eval("block"+i+".x="+0);
	eval("block"+i+".y="+0);
	eval("block"+i+".obj="+"$('#central_symbol_"+(i-91)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".position='center'");
	eval("block"+i+".name = 'block"+i+"'");
	//eval("block"+(i+3)+".index ="+i);
	eval("block"+i+".pen ='ctx"+(i-37)+"'");
	eval("block"+i+".canvas ='canvas"+(i-37)+"'");
}

var block99 = $("#operator_mark3").get(0);
block99.id = "operator_mark3";
block99.obj = $("#operator_mark3");

var block100 = $("#operator_mark4").get(0);
block100.id = "operator_mark4";
block100.obj = $("#operator_mark4");

var block101 = $("#operator_mark5").get(0);
block101.id = "operator_mark5";
block101.obj = $("#operator_mark5");

var block102 = $("#A_to_center1").get(0);
block102.id = "A_to_center1";
block102.obj = $("#A_to_center1");
block102.group = "A_rubberBandArea";
block102.linkTarget = $("#blank_1");
block102.target = block1;
block102.targetSym = block4;
block102.linkLine = "A_to_center1_link";

var block103 = $("#A_to_center2").get(0);
block103.id = "A_to_center2";
block103.obj = $("#A_to_center2");
block103.group = "A_rubberBandArea";
block103.linkTarget = $("#blank_2");
block103.target = block2;
block103.targetSym = block5;
block103.linkLine = "A_to_center2_link";

var block104 = $("#A_to_center3").get(0);
block104.id = "A_to_center3";
block104.obj = $("#A_to_center3");
block104.group = "A_rubberBandArea";
block104.linkTarget = $("#blank_6");
block104.target = block93;
block104.targetSym = block97;
block104.linkLine = "A_to_center3_link";

var block105 = $("#B_to_center1").get(0);
block105.id = "B_to_center1";
block105.obj = $("#B_to_center1");
block105.group = "B_rubberBandArea";
block105.linkTarget = $("#blank_1");
block105.target = block1;
block105.targetSym = block4;
block105.linkLine = "B_to_center1_link";

var block106 = $("#B_to_center2").get(0);
block106.id = "B_to_center2";
block106.obj = $("#B_to_center2");
block106.group = "B_rubberBandArea";
block106.linkTarget = $("#blank_2");
block106.target = block2;
block106.targetSym = block5;
block106.linkLine = "B_to_center2_link";

var block107 = $("#B_to_center3").get(0);
block107.id = "B_to_center3";
block107.obj = $("#B_to_center3");
block107.group = "B_rubberBandArea";
block107.linkTarget = $("#blank_6");
block107.target = block93;
block107.targetSym = block97;
block107.linkLine = "B_to_center3_link";

var block108 = $("#C_to_center1").get(0);
block108.id = "C_to_center1";
block108.obj = $("#C_to_center1");
block108.group = "C_rubberBandArea";
block108.linkTarget = $("#blank_1");
block108.target = block1;
block108.targetSym = block4;
block108.linkLine = "C_to_center1_link";

var block109 = $("#C_to_center2").get(0);
block109.id = "C_to_center2";
block109.obj = $("#C_to_center2");
block109.group = "C_rubberBandArea";
block109.linkTarget = $("#blank_2");
block109.target = block2;
block109.targetSym = block5;
block109.linkLine = "C_to_center2_link";

var block110 = $("#C_to_center3").get(0);
block110.id = "C_to_center3";
block110.obj = $("#C_to_center3");
block110.group = "C_rubberBandArea";
block110.linkTarget = $("#blank_6");
block110.target = block93;
block110.targetSym = block97;
block110.linkLine = "C_to_center3_link";

var block111 = $("#A_rubberBandArea").get(0);
block111.id = "A_rubberBandArea";
block111.obj = $("#A_rubberBandArea");

var block112 = $("#B_rubberBandArea").get(0);
block112.id = "B_rubberBandArea";
block112.obj = $("#B_rubberBandArea");

var block113 = $("#C_rubberBandArea").get(0);
block113.id = "C_rubberBandArea";
block113.obj = $("#C_rubberBandArea");

var block114= $("#A_take_back1").get(0);
block114.id = "A_take_back1";
block114.position = "center";
block114.obj = $("#A_take_back1");

var block115= $("#A_take_back2").get(0);
block115.id = "A_take_back2";
block115.position = "center";
block115.obj = $("#A_take_back2");

var block116= $("#A_take_back3").get(0);
block116.id = "A_take_back3";
block116.position = "center";
block116.obj = $("#A_take_back3");

var block117= $("#B_take_back1").get(0);
block117.id = "B_take_back1";
block117.position = "center";
block117.obj = $("#B_take_back1");

var block118= $("#B_take_back2").get(0);
block118.id = "B_take_back2";
block118.position = "center";
block118.obj = $("#B_take_back2");

var block119= $("#B_take_back3").get(0);
block119.id = "B_take_back3";
block119.position = "center";
block119.obj = $("#B_take_back3");

var block120= $("#C_take_back1").get(0);
block120.id = "C_take_back1";
block120.position = "center";
block120.obj = $("#C_take_back1");

var block121= $("#C_take_back2").get(0);
block121.id = "C_take_back2";
block121.position = "center";
block121.obj = $("#C_take_back2");

var block122= $("#C_take_back3").get(0);
block122.id = "C_take_back3";
block122.position = "center";
block122.obj = $("#C_take_back3");

for(var i=16; i<=24; i++){	//儲存每個圖卡的往後要求屬性
	eval("block"+i+".back=block"+(i+98));
}

for(var i =0; i<122; i++){	//儲存所有物件
	blockArray[i] = eval("block"+(i+1));
}
