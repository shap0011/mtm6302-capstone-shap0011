// /** Variables */
const $pokemon = document.getElementById('pokemon')
const $bigPok = document.getElementById('bigPokemon')
const $galLabel = document.getElementById('galLabel')
const $loadsNumber = document.getElementById('loadsNumber')
const $startagain = document.getElementById('startagain')
const $pokblock = document.getElementById('pokblock')
const $loadmore2140 = document.querySelector('.loadmore2140')
const url = 'https://pokeapi.co/api/v2/pokemon/'
const urlNext2140 = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
const urlNext4160 = 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20'
const urlNext6180 = 'https://pokeapi.co/api/v2/pokemon?offset=60&limit=20'
const urlNext81100 = 'https://pokeapi.co/api/v2/pokemon?offset=80&limit=20'
const urlNext101120 = 'https://pokeapi.co/api/v2/pokemon?offset=100&limit=20'
const urlNext121140 = 'https://pokeapi.co/api/v2/pokemon?offset=120&limit=20'
const urlNext141160 = 'https://pokeapi.co/api/v2/pokemon?offset=140&limit=20'
const urlNext161180 = 'https://pokeapi.co/api/v2/pokemon?offset=160&limit=20'
const urlNext181200 = 'https://pokeapi.co/api/v2/pokemon?offset=180&limit=20'
const urlNext201220 = 'https://pokeapi.co/api/v2/pokemon?offset=200&limit=20'
const urlNext221240 = 'https://pokeapi.co/api/v2/pokemon?offset=220&limit=20'
const urlNext241260 = 'https://pokeapi.co/api/v2/pokemon?offset=240&limit=20'
const urlNext261280 = 'https://pokeapi.co/api/v2/pokemon?offset=260&limit=20'
const urlNext281300 = 'https://pokeapi.co/api/v2/pokemon?offset=280&limit=20'
const urlNext301320 = 'https://pokeapi.co/api/v2/pokemon?offset=300&limit=20'
const urlNext321340 = 'https://pokeapi.co/api/v2/pokemon?offset=320&limit=20'

// /** Empty arrays */
// gallery of 20 pokemons
let pokemon = []
// list of my chosen pokemons
// let myPokemon = []

/** Functions */

//Create a function to build the pokemon list
function buildPokemon(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/1/'
  
    if (pok.url.length == 36){
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
            class="white-btn"
            src="./assets/images/durham_logo_white.png"
            alt="White button" title="Catch Me!"
            />     
        </a>
    </div>
      `)
      // console.log('pok url 36 id: ', id)
    } else if (pok.url.length == 37){
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
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

//Create a function to build the pokemon id:21 - id:40 list
function buildPokemonNext2140(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/21/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:41 - id:60 list
function buildPokemonNext4160(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/41/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:61 - id:80 list
function buildPokemonNext6180(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/61/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:81 - id:100 list
function buildPokemonNext81100(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/81/'
  
    if (pok.url.length == 37){
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
    } else if (pok.url.length == 38){
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
    }
  } 
  return html
}

//Create a function to build the pokemon id:101 - id:120 list
function buildPokemonNext101120(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/101/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length -1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:121 - id:140 list
function buildPokemonNext121140(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/121/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:141 - id:160 list
function buildPokemonNext141160(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/141/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:161 - id:180 list
function buildPokemonNext161180(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/161/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:181 - id:200 list
function buildPokemonNext181200(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/181/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:201 - id:220 list
function buildPokemonNext201220(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/201/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:221 - id:240 list
function buildPokemonNext221240(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/221/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:241 - id:260 list
function buildPokemonNext241260(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/241/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:261 - id:280 list
function buildPokemonNext261280(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/261/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:281 - id:300 list
function buildPokemonNext281300(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/281/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:301 - id:320 list
function buildPokemonNext301320(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/301/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
            />
        </a>
    </div>
      `)
  } 
  return html
}

//Create a function to build the pokemon id:301 - id:320 list
function buildPokemonNext321340(pokemon){
  const html = []

  for(const pok of pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/321/'
  
      let id = pok.url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
      html.push(`
      <div class="pokblock blue col-xl-1-5 col-md-1-5 col-sm-1-5">
      <img
        class="pok-sm-img"     
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
        alt="${pok.name} Small Pokémon" title="${pok.name}"
      /><span class="pokNum">${id}</span><a href="#bigPokemon" class="btn poklink" role="button" data-id="${id}">
            <img
              class="white-btn"
              src="./assets/images/durham_logo_white.png"
              alt="White button" title="Catch Me!"
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
const id = 1
fetch('https://pokeapi.co/api/v2/pokemon/' + id)
// fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20/')
    .then( response => response.json())
    .then( data => console.log('Fetch the data (results) from pokeapi.co', data.moves[0].move.name) )
    .catch( error => console.error(error) )
// fetch('https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20/')
fetch('https://pokeapi.co/api/v2/pokemon/')
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
async function getPokemonNext2140() {
  const response = await fetch(urlNext2140)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext2140(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext4160() {
  const response = await fetch(urlNext4160)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext4160(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext6180() {
  const response = await fetch(urlNext6180)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext6180(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext81100() {
  const response = await fetch(urlNext81100)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext81100(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext101120() {
  const response = await fetch(urlNext101120)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext101120(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext121140() {
  const response = await fetch(urlNext121140)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext121140(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext141160() {
  const response = await fetch(urlNext141160)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext141160(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext161180() {
  const response = await fetch(urlNext161180)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext161180(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext181200() {
  const response = await fetch(urlNext181200)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext181200(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext201220() {
  const response = await fetch(urlNext201220)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext201220(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext221240() {
  const response = await fetch(urlNext221240)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext221240(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext241260() {
  const response = await fetch(urlNext241260)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext241260(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext261280() {
  const response = await fetch(urlNext261280)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext261280(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext281300() {
  const response = await fetch(urlNext281300)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext281300(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext301320() {
  const response = await fetch(urlNext301320)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext301320(pokemon)
  $pokemon.innerHTML = html.join('')
}

/** Fetch the data from pokeapi.co next 20 pokemon
 * and populate the '20 pokemon gallery'
*/
/** async / await */
async function getPokemonNext321340() {
  const response = await fetch(urlNext321340)
  data = await response.json()
  pokemon = await data.results
  const html = buildPokemonNext321340(pokemon)
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
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pok.id}.png" alt="${pok.name} Big Pokémon" title="${pok.name}" />
      <a href="#bigPokemon" class="btn poklink" role="button">
        <img
          class="pink-btn"
          src="./assets/images/durham_logo_pink.png"
          alt="Alt button" title="Save Me!"
        />
      </a>
    </div>
    <div class="pokInfoBlock col-xl-8 p-0">
      <div class="row">
        <div class="col-xl-6">
          <div class="name">
            <p class="parInfo">
              <span class="data-name text-uppercase">Name: </span
              ><span class="data-detail text-capitalize">${pok.name}</span>
              <span class="data-name text-uppercase">Id: </span
              ><span class="data-detail text-capitalize">${pok.id}</span>
            </p>
          </div>
          <div class="move">
            <p class="parInfo">
              <span class="data-name text-uppercase">Move: </span
              ><span class="data-detail text-capitalize">${pok.moves[0].move.name}</span>
            </p>
          </div>
          <div class="height">
            <p class="parInfo">
              <span class="data-name text-uppercase">Height: </span
              ><span class="data-detail text-capitalize">${pok.height}</span>
            </p>
          </div>
        </div>
        <div class="col-xl-6">
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
      getPok(
        //send the id of the single pokemon (pok)
        e.target.closest('.poklink').dataset.id, 
        e.target.closest('.pokblock').classList.toggle('yellow')             
      )     
  } 
})


/** Define the event listener for the click event */
$loadmore2140.addEventListener('click', function(e){
  e.preventDefault()

  let loadmore = document.getElementById('loadmore')
  let startagain = document.getElementById('startagain')

  if(e.target.classList.contains('loadmore2140')){
      //build the next 20 pokemon list
      getPokemonNext2140() 
      loadmore.classList.remove('loadmore2140')
      loadmore.classList.add('loadmore4160')
  } else if(e.target.classList.contains('loadmore4160')){
          //build the next 20 pokemon list
          getPokemonNext4160()
          loadmore.classList.remove('loadmore4160')
          loadmore.classList.add('loadmore6180')
  } else if(e.target.classList.contains('loadmore6180')){
          //build the next 20 pokemon list
          getPokemonNext6180()
          loadmore.classList.remove('loadmore6180')
          loadmore.classList.add('loadmore81100')
  } else if(e.target.classList.contains('loadmore81100')){
          //build the next 20 pokemon list
          getPokemonNext81100()
          loadmore.classList.remove('loadmore81100')
          loadmore.classList.add('loadmore101120')
  } else if(e.target.classList.contains('loadmore101120')){
          //build the next 20 pokemon list
          getPokemonNext101120()
          loadmore.classList.remove('loadmore101120')
          loadmore.classList.add('loadmore121140')
  } else if(e.target.classList.contains('loadmore121140')){
          //build the next 20 pokemon list
          getPokemonNext121140()
          loadmore.classList.remove('loadmore121140')
          loadmore.classList.add('loadmore141160')
  } else if(e.target.classList.contains('loadmore141160')){
          //build the next 20 pokemon list
          getPokemonNext141160()
          loadmore.classList.remove('loadmore141160')
          loadmore.classList.add('loadmore161180')
  } else if(e.target.classList.contains('loadmore161180')){
          //build the next 20 pokemon list
          getPokemonNext161180()
          loadmore.classList.remove('loadmore161180')
          loadmore.classList.add('loadmore181200')
  } else if(e.target.classList.contains('loadmore181200')){
          //build the next 20 pokemon list
          getPokemonNext181200()
          loadmore.classList.remove('loadmore181200')
          loadmore.classList.add('loadmore201220')
  } else if(e.target.classList.contains('loadmore201220')){
          //build the next 20 pokemon list
          getPokemonNext201220()
          loadmore.classList.remove('loadmore201220')
          loadmore.classList.add('loadmore221240')
  } else if(e.target.classList.contains('loadmore221240')){
          //build the next 20 pokemon list
          getPokemonNext221240()
          loadmore.classList.remove('loadmore221240')
          loadmore.classList.add('loadmore241260')
  } else if(e.target.classList.contains('loadmore241260')){
          //build the next 20 pokemon list
          getPokemonNext241260()
          loadmore.classList.remove('loadmore241260')
          loadmore.classList.add('loadmore261280')
  } else if(e.target.classList.contains('loadmore261280')){
          //build the next 20 pokemon list
          getPokemonNext261280()
          loadmore.classList.remove('loadmore261280')
          loadmore.classList.add('loadmore281300')
  } else if(e.target.classList.contains('loadmore281300')){
          //build the next 20 pokemon list
          getPokemonNext281300()
          loadmore.classList.remove('loadmore281300')
          loadmore.classList.add('loadmore301320')
  } else if(e.target.classList.contains('loadmore301320')){
          //build the next 20 pokemon list
          getPokemonNext301320()
          loadmore.classList.remove('loadmore301320')
          loadmore.classList.add('loadmore321340')
  } else if(e.target.classList.contains('loadmore321340')){
          //build the next 20 pokemon list
          getPokemonNext321340()
          loadmore.classList.remove('loadmore321340')
          loadmore.classList.add('loadmore341360')
  } else {
              // display the pokemon details once the data is fetched
          $loadsNumber.innerHTML = `

              <p class="gal-par text-center text-light">You have reached the limit of
                  <span class="pokname text-uppercase text-light">340</span> Pokémon!
              </p>
              <p class="gal-par text-center text-light">Click 'Start Again' button to load first
                  <span class="pokname text-uppercase text-light">20</span> Pokémon.
              </p>
            `
            startagain.classList.remove('hidden')
            loadmore.classList.add('hidden')
  }
})

// reload page and start again
$startagain.addEventListener('click', function(){
  location.reload()
})

/** Code to run when the page loads */
getPokemon()


