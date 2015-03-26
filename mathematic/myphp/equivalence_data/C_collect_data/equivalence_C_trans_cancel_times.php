<?php
      //收集每個人轉換圖卡時，取消的次數  	
	$date = $_POST['date'];
	$ques_index = $_POST['ques'];
	$card = $_POST['card'];
	$cancel_times = $_POST['cancel_times'];
	
 	$hostname= "localhost";		//主機名稱
	$database= "equivalence_data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);
		$a = mysql_query("select card from C_trans_cancel_times where card ='".$card."' && ques_index ='".$ques_index."'", $link);
		$row = mysql_fetch_array($a);
		if($row){
			$ob = "UPDATE `C_trans_cancel_times` SET `cancel_times`='".$cancel_times."' WHERE `card` ='".$card."' && ques_index = '".$ques_index."'";
			mysql_query($ob, $link);
		}else{
			$ob = "INSERT INTO  `C_trans_cancel_times`(`id`,`ques_index`,`card`,`cancel_times`,`date`) VALUES('','".$ques_index."', '"
			.$card."'".","."'".$cancel_times."'".","."'".$date."')";		
			mysql_query($ob, $link);	
		}		
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	} 
?>