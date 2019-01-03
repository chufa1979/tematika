<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
	"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" version="-//W3C//DTD XHTML 1.1//EN" xml:lang="en">
<head>
	
		<title>Tematiko</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<meta name="description" content="Ropa y accesorios tematicos para niños" />
		<meta name="keywords" content="ropa,accesorios,tematiko,personajes" />

		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<link rel="stylesheet" type="text/css" href="css/media.css" />
		<link rel="stylesheet" type="text/css" href="css/lib/flexslider.css" media="screen" />
		<link rel="stylesheet" type="text/css" href="css/lib/colorbox.css" />

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="js/lib/flowplayer-3.0.0-rc2.min.js" type="text/javascript"></script>
		
		<script src="js/lib/modernizr.js" type="text/javascript"></script>
		<script src="js/lib/jquery.flexslider.js"></script>
		<script src="js/lib/jquery.easing.js"></script>
		<script src="js/lib/jquery.mousewheel.js"></script>
		<script src="js/lib/jquery.colorbox.js"></script>
		<script src="js/cantalupe.js" type="text/javascript"></script>
		<script type="text/javascript" src="http://flesler-plugins.googlecode.com/files/jquery.scrollTo-1.4.2-min.js"></script>
		<script type="text/javascript" src="js/lib/selectivizr.js"></script> <!-- Selectivizr -->	
		
</head>
<body>
	<?php include_once("analyticstracking.php") ?>
	<div id="header" class="menu">
		<ul>
			<li class="uno">
				<span>
					<img src="images/uno.png" />	
				</span>
				<a href="#home" class="link">home</a>
			</li>
			<li class="dos">
				<span>
					<img src="images/dos.png" />	
				</span>
				<a href="#tproductos" class="link">productos</a>
			</li>
			<li class="cinco">
				<span>
					<img src="images/cinco.png" />	
				</span>
				<a href="#contacto_content" class="inline-contacto">contacto</a>
			</li>
			<li class="seis">
				<a href="https://www.facebook.com/TematikoTMK" target="_blank" class="facebook">
					<img src="images/icon-facebook.png" alt="Facebook" />
				</a>
			</li>
            <li class="seis">
				<a href="https://www.instagram.com/tematiko/" target="_blank" class="instagram">
					<img src="images/icon-instagram.png" alt="Instagram" />
				</a>
			</li>
            <li class="seis">
				<a href="http://www.tematiko.mitiendanube.com/" target="_blank" class="tooltips eshop">
					<img src="images/icon-tienda.png" alt="E-Shop Tematiko" /><span>e-Shop</span>
				</a>
			</li>
		</ul>
	</div>	
	<div id="wrapper">
		<ul id="mask">
			<li id="tproductos" class="contenedor box">
				<div id="productos">
					
					<a href="https://www.facebook.com/TematikoTMK" target="_blank" class="logo-facebook">
						<img src="images/facebook-productos.png" alt="Facebook" />
					</a>
					<span class="logo-chico" >
						<img src="images/logo-tematiko.png" alt="Tematiko" />
					</span>
				  <p>Remeras, Buzos, Trajes de baño,<br /> Pijamas, Ropa Interior, Conjuntos de jogging, Jeans, Polleritas, Leggins<br /> y accesorios como  Mochilas, Lápices, Cartucheras, Vasos, Tazas, Alcancías, Luncheras,<br /> Perfumes, Maquillajes, Paraguas, pilotos, y muchas cosas más!</p>
				</div>
				<div class="productos">nuestros <span>productos</span></div>
				<div class="naranja">
					
				</div>
				<div class="blanco">
					<img src="images/productos.png"/>
				</div>
		  </li>
			<li id="home" class="contenedor2 box">
				<div id="home">
					<a href="https://www.facebook.com/TematikoTMK" target="_blank" class="logo-facebook">
						<img src="images/facebook-productos.png" alt="Facebook" />
					</a>
                    <a href="https://www.instagram.com/tematiko/" target="_blank" class="logo-instagram">
						<img src="images/instagram.png" alt="Instagram" />
					</a>
                    <a href="http://www.tematiko.mitiendanube.com/" target="_blank" class="logo-tienda">
						<img src="images/eshop.png" alt="E-shop Tematiko" />
					</a>
					<div class="fb-social">
						<iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FTematikoTMK&amp;width=450&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;send=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:114px; height:21px;" allowTransparency="true"></iframe>
					</div>
					<div class="center">
						<img src="images/logo-tematiko.png" alt="Tematiko" />
						<p>Tematiko es una propuesta muy particular y diferente en ropa y accesorios para niños de 0 a 12 años, donde sus personajes favoritos saltan directamente de las películas, dibujitos animados o historietas a sus prendas.</p>
					</div>
				</div>
				<div class="amarillo">
					<a href="#contacto_content" class="contacto inline-contacto">
						<img src="images/contacto.png" alt="Contacto" />
					</a>
                    <a href="#tproductos" class="nuestrosp inline-nuestrosp">
						<img src="images/nuestrosprod.png" alt="Contacto" />
					</a>	
				</div>
				<div class="rosa">
			  </div>
			</li>
		</ul>	
	</div>	
	<div style='display:none'>
		<div id='contacto_content'>
			<div class="formulario">
				<form id="form" name="form" method="post" action="mail.php">
					<label>Nombre</label>
					<input type="text" class="req" rel="text" name="first"  id="first"/>
					<label>Email</label>
					<input type="text" class="req" rel="email" name="mail" id="mail"/>
					<label>Asunto</label>
					<input type="text" class="req" rel="text" name="asunto"  id="asunto"/>
					<label>Mensaje</label>
					<textarea class="req" name="msj" id="msj"></textarea>
					<div>
						<input type="reset" value="borrar" class="borrar"/>
						<input type="submit" value="enviar" name="enviar" id="button" class="button enviar"/>
					</div>
				</form>
				<?php if(array_key_exists('r',$_GET) && $_GET['r'] == 'gracias' ):?>
						<div id="success">
							<span style="color:green;">Gracias por contactarse con Tematiko. Nos comunicaremos a la brevedad.</span>
						</div>
						<script type="text/javascript">
							$(function(){
								$('#success').show();
							});
						</script>
						<?php else: ?>
							<div id="errors">
								<span style="color:red;">Hubo un error al intentar enviar el formulario. Por favor, intente nuevamente.</span>
							</div>
				<?php endif; ?>
			</div>
			<div class="detalles">
				<div>
					<span>TEMATIKO<br />CIUDAD DE BUENOS AIRES</span>
					<p>José Pedro Varela 3213<br />Esq. Cuenca. Villa del Parque <br />T: 4587-6204 <br />Lunes a Viernes 10 a 13hs / 16 a 20hs<br />Sábados 10 a 13.30hs / 16.30 a 20hs</p>
					<a class="googlemap" href="https://maps.google.com.ar/maps?q=Jos%C3%A9+Pedro+Varela+3213,+Villa+del+Parque,+Buenos+Aires&hl=es&ie=UTF8&sll=-34.615853,-58.433298&sspn=0.280854,0.676346&oq=Jos%C3%A9+Pedro+Varela+3213,+villa+del&hnear=Jos%C3%A9+Pedro+Varela+3213,+Villa+del+Parque,+Buenos+Aires&t=m&z=16" target="_blank">
						<img src="images/googlemaps.png" width="169" height="29" alt="Google Maps" />
					</a>	
				</div>
			</div>
		</div>
	</div>
	<div style='display:none'>
		<div id='franquicias_content'>
			<img src="images/logo-tematiko-chico1.png" width="229" height="68" alt="Tematiko">
		  <p><span>para Franquicias:</span>Envianos tus datos a<a href="mailto:franquicias@tematiko.com.ar">franquicias@tematiko.com.ar</a>y nos contactaremos a la brevedad. <br /> <br />Gracias!</p>
		</div>
	</div>
	
	<script type="text/javascript" src="js/validador.js"></script>
	
	<div class="redondeado"></div>
	
</body>
</html>
