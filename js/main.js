
$(document).ready(function(){
 	console.log('listo');

 
	$('input').on('mouseenter', function() {
		$(this).addClass('blanco');
	});

	$('input').on('mouseleave', function() {
		console.log('Cambio clase');
		$(this).removeClass('blanco');
	});

	$('input').focus();



	$('h2').on('mouseenter', function() {
		$(this).addClass('morado');
	});

	$('h2').on('mouseleave', function() {
		$(this).removeClass('morado');
	});

	$('h2').focus();


});