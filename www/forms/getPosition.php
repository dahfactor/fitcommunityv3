<?php
	header('Content-type: application/json');
	$server = "localhost";
	$username = "root";
	$password = "";
	$database = "iitvoting";

	$con = mysqli_connect($server, $username, $password, $database);
	
	// Check connection
	if (!$con) {
		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT * FROM position order by PositionID ASC";
	$result = mysqli_query($con,$sql);
	
	$arr = array();

	while( $row = mysqli_fetch_array($result) ){
		$id = $row['PositionID'];
		$position_name = $row['Position'];
		
		$arr[] = array("id" => $id, "position_name" => $position_name);
	}

	// encoding array to json format
	echo json_encode($arr);

?>