<?php
   //紀錄每個人的圖卡
	$date = $_POST['date'];
	$ques_index = $_POST['ques'];
	$who = $_POST['who'];
	$gra_first = $_POST['gra_first'];
	$gra_second = $_POST['gra_second'];
	$gra_third = $_POST['gra_third'];
	
 	$hostname= "localhost";		//主機名稱
	$database= "equivalence_data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);
		$ob = "INSERT INTO  `C_member_card`(`id`,`ques_index`,`who`,`gra_first`,`gra_second`,`gra_third`,`date`) VALUES('', '"
		.$ques_index."'".",'".$who."',"."'".$gra_first."','".$gra_second."','".$gra_third."','".$date."'".")";		
		mysql_query($ob, $link);	
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	}  
?>