const mentores = [
    {
        nombre: 'Nico',
        edad: 29,
        imagen: 'https://i.postimg.cc/Y2vWzKJQ/34040eea-fbd9-4a60-8a61-6afba83464a8.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'NodeJS', 'ReactJS', 'React Native', 'VueJS'],
        modulo: 'JS'
    },
    {
        nombre: 'Lucre',
        edad: 28,
        imagen: 'https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'NodeJS', 'ReactJS', 'React Native'],
        modulo: 'JS'
    },
    {
        nombre: 'Fede',
        edad: 38,
        imagen: 'https://i.postimg.cc/HWvrrZnj/72c679cc-25d9-479b-b69d-e959118e3ae5.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'Java', 'VueJS'],
        modulo: 'JS'
    },
    {
        nombre: 'Cami',
        edad: 28,
        imagen: 'https://www.diarioveterinario.com/images/showid2/4315158?w=900',
        tecnologias: ['HTML','CSS','JavaScript', 'Bootstrap'],
        modulo: 'WEB'
    },
    {
        nombre: 'Kev',
        edad: 32,
        imagen: 'https://static.wixstatic.com/media/d1fede_4f753f4736604e4ebf85029b92c769c3~mv2.jpg/v1/fill/w_640,h_454,al_c,lg_1,q_80,enc_auto/d1fede_4f753f4736604e4ebf85029b92c769c3~mv2.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'React'],
        modulo: 'WEB'
    },
    {
        nombre: 'Flor',
        edad: 32,
        imagen: 'https://p4.wallpaperbetter.com/wallpaper/630/552/841/look-kitty-background-baby-wallpaper-preview.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'VueJS'],
        modulo: 'WEB'
    },
    {
        nombre: 'Sil',
        edad: 37,
        imagen: 'https://i.postimg.cc/s2MfSyNL/4eab67e8-8718-46ce-907c-f032b6c67388.jpg',
        tecnologias: ['HTML', 'CSS', 'Testing'],
        modulo: 'WEB'
    },
]
/* 
const h1 = document.children[0].children[1].children[0]
const claseIngresada = prompt('Ingrese una clase')
h1.className += " " + claseIngresada

console.log( h1 )
 */

// Metodos para recuperar la referencia a un 
// elemento

// getElementById
const h1 = document.getElementById( "titulo" )
h1.className = "texto-azul texto-centrado m-5"
// querySelector - busca por selector y recupera el primero que encuentre
const titulo = document.querySelector( "#titulo" )
/* const tituloDos = document.querySelector( "h1" )
const tituloTres = document.querySelector( ".titulo" ) */

// querySelectorAll - nos trae un nodeList con todos los elementos que coincidan con el selector
const listItems = document.querySelectorAll( "nav li" )
console.log( listItems )

for( const item of listItems ){
    item.className = 'text-warning'
}

/* const listaMentores = document.querySelectorAll( 'main li' )
console.log( listaMentores ) */
// Modificar un elemento
// Cambiarle su contenido ( texto )  textContent || innerText
/* for( let indice = 0; indice < listaMentores.length; indice++ ){
    listaMentores[indice].textContent = mentores[indice].nombre
} */
// Cambiarle su contenido ( HTML ) innerHTML
/* for( let indice = 0; indice < listaMentores.length; indice++ ){
    listaMentores[indice].innerHTML = `<p class="text-danger">${mentores[indice].nombre}</p>`
} */
// Modificar las clases


const ulMentores = document.getElementById('listaMentores')


let template = ""
for (const mentor of mentores) {
    template += `<li> <p class="text-danger"> ${mentor.nombre}  </p> </li>`
}
console.log( template )
ulMentores.innerHTML = template



// getElementById( elId en formato string ) -> retorna la referencia al objeto que representa ese elemento
// querySelector( selector como si fuera css ) -> busca por el selector que le pasamos y nos retorna el primero que coincida
// querySelectorAll( selector como si fuera css ) -> nos retorna un nodeList con todos los que coinciden con el selector

// className -> Todas las clases de un elemento
// children -> HTMLCollection con los nodos hijos del elemento
// textContent -> Es la propiedad que guarda texto del elemento
// innerHTML -> Es la propiedad que guarda el html que tiene dentro la etiqueta

// Crear elementos desde js
// createElement

/* <p class="text-primary"> Andres </p> */
/* const parrafoNuevo = document.createElement( "p" ) // -> <p> </p> */
/* parrafoNuevo.className = "text-primary" // -> <p class="text-primary"> </p>
parrafoNuevo.textContent = " Andres " // -> <p class="text-primary"> Andres </p>
console.log( parrafoNuevo )


contenedorAlumnos.appendChild( parrafoNuevo ) */


const contenedorAlumnos = document.getElementById( 'alumnos' )
/* contenedorAlumnos.innerHTML += `<p class="text-primary"> Andres </p>` */

/* const listaAlumnos = document.createElement( 'ul' )
listaAlumnos.innerHTML = `<li> Alejandra </li> <li> Andres </li>` */

/* contenedorAlumnos.appendChild( listaAlumnos ) */

titulo.classList.add( "p-5" )
console.log( titulo.classList )
console.log( titulo.classList.contains( "p-5" ) )
/* titulo.classList.remove( "texto-azul" ) */
titulo.classList.replace( "texto-azul", "text-primary" )
titulo.classList.replace( "texto-centrado", "text-center" )
titulo.classList.toggle( "m-5" )
console.log( titulo.classList )

if( titulo.classList.contains( "m-5" ) ){
    titulo.classList.remove("m-5")
}else{
    titulo.classList.add("m-5")
}