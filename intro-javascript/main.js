// Variables
// var, let, const -> declarar variables

/* 
let nombreCompleto

nombreCompleto = "Nicolas"
*/

let nombreCompleto = "Nicolas \"Nico\" Catriel Cirulli";

nombreCompleto = "Nicolas Cirulli";

const dni = 38000000;

/* console.log( nombreCompleto ) */

/* console.log( dni ) */

// tipos de dato
// Tipos de dato, primitivos
// Cadena de caracteres -> String
let segundoNombre = "Catriel";
// Numeros -> Number
let edad = 29;
let estatura = 1.74
// true false -> Boolean
const tengoMascota = true;

// Undefined
let mentor;
/* console.log( mentor ) */
// Null
let aux = null;
/* console.log( aux ) */

// tipo de dato - Objecto
let tele = {
     marca: "Samsung",
     dimensiones: "150cm x 80cm",
     smartTv: true
};

/* console.log( tele.dimensiones );
console.log( tele.marca );
console.log( tele["smartTv"] ) */
// tipo de dato - Objeto, tipo de objeto -> Array

let alumnos = ["Andres", "Ariana", "Brian"]

/* console.log( "cantidad de elementos:", alumnos.length ) */

let equipos = [
     {
          club: "San Lorenzo",
          jugadores: ["Batalla", "Hernandez", "Braida"]
     },
     {
          club: "Boca",
          jugadores: ["Romero"]
     }
]
/* console.log( equipos )
console.log( equipos[0] )
console.log( equipos[0].jugadores )
console.log( equipos[0].jugadores[2]) */

/* console.log( alumnos )
console.log( alumnos[0] )
console.log( alumnos.length ) */

// operadores
// aritmeticos + - * / %

// + ( si estoy trabajando con numeros suma, si estoy trabajando con string concatena )

let numeroUno = 10
let numeroDos = 20
let nombreYApellido = "Nicolas " + "Cirulli"
/* console.log( "Suma:", numeroUno + numeroDos )
console.log( "Concatenar:", nombreYApellido )
console.log( "Resta:", numeroUno - numeroDos )
console.log( "Producto:", numeroUno * numeroDos )
console.log( "Division:", numeroUno / numeroDos )
console.log( "Resto:", numeroUno % numeroDos )
console.log( "Resto:", 10 % 3 )
console.log( "Potencia:", 2 ** 3 ) */

// logicos
// AND ( && ) OR ( || ) NOT ( ! )
/* console.log("AND")
console.log( "true && true :", true && true  )
console.log( "true && false :", true && false  )
console.log( "false && true :", false && true  )
console.log( "false && false :", false && false  )
console.log( "OR" )
console.log( "true || true :", true || true  )
console.log( "true || false :", true || false  )
console.log( "false || true :", false || true  )
console.log( "false || false :", false || false  )
console.log( "NOT" )
console.log( "!true :", !true )
console.log( "!false :", !false  ) */

// comparación
// < <= > >= == === != !==
/* console.log( "operadores comparación" )
console.log( "2 < 3:", 2 < 3 )
console.log( "3 <= 3:", 3 <= 3 )
console.log( "2 > 3:", 2 > 3 )
console.log( "3 >= 3:", 3 >= 3 )
console.log( "2 == '2':", 2 == "2" )
console.log( "2 === '2':", 2 === "2" )
console.log( "2 != '2':", 2 != "2" )
console.log( "2 !== '2':", 2 !== "2" ) */

//prompt
let nombreIngresado
nombreIngresado = prompt("Ingrese un nombre")

let edadIngresada = Number(prompt("Ingrese su edad"))
console.log(nombreIngresado)
console.log(edadIngresada)
console.log("Tu nombre es:" + nombreIngresado + "y tenes:" + edadIngresada + "años")
