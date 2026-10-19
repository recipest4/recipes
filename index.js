const categoryList = [
  { name: "Easy recipes", tag: "Easy" },
  { name: "Protein focused recipes", tag: "Chicken" },
  { name: "Salads", tag: "Salad" },
  { name: "Pasta recipes", tag: "Pasta" },
  { name: "Veggies", tag: "Vegetarian" },
  { name: "Cheap recipes", tag: null },
];

const container = document.querySelector(".category_list");

categoryList.forEach((category) => {
  const link = document.createElement("a");

  link.classList.add("category_button");
  link.textContent = category.name;

  if (category.name === "Cheap recipes") {
    link.classList.add("cheap_button");
  }

  if (category.name === "Cheap recipes") {
    link.href = "opskriftliste.html";
  } else if (category.tag) {
    link.href = `opskriftliste.html?tag=${encodeURIComponent(category.tag)}`;
  } else {
    link.href = "opskriftliste.html";
  }

  container.appendChild(link);
});
