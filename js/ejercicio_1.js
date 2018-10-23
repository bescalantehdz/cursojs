'use strict'
/*
programa que pide 2 numeros e inidca cual
es mayor y cual es menor y si son iguales, si los numeros son menores o iguales a 0 
que vuelva pedir los datos.
*/

	var numero1= parseInt(prompt("Ingresa el primer numero",""));
	var numero2= parseInt(prompt("Ingresa el segundo numero",""));

 while(isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0){
	 numero1= parseInt(prompt("Ingresa el primer numero",""));
	 numero2= parseInt(prompt("Ingresa el segundo numero",""));
 }
     
if(numero1 > numero2){
document.write("el "+numero1+" es mayor");
}else if(numero2 > numero1){
document.write("el "+numero2+" es mayor");
}else if (numero1 == numero2){
document.write("ambos números son iguales");
}else{
document.write("datos no validos");
}