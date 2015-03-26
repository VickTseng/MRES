<?php
  //收集總花費時間
  	$time = $_POST['t_time'];
	$date = $_POST['date'];
 	$hostname= "localhost";		//主機名稱
	$database= "data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼
	$table = "collect_Total_time";

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);
		$ob = "INSERT INTO  `collect_Total_time`(`id`,`time`,`date`) VALUES('', '".$time."'".",'".$date."')";
		mysql_query($ob, $link);	
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	}  
  
?>