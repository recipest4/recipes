const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

document.querySelector(".dropdown > a").addEventListener("click", (e) => {
  if (window.innerWidth <= 800) {
    const dropdown = e.target.parentElement;

    if (!dropdown.classList.contains("open")) {
      e.preventDefault();

      dropdown.classList.add("open");
    }
  }
});
