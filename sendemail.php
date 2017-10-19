<?php
		$to = "sprzedaz@rezydencjafryderyk.pl";
			$subject = "Nowa wiadomość ze strony rezydencjafryderyk.pl";
			$message = "
			<html>
			<head>
			</head>
			<body>
			<p>Nowa wiadomość ze strony rezydencjafryderyk.pl</p>
			<p>Imię / nazwisko: <strong>".$_POST['name']."</strong></p><br>
			<p>Email: <strong>".$_POST['email']."</strong></p>
			<p>Temat: <strong>".$_POST['subject']."</strong></p>
			<p>Wiadomość: <strong>".$_POST['message']."</strong></p>
			</body>
			</html>
			";
		
		// Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		
		
		mail($to,$subject,$message,$headers);
		
		echo "1";


?>
