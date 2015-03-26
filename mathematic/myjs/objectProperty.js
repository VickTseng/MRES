/**
 * @author wei
 */

var blockMap = new Object();//用來監控物件狀態
var blockArray = new Array(80);//儲存物件
var draw = new drawGra();	//建立畫圖物件
var handleObj = new handleObj();	//建立處理物件類別
var o = document.body;
var A_check = false, B_check = false, C_check = false;	//三個人的完成狀態
var A_next = false, B_next = false, C_next = false;	
var A_change_state = true, B_change_state = true, C_change_state = true;	//A, B, C三者的圖卡傳送狀態
var time = 0;

var member_A= {
	nume: [],
	denom: [],
	path:[]
}

var member_B= {
	nume: [],
	denom: [],
	path:[]
}

var member_C= {
	nume: [],
	denom: [],
	path:[]
}

var pic_symbol = {
	nume: [],
	denom: [],
	whole: []
}

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

for(var i=0; i<9; i++){	//宣告分數圖形
	eval("var image"+(i+1)+"= new Image()");
	if(i<3){	//載入真分數圖形
		var id = total[i];
		eval(" image"+(i+1)+".src ='collect_pic/proper/"+proper.path[id]+".png'");
		pic_symbol.nume.push(proper.nume[id]);
		pic_symbol.denom.push(proper.denom[id]);
		pic_symbol.whole.push("");
	}
	if(i>=3 && i<6){//載入假分數圖形
		var id = total[i];
		eval("image"+(i+1)+".src ='collect_pic/improper/"+improper.path[id]+".png'");
		pic_symbol.nume.push(improper.nume[id]);
		pic_symbol.denom.push(improper.denom[id]);
		pic_symbol.whole.push("");
	}
	if(i>=6 && i<9){//載入帶分數圖形
		var id = total[i];
		eval("image"+(i+1)+".src ='collect_pic/mixed/"+mixed.path[id]+".png'");
		pic_symbol.nume.push(mixed.nume[id]);
		pic_symbol.denom.push(mixed.denom[id]);
		pic_symbol.whole.push(1);
	}
}

var block1 = $("#member_A_fraction_symbol_first").get(0);
block1.id = "member_A_fraction_symbol_first";
block1.position = "personal_area";
block1.empty = "false";
block1.offset = {x:0, y:0}
block1.x =0, block1.y =0;
block1.orientation = "left";
block1.obj = $("#member_A_fraction_symbol_first");
block1.pen = "ctx2";
block1.contain = "";
block1.blockName = "As_0";
block1.index = "";
block1.denom = "";
block1.nume = "";
block1.whole = "";
block1.block_pen = "ctx20";
block1.canvas = "canvas20";
block1.content = "symbol";
block1.type = "mix";
block1.use = true;

var block2 = $("#member_A_fraction_symbol_second").get(0);
block2.id = "member_A_fraction_symbol_second";
block2.position = "personal_area";
block2.empty = "false";
block2.offset = {x:0, y:0}
block2.x =0, block2.y =0;
block2.orientation = "left";
block2.obj = $("#member_A_fraction_symbol_second");
block2.pen = "ctx3";
block2.contain = "";
block2.blockName = "As_1";
block2.index = "";
block2.denom = "";
block2.nume = "";
block2.whole = "";
block2.block_pen = "ctx21";
block2.canvas = "canvas21";
block2.content = "symbol";
block2.type = "proper";
block2.use = true;

var block3 = $("#member_A_fraction_symbol_third").get(0);
block3.id = "member_A_fraction_symbol_third";
block3.position = "personal_area";
block3.empty = "false";
block3.offset = {x:0, y:0}
block3.x =0, block3.y =0;
block3.orientation = "left";
block3.obj = $("#member_A_fraction_symbol_third");
block3.pen = "ctx4";
block3.contain = "";
block3.blockName = "As_2";
block3.index = "";
block3.denom = "";
block3.nume = "";
block3.whole = "";
block3.block_pen = "ctx22";
block3.canvas = "canvas22";
block3.content = "symbol";
block3.type = "improper";
block3.use = true;

var block4 = $("#member_B_fraction_symbol_first").get(0);
block4.id = "member_B_fraction_symbol_first";
block4.position = "personal_area";
block4.empty = "false";
block4.offset = {x:0, y:0}
block4.x =0, block4.y =0;
block4.orientation = "bottom";
block4.obj = $("#member_B_fraction_symbol_first");
block4.pen = "ctx5";
block4.contain = "";
block4.blockName = "Bs_0";
block4.index = "";
block4.denom = "";
block4.nume = "";
block4.whole = "";
block4.block_pen = "ctx23";
block4.canvas = "canvas12";
block4.content = "symbol";
block4.type = "mix";
block4.use = true;

var block5 = $("#member_B_fraction_symbol_second").get(0);
block5.id = "member_B_fraction_symbol_second";
block5.position = "personal_area";
block5.empty = "false";
block5.offset = {x:0, y:0}
block5.x =0, block5.y =0;
block5.orientation = "bottom";
block5.obj = $("#member_B_fraction_symbol_second");
block5.pen = "ctx6";
block5.contain = "";
block5.blockName = "Bs_1";
block5.index = "";
block5.denom = "";
block5.nume = "";
block5.whole = "";
block5.block_pen = "ctx24";
block5.canvas = "canvas24";
block5.content = "symbol";
block5.type = "proper";
block5.use = true;

var block6 = $("#member_B_fraction_symbol_third").get(0);
block6.id = "member_B_fraction_symbol_third";
block6.position = "personal_area";
block6.empty = "false";
block6.offset = {x:0, y:0}
block6.x =0, block6.y =0;
block6.orientation = "bottom";
block6.obj = $("#member_B_fraction_symbol_third");
block6.pen = "ctx7";
block6.contain = "";
block6.blockName = "Bs_2";
block6.index = "";
block6.denom = "";
block6.nume = "";
block6.whole = "";
block6.block_pen = "ctx25";
block6.canvas = "canvas25";
block6.content = "symbol";
block6.type = "improper";
block6.use = true;

var block7 = $("#member_C_fraction_symbol_first").get(0);
block7.id = "member_C_fraction_symbol_first";
block7.position = "personal_area";
block7.empty = "false";
block7.offset = {x:0, y:0}
block7.x =0, block7.y =0;
block7.orientation = "right";
block7.obj = $("#member_C_fraction_symbol_first");
block7.pen = "ctx8";
block7.contain = "";
block7.blockName = "Cs_0";
block7.index = "";
block7.denom = "";
block7.nume = "";
block7.whole = "";
block7.block_pen = "ctx26";
block7.canvas = "canvas26";
block7.content = "symbol";
block7.type = "mix";
block7.use = true;

var block8 = $("#member_C_fraction_symbol_second").get(0);
block8.id = "member_C_fraction_symbol_second";
block8.position = "personal_area";
block8.empty = "false";
block8.offset = {x:0, y:0}
block8.x =0, block8.y =0;
block8.orientation = "right";
block8.obj = $("#member_C_fraction_symbol_second");
block8.pen = "ctx9";
block8.contain = "";
block8.blockName = "Cs_1";
block8.index = "";
block8.denom = "";
block8.nume = "";
block8.whole = "";
block8.block_pen = "ctx27";
block8.canvas = "canvas27";
block8.content = "symbol";
block8.type = "proper";
block8.use = true;

var block9 = $("#member_C_fraction_symbol_third").get(0);
block9.id = "member_C_fraction_symbol_third";
block9.position = "personal_area";
block9.empty = "false";
block9.offset = {x:0, y:0}
block9.x =0, block9.y =0;
block9.orientation = "right";
block9.obj = $("#member_C_fraction_symbol_third");
block9.pen = "ctx10";
block9.contain = "";
block9.blockName = "Cs_2";
block9.index = "";
block9.denom = "";
block9.nume = "";
block9.whole = "";
block9.block_pen = "ctx28";
block9.canvas = "canvas28";
block9.content = "symbol";
block9.type = "improper";
block9.use = true;

var block10 = $("#member_A_fraction_graphic_first").get(0);
block10.id = "member_A_fraction_graphic_first";
block10.position = "personal_area";
block10.empty = "false";
block10.offset = {x:0, y:0}
block10.x =0, block10.y =0;
block10.orientation = "left";
block10.obj = $("#member_A_fraction_graphic_first");
block10.pen = "ctx11";
block10.contain = "";
block10.blockName = "A_0";
block10.index = "";
block10.denom = "";
block10.nume = "";
block10.whole = "";
block10.block_pen = "ctx29";
block10.canvas = "canvas29";
block10.src = "";
block10.content = "graphic";
block10.type = "improper";
block10.use = true;

var block11 = $("#member_A_fraction_graphic_second").get(0);
block11.id = "member_A_fraction_graphic_second";
block11.position = "personal_area";
block11.empty = "false";
block11.offset = {x:0, y:0}
block11.x =0, block11.y =0;
block11.orientation = "left";
block11.obj = $("#member_A_fraction_graphic_second");
block11.pen = "ctx12";
block11.contain = "";
block11.blockName = "A_1";
block11.index = "";
block11.denom = "";
block11.nume = "";
block11.whole = "";
block11.block_pen = "ctx30";
block11.canvas = "canvas30";
block11.src = "";
block11.content = "graphic";
block11.type = "mix";
block11.use = true;

var block12 = $("#member_A_fraction_graphic_third").get(0);
block12.id = "member_A_fraction_graphic_third";
block12.position = "personal_area";
block12.empty = "false";
block12.offset = {x:0, y:0}
block12.x =0, block12.y =0;
block12.orientation = "left";
block12.obj = $("#member_A_fraction_graphic_third");
block12.pen = "ctx13";
block12.contain = "";
block12.blockName = "A_2";
block12.index = "";
block12.denom = "";
block12.nume = "";
block12.whole = "";
block12.block_pen = "ctx31";
block12.canvas = "canvas31";
block12.src = "";
block12.content = "graphic";
block12.type = "proper";
block12.use = true;

var block13 = $("#member_B_fraction_graphic_first").get(0);
block13.id = "member_B_fraction_graphic_first";
block13.position = "personal_area";
block13.empty = "false";
block13.offset = {x:0, y:0}
block13.x =0, block13.y =0;
block13.orientation = "bottom";
block13.obj = $("#member_B_fraction_graphic_first");
block13.pen = "ctx14";
block13.contain = "";
block13.blockName = "B_0";
block13.index = "";
block13.denom = "";
block13.nume = "";
block13.whole = "";
block13.block_pen = "ctx32";
block13.canvas = "canvas32";
block13.src = "";
block13.content = "graphic";
block13.type = "improper";
block13.use = true;

var block14 = $("#member_B_fraction_graphic_second").get(0);
block14.id = "member_B_fraction_graphic_second";
block14.position = "personal_area";
block14.empty = "false";
block14.offset = {x:0, y:0}
block14.x =0, block14.y =0;
block14.orientation = "bottom";
block14.obj = $("#member_B_fraction_graphic_second");
block14.pen = "ctx15";
block14.contain = "";
block14.blockName = "B_1";
block14.index = "";
block14.denom = "";
block14.nume = "";
block14.whole = "";
block14.block_pen = "ctx33";
block14.canvas = "canvas33";
block14.src = "";
block14.content = "graphic";
block14.type = "mix";
block14.use = true;

var block15 = $("#member_B_fraction_graphic_third").get(0);
block15.id = "member_B_fraction_graphic_third";
block15.position = "personal_area";
block15.empty = "false";
block15.offset = {x:0, y:0}
block15.x =0, block15.y =0;
block15.orientation = "bottom";
block15.obj = $("#member_B_fraction_graphic_third");
block15.pen = "ctx16";
block15.contain = "";
block15.blockName = "B_2";
block15.index = "";
block15.denom = "";
block15.nume = "";
block15.whole = "";
block15.block_pen = "ctx34";
block15.canvas = "canvas34";
block15.src = "";
block15.content = "graphic";
block15.type = "proper";
block15.use = true;

var block16 = $("#member_C_fraction_graphic_first").get(0);
block16.id = "member_C_fraction_graphic_first";
block16.position = "personal_area";
block16.empty = "false";
block16.offset = {x:0, y:0}
block16.x =0, block16.y =0;
block16.orientation = "right";
block16.obj = $("#member_C_fraction_graphic_first");
block16.pen = "ctx17";
block16.contain = "";
block16.blockName = "C_0";
block16.index = "";
block16.denom = "";
block16.nume = "";
block16.whole = "";
block16.block_pen = "ctx35";
block16.canvas = "canvas35";
block16.src = "";
block16.content = "graphic";
block16.type = "improper";
block16.use = true;

var block17 = $("#member_C_fraction_graphic_second").get(0);
block17.id = "member_C_fraction_graphic_second";
block17.position = "personal_area";
block17.empty = "false";
block17.offset = {x:0, y:0}
block17.x =0, block17.y =0;
block17.orientation = "right";
block17.obj = $("#member_C_fraction_graphic_second");
block17.pen = "ctx18";
block17.contain = "";
block17.blockName = "C_1";
block17.index = "";
block17.denom = "";
block17.nume = "";
block17.whole = "";
block17.block_pen = "ctx36";
block17.canvas = "canvas36";
block17.src = "";
block17.content = "graphic";
block17.type = "mix";
block17.use = true;

var block18 = $("#member_C_fraction_graphic_third").get(0);
block18.id = "member_C_fraction_graphic_third";
block18.position = "personal_area";
block18.empty = "false";
block18.offset = {x:0, y:0}
block18.x =0, block18.y =0;
block18.orientation = "right";
block18.obj = $("#member_C_fraction_graphic_third");
block18.pen = "ctx19";
block18.contain = "";
block18.blockName = "C_2";
block18.index = "";
block18.denom = "";
block18.nume = "";
block18.whole = "";
block18.block_pen = "ctx37";
block18.canvas = "canvas37";
block18.src = "";
block18.content = "graphic";
block18.type = "proper";
block18.use = true;

/**/

var block19 = $("#A_confirm").get(0);
block19.id = "A_confirm";
block19.obj = $("#A_confirm");
block19.position = "personal_area";

var block20 = $("#B_confirm").get(0);
block20.id = "B_confirm";
block20.obj = $("#B_confirm");
block20.position = "personal_area";

var block21 = $("#C_confirm").get(0);
block21.id = "C_confirm";
block21.obj = $("#C_confirm");
block21.position = "personal_area";

var block22 = $("#A_next").get(0);
block22.id = "A_next";
block22.obj = $("#A_next");
block22.position = "personal_area";

var block23 = $("#B_next").get(0);
block23.id = "B_next";
block23.obj = $("#B_next");
block23.position = "personal_area";

var block24 = $("#C_next").get(0);
block24.id = "C_next";
block24.obj = $("#C_next");
block24.position = "personal_area";

var block25 = $("#clozeExplainA").get(0);
block25.id = "clozeExplainA";
block25.obj = $("#clozeExplainA");
block25.func = "close";
block25.position = "personal_area";

var block26 = $("#clozeExplainB").get(0);
block26.id = "clozeExplainB";
block26.obj = $("#clozeExplainB");
block26.func = "close";
block26.position = "personal_area";

var block27 = $("#clozeExplainC").get(0);
block27.id = "clozeExplainC";
block27.obj = $("#clozeExplainC");
block27.func = "close";
block27.position = "personal_area";

var block28 = $("#A_to_c2").get(0);
block28.id = "A_to_c2";
block28.obj = $("#A_to_c2");
block28.group = "A_rubberBandArea_left";
block28.linkLine = "A_to_c2_link";
block28.linkTarget = $("#member_C_fraction_graphic_third");
block28.target = block18;

var block29 = $("#A_to_c1").get(0);
block29.id = "A_to_c1";
block29.obj = $("#A_to_c1");
block29.group = "A_rubberBandArea_left";
block29.linkLine = "A_to_c1_link";
block29.linkTarget = $("#member_C_fraction_graphic_second");
block29.target = block17;

var block30 = $("#A_to_c0").get(0);
block30.id = "A_to_c0";
block30.obj = $("#A_to_c0");
block30.group = "A_rubberBandArea_left";
block30.linkLine = "A_to_c0_link";
block30.linkTarget = $("#member_C_fraction_graphic_first");
block30.target = block16;

var block31 = $("#A_rubberBandArea_left").get(0);
block31.id = "A_rubberBandArea_left";
block31.obj = $("#A_rubberBandArea_left");

var block32 = $("#A_to_b2").get(0);
block32.id = "A_to_b2";
block32.obj = $("#A_to_b2");
block32.group = "A_rubberBandArea_right";
block32.linkLine = "A_to_b2_link";
block32.linkTarget = $("#member_B_fraction_graphic_third");
block32.target = block15;

var block33 = $("#A_to_b1").get(0);
block33.id = "A_to_b1";
block33.obj = $("#A_to_b1");
block33.group = "A_rubberBandArea_right";
block33.linkLine = "A_to_b1_link";
block33.linkTarget = $("#member_B_fraction_graphic_second");
block33.target = block14;

var block34 = $("#A_to_b0").get(0);
block34.id = "A_to_b0";
block34.obj = $("#A_to_b0");
block34.group = "A_rubberBandArea_right";
block34.linkLine = "A_to_b0_link";
block34.linkTarget = $("#member_B_fraction_graphic_first");
block34.target = block13;

var block35 = $("#A_rubberBandArea_right").get(0);
block35.id = "A_rubberBandArea_right";
block35.obj = $("#A_rubberBandArea_right");

var block36 = $("#B_to_a2").get(0);
block36.id = "B_to_a2";
block36.obj = $("#B_to_a2");
block36.group = "B_rubberBandArea_left";
block36.linkLine = "B_to_a2_link";
block36.linkTarget = $("#member_A_fraction_graphic_third");
block36.target = block12;

var block37 = $("#B_to_a1").get(0);
block37.id = "B_to_a1";
block37.obj = $("#B_to_a1");
block37.group = "B_rubberBandArea_left";
block37.linkLine = "B_to_a1_link";
block37.linkTarget = $("#member_A_fraction_graphic_second");
block37.target = block11;

var block38 = $("#B_to_a0").get(0);
block38.id = "B_to_a0";
block38.obj = $("#B_to_a0");
block38.group = "B_rubberBandArea_left";
block38.linkLine = "B_to_a0_link";
block38.linkTarget = $("#member_A_fraction_graphic_first");
block38.target = block10;

var block39 = $("#B_rubberBandArea_left").get(0);
block39.id = "B_rubberBandArea_left";
block39.obj = $("#B_rubberBandArea_left");

var block40 = $("#B_to_c2").get(0);
block40.id = "B_to_c2";
block40.obj = $("#B_to_c2");
block40.group = "B_rubberBandArea_right";
block40.linkLine = "B_to_c2_link";
block40.linkTarget = $("#member_C_fraction_graphic_third");
block40.target = block18;

var block41 = $("#B_to_c1").get(0);
block41.id = "B_to_c1";
block41.obj = $("#B_to_c1");
block41.group = "B_rubberBandArea_right";
block41.linkLine = "B_to_c1_link";
block41.linkTarget = $("#member_C_fraction_graphic_second");
block41.target = block17;

var block42 = $("#B_to_c0").get(0);
block42.id = "B_to_c0";
block42.obj = $("#B_to_c0");
block42.group = "B_rubberBandArea_right";
block42.linkLine = "B_to_c0_link";
block42.linkTarget = $("#member_C_fraction_graphic_first");
block42.target = block16;

var block43 = $("#B_rubberBandArea_right").get(0);
block43.id = "B_rubberBandArea_right";
block43.obj = $("#B_rubberBandArea_right");

var block44 = $("#C_to_b2").get(0);
block44.id = "C_to_b2";
block44.obj = $("#C_to_b2");
block44.group = "C_rubberBandArea_left";
block44.linkLine = "C_to_b2_link";
block44.linkTarget = $("#member_B_fraction_graphic_third");
block44.target = block15;

var block45 = $("#C_to_b1").get(0);
block45.id = "C_to_b1";
block45.obj = $("#C_to_b1");
block45.group = "C_rubberBandArea_left";
block45.linkLine = "C_to_b1_link";
block45.linkTarget = $("#member_B_fraction_graphic_second");
block45.target = block14;

var block46 = $("#C_to_b0").get(0);
block46.id = "C_to_b0";
block46.obj = $("#C_to_b0");
block46.group = "C_rubberBandArea_left";
block46.linkLine = "C_to_b0_link";
block46.linkTarget = $("#member_B_fraction_graphic_first");
block46.target = block13;

var block47 = $("#C_rubberBandArea_left").get(0);
block47.id = "C_rubberBandArea_left";
block47.obj = $("#C_rubberBandArea_left");

var block48 = $("#C_to_a2").get(0);
block48.id = "C_to_a2";
block48.obj = $("#C_to_a2");
block48.group = "C_rubberBandArea_right";
block48.linkLine = "C_to_a2_link";
block48.linkTarget = $("#member_A_fraction_graphic_third");
block48.target = block12;

var block49 = $("#C_to_a1").get(0);
block49.id = "C_to_a1";
block49.obj = $("#C_to_a1");
block49.group = "C_rubberBandArea_right";
block49.linkLine = "C_to_a1_link";
block49.linkTarget = $("#member_A_fraction_graphic_second");
block49.target = block11;

var block50 = $("#C_to_a0").get(0);
block50.id = "C_to_a0";
block50.obj = $("#C_to_a0");
block50.group = "C_rubberBandArea_right";
block50.linkLine = "C_to_a0_link";
block50.linkTarget = $("#member_A_fraction_graphic_first");
block50.target = block10;

var block51 = $("#C_rubberBandArea_right").get(0);
block51.id = "C_rubberBandArea_right";
block51.obj = $("#C_rubberBandArea_right");

var block52 = $("#A_whether_change").get(0);
block52.id = "A_whether_change";
block52.obj = $("#A_whether_change");
block52.position = "center";

var block53 = $("#A_accept").get(0);
block53.id = "A_accept";
block53.obj = $("#A_accept");
block53.position = "center";

var block54 = $("#A_turn_down").get(0);
block54.id = "A_turn_down";
block54.obj = $("#A_turn_down");
block54.position = "center";

var block55 = $("#B_whether_change").get(0);
block55.id = "B_whether_change";
block55.obj = $("#B_whether_change");
block55.position = "center";

var block56 = $("#B_accept").get(0);
block56.id = "B_accept";
block56.obj = $("#B_accept");
block56.position = "center";

var block57 = $("#B_turn_down").get(0);
block57.id = "B_turn_down";
block57.obj = $("#B_turn_down");
block57.position = "center";

var block58 = $("#C_whether_change").get(0);
block58.id = "C_whether_change";
block58.obj = $("#C_whether_change");
block58.position = "center";

var block59 = $("#C_accept").get(0);
block59.id = "C_accept";
block59.obj = $("#C_accept");
block59.position = "center";

var block60 = $("#C_turn_down").get(0);
block60.id = "C_turn_down";
block60.obj = $("#C_turn_down");
block60.position = "center";

var block61 = $("#A_change_pic").get(0);
block61.id = "A_change_pic";
block61.canvas = "canvas38";
block61.pen = ctx38;

var block62 = $("#B_change_pic").get(0);
block62.id = "B_change_pic";
block62.canvas = "canvas39";
block62.pen = ctx39;

var block63 = $("#C_change_pic").get(0);
block63.id = "C_change_pic";
block63.canvas = "canvas40";
block63.pen = ctx40;

for(var i=0; i<63; i++){	//儲存所有的操作物件
	blockArray[i] = eval("block"+(i+1));
}