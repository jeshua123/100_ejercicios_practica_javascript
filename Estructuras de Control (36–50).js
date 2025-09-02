//Estructuras de Control (36–50)

//36. Usa un if para determinar si un número es positivo.
let numero1=-12
if(numero1>0){
    console.log("es positivo")
}else{
    console.log("es negativo")}

//37. Usa un if/else para saber si alguien puede votar.

let alguien =17
if(alguien>=18){
    console.log("Puede votar")
}else{
    console.log("No puede votar")}

//38. Usa if/else if para clasificar una nota como A, B o C.

let nota =50

if (nota>=100){nota="A"} 
else 
if(nota>=80){nota="B"}
else 
if(nota>=20) {nota="C"}

console.log(nota)
//39. Usa un switch para mostrar un mensaje según el día de la semana.
var diaSemana = "martes";
switch (diaSemana) {
  case "lunes":
        console.log(" es el dia lunes");
    break;
    case "martes":
          console.log("es el dia martes");
      break;
  case "miércoles":
        console.log("es el dia miércoles");
    break;
  case "jueves":
        console.log("es el dia jueves");
    break;
  case "viernes":
    console.log("es el dia viernes");
    break;
  case "sábado":
    console.log("es el dia sábado ");
       break;
  case "domingo":
    console.log("es el dia domingo");
       break;
}

//40. Usa un for para imprimir los números del 1 al 10.

let numero =0
for (let i = 1; i<=10; i++) {
  console.log(numero=numero+1)
}

//41. Usa un for para sumar los números del 1 al 100.
let total = 0;
for (let i = 1; i <= 100; i++) {
  total = total + i;
}
console.log(total)

//42. Usa un while para imprimir los números pares hasta 20.
let numero3= 0
while (numero3<20) {
  numero3++
if (numero3%2===0) {console.log(numero3)}
}

//43. Usa un do...while para imprimir números del 5 al 1.

let cuenta = 5;
do {
  console.log( cuenta);
  cuenta--;
} while (cuenta >0);

//44. Usa un for para recorrer un array de frutas y mostrarlas.

let arrayFrutas=["manzana","pera","kiwi","melon"]

for (let index = 0; index < arrayFrutas.length; index++) {
console.log(arrayFrutas[index])
}
//45. Usa un for...of para recorrer un array de nombres.

let arrayNombres=["Mateo","Juan","Lucas","Pablo"]
for (const nombres of arrayNombres) {
  console.log(nombres)
}

//46. Usa un for...in para recorrer las propiedades de un objeto.

const objetoUsuario={
  nombre:"Pablo",
  apellido:"Picasso",
  ciudad:"Madrid",
}
for (const propiedades in objetoUsuario) {
console.log(propiedades)
}

//47. Combina if y for para mostrar solo los números impares.
let numero4 =0
let Impares=[]
for (let i = 1; i<=100; i++) {
  numero4=numero4+1
 if (numero4%2!=0) {
 Impares.push(numero4)
 }
}
console.log(Impares)

//48. Usa un for anidado para mostrar combinaciones de dos arrays.

let frutas = ['Manzana', 'Banana', 'Cereza'];
let colores = ['Rojo', 'Amarillo',"azul"];
let frutasYColores= [];
for (let i = 0; i < 1; i++) {
    for (let j = 0; j < colores.length; j++) {
       frutasYColores.push(frutas[j] , colores[j]);
    }
}
console.log(frutasYColores)

//49. Usa un bucle para invertir un string.
let string_a_invertir="murciélago"
let string_sep=string_a_invertir.split("")
let string_invertido=[]


for (let index = string_sep.length-1; index >=0; index--) {
 string_invertido.push(string_sep[index])
}
string_invertido=string_invertido.join("")
console.log(string_invertido)

//50. Usa un bucle para contar cuántas vocales tiene una palabra.
let palabra_Con_Vocales="santiago"
let contador_vocales=0
let array_letras=palabra_Con_Vocales.split("")

for (let index = 0; index < array_letras.length; index++) {
  switch (array_letras[index]) {
    case "a":
      contador_vocales++
      break;
    case "e":
      contador_vocales++
      break;
    case "i":
      contador_vocales++
      break;
    case "o":
      contador_vocales++
      break;
    case "u":
      contador_vocales++
      break;

  }

}
console.log(contador_vocales)
