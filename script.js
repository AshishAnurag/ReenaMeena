const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// ============================
// SCROLL REVEAL ANIMATION
// ============================

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
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

// ============================
// EMAILJS CONFIG
// ============================

// Replace these with your EmailJS details

const PUBLIC_KEY = "jl51BhkoXDFaUttaX";
const SERVICE_ID = "service_csa9b1h";
const TEMPLATE_ID = "template_r3yut5q";

emailjs.init(PUBLIC_KEY);

// ============================
// CONTACT FORM
// ============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const button = document.querySelector(".submit-btn");

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Validation

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  // Loading state

  button.innerHTML = "Sending...";
  button.disabled = true;

  try {

    await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form
    );

    alert("Message sent successfully!");

    form.reset();

  } catch (error) {

    console.error(error);

    alert("Failed to send message. Please try again.");

  }

  button.innerHTML = "Send Message";
  button.disabled = false;

});
