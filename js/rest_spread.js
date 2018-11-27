'use strict'

//parametros rest y spread
function listadoFrutas(fruta1,fruta2, ...restoDeFrutas){

 console.log('Fruta1: '+ fruta1 + ' fruta 2: ' + fruta2);
 console.log(restoDeFrutas);
}	


listadoFrutas('mango','fresa ','melon','papaya','kiwi')