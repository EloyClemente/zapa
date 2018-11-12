
var botonAqua  = document.getElementById('botonAqua')
var botonNuevo = document.getElementById('botonNuevo')


botonAqua.addEventListener('click', locationAqua)
botonNuevo.addEventListener('click', locationNuevo)



function locationAqua()
{
	window.open('https://www.google.com/maps?q=Menorca,+19.+46009,+Valencia&um=1&ie=UTF-8&sa=X&ved=0ahUKEwi0zbuyhNfdAhUKKcAKHU1rC9sQ_AUICigB')
}

function locationNuevo()
{
	window.open('https://www.google.com/maps/place/Nuevo+Centro/@39.4806892,-0.3925874,17z/data=!4m8!1m2!2m1!1sComercial+Nuevo+Centro+Local+131+Valencia!3m4!1s0xd604f437adaaaab:0x5741c4d028c43e40!8m2!3d39.481068!4d-0.390529')
}

