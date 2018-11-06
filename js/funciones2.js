'use strict'


//funciones con parametros
/*console.log('resultado de la suma: '+ (numero1+numero2));
}*/
//llamada ala funcion
//realizaOperaciones(8,80);
/*********************************/

//se puden definir valores por defecto a los parametros 
function realizaOperaciones(numero1,numero2,valor = true){

	if(valor){
      console.log('resultado de la suma: '+ (numero1+numero2));
	} else{
	 console.log('resultado de la resta: '+ (numero1-numero2));	
	}
}

/*se puede modificar el parametro ya inicializado unicamente si se especifica
al momento de la invocaciones*/
realizaOperaciones(50,20,false);