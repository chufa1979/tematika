<?php include_once("analyticstracking.php") ?>
<?php
	
	$first = $_POST['first'];
	$mail = $_POST['mail'];
	$asunto = $_POST['asunto'];
	$msj = $_POST['msj'];

	$error = false;
	if(!strlen($first)){
		$error = true;
	}
	if(!strlen($msj)){
		$error = true;
	}
	if(!strlen($asunto)){
		$error = true;
	}
	if(!filter_var($mail, FILTER_VALIDATE_EMAIL)){
		$error = true;
	}
	if(!$error){
		$header = 'From: ' . $mail . " \r\n";
		$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
		$header .= "Mime-Version: 1.0 \r\n";
		$header .= "Content-Type: text/plain";

		$mensaje  = "Nombre: " . $first . " \r\n";
		$mensaje .= "E-Mail: " . $mail . " \r\n";
		$mensaje .= "Asunto: " . $asunto . " \r\n";
		$mensaje .= "Mensaje: " . $msj;

		$para = 'info@tematiko.com.ar';
		
		//$para = 'fclastra@gmail.com';
		
		
		$asunto = 'Contacto Tematiko';

		if(mail($para, $asunto, utf8_decode($mensaje), $header)){
			echo 1;
		}else{
			echo 0;
		}
		
	}else{
		echo 0;
	}
?>