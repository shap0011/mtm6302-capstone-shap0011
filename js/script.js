const $pokemon = document.getElementById("pokemon");
const $loadsNumber = document.getElementById("loadsNumber");

const $next = document.getElementById("next"); // or "loadmore"
const $prev = document.getElementById("prev");
const $startagain = document.getElementById("startagain"); // optional, you can remove later

const LIMIT = 12;
const MAX = 340;

let nextUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${LIMIT}`;
let prevUrl = null;

let isLoading = false;

function parseIdFromUrl(pokeUrl) {
  return pokeUrl.split("/").filter(Boolean).pop();
}

function buildPokemon(list) {
  return list.map((pok) => {
    const id = parseIdFromUrl(pok.url);
    return `
      <div class="col-4 col-sm-3 col-lg-6 col-xl-4">
        <div class="pokblock blue border rounded p-2 text-center">
          <img class="img-fluid pok-sm-img"
               src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
               alt="${pok.name} Small Pokémon" title="${pok.name}" />
          <div class="small mt-1">${id}</div>
          <a href="#bigPokemon" class="btn p-0 mt-1 poklink" role="button" data-id="${id}">
            <img class="white-btn"
                 src="./assets/images/durham_logo_white.png"
                 alt="Catch button" title="Catch Me!"
                 style="width:34px;height:34px" />
          </a>
        </div>
      </div>
    `;
  });
}

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

    // replace the 12 items (lightweight)
    $pokemon.innerHTML = buildPokemon(data.results).join("");

    // label
    const ids = data.results.map((r) => Number(parseIdFromUrl(r.url)));
    const start = Math.min(...ids);
    const end = Math.max(...ids);
    $loadsNumber.textContent = `Showing ${start}–${Math.min(end, MAX)}`;

    // enable/disable buttons based on available pages + your MAX cap
    $prev.disabled = !prevUrl;
    $next.disabled = !nextUrl || end >= MAX;

    // optional: if you still want "Start Again" when you hit MAX
    if (end >= MAX) {
      nextUrl = null;
      if ($startagain) $startagain.classList.remove("hidden");
    } else {
      if ($startagain) $startagain.classList.add("hidden");
    }
  } finally {
    isLoading = false;
    // if nextUrl is null, keep next disabled
    $next.disabled = !nextUrl;
    $prev.disabled = !prevUrl;
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

// Initial load
loadPage(nextUrl);
