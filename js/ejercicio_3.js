'use strict'

/*Programa que muestra los numeros entre dos
numeros introducidos por el usuario*/

var numero_inicial;
var numero_final;
var i;


numero_inicial = parseInt(prompt('Ingresa el primer numero',''));
numero_final = parseInt(prompt('Igresa el segundo numero',''));

document.write("<h2>De "+numero_inicial+" a "+numero_final+" estan estos numeros</h2>");

for (i = numero_inicial; i<=numero_final; i++) {
		document.write(i+"<br>");
	}