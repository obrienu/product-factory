const menuButton = document.querySelector("#breadcrumb");
const header = document.querySelector(".header");
menuButton.addEventListener("click", toggleMenu)

function toggleMenu(event) {
    event.preventDefault();
    menuButton.classList.toggle("menu_open");
    header.classList.toggle("show_nav");
}