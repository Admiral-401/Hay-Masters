document.addEventListener("DOMContentLoaded", () => {
          
const slides = document.querySelectorAll(".slide");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");



menuToggle.addEventListener("click", () => {
  console.log("clicked");
  navigation.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

  
});

