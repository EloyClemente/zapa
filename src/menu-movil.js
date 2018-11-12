

// CONFIGURAR EL MENÚ AQUÍ
// ====================================================
var menuMovilCSS = 
{ 
	breakpoint:    660,
	bgColor:       'rgba(255,255,255,.9)',
	enlacesTexto:  ['INICIO', 'NUESTRAS TIENDAS', 'TRABAJA CON NOSOTROS', 'CONTACTO'],
	enlacesRuta:   ['#inicio', '#tiendas', '#trabaja', '#contacto'],
	borde:         '1px solid rgba(255,255,255,.15)',
	colorHover:    'rgba(0,0,0,.2)',
	enlacesColor:  '#fff',
	fuente:        'sans-serif'
}
// ====================================================




function menuMovil(css)
{
	var barra     = document.createElement('div')
	var iconBars  = document.createElement('div')
	var iconBars1 = document.createElement('div')
	var iconBars2 = document.createElement('div')
	var iconBars3 = document.createElement('div')
	var menu      = document.createElement('nav')
	var ul        = document.createElement('ul')


	iconBars.appendChild(iconBars1)
	iconBars.appendChild(iconBars2)
	iconBars.appendChild(iconBars3)
	menu.appendChild(ul)
	document.body.appendChild(menu)
	document.body.appendChild(barra)
	document.body.appendChild(iconBars)


	barra.style.width           = '100%'
	barra.style.height          = '50px'
	barra.style.transition      = 'all, .3s'
	barra.style.position        = 'fixed'
	barra.style.top             = '-50px'
	barra.style.backgroundColor = css.bgColor
	menu.style.cssText          = 'width: 100%; height: 100%; transition: all, .3s; position: fixed; top: -100%;'
	menu.style.backgroundColor  = css.bgColor

	// Icono de barras
	// ======================
	iconBars.style.cssText  = 'width: 30px; height: 30px; transition: all, .3s; position: fixed; top: -30px; left: calc(100% - 40px); cursor: pointer;'
	iconBars1.style.cssText = 'width: 30px; height: 3px; background-color: #c20000; margin-bottom: 6px; border-radius: 2px; position: absolute; top: 0; left: 0; transition: all, .3s;'
	iconBars2.style.cssText = 'width: 30px; height: 3px; background-color: #c20000; margin-bottom: 6px; border-radius: 2px; position: absolute; top: 9px; left: 0; transition: all, .3s;'
	iconBars3.style.cssText = 'width: 30px; height: 3px; background-color: #c20000; margin-bottom: 6px; border-radius: 2px; position: absolute; top: 18px; left: 0; transition: all, .3s;'



	// CREACION DE ENLACES
	// ===========================================
	for(var i=0; i < css.enlacesTexto.length; i++)
	{
		var li = document.createElement('li')
		var a  = document.createElement('a')


		li.appendChild(a)
		ul.appendChild(li)


		li.style.cssText        = 'font-family: Open-Sans; font-size: 14px; letter-spacing: 1px; width: 100%; height: 50px; display: flex; justify-content: center; align-items: center; transition: all, .3s; cursor: pointer;'
		li.style.borderBottom   = css.borde
		a.style.fontFamily      = css.fuente
		a.style.textDecoration  = 'none'
		a.style.color           = '#c20000'
		a.style.fontWeight      = 'bold'

		
		a.innerHTML = css.enlacesTexto[i]
		a.href = css.enlacesRuta[i]


		a.addEventListener('click', function()
		{
			toggle()
		})


		// ILUMINACION ON HOVER
		// =============================================
		   li.addEventListener('mouseover', function(){
		   this.style.backgroundColor = css.colorHover
		   this.children[0].style.color = 'red'})

		   li.addEventListener('mouseleave', function(){
		   this.style.backgroundColor = 'transparent'
		   this.children[0].style.color = '#c20000'})
		// =============================================
	}





	// MOSTRAR / OCULTAR MENU
	// ==========================================
	   function toggle()
	   {
		if(menu.style.top == '-100%')
		{
			menu.style.top = '50px'
			animacionBars()
		}
		else
		{
			menu.style.top = '-100%'
			restaurarBars()
		}
	   }
	   iconBars.addEventListener('click', toggle)
	// ==========================================






	// RESTAURAR MENU
	// ============================================
	   function restaurar()
	   {
		if(window.innerWidth > css.breakpoint){
			barra.style.top    = '-50px'
			iconBars.style.top = '-30px'
			menu.style.top     = '-100%'
			restaurarBars()}
		else{
			barra.style.top    = '0px'
			iconBars.style.top = '14px'}
	   }
	   window.addEventListener('resize', restaurar)
	   restaurar()
	// ============================================




	function animacionBars() // Convertir el icono bars en cruz
	{
		iconBars1.style.cssText = 'width: 30px; height: 3px; background-color: #c20000; margin-bottom: 6px; border-radius: 2px; position: absolute; top: 0; left: 0; transition: all, .3s; transform-origin: 100%; transform: rotate(-45deg);'
		iconBars2.style.cssText = 'width: 0px; height: 3px; background-color: #c20000; margin-bottom: 6px; border-radius: 2px; position: absolute; top: 11px; left: 60%; transition: all, .3s;'
		iconBars3.style.cssText = 'width: 30px; height: 3px; background-color: #c20000; margin-bottom: 6px; border-radius: 2px; position: absolute; top: 21px; left: 0; transition: all, .3s; transform-origin: 100%; transform: rotate(45deg);'
	}


	function restaurarBars() // Restaurar icono bars
	{
		iconBars1.style.cssText = 'width: 30px; height: 3px; background-color: #c20000; margin-bottom: 6px; border-radius: 2px; position: absolute; top: 0; left: 0; transition: all, .3s; transform: rotate(0deg)'
		iconBars2.style.cssText = 'width: 30px; height: 3px; background-color: #c20000; margin-bottom: 6px; border-radius: 2px; position: absolute; top: 9px; left: 0; transition: all, .3s;'
		iconBars3.style.cssText = 'width: 30px; height: 3px; background-color: #c20000; margin-bottom: 6px; border-radius: 2px; position: absolute; top: 18px; left: 0; transition: all, .3s;'
	}
}



window.addEventListener('load', function()
{
	menuMovil(menuMovilCSS) // Recibe el objeto con los estilos como parámetro
})







