// /** Variables */
const $pokemon = document.getElementById('pokemon')
const $bigPok = document.getElementById('bigPokemon')
const $galLabel = document.getElementById('galLabel')
const $loadmore = document.querySelector('.loadmore')
const url = 'https://pokeapi.co/api/v2/pokemon/'
const urlNext = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'

// /** Empty arrays */
// gallery of 20 pokemons
let pokemon = []
// list of my chosen pokemons
let myPokemon = []

/** Functions */

//Create a function to build the pokemon list
function buildPokemon(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/1/'
  
    if (pok.url.length == 36){
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
            class="white-btn"
            src="./assets/images/durham_logo_white.png"
            alt="White button"
            />      
        </a>
    </div>
      `)
      // console.log('pok url 36 id: ', id)
    } else if (pok.url.length == 37){
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length)
      html.push(`
      <div class="pokblock col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button"
            />
        </a>
    </div>
      `)
      // console.log('pok url 37 id: ', id)
    } else {
      //do nothing
    }
  }
  return html
}

//Create a function to build the pokemon list
function buildPokemonNext(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/21/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button"
            />
        </a>
    </div>
      `)
  } 
  return html
}

// parseURL
// Will return the pokemon's id from the provided url

/** Fetch the data from pokeapi.co TEST */
const id = 21
fetch('https://pokeapi.co/api/v2/pokemon/' + id)
// fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20/')
    .then( response => response.json())
    .then( data => console.log('Fetch the data (results) from pokeapi.co', data.name) )
    .catch( error => console.error(error) )
fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20/')
// fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( response => response.json())
    .then( data => console.log('Fetch all data from pokeapi.co', data) )
    .catch( error => console.error(error) )

/** Fetch the data from pokeapi.co 
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemon() {
  const response = await fetch(url)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemon(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext() {
  const response = await fetch(urlNext)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Create a function to fetch and display a single pokemon */

async function getPok(id){
  // fetch the single pokemon
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
  pok = await response.json()

  // display the pokemon details once the data is fetched
  $bigPok.innerHTML = `
  <div class="row">
    <div id="pokemonBigImg" class="pok-bigimg col-xl-4">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pok.id}.png" alt="Bulbasaur Big Pokémon" />
    </div>
    <div class="pokInfoBlock col-xl-8 p-0">
      <div class="row">
        <div class="col-xl-7">
          <div class="name">
            <p class="parInfo">
              <span class="data-name text-uppercase">Name: </span
              ><span class="data-detail text-capitalize">${pok.name}</span>
              <span class="data-name text-uppercase">Id: </span
              ><span class="data-detail text-capitalize">${pok.id}</span>
            </p>
          </div>
          <div class="moves">
            <p class="parInfo">
              <span class="data-name text-uppercase">Move: </span
              ><span class="moves data-detail text-capitalize">${pok.moves[0].move.name}, ${pok.moves[1].move.name}, ${pok.moves[2].move.name}</span>
            </p>
          </div>
          <div class="height">
            <p class="parInfo">
              <span class="data-name text-uppercase">Height: </span
              ><span class="data-detail text-capitalize">${pok.height}</span>
            </p>
          </div>
        </div>
        <div class="col-xl-5">
          <div class="type">
            <p class="parInfo">
              <span class="data-name text-uppercase">Type: </span
              ><span class="data-detail text-capitalize">${pok.types[0].type.name}</span>
            </p>
          </div>
          <div class="ability">
            <p class="parInfo">
              <span class="data-name text-uppercase">Abilities: </span
              ><span class="data-detail text-capitalize">${pok.abilities[0].ability.name}</span>
            </p>
          </div>
          <div class="weight">
            <p class="parInfo">
              <span class="data-name text-uppercase">Weight: </span
              ><span class="data-detail text-capitalize">${pok.weight}</span>
            </p>
          </div>
        </div>
      </div>
      <div id="galLabel" class="row">
        <div class="col gal-label label m-xl-5">
          <p class="gal-par text-center">
            Congratulations!</p> 
          <p class="gal-par text-center">You caught
            <span class="pokname text-uppercase">${pok.name}</span> Pokémon!
          </p>
      </div> 
    </div>
  </div>
    `
} 

/** Define the event listener for the click event */
$pokemon.addEventListener('click', function(e){
  e.preventDefault()
  
  if(e.target.closest('.poklink')){
      getPok(e.target.closest('.poklink').dataset.id
          //send the id of the single pokemon (pok)          
      )
  }
})

/** Define the event listener for the click event */
$loadmore.addEventListener('click', function(e){
  e.preventDefault()

  if(e.target.classList.contains('loadmore')){
      //build the next 20 pokemon list
      getPokemonNext()
      // alert('Hello')
  }
})

/** Code to run when the page loads */
getPokemon()


