document.addEventListener('DOMContentLoaded', () => {
	const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 100) {
			scrollToBottomButtom.style.display = 'block';
		} else {
			scrollToBottomButtom.style.display = 'none';
		}
	});

	scrollToBottomButtom.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
		});
	});
});

//
// imagenes de la reseña
//

const reviewImage = document.querySelector('.game-image');
const largeImageContainer = document.createElement('div');
largeImageContainer.classList.add('large-image-container');
document.body.appendChild(largeImageContainer);

reviewImage.addEventListener('click', () => {
	const largeImage = document.createElement('img');
	largeImage.src = reviewImage.src;
	largeImage.classList.add('large-image');

	largeImageContainer.innerHTML = '';
	largeImageContainer.appendChild(largeImage);
	largeImageContainer.style.display = 'block';
});

largeImageContainer.addEventListener('click', (event) => {
	if (event.target === largeImageContainer) {
		largeImageContainer.style.display = 'none';
	}
});

//Formulario de contacto

const contactoForm = document.getElementById('contacto-form');

contactoForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const nombre = document.getElementById('nombre').value;
	const email = document.getElementById('email').value;
	const mensaje = document.getElementById('mensaje').value;

	alert(
		'Gracias por contactarnos - Nombre: ' +
			nombre +
			'- Email: ' +
			email +
			'- Mensaje: ' +
			mensaje
	);

	contactoForm.reset();
});
