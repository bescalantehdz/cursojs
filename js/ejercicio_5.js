'use strict'
/*
Muestra todos los numeros divisores de un numero introducidos 
en un prompt
*/

var numero = parseInt(prompt("Ingresa el numero",""));
var i;

for (i = 1;i <= numero; i++) {
	
	let residuo;

	residuo = numero%i;

	if(residuo == 0){
      document.write(i+"<br>");
	}
}

