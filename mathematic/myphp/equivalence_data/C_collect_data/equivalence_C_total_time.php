<?php
   //收集每一題的花費時間
  	$time = $_POST['time'];
	$date = $_POST['date'];
	$question = $_POST['ques'];
 	$hostname= "localhost";		//主機名稱
	$database= "equivalence_data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);
		$ob = "INSERT INTO  `C_total_time`(`id`,`question`,`time`,`date`) VALUES('', '".$question."'".",'".$time."',"."'".$date."')";		
		mysql_query($ob, $link);	
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	}  
?>