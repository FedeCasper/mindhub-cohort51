const contendorCards = document.getElementById('contenedorCards')

function crearCard( obj ){
    return `<div class="card border-primary col-10 col-md-5 col-xl-3">
                     <img class="card-img-top" src="${obj.imagen}" alt="Title">
                     <div class="card-body">
                       <h4 class="card-title">Nombre:${obj.nombre}</h4>
                       <p class="card-text">Modulo: ${obj.modulo}</p>
                     </div>
             </div>
             ` 
}

function crearTemplate( listaMentores ){
    let template = ""
    /* for (const mentor of listaMentores) {
          template += crearCard( mentor )
    } */
    const fn = mentor => template += crearCard( mentor )
    listaMentores.forEach( fn );

    return template

}

function imprimirCards( template, id ){
    let contenedor = document.getElementById(id)
    contenedor.innerHTML = template
}

const template = crearTemplate( mentores )

imprimirCards( template, "contenedorCards" )