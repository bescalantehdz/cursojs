'use strict'
/*
1.-pida 6 numeros por pantalla y los ingrese en un array
2.-Mostrar el array, todos sus elemntos en el cuerpo de la página y en consola
3.-Ordenar el Array y mostrarlo
4.-Invertir su orden y mostrarlo
5.-Mostrar cuantos elemntos tiene el array
6.-Busqueda de un valor introducido por usuario, que indique si se encuentra y su indice*/

var valores = new Array();
var texto;
for (let i=0; i<6; i++){
     
     valores.push(parseInt(prompt("Ingresa el valor "+(i+1))));
}

//Muestra el array en la página y en consola
document.write("<h2>Valores del Array</h2>");
console.log("Valores del array")
for (let i = 0; i<valores.length; i++) {
	texto =`<ul>
			<li>${valores[i]}</li>
			</ul>`
	document.write(texto);
	console.log(valores[i]);
}
/************************************************/

//invertir el orden del array
valores.sort();
document.write("<h2>Valores Invertidos</h2>");
for (let i = 0; i<valores.length; i++) {
	texto =`<ul>
			<li>${valores[i]}</li>
			</ul>`
	document.write(texto);
}
/****************************************************/

//indica cuantos elementos tiene el array

texto=`<p>Los elementos del array son:
		${valores.length}</p>`

document.write(texto);

/*************************************************/