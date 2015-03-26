<?php
    //收集個人花費時間
  	$time = $_POST['p_time'];
	$date = $_POST['date'];
	$member = $_POST['member'];
 	$hostname= "localhost";		//主機名稱
	$database= "data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼
	$table = "collect_personal_time";

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);
		$ob = "INSERT INTO  `collect_personal_time`(`id`,`member`,`time`,`date`) VALUES('', '".$member."'".",'".$time."',"."'".$date."')";		
		mysql_query($ob, $link);	
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	}  
  
?>