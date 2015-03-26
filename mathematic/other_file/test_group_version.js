/**
 * @author wei
 */
var canvas = document.getElementById("theCanvas");
canvas.width= 800, canvas.height = 600;
var ctx = canvas.getContext("2d");

var first_node ={x:0,y:0}, end_node = {x:0,y:0}, move = {x:0, y:0};//群組的起點和終點
var buffer = {x:[], y:[]}	//儲存群組移動時的點座標
var circle_range = {x:0, y:0, stage_x:[], stage_y:[]}

var distance ={x1:55, y1:55 ,x2:15 ,y2:50, x3:15, y3:85, x4:15, y4: 15}	
var beginDegree = 0, EndDegree = 360 * Math.PI / 180;

function initial_graphical(){
	for (var i = 0; i < 10; i++) {		
		ctx.beginPath();		//開始繪圖		
		ctx.arc(distance.x1, distance.y1, 10, beginDegree, EndDegree, false);		//在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
		ctx.fillStyle = "rgba(0, 0, 0, 0.9)";		//rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
		ctx.closePath();
		ctx.fill();
		distance.x1 +=25;
	}
	/*ctx.beginPath();		//開始繪圖
	ctx.rect(120,120,150,100);
	ctx.fillStyle = "rgba(250, 250, 250, 0.5)";
	ctx.closePath();
	ctx.fill();*/
	
	circle_range.x = distance.x1;
	circle_range.y = distance.y1;
	
	distance.x1 = 55;
}

function drawGroup(draw, node1, node2){
		draw.lineWidth = 0.5;
		draw.strokeStyle = "black";
		draw.strokeRect(node1.x, node1.y, node2.x, node2.y);
	/*	draw.beginPath();
		draw.rect(node1.x, node1.y, node2.x, node2.y);
		draw.fillStyle = "rgba(250, 250, 250, 0.5)";
		draw.closePath();
		draw.fill();*/
}

function finalGroup(draw, x1, y1, x2, y2){
	draw.lineWidth = 2;
	draw.strokeStyle = "blue";
	draw.strokeRect(x1, y1, x2, y2);
}

function limpid(penColor){	//筆觸透明化
	penColor.strokeStyle = "rgba(255,0,0,0)";
}

function delete_object(){
	
}


function touchstart(event){
	first_node.x = event.targetTouches[0].pageX - $("#theCanvas").offset().left, first_node.y = event.targetTouches[0].pageY- $("#theCanvas").offset().top;
	move.x = 0 - event.targetTouches[0].pageX, move.y = 0 - event.targetTouches[0].pageY;
	console.log("first_node.x:"+first_node.x+" first_node.y:"+first_node.y);
	
	event.preventDefault();
}

function touchmove(event){
	end_node.x = move.x + event.targetTouches[0].pageX , end_node.y = move.y + event.targetTouches[0].pageY;
	buffer.x.push(end_node.x), buffer.y.push(end_node.y);
	
	for(var i = 0; i<buffer.x.length && i<buffer.y.length; i++){
		drawGroup(ctx, first_node, end_node);
		ctx.clearRect(first_node.x ,first_node.y, buffer.x[i], buffer.y[i]);
		initial_graphical();		
	}
	if(ctx.isPointInPath(50,10)){
		alert("yes");
	}
	console.log("end_node.x:"+end_node.x+" end_node.y:"+end_node.y);
	event.preventDefault();
}

function touchend(event){
	//drawGroup(ctx, first_node, end_node);
	ctx.clearRect(0,0, canvas.width, canvas.height);
	initial_graphical();
	if(end_node.x <= circle_range.x && first_node.x <=312 && first_node.x>=35){	//群組的範圍在點的範圍內時
		finalGroup(ctx, first_node.x, 35, end_node.x, 35);
	}
	
	if(ctx.isPointInPath(first_node.x,first_node.y)){
		alert("yes");
	}
	
	first_node.x = 0, first_node.y = 0, end_node.x =0, end_node.y = 0;
	for(var i =0; i<buffer.x.length && i<buffer.y.length; i++){
		buffer.x.pop(), buffer.y.pop();
	}
	
}

initial_graphical();
document.addEventListener("touchstart", touchstart, false);	
document.addEventListener("touchmove", touchmove, false);
document.addEventListener("touchend", touchend, false);
