
var ValidarVacios = function(clase, color)
{
	this.clase = clase
	this.color = color


	this.validar = function()
	{
		var valido = true
		var campos = document.getElementsByClassName(this.clase) // Localiza los campos a validar

		
		for(var i=0; i < campos.length; i++)
		{
			if(campos[i].value.trim() == "") // trim() para eliminar los espacios
			{
				this.danger(campos[i]) // Función para pintar los campos
				valido = false
			}
		}

		return valido // Devuelve true o false
	}




	this.danger = function(campo)
	{
		var contador = 0
		var foo = 0
		var that = this

		campo.value = "Rellena este campo"
		campo.style.transition = 'all, .6s'
		campo.style.backgroundColor = '#FF657A'
		campo.style.color = '#fff'


		var timer = setInterval(function()
		{
			if(foo == 0)
			{
				campo.style.backgroundColor = that.color
				campo.style.color = '#333'
				foo = 1
			}
			else
			{
				campo.style.backgroundColor = '#FF657A'
				campo.style.color = '#fff'
				foo = 0
			}


			contador ++


			if(contador == 5)
			{
				clearInterval(timer)
				campo.value = ""
			}
		}, 600)
	}
}



