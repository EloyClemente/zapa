
var botonEnviar = document.getElementById('botonEnviar')
var containerCheckbox = document.getElementById('containerCheckbox')

botonEnviar.addEventListener('click', validarFormulario)





function validarFormulario()
{
	var campos_vacios = new ValidarVacios('validar-vacios', '#f2f2f2') // Recibe la clase que identifica los campos a validar y el color de fondo de los campos


	if(campos_vacios.validar() == true) // Valida los campos de texto
	{
		if(containerCheckbox.children[0].dataset.checked == 'si') // Valida el checkbox
		enviarDatos()
		
		else
		botonError(this.children[0], 'Enviar', 'Acepta la política de datos', '#ff0b0b')
	}
}







function enviarDatos()
{
	var campoNombre = document.getElementById('nombre')
	var campoAsunto = document.getElementById('asunto')
	var campoEmail  = document.getElementById('email')


	var datos = { // Recoje los datos del formulario

		nombre:  campoNombre.value.trim(),
		asunto:  campoAsunto.value.trim(),
		email:   campoEmail.value.trim(),
		archivo: document.getElementById('file').value
	}

	var string = JSON.stringify(datos)

	console.log(string) 

	// ajax(string) // <---------------------------------------- Envía los datos a AJAX

	campoNombre.value = ''
	campoAsunto.value = ''
	campoEmail.value  = ''
}