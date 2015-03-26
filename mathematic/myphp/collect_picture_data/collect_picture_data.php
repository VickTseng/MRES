<?php
$c = $_POST['obj'];
echo $c;
	
	
$hostname= "localhost";		//主機名稱，一般都設定「localhost」當地主機
$database= "test";	//資料庫名稱
$username= "root";		//資料庫登入帳號
$password= "1234";		//資料庫登入密碼
$table = "object";
$denom = 5;

$link = mysql_connect($hostname, $username, $password);

if($link){
	mysql_select_db($database);
	$ob = "INSERT INTO  `object`(`id`,`name`) VALUES('', '".$c."')";
	mysql_query($ob, $link);	
	mysql_close($link);	
}else{
	echo "資料庫連接失敗";
}


/* 
 INSERT INTO  `test`.`touch` (`id` ,`x` ,`y`)VALUES ('',  '50',  '100');
 */
?>

