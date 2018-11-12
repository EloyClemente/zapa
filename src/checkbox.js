
var Checkbox = function(id, size, color)
{
	this.id    = id
	this.size  = size
	this.color = color


	this.crear = function()
	{
		var box  = document.createElement('div')
		var tic1 = document.createElement('div')
		var tic2 = document.createElement('div')

		box.appendChild(tic1)
		tic1.appendChild(tic2)

		box.style.width  = this.size + 'px'
		box.style.height = this.size + 'px'
		box.style.border = '1px solid ' + color
		box.style.position = 'relative'
		box.dataset.checked = 'no' // Desmarcado por defecto

		tic1.style.width  = '0px'
		tic1.style.height = '2px';
		tic1.style.backgroundColor = this.color
		tic1.style.transformOrigin = '0%'
		tic1.style.transform = 'rotate(55deg)'
		tic1.style.position = 'absolute'
		tic1.style.top  = '1px'
		tic1.style.left = this.size / 10 + 'px'
		tic1.style.borderRadius = '2px'
		tic1.style.transition = 'all, .3s'

		tic2.style.width  = '0px'
		tic2.style.height = '2px';
		tic2.style.backgroundColor = this.color
		tic2.style.transformOrigin = '0%'
		tic2.style.transform = 'rotate(-110deg)'
		tic2.style.position = 'absolute'
		tic2.style.top  = '0.6px'
		tic2.style.left = '95%'
		tic2.style.borderRadius = '2px'
		tic2.style.transition = 'all, .3s'



		// ACTIVAR Y DESACTIVAR
		// ============================================
		box.addEventListener('click', function()
		{
			var checked = box.dataset.checked 

			if(checked == 'no')
			{
				box.dataset.checked = 'si' 
				mostrarTic()
			}
			else
			{
				box.dataset.checked = 'no' 
				ocultarTic()
			}
		})
		// ============================================




		var that = this

		function mostrarTic() // MOSTRAR TIC
		{
			tic1.style.width  = that.size - that.size / 3 + 'px'

			setTimeout(function()
			{
				tic2.style.width  = that.size + (that.size / 5) + 'px'
			}, 300)
		}


		function ocultarTic() // OCULTAR TIC
		{
			tic2.style.width  = '0px'

			setTimeout(function()
			{
				tic1.style.width  = '0px'
			}, 300)
		}



		return box
	}
}



var checkbox = new Checkbox('checkbox', 12, '#282828')


var containerCheckbox = document.getElementById('containerCheckbox')
containerCheckbox.appendChild(checkbox.crear())

