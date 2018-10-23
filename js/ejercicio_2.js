'use strict'
/*Mostrar la media de la suma de N numeros hasta 
ingresar un numero negativo*/
var numero;
var contador;
var acumulado = 0;
var resultado;

do{

  numero = parseFloat(prompt('ingresa el numero',''));
  acumulado = acumulado + numero;
  contador++;

}while(numero >= 0);

  
//muestra la media del acumulado
resultado = parseFloat(acumulado/contador);

document.write('el total de la suma es '+acumulado+' la media es: '+resultado);	