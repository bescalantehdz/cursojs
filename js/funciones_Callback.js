'use strict'

/**las funciones de callback son funciones dentro de una funcion
y se le pasan como parametro*/

function suma(numero1, numero2, sumaYmuestra, sumaPorDos){

	let resultado = numero1 + numero2;
	sumaYmuestra(resultado);
	sumaPorDos(resultado);
}

document.write(suma(4,5,function(dato){
  document.write('la suma es '+ dato);
}, 
function(dato){	
	document.write('la multiplicacion es: '+(dato*2));
}));