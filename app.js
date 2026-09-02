/* ===================================
   LUXVORA WATCHES - APP.JS
=================================== */

/* LOADER */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1800);
});

/* DARK / LIGHT MODE */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

/* STICKY HEADER */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.9)";
  } else {
    header.style.background = "rgba(0,0,0,0.35)";
  }
});

/* HERO FADE-IN */
const heroContent = document.querySelector(".hero-content");

heroContent.style.opacity = "0";
heroContent.style.transform = "translateY(40px)";

setTimeout(() => {
  heroContent.style.transition = "1s ease";
  heroContent.style.opacity = "1";
  heroContent.style.transform = "translateY(0)";
}, 500);

/* BUTTON GLOW EFFECT */
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
  btn.style.boxShadow = "0 0 30px rgba(212,175,55,.6)";
});

btn.addEventListener("mouseleave", () => {
  btn.style.boxShadow = "none";
});

/* PARALLAX HERO */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = window.scrollY * 0.4 + "px";
});
