<?php
	header('Content-type: application/json');
	$server = "localhost";
	$username = "rsusuppl_rsu";
	$password = "rsusupply2018";
	$database = "rsusuppl_iitvoting";

	$con = mysqli_connect($server, $username, $password, $database);
	
	// Check connection
	if (!$con) {
		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT * FROM votingflag";
	$result = mysqli_query($con,$sql);
	
	$arr = array();
	while( $row = mysqli_fetch_array($result) ){
		$arr[] = array("flag" => $row['flag']);
	}

	// encoding array to json format
	echo json_encode($arr);

?>