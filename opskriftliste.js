const grid = document.getElementById("recipe-grid");
const burger = document.getElementById("burger");

/**/
const MAX_RECIPES = 6;
const API_URL = `https://dummyjson.com/recipes?limit=${MAX_RECIPES}`;
const nav = document.getElementById("nav");

/* --------- JSON --------- */
async function loadRecipes() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    renderRecipes(data.recipes);
  } catch (err) {
    grid.innerHTML = '<p class="status">Kunne ikke hente opskrifterne. Prøv igen senere.</p>';
    console.error("Fejl ved hentning af opskrifter:", err);
  }
}

function renderRecipes(recipes) {
  grid.innerHTML = "";
  recipes.forEach((recipe) => {
    const card = document.createElement("a");
    card.className = "recipe-card";
    card.href = `opskrift.html?id=${encodeURIComponent(recipe.id)}`;

    const img = document.createElement("img");
    img.src = recipe.image;
    img.alt = recipe.name;
    img.loading = "lazy";

    const title = document.createElement("h2");
    title.textContent = recipe.name;

    card.append(img, title);
    grid.append(card);
  });
}

loadRecipes();
