//los comemtarios en bloque es shift+alt+a con eso comemto un bloque de codigo
/* 
las variables siempre tiene que comenzar con una letra nunca con numeros
no pudeomo usar palabras reservadas
js diferencia las mayusculas de las minusculas
convenciones de la industria para nombrar variables
uppercaelcasse Mariosebastian
camelcase cadda palabra incoa con mayuscula menos la primerra mariosebastian*/
/* let edad = 54;
let nombre = "exe";
let Mariosebastian = 35; //upper camelcase
let marioSebastian = 53; //camalcasse
let Mario_sebastian = 55; */ //snakeasse
//----------------------------------------------------------------
//ejercicios de logica con js

//ejercicio n°1
alert("un mensaje");
//----------------------------------------------------
//ejercicio n°2
document.write("hello world");
//otra opcion del ejercicio n2
const Mensaje = "hello world";
const div = document.getElementById("el_div");
div.innerHTML = Mensaje;
//---------------------------------------------------
//ejercio N3
document.write(" el resultado es : " + (3 + 5));
//ejercio 3 otra forma
let a = 5;
let b = 3;
let Suma = a + b;
const Div_sumador = document.getElementById("la_suma");

Div_sumador.innerHTML = "el resultado de la suma es " + Suma;

//---------------------------------------------------
//ejercicio n4

let Nombre = prompt("ingresa tu nombre");
document.write(Nombre);
//otra forma del ejercicio n 3

/* let Nombre = prompt("ingresa tu nombre");
let Div_nombre = document.getElementById("nombre");
Div_nombre.innerHTML = "el nombre ingresado es " + Nombre; */
//---------------------------------------------------
//ejercicio n5
let Num_1 = parseInt(prompt("ingresa un numero"));
let Num_2 = parseInt(prompt("ingresa otro numero"));
document.write("la suma de los numero ingresados es " + (Num_1 + Num_2));
//otra forma del ejercicion5
/* let Num_1 = parseInt(prompt("ingresa un numero"));
let Num_2 = parseInt(prompt("ingresa otro numero"));
let Div_suma = document.getElementById("numeros_ingresados");
Div_suma.innerHTML = "la suma de los numero ingresados es " + (Num_1 + Num_2); */
//---------------------------------------------------
//ejercicio N6
let Num_1a = parseInt(prompt("ingresa un numero"));
let Num_2b = parseInt(prompt("ingresa otro numero"));
let Div_comparador = document.getElementById("comparador");
if (Num_1a > Num_2b) {
  Div_comparador.innerHTML = "el numero mayor es " + Num_1a;
} else {
  Div_comparador.innerHTML = "el numero mayor es " + Num_2b;
}
//---------------------------------------------------
//ejercicio N7
let Num_a = parseInt(prompt("ingresa el Primer numero "));
let Num_b = parseInt(prompt("ingresa el segundo numero "));
let Num_c = parseInt(prompt("ingresa el tercer numero "));
let div_compa3 = document.getElementById("comparador_2");
if (Num_a > Num_b && Num_a > Num_c) {
  div_compa3.innerHTML = "el umero mayo es " + Num_a;
} else if (Num_b > Num_a && Num_b > Num_c) {
  div_compa3.innerHTML = "el umero mayo es " + Num_b;
} else if (Num_c > Num_a && Num_c > Num_b) {
  div_compa3.innerHTML = "el umero mayo es " + Num_c;
}

//---------------------------------------------------
//ejercicio N8
let Num_divisible = parseInt(prompt("ingressa el numero que queres comprobar"));
let div_divisor = document.getElementById("divisible");
if (Num_divisible % 2 == 0) {
  div_divisor.innerHTML = "el numero " + Num_divisible + " es divisible por 2";
} else if (Num_divisible % 2 != 0) {
  div_divisor.innerHTML =
    "no mi reeeeey el numeero " + Num_divisible + "  no es divisible por 2";
}
//--------------------------------------------------
//ejercicio N9
let Frase = prompt("Ingresa la frase:").toLowerCase(); // paso caracteres a minuscula
Frase = Frase.trim(); //quito espacios en blanco
const vocales = ["a", "e", "i", "o", "u"];
let vocales_inc = [];
let indice = 0;

// Recorrer la frase con un bucle for
for (let i = 0; i < Frase.length; i++) {
  let letra = Frase[i];

  // Compruebo manualmente si la letra es una vocal
  for (let j = 0; j < vocales.length; j++) {
    if (letra === vocales[j]) {
      vocales_inc[indice] = letra; // esto seria el metodo push
      indice++; // Incrementar el índice para la próxima posición
      break; // Salir del bucle una vez encontrada la vocal
    }
  }
}

console.log("Vocales encontradas:", vocales_inc);
//ejercicio N10
//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
 let Num_div=parseInt(prompt("ingresa un numero que queres comproba si es divisible "))
switch (true) {
  case (Num_div%2===0):
  prompt(`el numero ${Num_div} es dividible en 2`)
    break;
    case (Num_div%3===0):
  prompt(`el numero ${Num_div} es dividible en 3`)
    break;
    case (Num_div%5===0):
      prompt(`el numero ${Num_div} es dividible en 5`)
        break;
        case (Num_div%7===0):
      prompt(`el numero ${Num_div} es dividible en 7`)
        break;

  default:
    prompt("el numero no es divisible ")

    break;
} 
//ejercicio n11
//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let Num2_div = parseInt(
  prompt(
    "ingresa un numero que queres comproba si es divisible por varios numeros "
  )
);
let Div_posibles = [2, 3, 5, 7];
let dividible = [];
let indec = 0;

for (let index = 0; index < Div_posibles.length; index++) {
  const Divisor = Div_posibles[index];
  if (Num2_div % Divisor === 0) {
    dividible[indec] = Divisor;
    indec++;
  }
}
prompt(`el numero ${Num2_div} es divisble en ${dividible.join(",")}`);
