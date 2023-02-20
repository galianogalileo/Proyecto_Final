
function cotizacion(){
  
  //Variables utiles 
  //Precio base de la cotización, en quetzales, lo puede cambiar
  var precio_base = 2000

  //Valores de los recargos 
  var edad_18 = 0.1; // 10%
  var edad_25 = 0.2; // 20%
  var edad_50 = 0.3; // 30%

  var casado_18 = 0.1; // 10%
  var casado_25 = 0.2; // 20%
  var casado_50 = 0.3; // 30%

  var hijos_recargo = 0.2; // 20%


  //Recargo
  var recargo = 0
  var recargo_total = 0

  //Precio final 
  var precio_final = 0

  //Mensajes de alerta para ingresar datos 
  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ");
  
  edad_numero_aca = parseInt(edad);
  if(edad_numero_aca < 18 ){
    alert ("Intentelo de nuevo e ingrese una edad valida para cotización")
    return
  }
  
  var nombre = prompt("Ingrese su nombre, por favor")
  

  var casado = prompt("¿Está casado actualmente?")
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge
  if("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
  }

  //convirtiendo las edades ingresadas a números 
  var edad_numero = parseInt(edad)
  var edad_conyuge_numero = 0

  //convirtiendo la edad del cónyuge si se esta casado/a
  if("SI" == casado.toUpperCase()){
    edad_conyuge_numero = parseInt(edad_conyuge)
  }

  var hijos = prompt("¿Tiene hijos o hijas?")
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos
  var cantidad_hijos_numero

  if("SI" == hijos.toUpperCase()){
    cantidad_hijos = prompt("Ingrese cantidad de hijos: ")
  }

  /**
 * 1. convierta la cantidad de hijos a numero
 */
  if("SI" == hijos.toUpperCase()){
    cantidad_hijos_numero = parseInt(cantidad_hijos)
  }
  // ---------------------------------

  //Aquí debe calcular el recargo total basado en las respuestas ingresadas
  //Aquí es donde debe de calcular los recargos y el valor final
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  if(edad_numero>=18 && edad_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo1 = precio_base * edad_18
  } else if(edad_numero>=25 && edad_numero<49){
    recargo1 = precio_base * edad_25
  }else if(edad_numero>=50){
    recargo1 = precio_base * edad_50
  } else{
    recargo1 = 0
  }
  //aqui puede colocar un else if() con el siguiente rango

  /** 
 * 2. Recargo por la edad del conyuge
 */

  if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo2 = precio_base * edad_18
  } else if(edad_conyuge_numero>=25 && edad_conyuge_numero<49){
    recargo2 = precio_base * edad_25
  }else if(edad_conyuge_numero>=50){
    recargo2 = precio_base * edad_50
  } else{
    recargo2 = 0
  }
 
  /**
 * 3. Recargo por la cantidad de hijos 
 */ 

  if(cantidad_hijos_numero > 0){
    recargo3 = precio_base * (hijos_recargo * cantidad_hijos_numero)
  } else{
    recargo3 = 0
  }

  propiedades = prompt("Ingrese número de propiedades")
  propiedades_numero = parseInt(propiedades)
  recargo4 = precio_base * (propiedades_numero * 0.35)
  
  salario = prompt("Ingrese sueldo")
  salario_numero = parseInt(salario)
  recargo5 = salario_numero * 0.05
  
  
  
  recargo_total = recargo1 + recargo2 + recargo3 + recargo4 + recargo5
  precio_final = precio_base + recargo_total

  // TODOS LOS RECARGOS FUERON CALCULADOS EN BASE AL PRECIO BASE, ASI LO COMPRENDÍ YO 

  //Resultado
  alert ("Para el asegurado: " + nombre)
  alert ("Recargo por edad: " + recargo1)
  alert ("Recargo por estado civil: " + recargo2)
  alert ("Recargo por cantidad de hijos en caso de tener: " + recargo3)
  alert ("Recargo por cantidad de propiedades: " + recargo4)
  alert ("Recargo por sueldo: "+ recargo5)
  alert ("El recargo total sera de: " + recargo_total)
  alert ("El precio sera de: " + precio_final)

  //consuta si desea continuar con la cotizacíón o prefiere salir del programa
  
  var accion_new = prompt("Si desea continuar pulse aceptar en caso contrario ingrese salir")
  
  if("SALIR" == accion_new.toUpperCase()){
    return
    alert ("Cotización finalizada")
  }else{
    cotizacion();
  }
}

cotizacion();
