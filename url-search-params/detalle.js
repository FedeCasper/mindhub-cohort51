//console.log([window.location.search])

let parametro = location.search;
//console.log(parametro)

let params = new URLSearchParams(parametro);
console.log(params);

let idAgente = params.get("parametro");
console.log(idAgente);

let personaje = agentes.data.find(agente => agente.uuid === idAgente)
console.log(personaje);

//mediante DOM

 let contenedorCardDetalle = document.getElementById("sec-card");
 console.log(contenedorCardDetalle);

 function crearCardDetalle(elemento , objetoAgente){
    elemento.innerHTML +=`
        <article class="card col-12 col-md-12 col-xl-6 border border-primary">
            <h2 class="card-title text-center">${objetoAgente.displayName}</h2>
            <div class="card-body d-flex gap-3 flex-column">
                <img class="card-img-top" src="${objetoAgente.displayIcon}" alt="">
                <p>${objetoAgente.description}</p>
    
            </div>
        </article>

    `
 }
 crearCardDetalle(contenedorCardDetalle , personaje)