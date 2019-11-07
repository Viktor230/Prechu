$(document).ready(function() {
  $(".menu-btn").on("click", function(e) {
    e.preventDefault();
    $(".menu-btn").toggleClass("menu-btn-active");
    $(".navbar").toggleClass("navbar-active");
  });
  var swiper = new Swiper(".swiper-container", {
    autoplay: {
      delay: 2000
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
