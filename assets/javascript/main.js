const menuButton = document.querySelector("#breadcrumb");
const header = document.querySelector(".header");
const expandAnswerButton = document.querySelectorAll(".expand_answer");


menuButton.addEventListener("click", toggleMenu);

expandAnswerButton.forEach(button => {
    button.addEventListener("click", toggleAnswer)
});

function toggleMenu(event) {
    event.preventDefault();
    menuButton.classList.toggle("menu_open");
    header.classList.toggle("show_nav");
}

function toggleAnswer(event){
    event.preventDefault();
    this.parentNode.nextElementSibling.classList.toggle("open_answer")
}