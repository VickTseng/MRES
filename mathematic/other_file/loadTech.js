/**
 * @author wei
 */
function loadTech(){
	
}

loadTech.prototype = {
	
	loadArea: function(){
		tech.createNumberBox(10,30,130,1500,"number_area1"), tech.createNumberBox(1120,250,1500,130,"number_area2"), tech.createNumberBox(10,1850,130,1500,"number_area3");	//創造數字空間
		tech.createOperatorArea(680,180,"operator_area1",90), tech.createOperatorArea(950,1100,"operator_area2",0), tech.createOperatorArea(250,1670,"operator_area3",-90); //運算子空間
		tech.createCombineArea(900,180,"combine_area1",90), tech.createCombineArea(950,1350,"combine_area2",0), tech.createCombineArea(30,1670,"combine_area3",-90);	//數字空間
		
	},
	
	loadFirstTech: function(){
		for(var i=30,j=0; i<1200,j<=9; i+=90, j++){	//第一位使用者工具列
				tech.createNumber(i,30, "block"+j,"number_area1",90);//創建數字格
			}	
			
			for(var i=930,j=30; i<1200,j<=33; i+=90, j++){	
				tech.createOperator(i,30, "block"+j,"number_area1",90);//運算子
			}
			tech.createImageArea(200,70,"technique1",90);	//創造圖像空間(user1)
			tech.createClean(1350,10,120,65,"block42","number_area1",90,"Clean");	//清除按鈕
	},
	
	loadSecondTech: function(){
		for(var i=30,j=10; i<1200,j<=19; i+=90, j++){	//第二位使用者工具列
				tech.createNumber(30,i, "block"+j,"number_area2",0);
			}			
			
			for(var i=930,j=34; i<1200,j<=37; i+=90, j++){
				tech.createOperator(30,i, "block"+j,"number_area2",0);//運算子
			}
			tech.createImageArea(850,530,"technique2",0);	//創造圖像空間(user2)
			tech.createClean(30,1330,120,65,"block43","number_area2",0,"Clean");	//清除按鈕
	},
	
	loadThirdTech: function(){
		for(var i=30,j=20; i<1200,j<=29; i+=90, j++){	//第三位使用者工具列
				tech.createNumber(i,30, "block"+j,"number_area3",-90);
			}		
			
			for(var i=930,j=38; i<1200,j<=41; i+=90, j++){
				tech.createOperator(i,30, "block"+j,"number_area3",-90);//運算子
			}	
			tech.createImageArea(570,1450,"technique3",-90);	//創造圖像空間(user3)
			tech.createClean(1350,10,120,65,"block44","number_area3",-90,"Clean");	//清除按鈕
	}	
	
}
