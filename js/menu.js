$(document).ready( function () {

	$("#boxThemes").addClass('hide');
	$("#boxFbApi").addClass('hide');


	$('#themes').on('click',function(event){
		$("#themes").toggleClass("openbox");
		if ($("#themes").hasClass("openbox") == true){
			event.preventDefault();
			$('#themes').addClass('turn');
			$('#fbapi').addClass('repli');
			$('#import').addClass('repli');
			$('#notifications').addClass('repli');
			$('#share').addClass('repli');
			$("#boxThemes").addClass('show');
		}else{
			$('#themes').removeClass('turn');
			$('#fbapi').removeClass('repli');
			$('#import').removeClass('repli');
			$('#notifications').removeClass('repli');
			$('#share').removeClass('repli');
			$("#boxThemes").removeClass('show');
			$("#boxThemes").addClass('hide');
		}
	});

	$('#fbapi').on('click',function(event){
		$("#fbapi").toggleClass("openbox");
		if ($("#fbapi").hasClass("openbox") == true){
			event.preventDefault();
			$('#themes').addClass('repli');
			$('#fbapi').addClass('turn');
			$('#import').addClass('repli');
			$('#notifications').addClass('repli');
			$('#share').addClass('repli');
			$("#boxFbApi").addClass('show');
		}else{
			$('#themes').removeClass('repli');
			$('#fbapi').removeClass('turn');
			$('#import').removeClass('repli');
			$('#notifications').removeClass('repli');
			$('#share').removeClass('repli');
			$("#boxFbApi").removeClass('show');
			$("#boxFbApi").addClass('hide');
		}
	});

	$('#c1').on('click',function(event){
		$('body').addClass('green');
		$('body').removeClass('red');
		$('body').removeClass('blue');
		$('body').removeClass('white');
		$('body').removeClass('pink');
		$('body').removeClass('brown');			
	});
	$('#c2').on('click',function(event){
		$('body').removeClass('green');
		$('body').addClass('red');
		$('body').removeClass('blue');
		$('body').removeClass('white');
		$('body').removeClass('pink');
		$('body').removeClass('brown');			
	});
	$('#c3').on('click',function(event){
		$('body').removeClass('green');
		$('body').removeClass('reb');
		$('body').addClass('blue');
		$('body').removeClass('white');
		$('body').removeClass('pink');
		$('body').removeClass('brown');			
	});
	$('#c4').on('click',function(event){
		$('body').removeClass('green');
		$('body').removeClass('red');
		$('body').removeClass('blue');
		$('body').addClass('white');
		$('body').removeClass('pink');
		$('body').removeClass('brown');			
	});
	$('#c5').on('click',function(event){
		$('body').removeClass('green');
		$('body').removeClass('red');
		$('body').removeClass('blue');
		$('body').removeClass('white');
		$('body').addClass('pink');
		$('body').removeClass('brown');			
	});
	$('#c6').on('click',function(event){
		$('body').removeClass('green');
		$('body').removeClass('red');
		$('body').removeClass('blue');
		$('body').removeClass('white');
		$('body').removeClass('pink');
		$('body').addClass('brown');			
	});

});