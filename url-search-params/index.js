/* 

    <article class="card col-12 col-md-5 col-xl-3 border border-primary">
                    <h2 class="card-title text-center">Titulo card 1</h2>
                    <div class="card-body d-flex gap-3 flex-column">
                        <img class="card-img-top" src="https://staticg.sportskeeda.com/editor/2023/01/25658-16737047417061-1920.jpg" alt="">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis minima repudiandae sequi excepturi assumenda? Laborum quam recusandae, deserunt in dolore magni! Aspernatur at sint eaque? Sed odit distinctio tempore vero?</p>
                        <a class="btn btn-secondary" href="#">Agentes</a>
                    </div>
     </article> 

*/


// Crear las cards en javascript [x]
//    los agentes que son Sentinel [X] 
//    La estructura de la card [x]
// Agregar las cards a la vista
//    Un lugar donde agregarlas [x]
// Ejemplo
/* const duelitas = filtrarPorRol( agentes.data, "Duelist" ) */


const contenedor = document.getElementById( 'contenedor-js' )


const sentinels = filtrarPorRol( agentes.data, "Sentinel" )
const templateSentinel = generarTemplate( sentinels )
imprimirLasCards( templateSentinel, contenedor )

// Funciones

function imprimirLasCards( template, contenedor ){
    contenedor.innerHTML = template
} 

function generarTemplate( listaAgentes ){
    let todasLasCard = ""
    for( let i = listaAgentes.length - 1 ;  i > 0 ; i-- ){
           todasLasCard += crearCard( listaAgentes[i] )
    }
    /* for (const agente of listaAgentes.reverse()) {
        todasLasCard += crearCard( agente )
    } */
    return todasLasCard
} 

function crearCard( agente ){
    return `
    <article class="card col-12 col-md-5 col-xl-3 border border-primary">
        <h2 class="card-title text-center">${agente.displayName}</h2>
        <div class="card-body d-flex gap-3 flex-column">
            <img class="card-img-top" src="${agente.fullPortraitV2}" alt="">
            <p>${agente.description}</p>
            <a class="btn btn-secondary" href="./detalle.html?parametro=${agente.uuid}">more info</a>
        </div>
    </article> 
    `
    // retorna la card del agente que llego
} 

function filtrarPorRol( listaAgentes, rol ){
    let agentesFiltrados = []
    for (const agente of listaAgentes) {
        if( agente.role && agente.role.displayName == rol ){
            agentesFiltrados.push( agente )
        }
    }
    return agentesFiltrados
}
