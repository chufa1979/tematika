var Tematiko = Tematiko || {};

Tematiko.init = function(){

	$('#success').css({display:'none'});
	$('#errors').css({display:'none'});
	$('#mail').data('default',$('#mail').val());
	$('#first').data('default',$('#first').val());
	$('#asunto').data('default',$('#asunto').val());
	$('#msj').data('default',$('#msj').val());
	
	$('#mail,#first,#asunto,#msj').click(function(){
		if($(this).val() == $(this).data('default')) $(this).val('');
	});
	
	$('#mail,#first,#asunto,#msj').blur(function(){
		if($(this).val() == '') $(this).val($(this).data('default'));
	});
	
	$('#button').click(function(){
		
		if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi.test($('#mail').val())){
			$('#mail').addClass('error');
		}else{
			$('#mail').removeClass('error');
		}
		
		if(!$('#first').val().length){
			$('#first').addClass('error');
		}else{
			$('#first').removeClass('error');
		}
		
		if(!$('#asunto').val().length){
			$('#asunto').addClass('error');
		}else{
			$('#asunto').removeClass('error');
		}
		
		if(!$('#msj').val().length){
			$('#msj').addClass('error');
		}else{
			$('#msj').removeClass('error');
		}
		
		if($('.error').length){
			return false;
		}else{
			$.ajax({
				url: 'mail.php',
				data: {
					'first' : $('#first').val(),
					'asunto'  : $('#asunto').val(),
					'msj' : $('#msj').val(),
					'mail'  : $('#mail').val()
				},
				type : 'post',
				complete: function(o){
					var result = eval(o.responseText);
					if(result){
						$('#success').css({display:'block'});
						
						
					}else{
						$('#error').css({display:'block'});
					}
				}
			});
		}
		
		return false;
	});
};

$(function(){Tematiko.init();});
