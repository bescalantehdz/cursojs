'use strict'
/*Mostrar la media de la suma de N numeros hasta 
ingresar un numero negativo*/
var numero;
var contador;
var acumulado = 0;
var resultado;
do{

	numero = parseInt(prompt('ingresa el numero',''));

if(numero >=0){ 

    acumulado = acumulado + numero;

}else if(isNaN(numero)){
  numero = 0; 
  contador++;
}



}while(numero >= 0);


  
//muestra la media del acumulado
console.log("la suma es: "+acumulado+" y la media es: "+(numero/resultado));

