let hamburgerBtn = document.getElementById("hamburgerBtn");
let hamburgerCloseBtn = document.getElementById("hamburgerCloseBtn");
let navigationMenu = document.querySelector("nav.o-navigation");

hamburgerBtn.addEventListener("click", () => {
    navigationMenu.classList.add("-opened");
    document.body.style.position = "fixed";
})
hamburgerCloseBtn.addEventListener("click", () => {
    if (navigationMenu.classList.contains("-opened")) {
        navigationMenu.classList.remove("-opened");
        document.body.style.position = "static";
    }
})