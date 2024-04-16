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

// //Create a function to build the pokemon list
function buildPokemon(pokemon){
  const html = []
  
  // for(let i = 0; i < pokemon.length; i++){
    
  //   let id = i+1
  //   html.push(`
  //   <div class="col-xl-1-5 col-md-1-5 col-sm-1-5">
  //   <img
  //     class="pok-sm-img"
  //     src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
      
  //     alt="${data[i].name}" title="${data[i].name}"
  //   /><img
  //     class="white-btn"
  //     src="/assets/images/durham_logo_white.png"
  //     alt="White button"
  //   />
  // </div>
  //   `)
  // }
  // return html

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/1/'
  
    if (pok.url.length == 36){
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><img
        class="white-btn"
        src="/assets/images/durham_logo_white.png"
        alt="White button"
      />
    </div>
      `)
      console.log('pok url 36 id: ', id)
      console.log('url length 36')
    } else if (pok.url.length == 37){
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length)
      html.push(`
      <div class="col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><img
        class="white-btn"
        src="/assets/images/durham_logo_white.png"
        alt="White button"
      />
    </div>
      `)
      console.log('pok url 37 id: ', id)
    } else {
      //do nothing
    }
    console.log('pok: ', pok)
    console.log('pok name: ', pok.name)
    console.log('pok url: ', pok.url)
  }
  return html
}

// parseURL
// Will return the pokemon's id from the provided url

/** Fetch the data from pokeapi.co */
const id = 1
fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then( response => response.json())
    .then( data => console.log('Fetch the data from pokeapi.co', data.sprites.front_default) )
    .catch( error => console.error(error) )
fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then( response => response.json())
    .then( data => console.log('Fetch all data from pokeapi.co', data) )
    .catch( error => console.error(error) )

/** Fetch the data from pokeapi.co 
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemon() {
  const response = await fetch(url)
  pokemon = await response.json()
  console.log('pokemon: ', pokemon)
  data = await pokemon.results
  console.log('data: ', data)
  const html = buildPokemon(data)
  $pokemon.innerHTML = html.join('')
}

/** Create a function to fetch and display a single pokemon */
async function getSinglePokemon(id){
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
  console.log('response id: ', response)
  pokemon = await response.json()
}

/** Code to run when the page loads */
getPokemon()

