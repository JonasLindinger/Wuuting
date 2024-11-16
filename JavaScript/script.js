// Button und Menü für Mobilansicht
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

// Öffnet/ Schließt das Menü
toggleBtn.onclick = function () {
    // Dropdown-Menü öffnen/schließen
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    // Icon anpassen (mit turnary operator (geht anscheinend in javescript))
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// Wenn das Fenster klein ist und das Menü geöffnet ist. Es dann wieder größer wird, schleißt sich das Menü wieder.
window.addEventListener("resize", function () {
    // Menü schließen bei größerem Bildschirm
    if (window.innerWidth > 950) {
        dropDownMenu.classList.remove("open");
        toggleBtnIcon.classList = "fa-solid fa-bars";
    }
});

// Das hier läuft nachdem HTML fertig geladen hat.
document.addEventListener("DOMContentLoaded", () => {
    // Suchleiste
    const searchbar = document.querySelector(".searchbar input");

    const productElements = document.querySelectorAll(".product");
    let products = {};

    if (productElements.length > 0) {
        for (var i = 0; i < productElements.length; i++) {
            const productElement = productElements[i];
            const productName = productElement.getElementsByClassName("name").item(0).textContent;
            products[productName] = productElement;
        }
    }

    // Event listener, für den Fall das die Searchbar benutzt wird.
    searchbar.addEventListener("input", function (event) {
        const productNames = Object.keys(products);
        for (var i = 0; i < productNames.length; i++) {
            var name = productNames[i];
            var product = products[name];

            let shouldBeVisible = name.toLowerCase().includes(searchbar.value.toLowerCase());

            if (shouldBeVisible) {
                product.style="";
            }
            else {
                product.style="display:none";
            }
        }
    });
});
