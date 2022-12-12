var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector('.navbar')

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("shadow-lg")

});
