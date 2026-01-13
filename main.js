document.addEventListener("DOMContentLoaded", () => {
          
const slides = document.querySelectorAll(".slide");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");



menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
    navigation.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});

let index = 0;

setInterval(() => {
  if(!slides.length) return;
  if(index > slides.length){
    slides.length = 0;
  }
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

  
});

