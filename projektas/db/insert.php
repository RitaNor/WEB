<?php	
	// Apsiraðome parametrus
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "n365";

	// Sukuriamas prisijungimas
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	// Patikriname prisijungimà
	if($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	
	$stmt = $conn->prepare("INSERT INTO contact1 (name, email, comment, date) 
										VALUES (?, ?, ?, now())");
	
	$stmt->bind_param("sss", $name, $email, $comment);
	
	$name = $_POST["name"];
	$email = $_POST["email"];
	$comment= $_POST("comment"];
	// set parameters and execute
	if ($stmt->execute()) { 
		
		header('Location: /eversion.html');
	} else {
	   echo $stmt->error;
	}
	
	$stmt->close();
	
	$conn->close();
?>