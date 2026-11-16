const toggleButton = document.getElementById("nav-toggle");
const nav = document.querySelector(".navtexts");

toggleButton.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        toggleButton.src = "images/hamburger-close.svg";
    } else {
        toggleButton.src = "images/hamburgermenu.svg";
    }
});