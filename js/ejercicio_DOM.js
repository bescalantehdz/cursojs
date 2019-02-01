'use strict'

window.addEventListener('load',function(){
	console.log("DOM cargado");

	var capturaformulario= document.querySelector("#formulario")
	var boxdash = document.querySelector(".dash");
		boxdash.style.display = "none";

	capturaformulario.addEventListener('submit', function(){

		console.log("Evento submit capturado");



	var capturanombre = document.querySelector("#nombre").value;
	var capturaapellidos = document.querySelector("#apellidos").value;
	var capturaedad = document.querySelector("#edad").value;

	 var datos_usuario = [capturanombre,capturaapellidos,capturaedad];

	 var parrafo = document.createElement("p");

	 for( var i in datos_usuario){
      	
      	parrafo.append(datos_usuario[i]);
      	boxdash.append(parrafo);
	 }
	boxdash.style.display = "block";
	});
});