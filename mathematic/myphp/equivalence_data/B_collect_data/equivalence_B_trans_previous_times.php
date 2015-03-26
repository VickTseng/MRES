<?php
      //收集每個人進行轉換圖卡時，點選上一步驟的次數
	$date = $_POST['date'];
	$ques_index = $_POST['ques'];
	$card = $_POST['card'];
	$pre_times = $_POST['pre_times'];
	$condition = $_POST['condition'];
	
 	$hostname= "localhost";		//主機名稱
	$database= "equivalence_data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);
		$ob = "INSERT INTO  `B_trans_previous_times`(`id`,`ques_index`,`card`,`previous_times`,`condition`,`date`) VALUES('','".$ques_index."', '".$card."'".",'".$pre_times."',"."'".$condition."'".",'".$date."'".")";		
		mysql_query($ob, $link);	
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	}  
?>