<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-47468643-1', 'tematiko.com.ar');
	  ga('send', 'pageview');
</script>

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