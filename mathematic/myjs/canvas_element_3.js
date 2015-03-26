/**
 * @author wei
 */
var canvas1 = document.getElementById("drawLayer");
canvas1.width = 2857, canvas1.height = 1700;
var ctx1 = canvas1.getContext("2d");

var canvas2 = document.getElementById("blank_1");
canvas2.width = 180, canvas2.height = 180;
var ctx2 = canvas2.getContext("2d");

var canvas3 = document.getElementById("blank_2");
canvas3.width = 180, canvas3.height = 180;
var ctx3 = canvas3.getContext("2d");

var canvas4 = document.getElementById("central_symbol_1");
canvas4.width = 100, canvas4.height = 60;
var ctx4 = canvas4.getContext("2d");

var canvas5 = document.getElementById("central_symbol_2");
canvas5.width = 100, canvas5.height = 60;
var ctx5 = canvas5.getContext("2d");

var canvas6 = document.getElementById("member_A_fraction_symbol_first");
canvas6.width = 150, canvas6.height = 75;
var ctx6 = canvas6.getContext("2d");

var canvas7 = document.getElementById("member_A_fraction_symbol_second");
canvas7.width = 150, canvas7.height = 75;
var ctx7 = canvas7.getContext("2d");

var canvas8 = document.getElementById("member_A_fraction_symbol_third");
canvas8.width = 150, canvas8.height = 75;
var ctx8 = canvas8.getContext("2d");

var canvas9 = document.getElementById("member_B_fraction_symbol_first");
canvas9.width = 150, canvas9.height = 75;
var ctx9 = canvas9.getContext("2d");

var canvas10 = document.getElementById("member_B_fraction_symbol_second");
canvas10.width = 150, canvas10.height = 75;
var ctx10 = canvas10.getContext("2d");

var canvas11 = document.getElementById("member_B_fraction_symbol_third");
canvas11.width = 150, canvas11.height = 75;
var ctx11 = canvas11.getContext("2d");

var canvas12 = document.getElementById("member_C_fraction_symbol_first");
canvas12.width = 150, canvas12.height = 75;
var ctx12 = canvas12.getContext("2d");

var canvas13 = document.getElementById("member_C_fraction_symbol_second");
canvas13.width = 150, canvas13.height = 75;
var ctx13 = canvas13.getContext("2d");

var canvas14 = document.getElementById("member_C_fraction_symbol_third");
canvas14.width = 150, canvas14.height = 75;
var ctx14 = canvas14.getContext("2d");

var canvas15 = document.getElementById("member_A_fraction_graphic_first");
canvas15.width = 200, canvas15.height = 200;
var ctx15 = canvas15.getContext("2d");

var canvas16 = document.getElementById("member_A_fraction_graphic_second");
canvas16.width = 200, canvas16.height = 200;
var ctx16 = canvas16.getContext("2d");

var canvas17 = document.getElementById("member_A_fraction_graphic_third");
canvas17.width = 200, canvas17.height = 200;
var ctx17 = canvas17.getContext("2d");

var canvas18 = document.getElementById("member_B_fraction_graphic_first");
canvas18.width = 200, canvas18.height = 200;
var ctx18 = canvas18.getContext("2d");

var canvas19 = document.getElementById("member_B_fraction_graphic_second");
canvas19.width = 200, canvas19.height = 200;
var ctx19 = canvas19.getContext("2d");

var canvas20 = document.getElementById("member_B_fraction_graphic_third");
canvas20.width = 200, canvas20.height = 200;
var ctx20 = canvas20.getContext("2d");

var canvas21 = document.getElementById("member_C_fraction_graphic_first");
canvas21.width = 200, canvas21.height = 200;
var ctx21 = canvas21.getContext("2d");

var canvas22 = document.getElementById("member_C_fraction_graphic_second");
canvas22.width = 200, canvas22.height = 200;
var ctx22 = canvas22.getContext("2d");

var canvas23 = document.getElementById("member_C_fraction_graphic_third");
canvas23.width = 200, canvas23.height = 200;
var ctx23 = canvas23.getContext("2d");

/*var canvas24 = document.getElementById("record_answer");
canvas24.width = 1000, canvas24.height = 220;
var ctx24 = canvas24.getContext("2d");*/

var canvas25 ="", ctx25="";	//圖像物件
var canvas26 = "", ctx26="";
var canvas27="", ctx27="";
var canvas28="", ctx28="";
var canvas29="", ctx29="";
var canvas30="", ctx30="";
var canvas31="", ctx31="";
var canvas32="", ctx32="";
var canvas33="", ctx33="";

var canvas34 = document.getElementById("A_cloze1");
canvas34.width = 150, canvas34.height = 150;
var ctx34 = canvas34.getContext("2d");

var canvas35 = document.getElementById("A_cloze2");
canvas35.width = 150, canvas35.height = 150;
var ctx35 = canvas35.getContext("2d");

var canvas36 = document.getElementById("A_cloze3");
canvas36.width = 150, canvas36.height = 150;
var ctx36 = canvas36.getContext("2d");

var canvas37 = document.getElementById("A_symbol_panel");
canvas37.width = 630, canvas37.height = 120;
var ctx37 = canvas37.getContext("2d");

var canvas38 = document.getElementById("B_cloze1");
canvas38.width = 150, canvas38.height = 150;
var ctx38 = canvas38.getContext("2d");

var canvas39 = document.getElementById("B_cloze2");
canvas39.width = 150, canvas39.height = 150;
var ctx39 = canvas39.getContext("2d");

var canvas40 = document.getElementById("B_cloze3");
canvas40.width = 150, canvas40.height = 150;
var ctx40 = canvas40.getContext("2d");

var canvas41 = document.getElementById("B_symbol_panel");
canvas41.width = 630, canvas41.height = 120;
var ctx41 = canvas41.getContext("2d");

var canvas42 = document.getElementById("C_cloze1");
canvas42.width = 150, canvas42.height = 150;
var ctx42 = canvas42.getContext("2d");

var canvas43 = document.getElementById("C_cloze2");
canvas43.width = 150, canvas43.height = 150;
var ctx43 = canvas43.getContext("2d");

var canvas44 = document.getElementById("C_cloze3");
canvas44.width = 150, canvas44.height = 150;
var ctx44 = canvas44.getContext("2d");

var canvas45 = document.getElementById("C_symbol_panel");
canvas45.width = 630, canvas45.height = 120;
var ctx45 = canvas45.getContext("2d");

var canvas46 = document.getElementById("central_symbol_3");
canvas46.width = 100, canvas46.height = 60;
var ctx46 = canvas46.getContext("2d");

var canvas47 = document.getElementById("blank_3");
canvas47.width = 180, canvas47.height = 180;
var ctx47 = canvas47.getContext("2d");

var canvas48 ="", ctx48="";	//字符物件
var canvas49 = "", ctx49="";
var canvas50="", ctx50="";
var canvas51="", ctx51="";
var canvas52="", ctx52="";
var canvas53="", ctx53="";
var canvas54="", ctx54="";
var canvas55="", ctx55="";
var canvas56="", ctx56="";

var canvas57 = document.getElementById("fraction1");
canvas57.width = 100, canvas57.height = 70;
var ctx57 = canvas57.getContext("2d");

var canvas58 = document.getElementById("A_original1");
canvas58.width = 50, canvas58.height = 50;
var ctx58 = canvas58.getContext("2d");

var canvas59 = document.getElementById("A_original2");
canvas59.width = 50, canvas59.height = 50;
var ctx59 = canvas59.getContext("2d");

var canvas60 = document.getElementById("A_original3");
canvas60.width = 50, canvas60.height = 50;
var ctx60 = canvas60.getContext("2d");

var canvas61 = document.getElementById("B_original1");
canvas61.width = 50, canvas61.height = 50;
var ctx61 = canvas61.getContext("2d");

var canvas62 = document.getElementById("B_original2");
canvas62.width = 50, canvas62.height = 50;
var ctx62 = canvas62.getContext("2d");

var canvas63 = document.getElementById("B_original3");
canvas63.width = 50, canvas63.height = 50;
var ctx63 = canvas63.getContext("2d");

var canvas64 = document.getElementById("C_original1");
canvas64.width = 50, canvas64.height = 50;
var ctx64 = canvas64.getContext("2d");

var canvas65 = document.getElementById("C_original2");
canvas65.width = 50, canvas65.height = 50;
var ctx65 = canvas65.getContext("2d");

var canvas66 = document.getElementById("C_original3");
canvas66.width = 50, canvas66.height = 50;
var ctx66 = canvas66.getContext("2d");

var canvas67 = document.getElementById("Central_original_sym1");
canvas67.width = 100, canvas67.height = 60;
var ctx67 = canvas67.getContext("2d");

var canvas68 = document.getElementById("Central_original_sym2");
canvas68.width = 100, canvas68.height = 60;
var ctx68 = canvas68.getContext("2d");

var canvas69 = document.getElementById("Central_original_sym3");
canvas69.width = 100, canvas69.height = 60;
var ctx69 = canvas69.getContext("2d");

var canvas70 = document.getElementById("Central_original_gra1");
canvas70.width = 180, canvas70.height = 180;
var ctx70 = canvas70.getContext("2d");

var canvas71 = document.getElementById("Central_original_gra2");
canvas71.width = 180, canvas71.height = 180;
var ctx71 = canvas71.getContext("2d");

var canvas72 = document.getElementById("Central_original_gra3");
canvas72.width = 180, canvas72.height = 180;
var ctx72 = canvas72.getContext("2d");

var canvas73 = document.getElementById("fraction_gra");
canvas73.width = 180, canvas73.height = 180;
var ctx73 = canvas73.getContext("2d");

var canvas74 = document.getElementById("central_extendGra1");
canvas74.width = 180, canvas74.height = 180;
var ctx74 = canvas74.getContext("2d");

var canvas75 = document.getElementById("central_extendGra2");
canvas75.width = 180, canvas75.height = 180;
var ctx75 = canvas75.getContext("2d");

var canvas76 = document.getElementById("central_extendGra3");
canvas76.width = 180, canvas76.height = 180;
var ctx76 = canvas76.getContext("2d");

var canvas77 = document.getElementById("central_extendSym1");
canvas77.width = 150, canvas77.height = 60;
var ctx77 = canvas77.getContext("2d");

var canvas78 = document.getElementById("central_extendSym2");
canvas78.width = 150, canvas78.height = 60;
var ctx78 = canvas78.getContext("2d");

var canvas79 = document.getElementById("central_extendSym3");
canvas79.width = 150, canvas79.height = 60;
var ctx79 = canvas79.getContext("2d");
