'use strict'

/*Funciones anonimas son aquellas funciones que no llevan nombre
al momento de la declaracion*/

var nombre_peliculas = function(nombre){
  
  return 'el nombre de la funcion es: '+nombre;
}


document.write(nombre_peliculas('halloween'));
