'use strict'

//funcion para pasar un number a string
//devuelve un valor de tipo string

var number = 20;

document.write("El valor es: "+number.toString());
console.log(typeof number.toString());
//************************************************//
//texto de minusculas a mayusculas y viceversa.
var texto = 'Bienvenido al mundo de JavaScript'
document.write(texto.toUpperCase());
document.write(texto.toLowerCase());
//*************************************************//
//Calcular la longitud de un texto,devuelve un number
var cadena = "Hola Mundo";
 console.log(cadena.length);
//**************************************************//
//indica apartir de que posicion se encuentra dicha palabra
var txt = texto.indexOf('javaScript');
console.log(txt);
//*************************************************//
//devuelve el caracter en la posicion en la que se encuentra
var txs = texto.charAt(9);
console.log(txs);
//***************************************************//
//devuelve un tipo boleano y busca una palabra de un enunciado y es case sensative
console.log(texto.includes('al'));
//***************************************************//
//remplaza el texto por otro
var str = "facebook linux mac"
console.log(str);
console.log(str.replace('facebook','twitter'));