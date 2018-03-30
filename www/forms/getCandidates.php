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
	
	$id = $_POST['id'];

	$sql = "SELECT candidates.PositionID, candidates.CandidateID, candidates.Name, position.Position FROM candidates INNER JOIN position on position.PositionID = candidates.PositionID where candidates.PositionID = ".$id;
	$result = mysqli_query($con,$sql);
	
	$arr = array();

	while( $row = mysqli_fetch_array($result) ){
		$pos = $row['Position'];
		$id = $row['CandidateID'];
		$name = $row['Name'];
		
		$arr[] = array("id" => $id, "name" => $name, "pos" => $pos);
	}

	// encoding array to json format
	echo json_encode($arr);

?>