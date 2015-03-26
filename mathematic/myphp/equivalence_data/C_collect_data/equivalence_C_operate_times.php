<?php
     //收集每個人的總填答次數、填答錯誤次數
  	$time = $_POST['time'];
	$date = $_POST['date'];
	$question = $_POST['ques'];
	$member = $_POST['member'];
	$error_times = $_POST['error'];
	$answer_times = $_POST['answer'];
	
 	$hostname= "localhost";		//主機名稱
	$database= "equivalence_data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);
		$ob = "INSERT INTO  `C_operate_times`(`id`,`question`,`who`,`error_times`,`answer_times`,`date`) VALUES('','".$question."', '".$member."'".",'".$error_times."',"."'".$answer_times."'".",'".$date."'".")";		
		mysql_query($ob, $link);	
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	}  
?>