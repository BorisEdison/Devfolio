// navbar
var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector('.navbar')

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("shadow-lg")

});

$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      if (scrollTop >= 50) {
        $('.navbar').addClass('shadow-lg');
        $('.navbar').addClass('navbar-scrolled');
        $('.navbar').removeClass('navbar-unscrolled');

        
      } else if (scrollTop < 50) {
        $('.navbar').addClass('navbar-unscrolled');
        $('.navbar').removeClass('shadow-lg');
        $('.navbar').removeClass('navbar-scrolled');
      } 
      
    }); 
    
  });