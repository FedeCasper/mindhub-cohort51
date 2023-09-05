/* const $btn = document.getElementById('btn-js')

$btn.addEventListener( 'click', () => {
    alert('hiciste click')
} )   */
/* const $caja = document.querySelector( '.caja' )
   $caja.addEventListener( "click", ( event ) =>{
    if( event.target.classList.contains( "item" ) ){
        event.target.classList.toggle( "circulo" )
    }
}) */

const $caja = document.querySelector( '.caja' )
const $tarea = document.getElementById('tarea-js')
const $tareaCheck = document.getElementById('realizado-js')
const $container = document.getElementById('main-js')
const $filtro = document.getElementById('filtro')
const $radioTodas = document.getElementById('radio-todas')
const $form = document.querySelector('form')


const tareas = [
    {
        titulo : "Ir a comprar",
        realizada : false,
        id : 1
    }
]
let id = 2
$form.addEventListener( 'submit', ( event ) => {
    event.preventDefault()
    if( $tarea.value ){
        let aux = {
            titulo : $tarea.value,
            realizada : $tareaCheck.checked,
            id : id
        }
        id++
        tareas.unshift( aux )
        $tarea.value = ""
        $tareaCheck.checked = false
        $container.innerHTML = generarTemplate( tareas )
        $radioTodas.checked = true
        alert( 'Tarea agregada' )

    }else{
        alert( 'La tarea es requerida' )
    }
} )

$filtro.addEventListener( 'input', ( e ) => {
    /* if( e.target.value == "todas" ){
        $container.innerHTML = generarTemplate( tareas )
    }
    if( e.target.value == "realizadas" ){
        let filtradas = tareas.filter( tarea => tarea.realizada )
        $container.innerHTML = generarTemplate( filtradas )
    }
    if( e.target.value == "pendientes" ){
        let filtradas = tareas.filter( tarea => !tarea.realizada )
        $container.innerHTML = generarTemplate( filtradas )
    } */

    let filtradas = tareas
    if( e.target.value == "realizadas" ){
        filtradas = tareas.filter( tarea => tarea.realizada )
    }
    if( e.target.value == "pendientes" ){
        filtradas = tareas.filter( tarea => !tarea.realizada )
    }
    $container.innerHTML = generarTemplate( filtradas )

} )

$container.innerHTML = generarTemplate( tareas )

function createCard( tarea ){
    let realizado = "pendiente"
    if( tarea.realizada ){
        realizado = "realizada"
    }
    return `<div class="card col-4 px-2 py-3">
                <p class="card-title">${tarea.titulo}</p>
                <p class="card-text">${realizado}</p>
            </div>`
}


function generarTemplate( listaTareas ){
    let template = ""
    if( listaTareas.length == 0 ){
        template = "<h2> No hay tareas </h2>"
    }else{
        listaTareas.forEach( tarea => {
            template += createCard( tarea )
        })
    }
    return template
} 