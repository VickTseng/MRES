/**
 * @author wei
 */
var blockMap = new Object();//用來監控物件狀態
var blockArray = new Array(140);//儲存物件
var draw = new draw();	//建立畫圖物件
var handleObj = new handleObj_2();	//建立處理物件類別
var o = document.body;
var A_next = false, B_next = false, C_next = false;
var A_check = false, B_check = false, C_check = false;
var answer;	//判斷最後答案
var first_check = false; //判斷是否有配對過
var incresing=[];	//升冪
var decresing=[];	 //降冪
var incre_path=[];	//儲存升冪圖像路徑
var decre_path=[];	//儲存降冪圖像路徑
var ori_path=[];////儲存排序前圖像路徑
var order ="";	//儲存排序狀態(第二題)
var order1 = "";	//儲存排序狀態(第一題)
var complete = false;
var corrd_sum = 0;	//目前的配對總數
var ques_index = 1;	//判斷做到第幾題
var original_question = []; //排序前的題目
var A_translate =false, B_translate = false, C_translate = false;
var cloze_question = {//記錄第二題哪個空格要填值
	graphic:"",
	symbol:"",
	nume:"",
	denom:"",
	order:"",
	gra_path:"",
	gra_block:"",
	sym_block:""
}
var member_operate = {	//紀錄每個人丟幾張圖卡、是否有丟圖卡
	A_first_thow:false,	//判斷第一題是否有丟圖卡
	B_first_thow:false,
	C_first_thow:false,
	
	A_second_thow:false,		//判斷第二題是否有丟圖卡
	B_second_thow:false,
	C_second_thow:false,
	
	A_first_operate:0,
	B_first_operate:0,
	C_first_operate:0,
	
	A_second_operate:0,
	B_second_operate:0,
	C_second_operate:0,
}

var incre_symbol = {
	nume: [],
	denom: []
}
var decre_symbol = {
	nume: [],
	denom: []
}
var ori_symbol = {
	nume: [],
	denom: []
}
var order_type = ["incresing","decresing"];	//判斷大→小或小→大
var show_style = ["cloze","blank"];	//出題模式的切換
var Central_question = {//儲存中央區域問題
	nume: [],
	denom: [],
	imgPath: [],
	value: []
};	

var member = {	//紀錄圖卡資料
	A_Gra: [],	
	B_Gra: [],
	C_Gra: [],
	A_Sym: {
		nume: [],
		denom: [],
		original_nume: [],
		original_denom: [],
	},
	B_Sym: {
		nume: [],
		denom: [],
		original_nume: [],
		original_denom: [],
	},	
	C_Sym: {
		nume: [],
		denom: [],
		original_nume: [],
		original_denom: [],
	}
}

var member_Sym = {
	A_Sym: {
		nume: [],
		denom: []
	},
	B_Sym: {
		nume: [],
		denom: []
	},	
	C_Sym: {
		nume: [],
		denom: []
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

var temp_index = [];	//索引暫存區
var question_temp = [];

var total =[];	//亂數選題
for(var i=0; i<45;i++){
	total.push(i);
}
for(var i=0; i<45;i++){
	var temp = total[i];
	var index = Math.ceil(Math.random() *44);
	total[i] = total[index];
	total[index] = temp;
}

var que_index =[];	//儲存抓取的分數題號
for(var i=0;i<10;i++){
	que_index[i] = total[i];	//降冪用
	temp_index[i] = total[i];		//升冪用
}
//console.log(que_index);

var question = [];	//題目
for(var i=0; i<10; i++){
	var index = que_index[i];
	question[i] = proper.nume[index] /  proper.denom[index];
	question_temp[i] = proper.nume[index] /  proper.denom[index];
	incre_path[i] = proper.path[index];
	decre_path[i] = proper.path[index];
	ori_path[i] = proper.path[index];
	incre_symbol.denom[i] = proper.denom[index], incre_symbol.nume[i] = proper.nume[index];
	decre_symbol.denom[i] = proper.denom[index], decre_symbol.nume[i] = proper.nume[index];	
	ori_symbol.denom[i] = proper.denom[index], ori_symbol.nume[i] = proper.nume[index];
}

for(var i=0; i<10; i++){	//儲存排序前的題目
	original_question[i] = question[i];
}

for(var i=0;i<10;i++){		//排序(降冪)
	var temp, temp2, temp3, temp4;
	for(var j=0;j<10;j++){
		if(question[j]<question[j+1]){
			temp = question[j];
			question[j] = question[j+1];
			question[j+1] = temp;
			
			temp2 = decre_path[j];
			decre_path[j] = decre_path[j+1];
			decre_path[j+1] = temp2;
			
			temp3 = decre_symbol.denom[j];
			decre_symbol.denom[j] = decre_symbol.denom[j+1];
			decre_symbol.denom[j+1] = temp3;
			
			temp4 = decre_symbol.nume[j];
			decre_symbol.nume[j] = decre_symbol.nume[j+1];
			decre_symbol.nume[j+1] = temp4;
		}
	}
}
//console.log(question);

for(var i = 0; i<10; i++){
	decresing[i] = question[i];
}

for(var i=0;i<10;i++){		//排序(升冪)
	var temp, temp2, temp3, temp4;
	for(var j=0;j<10;j++){
		if(question_temp[j]>question_temp[j+1]){
			temp = question_temp[j];
			question_temp[j] = question_temp[j+1];
			question_temp[j+1] = temp;
			
			temp2 = incre_path[j];
			incre_path[j] = incre_path[j+1];
			incre_path[j+1] = temp2;
			
			temp3 = incre_symbol.denom[j];
			 incre_symbol.denom[j] = incre_symbol.denom[j+1];
			 incre_symbol.denom[j+1] = temp3;
			 
			 temp4 = incre_symbol.nume[j];
			 incre_symbol.nume[j] = incre_symbol.nume[j+1];
			 incre_symbol.nume[j+1] = temp4;
		}
	}
}

for(var i = 0; i<10; i++){
	incresing[i] = question_temp[i];
}


var image = {	
	original: [new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image],
	incresing:[new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image],	
	decresing:[new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image, new Image]
}

for(var i=0; i<image.incresing.length; i++){
	image.incresing[i].src = "compare_pic/proper/"+incre_path[i]+".png";
}

for(var i=0; i<image.decresing.length; i++){
	image.decresing[i].src = "compare_pic/proper/"+decre_path[i]+".png";
}

for(i=0; i<image.original.length; i++){
	image.original[i].src = "compare_pic/proper/"+ori_path[i]+".png";
}

for(var i =1; i<=4; i++){		//中央區域的圖像填空區
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
	eval("block"+i+".index ="+i);
	eval("block"+i+".pen ='ctx"+(i+1)+"'");
	eval("block"+i+".canvas ='canvas"+(i+1)+"'");
	eval("block"+i+".blockCanvas=''");
	eval("block"+i+".blockPen=''");
	eval("block"+i+".blockPen=''");
	eval("block"+i+".occupy='false'");
	eval("block"+i+".corresponding");
}

for(var i =1; i<=4; i++){		//中央區域的字符區
	eval("var block"+(i+4)+"=$('#central_symbol_"+i+"').get("+0+")");
	eval("block"+(i+4)+".id='central_symbol_"+i+"'");
	eval("block"+(i+4)+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+(i+4)+".identifier");
	eval("block"+(i+4)+".x="+0);
	eval("block"+(i+4)+".y="+0);
	eval("block"+(i+4)+".obj="+"$('#central_symbol_"+i+"')");
	eval("block"+(i+4)+".denom=''");
	eval("block"+(i+4)+".nume=''");
	eval("block"+(i+4)+".empty='true'");
	eval("block"+(i+4)+".position='center'");
	eval("block"+(i+4)+".name = 'block"+(i+4)+"'");
	//eval("block"+(i+4)+".index ="+i);
	eval("block"+(i+4)+".pen ='ctx"+(i+26)+"'");
	eval("block"+(i+4)+".canvas ='canvas"+(i+26)+"'");
	eval("block"+(i+4)+".blockCanvas");
	eval("block"+(i+4)+".blockPen=''");
	eval("block"+(i+4)+".occupy='false'");
	eval("block"+(i+4)+".corresponding");
}

for(var i =1; i<=3; i++){		//中央區域的排序區域
	eval("var block"+(i+8)+"=$('#order_"+i+"').get("+0+")");
	eval("block"+(i+8)+".id='order_"+i+"'");
	eval("block"+(i+8)+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+(i+8)+".identifier");
	eval("block"+(i+8)+".x="+0);
	eval("block"+(i+8)+".y="+0);
	eval("block"+(i+8)+".obj="+"$('#order_"+i+"')");
	eval("block"+(i+8)+".denom=''");
	eval("block"+(i+8)+".nume=''");
	eval("block"+(i+8)+".position='center'");
	eval("block"+(i+8)+".name = 'block"+(i+8)+"'");
	eval("block"+(i+8)+".index ="+i);
	eval("block"+(i+8)+".pen ='ctx"+(i+5)+"'");
	eval("block"+(i+8)+".canvas ='canvas"+(i+5)+"'");
}

var block12 = $("#member_A_fraction_symbol_first").get(0);
block12.id = "member_A_fraction_symbol_first";
block12.position = "personal_area";
block12.empty = "false";
block12.offset = {x:0, y:0}
block12.x =0, block12.y =0;
block12.orientation = "left";
block12.obj = $("#member_A_fraction_symbol_first");
block12.pen = "ctx9";
block12.contain = "";
block12.blockName = "";
block12.index = "";
block12.denom = "";
block12.nume = "";
block12.whole = "";
block12.block_pen = "ctx40";
block12.canvas = "canvas40";
block12.content = "symbol";
block12.corresponding="";

var block13 = $("#member_A_fraction_symbol_second").get(0);
block13.id = "member_A_fraction_symbol_second";
block13.position = "personal_area";
block13.empty = "false";
block13.offset = {x:0, y:0}
block13.x =0, block13.y =0;
block13.orientation = "left";
block13.obj = $("#member_A_fraction_symbol_second");
block13.pen = "ctx10";
block13.contain = "";
block13.blockName = "";
block13.index = "";
block13.denom = "";
block13.nume = "";
block13.whole = "";
block13.block_pen = "ctx41";
block13.canvas = "canvas41";
block13.content = "symbol";
block13.corresponding="";

var block14 = $("#member_A_fraction_symbol_third").get(0);
block14.id = "member_A_fraction_symbol_third";
block14.position = "personal_area";
block14.empty = "false";
block14.offset = {x:0, y:0}
block14.x =0, block14.y =0;
block14.orientation = "left";
block14.obj = $("#member_A_fraction_symbol_third");
block14.pen = "ctx11";
block14.contain = "";
block14.blockName = "";
block14.index = "";
block14.denom = "";
block14.nume = "";
block14.whole = "";
block14.block_pen = "ctx42";
block14.canvas = "canvas42";
block14.content = "symbol";
block14.corresponding="";

var block15 = $("#member_B_fraction_symbol_first").get(0);
block15.id = "member_B_fraction_symbol_first";
block15.position = "personal_area";
block15.empty = "false";
block15.offset = {x:0, y:0}
block15.x =0, block15.y =0;
block15.orientation = "bottom";
block15.obj = $("#member_B_fraction_symbol_first");
block15.pen = "ctx12";
block15.contain = "";
block15.blockName = "";
block15.index = "";
block15.denom = "";
block15.nume = "";
block15.whole = "";
block15.block_pen = "ctx43";
block15.canvas = "canvas43";
block15.content = "symbol";
block15.corresponding="";

var block16 = $("#member_B_fraction_symbol_second").get(0);
block16.id = "member_B_fraction_symbol_second";
block16.position = "personal_area";
block16.empty = "false";
block16.offset = {x:0, y:0}
block16.x =0, block16.y =0;
block16.orientation = "bottom";
block16.obj = $("#member_B_fraction_symbol_second");
block16.pen = "ctx13";
block16.contain = "";
block16.blockName = "";
block16.index = "";
block16.denom = "";
block16.nume = "";
block16.whole = "";
block16.block_pen = "ctx44";
block16.canvas = "canvas44";
block16.content = "symbol";
block16.corresponding="";

var block17 = $("#member_B_fraction_symbol_third").get(0);
block17.id = "member_B_fraction_symbol_third";
block17.position = "personal_area";
block17.empty = "false";
block17.offset = {x:0, y:0}
block17.x =0, block17.y =0;
block17.orientation = "bottom";
block17.obj = $("#member_B_fraction_symbol_third");
block17.pen = "ctx14";
block17.contain = "";
block17.blockName = "";
block17.index = "";
block17.denom = "";
block17.nume = "";
block17.whole = "";
block17.block_pen = "ctx45";
block17.canvas = "canvas45";
block17.content = "symbol";
block17.corresponding="";

var block18 = $("#member_C_fraction_symbol_first").get(0);
block18.id = "member_C_fraction_symbol_first";
block18.position = "personal_area";
block18.empty = "false";
block18.offset = {x:0, y:0}
block18.x =0, block18.y =0;
block18.orientation = "right";
block18.obj = $("#member_C_fraction_symbol_first");
block18.pen = "ctx15";
block18.contain = "";
block18.blockName = "";
block18.index = "";
block18.denom = "";
block18.nume = "";
block18.whole = "";
block18.block_pen = "ctx46";
block18.canvas = "canvas46";
block18.content = "symbol";
block18.corresponding="";

var block19 = $("#member_C_fraction_symbol_second").get(0);
block19.id = "member_C_fraction_symbol_second";
block19.position = "personal_area";
block19.empty = "false";
block19.offset = {x:0, y:0}
block19.x =0, block19.y =0;
block19.orientation = "right";
block19.obj = $("#member_C_fraction_symbol_second");
block19.pen = "ctx16";
block19.contain = "";
block19.blockName = "";
block19.index = "";
block19.denom = "";
block19.nume = "";
block19.whole = "";
block19.block_pen = "ctx47";
block19.canvas = "canvas47";
block19.content = "symbol";
block19.corresponding="";

var block20 = $("#member_C_fraction_symbol_third").get(0);
block20.id = "member_C_fraction_symbol_third";
block20.position = "personal_area";
block20.empty = "false";
block20.offset = {x:0, y:0}
block20.x =0, block20.y =0;
block20.orientation = "right";
block20.obj = $("#member_C_fraction_symbol_third");
block20.pen = "ctx17";
block20.contain = "";
block20.blockName = "";
block20.index = "";
block20.denom = "";
block20.nume = "";
block20.whole = "";
block20.block_pen = "ctx48";
block20.canvas = "canvas48";
block20.content = "symbol";
block20.corresponding="";

var block21 = $("#member_A_fraction_graphic_first").get(0);
block21.id = "member_A_fraction_graphic_first";
block21.position = "personal_area";
block21.empty = "false";
block21.offset = {x:0, y:0}
block21.x =0, block21.y =0;
block21.orientation = "left";
block21.obj = $("#member_A_fraction_graphic_first");
block21.pen = "ctx18";
block21.contain = "";
block21.blockName = "";
block21.index = "";
block21.denom = "";
block21.nume = "";
block21.whole = "";
block21.block_pen = "ctx31";
block21.canvas = "canvas31";
block21.src = "";
block21.content = "graphic";
block21.value = "";
block21.corresponding="";
block21.select = "";
block21.trans = false;
block21.tran_panel = $("#A_panel");
block21.tran_panel_id = "A_panel";
block21.sym = "ctx9";	//紀錄對應的字符面板

var block22 = $("#member_A_fraction_graphic_second").get(0);
block22.id = "member_A_fraction_graphic_second";
block22.position = "personal_area";
block22.empty = "false";
block22.offset = {x:0, y:0}
block22.x =0, block22.y =0;
block22.orientation = "left";
block22.obj = $("#member_A_fraction_graphic_second");
block22.pen = "ctx19";
block22.contain = "";
block22.blockName = "";
block22.index = "";
block22.denom = "";
block22.nume = "";
block22.whole = "";
block22.block_pen = "ctx32";
block22.canvas = "canvas32";
block22.src = "";
block22.content = "graphic";
block22.value = "";
block22.corresponding="";
block22.select = "";
block22.trans = false;
block22.tran_panel = $("#A_panel");
block22.tran_panel_id = "A_panel";
block22.sym = "ctx10";	//紀錄對應的字符面板

var block23 = $("#member_A_fraction_graphic_third").get(0);
block23.id = "member_A_fraction_graphic_third";
block23.position = "personal_area";
block23.empty = "false";
block23.offset = {x:0, y:0}
block23.x =0, block23.y =0;
block23.orientation = "left";
block23.obj = $("#member_A_fraction_graphic_third");
block23.pen = "ctx20";
block23.contain = "";
block23.blockName = "";
block23.index = "";
block23.denom = "";
block23.nume = "";
block23.whole = "";
block23.block_pen = "ctx33";
block23.canvas = "canvas33";
block23.src = "";
block23.content = "graphic";
block23.value = "";
block23.corresponding="";
block23.select = "";
block23.trans = false;
block23.tran_panel = $("#A_panel");
block23.tran_panel_id = "A_panel";
block23.sym = "ctx11";	//紀錄對應的字符面板

var block24 = $("#member_B_fraction_graphic_first").get(0);
block24.id = "member_B_fraction_graphic_first";
block24.position = "personal_area";
block24.empty = "false";
block24.offset = {x:0, y:0}
block24.x =0, block24.y =0;
block24.orientation = "bottom";
block24.obj = $("#member_B_fraction_graphic_first");
block24.pen = "ctx21";
block24.contain = "";
block24.blockName = "";
block24.index = "";
block24.denom = "";
block24.nume = "";
block24.whole = "";
block24.block_pen = "ctx34";
block24.canvas = "canvas34";
block24.src = "";
block24.content = "graphic";
block24.value = "";
block24.corresponding="";
block24.select = "";
block24.trans = false;
block24.tran_panel = $("#B_panel");
block24.tran_panel_id = "B_panel";
block24.sym = "ctx12";	//紀錄對應的字符面板

var block25 = $("#member_B_fraction_graphic_second").get(0);
block25.id = "member_B_fraction_graphic_second";
block25.position = "personal_area";
block25.empty = "false";
block25.offset = {x:0, y:0}
block25.x =0, block25.y =0;
block25.orientation = "bottom";
block25.obj = $("#member_B_fraction_graphic_second");
block25.pen = "ctx22";
block25.contain = "";
block25.blockName = "";
block25.index = "";
block25.denom = "";
block25.nume = "";
block25.whole = "";
block25.block_pen = "ctx35";
block25.canvas = "canvas24";
block25.src = "";
block25.content = "graphic";
block25.value = "";
block25.corresponding="";
block25.select = "";
block25.trans = false;
block25.tran_panel = $("#B_panel");
block25.tran_panel_id = "B_panel";
block25.sym = "ctx13";	//紀錄對應的字符面板

var block26 = $("#member_B_fraction_graphic_third").get(0);
block26.id = "member_B_fraction_graphic_third";
block26.position = "personal_area";
block26.empty = "false";
block26.offset = {x:0, y:0}
block26.x =0, block26.y =0;
block26.orientation = "bottom";
block26.obj = $("#member_B_fraction_graphic_third");
block26.pen = "ctx23";
block26.contain = "";
block26.blockName = "";
block26.index = "";
block26.denom = "";
block26.nume = "";
block26.whole = "";
block26.block_pen = "ctx36";
block26.canvas = "canvas36";
block26.src = "";
block26.content = "graphic";
block26.value = "";
block26.corresponding="";
block26.select = "";
block26.trans = false;
block26.tran_panel = $("#B_panel");
block26.tran_panel_id = "B_panel";
block26.sym = "ctx14";	//紀錄對應的字符面板

var block27 = $("#member_C_fraction_graphic_first").get(0);
block27.id = "member_C_fraction_graphic_first";
block27.position = "personal_area";
block27.empty = "false";
block27.offset = {x:0, y:0}
block27.x =0, block27.y =0;
block27.orientation = "right";
block27.obj = $("#member_C_fraction_graphic_first");
block27.pen = "ctx24";
block27.contain = "";
block27.blockName = "";
block27.index = "";
block27.denom = "";
block27.nume = "";
block27.whole = "";
block27.block_pen = "ctx37";
block27.canvas = "canvas37";
block27.src = "";
block27.content = "graphic";
block27.value = "";
block27.corresponding="";
block27.select = "";
block27.trans = false;
block27.tran_panel = $("#C_panel");
block27.tran_panel_id = "C_panel";
block27.sym = "ctx15";	//紀錄對應的字符面板

var block28 = $("#member_C_fraction_graphic_second").get(0);
block28.id = "member_C_fraction_graphic_second";
block28.position = "personal_area";
block28.empty = "false";
block28.offset = {x:0, y:0}
block28.x =0, block28.y =0;
block28.orientation = "right";
block28.obj = $("#member_C_fraction_graphic_second");
block28.pen = "ctx25";
block28.contain = "";
block28.blockName = "";
block28.index = "";
block28.denom = "";
block28.nume = "";
block28.whole = "";
block28.block_pen = "ctx38";
block28.canvas = "canvas38";
block28.src = "";
block28.content = "graphic";
block28.value = "";
block28.corresponding="";
block28.select = "";
block28.trans = false;
block28.tran_panel = $("#C_panel");
block28.tran_panel_id = "C_panel";
block28.sym = "ctx16";	//紀錄對應的字符面板

var block29 = $("#member_C_fraction_graphic_third").get(0);
block29.id = "member_C_fraction_graphic_third";
block29.position = "personal_area";
block29.empty = "false";
block29.offset = {x:0, y:0}
block29.x =0, block29.y =0;
block29.orientation = "right";
block29.obj = $("#member_C_fraction_graphic_third");
block29.pen = "ctx26";
block29.contain = "";
block29.blockName = "";
block29.index = "";
block29.denom = "";
block29.nume = "";
block29.whole = "";
block29.block_pen = "ctx39";
block29.canvas = "canvas39";
block29.src = "";
block29.content = "graphic";
block29.value = "";
block29.corresponding="";
block29.select = "";
block29.trans = false;
block29.tran_panel = $("#C_panel");
block29.tran_panel_id = "C_panel";
block29.sym = "ctx17";	//紀錄對應的字符面板

var block30 = $("#confirm").get(0);	//此物件不使用
block30.obj = $("#confirm");
block30.id = "confirm";
block30.position = "center";

var block31 = $("#order_1").get(0);
block31.obj = $("#order_1");
block31.id = "order_1";
block31.position = "center";

var block32 = $("#order_2").get(0);
block32.obj = $("#order_2");
block32.id = "order_2";
block32.position = "center";

var block33 = $("#order_3").get(0);
block33.obj = $("#order_3");
block33.id = "order_3";
block33.position = "center";

var block34 = $("#A_next").get(0);
block34.obj = $("#A_next");
block34.id = "A_next";
block34.position = "personal_area";

var block35 = $("#B_next").get(0);
block35.obj = $("#B_next");
block35.id = "B_next";
block35.position = "personal_area";

var block36 = $("#C_next").get(0);
block36.obj = $("#C_next");
block36.id = "C_next";
block36.position = "personal_area";

var block37 = $("#clozeExplainA").get(0);
block37.obj = $("#clozeExplainA");
block37.id = "clozeExplainA";
block37.func = "close";
block37.position = "personal_area";

var block38 = $("#clozeExplainB").get(0);
block38.obj = $("#clozeExplainB");
block38.id = "clozeExplainB";
block38.func = "close";
block38.position = "personal_area";

var block39 = $("#clozeExplainC").get(0);
block39.obj = $("#clozeExplainC");
block39.id = "clozeExplainC";
block39.func = "close";
block39.position = "personal_area";

var block40 = $("#A_check").get(0);
block40.obj = $("#A_check");
block40.id = "A_check";
block40.position = "personal_area";

var block41 = $("#B_check").get(0);
block41.obj = $("#B_check");
block41.id = "B_check";
block41.position = "personal_area";

var block42 = $("#C_check").get(0);
block42.obj = $("#C_check");
block42.id = "C_check";
block42.position = "personal_area";

for(var i =43; i<=45; i++){		//中央區域的圖像填空區
	eval("var block"+i+"=$('#blank_"+(i-38)+"').get("+0+")");
	eval("block"+i+".id='blank_"+(i-38)+"'");
	eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+i+".identifier");
	eval("block"+i+".x="+0);
	eval("block"+i+".y="+0);
	eval("block"+i+".obj="+"$('#blank_"+(i-38)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".empty='true'");
	eval("block"+i+".value");
	eval("block"+i+".position='center'");
	eval("block"+i+".name = 'block"+i+"'");
	eval("block"+i+".index ="+i);
	eval("block"+i+".pen ='ctx"+(i+6)+"'");
	eval("block"+i+".canvas ='canvas"+(i+6)+"'");
	eval("block"+i+".blockCanvas=''");
	eval("block"+i+".blockPen=''");
	eval("block"+i+".blockPen=''");
	eval("block"+i+".occupy='false'");
	eval("block"+i+".corresponding");
}

for(var i =46; i<=48; i++){		//中央區域的字符區
	eval("var block"+i+"=$('#central_symbol_"+(i-41)+"').get("+0+")");
	eval("block"+i+".id='central_symbol_"+(i-41)+"'");
	eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+i+".identifier");
	eval("block"+i+".x="+0);
	eval("block"+i+".y="+0);
	eval("block"+i+".obj="+"$('#central_symbol_"+(i-41)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".empty='true'");
	eval("block"+i+".position='center'");
	eval("block"+i+".name = 'block"+i+"'");
	//eval("block"+(i+4)+".index ="+i);
	eval("block"+i+".pen ='ctx"+(i+6)+"'");
	eval("block"+i+".canvas ='canvas"+(i+6)+"'");
	eval("block"+i+".blockCanvas");
	eval("block"+i+".blockPen=''");
	eval("block"+i+".occupy='false'");
	eval("block"+i+".corresponding");
}

for(var i =49; i<=50; i++){		//中央區域的排序區域
	eval("var block"+i+"=$('#order_"+(i-45)+"').get("+0+")");
	eval("block"+i+".id='order_"+(i-45)+"'");
	eval("block"+i+".offset="+"{x:"+0+", y:"+0+"}");
	eval("block"+i+".identifier");
	eval("block"+i+".x="+0);
	eval("block"+i+".y="+0);
	eval("block"+i+".obj="+"$('#order_"+(i-45)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".position='center'");
	eval("block"+i+".name = 'block"+i+"'");
	eval("block"+i+".index ="+i);
	eval("block"+i+".pen ='ctx"+(i+6)+"'");
	eval("block"+i+".canvas ='canvas"+(i+6)+"'");
}

/*  member A 驗證面板物件*/
var block51= $("#A_panel").get(0);
block51.id = "A_panel";
block51.position = "personal_panel";
block51.offset = {x:0, y:0}
block51.obj = $("#A_panel");
block51.x =0, block51.y =0;
block51.identifier;

var block52 = $("#A_symbol_panel").get(0);
block52.id = "A_symbol_panel";
block52.position = "personal_panel";
block52.offset = {x:0, y:0}
block52.obj = $("#A_panel");
block52.x =0, block24.y =0;
block52.canvas = "canvas60";
block52.pen = "ctx60";

var block53 = $("#A_count").get(0);
block53.id = "A_count";
block53.position = "personal_panel";
block53.obj = $("#A_count");
block53.value;
block53.offset = {x:0, y:0}
block53.ansObj = "A_ans";
block53.x =0, block53.y=0;

var block54 = $("#A_close").get(0);
block54.id = "A_close";
block54.position = "personal_panel";
block54.obj = $("#A_close");

for(var i=55; i<=57; i++){
	eval("var block"+i+"=$('#A_cloze"+(i-54)+"').get("+0+")" );
	eval("block"+i+".id='A_cloze"+(i-54)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#A_cloze"+(i-54)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".canvas='canvas"+(i+2)+"'");
	eval("block"+i+".pen='ctx"+(i+2)+"'");
}

for(var i =58; i<=59; i++){
	eval("var block"+i+"=$('#A_equal"+(i-57)+"').get("+0+")" );
	eval("block"+i+".id='A_equal"+(i-57)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#A_equal"+(i-57)+"')");
	eval("block"+i+".canvas=''");
	eval("block"+i+".pen=''");
}

var block60 = $("#A_add").get(0);
block60.id = "A_add";
block60.position = "personal_panel";
block60.obj = $("#A_add");

var block61 = $("#A_sub").get(0);
block61.id = "A_sub";
block61.position = "personal_panel";
block61.obj = $("#A_sub");

var block62 = $("#A_confirm").get(0);
block62.id = "A_confirm";
block62.position = "personal_panel";
block62.obj = $("#A_confirm");
block62.use = false;

var block63 = $("#A_extend_reduce").get(0);
block63.id = "A_extend_reduce";
block63.position = "personal_panel";
block63.obj = $("#A_extend_reduce");
block63.extend ='×';
/** */

/*  member B 驗證面板物件*/
var block64= $("#B_panel").get(0);
block64.id = "B_panel";
block64.position = "personal_panel";
block64.offset = {x:0, y:0}
block64.obj = $("#B_panel");
block64.x =0, block64.y =0;
block64.identifier;

var block65 = $("#B_symbol_panel").get(0);
block65.id = "B_symbol_panel";
block65.position = "personal_panel";
block65.offset = {x:0, y:0}
block65.obj = $("#B_panel");
block65.x =0, block65.y =0;
block65.canvas = "canvas64";
block65.pen = "ctx64";

var block66 = $("#B_count").get(0);
block66.id = "B_count";
block66.position = "personal_panel";
block66.obj = $("#B_count");
block66.value;
block66.offset = {x:0, y:0}
block66.ansObj = "B_ans";
block66.x=0, block66.y=0;

var block67 = $("#B_close").get(0);
block67.id = "B_close";
block67.position = "personal_panel";
block67.obj = $("#B_close");

for(var i=68; i<=70; i++){
	eval("var block"+i+"=$('#B_cloze"+(i-67)+"').get("+0+")" );
	eval("block"+i+".id='B_cloze"+(i-67)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#B_cloze"+(i-67)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".canvas='canvas"+(i-7)+"'");
	eval("block"+i+".pen='ctx"+(i-7)+"'");	
}

for(var i =71; i<=72; i++){
	eval("var block"+i+"=$('#A_equal"+(i-70)+"').get("+0+")" );
	eval("block"+i+".id='A_equal"+(i-70)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#A_equal"+(i-70)+"')");
	eval("block"+i+".canvas=''");
	eval("block"+i+".pen=''");
}

var block73 = $("#B_add").get(0);
block73.id = "B_add";
block73.position = "personal_panel";
block73.obj = $("#B_add");

var block74 = $("#B_sub").get(0);
block74.id = "B_sub";
block74.position = "personal_panel";
block74.obj = $("#B_sub");

var block75 = $("#B_confirm").get(0);
block75.id = "B_confirm";
block75.position = "personal_panel";
block75.obj = $("#B_confirm");
block75.use = false;

var block76 = $("#B_extend_reduce").get(0);
block76.id = "B_extend_reduce";
block76.position = "personal_panel";
block76.obj = $("#B_extend_reduce");
block76.extend = '×';
/***/

/*  member C 驗證面板物件*/
var block77= $("#C_panel").get(0);
block77.id = "C_panel";
block77.position = "personal_panel";
block77.offset = {x:0, y:0}
block77.obj = $("#C_panel");
block77.x =0, block77.y =0;
block77.identifier;

var block78 = $("#C_symbol_panel").get(0);
block78.id = "C_symbol_panel";
block78.position = "personal_panel";
block78.offset = {x:0, y:0}
block78.obj = $("#C_panel");
block78.x =0, block50.y =0;
block78.canvas = "canvas68";
block78.pen = "ctx68";

var block79 = $("#C_count").get(0);
block79.id = "C_count";
block79.position = "personal_panel";
block79.obj = $("#C_count");
block79.value;
block79.offset ={x:0, y:0}
block79.ansObj = "C_ans";
block79.x=0, block79.y=0;

var block80 = $("#C_close").get(0);
block80.id = "C_close";
block80.position = "personal_panel";
block80.obj = $("#C_close");

for(var i=81; i<=83; i++){
	eval("var block"+i+"=$('#C_cloze"+(i-80)+"').get("+0+")" );
	eval("block"+i+".id='C_cloze"+(i-80)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#C_cloze"+(i-80)+"')");
	eval("block"+i+".denom=''");
	eval("block"+i+".nume=''");
	eval("block"+i+".canvas='canvas"+(i-16)+"'");
	eval("block"+i+".pen='ctx"+(i-16)+"'");
}

for(var i =84; i<=85; i++){
	eval("var block"+i+"=$('#C_equal"+(i-83)+"').get("+0+")" );
	eval("block"+i+".id='C_equal"+(i-83)+"'");
	eval("block"+i+".position='personal_panel'");
	eval("block"+i+".obj=$('#C_equal"+(i-83)+"')");
	eval("block"+i+".canvas=''");
	eval("block"+i+".pen=''");
}

var block86 = $("#C_add").get(0);
block86.id = "C_add";
block86.position = "personal_panel";
block86.obj = $("#C_add");

var block87 = $("#C_sub").get(0);
block87.id = "C_sub";
block87.position = "personal_panel";
block87.obj = $("#C_sub");

var block88 = $("#C_confirm").get(0);
block88.id = "C_confirm";
block88.position = "personal_panel";
block88.obj = $("#C_confirm");
block88.use = false;

var block89 = $("#C_extend_reduce").get(0);
block89.id = "C_extend_reduce";
block89.position = "personal_panel";
block89.obj = $("#C_extend_reduce");
block89.extend = '×';
/***/

var block90 = $("#A_translate").get(0);
block90.id = "A_translate";
block90.position = "personal_panel";
block90.obj = $("#A_translate");
block90.use = true;

var block91 = $("#B_translate").get(0);
block91.id = "B_translate";
block91.position = "personal_panel";
block91.obj = $("#B_translate");
block91.use = true;

var block92 = $("#C_translate").get(0);
block92.id = "C_translate";
block92.position = "personal_panel";
block92.obj = $("#C_translate");
block92.use = true;

var block93 = $("#A_previous").get(0);
block93.id = "A_previous";
block93.position = "personal_panel";
block93.obj = $("#A_previous");
block93.use = false;

var block94 = $("#B_previous").get(0);
block94.id = "B_previous";
block94.position = "personal_panel";
block94.obj = $("#B_previous");
block94.use = false;

var block95 = $("#C_previous").get(0);
block95.id = "C_previous";
block95.position = "personal_panel";
block95.obj = $("#C_previous");
block95.use = false;

var block96 = $("#A_unit").get(0);
block96.id = "A_unit";
block96.position = "personal_panel";
block96.obj = $("#A_unit");

var block97 = $("#B_unit").get(0);
block97.id = "B_unit";
block97.position = "personal_panel";
block97.obj = $("#B_unit");

var block98 = $("#C_unit").get(0);
block98.id = "C_unit";
block98.position = "personal_panel";
block98.obj = $("#C_unit");

var block99 = $("#A_ten").get(0);
block99.id = "A_ten";
block99.position = "personal_panel";
block99.obj = $("#A_ten");

var block100 = $("#B_ten").get(0);
block100.id = "B_ten";
block100.position = "personal_panel";
block100.obj = $("#B_ten");

var block101 = $("#C_ten").get(0);
block101.id = "C_ten";
block101.position = "personal_panel";
block101.obj = $("#C_ten");

var block102 = $("#A_to_center1").get(0);
block102.id = "A_to_center1";
block102.obj = $("#A_to_center1");
block102.group = "A_rubberBandArea";
block102.linkTarget = $("#blank_5");
block102.target = block43;
block102.targetSym = block46;
block102.linkLine = "A_to_center1_link";

var block103 = $("#A_to_center2").get(0);
block103.id = "A_to_center2";
block103.obj = $("#A_to_center2");
block103.group = "A_rubberBandArea";
block103.linkTarget = $("#blank_6");
block103.target = block44;
block103.targetSym = block47;
block103.linkLine = "A_to_center2_link";

var block104 = $("#A_to_center3").get(0);
block104.id = "A_to_center3";
block104.obj = $("#A_to_center3");
block104.group = "A_rubberBandArea";
block104.linkTarget = $("#blank_7");
block104.target = block45;
block104.targetSym = block48;
block104.linkLine = "A_to_center3_link";

var block105 = $("#B_to_center1").get(0);
block105.id = "B_to_center1";
block105.obj = $("#B_to_center1");
block105.group = "B_rubberBandArea";
block105.linkTarget = $("#blank_5");
block105.target = block43;
block105.targetSym = block46;
block105.linkLine = "B_to_center1_link";

var block106 = $("#B_to_center2").get(0);
block106.id = "B_to_center2";
block106.obj = $("#B_to_center2");
block106.group = "B_rubberBandArea";
block106.linkTarget = $("#blank_6");
block106.target = block44;
block106.targetSym = block47;
block106.linkLine = "B_to_center2_link";

var block107 = $("#B_to_center3").get(0);
block107.id = "B_to_center3";
block107.obj = $("#B_to_center3");
block107.group = "B_rubberBandArea";
block107.linkTarget = $("#blank_7");
block107.target = block45;
block107.targetSym = block48;
block107.linkLine = "B_to_center3_link";

var block108 = $("#C_to_center1").get(0);
block108.id = "C_to_center1";
block108.obj = $("#C_to_center1");
block108.group = "C_rubberBandArea";
block108.linkTarget = $("#blank_5");
block108.target = block43;
block108.targetSym = block46;
block108.linkLine = "C_to_center1_link";

var block109 = $("#C_to_center2").get(0);
block109.id = "C_to_center2";
block109.obj = $("#C_to_center2");
block109.group = "C_rubberBandArea";
block109.linkTarget = $("#blank_6");
block109.target = block44;
block109.targetSym = block47;
block109.linkLine = "C_to_center2_link";

var block110 = $("#C_to_center3").get(0);
block110.id = "C_to_center3";
block110.obj = $("#C_to_center3");
block110.group = "C_rubberBandArea";
block110.linkTarget = $("#blank_7");
block110.target = block45;
block110.targetSym = block48;
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

var block114 = $("#A_to_center4").get(0);
block114.id = "A_to_center4";
block114.obj = $("#A_to_center4");
block114.group = "A_rubberBandArea";
block114.linkTarget = $("#blank_4");
block114.target = block4;
block114.targetSym = block8;
block114.linkLine = "A_to_center4_link";

var block115 = $("#B_to_center4").get(0);
block115.id = "B_to_center4";
block115.obj = $("#B_to_center4");
block115.group = "B_rubberBandArea";
block115.linkTarget = $("#blank_4");
block115.target = block4;
block115.targetSym = block8;
block115.linkLine = "B_to_center4_link";

var block116 = $("#C_to_center4").get(0);
block116.id = "C_to_center4";
block116.obj = $("#C_to_center4");
block116.group = "C_rubberBandArea";
block116.linkTarget = $("#blank_4");
block116.target = block4;
block116.targetSym = block8;
block116.linkLine = "C_to_center4_link";

var block117= $("#A_take_back1").get(0);
block117.id = "A_take_back1";
block117.position = "center";
block117.obj = $("#A_take_back1");

var block118= $("#A_take_back2").get(0);
block118.id = "A_take_back2";
block118.position = "center";
block118.obj = $("#A_take_back2");

var block119= $("#A_take_back3").get(0);
block119.id = "A_take_back3";
block119.position = "center";
block119.obj = $("#A_take_back3");

var block120= $("#B_take_back1").get(0);
block120.id = "B_take_back1";
block120.position = "center";
block120.obj = $("#B_take_back1");

var block121= $("#B_take_back2").get(0);
block121.id = "B_take_back2";
block121.position = "center";
block121.obj = $("#B_take_back2");

var block122= $("#B_take_back3").get(0);
block122.id = "B_take_back3";
block122.position = "center";
block122.obj = $("#B_take_back3");

var block123= $("#C_take_back1").get(0);
block123.id = "C_take_back1";
block123.position = "center";
block123.obj = $("#C_take_back1");

var block124= $("#C_take_back2").get(0);
block124.id = "C_take_back2";
block124.position = "center";
block124.obj = $("#C_take_back2");

var block125= $("#C_take_back3").get(0);
block125.id = "C_take_back3";
block125.position = "center";
block125.obj = $("#C_take_back3");

for(var i =0; i<125; i++){
	blockArray[i] = eval("block"+(i+1));
}
