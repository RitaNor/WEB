<?php
	require_once('../db/connect.php');

	
	$stmt = $conn->prepare("INSERT INTO support (name, question, questiondate) 
										VALUES (?, ?, now())");
	
	$stmt->bind_param("ss", $name, $question);
	$name = $_POST["name"];
	$question = $_POST["question"];
	// set parameters and execute
	if ($stmt->execute()) { 
		echo "OK";
		header('Location: /LAYOUT/asmeninis/index.php');
	} else {
	   echo $stmt->error;
	}
	
	$stmt->close();
	
	require_once('../db/disconnect.php');
	
	// Nukreipiame á kità svetainæ
	//header('Location: /LAYOUT/asmeninis/index.php');
?>