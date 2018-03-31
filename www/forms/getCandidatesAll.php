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

	$sql = "SELECT * FROM candidates INNER JOIN position on position.PositionID = candidates.PositionID order by candidates.CandidateID ASC";
	$result = mysqli_query($con,$sql);
	
	$arr = array();

	while( $row = mysqli_fetch_array($result) ){
		$pos = $row['Position'];
		$name = $row['Name'];
		$year = $row['Year'];
		$block = $row['Block'];
		$votes = $row['Votes'];
		
		$arr[] = array("pos" => $pos, "name" => $name, "year" => $year, "block" => $block, "votes" => $votes);
	}

	// encoding array to json format
	echo json_encode($arr);

?>