<?php
    //收集每一題的題目
  	$time = $_POST['time'];
	$date = $_POST['date'];	
	$first_ques = $_POST['first_ques'];
	$second_ques = $_POST['second_ques'];
	$third_ques = $_POST['third_ques'];
 	$hostname= "localhost";		//主機名稱
	$database= "equivalence_data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼
	$ques_index = array("first","second","third");
	$question = array($first_ques, $second_ques, $third_ques);

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);
		for($i=0; $i<3;$i++){
			$ob = "INSERT INTO  `A_question`(`id`,`ques_index`,`question`,`date`) VALUES('', '".$ques_index[$i]."'".",'".$question[$i]."',"."'".$date."')";
			mysql_query($ob, $link);
		}			
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	}  
?>