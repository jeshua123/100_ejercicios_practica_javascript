//Funciones (21–35)

//21. Crea una función que sume dos números.

function suma(num1,num2) {
    return num1+num2
}

console.log(suma(15,23))

//22. Crea una función que reciba un nombre y lo salude.

function hello(nombre) {
    console.log("hola "+ nombre)
}
hello("Hernesto")

//23. Crea una función que determine si un número es par.

function espar(numero) {
    return numero%2===0?"Es par":"No es par"
}
console.log(espar(80))

//24. Crea una función que devuelva el cuadrado de un número.
function cuadradoDeNumero(numero) {
    return numero*numero
}
console.log(cuadradoDeNumero(63))


//25. Crea una función que reciba un número y devuelva true si es mayor a 10.

function mayoADiez(numero) {
    return numero>10
}
console.log(mayoADiez(50))

//26. Crea una función que use un operador ternario para verificar edad.

function verificarEdad(edad) {
    return edad>=18?" Edad verificada ":" Edad no verificada "
}
console.log(verificarEdad(78))

//27. Crea una arrow function que multiplique dos números.

//28. Crea una función que reciba un array y devuelva su longitud.

//29. Crea una función que reciba un objeto y devuelva sus claves.

//30. Crea una función que use otra función como parámetro.

//31. Crea una función que devuelva el promedio de tres números.

//32. Crea una función que convierta grados Celsius a Fahrenheit.

//33. Crea una función que reciba un nombre y un apellido y los combine.

//34. Crea una función que reciba un array de números y devuelva el mayor.

//35. Crea una función que devuelva un objeto con nombre y edad.

