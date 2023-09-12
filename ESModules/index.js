import { filtroCruzado, imprimirLasCards, generarTemplate } from './Modules/funciones.js'

const $contenedor = document.getElementById( 'contenedor-js' )
const $select = document.getElementById('select-js')
const $search = document.getElementById('search-js')
const $filtros = document.getElementById('filtros-js')
const URL_API = 'https://valorant-api.com/v1/agents'

let agentes = undefined

fetch( URL_API )
    .then( response => response.json() )
    .then( ( { data } ) => {
        agentes = data.filter( agente => agente.isPlayableCharacter )
        let roles = [ ...new Set( agentes.map( agente => agente.role.displayName ) ) ]
        const fnReduce = (template, role) =>  template + `<option value="${role}">${role}</option>`
        $select.innerHTML += roles.reduce( fnReduce , "" )
        imprimirLasCards( generarTemplate( agentes ), $contenedor )

       /*  const table = agentes.map( agente => { 
            return {
                nombre: agente.displayName,
                rol : agente.role.displayName
            }
         } )
         $tbody.innerHTML = table.reduce( (acc, agente) => {
            return acc + ` <tr>
            <td>${agente.nombre}</td>
            <td>${agente.rol}</td>
          </tr>`
         }, "" )
         console.log(table) */

    } )
    .catch( err => console.log( err ) )
    
$filtros.addEventListener( 'input', () => {
    filtroCruzado( agentes, $select.value, $search.value, $contenedor )
} )



