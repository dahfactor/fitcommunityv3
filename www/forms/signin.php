<?php 
header('Content-type: application/json');
//$server = "localhost";
//$username = "root";
//$password = "";
//$database = "fitcommunity";

$server = "mysql.dfactor.impactsw.com";
$database = "itr_dfactor";
$username = "dfactor";
$password = "daryl2@12";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
mysql_select_db($database, $con);

$email = mysql_real_escape_string($_POST["email"]);
$password = mysql_real_escape_string($_POST["password"]);

if ($email == "" or $password == ""){
	exit();
}

$sqlcheck = mysql_query("SELECT id,fullname,age,gender,email,password from accounts where email = '$email' and password = '$password'", $con);
$sqlcheckcount = mysql_num_rows($sqlcheck);

if ($sqlcheckcount == 1){
	$row = mysql_fetch_row($sqlcheck);
	$response_array['status'] = 1;  
	$response_array['name'] = $row[1];
	echo json_encode($response_array);
}else{
	$response_array['status'] = 0;  
	echo json_encode($response_array);
}

mysql_close($con);
?>