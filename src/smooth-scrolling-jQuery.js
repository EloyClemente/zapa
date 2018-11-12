
// El enlace será seleccionado por su clase
// En el href especificamos el id a buscar
//..........................................
// <a class="slide" href="#ancla"> 



$(document).ready(function(){

	$('.slide').click(function(e){

		var linkHref = $(this).attr('href');



		$('html, body').animate({

			scrollTop: $(linkHref).offset().top
		}, 1000);

		e.preventDefault();
	});
});




// El scroll buscará el id
//........................
// <div id="ancla"></div>