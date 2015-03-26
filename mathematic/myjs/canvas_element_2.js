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
canvas4.width = 200, canvas4.height = 200;
var ctx4 = canvas4.getContext("2d");

var canvas5 = document.getElementById("blank_4");
canvas5.width = 200, canvas5.height = 200;
var ctx5 = canvas5.getContext("2d");

var canvas6 = document.getElementById("order_1");
canvas6.width = 50, canvas6.height = 50;
var ctx6 = canvas6.getContext("2d");

var canvas7 = document.getElementById("order_2");
canvas7.width = 50, canvas7.height = 50;
var ctx7 = canvas7.getContext("2d");

var canvas8 = document.getElementById("order_3");
canvas8.width = 50, canvas8.height = 50;
var ctx8 = canvas8.getContext("2d");

var canvas9 = document.getElementById("member_A_fraction_symbol_first");
canvas9.width = 150, canvas9.height = 75;
var ctx9 = canvas9.getContext("2d");

var canvas10 = document.getElementById("member_A_fraction_symbol_second");
canvas10.width = 150, canvas10.height = 75;
var ctx10 = canvas10.getContext("2d");

var canvas11 = document.getElementById("member_A_fraction_symbol_third");
canvas11.width = 150, canvas11.height = 75;
var ctx11 = canvas11.getContext("2d");

var canvas12 = document.getElementById("member_B_fraction_symbol_first");
canvas12.width = 150, canvas12.height = 75;
var ctx12 = canvas12.getContext("2d");

var canvas13 = document.getElementById("member_B_fraction_symbol_second");
canvas13.width = 150, canvas13.height = 75;
var ctx13 = canvas13.getContext("2d");

var canvas14 = document.getElementById("member_B_fraction_symbol_third");
canvas14.width = 150, canvas14.height = 75;
var ctx14 = canvas14.getContext("2d");

var canvas15 = document.getElementById("member_C_fraction_symbol_first");
canvas15.width = 150, canvas15.height = 75;
var ctx15 = canvas15.getContext("2d");

var canvas16 = document.getElementById("member_C_fraction_symbol_second");
canvas16.width = 150, canvas16.height = 75;
var ctx16 = canvas16.getContext("2d");

var canvas17 = document.getElementById("member_C_fraction_symbol_third");
canvas17.width = 150, canvas17.height = 75;
var ctx17 = canvas17.getContext("2d");

var canvas18 = document.getElementById("member_A_fraction_graphic_first");
canvas18.width = 200, canvas18.height = 200;
var ctx18 = canvas18.getContext("2d");

var canvas19 = document.getElementById("member_A_fraction_graphic_second");
canvas19.width = 200, canvas19.height = 200;
var ctx19 = canvas19.getContext("2d");

var canvas20 = document.getElementById("member_A_fraction_graphic_third");
canvas20.width = 200, canvas20.height = 200;
var ctx20 = canvas20.getContext("2d");

var canvas21 = document.getElementById("member_B_fraction_graphic_first");
canvas21.width = 200, canvas21.height = 200;
var ctx21 = canvas21.getContext("2d");

var canvas22 = document.getElementById("member_B_fraction_graphic_second");
canvas22.width = 200, canvas22.height = 200;
var ctx22 = canvas22.getContext("2d");

var canvas23 = document.getElementById("member_B_fraction_graphic_third");
canvas23.width = 200, canvas23.height = 200;
var ctx23 = canvas23.getContext("2d");

var canvas24 = document.getElementById("member_C_fraction_graphic_first");
canvas24.width = 200, canvas24.height = 200;
var ctx24 = canvas24.getContext("2d");

var canvas25 = document.getElementById("member_C_fraction_graphic_second");
canvas25.width = 200, canvas25.height = 200;
var ctx25 = canvas25.getContext("2d");

var canvas26 = document.getElementById("member_C_fraction_graphic_third");
canvas26.width = 200, canvas26.height = 200;
var ctx26 = canvas26.getContext("2d");

var canvas27 = document.getElementById("central_symbol_1");
canvas27.width = 100, canvas27.height = 100;
var ctx27 = canvas27.getContext("2d");

var canvas28 = document.getElementById("central_symbol_2");
canvas28.width = 100, canvas28.height = 100;
var ctx28 = canvas28.getContext("2d");

var canvas29 = document.getElementById("central_symbol_3");
canvas29.width = 100, canvas29.height = 100;
var ctx29 = canvas29.getContext("2d");

var canvas30 = document.getElementById("central_symbol_4");
canvas30.width = 100, canvas30.height = 100;
var ctx30 = canvas30.getContext("2d");

var canvas31 ="", ctx31="";	/** 圖卡物件*/
var canvas32 = "", ctx32="";
var canvas33="", ctx33="";
var canvas34="", ctx34="";
var canvas35="", ctx35="";
var canvas36="", ctx36="";
var canvas37="", ctx37="";
var canvas38="", ctx38="";
var canvas39="", ctx39="";

var canvas40 ="", ctx40="";	/** 字符物件*/
var canvas41 = "", ctx41="";
var canvas42="", ctx42="";
var canvas43="", ctx43="";
var canvas44="", ctx44="";
var canvas45="", ctx45="";
var canvas46="", ctx46="";
var canvas47="", ctx47="";
var canvas48="", ctx48="";

var canvas49 = document.getElementById("blank_5");
canvas49.width = 200, canvas49.height = 200;
var ctx49 = canvas49.getContext("2d");

var canvas50 = document.getElementById("blank_6");
canvas50.width = 200, canvas50.height = 200;
var ctx50 = canvas50.getContext("2d");

var canvas51 = document.getElementById("blank_7");
canvas51.width = 200, canvas51.height = 200;
var ctx51 = canvas51.getContext("2d");

var canvas52 = document.getElementById("central_symbol_5");
canvas52.width = 100, canvas52.height = 100;
var ctx52 = canvas52.getContext("2d");

var canvas53 = document.getElementById("central_symbol_6");
canvas53.width = 100, canvas53.height = 100;
var ctx53 = canvas53.getContext("2d");

var canvas54 = document.getElementById("central_symbol_7");
canvas54.width = 100, canvas54.height = 100;
var ctx54 = canvas54.getContext("2d");

var canvas55 = document.getElementById("order_4");
canvas55.width = 50, canvas55.height = 50;
var ctx55 = canvas55.getContext("2d");

var canvas56 = document.getElementById("order_5");
canvas56.width = 50, canvas56.height = 50;
var ctx56 = canvas56.getContext("2d");

var canvas57 = document.getElementById("A_cloze1");
canvas57.width = 150, canvas57.height = 150;
var ctx57 = canvas57.getContext("2d");

var canvas58 = document.getElementById("A_cloze2");
canvas58.width = 150, canvas58.height = 150;
var ctx58 = canvas58.getContext("2d");

var canvas59 = document.getElementById("A_cloze3");
canvas59.width = 150, canvas59.height = 150;
var ctx59 = canvas59.getContext("2d");

var canvas60 = document.getElementById("A_symbol_panel");
canvas60.width = 630, canvas60.height = 120;
var ctx60 = canvas60.getContext("2d");

var canvas61 = document.getElementById("B_cloze1");
canvas61.width = 150, canvas61.height = 150;
var ctx61 = canvas61.getContext("2d");

var canvas62 = document.getElementById("B_cloze2");
canvas62.width = 150, canvas62.height = 150;
var ctx62 = canvas62.getContext("2d");

var canvas63 = document.getElementById("B_cloze3");
canvas63.width = 150, canvas63.height = 150;
var ctx63 = canvas63.getContext("2d");

var canvas64 = document.getElementById("B_symbol_panel");
canvas64.width = 630, canvas64.height = 120;
var ctx64 = canvas64.getContext("2d");

var canvas65 = document.getElementById("C_cloze1");
canvas65.width = 150, canvas65.height = 150;
var ctx65 = canvas65.getContext("2d");

var canvas66 = document.getElementById("C_cloze2");
canvas66.width = 150, canvas66.height = 150;
var ctx66 = canvas66.getContext("2d");

var canvas67 = document.getElementById("C_cloze3");
canvas67.width = 150, canvas67.height = 150;
var ctx67 = canvas67.getContext("2d");

var canvas68 = document.getElementById("C_symbol_panel");
canvas68.width = 630, canvas68.height = 120;
var ctx68 = canvas68.getContext("2d");