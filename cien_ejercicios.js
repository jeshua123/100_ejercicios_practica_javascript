//100 Ejercicios de JavaScript para Consolidar Fundamentos
//Esta colección de ejercicios está diseñada para reforzar todos los conceptos aprendidos en
//la lección de JavaScript, incrementando la dificultad de forma progresiva.Variables y Tipos de Datos (1–10)


//1. Declara una variable nombre con tu nombre y muéstrala en consola.

const nombre="Jeshua"

console.log(nombre)

//2. Declara una constante PI con el valor 3.1416.

const PI=3.14

//3. Cambia el valor de una variable edad y muestra ambos valores.

let edad=15

console.log(edad)

edad=85

console.log(edad)


//4. Declara variables de tipo string, number, boolean y muéstralas.

let tipoString="string"

let tipoNumber=47

let tipoBoolean=false

console.log(tipoString,tipoNumber,tipoBoolean)

//5. Usa typeof para mostrar el tipo de cada variable anterior.

console.log(typeof(tipoString),typeof(tipoNumber),typeof(tipoBoolean))

//6. Declara un array con 3 colores y accede al segundo elemento.

const colores=["amarillo","azul","rojo"]

console.log(colores[1])

//7. Declara un objeto persona con nombre, edad y ciudad.

const persona={
    nombre:"Julia",
    edad:25,
    ciudad:"Roma"
}

//8. Cambia la propiedad edad del objeto persona y muéstrala.

persona.edad=18
console.log(persona.edad)

//9. Declara una variable undefined y otra null y muestra sus tipos.

let Undefined=undefined
let Null=null

console.log(typeof(Undefined),typeof(Null))

//10. Crea una constante con un array de números y muéstralo en consola
