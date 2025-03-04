document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (hamburger && navMenu && navLinks) {
      hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
      });

      navLinks.forEach(link => {
          link.addEventListener("click", () => {
              hamburger.classList.remove("active");
              navMenu.classList.remove("active");
          });
      });
  }

  let resizeTimeout;
  window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
          console.log("Resize event handled without loop.");
      }, 200); // Ajusta el tiempo si es necesario
  })});