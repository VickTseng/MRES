/**
 * @author wei
 */

function draw(){
	
}

draw.prototype = {	
	drawline: function(draw, first_x, first_y, last_x, last_y){	//畫刪除線
		draw.beginPath();
		draw.lineWidth = 3;
		draw.strokeStyle = "red";
		draw.moveTo(first_x, first_y);
		draw.lineTo(last_x, last_y);
		draw.fill();
		draw.stroke();		
		draw.strokeStyle = "black";
	},
	
	drawGroupLine: function(draw, first_x, first_y, last_x, last_y){	//畫群組線
		draw.lineWidth = 2;
		draw.strokeStyle = "blue";
		draw.strokeRect(first_x, first_y, last_x, last_y);
		draw.strokeStyle = "black";
	}
	
}
