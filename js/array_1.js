'use strict'

//declaracion de array, de 2 formas.

//1ra forma
var lenguajes=["mango","fresa",'pepino','uva'];

//2da forma
var lprograma = new Array("java",'js','php','swift');

//accceder a los elemntos del array
var texto =`<h1>Elemrnto del array</h1>
			<p>lenguajes[0]: ${lenguajes[0]}</p>`;

document.write(texto);

//recorrer elementos del array con for
texto =`<h1>Elemento del array</h1>`;

document.write(texto);
for (var i = 0; i<lprograma.length; i++) {
	
	document.write(lprograma[i] + "</br>");
}