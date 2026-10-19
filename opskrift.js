"use strict";

const params = new URLSearchParams(window.location.search);

const selectedID = params.get("id");

console.log("selectedID", selectedID);

const detailURL = `https://dummyjson.com/recipes/${selectedID}`;

console.log("detailURL", detailURL);

function loadData(url) {
  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      showDetails(data);
    });
}

function showDetails(detail) {
  console.log("detail", detail);

  document.querySelector("#opskrift-navn").textContent = detail.name;

  document.querySelector("#opskrift-billede").src = detail.image;

  document.querySelector("#opskrift-billede").alt = detail.name;

  document.querySelector("#opskrift-tid").textContent = `Total time: ${detail.prepTimeMinutes + detail.cookTimeMinutes} minutes`;

  document.querySelector("#opskrift-portioner").textContent = `Servings: ${detail.servings}`;

  detail.ingredients.forEach((ingrediens) => {
    document.querySelector("#opskrift-ingredienser").innerHTML += `<li>${ingrediens}</li>`;
  });

  detail.instructions.forEach((trin) => {
    document.querySelector("#opskrift-fremgangsmåde").innerHTML += `<li>${trin}</li>`;
  });
}

if (selectedID) {
  loadData(detailURL);
}
