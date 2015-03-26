<?php
      //收集每個人轉換圖卡發生的錯誤次數
	$date = $_POST['date'];
	$ques_index = $_POST['ques'];
	$card = $_POST['card'];
	$error_times = $_POST['error_times'];
	$condition = $_POST['condition'];
	$before_trans = $_POST['before_trans'];
	$after_trans = $_POST['after_trans'];
	
 	$hostname= "localhost";		//主機名稱
	$database= "equivalence_data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);
		$ob = "INSERT INTO `C_trans_error_times`(`id`,`ques_index`,`card`,`before_trans`,`after_trans`,`error_times`,`condition`,`date`) VALUES('','"
		.$ques_index."','".$card."','".$before_trans."','".$after_trans."','".$error_times."','".$condition."','".$date."')";
		mysql_query($ob, $link);	
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	} 
?>