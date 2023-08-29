// Crear un objeto

const mentor = { 
    nombre : "Nicolas",
    edad : 29,
    propiedad : "Value de la key propiedad",
    propiedadDePrueba : true,
    presentarse : function( ){
        console.log( `Hola soy ${ mentor.nombre }` )
    }
} // z2

// Añadir propiedad a objeto creado
mentor.rol = "Mentor"

// Reasignar un valor
mentor.nombre = "Nicolas Catriel"

// Borrar una propiedad
delete mentor.propiedadDePrueba


// notacion de corchetes
function mostrarPropiedad( objeto, propiedad ){
   return objeto[propiedad]
} 

const nombreEnElObjeto = mostrarPropiedad( mentor, "nombre" )
const edadEnElObjeto = mostrarPropiedad( mentor, "edad" )

/* console.log( nombreEnElObjeto )
console.log( edadEnElObjeto ) */

// Metodos de Object

// Object keys me devuelve un array con las llaves que tiene el objeto
/* console.log( Object.keys( mentor ) ) */

// Object values me devuelve un array con los valores que tiene el objeto
/* console.log( Object.values( mentor ) ) */

// Object entries me devuelve un array con los valores que tiene el objeto
/* console.log( Object.entries( mentor ) ) */

// Object freeze vuelve constante el objeto, no lo podemos modificar 
/* Object.freeze( mentor ) */
/* 
mentor.nombre = "nuevo nombre"
mentor.nuevaPropiedad = "algo"
delete mentor.edad  */

/* console.log( "Freeze:", Object.isFrozen( mentor ) )
console.log( mentor ) */

// Object.assign( objectoDondeVanLasNuevasPropiedad, elObjectoDeDondeSacarLasPropiedas )

/* const flor = {
    nombre : "Flor",
    edad : 15,
    rol : "Mentora",
    mascota : "Lulu"
}

const aux = Object.assign( mentor, flor )

console.log( mentor == aux ) */

// Crear un array

const colores = [ "rojo", "verde", "azul", "violeta" ]
const numeros = [ 1, 3, 4, 5, 6 ]
const meses = [ "enero", "febrero", "marzo" ]

/* 
console.log( meses.length )
console.log( meses[1] ) */


// Agregar elementos a un array
// al inicio unshift
numeros.unshift( 10,20,30 )
// al final push
numeros.push( 200, 300, 400 )
// Quitar elementos de un array
// primer elemento shift
/* colores.shift() */
// ultimo elemento pop
/* colores.pop() */

// Metodos basicos de array

// Verificar si el array contiene un dato especifico - includes
/* 
console.log( numeros.includes( 5 ) ) */

// Averiguar el indice de un dato - indexOf
console.log( meses )
console.log( numeros )
console.log( colores )
/* console.log( colores.indexOf( "azul" ) )
console.log( colores.indexOf( "naranja" ) )

const color = "verde"
const indiceColor = colores.indexOf( color )
if( indiceColor >= 0 ){
    console.log( `En el array de colores esta el color ${color} y esta en el indice ${indiceColor}` )
}else{
    console.log( `El color ${color} no esta en el array` )
}
 */
// Concatenar 2 listas
const numerosImpares = [ 1,3,5,7,9 ]
const numerosPares = [ 2,4,6,8,10 ]
const todosLosNumeros = [0].concat( numerosImpares, numerosPares )
console.log( todosLosNumeros )

// Convertir el array a un string

const coloresEnString = colores.join(" ")
console.log( coloresEnString )


//Ordenar un array
todosLosNumeros.sort()
console.log( todosLosNumeros )

// Agregar o Eliminar elementos en cualquier posición - splice
colores.splice( 2, 1, "naranja")
console.log( colores )

// Aplanar un array - Flat
const prueba = [ [2,3,4], [1,2,3], [2,3,4] ]
console.log( prueba.flat() )

// toReversed
const mesesReverse = meses.toReversed()
console.log( mesesReverse )

