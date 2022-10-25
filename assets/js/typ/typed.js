window.onload = ()=>{
	setTimeout(function(){
	
		if (document.querySelector('.typedAbout')) {
			const typedAbout = new Typed('.typedAbout', {
				// strings: ['Dylan España'],
				stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
				typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
				startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
				backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
				smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
				backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
				loop: true, // Repetir el array de strings
				loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
				showCursor: true, // Mostrar cursor palpitanto
				cursorChar: '|', // Caracter para el cursor
				contentType: 'html', // 'html' o 'null' para texto sin formato
			});
		}
		if (document.querySelector('.typed')) {

			// if (localStorage.getItem('lenguaje') == 'en') {
				let typed = new Typed('.typed', {
					// strings: ['Hi! Mi name is<br><i class="color">Dylan España</i>'],
					stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
					typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
					startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
					backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
					smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
					backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
					loop: true, // Repetir el array de strings
					loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
					showCursor: true, // Mostrar cursor palpitanto
					cursorChar: '|', // Caracter para el cursor
					contentType: 'html', // 'html' o 'null' para texto sin formato
				});
			// }
		}
		// if (localStorage.getItem('lenguaje') == 'es') {
		// 	let typed = new Typed('.typed', {
		// 		// strings: ['Hola! Me llamo <br><i class="color">Dylan España</i>'],
		// 		// stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
		// 		typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
		// 		startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
		// 		backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
		// 		// smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
		// 		backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
		// 		loop: true, // Repetir el array de strings
		// 		loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
		// 		showCursor: true, // Mostrar cursor palpitanto
		// 		cursorChar: '|', // Caracter para el cursor
		// 		contentType: 'html', // 'html' o 'null' para texto sin formato
		// 	});		
		// }

	},500)
}

