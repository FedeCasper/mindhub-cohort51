const { createApp } = Vue 
const options = {

     // Crear propiedades reactivas
     data(){
          return{
               message: "Hola Mundo de Vue!",
               personajes: [],
               inputSearchValue: "",
               filtrados: [],
               generos : [],
               checked : [],
               favoritos : []
          }
     },
     mounted(){
          this.favoritos = JSON.parse( localStorage.getItem( "favoritos" ) ) || []
     },
     created(){
          fetch("https://apisimpsons.fly.dev/api/personajes?limit=50")
               .then(respuesta => respuesta.json())
               .then(data => {
                    console.log(data);
                    this.personajes = data.docs
                    let aux =  this.personajes.map( personaje => personaje.Genero ) 
                    this.generos = this.sacarRepetidos( aux ) 
                    console.log( this.generos )
                    this.filtrados = this.personajes
               })
               .catch(error => console.log(error))
          
     },

     methods:{
          saludar(){
               console.log("Estoy dentro de methods");
          },
          sacarRepetidos( lista ){
               return Array.from( new Set( lista ) )
          },

          filtrarPorSearchMethod( personajes, inputSearchValue ){
                return personajes.filter( personaje => personaje.Nombre.includes(inputSearchValue) )
          },
          filtroPorCheck( personajes, checked ){
               if( checked.length == 0 ){
                    return personajes
               }
               return personajes.filter( personaje => checked.includes( personaje.Genero ) )
          },
          filtroCruzado(){
               const filtradoPorSearch = this.filtrarPorSearchMethod( this.personajes, this.inputSearchValue )
               const filtradoPorCheckbox = this.filtroPorCheck( filtradoPorSearch, this.checked )
               this.filtrados = filtradoPorCheckbox
          },
          addFav( personaje ){
               this.favoritos.push( personaje._id ) 
               localStorage.setItem( "favoritos", JSON.stringify( this.favoritos ) )
          },
          removeFav( personaje ){
               this.favoritos = this.favoritos.filter( favoritos => favoritos != personaje._id )
               localStorage.setItem( "favoritos", JSON.stringify( this.favoritos ) )
          }
     },

}
const app = createApp(options)

app.mount('#app')
