//Arrays (71–100)

//71. Crea un array con 5 números.

const array_números=[1,2,3,4,5]

//72. Accede al primer y último elemento.

let primer_elemento=array_números[0]

let último_elemento=array_números[4]

//73. Usa push para agregar un elemento.

let agregar_elemento=array_números.push(6)

//74. Usa pop para quitar el último elemento.

array_números.pop()

//75. Usa shift para quitar el primero.

array_números.shift()

//76. Usa unshift para agregar al inicio.

array_números.unshift(100)

//77. Usa map para multiplicar todos por 3.

let array_números_por_3=array_números.map(numero =>numero*3)

//78. Usa filter para obtener los mayores que 10.

let array_números_mayores_10=array_números.filter( numero => numero>=10)

//79. Usa find para encontrar el número 5.

let array_números_numero_5=array_números.find( numero => numero===5)

//80. Usa some para saber si hay números negativos.

let array_números_hay_negativos=array_números.some(numero => numero<0)

//81. Usa every para saber si todos son positivos.

let array_números_todos_positivos=array_números.every(numero => numero>0)

//82. Usa reduce para sumar todos los números.

let array_números_suma=array_números.reduce((acumulador,numero )=> acumulador+numero)

//83. Usa reduce para obtener el mayor número.

let array_números_mayor_numero=array_números.reduce((acumulador,numero )=>{
    if (acumulador>numero) {return acumulador } })

//84. Ordena un array de menor a mayor.

let array_números_menor_a_mayor=array_números.sort((a, b) =>{ return a - b;})

//85. Invierte un array.

let array_números_invertidos=array_números.reverse()

//86. Combina dos arrays con spread operator.
let array_números_2=[30,42,6,8,4,9]

let array_combinado=[...array_números,...array_números_2]


//87. Elimina elementos repetidos usando filter y indexOf.
let array_repetidos=[15,15,30,40,40,30,77,7]
let array_sin_repetidos=array_repetidos.filter((numero,i) => { 
 return array_repetidos.indexOf(numero)===i
 })

//88. Convierte un array de strings en un solo string con join.

let array_letras=["S","A","N","T","I","A","G","O"]

let palabra_letras=array_letras.join("")

//89. Divide un string en un array con split.
let palabra_string="completo"
let array_letras2=palabra_string.split("")

//90. Usa slice para obtener una parte de un array.

let parte_array=array_letras2.slice(0,3)

//91. Usa splice para eliminar elementos de un array.
const ciudades=["Santiago","Madrid","Tokyo","Roma"]
let usando_splice=ciudades.splice(2,2)

//92. Usa splice para reemplazar elementos en un array.
const frutas=["manzana","pera","melon","uva"]
frutas.splice(1,0, "kiwi")

//93. Crea una copia de un array usando spread operator.

const frutas_copia=[...frutas]

//94. Encuentra el índice de un elemento.

let indice_de_manzana=frutas.indexOf("manzana")

//95. Reemplaza un elemento según su índice.

let productos=["bebidas","frutas","snacks","pan"]
let productos_sin_pan=productos.filter((item,i) => { 
return    productos.indexOf("pan")!=i
 })
//96. Crea un array de arrays y accede a un elemento interno.
let array_arrays=[["perro","gato"],["cabra","vaca"],["cerdo","oveja"]]

array_arrays[2][0]

//97. Usa flat para aplanar un array.
let flat_array=array_arrays.flat()

//98. Usa map y filter combinados.

const num = [1, 2, 3, 4, 5, 6];

const cuadradosDePares = num
 .filter(numero => numero % 2 === 0) 
  .map(numeroPar => numeroPar * numeroPar)


//99. Usa reduce para contar elementos que cumplan una condición.

const num2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const contador_impar=num2.reduce((acc,num) => num % 2 === 0?acc+1:acc)


//100. Usa todos los métodos aprendidos para transformar un array de obj

const usuarios=[["Alfredo","Parra","Dallas"],["John","Gomez","Houston"],["Hernesto","Cruz","florida"]]

const ciudades2=["Dallas","Houston","florida"]

const Array_objetos=ciudades2.map((ciudades) => { 

let filtrado_ciudad=usuarios.filter((usuario) =>usuario[2]===ciudades).flat()

let[nombre,apellido,ciudad]=filtrado_ciudad

 return {nombre:nombre,apellido:apellido, ciudad:ciudad}})
