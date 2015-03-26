function create(){
	
}

//var o = document.body;

create.prototype = {
	createDIV: function(text, top, left, id){	//創建DIV(數字)
		var div = document.createElement('div'); 
		div.innerHTML = text; 
		div.id = id;
		div.style.position = 'absolute';
		div.style.fontSize = '70px';
		div.style.width = '70px';
		div.style.height = '70px';
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.zIndex =1;
		div.style.textAlign = 'center';
		$(div).css("-webkit-border-radius","20px");
		$(div).css("opacity","0.7");
		o.appendChild(div); 
	},
	
	createBoxGroup: function(id, top, left, rotate, src){
		var img = document.createElement("img");		
		img.id = id;
		img.src = src;
		img.style.position = "absolute";
		img.style.width ="100px";
		img.style.height ="100px";
		img.style.top = top+"px";
		img.style.left = left+"px";		
		img.style.zIndex =1;
		$(img).css("-webkit-transform","rotate(-90deg)");
		o.appendChild(img);
	},
	
	createObj: function(text, top, left, id, rotate, color){		//創造物件
		var div = document.createElement('div'); 
		div.innerHTML = text; 
		div.id = id;
		div.style.color = color;
		div.style.position = 'absolute';
		div.style.fontSize = '50px';
		div.style.width = '70px';
		div.style.height = '70px';
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.background = '#BCA';
		div.style.textAlign = 'center';
		div.style.zIndex =1;
		$(div).css("-webkit-border-radius","20px");
		$(div).css("-webkit-transform","rotate("+rotate+")");
		$(div).css("opacity","0.7");
		o.appendChild(div); 
	},
	
	ConvertPositionAngel: function(sourcePoint, targetPoint){	//從兩點座標轉換角度  sourcePoint:中心座標  targetPoint:目標座標
		var res=(Math.atan2(targetPoint.y-sourcePoint.y,targetPoint.x-sourcePoint.x)) * 720.0 / (Math.PI);
  		return (res>=0 && res <=180)?res+=90:((res<0 && res>=-90)? res+=90: res+=450);
  		
	},
	
	isOperator: function(num){
		if(isNaN(num)){
			return true;
		}else{
			return false;
		}
	},
	
	isNumber: function(text){
		if(isNaN(text) == false){
			return true;
		}else{
			return false;
		}
	},	
	
	numberPanel: function(id, top, left){		//數字面板建置
		var panel = document.createElement('div');
		panel.id = id;
		panel.style.position = "absolute";
		panel.style.width = "200px";
		panel.style.height = "200px";
		panel.style.top = top+"px";
		panel.style.left = left+"px";
		panel.style.backgroundColor = "#BCD";
		
		o.appendChild(panel);
	},
	
	translateOperator: function(ope){	//符號轉換 (/ → ÷ )   (* → ×)  
		switch (ope){
			case "*":
				return "×";
				break;
				
			case "/":
				return "÷";
				break;
				
			case "+":
				return "+";
					break;
					
			case "-":
				return "-";
				break;				
		}
	},
	
	transSymbol: function(op){		//符號轉換 (÷ → /)   (× → *) 
		switch (op){
			case "÷":
				return "/";
				break;
				
			case "×":
				return "*";
				break;
				
			case "+":
				return "+";
					break;
					
			case "-":
				return "-";
				break;				
		}
	},
	
	drawCircle: function(area,several,width,height){
		var canvas = document.getElementById(area);
		var ctx = canvas.getContext('2d');
		canvas.width = width,canvas.height = height;
		var beginDegree = 0, EndDegree = 360 * Math.PI / 180;
		var row=0; //列數
		var distance ={x1:25,y1:25,x2:25,y2:75,x3:25,y3:125}		
		
		if(several<=3){
			row = 1;
		}
		if(several>3 && several<=6){
			row = 2;
		}
		if(several>6 && several<=9){
			row = 3;
		}
		
		
		if(row ==1){	//一列
			for(var i=1;i<=several;i++){
				//console.log("distance.x1: "+distance.x1);
				ctx.beginPath();  //開始繪圖
				ctx.arc(distance.x1, distance.y1, 18, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				ctx.fill();
				distance.x1 += 50;
			}				
		}
		
		if(row ==2){
			for(var i=1;i<=3;i++){
				ctx.beginPath();  //開始繪圖
				ctx.arc(distance.x1, distance.y1, 18, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				ctx.fill();
				distance.x1 += 50;
			}
			
			for(var i=1;i<=several-3;i++){
				ctx.beginPath();  //開始繪圖
				ctx.arc(distance.x2, distance.y2, 18, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				ctx.fill();
				distance.x2 += 50;
			}
		}
		
		if(row ==3){
			for(var i=1;i<=3;i++){
				ctx.beginPath();  //開始繪圖
				ctx.arc(distance.x1, distance.y1, 18, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				ctx.fill();
				distance.x1 += 50;
			}
			
			for(var i=1;i<=3;i++){
				ctx.beginPath();  //開始繪圖
				ctx.arc(distance.x2, distance.y2, 18, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				ctx.fill();
				distance.x2 += 50;
			}
			
			for(var i=1;i<=several-6;i++){
				ctx.beginPath();  //開始繪圖
				ctx.arc(distance.x3, distance.y3, 18, beginDegree, EndDegree, false); //在Canvas上畫圓點      (X座標,Y座標,半徑,開始描繪角度,結束描繪角度,true為逆時針~false為順時針)
				ctx.fillStyle = "rgba(200, 0, 0, 0.9)";  //rgba(red 值, green 值, blue 值, alpha 值) alpha為透明度
				ctx.fill();
				distance.x3 += 50;
			}
		}			
			
	},
	
	createSquare: function(area,sum,width,height){
		var canvas = document.getElementById(area);
		var ctx = canvas.getContext('2d');
		canvas.width = width,canvas.height = height;
		
		for(var i=20;i<=sum;i+=50){
			ctx.fillStyle = "#ECD";
			ctx.fillRect(i,70,40,40);
		}
	},
	
	createClear: function(area){
		var canvas = document.getElementById(area);
		var ctx = canvas.getContext('2d');
		canvas.width = 300,canvas.height = 250;		
		ctx.clearRect(0,0,200,200);
	},
	
	createTransmit: function(top, left, id){
		var area = document.createElement('div');
		area.style.position = "absolute";
		area.style.top = top+"px";
		area.style.left = left+"px";
		area.style.width = "100px";
		area.style.height = "100px";
		area.id = id;
		area.style.borderStyle = "dashed";
		area.style.borderColor = "rgba(50, 50, 239, 0.5)";
		o.appendChild(area);
	},
	
	createText: function(top, left, id, rotation, text ,src){
		switch(text){
			case "delete":
				var img = document.createElement('img');
				img.style.position = 'absolute';
				img.style.zIndex = 1;
				img.id = id;
				img.src = src;
				img.style.width = "150px";
				img.style.height = "110px";
				img.style.top = top+"px";
				img.style.left = left+"px";
				img.style.fontSize = '40px';
				$(img).css("-webkit-transform","rotate("+rotation+"deg)");
				o.appendChild(img);
				break;
			case "move":
				var img = document.createElement('img');
				img.style.position = 'absolute';
				img.style.zIndex = 1;
				img.id = id;
				img.src = src;
				img.style.width = "150px";
				img.style.height = "110px";
				img.style.top = top+"px";
				img.style.left = left+"px";
				img.style.fontSize = '40px';
				$(img).css("-webkit-transform","rotate("+rotation+"deg)");
				o.appendChild(img);
				break;
			case "group":
				var img = document.createElement('img');
				img.style.position = 'absolute';
				img.style.zIndex = 1;
				img.id = id;
				img.src = src;
				img.style.width = "150px";
				img.style.height = "110px";
				img.style.top = top+"px";
				img.style.left = left+"px";
				img.style.fontSize = '40px';
				$(img).css("-webkit-transform","rotate("+rotation+"deg)");
				o.appendChild(img);
				break;
		}		
	},
	
	largeView: function(obj){
		obj.css("fontSize","70px");
	},
	
	smallView: function(obj){
		obj.css("fontSize","55px");
	},
	
	check_operate: function(checkOption){	//回復操作者面板外觀
		switch(checkOption){
			case "A_check":			
				$("#mirror_panel_A").animate({"width":"400px","height":"800px","top":"450px"},"normal");			
				$("#mirror_panel_A").css("background","-webkit-gradient(linear,left top,right bottom, from(#EEE9BF),to(#EEC591))");
				$("#mirror_left_frame_A").animate({"width":"300px","height":"350px"},"normal");
				$("#mirror_right_frame_A").animate({"width":"300px","height":"350px","top":"430px"},"normal");
				$("#mirror_scale_A").animate({"top":"105px"},"normal");
				canvas5.width = 300, canvas5.height = 350, canvas6.width = 300, canvas6.height = 350;
				operate_state_change.A_radius = 8, operate_state_change.A_interval = 20, operate_state_change.A_square=20;
				distance_mirror_left.x1 = 250, distance_mirror_left.x2 = 160, distance_mirror_left.x4 = 250;
				distance_delete.x1 = 250;
			
				for(var i = 0;i<distance_group_length_left.len1.length; i++){	//放大時改變群組線長度(left)
					distance_group_length_left.len1[i] = left_frame.first_circle_group[i] * 20;
				}	
				
				for(var i=0; i<distance_group_left.x1.length; i++){
					distance_group_left.x1[i] -= 70;	
				}
				
				distance_group_left.y1[0] -= 3;	
				for(var i = 0, j=1; i<distance_group_left.y1.length, j<distance_group_left.y1.length; i++, j++){	//放大時改變Y座標(left)													
						distance_group_left.y1[j] = distance_group_left.y1[i] + distance_group_length_left.len1[i];					
				}							
				/***/
				
				for(var i = 0;i<distance_group_length_right.len1.length; i++){	//放大時改變群組線長度(right)
					distance_group_length_right.len1[i] = right_frame.first_circle_group[i] * 20;
				}				
				
				for(var i=0; i<distance_group_right.x1.length; i++){
					distance_group_right.x1[i] -= 70;	
				}
				
				distance_group_right.y1[0] -= 3;	
				for(var i = 0, j=1; i<distance_group_right.y1.length, j<distance_group_right.y1.length; i++, j++){	//放大時改變Y座標(right)													
						distance_group_right.y1[j] = distance_group_right.y1[i] + distance_group_length_right.len1[i]+5;					
				}	
				
				initial();
				break;
			case "B_check":
				$("#mirror_panel_B").animate({"height":"400px","width":"800px","left":"850px","top":"1050px"},"normal");	
				$("#mirror_panel_A").animate({"top":"450px"},"normal"), $("#mirror_panel_C").animate({"top":"450px"},"normal");
				$("#member_A").animate({"top":"500px"},"normal"), $("#member_C").animate({"top":"500px"},"normal");			
				$("#mirror_panel_B").css("background","-webkit-gradient(linear,left top,right bottom, from(#EEE9BF),to(#EEC591))");
				$("#mirror_left_frame_B").animate({"width":"350px","height":"300px"},"normal");
				$("#mirror_right_frame_B").animate({"width":"350px","height":"300px","left":"430px"},"normal");
				$("#mirror_scale_B").animate({"top":"330px","left":"80px"},"normal");
				$("#groupSign").animate({"top":"1180px"},"normal"), $("#deleteSign").animate({"top":"430px"},"normal");
				canvas8.width = 350, canvas8.height = 300, canvas9.width = 350, canvas9.height = 300;
				operate_state_change.B_radius = 8, operate_state_change.B_interval = 20, operate_state_change.B_square=20;
				
				for(var i = 0;i<distance_group_length_left.len2.length; i++){	//放大時改變群組線長度(left)
					distance_group_length_left.len2[i] = left_frame.first_circle_group[i] * 20;
				}						
			
				for(var i = 0, j=1; i<distance_group_left.x2.length, j<distance_group_left.x2.length; i++, j++){	//放大時改變Y座標(left)													
						distance_group_left.x2[j] = distance_group_left.x2[i] + distance_group_length_left.len2[i];					
				}		
					
				
				for(var i = 0;i<distance_group_length_right.len2.length; i++){	//放大時改變群組線長度(right)
					distance_group_length_right.len2[i] = right_frame.first_circle_group[i] * 20;
				}						
			
				for(var i = 0, j=1; i<distance_group_right.x2.length, j<distance_group_right.x2.length; i++, j++){	//放大時改變Y座標(right)													
						distance_group_right.x2[j] = distance_group_right.x2[i] + distance_group_length_right.len2[i];					
				}		
				
				
				initial();
				break;
			case "C_check":
				$("#mirror_panel_C").animate({"width":"400px","height":"800px","top":"450px","left":"1700px"},"normal");			
				$("#mirror_panel_B").animate({"left":"850px"},"normal"), $("#member_B").animate({"left":"900px"},"normal");
				$("#mirror_left_frame_C").animate({"width":"300px","height":"350px","top":"430px"},"normal");
				$("#mirror_right_frame_C").animate({"width":"300px","height":"350px"},"normal");	
				$("#mirror_panel_C").css("background","-webkit-gradient(linear,left top,right bottom, from(#EEE9BF),to(#EEC591))");
				$("#mirror_scale_C").animate({"top":"105px","left":"330px"},"normal");
				$("#moveSign").animate({"left":"800px"},"normal");
				canvas11.width = 300, canvas11.height = 350, canvas12.width = 300, canvas12.height = 350;
				operate_state_change.C_radius = 8, operate_state_change.C_interval = 20, operate_state_change.C_square=20;
				distance_mirror_right.y1 = 320, distance_mirror_right.y2 = 320, distance_mirror_right.y3 = 320;
				distance_mirror_right.y4 = 320, distance_mirror_right.y4 = 320, distance_mirror_right.y4 = 320;
				distance_mirror_right.x2 = 130, distance_mirror_right.x3 = 220;
				distance_mirror_right.x6 = 220, distance_mirror_right.y6 = 320;
				distance_delete.y3 = 320;	
				
				for(var i = 0;i<distance_group_length_left.len3.length; i++){	//縮小時改變群組線長度
					distance_group_length_left.len3[i] = 0 - (left_frame.first_circle_group[i] * 20);
				}		
				
				distance_group_left.y3[0] -= 270;
				for(var i = 0, j=1; i<distance_group_left.y3.length, j<distance_group_left.y3.length; i++, j++){	//縮小時改變Y座標										
						distance_group_left.y3[j] = distance_group_left.y3[i] + distance_group_length_left.len3[i];								
				}		
				
				for(var i = 0;i<distance_group_length_right.len3.length; i++){	//縮小時改變群組線長度(right)
					distance_group_length_right.len3[i] = 0 - (right_frame.first_circle_group[i] * 20);
				}					
				
				distance_group_right.y3[0] -= 270;	
				for(var i = 0, j=1; i<distance_group_right.y3.length, j<distance_group_right.y3.length; i++, j++){	//放大時改變Y座標(left)													
						distance_group_right.y3[j] = distance_group_right.y3[i] + distance_group_length_right.len3[i]+5;					
				}
				
				initial();
				break;
		}		
	},
	
	select_operate: function(which_select){	//改變操作者面板外觀
		switch(which_select){
			case "select_panel_A":			
				$("#mirror_panel_A").animate({"width":"550px","height":"1450px","top":"150px"},"normal");	
				$("#mirror_left_frame_A").animate({"width":"400px","height":"650px"},"normal");
				$("#mirror_right_frame_A").animate({"width":"400px","height":"650px","top":"700px"},"normal");
				$("#mirror_scale_A").animate({"top":"400px"},"normal");
				$("#mirror_panel_A").css("background","-webkit-gradient(linear,left top,right bottom, from(#FFFACD),to(#FFF68F))");
				canvas5.width = 400, canvas5.height = 650, canvas6.width = 400, canvas6.height = 650;				
				operate_state_change.A_radius = 15, operate_state_change.A_interval = 35, operate_state_change.A_square=40;
				distance_mirror_left.x1 = 320, distance_mirror_left.x2 = 180 ,distance_mirror_left.x4 = 320;
				distance_mirror_left.x5 = 160;
				distance_delete.x1 = 320;
				
				for(var i = 0;i<distance_group_length_left.len1.length; i++){	//放大時改變群組線長度(left)
					distance_group_length_left.len1[i] = left_frame.first_circle_group[i] * 35 -10;
				}	
				
				for(var i=0; i<distance_group_left.x1.length; i++){
					distance_group_left.x1[i] += 70;	
				}
				
				distance_group_left.y1[0] += 3;	
				for(var i = 0, j=1; i<distance_group_left.y1.length, j<distance_group_left.y1.length; i++, j++){	//放大時改變Y座標(left)													
						distance_group_left.y1[j] = distance_group_left.y1[i] + distance_group_length_left.len1[i]+5;					
				}				
				
				for(var i = 0;i<distance_group_length_right.len1.length; i++){	//放大時改變群組線長度(right)
					distance_group_length_right.len1[i] = right_frame.first_circle_group[i] * 35-15;
				}				
				
				for(var i=0; i<distance_group_right.x1.length; i++){
					distance_group_right.x1[i] += 70;	
				}
				
				distance_group_right.y1[0] += 3;	
				for(var i = 0, j=1; i<distance_group_right.y1.length, j<distance_group_right.y1.length; i++, j++){	//放大時改變Y座標(right)													
						distance_group_right.y1[j] = distance_group_right.y1[i] + distance_group_length_right.len1[i]+10;					
				}	
			
				initial();
				break;
			case "select_panel_B":
				$("#mirror_panel_B").animate({"height":"550px","width":"1450px","left":"550px","top":"910px"},"normal");	
				$("#mirror_left_frame_B").animate({"width":"650px","height":"400px"},"normal");
				$("#mirror_right_frame_B").animate({"width":"650px","height":"400px","left":"750px"},"normal");
				$("#mirror_panel_A").animate({"top":"100px"},"normal"), $("#mirror_panel_C").animate({"top":"100px"},"normal");
				$("#member_A").animate({"top":"150px"},"normal"), $("#member_C").animate({"top":"150px"},"normal");
				$("#mirror_scale_B").animate({"top":"450px","left":"380px"},"normal");
				$("#mirror_panel_B").css("background","-webkit-gradient(linear,left top,right bottom, from(#FFFACD),to(#FFF68F))");
				$("#groupSign").animate({"top":"800px"},"normal"), $("#deleteSign").animate({"top":"80px"},"normal");
				canvas8.width = 650, canvas8.height = 400, canvas9.width = 650, canvas9.height = 400;
				operate_state_change.B_radius = 15, operate_state_change.B_interval = 35, operate_state_change.B_square=40;
				
				for(var i = 0;i<distance_group_length_left.len2.length; i++){	//放大時改變群組線長度(left)
					distance_group_length_left.len2[i] = left_frame.first_circle_group[i] * 35 ;
				}								
			
				for(var i = 0, j=1; i<distance_group_left.x2.length, j<distance_group_left.x2.length; i++, j++){	//放大時改變X座標(left)													
						distance_group_left.x2[j] = distance_group_left.x2[i] + distance_group_length_left.len2[i];					
				}		
				/***/
				for(var i = 0;i<distance_group_length_right.len1.length; i++){	//放大時改變群組線長度(right)
					distance_group_length_right.len2[i] = right_frame.first_circle_group[i] * 35-10;
				}					
				
				for(var i = 0, j=1; i<distance_group_right.x2.length, j<distance_group_right.x2.length; i++, j++){	//放大時改變X座標(right)													
						distance_group_right.x2[j] = distance_group_right.x2[i] + distance_group_length_right.len2[i];					
				}
				
				
				initial();
				break;
			case "select_panel_C":
				$("#mirror_panel_C").animate({"width":"550px","height":"1450px","top":"150px","left":"1550px"},"normal");	
				$("#mirror_panel_B").animate({"left":"700px"},"normal"), $("#member_B").animate({"left":"750px"},"normal");
				$("#mirror_panel_C").css("background","-webkit-gradient(linear,left top,right bottom, from(#FFFACD),to(#FFF68F))");
				$("#mirror_left_frame_C").animate({"width":"400px","height":"650px","top":"700px"},"normal");
				$("#mirror_right_frame_C").animate({"width":"400px","height":"650px"},"normal");
				$("#mirror_scale_C").animate({"top":"410px","left":"450px"},"normal");
				$("#moveSign").animate({"left":"650px"},"normal");
				canvas11.width = 400, canvas11.height = 650, canvas12.width = 400, canvas12.height = 650;
				operate_state_change.C_radius = 15, operate_state_change.C_interval = 35, operate_state_change.C_square=40;
				distance_mirror_right.y1 = 590, distance_mirror_right.y2 = 580, distance_mirror_right.y3 = 590;
				distance_mirror_right.y4 = 590, distance_mirror_right.y4 = 590, distance_mirror_right.y4 = 590;
				distance_mirror_right.x2 = 190, distance_mirror_right.x3 = 320;	
				distance_mirror_right.x6 = 320, distance_mirror_right.y6 = 590;	
				distance_delete.y3 = 590;		
				
				for(var i = 0;i<distance_group_length_left.len3.length; i++){	//放大時改變群組線長度(left)
					distance_group_length_left.len3[i] = 0 - (left_frame.first_circle_group[i] * 35);
				}	
				
				distance_group_left.y3[0] += 270;	
				for(var i = 0, j=1; i<distance_group_left.y3.length, j<distance_group_left.y3.length; i++, j++){	//放大時改變Y座標(left)													
						distance_group_left.y3[j] = distance_group_left.y3[i] + distance_group_length_left.len3[i]+5;					
				}
				
				
				for(var i = 0;i<distance_group_length_right.len3.length; i++){	//放大時改變群組線長度(right)
					distance_group_length_right.len3[i] = 0 - (right_frame.first_circle_group[i] * 35);
				}
				
				distance_group_right.y3[0] += 270;	
				for(var i = 0, j=1; i<distance_group_right.y3.length, j<distance_group_right.y3.length; i++, j++){	//放大時改變Y座標(left)													
						distance_group_right.y3[j] = distance_group_right.y3[i] + distance_group_length_right.len3[i]+5;					
				}
				
				initial();
				break;
		}
	},
	
	create_delete_tech: function(id, top, left, width, height,area,color,text){
		var div = document.createElement("div");
		var inside_area = document.getElementById(area);
		div.id = id;
		div.style.position = "absolute";
		div.style.width = width+"px";
		div.style.height = height+"px";
		div.style.top = top+"px";
		div.style.left = left+"px";
		div.style.color = color;
		div.innerHTML = text;
		div.style.fontSize = "90px";
		div.style.textAlign = "center";
		$(div).css("background","-webkit-gradient(linear,left top,right bottom, from(#FFE4B5),to(#FFD700))");
		$(div).css("-webkit-border-radius","20px");
		inside_area.appendChild(div);
	},
	
	create_move_box: function(id, top, left, width, height,area){
		var div = document.createElement("div");
		var inside_area = document.getElementById(area);
		div.id = id;
		div.style.position = "absolute";
		div.style.width = width+"px";
		div.style.height = height+"px";
		div.style.top = top+"px";
		div.style.left = left+"px";
		$(div).css("-webkit-border-radius","20px");
		
		switch(id){
			case "turn_right":
				$(div).css("background","-webkit-gradient(linear,left top,right bottom, from(#E0EEEE),to(#DEB887))");
				break;			
			case "turn_left":
				$(div).css("background","-webkit-gradient(linear,left top,right bottom, from(#FFE4B5),to(#FFD700))");
				break;
		}
		
		inside_area.appendChild(div);
	},
	
	create_group_tech: function(icon ,id, top, left, width, height,area,src,text){
		switch(icon){
			case "group_tech":
				var div = document.createElement("div");
				var inside_area = document.getElementById(area);
				div.id = id;
				$(div).css("backgroundImage",["url(",src,")"].join(""));
				div.style.position = "absolute";
				div.style.width = width+"px";
				div.style.height = height+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";		
				$(div).css("-webkit-transform","rotate(-90deg)");
				inside_area.appendChild(div);
				break;
			case "group_black":
				var div = document.createElement("div");
				var inside_area = document.getElementById(area);
				div.id = id;		
				div.style.position = "absolute";
				div.style.width = width+"px";
				div.style.height = height+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";		
				div.style.background = "white";
				div.style.color = "black";
				div.innerHTML = text;
				div.style.fontSize = "90px";
				div.style.textAlign = "center";
				$(div).css("-webkit-transform","rotate(-90deg)");
				$(div).css("-webkit-border-radius","20px");
				inside_area.appendChild(div);
				break;				
			case "group_blue":
				var div = document.createElement("div");
				var inside_area = document.getElementById(area);
				div.id = id;				
				div.style.position = "absolute";
				div.style.width = width+"px";
				div.style.height = height+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";		
				div.style.background = "white";
				div.style.color = "blue";
				div.innerHTML = text;
				div.style.fontSize = "90px";
				div.style.textAlign = "center";
				$(div).css("-webkit-transform","rotate(-90deg)");
				$(div).css("-webkit-border-radius","20px");
				inside_area.appendChild(div);
				break;
			case "group_red":
				var div = document.createElement("div");
				var inside_area = document.getElementById(area);
				div.id = id;				
				div.style.position = "absolute";
				div.style.width = width+"px";
				div.style.height = height+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";		
				div.style.background = "white";
				div.style.color = "red";
				div.innerHTML = text;
				div.style.fontSize = "90px";
				div.style.textAlign = "center";
				$(div).css("-webkit-transform","rotate(-90deg)");
				$(div).css("-webkit-border-radius","20px");
				inside_area.appendChild(div);
				break;
			case "add":
				var div = document.createElement("div");
				var inside_area = document.getElementById(area);
				div.id = id;
				$(div).css("backgroundImage",["url(",src,")"].join(""));
				div.style.position = "absolute";
				div.style.width = width+"px";
				div.style.height = height+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";		
				$(div).css("-webkit-transform","rotate(-90deg)");
				inside_area.appendChild(div);
				break;
			case "sustract":
				var div = document.createElement("div");
				var inside_area = document.getElementById(area);
				div.id = id;
				$(div).css("backgroundImage",["url(",src,")"].join(""));
				div.style.position = "absolute";
				div.style.width = width+"px";
				div.style.height = height+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";		
				$(div).css("-webkit-transform","rotate(90deg)");
				inside_area.appendChild(div);
				break;
			case "amount":
				var div = document.createElement("div");
				var inside_area = document.getElementById(area);
				div.id = id;				
				div.style.position = "absolute";
				div.style.width = width+"px";
				div.style.height = height+"px";
				div.style.top = top+"px";
				div.style.left = left+"px";		
				div.style.color = "black";
				div.innerHTML = text;
				div.style.fontSize = "40px";
				div.style.textAlign = "center";
				$(div).css("-webkit-transform","rotate(-90deg)");
				$(div).css("-webkit-border-radius","20px");
				inside_area.appendChild(div);
				break;
			}		
	},
	
	switchOperator: function(op){
		switch(op){
			case "+":
				return "-";
				break;
			case "-":
				return "+";
				break;
			case "*":
				return "/";
				break;
			case "/":
				return "*";
		}
	},
	
	createMoveText: function(amo, whichText){
		var text ="";		
		switch(whichText){
			case "●":
				for(var i =0; i<amo; i++){
					text +="●"
				}
				return text;
				break;
			case "＼":
				for(var i =0; i<amo; i++){
					text +="＼"
				}
				return text;
				break;
			case "口":
				return text += "口";
				break;
		}		
	}
}
