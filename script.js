const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// SCROLL REVEAL EFFECT

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });
});

const hiddenElements = document.querySelectorAll(
  ".glass, .gallery-item, .hero-left, .hero-right"
);

hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});