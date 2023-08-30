// Bucles
// Son estructuras que ejecutan una tarea repetitivamente mientras se cumpla una condición.
// Nos permite tener mayor organización, nos permite automatizar el trabajo.
// Y se hace más liviano el código.

const numeros = [44,22,3,4,5]

// For, While, Do while, for in, for of

// For  
// Este bucle es ideal cuando ya conocemos más previamente la cantidad de veces que queremos que se ejecute el código 

//Sintaxis.
// for(inicialización, condición, incremento) {
    //codigo que queremos repetir por cada vuelta
//}
// let i = 4
// console.log(numeros[i])
// console.log(numeros[i])
// console.log(numeros.length)

//  for (let i = 0; i < numeros.length; i++) {
//     // console.log(i)
//     console.log(numeros[i])
//  }

  
 

//  for (let i = 0; i < personas.length; i++) {
//     let persona = personas[i]
//     if (persona.mascota) {
//         console.log("Esta persona tiene mascotas: ")
//         console.log(persona.nombre)
//         console.log("-------------")
//     }
//     else {
//         console.log("Esta persona no tiene mascotas: ")
//         console.log(persona.nombre)
//         console.log("-------------")
//     }
//  }

 // While
 // Se utiliza para repetir código siempre que la condición sea verdadera

 // Sintaxis:
 // while (condición) {
    //codigo a repetir
    //asegurense que en algún momento sea falsa la condición para evitar bucles infinitos
 //}

 const persona = {
    nombre: 'Nico',
     edad: 29,
    profesión: 'salvavidas',
     mascota: true
  }
// console.log(`${persona.nombre} tiene ${persona.edad}`)
//  while (persona.edad < 40) {
//     persona.edad++
//     console.log(`${persona.nombre} va a cumplir ${persona.edad}`)   
//  }


// Este ejercicio es para que si el usuario ingresa mal su contraseña se la va a volver a pedir

// let contrasenia = prompt("Ingrese su contraseña")

// while (contrasenia != "mindhub") {   
//     console.log(contrasenia)  //Utilizamos NOT para que mientras NO sea la contraseña correcta se ejecute
//     contrasenia  = prompt("Contraseña incorrecta, vuelva a ingresarla")
// }


// console.log("Iniciando Sesión")


// Do while

// A diferencia del bucle while el Do while se ejecuta al emnos una vez independientemente si se cumple o no la condición

//sintaxis:
//do {
    //codigo a repetir, recuerden que se ejecutará al menos 1 vez.
//} while (condicion)



// do {
//     contrasenia = prompt("Ingrese su contraseña")
// } while (contrasenia != "mindhub")


// do {
//     numero = prompt("Ingrese un número positivo")
// } while (numero < 0)


// For of 
// Permite recorrer elementos de un iterable 
// Sintaxis:
// for (variable , array) {
    //codigo a ejecutar
//}
// const mentores =  [
//     {
//         nombre: 'Flor',
//         edad: 30,
//        profesion: 'diseño videojuegos',
//        mascota: true
//     },
//    {
//        nombre: 'Fede',
//        edad: 24,
//        profesion: 'abogado',
//        mascota: false
//    },
//     {
//         nombre: 'Sil',
//         edad: 30,
//         profesion: 'diseño ',
//        mascota: false
//     },
//     {
//         nombre: 'cami',
//         edad: 20,
//         profesion: 'videojuegos',
//        mascota: true
//    },
//    {
//        nombre: 'nico',
//        edad: 20,
//        profesion: 'programador',
//         mascota: true
//    },
//    {
//        nombre: 'lucre',
//        edad: 70,
//        profesion: 'diseñadora',
//        mascota: false
//    },
//  ]

//  for (let mentor of mentores) {
//     if (mentor.mascota) {
//         console.log(`${mentor.nombre} tiene ${mentor.edad} años`)
//     }
   
//  }


// for in
// Nos permite recorrer propiedades de un objeto.
// ESPECIFICO PARA OBJETOS

//sintaxis 
//for (variable auxiliar in objeto) {
    //codigo a ejecutar
//}
// const estudiante = {
//     nombre: 'Fede',
//     edad: 20,
//     asignaturas: {
//         matematicas: 90,
//         historia: 85,
//         ingles: 78,
//         ciencias: 95,
//     }
// }


// for (let propiedades in estudiante) {
//     console.log(propiedades)
// }

// let sumaNotas = 0

// for (let asignatura in estudiante.asignaturas) {
//     console.log(asignatura)
//     sumaNotas = sumaNotas + estudiante.asignaturas[asignatura]
//     sumaNotas += estudiante.asignaturas[asignatura]
// }
// console.log(sumaNotas)