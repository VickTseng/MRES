<?php
      //收集每個人轉換圖卡的時間
  	$time = $_POST['time'];
	$date = $_POST['date'];
	$ques_index = $_POST['ques'];
	$card = $_POST['card'];
	$before_trans = $_POST['before_trans'];
	$after_trans = $_POST['after_trans'];
	$condition = $_POST['condition'];
	
 	$hostname= "localhost";		//主機名稱
	$database= "equivalence_data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);		
		$ob = "INSERT INTO `B_card_trans_time`(`id`,`ques_index`,`card`,`before_trans`,`after_trans`,`time`,`condition`,`date`) VALUES('','"
		.$ques_index."','".$card."','".$before_trans."','".$after_trans."','".$time."','".$condition."','".$date."')";
		mysql_query($ob, $link);	
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	} 
?>