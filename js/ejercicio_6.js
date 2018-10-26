'use strict'

/*programa que indica si un numero es impar o par*/


var leer_numero = parseInt(prompt("Ingresa el numero",""));
var residuo;

while( isNaN(leer_numero) || leer_numero <=0){
  
   leer_numero = parseInt(prompt("Ingresa el numero",""));
 }

 residuo = leer_numero%2;


if(residuo == 0){

	document.write("El numero "+leer_numero+" es par");

} else{
    document.write("El numero "+leer_numero+" es impar");
}