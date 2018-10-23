'use strict'

alert("muestra mensaje en pantalla");

//ventanas de confirmacion
var mensaje = confirm("Estas seguro de continuar?")
console.log(mensaje);

//ventana  de ingreso de datos
var captura_resultado = prompt("Que edad tienes","");

document.write( typeof(parseInt(captura_resultado))); 