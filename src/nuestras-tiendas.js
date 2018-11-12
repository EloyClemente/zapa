
var cajas = document.getElementsByClassName('nuestrasTiendas__caja')
var logos = document.getElementsByClassName('nuestrasTiendas__logo')


function dimensionarCajas() 
{
	var viewport = window.innerWidth



	for(var i=0; i < cajas.length; i++) // Controla el height de las cajas
	{
		if(viewport > 800)
		cajas[i].style.height = viewport / 3 + 'px'

		else
		cajas[i].style.height = viewport / 1.5 + 'px'
	}



	for(var i=0; i < logos.length; i++) // Dimensionar logos
	{
		if(viewport > 800 && viewport < 1300)
		logos[i].style.width = viewport / 8 + 'px'

		else if(viewport < 800)
		logos[i].style.width = viewport / 4 + 'px'
	}
}
window.addEventListener('load', dimensionarCajas)
window.addEventListener('resize', dimensionarCajas)

