// Funciones de orden superior
// Una funcion es de orden superior cuando recibe por parametro otra funcion ||
// Retorna una funcion
function calculadora( numUno, numDos, operacion ){
   console.log( operacion( numUno, numDos ) )
}



function restar( numUno, numDos ){
    return numUno - numDos
}


/* calculadora( 20, 20, sumar)
calculadora( 20, 20, restar )
calculadora( 30, 30, function(numUno, numDos){
    return numUno * numDos
})
calculadora( 50, 10, function( numUno, numDos ){
    return numUno / numDos
} ) */

// Funciones Flecha

function sumar( numUno, numDos, numTres ){
    return numUno + numDos 
}


const sumarFlecha = ( numUno, numDos ) => {
    return numUno + numDos 
}


/* console.log( sumarFlecha(100, 100) ) */

/* calculadora( 200, 200, sumarFlecha )
calculadora( 200, 100, ( a , b  ) => { return a - b } ) */

// Ventajas
// Si tiene un solo parametro, no hace falta poner los parentesis

const saludar = nombre => {
    console.log( `Hola ${nombre}` )
} 
/* saludar( "Alejandra" ) */

// Si tiene una sola instrucción, se puede sacar las llaves, y el return se da por implicito

const saludarDos = nombre => `Hola ${nombre}`
/* 
console.log( saludarDos( "Andres") ) */



/* calculadora( 10, 20, ( numUno, numDos ) => numUno * numDos ) */

const dividirFlecha = ( numUno, numDos ) => numUno / numDos
/* 
calculadora( 60, 3, dividirFlecha ) */

// Desventajas ( No usar nunca para crear un metodo )

let mentor = {
    nombre : 'Flor',
    edad : 18,

    saludar : function(){
        console.log( "this:", this )
        console.log( `Hola me llamo ${this.nombre} y tengo ${this.edad} años` )
    }
}

let mentorDos = {
    nombre : 'Fede',
    edad : 38,

    saludar(){
        console.log( "this:", this )
        console.log( `Hola me llamo ${this.nombre} y tengo ${this.edad} años` )
    }
}

const mentoresAux = [ mentor, mentorDos ]

/* mentor.saludar() */

mentor = 'Nico'

/* console.log( mentoresAux ) */

/* mentoresAux[0].saludar() 
mentoresAux[1].saludar() 
 */

// Metodos de array - orden superior

console.log( mentores )

// forEach - no tiene return



/* mentores.forEach( ( mentor, indice ) => {
    console.log( `Hola soy ${mentor.nombre} y estoy en el indice ${indice}` )
} ); */
/*
    fn( mentores[0], 0, mentores )
    fn( mentores[1], 1, mentores )
    fn( mentores[2], 2, mentores )
    fn( mentores[3], 3, mentores )
    fn( mentores[4], 4, mentores )
    fn( mentores[5], 5, mentores )
    fn( mentores[6], 6, mentores )
*/


// map - Crea un nuevo array y guarda todos los return de la funcion ejecutada

const fnMap = ( mentor ) => mentor.nombre.toUpperCase()

const nombresMentores = mentores.map( fnMap )

/*
    let nuevoArray = []

    nuevoArray.push( fnMap( mentores[0], 0, mentores ) )
    nuevoArray.push( fnMap( mentores[1], 1, mentores ) )
    nuevoArray.push( fnMap( mentores[2], 2, mentores ) )
    nuevoArray.push( fnMap( mentores[3], 3, mentores ) )
    nuevoArray.push( fnMap( mentores[4], 4, mentores ) )
    nuevoArray.push( fnMap( mentores[5], 5, mentores ) )
    nuevoArray.push( fnMap( mentores[6], 6, mentores ) )

    return nuevoArray
*/

console.log( nombresMentores )


// filter

const fnFilter =  mentor  => mentor.edad > 30


const mentoresMayoresA30 = mentores.filter( fnFilter )

/*
    let nuevoArray = []

    if( fnMap( mentores[0], 0, mentores ) ){
        nuevoArray.push( mentores[0] )
    }
    if( fnMap( mentores[1], 1, mentores ) ){
        nuevoArray.push( mentores[1] )
    }
    if( fnMap( mentores[2], 2, mentores ) ){
        nuevoArray.push( mentores[2] )
    }
    if( fnMap( mentores[3], 3, mentores ) ){
        nuevoArray.push( mentores[3] )
    }
    if( fnMap( mentores[4], 4, mentores ) ){
        nuevoArray.push( mentores[4] )
    }
    if( fnMap( mentores[5], 5, mentores ) ){
        nuevoArray.push( mentores[5] )
    }
    if( fnMap( mentores[6], 6, mentores ) ){
        nuevoArray.push( mentores[6] )
    }
    return nuevoArray
*/
console.log( mentoresMayoresA30 )

const nombresMentoresMayoresA30 = mentoresMayoresA30.map( fnMap  )
console.log( nombresMentoresMayoresA30 )

// find

const mentorReact = mentores.find(  mentor =>  mentor.tecnologias.includes( "ReactJS" ) )
const mentoresReact = mentores.filter(  mentor =>  mentor.tecnologias.includes( "ReactJS" ) )
console.log( mentorReact )
console.log( mentoresReact )
/*
    if( fnMap( mentores[0], 0, mentores ) ){
        return mentores[0] 
    }
    if( fnMap( mentores[1], 1, mentores ) ){
        return mentores[1] 
    }
    if( fnMap( mentores[2], 2, mentores ) ){
        return mentores[2] 
    }
    if( fnMap( mentores[3], 3, mentores ) ){
        return mentores[3] 
    }
    if( fnMap( mentores[4], 4, mentores ) ){
        return mentores[4] 
    }
    if( fnMap( mentores[5], 5, mentores ) ){
        return mentores[5] 
    }
    if( fnMap( mentores[6], 6, mentores ) ){
        return mentores[6] 
    }
*/

// findIndex
const indicePrimerMentorJava = mentores.findIndex(  mentor =>  mentor.tecnologias.includes( "Java" ) )

// some
const algunMentorSabeJava = mentores.some( mentor =>  mentor.tecnologias.includes( "Java" )  )
console.log( algunMentorSabeJava )

// every
const todosLosMentoresSabenHTML = mentores.every( mentor =>  mentor.tecnologias.includes( "ReactJS" )  )
console.log( todosLosMentoresSabenHTML )

// reduce

// sort