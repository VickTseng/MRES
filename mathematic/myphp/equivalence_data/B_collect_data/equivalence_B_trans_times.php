<?php
      //收集每個人轉換圖卡的次數
	$ques_index = $_POST['ques'];
	$date = $_POST['date'];
	$A_card_1= $_POST['A_gra1'];
	$A_card_2= $_POST['A_gra2'];
	$A_card_3= $_POST['A_gra3'];
	$B_card_1= $_POST['B_gra1'];
	$B_card_2= $_POST['B_gra2'];
	$B_card_3= $_POST['B_gra3'];
	$C_card_1= $_POST['C_gra1'];
	$C_card_2= $_POST['C_gra2'];
	$C_card_3= $_POST['C_gra3'];
	$A_card_1_trans_times = $_POST['A_gra1_times'];
	$A_card_2_trans_times = $_POST['A_gra2_times'];
	$A_card_3_trans_times = $_POST['A_gra3_times'];
	$B_card_1_trans_times = $_POST['B_gra1_times'];
	$B_card_2_trans_times = $_POST['B_gra2_times'];
	$B_card_3_trans_times = $_POST['B_gra3_times'];
	$C_card_1_trans_times = $_POST['C_gra1_times'];
	$C_card_2_trans_times = $_POST['C_gra2_times'];
	$C_card_3_trans_times = $_POST['C_gra3_times'];
	
 	$hostname= "localhost";		//主機名稱
	$database= "equivalence_data_log";	//資料庫名稱
	$username= "root";		//資料庫登入帳號
	$password= "1234";		//資料庫登入密碼	
	
	$card = array($A_card_1, $A_card_2, $A_card_3, $B_card_1, $B_card_2, $B_card_3, $C_card_1, $C_card_2, $C_card_3);
	$trans_times = array($A_card_1_trans_times, $A_card_2_trans_times, $A_card_3_trans_times, $B_card_1_trans_times, 
	$B_card_2_trans_times, $B_card_3_trans_times, $C_card_1_trans_times, $C_card_2_trans_times, $C_card_3_trans_times);

	$link = mysql_connect($hostname, $username, $password);

	if($link){
		mysql_select_db($database);
		for($i=0; $i<9; $i++){
			$ob = "INSERT INTO  `B_card_trans_times`(`id`,`ques_index`,`card`,`trans_times`,`date`) VALUES('', '".$ques_index."'".",'".$card[$i]."',"."'".$trans_times[$i]."','".$date."')";
			mysql_query($ob, $link);
		}							
		mysql_close($link);	
	}else{
		echo "資料庫連接失敗";
	} 
?>