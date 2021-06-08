var fondo = document.querySelector('.fondo');

document.body.onload=function(){
	var numFondo = '3';
	var urlFondo;
	setInterval(function(){
		urlFondo = "url('imagenes/background" +numFondo + ".jpg')"
		console.log(urlFondo);
		fondo.style.background = urlFondo;
		fondo.style.backgroundSize = 'cover';
		fondo.style.backgroundPosition = 'center';
		fondo.style.backgroundAttachment = 'fixed';
		if(numFondo === '3'){
			numFondo = '2';
		}else{
			numFondo = '3';
		}
	},5000,"JavaScript");
}


// var t;
// function interval(){
//     t=1;
//     setInterval(function(){
//         document.getElementById("testdiv").innerHTML=t++;
//     },1000,"JavaScript");
// }