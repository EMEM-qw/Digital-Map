const navLinks = document.getElementById("navLinks");
const openMenuButton = document.querySelector(".menu-open");
const closeMenuButton = document.querySelector(".menu-close");

openMenuButton.addEventListener("click", () => {
  navLinks.classList.add("is-open");
  openMenuButton.setAttribute("aria-expanded", "true");
});

closeMenuButton.addEventListener("click", () => {
  navLinks.classList.remove("is-open");
  openMenuButton.setAttribute("aria-expanded", "false");
});
