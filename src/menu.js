
var menu = document.getElementById('menu')


function toggleMenu()
{
	if(window.innerWidth > 660)
	menu.style.top = '0px'

	else
	menu.style.top = '-50px'
}
window.addEventListener('load', toggleMenu)
window.addEventListener('resize', toggleMenu)




