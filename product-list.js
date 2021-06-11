const arrowLeft = document.querySelector('.flecha-izq');
const arrowRight = document.querySelector('.flecha-derecha');
const imagen = document.getElementsByClassName('img-prod');

const itemsProd = document.querySelector('.items-prod');
const productName = document.querySelectorAll('#product-name');
const precio = document.getElementById('price');

var posActual = 1;
arrowRight.addEventListener('click',function(){
	posActual++;
	arrowRight.style.background = '#ccc';
	setTimeout(function(){
		arrowRight.style.background = 'none';
	},500);

	

	for (let i = 0; i < imagen.length; i++) {
		imagen[i].style.background = `url(imagenes/prod${posActual}.jpg)`;
		imagen[i].style.backgroundSize = 'cover';
		imagen[i].style.backgroundPosition = 'center';
		productName[i].innerHTML = 'Ejemplo Producto '+ posActual.toString();
	}
	console.log(posActual);
	
	if (posActual === 5 ){
		posActual= 0;
	}
})
arrowLeft.addEventListener('click',function(){
	arrowLeft.style.background = '#ccc';
	setTimeout(function(){
		arrowLeft.style.background = 'none';
	},500);

	posActual--;
	if (posActual === 0){
		posActual = 5;
	}

	for (let i = 0; i < imagen.length; i++) {
		imagen[i].style.background = `url(imagenes/prod${posActual}.jpg)`;
		imagen[i].style.backgroundSize = 'cover';
		imagen[i].style.backgroundPosition = 'center';
		productName[i].innerHTML = 'Ejemplo Producto '+ posActual.toString();
	}

	

})




