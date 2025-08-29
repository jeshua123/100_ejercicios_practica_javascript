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

const multiplicador = (numero1,numero2) => {return numero1*numero2}

console.log(multiplicador(7,96))

//28. Crea una función que reciba un array y devuelva su longitud.

const array_1=[1,2,3,4,5]

function longitudArray(array) {
    return array.length
}
console.log(longitudArray(array_1))

//29. Crea una función que reciba un objeto y devuelva sus claves.

const objeto_1={
    nombre:"pepe",
    apellido:"Ramirez",
    edad:"31",
    ciudad:"Concepcion"
}
function propiedadesObj(objeto) {
    return Object.keys(objeto)

}
console.log(propiedadesObj(objeto_1))

//30. Crea una función que use otra función como parámetro.

function primera(segunda) {
    segunda()
}

function segunda() {
    console.log("hola mundo")
}

primera(segunda)

//31. Crea una función que devuelva el promedio de tres números.

function promedioTres(numero1,numero2,numero3,) {
    return (numero1+numero2+numero3)/3
}
console.log(promedioTres(45,96,30))

//32. Crea una función que convierta grados Celsius a Fahrenheit.
function Celsius_A_Fahrenheit(Celsius) {
    	
return (Celsius * 9/5) + 32

}
console.log(Celsius_A_Fahrenheit(20))

//33. Crea una función que reciba un nombre y un apellido y los combine.

function combinado(nombre,apellido) {
    return nombre+apellido
}
console.log(combinado("Leo","Messi"))

//34. Crea una función que reciba un array de números y devuelva el mayor.
const array2=[12,65,78,59,99999,63]
function mayorNumero(array) {
    return Math.max(...array)
}

console.log(mayorNumero(array2))

//35. Crea una función que devuelva un objeto con nombre y edad.

function nuevoObjeto(nombre,edad) {
    return {
        nombre,
        edad
    }
}
console.log(nuevoObjeto("pepe","trueno"))
