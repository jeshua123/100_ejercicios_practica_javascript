//Objetos (51–70)

//52. Accede a una propiedad usando . y [].

let nuevo_obj={
    nombre:"juan",
    apellido:"castillo",
}
console.log(nuevo_obj["nombre"])

//51. Crea un objeto con propiedades nombre y edad.

let nuevo_obj_2={
    nombre:"Jose",
    edad:"15",
}

//53. Agrega una nueva propiedad a un objeto.

nuevo_obj_2.ciudad="santiago"


//54. Elimina una propiedad de un objeto.

delete nuevo_obj_2.nombre

//55. Usa Object.keys() para mostrar las claves.

console.log(Object.keys(nuevo_obj))

//56. Usa Object.values() para mostrar los valores.

console.log(Object.values(nuevo_obj))

//57. Usa Object.entries() para mostrar las entradas.

console.log(Object.entries(nuevo_obj))

//58. Usa el spread operator para copiar un objeto.

const nuevo_obj_3={...nuevo_obj_2}

//59. Combina dos objetos con spread operator.

const nuevo_obj_4={...nuevo_obj ,...nuevo_obj_2}
console.log(nuevo_obj_4)

//60. Usa optional chaining para acceder a una propiedad anidada.

const nuevo_obj_5={
    nombre:"marcos",
    dirección:{ciudad:"santiago",país:"chile"},
}
nuevo_obj_5.dirección?.ciudad

//61. Crea un array de objetos y muéstrelo.
const array_objetos=[
{nombre:"pepe",edad:"35"},{nombre:"eneas",edad:"45"},{nombre:"marcos",edad:"96"},{nombre:"julio",edad:"12"},

]
console.log(array_objetos)

//62. Filtra un array de objetos por una propiedad.
let personas_mas_de_90=array_objetos.filter(obj=>obj.edad>=90)

//63. Usa map para obtener solo una propiedad de cada objeto.

let array_edades=array_objetos.map(obj=>obj.edad)

//64. Ordena un array de objetos por edad.

array_objetos.sort((a, b) => a.edad - b.edad)


//65. Encuentra un objeto en un array según una condición.

array_objetos.find(obj => obj.nombre==="pepe")

//66. Modifica un objeto dentro de un array usando map.
let array_modificado=array_objetos.map((obj) => {
    if (obj.nombre==="pepe") {obj.dirección="santiago"}
    return obj
})

//67. Usa destructuring para extraer propiedades.

const{nombre ,apellido}=nuevo_obj

//68. Usa destructuring con arrays.

const[obj1,obj2,obj3]=array_objetos

//69. Crea un método dentro de un objeto y ejecútalo.
const objeto_con_método={
    id:123,
    método:function name() { console.log("hola mundo")},
    admin:true
}
objeto_con_método.método()

//70. Usa un método de objeto para modificar una de sus propiedades.
const objeto_con_método2={
    id:321,
    modificar_propiedad:function() {this.id=111},
    admin:false
    
}
objeto_con_método2.modificar_propiedad()

