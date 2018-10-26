'use strict'

/*muestra todos los numeros impares que esten
entre dos numeros introducidos por el usuario*/



var numero_inicial;
var numero_final;
var i;

numero_inicial = parseInt(prompt('Ingresa el primer numero',''));
numero_final = parseInt(prompt('Igresa el segundo numero',''));

document.write('<h2>Numeros impares de '+numero_inicial+' a '+numero_final+'</h2>');
for( i = numero_inicial; i <= numero_final; i++) {

  let residuo;
  residuo = i%2;

  if( residuo != 0){
        document.write(i+"</br>");
  }

}