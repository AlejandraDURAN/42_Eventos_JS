
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

	$(".florecillas").click(function() {
    $(this).css("-webkit-filter","grayscale(100%)");

    });

    $('.slide').mouseenter(function() {
		$('.slide').slideToggle('slow');
	});


    $(".amanda").mouseenter(function(){
    $(this).css("-webkit-filter","blur(5px)");
 	 });
  
	$(".amanda").mouseleave(function(){
     $(this).css("-webkit-filter","blur(0px)");
  	});

    
    
  });
