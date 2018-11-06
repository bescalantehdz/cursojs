'use strict'



//declaracion de funciones
function muestraNombreEnPantalla(){

	return 'Saludo desde la funcion muestraNombreEnPantalla';
}

//3 formas de invocar a la funcion
console.log(muestraNombreEnPantalla());
/***************************************/
document.write(muestraNombreEnPantalla() + '</br>');
/*****************************************/
document.write("********************************"+'</br>'); 

//de igual manera se pueden almacenar en variables las funciones
var resultado = muestraNombreEnPantalla();

document.write('muestra el valor de resultado' + resultado);