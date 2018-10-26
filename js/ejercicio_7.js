'use strict'

/*Tabla de multiplicar de un numero introducido 
por pantalla*/


var numero1 = parseInt(prompt("Ingresa el numero a multiplicar",""));


for (var i = 1;i<=10;i++){

	let resultado = numero1*i;

	document.write(i+"*"+numero1+"= "+resultado+"<br>");
}
