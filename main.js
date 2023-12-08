let questions = document.querySelectorAll(".questions .question");
questions.forEach(function(e) {
  e.addEventListener("click", function() {
    this.querySelector(".text").classList.toggle("show");
    if (this.querySelector(".text").classList.length == 2) {
      this.querySelector("ion-icon").name = "remove-outline";
    }else {
      this.querySelector("ion-icon").name = "add-outline";
    };
  });
});
let up = document.querySelector(".up");
onscroll = () => { scrollY >= 200 ? up.style.display = "flex" : up.style.display = "none" };
up.onclick = function() {
  scroll({
    top: 0,
    behavior: "smooth",
  });
};
let s = document.querySelector(".swiper")
const swiper = new Swiper(s, {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});