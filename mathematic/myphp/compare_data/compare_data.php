<?php
$a = $_POST['touch_x'];
$b = $_POST['touch_y'];
echo $a.$b;
	
	
$hostname= "localhost";		//主機名稱，一般都設定「localhost」當地主機
$database= "test";	//資料庫名稱
$username= "root";		//資料庫登入帳號
$password= "s8413896";		//資料庫登入密碼
$table = "touch";
$denom = 5;

$link = mysql_connect($hostname, $username, $password);

if($link){
	mysql_select_db($database);
	$q ="INSERT INTO  `touch`(`id`,`x`,`y`) VALUES('', '".$a."',"."'".$b."')";
	mysql_query($q, $link);
	
	echo "<script type='text/javascript'>";
	echo "var table=".$denom;
	echo "</script>";	
	mysql_close($link);	
}else{
	echo "資料庫連接失敗";
}


/* 
 INSERT INTO  `test`.`touch` (`id` ,`x` ,`y`)VALUES ('',  '50',  '100');
 */
?>

