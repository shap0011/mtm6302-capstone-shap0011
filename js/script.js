// /** Variables */
const $pokemon = document.getElementById('pokemon')
const $pokemonBigImg = document.getElementById('pokemonBigImg')
const $myPokemon = document.getElementById('#myChosenPokemon')
const url = 'https://pokeapi.co/api/v2/pokemon/'

// /** Empty arrays */
// gallery of 20 pokemons
let pokemon = []
// list of my chosen pokemons
let myPokemon = []

/** Functions */

// parseURL
// Will return the pokemon's id from the provided url

// function parseUrl (url) {
//   return url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
// }
// console.log(parseUrl('parseUrl',url))

// //Create a function to build the pokemon list
function buildPokemon(pokemon){
  const html = []

  for(let i = 0; i < pokemon.length; i++){

    html.push(`
    <div class="col-xl-1-5 col-md-1-5 col-sm-1-5">
    <img
      class="pok-sm-img"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png"
      alt="Bulbasaur Small Pokémon"
    /><img
      class="white-btn"
      src="/assets/images/durham_logo_white.png"
      alt="White button"
    />
  </div>
    `)
  }
  return html
}

// parseURL
// Will return the pokemon's id from the provided url

/** Fetch the data from pokeapi.co 
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemon() {
  const response = await fetch(url)
  console.log('response: ', response)
  pokemon = await response.json()
  console.log('pokemon: ', pokemon)
  data = await pokemon.results
  console.log('results: ', data)
  const html = buildPokemon(data)
  $pokemon.innerHTML = html.join('')
}

/** Code to run when the page loads */
getPokemon()