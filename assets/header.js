// menu 
const menu = document.getElementById("menu");
const menuOverlay = document.getElementById('espaco-vazio');

const toggleButton = document.getElementById("side-bar");
const menuLinks = document.querySelectorAll("#menu a");

// Alterna o menu ao clicar no botão do sidebar
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuOverlay.style.display = menu.classList.contains("active") ? "block" : "none";
});

// Fecha o menu ao clicar fora dele
menuOverlay.addEventListener("click", () => {
    menu.classList.remove("active");
    menuOverlay.style.display = "none";
});