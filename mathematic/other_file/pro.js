/**
 * @author wei
 */
/****/
var blockMap = new Object();//用來監控物件狀態
var blockArray = new Array();//儲存物件
var group_amo=0;	//群組單位
var operate_state = ""; //判斷目前操作面板能進行的功能,
var buffer = {x:[], y:[]}	//儲存移動時的點座標
var circle_range1 = {x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,x4:0,y4:0,x5:0,y5:0,x6:0,y6:0}  //儲存點的範圍(left)
var circle_range2 = {x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,x4:0,y4:0,x5:0,y5:0,x6:0,y6:0}  //儲存點的範圍(center)
var circle_range3 = {x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,x4:0,y4:0,x5:0,y5:0,x6:0,y6:0}  //儲存點的範圍(right)
var delete_range = {} //儲存刪除的範圍
var first_node ={x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,x4:0,y4:0,x5:0,y5:0,x6:0,y6:0}; 	//手勢的起點
var end_node = {x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,x4:0,y4:0,x5:0,y5:0,x6:0,y6:0};	//手勢的終點
var move = {x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,x4:0,y4:0,x5:0,y5:0,x6:0,y6:0};	//手勢移動時所產生的點


var cre = new create();	//宣告create類別
var draw = new draw();	//宣告draw類別 
var beginDegree = 0, EndDegree = 360 * Math.PI / 180;
var index = Math.ceil(Math.random() * counter_easy);	//題號
var o = document.body;
var dot1 = []; //儲存每個圓點座標(left面板)
var dot2 = []; //儲存每個圓點座標(center面板)
var dot3 = []; //儲存每個圓點座標(right面板)
/****/

/****/

var canvas4 = document.getElementById("mirror_scale_A");
canvas4.width = 60, canvas4.height = 650;
var ctx4 = canvas4.getContext("2d");

var canvas5 = document.getElementById("mirror_left_frame_A");
canvas5.width = 300, canvas5.height = 350;
var ctx5 = canvas5.getContext("2d");

var canvas6 = document.getElementById("mirror_right_frame_A");
canvas6.width = 300, canvas6.height = 350;
var ctx6 = canvas6.getContext("2d");

var canvas7 = document.getElementById("mirror_scale_B");
canvas7.width = 650, canvas7.height = 60;
var ctx7 = canvas7.getContext("2d");

var canvas8 = document.getElementById("mirror_left_frame_B");
canvas8.width = 350, canvas8.height = 300;
var ctx8 = canvas8.getContext("2d");

var canvas9 = document.getElementById("mirror_right_frame_B");
canvas9.width = 350, canvas9.height = 300;
var ctx9 = canvas9.getContext("2d");

var canvas10 = document.getElementById("mirror_scale_C");
canvas10.width = 60, canvas10.height = 650;
var ctx10 = canvas10.getContext("2d");

var canvas11 = document.getElementById("mirror_left_frame_C");
canvas11.width = 300, canvas11.height = 350;
var ctx11 = canvas11.getContext("2d");

var canvas12 = document.getElementById("mirror_right_frame_C");
canvas12.width = 300, canvas12.height = 350;
var ctx12 = canvas12.getContext("2d");
/****/

var distance ={x1:35, y1:55 ,x2:35 ,y2:90, x3:35, y3:125, x4:35, y4: 55, x5:35, y5:90}	//用來算左架和右架的圓點距離(中央區域)

var distance_mirror_left = {x1:250, y1:30 ,x2:160 ,y2:30, x3:80, y3:30, x4:250, y4: 30, x5:160, y5:30, x6:80, y6:30, x7:0, y7:0 } //用來算左架和右架的圓點距離(映射)	左邊
var distance_mirror_center = {x1:30, y1:50 ,x2:30 ,y2:130, x3:30, y3:220, x4:30, y4: 50, x5:30, y5:130, x6:30, y6:220, x7:0, y7:0 } //用來算左架和右架的圓點距離(映射)	  中間
var distance_mirror_right = {x1:50, y1:320 ,x2:130 ,y2:320, x3:220, y3:320, x4:50, y4: 320, x5:130, y5:320, x6:220, y6:320, x7:0, y7:0} //用來算左架和右架的圓點距離(映射)	  右邊

var distance_delete = {x1:250, y1:30, x2:30, y2:50, x3:50, y3:320, x4:150, y4:20, x5:20, y5:65, x6:50, y6:320, x7:120, y7:20, x8:20, y8:100, x9:80, y9:320}	//紀錄刪除線的座標 (目前只用到3)
 
var distance_group_left ={x1:[240], y1:[20], x2:[30], y2:[30], x3:[40], y3:[330], x4:[], y4:[], x5:[], y5:[], x6:[], y6:[], x7:[], y7:[], x8:[], y8:[], x9:[], y9:[]}	//紀錄群組線座標(左架)
var distance_group_right ={x1:[240], y1:[20], x2:[30], y2:[30], x3:[40], y3:[330], x4:[], y4:[], x5:[], y5:[], x6:[], y6:[], x7:[], y7:[], x8:[], y8:[], x9:[], y9:[]}	//紀錄群組線座標(右架)

var distance_group_length_left ={len1:[], len2:[], len3:[], len4:[], len5:[], len6:[], len7:[], len8:[], len9:[]}	//紀錄群組描繪長度(左架)
var distance_group_length_right ={len1:[], len2:[], len3:[], len4:[], len5:[], len6:[], len7:[], len8:[], len9:[]}	//紀錄群組描繪長度(右架)

var cal_list = $("#calculation_list");
var cal_result = []; //存放計算過程
var limit = 0; //設定算式上限
var operator1 = eval("easy_ques.q" + index + "[1]"), operator2 = eval("easy_ques.q" + index + "[3]");	//儲存算式運算子

var check_state = {	//一開始大家都沒有操作權
	A:["A_check","hidden","visible"],
	B:["B_check","hidden","visible"],
	C:["C_check","hidden","visible"]
}

document.getElementById(check_state.A[0]).style.visibility = check_state.A[1];
document.getElementById(check_state.B[0]).style.visibility = check_state.B[1];
document.getElementById(check_state.C[0]).style.visibility = check_state.C[1];

var left_frame = {
	first_circle : eval("easy_ques.q" + index + "[0]"),		//第一個位元的值
	
	second_circle : eval("easy_ques.q" + index + "[2]"),	//第二個位元的值
	second_circle_operator: eval("easy_ques.q" + index + "[1]"),	//運算子一
	
	third_circle :  eval("easy_ques.q" + index + "[4]"),	//第三個位元的值
	third_circle_operator: eval("easy_ques.q" + index + "[3]"),	//運算子二
	unknow : 1,	//未知位元
	delete_amount:0	,	//計算第一位元的消除量
	delete_amount2:0,	//計算第二位元的消除量
	delete_amount3:0,	//計算第三位元的消除量
	first_circle_group:[],	//第一位元的圈選個數
	second_circle_group:[],	//二位元的圈選個數
	third_circle_group:[],	//三位元的圈選個數
	radius:8,		//圓點半徑
	interval:20	//圓點間隔
}

var right_frame = {
	first_circle : eval("easy_ques.q" + index + "[5]"),	//第一個位元的值
	second_circle:0,	//第二個位元的值
	third_circle:0,	//第三個位元的值
	unknow : 0,	//未知位元
	delete_amount:0,	//計算第一位元的消除量
	delete_amount2:0,	//計算第二位元的消除量
	delete_amount3:0,	//計算第三位元的消除量
	first_circle_group:[],	//第一位元的圈選個數
	second_circle_group:[],	//二位元的圈選個數
	third_circle_group:[],	//三位元的圈選個數
	radius:8, //圓點半徑
	interval:20	//圓點間隔
}

var operate_state_change = {	//判斷正常狀態與操作狀態的圓點大小及距離
	A_radius:8,
	A_interval:20,
	A_square:20,
	
	B_radius:8,
	B_interval:20,
	B_square:20,
	
	C_radius:8,
	C_interval:20,
	C_square:20
}

/****/
window.onload = function(){	//網頁載入後, 將物件資料載入
var block0 = $("#A_check").get(0);
block0.id = "A_check";

var block1 = $("#B_check").get(0);
block1.id = "B_check";

var block2 = $("#C_check").get(0);
block2.id = "C_check"; 

var block3 = $("#mirror_left_frame_A").get(0);
block3.id = "mirror_left_frame_A";

var block4 = $("#mirror_right_frame_A").get(0);
block4.id = "mirror_right_frame_A";

var block5 = $("#mirror_left_frame_B").get(0);
block5.id = "mirror_left_frame_B";

var block6 = $("#mirror_right_frame_B").get(0);
block6.id = "mirror_right_frame_B";

var block7 = $("#mirror_left_frame_C").get(0);
block7.id = "mirror_left_frame_C";

var block8 = $("#mirror_right_frame_C").get(0);
block8.id = "mirror_right_frame_C";

var block9 = $("#member_A").get(0);
block9.id = "member_A";

var block10 = $("#member_B").get(0);
block10.id = "member_B";

var block11 = $("#member_C").get(0);
block11.id = "member_C";

var block12 = $("#select_panel_A").get(0);
block12.id ="select_panel_A";

var block13 = $("#select_panel_B").get(0);
block13.id ="select_panel_B";

var block14 = $("#select_panel_C").get(0);
block14.id ="select_panel_C";

for(var i =0; i<15; i++){
	blockArray[i] = eval("block" + i);
}

}

/****/


function mirror_scale_initial_A(){		/** 映射的天秤A**/
	ctx4.beginPath();
	ctx4.lineWidth = 5;
	ctx4.moveTo(50, 50);
	ctx4.lineTo(50,570);
	ctx4.moveTo(50,300);
	ctx4.lineTo(10,270);
	ctx4.lineTo(10,330);
	ctx4.closePath();
	ctx4.fill();
	ctx4.stroke();
}

function mirror_left_frame_A(){/** 映射的左架**/			
			var temp_x1 = distance_mirror_left.x1, temp_y1 = distance_mirror_left.y1;
			var temp_x2 = distance_mirror_left.x2, temp_y2 = distance_mirror_left.y2;
			var temp_x3 = distance_mirror_left.x3, temp_y3 = distance_mirror_left.y3;	//紀錄圓點起始座標
			
			var temp_del_x1 = distance_delete.x1, temp_del_y1 = distance_delete.y1;		//紀錄刪除線起始座標
	
			for (var i = 0; i < left_frame.first_circle; i++) {	//畫出第一個位元
				ctx5.beginPath();		//開始繪圖
				ctx5.arc(distance_mirror_left.x1, distance_mirror_left.y1, operate_state_change.A_radius, beginDegree, EndDegree, false);		//在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				ctx5.fillStyle = "rgba(0, 0, 0, 0.9)";		//rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				ctx5.fill();
				distance_mirror_left.y1 +=operate_state_change.A_interval;
			}		
			
			for(var i = 0; i<Math.abs(left_frame.delete_amount); i++){		//畫出刪除線
				draw.drawline(ctx5 ,distance_delete.x1+15, distance_delete.y1, distance_delete.x1-15, distance_delete.y1-5);
				distance_delete.y1 +=operate_state_change.A_interval;
				console.log(distance_delete.y1);
			}			
			
			if(left_frame.first_circle_group.length !=0){	//畫出群組線
				//draw.drawGroupLine(ctx5 ,235, 20, 30, 80);
				for(var i=0;i<distance_group_left.x1.length && i<distance_group_left.y1.length; i++){
					draw.drawGroupLine(ctx5 ,distance_group_left.x1[i]-10, distance_group_left.y1[i], 40, Math.abs(distance_group_length_left.len1[i]));	//draw, first_x, first_y, last_x, last_y
				}
			}
			
			for(var i =0; i<left_frame.unknow; i++){	//畫出未知位元
				ctx5.lineWidth = 2;
				ctx5.strokeRect(distance_mirror_left.x2-10,distance_mirror_left.y2, operate_state_change.A_square,operate_state_change.A_square);	
			}	

			if (operator2 == "+") {
				//left_frame.third_circle = eval("easy_ques.q" + index + "[4]");		//儲存第三個運算元(為正數情況下,藍點)
				for(var i=0;i<left_frame.third_circle;i++){
				 ctx5.beginPath();  //開始繪圖
				 ctx5.arc(distance_mirror_left.x3, distance_mirror_left.y3, operate_state_change.A_radius, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				 ctx5.fillStyle = "rgba(0, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				 ctx5.fill();
				 distance_mirror_left.y3 +=operate_state_change.A_interval;
			 }
		}

			if (operator2 == "-") {
				//left_frame.third_circle = eval("easy_ques.q" + index + "[4]");		//儲存第三個運算元(為負數情況下,紅點)
				
				for(var i=0;i<left_frame.third_circle + left_frame.delete_amount3;i++){
				 ctx5.beginPath();  //開始繪圖
				 ctx5.arc(distance_mirror_left.x3, distance_mirror_left.y3, operate_state_change.A_radius, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				 ctx5.fillStyle = "rgba(0, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				 ctx5.fill();
				 distance_mirror_left.y3 +=operate_state_change.A_interval;
				 draw.drawline(ctx5 ,distance_mirror_left.x3+10, distance_mirror_left.y3-40, distance_mirror_left.x3-10, distance_mirror_left.y3-5);
			 }
			
		}	
		
		circle_range1.x1 = distance_mirror_left.x1, circle_range1.x2 = distance_mirror_left.x2, circle_range1.x3 = distance_mirror_left.x3;	//最後一個點的終點座標
		circle_range1.y1 = distance_mirror_left.y1, circle_range1.y2 = distance_mirror_left.y2, circle_range1.y3 = distance_mirror_left.y3;
		
		distance_mirror_left.x1 = temp_x1, distance_mirror_left.y1=temp_y1, distance_mirror_left.x2 = temp_x2, distance_mirror_left.y2 = temp_y2;	//回復座標(圓點)
		distance_mirror_left.x3 = temp_x3, distance_mirror_left.y3 = temp_y3;
		
		distance_delete.x1 = temp_del_x1, distance_delete.y1 = temp_del_y1;	//回復座標(刪除線)
}

function mirror_right_frame_A(){/** 映射的右架**/
	//right_frame.circle = eval("easy_ques.q" + index + "[5]");
	var temp_x4 = distance_mirror_left.x4, temp_y4 = distance_mirror_left.y4;
	var temp_x5 = distance_mirror_left.x5, temp_y5 = distance_mirror_left.y5;
	var temp_x6 = distance_mirror_left.x6, temp_y6 = distance_mirror_left.y6;
	
	var temp_del_x1 = distance_delete.x1, temp_del_y1 = distance_delete.y1;		//紀錄刪除線起始座標
	
	for (var i = 0; i < right_frame.first_circle; i++) {	//4
		ctx6.beginPath();		//開始繪圖
		ctx6.arc(distance_mirror_left.x4, distance_mirror_left.y4, operate_state_change.A_radius, beginDegree, EndDegree, false);		//在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
		ctx6.fillStyle = "rgba(0, 0, 0, 0.9)";		//rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
		ctx6.fill();
		distance_mirror_left.y4 +=operate_state_change.A_interval;
	}
	
	for(var i = 0; i<Math.abs(right_frame.delete_amount); i++){		//畫出刪除線
		draw.drawline(ctx6 ,distance_delete.x1+10, distance_delete.y1, distance_delete.x1-10, distance_delete.y1-5);
		distance_delete.y1 +=operate_state_change.A_interval;
	}
	
	if(right_frame.first_circle_group.length !=0){	//當群組數不為空，畫出群組線(第一位元)
		for(var i=0;i<distance_group_right.x1.length && i<distance_group_right.y1.length; i++){
			draw.drawGroupLine(ctx6 ,distance_group_right.x1[i]-10, distance_group_right.y1[i], 40, Math.abs(distance_group_length_right.len1[i]));	//draw, first_x, first_y, last_x, last_y
		}				
	}
	
	for(var i =0; i<right_frame.unknow; i++){	//畫出未知位元  5
		if(cre.switchOperator(operator1) == "-"){
			ctx6.lineWidth = 2;
			draw.drawline(ctx6,distance_mirror_left.x5+20,distance_mirror_left.y5+10,distance_mirror_left.x5-20,distance_mirror_left.y5-5);
			ctx6.strokeRect(distance_mirror_left.x5-10,distance_mirror_left.y5-10,operate_state_change.A_square,operate_state_change.A_square);
		}
		
	}
	
	for(var i=0;i<right_frame.third_circle + right_frame.delete_amount3; i++){	//畫出移動過後的點 6
		ctx6.beginPath();  //開始繪圖
		ctx6.arc(distance_mirror_left.x6, distance_mirror_left.y6, operate_state_change.A_radius, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
		ctx6.fillStyle = "rgba(0, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
		ctx6.fill();
		distance_mirror_left.y6 +=operate_state_change.A_interval;
		draw.drawline(ctx6 ,distance_mirror_left.x6+10, distance_mirror_left.y6-40, distance_mirror_left.x6-10, distance_mirror_left.y6-5);
	}
	
	
	circle_range1.x4 = distance_mirror_left.x4, circle_range1.y4 = distance_mirror_left.y4;
	circle_range1.x5 = distance_mirror_left.x5, circle_range1.y5 = distance_mirror_left.y5;
	circle_range1.x6 = distance_mirror_left.x6, circle_range1.y6 = distance_mirror_left.y6;
	
	distance_delete.x1 = temp_del_x1, distance_delete.y1 = temp_del_y1;	//回復座標(刪除線)
	distance_mirror_left.x4 = temp_x4, distance_mirror_left.y4 = temp_y4;
	distance_mirror_left.x5 = temp_x5, distance_mirror_left.y5 = temp_y5;
	distance_mirror_left.x6 = temp_x6, distance_mirror_left.y6 = temp_y6;
}


function mirror_scale_initial_B(){		/** 映射的天秤B**/
	ctx7.beginPath();
	ctx7.lineWidth = 5;
	ctx7.moveTo(40, 5);
	ctx7.lineTo(600, 5);
	ctx7.moveTo(320,5);
	ctx7.lineTo(290,55);
	ctx7.lineTo(350,55);
	ctx7.closePath();
	ctx7.fill();
	ctx7.stroke();
}

function mirror_left_frame_B(){
	//left_frame.first_circle = eval("easy_ques.q" + index + "[0]");	//儲存第一個運算元	
			var temp_x1 = distance_mirror_center.x1, temp_y1 = distance_mirror_center.y1;
			var temp_x2 = distance_mirror_center.x2, temp_y2 = distance_mirror_center.y2;
			var temp_x3 = distance_mirror_center.x3, temp_y3 = distance_mirror_center.y3;	//紀錄圓點起始座標
			
			var temp_del_x2 = distance_delete.x2, temp_del_y2 = distance_delete.y2;		//紀錄刪除線起始座標
	
			for (var i = 0; i < left_frame.first_circle; i++) {
				ctx8.beginPath();		//開始繪圖
				ctx8.arc(distance_mirror_center.x1, distance_mirror_center.y1, operate_state_change.B_radius, beginDegree, EndDegree, false);		//在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				ctx8.fillStyle = "rgba(0, 0, 0, 0.9)";		//rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				ctx8.fill();
				distance_mirror_center.x1 +=operate_state_change.B_interval;
			}
			
			for(var i = 0; i<Math.abs(left_frame.delete_amount); i++){		//畫出刪除線
				draw.drawline(ctx8 ,distance_delete.x2+10, distance_delete.y2, distance_delete.x2-10, distance_delete.y2-5);
				distance_delete.x2 +=operate_state_change.B_interval;
			}
			
			if(left_frame.first_circle_group.length !=0){	//畫出群組線				
				for(var i=0;i<distance_group_left.x2.length && i<distance_group_left.y2.length; i++){
					draw.drawGroupLine(ctx8 ,distance_group_left.x2[i]-10, distance_group_left.y2[i], Math.abs(distance_group_length_left.len2[i]), 40);	//draw, first_x, first_y, last_x, last_y
				}
			}			
			
			for(var i = 0; i<left_frame.unknow; i++){//畫出未知位元
				ctx8.lineWidth = 2;
				ctx8.strokeRect(distance_mirror_center.x2,distance_mirror_center.y2-10,operate_state_change.B_square,operate_state_change.B_square);	
			}		
		

			if (operator2 == "+") {
				//left_frame.third_circle = eval("easy_ques.q" + index + "[4]");		//儲存第三個運算元(為正數情況下,藍點)
				for(var i=0;i<left_frame.third_circle;i++){
				 ctx8.beginPath();  //開始繪圖
				 ctx8.arc(distance_mirror_center.x3, distance_mirror_center.y3, operate_state_change.B_radius, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				 ctx8.fillStyle = "rgba(0, 0, 200, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				 ctx8.fill();
				 distance_mirror_center.x3 +=operate_state_change.B_interval;
			 }
			 
		}

			if (operator2 == "-") {
				//left_frame.third_circle = eval("easy_ques.q" + index + "[4]");		//儲存第三個運算元(為負數情況下,紅點)
				
				for(var i=0;i<left_frame.third_circle;i++){
				 ctx8.beginPath();  //開始繪圖
				 ctx8.arc(distance_mirror_center.x3, distance_mirror_center.y3, operate_state_change.B_radius, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				 ctx8.fillStyle = "rgba(0, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				 ctx8.fill();
				 distance_mirror_center.x3 +=operate_state_change.B_interval;
				 draw.drawline(ctx8 ,distance_mirror_center.x3-40, distance_mirror_center.y3-15, distance_mirror_center.x3-10, distance_mirror_center.y3+10);
			 }
			  
		}	
		
		circle_range2.x1 = distance_mirror_center.x1, circle_range2.x2 = distance_mirror_center.x2, circle_range2.x3 = distance_mirror_center.x3;
		circle_range2.y1 = distance_mirror_center.y1, circle_range2.y2 = distance_mirror_center.y2, circle_range2.y3 = distance_mirror_center.y3;
		
		distance_mirror_center.x1 = temp_x1, distance_mirror_center.y1=temp_y1, distance_mirror_center.x2 = temp_x2, distance_mirror_center.y2 = temp_y2;	
		distance_mirror_center.x3 = temp_x3, distance_mirror_center.y3 = temp_y3;
		   	
	   	distance_delete.x2 = temp_del_x2, distance_delete.y2 = temp_del_y2;
}

function mirror_right_frame_B(){
	//right_frame.circle = eval("easy_ques.q" + index + "[5]");	
	var temp_x4 = distance_mirror_center.x4, temp_y4 = distance_mirror_center.y4;
	var temp_x5 = distance_mirror_center.x5, temp_y5 = distance_mirror_center.y5;
	var temp_x6 = distance_mirror_center.x6, temp_y6 = distance_mirror_center.y6;
	
	var temp_del_x2 = distance_delete.x2, temp_del_y2 = distance_delete.y2;		//紀錄刪除線起始座標
	
	for (var i = 0; i < right_frame.first_circle; i++) {
		ctx9.beginPath();		//開始繪圖
		ctx9.arc(distance_mirror_center.x4, distance_mirror_center.y4, operate_state_change.B_radius, beginDegree, EndDegree, false);		//在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
		ctx9.fillStyle = "rgba(0, 0, 0, 0.9)";		//rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
		ctx9.fill();
		distance_mirror_center.x4 +=operate_state_change.B_interval;
	}
	
	for(var i =0; i<right_frame.unknow; i++){	//畫出未知位元  5
		if(cre.switchOperator(operator1) == "-"){
			ctx9.lineWidth = 2;
			draw.drawline(ctx9,distance_mirror_center.x5+20,distance_mirror_center.y5+10,distance_mirror_center.x5-20,distance_mirror_center.y5-5);
			ctx9.strokeRect(distance_mirror_center.x5-10,distance_mirror_center.y5-10,operate_state_change.B_square,operate_state_change.B_square);
		}
		
		if(cre.switchOperator(operator1) == "+"){
			ctx9.lineWidth = 2;
			ctx9.strokeRect(distance_mirror_center.x5-10,distance_mirror_center.y5-10,20,20);
		}			
		//distance_mirror_center.x5 +=25;
	}
	
	for(var i = 0; i<Math.abs(right_frame.delete_amount); i++){		//畫出刪除線
		draw.drawline(ctx9 ,distance_delete.x2+10, distance_delete.y2, distance_delete.x2-10, distance_delete.y2-5);
		distance_delete.x2 +=operate_state_change.B_interval;
	}
	
	if(right_frame.first_circle_group.length !=0){	//當群組數不為空，畫出群組線(第一位元)
				for(var i=0;i<distance_group_right.x2.length && i<distance_group_right.y2.length; i++){
					draw.drawGroupLine(ctx9 ,distance_group_right.x2[i]-10, distance_group_right.y2[i], Math.abs(distance_group_length_right.len2[i]), 40);	//draw, first_x, first_y, last_x, last_y
				}				
	}
	
	for(var i=0;i<right_frame.third_circle; i++){	//畫出移動過後的點 6
		ctx9.beginPath();  //開始繪圖
		ctx9.arc(distance_mirror_center.x6, distance_mirror_center.y6, operate_state_change.B_radius, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
		ctx9.fillStyle = "rgba(0, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
		ctx9.fill();
		distance_mirror_center.x6 +=operate_state_change.B_interval;
		draw.drawline(ctx9 ,distance_mirror_center.x6-40, distance_mirror_center.y6-15, distance_mirror_center.x6-10, distance_mirror_center.y6+10);
	}
	
	circle_range2.x4 = distance_mirror_center.x4, circle_range2.y4 = distance_mirror_center.y4;
	circle_range2.x5 = distance_mirror_center.x5, circle_range2.y5 = distance_mirror_center.y5;
	circle_range2.x6 = distance_mirror_center.x6, circle_range2.y6 = distance_mirror_center.y6;
	
	distance_mirror_center.x4 = temp_x4, distance_mirror_center.y4 = temp_y4;
	distance_mirror_center.x5 = temp_x5, distance_mirror_center.y5 = temp_y5;
	distance_mirror_center.x6 = temp_x6, distance_mirror_center.y6 = temp_y6;
	
	distance_delete.x2 = temp_del_x2, distance_delete.y2 = temp_del_y2;
}


function mirror_scale_initial_C(){		/** 映射的天秤C**/
	ctx10.beginPath();
	ctx10.lineWidth = 5;
	ctx10.moveTo(5,30);
	ctx10.lineTo(5,550);
	ctx10.moveTo(5,300);
	ctx10.lineTo(55,270);
	ctx10.lineTo(55,330);
	ctx10.closePath();
	ctx10.fill();
	ctx10.stroke();
}

function mirror_left_frame_C(){
	//left_frame.first_circle = eval("easy_ques.q" + index + "[0]");	//儲存第一個運算元	
			var temp_x1 = distance_mirror_right.x1, temp_y1 = distance_mirror_right.y1;
			var temp_x2 = distance_mirror_right.x2, temp_y2 = distance_mirror_right.y2;
			var temp_x3 = distance_mirror_right.x3, temp_y3 = distance_mirror_right.y3;	//紀錄圓點起始座標
			
			var temp_del_x3 = distance_delete.x3, temp_del_y3 = distance_delete.y3;		//紀錄刪除線起始座標
	
			for (var i = 0; i < left_frame.first_circle; i++) {
				ctx11.beginPath();		//開始繪圖
				ctx11.arc(distance_mirror_right.x1, distance_mirror_right.y1, operate_state_change.C_radius, beginDegree, EndDegree, false);		//在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				ctx11.fillStyle = "rgba(0, 0, 0, 0.9)";		//rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				ctx11.fill();
				distance_mirror_right.y1 -=operate_state_change.C_interval;
			}
			
			for(var i = 0; i<Math.abs(left_frame.delete_amount); i++){		//畫出刪除線
				draw.drawline(ctx11 ,distance_delete.x3+10, distance_delete.y3, distance_delete.x3-10, distance_delete.y3-5);
				distance_delete.y3 -=operate_state_change.C_interval;
			}	
			
			if(left_frame.first_circle_group.length !=0){	//當群組數不為空，畫出群組線(第一位元)
				for(var i=0;i<distance_group_left.x3.length && i<distance_group_left.y3.length; i++){
					draw.drawGroupLine(ctx11 ,distance_group_left.x3[i]-10, distance_group_left.y3[i], 40, distance_group_length_left.len3[i]);	//draw, first_x, first_y, last_x, last_y
				}				
			}
			
			for(var i = 0; i<left_frame.unknow; i++){
				ctx11.lineWidth = 2;
				ctx11.strokeRect(distance_mirror_right.x2-10,distance_mirror_right.y2-5,operate_state_change.C_square,operate_state_change.C_square);	//畫出未知位元
			}	

			if (operator2 == "+") {
			//	left_frame.third_circle = eval("easy_ques.q" + index + "[4]");		//儲存第三個運算元(為正數情況下,藍點)
				for(var i=0;i<left_frame.third_circle;i++){
				 ctx11.beginPath();  //開始繪圖
				 ctx11.arc(distance_mirror_right.x3, distance_mirror_right.y3, operate_state_change.C_radius, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				 ctx11.fillStyle = "rgba(0, 0, 200, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				 ctx11.fill();
				 distance_mirror_right.y3 -=operate_state_change.C_interval;
			 }
		}

			if (operator2 == "-") {
			//	left_frame.third_circle = eval("easy_ques.q" + index + "[4]");		//儲存第三個運算元(為負數情況下,紅點)
			
				for(var i=0;i<left_frame.third_circle;i++){
				 ctx11.beginPath();  //開始繪圖
				 ctx11.arc(distance_mirror_right.x3, distance_mirror_right.y3, operate_state_change.C_radius, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				 ctx11.fillStyle = "rgba(0, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				 ctx11.fill();
				 distance_mirror_right.y3 -=operate_state_change.C_interval;
				 draw.drawline(ctx11 ,distance_mirror_right.x3+5, distance_mirror_right.y3+10, distance_mirror_right.x3-10, distance_mirror_right.y3+45);
			 }
			
		}
		
		circle_range3.x1 = distance_mirror_right.x1, circle_range3.x2 = distance_mirror_right.x2, circle_range3.x3 = distance_mirror_right.x3;
		circle_range3.y1 = distance_mirror_right.y1, circle_range3.y2 = distance_mirror_right.y2, circle_range3.y3 = distance_mirror_right.y3;
		
		distance_mirror_right.x1 = temp_x1, distance_mirror_right.y1=temp_y1, distance_mirror_right.x2 = temp_x2, distance_mirror_right.y2 = temp_y2;	
		distance_mirror_right.x3 = temp_x3, distance_mirror_right.y3 = temp_y3;
				
		distance_delete.x3 = temp_del_x3, distance_delete.y3 =temp_del_y3;	//復原刪除線座標	
}

function mirror_right_frame_C(){
	//	right_frame.circle = eval("easy_ques.q" + index + "[5]");
	var temp_x4 = distance_mirror_right.x4, temp_y4 = distance_mirror_right.y4;
	var temp_x5 = distance_mirror_right.x5, temp_y5 = distance_mirror_right.y5;
	var temp_x6 = distance_mirror_right.x6, temp_y6 = distance_mirror_right.y6;
	
	var temp_del_x3= distance_delete.x3, temp_del_y3 = distance_delete.y3;		//紀錄刪除線起始座標
	
	for (var i = 0; i < right_frame.first_circle; i++) {
		ctx12.beginPath();		//開始繪圖
		ctx12.arc(distance_mirror_right.x4, distance_mirror_right.y4, operate_state_change.C_radius, beginDegree, EndDegree, false);		//在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
		ctx12.fillStyle = "rgba(0, 0, 0, 0.9)";		//rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
		ctx12.fill();
		distance_mirror_right.y4 -=operate_state_change.C_interval;
	}
	
	if(right_frame.first_circle_group.length !=0){	//當群組數不為空，畫出群組線(第一位元)
				for(var i=0;i<distance_group_right.x3.length && i<distance_group_right.y3.length; i++){
					draw.drawGroupLine(ctx12 ,distance_group_right.x3[i]-10, distance_group_right.y3[i], 40, distance_group_length_right.len3[i]);	//draw, first_x, first_y, last_x, last_y
				}				
	}
	
	for(var i =0; i<right_frame.unknow; i++){	//畫出未知位元  5
		if(cre.switchOperator(operator1) == "-"){
			ctx12.lineWidth = 2;
			draw.drawline(ctx12,distance_mirror_right.x5+20,distance_mirror_right.y5+10,distance_mirror_right.x5-20,distance_mirror_right.y5-5);
			ctx12.strokeRect(distance_mirror_right.x5-10,distance_mirror_right.y5-10,operate_state_change.C_square,operate_state_change.C_square);
		}
		
	}
	
	for(var i = 0; i<Math.abs(right_frame.delete_amount); i++){		//畫出刪除線
		draw.drawline(ctx12 ,distance_delete.x3+10, distance_delete.y3, distance_delete.x3-10, distance_delete.y3-5);
		distance_delete.y3 -=operate_state_change.C_interval;
	}
	
	for(var i=0;i<right_frame.third_circle; i++){	//畫出移動過後的點 6
		ctx12.beginPath();  //開始繪圖
		ctx12.arc(distance_mirror_right.x6, distance_mirror_right.y6, operate_state_change.C_radius, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
		ctx12.fillStyle = "rgba(0, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
		ctx12.fill();
		distance_mirror_right.y6 -=operate_state_change.C_interval;
		draw.drawline(ctx12 ,distance_mirror_right.x6+5, distance_mirror_right.y6+10, distance_mirror_right.x6-10, distance_mirror_right.y6+45);
	}
	
	circle_range3.x4 = distance_mirror_right.x4, circle_range3.y4 = distance_mirror_right.y4;
	circle_range3.x5 = distance_mirror_right.x5, circle_range3.y5 = distance_mirror_right.y5;
	circle_range3.x6 = distance_mirror_right.x6, circle_range3.y6 = distance_mirror_right.y6;
	
	distance_mirror_right.x4 = temp_x4, distance_mirror_right.y4 = temp_y4;	//點的座標
	distance_mirror_right.x5 = temp_x5, distance_mirror_right.y5 = temp_y5; //未知位元的座標
	distance_mirror_right.x6 = temp_x6, distance_mirror_right.y6 = temp_y6;	//移動過後的點座標
	
	distance_delete.x3 = temp_del_x3, distance_delete.y3 =temp_del_y3;	//復原刪除線座標
}


function initial_object_text(){
	cre.createText(430,150,"deleteSign" , 90, "delete","mycss/photo/delete.png");	//top, left, id, rotation, text ,src
	cre.createText(1450,800,"moveSign", 0, "move","mycss/photo/move.png");
	cre.createText(1180,2100,"groupSign",-90, "group","mycss/photo/group.png");
}

function drawArea(draw, node_x1, node_y1, node_x2, node_y2){	//顯示手動區域
	draw.lineWidth = 0.5;
	draw.strokeStyle = "black";
	draw.strokeRect(node_x1, node_y1, node_x2, node_y2);
}

function move_graphic(node_x1, node_y1, node_x2, node_y2, which_digit, which_frame, objX, objY){		//移動物件
	switch(which_frame){
		case "mirror_left_frame_B":
			if(which_digit == "first"){	//移動第一個位元						
				if(node_x2 <0){		
					var amount;
					if(node_x1 >circle_range2.x1+35){	
						var other_range = canvas8.width - circle_range2.x1;	//圓點外的區域
						var surplus_range = canvas8.width - node_x1;	//第一個點外的區域
						if(Math.abs(node_x2) + Math.abs(surplus_range)> other_range){
							var n1 = Math.abs(node_x2) + Math.abs(surplus_range), n2 = other_range;
							amount = Math.ceil((n1 - n2 - 35) / 45);							
						}						
					}else {
						amount = Math.ceil(node_x2 / 30);
					}					
					var tex = cre.createMoveText(Math.abs(amount),"●");	//計算有幾個物件會被傳送
					if(Math.abs(amount) <= left_frame.first_circle + left_frame.delete_amount && node_x2 !=0){	//當所剩的量足夠時，才進行移動					
					cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
					$("#"+amount).animate({"left":"1300"},"slow",function(){
							$("#"+amount).remove();
						}				
					);
						left_frame.first_circle -=Math.abs(amount);
						right_frame.third_circle += Math.abs(amount)	;	//紀錄移動過後的點(第一位元移動過後一定是負數)
					}
					
										
					console.log("amount:"+amount);
				}
				if(node_x2 >0){
					var amount;
					var other_range = canvas8.width- (canvas8.width - node_x1);	
					var surplus_range = canvas8.width - (canvas8.width - circle_range2.x1);	
					if(node_x1 > circle_range2.x1){
						amount = 0;
					}else if((node_x2 + other_range) > other_range){
						amount = Math.ceil((surplus_range - other_range-35) / 40);
					}							
					var tex = cre.createMoveText(Math.abs(amount),"●");	//計算有幾個物件會被傳送
					if(amount <= left_frame.first_circle + left_frame.delete_amount && node_x2 !=0){	//當所剩的量足夠時，才進行移動					
					cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
					$("#"+amount).animate({"left":"1300"},"slow",function(){
							$("#"+amount).remove();
						}				
					);
						left_frame.first_circle -=Math.abs(amount);
						right_frame.third_circle += Math.abs(amount)	;	
					}					
					console.log("amount:"+amount);
				}					
			}
			
			if(which_digit == "second"){	//移動第二個位元		(空格)
				if(node_x2<0){
					var amount;
					if(node_x1 >circle_range2.x2+35){	
						var other_range = canvas8.width - circle_range2.x2;	//圓點外的區域
						var surplus_range = canvas8.width - node_x1;	//第一個點外的區域
						if(Math.abs(node_x2) + Math.abs(surplus_range)> other_range){
							amount = 1;								
						}						
					}else {
						amount = 1;	
					}							
					var tex = cre.createMoveText(amount,"口");	//計算有幾個物件會被傳送
					if(amount <= left_frame.unknow && node_x2 !=0){	//當所剩的量足夠時，才進行移動
						cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
						$("#"+amount).animate({"left":"1300"},"slow",function(){
								$("#"+amount).remove();
							}				
						);
						left_frame.unknow = 0;
						right_frame.unknow = amount;
					}
					console.log("amount:"+amount);
				}			
				if(node_x2 >0){
					var amount;
					if(node_x1 > circle_range2.x2){
						amount = 0;
					}else{
						amount = 1;
					}
					var tex = cre.createMoveText(amount,"口");	//計算有幾個物件會被傳送
					if(amount <= left_frame.unknow && node_x2 !=0){	//當所剩的量足夠時，才進行移動
						cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
						$("#"+amount).animate({"left":"1300"},"slow",function(){
								$("#"+amount).remove();
							}				
						);
						left_frame.unknow = 0;
						right_frame.unknow = amount;
					}
					console.log("amount:"+amount);
				}
			}
			
			if(which_digit == "third"){	//移動第三個位元	
				var amount;				
				if(node_x2 <0){			
					if(node_x1 >circle_range2.x3+35){	
						var other_range = canvas8.width - circle_range2.x3;	//圓點外的區域
						var surplus_range = canvas8.width - node_x1;	//第一個點外的區域
						if(Math.abs(node_x2) + Math.abs(surplus_range)> other_range){
							var n1 = Math.abs(node_x2) + Math.abs(surplus_range), n2 = other_range;
							amount = Math.ceil((n1 - n2 - 35) / 45);							
						}						
					}else {
						amount = Math.ceil(node_x2 / 30);
					}		
							
					var tex = cre.createMoveText(Math.abs(amount),"＼");	//計算有幾個物件會被傳送					
					if(amount <=left_frame.third_circle && node_x2 !=0){	//當所剩的量足夠時，才進行移動
						cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
						$("#"+amount).animate({"left":"1300"},"slow",function(){
								$("#"+amount).remove();
							}				
						);
						left_frame.third_circle -= Math.abs(amount);
						right_frame.first_circle += Math.abs(amount);
					}
					console.log("amount:"+amount);
				}				
				if(node_x2 >0){
					var amount;
					var other_range = canvas8.width- (canvas8.width - node_x1);	
					var surplus_range = canvas8.width - (canvas8.width - circle_range2.x3);
					if(node_x1 > circle_range2.x3){
						amount = 0;
					}else if((node_x2 + other_range) > other_range){
						amount = Math.ceil((surplus_range -  other_range - 35) / 40);	
					}
									
					var tex = cre.createMoveText(Math.abs(amount),"＼");	//計算有幾個物件會被傳送				
					if(amount <=left_frame.third_circle && node_x2 !=0){	//當所剩的量足夠時，才進行移動
						cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
						$("#"+amount).animate({"left":"1300"},"slow",function(){
								$("#"+amount).remove();
							}				
						);
						left_frame.third_circle -=Math.abs(amount);
						right_frame.first_circle +=Math.abs(amount);
					}
					console.log("amount:"+amount);
				}								
			}						
			break;
		case "mirror_right_frame_B":
			if(which_digit == "first"){	//移動第一個位元					
				if(node_x2 <0){
					var amount;
					if(node_x1 >circle_range2.x4+35){	
						var other_range = canvas9.width - circle_range2.x4;	//圓點外的區域
						var surplus_range = canvas9.width - node_x1;	//第一個點外的區域
						if(Math.abs(node_x2) + Math.abs(surplus_range)> other_range){
							var n1 = Math.abs(node_x2) + Math.abs(surplus_range), n2 = other_range;
							amount = Math.ceil((n1 - n2 - 35) / 45);							
						}						
					}else {
						amount = Math.ceil(node_x2 / 30);
					}					
					var tex = cre.createMoveText(Math.abs(amount),"●");	//計算有幾個物件會被傳送	
					if(Math.abs(amount) <= (right_frame.first_circle + right_frame.delete_amount) && node_x2 !=0){	//當所剩的量足夠時，才進行移動					
						cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
						$("#"+amount).animate({"left":"1000"},"slow",function(){
							$("#"+amount).remove();
						}				
					);
						right_frame.first_circle -=Math.abs(amount);
						left_frame.third_circle +=Math.abs(amount);
					}
				}				
				if(node_x2 >0){
					var amount;
					if(node_x1 > circle_range2.x4){
						amount = 0;
					}else{
						amount = Math.ceil(node_x2 / 35);
					}					
					var tex = cre.createMoveText(Math.abs(amount),"●");	//計算有幾個物件會被傳送
					if(amount <= (right_frame.first_circle + right_frame.delete_amount) && node_x2 !=0){	//當所剩的量足夠時，才進行移動					
						cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
						$("#"+amount).animate({"left":"1000"},"slow",function(){
							$("#"+amount).remove();
						}				
					);
						right_frame.first_circle -=Math.abs(amount);
						left_frame.third_circle +=Math.abs(amount);
					}
				}										
			}
			
			if(which_digit == "second"){
				if(node_x2 <0){
					var amount;
					if(node_x1 >circle_range2.x5+35){	
						var other_range = canvas9.width - circle_range2.x5;	//圓點外的區域
						var surplus_range = canvas9.width - node_x1;	//第一個點外的區域
						if(Math.abs(node_x2) + Math.abs(surplus_range)> other_range){
							amount = 1;								
						}						
					}else {
						amount = 1;	
					}							
					var tex = cre.createMoveText(amount,"口");	//計算有幾個物件會被傳送
					if(amount <= left_frame.unknow && node_x2 !=0){	//當所剩的量足夠時，才進行移動
						cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
						$("#"+amount).animate({"left":"1300"},"slow",function(){
								$("#"+amount).remove();
							}				
						);
						right_frame.unknow = 0;
						left_frame.unknow = amount;
					}
					console.log("amount:"+amount);
				}
				if(node_x2 >0){
					var amount;
					if(node_x1 > circle_range2.x5){
						amount =0;
					}else{
						amount = 1;		
					}						
					var tex = cre.createMoveText(amount,"口");	//計算有幾個物件會被傳送
					if(amount <= right_frame.unknow && node_x2 !=0){	//當所剩的量足夠時，才進行移動
						cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
						$("#"+amount).animate({"left":"1100"},"slow",function(){
								$("#"+amount).remove();
							}				
						);
						right_frame.unknow = 0;
						left_frame.unknow = amount;
					}
					console.log("amount:"+amount);
				}				
			}
			
			if(which_digit == "third"){		//移動第三個位元		
				if(node_x2 <0){
					var amount;
					if(node_x1 >circle_range2.x6+35){
						var other_range = canvas9.width - circle_range2.x6;	//圓點外的區域
						var surplus_range = canvas9.width - node_x1;	//第一個點外的區域
						if(Math.abs(node_x2) + Math.abs(surplus_range)> other_range){
							var n1 = Math.abs(node_x2) + Math.abs(surplus_range), n2 = other_range;
							amount = Math.ceil((n1 - n2 - 35) / 45);							
						}						
					}else {
						amount = Math.ceil(node_x2 / 30);
					}							
					var tex = cre.createMoveText(Math.abs(amount),"＼");	//計算有幾個物件會被傳送					
					if(Math.abs(amount) <=right_frame.third_circle && node_x2 !=0){	//當所剩的量足夠時，才進行移動
						cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
						$("#"+amount).animate({"left":"1100"},"slow",function(){
								$("#"+amount).remove();
							}				
						);
						left_frame.first_circle += Math.abs(amount);
						right_frame.third_circle -= Math.abs(amount);
					}
					console.log("amount:"+amount);
				}				
				if(node_x2 >0){
					var amount;
					if(node_x1 > circle_range2.x6){
						amount = 0;
					}else{
						amount = Math.ceil(node_x2 / 35);		
					}								
					var tex = cre.createMoveText(Math.abs(amount),"＼");	//計算有幾個物件會被傳送				
					if(amount <=right_frame.third_circle && node_x2 !=0){	//當所剩的量足夠時，才進行移動
						cre.createDIV(tex, objY, objX, amount);	//text, top, left, id
						$("#"+amount).animate({"left":"1100"},"slow",function(){
								$("#"+amount).remove();
							}				
						);
						left_frame.first_circle +=Math.abs(amount);
						right_frame.third_circle -=Math.abs(amount);
					}
					console.log("amount:"+amount);
				}
			}			
			break;
	}
}

function delete_graphic(node_x1, node_y1, node_x2, node_y2, which_digit ,which_frame){	//消除物件
	switch(which_frame){
		case "mirror_left_frame_A":
			if(which_digit == "first"){	//第一位元的刪除範圍
				if(node_y2 >0){
					var other_range = canvas5.height - (canvas5.height - node_y1);	
					var surplus_range = canvas5.height - (canvas5.height - circle_range1.y1);		
					if(node_y1 > circle_range1.y4+35){
						left_frame.delete_amount -=0;
					}else if((node_y2 + other_range)>surplus_range ){
						left_frame.delete_amount -= Math.ceil((surplus_range - other_range-35) / 35);						
					}else{
						left_frame.delete_amount -= Math.ceil(node_y2 / 35);
					}					
					if(Math.abs(left_frame.delete_amount) > left_frame.first_circle){
						left_frame.delete_amount = 0 - left_frame.first_circle;
					}
				}				
				if(node_y2 <0){
					var other_range = canvas5.height - circle_range1.y1;	//圓點外的區域
					var surplus_range = canvas5.height - node_y1;	//第一個點外的區域
					if(node_y1 >circle_range1.y1+35){							
						if(Math.abs(node_y2) + Math.abs(surplus_range)> other_range){
							var n1 = Math.abs(node_y2) + Math.abs(surplus_range), n2 = other_range;
							left_frame.delete_amount -= Math.ceil((n1 - n2 - 35) / 45);							
						}						
					}else {
						left_frame.delete_amount -= Math.ceil(node_y2 / 30);
					}
					//left_frame.delete_amount  += Math.ceil(node_y2 / 40);
					if(Math.abs(left_frame.delete_amount) > left_frame.first_circle){
						left_frame.delete_amount = 0 - left_frame.first_circle;
					}
				}					
			}
			
		if(which_digit == "third"){	//第三位元的刪除範圍
				if(node_y2 >0){
					var other_range = canvas5.height - (canvas5.height - node_y1);	
					var surplus_range = canvas5.height - (canvas5.height - circle_range1.y3);		
					if(node_y1 > circle_range1.y3){
						left_frame.delete_amount3 -= 0;
					}else if((node_y2 + other_range)>surplus_range ){
						
						left_frame.delete_amount3 -= Math.ceil((surplus_range - other_range-35) / 35);
					}else{
						left_frame.delete_amount3 -= Math.ceil(node_y2 / 35);
					}
					if(Math.abs(left_frame.delete_amount3) > left_frame.third_circle){
						left_frame.delete_amount3 = 0 - left_frame.third_circle;
					}										
					console.log("扣除量:"+left_frame.delete_amount3);
				}
				if(node_y2 <0){
					if(node_y1 >circle_range1.y3+35){
						var other_range = canvas5.height - circle_range1.y3;	//圓點外的區域
						var surplus_range = canvas5.height - node_y1;	//第一個點外的區域
						if(Math.abs(node_y2) + Math.abs(surplus_range)> other_range){
							var n1 = Math.abs(node_y2) + Math.abs(surplus_range), n2 = other_range;
							left_frame.delete_amount3 -= Math.abs(Math.ceil((n1 - n2 - 35) / 45));							
						}						
					}else {
						left_frame.delete_amount3 -= Math.abs(Math.ceil(node_y2 / 30));
					}
					console.log("扣除量:"+left_frame.delete_amount3);					
				}
			}	
			break;
		case "mirror_right_frame_A":
			if(which_digit == "first"){	//第一位元的刪除範圍
				if(node_y2 >0){
					var other_range = canvas6.height - (canvas6.height - node_y1);	
					var surplus_range = canvas6.height - (canvas6.height - circle_range1.y4);	
					if(node_y1 > circle_range1.y4){
						right_frame.delete_amount -=0;
					}else if((node_y2 + other_range)>surplus_range){						
						right_frame.delete_amount -= Math.ceil((surplus_range - other_range-35) / 35);
					}else{
						right_frame.delete_amount -= Math.ceil(node_y2 / 35);
					}
					if(Math.abs(right_frame.delete_amount) > right_frame.first_circle){
						right_frame.delete_amount = 0 - right_frame.first_circle;
					}
				}
				
				if(node_y2 <0){
					if(node_y1 >circle_range1.y4+35){	
						var other_range = canvas6.height - circle_range1.y4;	//圓點外的區域
						var surplus_range = canvas6.height - node_y1;	//第一個點外的區域
						if(Math.abs(node_y2) + Math.abs(surplus_range)> other_range){
							var n1 = Math.abs(node_y2) + Math.abs(surplus_range), n2 = other_range;
							right_frame.delete_amount -= Math.ceil((n1 - n2 - 35) / 45);							
						}						
					}else {
						right_frame.delete_amount -= Math.ceil(node_y2 / 30);
					}										
					//right_frame.delete_amount += Math.ceil(node_y2 / 35);
					if(Math.abs(right_frame.delete_amount) > right_frame.first_circle){
						right_frame.delete_amount = 0 - right_frame.first_circle;
					}
				}					
			}
			if(which_digit =="third"){
				if(node_y2 >0){
					var other_range = canvas6.height - (canvas6.height - node_y1);	
					var surplus_range = canvas6.height - (canvas6.height - circle_range1.y6);	
					if(node_y1 > circle_range1.x6){
						right_frame.delete_amount3 -= 0;
					}else if((node_y2 + other_range)>surplus_range){						
						right_frame.delete_amount3 -= Math.ceil((surplus_range - other_range-35) / 35);
					}else{
						right_frame.delete_amount3 -= Math.ceil(node_y2 / 35);
					}
					
					if(right_frame.delete_amount3 > right_frame.third_circle){
						right_frame.delete_amount3 = 0 - right_frame.third_circle;
					}
				}
				if(node_y2 <0){
					if(node_y1 >circle_range1.y6+35){
						var other_range = canvas6.height - circle_range1.y6;	//圓點外的區域
						var surplus_range = canvas6.height - node_y1;	//第一個點外的區域
						if(Math.abs(node_y2) + Math.abs(surplus_range)> other_range){
							var n1 = Math.abs(node_y2) + Math.abs(surplus_range), n2 = other_range;
							right_frame.delete_amount3 -= Math.abs(Math.ceil((n1 - n2 - 35) / 45));							
						}						
					}else {
						right_frame.delete_amount3 -= Math.abs(Math.ceil(node_y2 / 30));
					}										
					//right_frame.third_circle += Math.ceil(node_y2 / 35);
				}
			}
			break;
	}	
}

function group_graphic(node_x1, node_y1, node_x2, node_y2, which_frame, which_digit){	//群組物件
	switch(which_frame){
		case "mirror_left_frame_C":			
			var amount;
			if(node_y2 >0){
				if(node_y1 < circle_range3.y1){
					var other_range = canvas11.height - (canvas11.height - circle_range3.y1);	//圓點外的區域
					var surplus_range = canvas11.height - (canvas11.height - node_y1);	//第一個點外的區域
					if(Math.abs(node_y2) + Math.abs(surplus_range)> other_range){
						var n1 = Math.abs(node_y2) + Math.abs(surplus_range), n2 = other_range;
						var length1 = left_frame.first_circle_group.length, length2 = distance_group_left.y3.length-1, length3 = distance_group_length_left.len3.length;
						amount = Math.abs(Math.ceil((n1 - n2 - 35) / 35)); 
						left_frame.first_circle_group.push(amount);	//紀錄群組數量、每個群組個數
						distance_group_length_left.len3.push(0 - (left_frame.first_circle_group[length1] * 35 - 8)); 	//紀錄新的群族線長度
						distance_group_left.y3.push(distance_group_left.y3[length2] + distance_group_length_left.len3[length3]-5);	//紀錄下一個群組線Y座標
						distance_group_left.x3.push(40);	//紀錄群組線X座標
						
						var length4 = left_frame.first_circle_group.length-1, length5 = distance_group_left.y1.length-1, length6 = distance_group_length_left.len1.length;	
						distance_group_length_left.len1.push(left_frame.first_circle_group[length4] * 20 ); 	
						distance_group_left.y1.push(distance_group_left.y1[length5] + distance_group_length_left.len1[length6]-5);	
						distance_group_left.x1.push(240);	//紀錄群組線X座標
						
						var length7 = left_frame.first_circle_group.length-1, length8 = distance_group_left.x2.length-1, length9 = distance_group_length_left.len2.length;
						distance_group_length_left.len2.push(left_frame.first_circle_group[length7] * 20 ); 	
						distance_group_left.x2.push(distance_group_left.x2[length8] + distance_group_length_left.len2[length9]);	
						distance_group_left.y2.push(30);	//紀錄群組線X座標
					}					
				}else{
					var length1 = left_frame.first_circle_group.length, length2 = distance_group_left.y3.length-1, length3 = distance_group_length_left.len3.length;
					amount = Math.ceil(Math.abs(node_y2) / 45);
					left_frame.first_circle_group.push(amount);
					distance_group_length_left.len3.push(0 - (left_frame.first_circle_group[length1] * 35 - 8)); 	//紀錄群族線長度
					distance_group_left.y3.push(distance_group_left.y3[length2] + distance_group_length_left.len3[length3]-5);	//紀錄群組線Y座標
					distance_group_left.x3.push(40);	//紀錄群組線X座標
					
					var length4 = left_frame.first_circle_group.length-1, length5 = distance_group_left.y1.length-1, length6 = distance_group_length_left.len1.length;
					distance_group_length_left.len1.push(left_frame.first_circle_group[length4] * 20 ); 	
					distance_group_left.y1.push(distance_group_left.y1[length5] + distance_group_length_left.len1[length6]-5);	
					distance_group_left.x1.push(240);	//紀錄群組線X座標
						
					var length7 = left_frame.first_circle_group.length-1, length8 = distance_group_left.y2.length-1, length9 = distance_group_length_left.len2.length;
					distance_group_length_left.len2.push(left_frame.first_circle_group[length7] * 20); 	
					distance_group_left.x2.push(distance_group_left.x2[length8] + distance_group_length_left.len2[length9]);	
					distance_group_left.y2.push(30);	
					
				}
				
		/*		if(amount > left_frame.first_circle){
					amount = left_frame.first_circle;
					distance_group_length_left.len3.push(0 - (left_frame.first_circle_group * 35 - 10)); 
				}*/
				console.log(amount);
			}
			
			if(node_y2 <0){
				if(node_y1 > distance_mirror_right.y1 - (left_frame.first_circle * operate_state_change.C_interval) +35){
					var length1 = left_frame.first_circle_group.length, length2 = distance_group_left.y3.length-1, length3 = distance_group_length_left.len3.length;
					amount = Math.abs(Math.ceil(node_y2 / 35));
					left_frame.first_circle_group.push(amount);
					distance_group_length_left.len3.push(0 - (left_frame.first_circle_group[length1] * 35 - 10)); 	//紀錄群族線長度
					distance_group_left.y3.push(distance_group_left.y3[length2] + distance_group_length_left.len3[length3]-5);	//紀錄群組線Y座標
					distance_group_left.x3.push(40);	//紀錄群組線X座標
					
					var length4 = left_frame.first_circle_group.length-1, length5 = distance_group_left.y1.length-1, length6 = distance_group_length_left.len1.length;
					distance_group_length_left.len1.push(left_frame.first_circle_group[length4] * 20 ); 	
					distance_group_left.y1.push(distance_group_left.y1[length5] + distance_group_length_left.len1[length6]-5);	
					distance_group_left.x1.push(240);	//紀錄群組線X座標
						
					var length7 = left_frame.first_circle_group.length-1, length8 = distance_group_left.y2.length-1, length9 = distance_group_length_left.len2.length;
					distance_group_length_left.len2.push(left_frame.first_circle_group[length7] * 20); 	
					distance_group_left.x2.push(distance_group_left.x2[length8] + distance_group_length_left.len2[length9]);	
					distance_group_left.y2.push(30);
					
					console.log(amount);
				}
			}
			break;
			
		case "mirror_right_frame_C":			
			var amount;
			if(node_y2 >0){
				if(node_y1 < circle_range3.y4){
					var other_range = canvas12.height - (canvas12.height - circle_range3.y4);	//圓點外的區域
					var surplus_range = canvas12.height - (canvas12.height - node_y1);	//第一個點外的區域
					if(Math.abs(node_y2) + Math.abs(surplus_range)> other_range){
						var n1 = Math.abs(node_y2) + Math.abs(surplus_range), n2 = other_range;
						var length1 = right_frame.first_circle_group.length, length2 = distance_group_right.y3.length-1, length3 = distance_group_length_right.len3.length;
						amount = Math.abs(Math.ceil((n1 - n2 - 35) / 35)); 
						right_frame.first_circle_group.push(amount);	//紀錄群組數量、每個群組個數
						distance_group_length_right.len3.push(0 - (right_frame.first_circle_group[length1] * 35 - 10)); 	//紀錄群族線長度
						distance_group_right.y3.push(distance_group_right.y3[length2] + distance_group_length_right.len3[length3]-5);	//紀錄群組線Y座標
						distance_group_right.x3.push(40);	//紀錄群組線X座標
						
						var length4 = right_frame.first_circle_group.length-1, length5 = distance_group_right.y1.length-1, length6 = distance_group_length_right.len1.length;
						distance_group_length_right.len1.push(right_frame.first_circle_group[length4] * 20 +20); 	
						distance_group_right.y1.push(distance_group_right.y1[length5] + distance_group_length_right.len1[length6]-5);	
						distance_group_right.x1.push(240);	//紀錄群組線X座標
						
						var length7 = right_frame.first_circle_group.length-1, length8 = distance_group_right.y2.length-1, length9 = distance_group_length_right.len2.length;
						distance_group_length_right.len2.push(right_frame.first_circle_group[length7] * 20); 	
						distance_group_right.x2.push(distance_group_right.x2[length8] + distance_group_length_right.len2[length9]);	
						distance_group_right.y2.push(30);
					}					
				}else{
					var length1 = right_frame.first_circle_group.length, length2 = distance_group_right.y3.length-1, length3 = distance_group_length_right.len3.length;
					amount = Math.ceil(Math.abs(node_y2) / 45);
					right_frame.first_circle_group.push(amount);
					distance_group_length_right.len3.push(0 - (right_frame.first_circle_group[length1] * 35 - 10)); 	//紀錄群族線長度
					distance_group_right.y3.push(distance_group_right.y3[length2] + distance_group_length_right.len3[length3]-5);	//紀錄群組線Y座標
					distance_group_right.x3.push(40);	//紀錄群組線X座標
					
					var length4 = right_frame.first_circle_group.length-1, length5 = distance_group_right.y1.length-1, length6 = distance_group_length_right.len1.length;
					distance_group_length_right.len1.push(right_frame.first_circle_group[length4] * 20 ); 	
					distance_group_right.y1.push(distance_group_right.y1[length5] + distance_group_length_right.len1[length6]-5);	
					distance_group_right.x1.push(240);	//紀錄群組線X座標
						
					var length7 = right_frame.first_circle_group.length-1, length8 = distance_group_right.y2.length-1, length9 = distance_group_length_right.len2.length;
					distance_group_length_right.len2.push(right_frame.first_circle_group[length7] * 20); 	
					distance_group_right.x2.push(distance_group_right.x2[length8] + distance_group_length_right.len2[length9]);	
					distance_group_right.y2.push(30);
					
				}
				
				if(amount > right_frame.first_circle){
					amount = left_frame.first_circle;
					distance_group_length_left.len3.push(0 - (left_frame.first_circle_group * 35 - 10)); 
				}
				console.log(amount);
			}
			
			if(node_y2 <0){
				if(node_y1 > distance_mirror_right.y4 - (right_frame.first_circle * operate_state_change.C_interval) +35){
					var length1 = right_frame.first_circle_group.length, length2 = distance_group_right.y3.length-1, length3 = distance_group_length_right.len3.length;
					amount = Math.abs(Math.ceil(node_y2 / 30));
					right_frame.first_circle_group.push(amount);
					distance_group_length_right.len3.push(0 - (right_frame.first_circle_group[length1] * 35 - 10)); 	//紀錄群族線長度
					distance_group_right.y3.push(distance_group_right.y3[length2] + distance_group_length_right.len3[length3]-5);	//紀錄群組線Y座標
					distance_group_right.x3.push(40);	//紀錄群組線X座標
					
					var length4 = right_frame.first_circle_group.length-1, length5 = distance_group_right.y1.length-1, length6 = distance_group_length_right.len1.length;
					distance_group_length_right.len1.push(right_frame.first_circle_group[length4] * 20 ); 	
					distance_group_right.y1.push(distance_group_right.y1[length5] + distance_group_length_right.len1[length6]-5);	
					distance_group_right.x1.push(240);	//紀錄群組線X座標
						
					var length7 = right_frame.first_circle_group.length-1, length8 = distance_group_right.y2.length-1, length9 = distance_group_length_right.len2.length;
					distance_group_length_right.len2.push(right_frame.first_circle_group[length7] * 20); 	
					distance_group_right.x2.push(distance_group_right.x2[length8] + distance_group_length_right.len2[length9]);	
					distance_group_right.y2.push(30);
					
					console.log(amount);
				}
			}
			break;
	}
}



function touchstart(event) {	
	event.changedTouches = event.targetTouches;	
	//console.log(["translate(", event.changedTouches[0].pageX, "px, ", event.changedTouches[0].pageY, "px)"].join(""));
		
	if(event.changedTouches.length>0){
		for(var i=0; i<blockArray.length; i++){
			for(var j=0; j<event.changedTouches.length; j++){	//判斷哪個物件
				if(event.changedTouches[j].target.id == blockArray[i].id){	//被哪隻手指點到
					switch(blockArray[i].id){	//不同物件id做不同處理
						case "A_check":
							document.getElementById(check_state.A[0]).style.visibility = check_state.A[1];
							document.getElementById(check_state.B[0]).style.visibility = check_state.B[1];
							document.getElementById(check_state.C[0]).style.visibility = check_state.C[1];
							document.getElementById("select_panel_A").style.visibility = "visible";									
							operate_state = "";
							cre.check_operate(blockArray[i].id);
							break;
						case "B_check":
							document.getElementById(check_state.A[0]).style.visibility = check_state.A[1];
							document.getElementById(check_state.B[0]).style.visibility = check_state.B[1];
							document.getElementById(check_state.C[0]).style.visibility = check_state.C[1];				
							document.getElementById("select_panel_B").style.visibility = "visible";	
							operate_state = "";
							cre.check_operate(blockArray[i].id);
							break;
						case "C_check":
							document.getElementById(check_state.A[0]).style.visibility = check_state.A[1];
							document.getElementById(check_state.B[0]).style.visibility = check_state.B[1];
							document.getElementById(check_state.C[0]).style.visibility = check_state.C[1];	
							document.getElementById("select_panel_C").style.visibility = "visible";												
							operate_state = "";		
							cre.check_operate(blockArray[i].id);
							break;
						case "mirror_left_frame_A"://1
							if(operate_state == "delete"){
								//do something
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								first_node.x1 = event.changedTouches[j].pageX - $("#mirror_left_frame_A").offset().left , first_node.y1 = event.changedTouches[j].pageY - $("#mirror_left_frame_A").offset().top ;																
								move.x1 = 0 - event.changedTouches[j].pageX, move.y1 = 0 - event.changedTouches[j].pageY;							
								console.log("first_node.x1:"+first_node.x1);
							}						
							break;
						case "mirror_right_frame_A"://2
							//do something
							blockArray[i].identifier = event.changedTouches[j].identifier;
							blockMap[blockArray[i].identifier] = blockArray[i];
							first_node.x2 = event.changedTouches[j].pageX - $("#mirror_right_frame_A").offset().left , first_node.y2 = event.changedTouches[j].pageY - $("#mirror_right_frame_A").offset().top ;																
							move.x2 = 0 - event.changedTouches[j].pageX, move.y2 = 0 - event.changedTouches[j].pageY;							
							console.log("first_node.x2:"+first_node.x2);
							break;
						case "mirror_left_frame_B"://3
							//do something
							if(operate_state == "move"){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								first_node.x3 = event.changedTouches[j].pageX - $("#mirror_left_frame_B").offset().left , first_node.y3 = event.changedTouches[j].pageY - $("#mirror_left_frame_B").offset().top ;																
								move.x3 = 0 - event.changedTouches[j].pageX, move.y3 = 0 - event.changedTouches[j].pageY;							
								console.log("first_node.x3:"+first_node.x3);
							}
							break;
						case "mirror_right_frame_B"://4
							//do something
							if(operate_state == "move"){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								first_node.x4 = event.changedTouches[j].pageX - $("#mirror_right_frame_B").offset().left , first_node.y4 = event.changedTouches[j].pageY - $("#mirror_right_frame_B").offset().top ;																
								move.x4 = 0 - event.changedTouches[j].pageX, move.y4 = 0 - event.changedTouches[j].pageY;							
								console.log("first_node.x4:"+first_node.x4);
							}
							break;
						case "mirror_left_frame_C"://5
							//do something
							if(operate_state == "group"){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								first_node.x5 = event.changedTouches[j].pageX - $("#mirror_left_frame_C").offset().left , first_node.y5 = event.changedTouches[j].pageY - $("#mirror_left_frame_C").offset().top ;																
								move.x5 = 0 - event.changedTouches[j].pageX, move.y5 = 0 - event.changedTouches[j].pageY;							
								console.log("first_node.y5:"+first_node.y5 + " first_node.x5:"+first_node.x5);
							}
							break;
						case "mirror_right_frame_C"://6
							//do something
							if(operate_state == "group"){
								blockArray[i].identifier = event.changedTouches[j].identifier;
								blockMap[blockArray[i].identifier] = blockArray[i];
								first_node.x6 = event.changedTouches[j].pageX - $("#mirror_right_frame_C").offset().left , first_node.y6 = event.changedTouches[j].pageY - $("#mirror_right_frame_C").offset().top ;																
								move.x6 = 0 - event.changedTouches[j].pageX, move.y6 = 0 - event.changedTouches[j].pageY;							
								console.log("first_node.y6:"+first_node.y6+ " first_node.x6:"+first_node.x6);
							}
							break;
						case "select_panel_A":
							if(operate_state == ""){
								operate_state = "delete";
								cre.select_operate(blockArray[i].id);
								document.getElementById(check_state.A[0]).style.visibility = check_state.A[2];
								document.getElementById("select_panel_A").style.visibility = "hidden";
							}							
							break;
						case "select_panel_B":
							if(operate_state == ""){
								operate_state = "move";
								cre.select_operate(blockArray[i].id);
								document.getElementById(check_state.B[0]).style.visibility = check_state.B[2];
								document.getElementById("select_panel_B").style.visibility = "hidden";
							}
							
							break;
						case "select_panel_C":
							if(operate_state == ""){
								operate_state = "group";
								cre.select_operate(blockArray[i].id);
								document.getElementById(check_state.C[0]).style.visibility = check_state.C[2];
								document.getElementById("select_panel_C").style.visibility = "hidden";
							}
							
							break;
					}				
				}
			}
		}		
		
	}
	event.preventDefault();
}

function touchmove(event) {
	event.changedTouches = event.targetTouches;
	for(var i = 0; i < event.changedTouches.length; i++){
		var block = blockMap[event.changedTouches[i].identifier];
		
		if(block){
			if(block.id =="mirror_left_frame_A" && operate_state =="delete"){	//1
				end_node.x1 = move.x1 + event.changedTouches[i].pageX, end_node.y1 = move.y1+ event.changedTouches[i].pageY;		
				buffer.x.push(end_node.x1), buffer.y.push(end_node.y1);	 	
				
				for(var i = 0; i<buffer.x.length && i<buffer.y.length; i++){
					drawArea(ctx5,first_node.x1, first_node.y1, end_node.x1, end_node.y1);
					ctx5.clearRect(first_node.x1 ,first_node.y1, buffer.x[i], buffer.y[i]);
					mirror_left_frame_A();
				}
				console.log("end_node.y1:"+end_node.y1 +" end_node.x1:"+end_node.x1);	
				//console.log("first_node.y1:"+first_node.y1 +" first_node.x1:"+first_node.x1);
			}
			
			if(block.id =="mirror_right_frame_A" && operate_state =="delete"){//2
				//do something
				end_node.x2 = move.x2 + event.changedTouches[i].pageX, end_node.y2 = move.y2+ event.changedTouches[i].pageY;		
				buffer.x.push(end_node.x2), buffer.y.push(end_node.y2);
				
				for(var i = 0; i<buffer.x.length && i<buffer.y.length; i++){
					drawArea(ctx6,first_node.x2, first_node.y2, end_node.x2, end_node.y2);
					ctx6.clearRect(first_node.x2 ,first_node.y2, buffer.x[i], buffer.y[i]);
					mirror_right_frame_A();
				}
				console.log("end_node.y2:"+end_node.y2);	
				//console.log("first_node.y2:"+first_node.y2 +" first_node.x2:"+first_node.x2);
			}
			
			if(block.id =="mirror_left_frame_B" && operate_state =="move"){//3
				//do something
				end_node.x3 = move.x3 + event.changedTouches[i].pageX, end_node.y3 = move.y3 + event.changedTouches[i].pageY;		
				buffer.x.push(end_node.x3), buffer.y.push(end_node.y3);	 	
				
				for(var i = 0; i<buffer.x.length && i<buffer.y.length; i++){
					drawArea(ctx8,first_node.x3, first_node.y3, end_node.x3, end_node.y3);
					ctx8.clearRect(first_node.x3 ,first_node.y3, buffer.x[i], buffer.y[i]);
					mirror_left_frame_B();
				}	
				console.log("end_node.x3:"+end_node.x3 +" end_node.y3:"+end_node.y3);
				//console.log("first_node.y3:"+first_node.y3 +" first_node.x3:"+first_node.x3);
			}
			
			if(block.id =="mirror_right_frame_B" && operate_state =="move"){//4
				//do something
				end_node.x4 = move.x4 + event.changedTouches[i].pageX, end_node.y4 = move.y4 + event.changedTouches[i].pageY;		
				buffer.x.push(end_node.x4), buffer.y.push(end_node.y4);	 	
				
				for(var i = 0; i<buffer.x.length && i<buffer.y.length; i++){
					drawArea(ctx9,first_node.x4, first_node.y4, end_node.x4, end_node.y4);
					ctx9.clearRect(first_node.x4 ,first_node.y4, buffer.x[i], buffer.y[i]);
					mirror_right_frame_B();
				}	
				console.log("end_node.x4:"+end_node.x4);
				//console.log("first_node.y4:"+first_node.y4 +" first_node.x4:"+first_node.x4);
			}
			
			if(block.id =="mirror_left_frame_C" && operate_state =="group"){//5
				//do something
				end_node.x5 = move.x5 + event.changedTouches[i].pageX, end_node.y5 = move.y5 + event.changedTouches[i].pageY;		
				buffer.x.push(end_node.x5), buffer.y.push(end_node.y5);	 	
				
				for(var i = 0; i<buffer.x.length && i<buffer.y.length; i++){
					drawArea(ctx11,first_node.x5, first_node.y5, end_node.x5, end_node.y5);
					ctx11.clearRect(first_node.x5 ,first_node.y5, buffer.x[i], buffer.y[i]);
					mirror_left_frame_C();
				}
				console.log("end_node.y5:"+end_node.y5);
				//console.log("first_node.y5:"+first_node.y5 +" first_node.x5:"+first_node.x5);
			}
			
			if(block.id =="mirror_right_frame_C" && operate_state =="group"){//6
				//do something
				end_node.x6 = move.x6 + event.changedTouches[i].pageX, end_node.y6 = move.y6 + event.changedTouches[i].pageY;		
				buffer.x.push(end_node.x6), buffer.y.push(end_node.y6);	 	
				
				for(var i = 0; i<buffer.x.length && i<buffer.y.length; i++){
					drawArea(ctx12,first_node.x6, first_node.y6, end_node.x6, end_node.y6);
					ctx12.clearRect(first_node.x6 ,first_node.y6, buffer.x[i], buffer.y[i]);
					mirror_right_frame_C();
				}
				console.log("end_node.y6:"+end_node.y6);
				//console.log("first_node.y6:"+first_node.y6 +" first_node.x6:"+first_node.x6);
			}
		
		}
	}
		
}

function touchend(event) {
	event.changedTouches = event.targetTouches;
	for(var i=0; i<event.changedTouches.length; i++){
			var block =  blockMap[event.changedTouches[i].identifier];	
			if(block){
				switch(operate_state){
					case "delete":
					if(block.id =="mirror_left_frame_A"){	//1
						if(first_node.x1 >=258 && left_frame.first_circle + left_frame.delete_amount>0 ){	//第一個位元的判斷
							delete_graphic(first_node.x1, first_node.y1, end_node.x1, end_node.y1, "first" ,block.id);	//node_x1, node_y1, node_x2, node_y2, which_digit ,which_frame
							clearAll();
							initial();
							cal_list.append(eval("left_frame.first_circle +"+ "left_frame.delete_amount") + eval("easy_ques.q" + index + "[1]") + "口" + eval("easy_ques.q" + index + "[3]")+ left_frame.third_circle + "=" 
							+eval("right_frame.first_circle +"+ "right_frame.delete_amount") +"<br>");	//顯示算式表徵
						}
						if(first_node.x1<=130 && left_frame.third_circle + left_frame.delete_amount3>0 ){//第三個位元的判斷
							delete_graphic(first_node.x1, first_node.y1, end_node.x1, end_node.y1, "third" ,block.id);
							clearAll();
							initial();
							cal_list.append(eval("left_frame.first_circle +"+ "left_frame.delete_amount") + eval("easy_ques.q" + index + "[1]") + "口" + eval("easy_ques.q" + index + "[3]")+ left_frame.third_circle + "=" 
							+eval("right_frame.first_circle +"+ "right_frame.delete_amount") +"<br>");	//顯示算式表徵
						}
					}					
					if(block.id =="mirror_right_frame_A"){	//2
							if(end_node.y2 <=circle_range1.y4 && first_node.x2 >=252 && right_frame.first_circle + right_frame.delete_amount>0){//第一個位元的判斷
								delete_graphic(first_node.x2, first_node.y2, end_node.x2, end_node.y2, "first", block.id);	//node_x1, node_y1, node_x2, node_y2, which_digit ,which_frame
								clearAll();
								initial();
								cal_list.append(eval("left_frame.first_circle +"+ "left_frame.delete_amount") + eval("easy_ques.q" + index + "[1]") + "口" + eval("easy_ques.q" + index + "[3]")+ left_frame.third_circle + "=" 
								+eval("right_frame.first_circle +"+ "right_frame.delete_amount") +"<br>");//顯示算式表徵
							}
							if(end_node.y2 <=circle_range1.y4 && first_node.x2 >=4 && first_node.x2 <=135 && right_frame.first_circle + right_frame.delete_amount>0){
								delete_graphic(first_node.x2, first_node.y2, end_node.x2, end_node.y2, "third", block.id);	//node_x1, node_y1, node_x2, node_y2, which_digit ,which_frame
								clearAll();
								initial();
								cal_list.append(eval("left_frame.first_circle +"+ "left_frame.delete_amount") + eval("easy_ques.q" + index + "[1]") + "口" + eval("easy_ques.q" + index + "[3]")+ left_frame.third_circle + "=" 
								+eval("right_frame.first_circle +"+ "right_frame.delete_amount") +"<br>");//顯示算式表徵
							}
						}						
					break;
				case "move":
					if(block.id == "mirror_left_frame_B"){	//3
						if(first_node.y3 >=8 && first_node.y3<=95 && left_frame.first_circle>=0){	//第一個位元的判斷
							move_graphic(first_node.x3, first_node.y3, end_node.x3, end_node.y3,"first" ,block.id, 1000,  1250);	//node_x1, node_y1, node_x2, node_y2, which_digit, which_frame, objX, objY
							clearAll();
							initial();
							cal_list.append(eval("left_frame.first_circle +"+ "left_frame.delete_amount") + eval("easy_ques.q" + index + "[1]") + "口" + eval("easy_ques.q" + index + "[3]")+ 
							left_frame.third_circle + "=" +eval("right_frame.first_circle +"+ "right_frame.delete_amount")+"-"+right_frame.third_circle+ "<br>");
						}	
						
						if(end_node.x3 <=circle_range2.x2+50 && first_node.y3 >95 && first_node.y3<=178 && left_frame.unknow>=0){	//第二個位元的判斷(未知位元)
							move_graphic(first_node.x3, first_node.y3, end_node.x3, end_node.y3,"second" ,block.id, 1000,  1050);
							clearAll();
							initial();
							cal_list.append(eval("left_frame.first_circle +"+ "left_frame.delete_amount") + eval("easy_ques.q" + index + "[3]")+ 
							left_frame.third_circle + "=" +eval("right_frame.first_circle +"+ "right_frame.delete_amount")+cre.switchOperator(operator1)
							+"口"+"-"+right_frame.third_circle+ "<br>");
						}
						
						if(first_node.y3 >=180 && left_frame.third_circle>=0){	//第三個位元的判斷
							move_graphic(first_node.x3, first_node.y3, end_node.x3, end_node.y3,"third" ,block.id, 1000,  1050);
							clearAll();
							initial();
							cal_list.append(eval("left_frame.first_circle +"+ "left_frame.delete_amount") + eval("easy_ques.q" + index + "[1]") + "口" + eval("easy_ques.q" + index + "[3]")+ 
							left_frame.third_circle + "=" +eval("right_frame.first_circle +"+ "right_frame.delete_amount")+"-"+right_frame.third_circle+ "<br>");
						}
						console.log("first_node.y3:"+first_node.y3);
					}
					if(block.id =="mirror_right_frame_B"){		//4
						if(first_node.y4 >=4 && first_node.y4 <=100 && right_frame.first_circle>=0){ //第一個位元的判斷
							move_graphic(first_node.x4, first_node.y4, end_node.x4, end_node.y4,"first" ,block.id,1400,1100);	//node_x1, node_y1, node_x2, node_y2, which_digit, which_frame, objX, objY
							clearAll();
							initial();
							cal_list.append(left_frame.first_circle + eval("easy_ques.q" + index + "[1]") + "口" + eval("easy_ques.q" + index + "[3]")+ left_frame.third_circle + 
							"=" +right_frame.first_circle+"-"+right_frame.third_circle+ "<br>");
						}
						
						if(first_node.y4 >=114 && first_node.y4 <=162 && right_frame.unknow>0){	//第二個位元的判斷(未知位元)
							move_graphic(first_node.x4, first_node.y4, end_node.x4, end_node.y4,"second" ,block.id,1400,1100);	//node_x1, node_y1, node_x2, node_y2, which_digit, which_frame, objX, objY
							clearAll();
							initial();
						}
						
						if(first_node.y4 >=185 && right_frame.third_circle>0){//第三個位元的判斷
							move_graphic(first_node.x4, first_node.y4, end_node.x4, end_node.y4,"third" ,block.id,1400,1100);	//node_x1, node_y1, node_x2, node_y2, which_digit, which_frame, objX, objY
							clearAll();
							initial();
							cal_list.append(left_frame.first_circle + eval("easy_ques.q" + index + "[1]") + "口" + eval("easy_ques.q" + index + "[3]")+ left_frame.third_circle + 
							"=" +right_frame.first_circle+"-"+right_frame.third_circle+ "<br>");
						}
						console.log("first_node.y4:"+first_node.y4);
					}					
					break;
				case "group":
				if(block.id =="mirror_left_frame_C"){	//5
					if(first_node.x5 <=110 && left_frame.first_circle>0){ //第一個位元的判斷							
							group_graphic(first_node.x5, first_node.y5, end_node.x5, end_node.y5,block.id, "first");	//node_x1, node_y1, node_x2, node_y2, which_frame, which_digit
							clearAll();
							initial();
						//	cal_list.append(left_frame.first_circle + eval("easy_ques.q" + index + "[1]") + "口" + eval("easy_ques.q" + index + "[3]")+ left_frame.third_circle + "=" +right_frame.first_circle+"<br>");
					}
				}
				
				if(block.id =="mirror_right_frame_C"){	//6					
					if(first_node.x6 <=110 && right_frame.first_circle>0){	//第一個位元的判斷	
						group_graphic(first_node.x6, first_node.y6, end_node.x6, end_node.y6,block.id);	//node_x1, node_y1, node_x2, node_y2, which_frame, which_digit
						clearAll();
						initial();
						//cal_list.append(left_frame.first_circle + eval("easy_ques.q" + index + "[1]") + "口" + eval("easy_ques.q" + index + "[3]")+ left_frame.third_circle + "=" +right_frame.first_circle+"<br>");	
					}									
				}
					break;
				}
			}
			
			delete blockMap[event.changedTouches[i].identifier];
		}
		
	
	
	for(var i =0; i<buffer.x.length && i<buffer.y.length; i++){	//清除緩衝區域的座標值
		buffer.x.pop(), buffer.y.pop();
	}
		event.preventDefault();			
}

function clearAll(){	//清除所有Canvas
	for(var i = 4; i<=12;i++){
		if(i ==4 || i==7 || i==10){
			continue;
		}
		eval("ctx"+i+".clearRect(0,0,canvas"+i+".width, canvas"+i+".height)");
	}	
}

function initial() {	//main	
	
	mirror_scale_initial_A();
	mirror_left_frame_A();
	mirror_right_frame_A();
	
	mirror_scale_initial_B();
	mirror_left_frame_B();
	mirror_right_frame_B();
	
	mirror_scale_initial_C();
	mirror_left_frame_C();
	mirror_right_frame_C();		
	
	//result();
}

function result(){	//判斷最後結果
	var result = $("#result_panel");
	if(left_frame.first_circle == 0 && left_frame.third_circle ==0 && left_frame.unknow ==1){	//當左架只剩空格時
		if(((right_frame.first_circle +right_frame.delete_amount) - right_frame.third_circle)  == left_frame.second_circle){
			result.css("color","green");
			result.html("正確"+"<br/> 口 = "+ left_frame.second_circle);
			denyOperate();
			operate_state = "";
		}
	}
	
	if(right_frame.first_circle ==0 && right_frame.third_circle ==0 && right_frame.unknow == 1){	//當右架只剩空格時
		//do something
	}
	
}

function denyOperate(){	//題目完成時，不讓任何人操作
	document.getElementById(check_state.A[0]).style.visibility = check_state.A[1];
	document.getElementById(check_state.B[0]).style.visibility = check_state.B[1];
	document.getElementById(check_state.C[0]).style.visibility = check_state.C[1];
	document.getElementById("select_panel_A").style.visibility = "hidden";
	document.getElementById("select_panel_B").style.visibility = "hidden";	
	document.getElementById("select_panel_C").style.visibility = "hidden";	
}

initial();
initial_object_text();
document.addEventListener('touchstart', touchstart, false);//觸發touchstart事件
document.addEventListener('touchmove', touchmove, false);//觸發touchmove事件
document.addEventListener('touchend', touchend, false);//觸發touchend事件
