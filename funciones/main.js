// suma()
// suma2()

// Funciones
// Qué es una función?
// Un conjunto de código que tiene instrucciones.
// Nos permiten organizar código
// Sectorizar
// Reciclar código

// Elementos que puede tener  una función
// function : Palabra reservada para indicar donde crearemos una función
// Nombre : Puede o no tener nombre
// Parametros: Los valores que pide la función de entrada.
// argumentos : Es lo que le pasamos a la función
// Reutilización: La podemos llamar y utilizar cuantas veces queramos






// suma(Cami, 29) {
//     console.log("Hola" + " " + "Cami" + "Vos tenés" + 29)
// }



// 1) Como se declaran las funciones?

// Palabra reservada function, nombre, parametros, cuerpo/instrucción.

// acá creamos la función
// function saludar(nombre, edad) {
//     console.log("Hola" + " " + nombre + "Vos tenés" + edad)
// }


// let nombreUsuario = prompt("Ingrese su nombre")
// let edadUsuario = prompt("Ingrese su Edad")
// // 2) Llamado o ejecución de una función.
// //-Acá la ejecutamos/ llamamos.
// // - Le pasamos los argumentos y recuerden que el orden importa.
// saludar(nombreUsuario,edadUsuario)
//Es lo que sucede cuando la función la llamamos y le damos los valores.
// function suma(Fede, 30) {
//     console.log("Hola" + " " + "Fede" + "Vos tenés" + 30)
// }
// console.log("Acá declaré la función")
// function saludo() {
//     let nombreUsuario = prompt("Ingrese nombre")
//     let edadUsuario = prompt("Ingrese su edad")

//     // console.log("El usuario indicó que se llama:" + " " + nombreUsuario)
//     // console.log("El usuario indicó que tiene:" + " " + edadUsuario)

//     console.log("Hola" + " " + nombreUsuario + "Vos tenés" + " " + edadUsuario)
//     console.log("---------------------------------------")
// }
// 5) Parametros fuera de la función / Dentro de la funcion'
// 6) El orden es importante
// function resta(numero1, numero2) {
//     console.log(numero1 - numero2)
// }
// resta(1,3)


// Expresion de función 



//  Hoisting
// function suma () {
//     console.log(2+2)
//  }

// let suma2 = function() {
//      console.log(1 + 1)
//  }

//  Métodos.
// Un metodo es una función que se encuentra dentro de un objeto
// let persona = {
//     nombre: "Juan",
//     edad: 30,
//     saludar:function() {
//         console.log(`Hola! mi nombre es ${this.nombre} y tengo ${this.edad} años`)
//     }
// }
// persona.saludar()
// 7) Return

// function suma() {
//     let numero1 = 2
//     let numero2 = 4

//     let resultado = numero1 + numero2 
    
//     return resultado
// }

// Le estoy asignando a la variable resultadoFuera el valor de return.
// let resultadoFuera = suma()
// console.log(resultadoFuera + 3)
// function suma() {
//     console.log("Estoy haciendo una suma")
// }

// function resta() {
//     console.log("Estoy haciendo una resta")
// }
// // 8) Función dentro de función. 
//     function calculadora() {
//         suma()
//         resta()

//         console.log("Calculadora calculando")
//     }

//     calculadora()

// Referencia

// function suma(a,b) {
//     return a + b
// }

// // Valor del REturn/
// let resultado = suma(2,2)
// console.log(resultado)

// let referenciaSuma = suma
// console.log(referenciaSuma)




// 12) Scope



// function saludaraCami() {
//     let nombre = "Cami"
//     console.log("Hola " + nombre)
// }


// saludaraCami()

// console.log("Hola " + nombre)


// {
//     let edad = 22
//     // console.log(edad2)
//     {
//         let edad2 = 22
//         console.log(edad)
//     }
// }

// Esto está ok.
// let nombre = "Sil"


// function saludar(nombreUsuario) {
   
//     console.log("Hola " + nombreUsuario)

//  }


// saludar(nombre)


// // Esto lo permite pero no debe pasar.
// let nombre = "Sil"
// function  saludar() {
//     console.log("Hola " + nombre)
// }
// saludar()


// Esto también está ok

// function saludar() {
//     let nombre = "sil"
//     console.log("Hola " + nombre)
// }

// saludar()

