
function cambiarContenido() {

	let contenido = document.querySelector('#contenido').innerText;
	let contenedor = document.querySelector('#contenido');

	if (contenido.includes('Lorem')){

		contenedor.innerHTML = 'Había una vez un periquito que no sabía volar...';

	} else {
		contenedor.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}
}

function cambiarColores() {

	var boton = document.querySelectorAll('.btn');

	boton.forEach(button => {

		var listaClases = button.classList;

		if (listaClases.contains('mi-boton')) {

			listaClases.replace('mi-boton', 'botonToggle');

		} else {

			listaClases.replace('botonToggle', 'mi-boton');
		}
	})
}

function anclaAbajo() {
	window.scrollTo( 0, 1000 );
}
