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
    // Scroll top button
var mybutton = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}