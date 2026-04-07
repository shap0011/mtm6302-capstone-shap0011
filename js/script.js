const $pokemon = document.getElementById("pokemon");
const $loadsNumber = document.getElementById("loadsNumber");
const $bigPokemonImage = document.getElementById("bigPokemonImage");
const $pokeName = document.getElementById("pokeName");
const $pokeId = document.getElementById("pokeId");
const $pokeMove = document.getElementById("pokeMove");
const $pokeHeight = document.getElementById("pokeHeight");
const $pokeType = document.getElementById("pokeType");
const $pokeAbilities = document.getElementById("pokeAbilities");
const $pokeWeight = document.getElementById("pokeWeight");
const $galLabel = document.getElementById("galLabel");

const $next = document.getElementById("next"); // or "loadmore"
const $prev = document.getElementById("prev");
const $startagain = document.getElementById("startagain"); // optional, you can remove later
const $saveMe = document.getElementById("saveMe");

const $savedPokemonList = document.getElementById("savedPokemonList");

const LIMIT = 12;
const MAX = 340;

let nextUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${LIMIT}`;
let prevUrl = null;

let isLoading = false;
let selectedPokemon = null;

function getSavedPokemon() {
  const saved = localStorage.getItem("savedPokemon");
  return saved ? JSON.parse(saved) : [];
}

function setSavedPokemon(list) {
  localStorage.setItem("savedPokemon", JSON.stringify(list));
}

function renderSavedPokemon() {
  const savedList = getSavedPokemon();

  if (!savedList.length) {
    $savedPokemonList.innerHTML = `
      <div class="col-12">
        <p class="mb-0">No saved Pokémon yet.</p>
      </div>
    `;
    return;
  }

  $savedPokemonList.innerHTML = savedList
    .map(
      (pok) => `
        <div class="col-6 col-md-4 col-lg-3">
          <div class="saved-card text-center rounded-4 p-2 h-100 saved-item" data-id="${pok.id}">
            <img
              class="img-fluid saved-img"
              src="${pok.image}"
              alt="${pok.name} saved Pokémon"
              title="${pok.name}"
            />
            <div class="saved-id small">#${pok.id}</div>
            <div class="saved-name text-capitalize">${pok.name}</div>

            <button class="remove-btn mt-2" data-id="${pok.id}">
              Remove
            </button>
          </div>
        </div>
      `,
    )
    .join("");
}

function parseIdFromUrl(pokeUrl) {
  return pokeUrl.split("/").filter(Boolean).pop();
}

function refreshGallerySavedState() {
  const savedList = getSavedPokemon();

  document.querySelectorAll(".poklink").forEach((btn) => {
    const id = Number(btn.dataset.id);
    const icon = btn.querySelector(".catch-icon");
    if (!icon) return;

    const isSaved = savedList.some((pok) => pok.id === id);

    icon.src = isSaved
      ? "./assets/images/durham_logo_pink.png"
      : "./assets/images/durham_logo_white.png";
  });
}

function buildPokemon(list) {
  return list.map((pok) => {
    const id = parseIdFromUrl(pok.url);

    const savedList = getSavedPokemon();
    const isSaved = savedList.some((p) => p.id == id);

    return `
      <div class="col-6 col-md-4 col-lg-3 col-xl-2 gallery-col">
        <div class="pokemon-thumb-card h-100 text-center p-2 rounded-4">
          <img
            class="img-fluid pok-sm-img"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
            alt="${pok.name} Small Pokémon"
            title="${pok.name}"
          />
          <div class="pokemon-thumb-id small">#${id}</div>
          <div class="pokemon-thumb-name text-capitalize">${pok.name}</div>

          <a
            href="#bigPokemon"
            class="btn poklink catch-btn mt-2"
            role="button"
            data-id="${id}"
            aria-label="Catch Pokemon"
          >
            <img
              class="catch-icon"
              src="${
                isSaved
                  ? "./assets/images/durham_logo_pink.png"
                  : "./assets/images/durham_logo_white.png"
              }"
              alt="Catch button"
              title="Catch Me!"
            />
          </a>
        </div>
      </div>
    `;
  });
}

async function getPok(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pok = await res.json();

    selectedPokemon = pok;

    const officialArt =
      pok.sprites.other["official-artwork"].front_default ||
      pok.sprites.front_default;

    const types = pok.types.map((t) => t.type.name).join(", ");
    const abilities = pok.abilities.map((a) => a.ability.name).join(", ");
    const move = pok.moves.length ? pok.moves[0].move.name : "none";

    $bigPokemonImage.src = officialArt;
    $bigPokemonImage.alt = `${pok.name} Big Pokémon`;
    $bigPokemonImage.title = pok.name;

    $pokeName.textContent = pok.name;
    $pokeId.textContent = pok.id;
    $pokeMove.textContent = move;
    $pokeHeight.textContent = pok.height;
    $pokeType.textContent = types;
    $pokeAbilities.textContent = abilities;
    $pokeWeight.textContent = pok.weight;

    $galLabel.innerHTML = `
      <p class="mb-1">
        You caught <span class="pokname text-uppercase">${pok.name}</span>!
      </p>
      <p class="mb-0">
        Explore the details and catch another Pokémon from the gallery.
      </p>
    `;
  } catch (error) {
    console.error("Error loading Pokémon details:", error);
  }
}

$saveMe.addEventListener("click", () => {
  if (!selectedPokemon) {
    $galLabel.innerHTML = `
      <p class="mb-1">No Pokémon selected yet.</p>
      <p class="mb-0">Catch one from the gallery first.</p>
    `;
    return;
  }

  const savedList = getSavedPokemon();

  const alreadySaved = savedList.some((pok) => pok.id === selectedPokemon.id);

  if (alreadySaved) {
    $galLabel.innerHTML = `
      <p class="mb-1">
        <span class="pokname text-uppercase">${selectedPokemon.name}</span> is already saved.
      </p>
      <p class="mb-0">Choose another Pokémon or view your saved list later.</p>
    `;
    return;
  }

  const pokemonToSave = {
    id: selectedPokemon.id,
    name: selectedPokemon.name,
    image:
      selectedPokemon.sprites.other["official-artwork"].front_default ||
      selectedPokemon.sprites.front_default,
    types: selectedPokemon.types.map((t) => t.type.name),
    abilities: selectedPokemon.abilities.map((a) => a.ability.name),
    move: selectedPokemon.moves.length
      ? selectedPokemon.moves[0].move.name
      : "none",
    height: selectedPokemon.height,
    weight: selectedPokemon.weight,
  };

  savedList.push(pokemonToSave);
  setSavedPokemon(savedList);
  renderSavedPokemon();
  refreshGallerySavedState();

  $galLabel.innerHTML = `
    <p class="mb-1">
      <span class="pokname text-uppercase">${selectedPokemon.name}</span> was saved!
    </p>
    <p class="mb-0">You can now catch and save more Pokémon.</p>
  `;
});

$pokemon.addEventListener("click", (e) => {
  const btn = e.target.closest(".poklink");
  if (!btn) return;

  e.preventDefault();

  const id = btn.dataset.id;
  if (!id) return;

  selectedGalleryButton = btn;

  getPok(id);
});

async function loadPage(urlToLoad) {
  if (isLoading) return;
  if (!urlToLoad) return;

  isLoading = true;
  $next.disabled = true;
  $prev.disabled = true;

  try {
    const res = await fetch(urlToLoad);
    const data = await res.json();

    nextUrl = data.next;
    prevUrl = data.previous;

    $pokemon.innerHTML = buildPokemon(data.results).join("");
    refreshGallerySavedState();

    const ids = data.results.map((r) => Number(parseIdFromUrl(r.url)));
    const start = Math.min(...ids);
    const end = Math.max(...ids);

    $loadsNumber.textContent = `Showing ${start}–${Math.min(end, MAX)}`;

    $prev.disabled = !prevUrl;
    $next.disabled = !nextUrl || end >= MAX;
  } catch (error) {
    console.error("Error loading page:", error);
  } finally {
    isLoading = false;
  }
}

// Next / Previous controls
$next.addEventListener("click", (e) => {
  e.preventDefault();
  loadPage(nextUrl);
});

$prev.addEventListener("click", (e) => {
  e.preventDefault();
  loadPage(prevUrl);
});

// Optional: Start Again resets to first page
if ($startagain) {
  $startagain.addEventListener("click", () => {
    $startagain.classList.add("hidden");
    nextUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${LIMIT}`;
    prevUrl = null;
    loadPage(nextUrl);
  });
}

$savedPokemonList.addEventListener("click", (e) => {
  const card = e.target.closest(".saved-item");
  if (!card) return;

  const id = card.dataset.id;
  if (!id) return;

  getPok(id);
});

$savedPokemonList.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-btn");

  if (removeBtn) {
    e.stopPropagation();

    const id = Number(removeBtn.dataset.id);
    let savedList = getSavedPokemon();

    savedList = savedList.filter((pok) => pok.id !== id);

    setSavedPokemon(savedList);
    renderSavedPokemon();
    refreshGallerySavedState();

    return;
  }
});

// Initial load
loadPage(nextUrl);
renderSavedPokemon();
