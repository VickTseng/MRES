/**
 * @author wei
 */
function touch(){
	
}

touch.prototype = {
	
	touchstart: function(event){
		//event.changedTouches= event.targetTouches;
		console.log(["translate(",event.changedTouches[0].pageX,"px, ",event.changedTouches[0].pageY,"px)"].join(""));	//監控座標
		//console.log("cloze2 X:"+$('#cloze2').offset().left+ " cloze2 Y:"+$('#cloze2').offset().top);
		console.log("trans:"+trans);
		if(event.changedTouches.length>0){	
			for(var i=0; i<blockArray.length; i++){	//判斷每個block
				for(var j=0; j<event.changedTouches.length; j++){	//判斷被哪隻手指觸碰到					
					if(event.changedTouches[j].target.id == blockArray[i].id){	
					/*	if(blockArray[i].id == "block30"){
							cre.createObj(blockArray[i].genname,event.changedTouches[j].pageY, event.changedTouches[j].pageX);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
						}else if(blockArray[i].id == "block31"){
							cre.createObj(blockArray[i].genname,event.changedTouches[j].pageY, event.changedTouches[j].pageX);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							
						}else if(blockArray[i].id == "block32"){
							cre.createObj(blockArray[i].genname,event.changedTouches[j].pageY, event.changedTouches[j].pageX);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
						}*/if(blockArray[i].id == "block45"){
							cre.createDIV(blockArray[i].text,event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							$(".conbine_number1").html("");
						}else if(blockArray[i].id == "block46"){
							cre.createDIV(blockArray[i].text,event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							$(".conbine_number2").html("");
						}else if(blockArray[i].id == "block47"){
							cre.createDIV(blockArray[i].text,event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							$(".conbine_number3").html("");
						}
						else{
							cre.createDIV(blockArray[i].text, event.changedTouches[j].pageY, event.changedTouches[j].pageX, blockArray[i].genname);
							blockArray[i].identifier = event.changedTouches[j].identifier;			
							blockArray[i].offset.x = blockArray[i].x - event.changedTouches[j].pageX;
							blockArray[i].offset.y = blockArray[i].y - event.changedTouches[j].pageY;
							blockMap[blockArray[i].identifier] = blockArray[i];
							//console.log("Start: " +blockArray[i].identifier);	
						}		
												
					}
					
					if(event.changedTouches[j].target.className == "butt"){
						next();
					}else if(event.changedTouches[j].target.className == "butt2"){
						verify();
					}
					
					
					
					if(event.changedTouches[j].target.id == "question_box1"){
						trans=true;
						//$("question_box1").css("-webkit-transform-origin-x",1024+"px");
						//$("question_box1").css("-webkit-transform-origin-y",267+"px");
					}
				
						
				}
				
					
			}
			
		}
			
			event.preventDefault();
	},
	
	touchmove: function(event){
		//event.changedTouches= event.targetTouches;
		for(var i=0; i<event.changedTouches.length; i++){
			var block = blockMap[event.changedTouches[i].identifier];
			
			if(block){
				block.x = block.offset.x + event.changedTouches[i].pageX;
				block.y = block.offset.y + event.changedTouches[i].pageY;
				if(block.obj.parent().attr("id") == "number_area"){
					$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
					$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
					$("#"+block.genname).css("font-size",55);
				}else if(block.obj.parent().attr("id") == "number_area2"){
					$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",90,"deg)"].join(""));
					$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
					$("#"+block.genname).css("font-size",55);
				}else if(block.obj.parent().attr("id") == "number_area3"){
					$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",-90,"deg)"].join(""));
					$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
					$("#"+block.genname).css("font-size",55);
				}else{
					if(block.id == "block45"){
						$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",90,"deg)"].join(""));
						$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
						$("#"+block.genname).css("font-size",55);
					}else if(block.id == "block46"){
						$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)"].join(""));
						$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
						$("#"+block.genname).css("font-size",55);
					}else if(block.id == "block47"){
						$("#"+block.genname).css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px)","rotate(",-90,"deg)"].join(""));
						$("#"+block.genname).css("text-shadow","5px 5px 10px #CC9999");
						$("#"+block.genname).css("font-size",55);
					}
					
				}
				//block.gen_id.css("-webkit-transform", ["translate3d(",block.x,"px, ",block.y,"px, 0px) "].join(""));
				//console.log(block.gen_id);						
			}
			if(trans == true){
				//if(event.changedTouches[i].target.id =="question_box1"){	
					
					var node1 = {x:1024, y:267}, node2 = {x:event.changedTouches[i].pageX, y:event.changedTouches[i].pageY};
					var rotation = cre.ConvertPositionAngel(node2,node1);
   					$("#question_box1").css("-webkit-transform",["translate3d(0px,20px,0px)","rotate(",rotation,"deg)"].join(""));
   					
   					
				//}
				
			}
			
			
		}
		
		
		
		
		event.preventDefault();
	},
	
	touchend: function(event){
		//	event.changedTouches= event.targetTouches;
	//	console.log("End: " +event.changedTouches.length);
		for(var i=0; i<event.changedTouches.length; i++){
			var block =  blockMap[event.changedTouches[i].identifier];	
			if(block){	//當物件存在時跑判斷
				if($('#'+block.genname).length>0){	//當手指離開時消除物件
				
					if($('#'+block.genname).offset().left>=$('#cloze2').offset().left && $('#'+block.genname).offset().top>=$('#cloze2').offset().top && $('#'+block.genname).offset().left<=$('#cloze2').offset().left+100 && $('#'+block.genname).offset().top<=$('#cloze2').offset().top+100 && cre.isNumber(block.text)){	//cloze2
						$("#cloze2").html(block.text),$("#cloze2").css("color","#13A");
						n2 = block.text;
						block.x=0, block.y=0;
						$('#'+block.genname).remove();								
					}else if($('#'+block.genname).offset().left>=$('#fixed_box6').offset().left && $('#'+block.genname).offset().top>=$('#fixed_box6').offset().top && $('#'+block.genname).offset().left<=$('#fixed_box6').offset().left+100 && $('#'+block.genname).offset().top<=$('#fixed_box6').offset().top+100 && cre.isOperator(block.text)){
						$("#fixed_box6").html(block.text), $("#fixed_box6").css("color","#13A");
						o4=block.text;
						block.x=0, block.y=0;
						$('#'+block.genname).remove();	
					}else if($('#'+block.genname).offset().left>=$('.conbine_number1').offset().left && $('#'+block.genname).offset().top>=$('.conbine_number1').offset().top && $('#'+block.genname).offset().left<=$('.conbine_number1').offset().left+180 && $('#'+block.genname).offset().top<=$('.conbine_number1').offset().top+180){
						eval('sum1 += block.text');
						$('.conbine_number1').html(sum1), $('.conbine_number1').css("-webkit-transform","rotate(90deg)");
						block45.text = sum1;
						block.x=0, block.y=0;
						$('#'+block.genname).remove();							
					}else if($('#'+block.genname).offset().left>=$('.conbine_number2').offset().left && $('#'+block.genname).offset().top>=$('.conbine_number2').offset().top && $('#'+block.genname).offset().left<=$('.conbine_number2').offset().left+180 && $('#'+block.genname).offset().top<=$('.conbine_number2').offset().top+180){
						eval('sum2 += block.text');
						$('.conbine_number2').html(sum2);
						block46.text = sum2;
						block.x=0, block.y=0;
						$('#'+block.genname).remove();							
					}else if($('#'+block.genname).offset().left>=$('.conbine_number3').offset().left && $('#'+block.genname).offset().top>=$('.conbine_number3').offset().top && $('#'+block.genname).offset().left<=$('.conbine_number3').offset().left+180 && $('#'+block.genname).offset().top<=$('.conbine_number3').offset().top+180){
						eval('sum3 += block.text');
						$('.conbine_number3').html(sum3), $('.conbine_number3').css("-webkit-transform","rotate(-90deg)");
						block47.text = sum3;
						block.x=0, block.y=0;
						$('#'+block.genname).remove();							
					}			
					else {
						$('#'+block.genname).remove();
						block.x=0, block.y=0;						
					}
					
					
					
				}
				
				
						
				delete blockMap[event.changedTouches[i].identifier];
				
			
			}
			
			
		}trans=false; //手指離開後設定無法轉動
		event.preventDefault();
	}
}


		
