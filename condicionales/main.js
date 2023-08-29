
// True y False

// Truthy y Falsy

// Valores Falsy comunes
// "" (String Vacío)
// 0 (Cero númerico)
// NaN (Not a Number)
// Undefined
// Null
// False
// console.log(Boolean(""))
// console.log(Boolean(0))
// console.log(Boolean(NaN))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(false))

// let nombre

// console.log(Boolean(nombre))


// if(condición)

// else 

// const numero = 20
// console.log("Inicio del condicional")
// if (numero === 0) {
//     console.log("El número es cero")
// }
// else if (numero < 0) {
//     console.log("El número es negativo")
// }
// else {
//     console.log("El número es positivo")
// }

// console.log("Fin del condicional")

// const saborHelado = prompt("Elige un sabor de Helado")

// if (saborHelado == "Chocolate" || saborHelado == "chocolate granizado") {
//     console.log("Compraste un helado de chocolate y/o chocolate granizado")
// }
// else if (saborHelado == "Menta Granizada") {
//     console.log("Compraste un helado de Menta Granizada")
// }
// else if (saborHelado == "Dulce de leche") {
//     console.log("Compraste un helado de Dulce de leche")
// }
// else {
//     console.log("Lo lamentamos no tenemos ese sabor disponible")
// }

// Tabla de la verdad.

// Operador lógico AND / && 
// true && true  = true
// true && false = false
// false && false = false


// Operador lógico OR / || 
// true || true = true
// true || false = true
// false || false = false

// ! / NOT // Es lo opuesto a lo que se indica.
// a = true
// !a = false

// b = false
// !b = true

// let numero = 4
// if (numero != 1) {
//     alert("El número no es 1")
// }


//Ejercicios Operador AND
// const numero = 8

// if (numero > 5 && numero < 10) {
//     alert("El número está entre 5 y 10")
// }
// else {
//     alert("El número no está entre 5 y 10")
// }


// const diaDeSemana = prompt("Es un día de semana?")
// const tengoClases = prompt("Tienes clases el día de hoy?")

// if (diaDeSemana == "si" && tengoClases == "si") {
//     alert("Tengo que asistir al Bootcamp")
// }
// else {
//     alert("Tengo día libre")
// }

// True y True = True. Ambas se tienen que cumplir para ejecutarse el código.


// Ejercicios de operador OR

// const dia = prompt("Escriba el día de hoy")
// const esFestivo = true

// if (dia === "Sábado" || dia === "Domingo" || esFestivo) {
//     alert("Es un día libre")
// }
// else {
//     alert("Es un día de Bootcamp")
// }

// let edad = 12
// estaAcompañado = false
// if (edad >= 18 || estaAcompañado) {
//     alert("Puedes pasar")
// }
// else {
//     alert("No puede pasar")
// }

//Switch
// const idioma = prompt("Ingresa tu idioma")
// switch (idioma) {
//     case "Español":
//         alert("Bienvenido a nuestro sitio web")
//     break
//     case "Inglés":
//         alert("Welcome to our web site")
//     break
//     default: 
//         alert("Idioma no disponible por el momento")        
// }

// function suma() {
//     const num1 = Number(prompt("Ingrese un número"))
//     const num2 = Number(prompt("Ingrese otro número"))
//     let resultado = num1 + num2
//     alert(resultado)
// }

// function resta() {
//     const num1 = Number(prompt("Ingrese un número"))
//     const num2 = Number(prompt("Ingrese otro número"))
//     let resultado = num1 - num2
//     alert(resultado)
// }

// let option = prompt("Ingrese Suma o Resta dependiendo de que quiera realizar")

// switch(option) {
//     case "suma":
//        suma()
//     break
//     case "resta":
//         resta()
//     break
//     default:
//         alert("Opcion no disponible")
// }

