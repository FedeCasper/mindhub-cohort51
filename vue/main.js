const { createApp } = Vue 

// Destructuring
let persona = {
     nombre: "Cami",
     edad: 27
}

console.log(persona.nombre);
console.log(persona['nombre']);

const {nombre} = persona
console.log(nombre);

// Método CreateApp
console.log(Vue.createApp);

//Objeto de ejemplo
let objetoAcuerdenseDeMi = {
     propiedad1: "Soy propiedad 1",
     propiedad2: 2,
     data(){
          return {
               propiedad1: "Nombre",
               propiedad2: "Numero"
          }
     },
     saludar(){
          console.log(this.propiedad1);
     }
}
// objetoAcuerdenseDeMi.saludar();

createApp({

     // Crear propiedades reactivas
     data(){
          return{
               message: "Hola Mundo de Vue!",
               personajes: [],
               inputSearchValue: "",
               filtrados: []
          }
     },

     // Es parte de el ciclo de vida de la app de vue y es un hook
     // El dom no se ha generado ni montado
     // Se ejecuta una unica vez
     created(){
          fetch("https://apisimpsons.fly.dev/api/personajes?limit=50")
          .then(respuesta => respuesta.json())
          .then(data => {
               console.log(data);
               this.personajes = data.docs
               console.log(this.personajes);
               this.filtrados = this.personajes
          })
          .catch(error => console.log(error))
     },

     // El lugar donde van declarar las funciones
     methods:{
          saludar(){
               console.log("Estoy dentro de methods");
          },
          // filtrarPorSearch(){
          //      this.filtrados = this.personajes.filter( personaje => personaje.Nombre.includes(this.inputSearchValue) )
          // }
     },

     computed:{
          filtrarPorSearch(){
               this.filtrados = this.personajes.filter( personaje => personaje.Nombre.includes(this.inputSearchValue) )
          }
     }

}).mount('#app')