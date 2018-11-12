
var request = new XMLHttpRequest()


function ajax(datos)
{
	request.onreadystatechange = function()
	{	
		if(request.readyState == 4 && request.status == 200)
		{			
			console.log(request.responseText) 
		}
	}

	request.open('POST', 'php/enviar.php', true)
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	request.send('datos=' + datos)
}




