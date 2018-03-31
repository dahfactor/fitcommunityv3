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
	
	$voterID = $_POST['idhidden'];
	$candidateIDs = $_POST['selcandidates'];
	$tags = implode(', ',$candidateIDs); 
	
	$sql2 = "UPDATE voters 
	SET Voted = 1
	WHERE VoterID = ".$voterID;
	
	$sql = "UPDATE candidates
	SET Votes = Votes + 1
	WHERE CandidateID in (".$tags.")";
	
	mysqli_query($con,$sql2);
	mysqli_query($con,$sql);
?>