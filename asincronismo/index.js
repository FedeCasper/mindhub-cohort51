// Sincrono asincrono
// JavaScript es un lenguaje de 1 solo hilo
const $btn = document.getElementById('btn')
const $lista = document.getElementById('lista')
const $checks = document.getElementById('checks')
/* let nombre = "Nicolas"

$btn.addEventListener('click', btnClick)

setTimeout( fnTimeOut , 0 )

primera()
console.log('fin del script') */



function primera() {
    segunda()
    console.log('primera funcion')
}

function segunda() {
    tercera()
    console.log('segunda funcion')
}

function tercera() {
    console.log('tercera funcion')
}

function btnClick() {
    console.log('hiciste click')
}

function fnTimeOut() {
    console.log('Set Time Out')
}
// Promesas

const alumnos = [
    {
        nombre: "Andres",
        correccion: true
    },
    {
        nombre: "Ariana",
        correccion: true
    },
    {
        nombre: "Brian",
        correccion: true
    },
    {
        nombre: "Carlos",
        correccion: true
    },
]

function pedirleLasNotasAFlor(listaCorrecciones) {

    const fnPromise = (resolve, reject) => {

        setTimeout(() => {
            if (listaCorrecciones.every(alumno => alumno.correccion)) {
                resolve(listaCorrecciones.map(alumno => alumno.nombre))
            } else {
                reject('No terminamos de corregir')
            }
        }, 5000)

    }
    return new Promise(fnPromise)
}


let notas



/* $btn.addEventListener('click', () => {
    $lista.innerHTML = notas.reduce( (acc,act) => acc + `<li>${act}</li>`, '')
}) */

/* console.log( 'Pido las notas' ) */

/* pedirleLasNotasAFlor( alumnos )
    .then( data => {
        notas = data
        $lista.innerHTML = notas.reduce( (acc,act) => acc + `<li>${act}</li>`, '')
    } )
    .catch( error => console.log( error ) )
    .finally( () => console.log('Se termino la promesa') ) */



/* console.log( notas )
console.log( 'Sigo con mis cosas' ) */


// Peticiones http ( fetch )
/* 
 <label> Gryfindor
            <input type="checkbox" name="" id="">
        </label>
*/
let personajes
fetch('https://hp-api.onrender.com/api/characters/students')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        personajes = data
        const casas = personajes
            .map(item => item.house)
            .filter(item => item)
            .filter((casa, indice, array) => array.indexOf(casa) == indice)
        $checks.innerHTML = casas.reduce((acc, act) => acc + `<label> ${act}
                <input type="checkbox" value=${act}>
            </label>`, '')
        $lista.innerHTML = personajes.reduce((acc, act) => acc + `<li>${act.name}</li>`, '')
    })
    .catch(err => console.log(err))


const fnEvento = () => {
    const valueChecked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value)
    if (valueChecked.length == 0) {
        $lista.innerHTML = personajes.reduce((acc, act) => acc + `<li>${act.name}</li>`, '')
    } else {
        const filtrado = personajes.filter(personaje => valueChecked.includes(personaje.house))
        if (filtrado.length == 0) {
            $lista.innerHTML = "<h2> No hay personajes con estos filtros </h2> "
        } else {
            $lista.innerHTML = filtrado.reduce((acc, act) => acc + `<li>${act.name}</li>`, '')
        }
    }
}

$checks.addEventListener('change', fnEvento)