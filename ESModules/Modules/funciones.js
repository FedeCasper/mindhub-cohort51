export function imprimirLasCards( template, contenedor ){
    contenedor.innerHTML = template
} 

export const filtroCruzado = ( agentes, valueSelect, valueSearch, contenedor ) => {
    const filtradoPorRol = filtrarPorRol( agentes, valueSelect )
    const filtradoPorName = filtrarPorName( filtradoPorRol, valueSearch)
    imprimirLasCards( generarTemplate( filtradoPorName ), contenedor)
}

export function generarTemplate( listaAgentes ){
    let todasLasCard = ""
    if(listaAgentes.length > 0) {
        for (const agente of listaAgentes) {
            todasLasCard += crearCard( agente )
        }
    }else{
        todasLasCard = "No hay agentes con esos filtros"
    }
    return todasLasCard
} 

export function crearCard( { displayName, fullPortraitV2, uuid, description } ){
    return `
    <article class="card col-12 col-md-5 col-xl-3 border border-primary">
        <h2 class="card-title text-center">${displayName}</h2>
        <div class="card-body d-flex gap-3 flex-column">
            <img class="card-img-top" src="${fullPortraitV2}" alt="">
            <p>${description}</p>
            <a class="btn btn-secondary" href="./detalle.html?parametro=${uuid}">more info</a>
        </div>
    </article> 
    `
    // retorna la card del agente que llego
} 

export function filtrarPorRol( listaAgentes, rol ){
    if( rol == "All" ){
        return listaAgentes
    }
    let agentesFiltrados = []
    for (const agente of listaAgentes) {
        if( agente.role && agente.role.displayName == rol  ){
            agentesFiltrados.push( agente )
        }
    }
    return agentesFiltrados
}

export function filtrarPorName( listaAgentes, name ){
    const filtrado = listaAgentes.filter( agente => agente.displayName.toLowerCase().includes( name.toLowerCase() ) )
    return filtrado
}

export default {
    imprimirLasCards,
    generarTemplate,
    crearCard,
    filtrarPorRol,
    filtrarPorName
}
