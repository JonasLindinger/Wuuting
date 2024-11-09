const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".dropdown_menu");
// Wenn der Button gedrückt wird, öffnen/schließen wir die dropdown navigation
toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle("open");

    // Icon updaten
    const isOpen = dropDownMenu.classList.contains("open");
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}