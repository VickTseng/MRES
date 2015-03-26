/**
 * @author wei
 */
var canvas1 = document.getElementById("drawLayer");
canvas1.width = 2857, canvas1.height = 1700;
var ctx1 = canvas1.getContext("2d");

var canvas2 = document.getElementById("blank_1");
canvas2.width = 200, canvas2.height = 200;
var ctx2 = canvas2.getContext("2d");

var canvas3 = document.getElementById("blank_2");
canvas3.width = 200, canvas3.height = 200;
var ctx3 = canvas3.getContext("2d");

var canvas4 = document.getElementById("blank_3");
canvas4.width = 360, canvas4.height = 200;
var ctx4 = canvas4.getContext("2d");

var canvas5 = document.getElementById("central_symbol_1");
canvas5.width = 100, canvas5.height = 100;
var ctx5 = canvas5.getContext("2d");

var canvas6 = document.getElementById("central_symbol_2");
canvas6.width = 100, canvas6.height = 100;
var ctx6 = canvas6.getContext("2d");

var canvas7 = document.getElementById("central_symbol_3");
canvas7.width = 100, canvas7.height = 100;
var ctx7 = canvas7.getContext("2d");

//
var canvas8 = document.getElementById("member_A_fraction_symbol_first");
canvas8.width = 150, canvas8.height = 75;
var ctx8 = canvas8.getContext("2d");

var canvas9 = document.getElementById("member_A_fraction_symbol_second");
canvas9.width = 150, canvas9.height = 75;
var ctx9 = canvas9.getContext("2d");

var canvas10 = document.getElementById("member_A_fraction_symbol_third");
canvas10.width = 150, canvas10.height = 75;
var ctx10 = canvas10.getContext("2d");
//
var canvas11 = document.getElementById("member_B_fraction_symbol_first");
canvas11.width = 150, canvas11.height = 75;
var ctx11 = canvas11.getContext("2d");

var canvas12 = document.getElementById("member_B_fraction_symbol_second");
canvas12.width = 150, canvas12.height = 75;
var ctx12 = canvas12.getContext("2d");

var canvas13 = document.getElementById("member_B_fraction_symbol_third");
canvas13.width = 150, canvas13.height = 75;
var ctx13 = canvas13.getContext("2d");
//
var canvas14 = document.getElementById("member_C_fraction_symbol_first");
canvas14.width = 150, canvas14.height = 75;
var ctx14 = canvas14.getContext("2d");

var canvas15 = document.getElementById("member_C_fraction_symbol_second");
canvas15.width = 150, canvas15.height = 75;
var ctx15 = canvas15.getContext("2d");

var canvas16 = document.getElementById("member_C_fraction_symbol_third");
canvas16.width = 150, canvas16.height = 75;
var ctx16 = canvas16.getContext("2d");

//

var canvas17 = document.getElementById("member_A_fraction_graphic_first");
canvas17.width = 200, canvas17.height = 200;
var ctx17 = canvas17.getContext("2d");

var canvas18 = document.getElementById("member_A_fraction_graphic_second");
canvas18.width = 200, canvas18.height = 200;
var ctx18 = canvas18.getContext("2d");

var canvas19 = document.getElementById("member_A_fraction_graphic_third");
canvas19.width = 200, canvas19.height = 200;
var ctx19 = canvas19.getContext("2d");
//

var canvas20 = document.getElementById("member_B_fraction_graphic_first");
canvas20.width = 200, canvas20.height = 200;
var ctx20 = canvas20.getContext("2d");

var canvas21 = document.getElementById("member_B_fraction_graphic_second");
canvas21.width = 200, canvas21.height = 200;
var ctx21 = canvas21.getContext("2d");

var canvas22 = document.getElementById("member_B_fraction_graphic_third");
canvas22.width = 200, canvas22.height = 200;
var ctx22 = canvas22.getContext("2d");

//

var canvas23 = document.getElementById("member_C_fraction_graphic_first");
canvas23.width = 200, canvas23.height = 200;
var ctx23 = canvas23.getContext("2d");

var canvas24 = document.getElementById("member_C_fraction_graphic_second");
canvas24.width = 200, canvas24.height = 200;
var ctx24 = canvas24.getContext("2d");

var canvas25 = document.getElementById("member_C_fraction_graphic_third");
canvas25.width = 200, canvas25.height = 200;
var ctx25 = canvas25.getContext("2d");

/*var canvas26 = document.getElementById("record_answer");
canvas26.width = 1130, canvas26.height = 220;
var ctx26 = canvas26.getContext("2d");*/

var canvas27 ="", ctx27="";	//圖像物件
var canvas28 = "", ctx28="";
var canvas29="", ctx29="";
var canvas30="", ctx30="";
var canvas31="", ctx31="";
var canvas32="", ctx32="";
var canvas33="", ctx33="";
var canvas34="", ctx34="";
var canvas35="", ctx35="";

var canvas36 = document.getElementById("A_cloze1");
canvas36.width = 150, canvas36.height = 150;
var ctx36= canvas36.getContext("2d");

var canvas37 = document.getElementById("A_cloze2");
canvas37.width = 150, canvas37.height = 150;
var ctx37 = canvas37.getContext("2d");

var canvas38 = document.getElementById("A_cloze3");
canvas38.width = 150, canvas38.height = 150;
var ctx38 = canvas38.getContext("2d");

var canvas39 = document.getElementById("A_symbol_panel");
canvas39.width = 630, canvas39.height = 120;
var ctx39 = canvas39.getContext("2d");


var canvas40 = document.getElementById("B_cloze1");
canvas40.width = 150, canvas40.height = 150;
var ctx40 = canvas40.getContext("2d");

var canvas41 = document.getElementById("B_cloze2");
canvas41.width = 150, canvas41.height = 150;
var ctx41 = canvas41.getContext("2d");

var canvas42 = document.getElementById("B_cloze3");
canvas42.width = 150, canvas42.height = 150;
var ctx42 = canvas42.getContext("2d");

var canvas43 = document.getElementById("B_symbol_panel");
canvas43.width = 630, canvas43.height = 120;
var ctx43 = canvas43.getContext("2d");


var canvas44 = document.getElementById("C_cloze1");
canvas44.width = 150, canvas44.height = 150;
var ctx44 = canvas44.getContext("2d");

var canvas45 = document.getElementById("C_cloze2");
canvas45.width = 150, canvas45.height = 150;
var ctx45 = canvas45.getContext("2d");

var canvas46 = document.getElementById("C_cloze3");
canvas46.width = 150, canvas46.height = 150;
var ctx46 = canvas46.getContext("2d");

var canvas47 = document.getElementById("C_symbol_panel");
canvas47.width = 630, canvas47.height = 120;
var ctx47 = canvas47.getContext("2d");

var canvas48 ="", ctx48="";	//字符物件
var canvas49 ="", ctx49="";
var canvas50="", ctx50="";
var canvas51="", ctx51="";
var canvas52="", ctx52="";
var canvas53="", ctx53="";
var canvas54="", ctx54="";
var canvas55="", ctx55="";
var canvas56="", ctx56="";

var canvas57 = document.getElementById("process");
canvas57.width = 500, canvas57.height = 300;
var ctx57 = canvas57.getContext("2d");

var canvas58 = document.getElementById("central_symbol_4");
canvas58.width = 100, canvas58.height = 100;
var ctx58 = canvas58.getContext("2d");

var canvas59 = document.getElementById("central_symbol_5");
canvas59.width = 100, canvas59.height = 100;
var ctx59 = canvas59.getContext("2d");

var canvas60 = document.getElementById("central_symbol_6");
canvas60.width = 100, canvas60.height = 100;
var ctx60 = canvas60.getContext("2d");

var canvas61 = document.getElementById("central_symbol_7");
canvas61.width = 100, canvas61.height = 100;
var ctx61 = canvas61.getContext("2d");

var canvas62 = document.getElementById("blank_4");
canvas62.width = 200, canvas62.height = 200;
var ctx62 = canvas62.getContext("2d");

var canvas63 = document.getElementById("blank_5");
canvas63.width = 200, canvas63.height = 200;
var ctx63 = canvas63.getContext("2d");

var canvas64 = document.getElementById("blank_6");
canvas64.width = 200, canvas64.height = 200;
var ctx64 = canvas64.getContext("2d");

var canvas65 = document.getElementById("blank_7");
canvas65.width = 360, canvas65.height = 200;
var ctx65 = canvas65.getContext("2d");