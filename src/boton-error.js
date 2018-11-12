
function botonError(boton, textoOriginal, textoError, colorFondo)
{
	var fondo_danger   = '#f50057'
	var duracion = 3000 // Mínimo 1000


	boton.style.transitionProperty = 'color, background-color'
	boton.style.transitionDuration = '.5s, 1s'
	boton.style.color = 'transparent'

	boton.parentNode.style.backgroundColor = colorFondo //fondo_danger
	boton.parentNode.style.width = '200px'


	setTimeout(function()
	{
		boton.textContent = textoError
		boton.style.color = '#fff'

		setTimeout(function()
		{
			boton.style.color = 'transparent'

			setTimeout(function()
			{
				boton.textContent = textoOriginal
				boton.style.color = '#fff'
			}, 300)
		}, duracion - 600)
	}, 300)



	setTimeout(function()
	{
		boton.parentNode.style.backgroundColor = colorFondo
		boton.parentNode.style.width = '80px'
	}, duracion)
	
}

// NOTA: Está pensado para botones construidos con etiquetas <p>
// Por eso utilizo textContent para insertar los textos.
// En caso de elementos button o submit, insertar textos con .value
