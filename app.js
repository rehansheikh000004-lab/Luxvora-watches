/* ===================================
   LUXVORA WATCHES - APP.JS
=================================== */

// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 1800);
  }
});

// DARK / LIGHT MODE
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeToggle.textContent =
      document.body.classList.contains("light-mode") ? "☀️" : "🌙";
  });
}

// STICKY HEADER
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (header) {
    header.style.background =
      window.scrollY > 50
        ? "rgba(0,0,0,.9)"
        : "rgba(0,0,0,.35)";
  }
});

// HERO FADE-IN
const heroContent = document.querySelector(".hero-content");

if (heroContent) {
  heroContent.style.opacity = "0";
  heroContent.style.transform = "translateY(40px)";

  setTimeout(() => {
    heroContent.style.transition = "1s ease";
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
  }, 500);
}

// BUTTON GLOW
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 30px rgba(212,175,55,.6)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});

// PARALLAX HERO
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (hero) {
    hero.style.backgroundPositionY = window.scrollY * 0.4 + "px";
  }
});

// WATCH CARD ANIMATION
document.querySelectorAll(".watch-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// FEATURED WATCH FLOAT
const watchImage = document.querySelector(".watch-image");

if (watchImage) {
  let move = 1;

  setInterval(() => {
    watchImage.style.transform = `translateY(${move * 8}px)`;
    watchImage.style.transition = "2s ease";
    move *= -1;
  }, 2000);
}

// GALLERY HOVER
document.querySelectorAll(".gallery-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.filter = "brightness(1.1)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.filter = "brightness(1)";
  });
});

// TESTIMONIAL SLIDER
const reviews = document.querySelectorAll(".testimonial");

if (reviews.length > 0) {
  let reviewIndex = 0;

  setInterval(() => {
    reviews[reviewIndex].classList.remove("active");
    reviewIndex = (reviewIndex + 1) % reviews.length;
    reviews[reviewIndex].classList.add("active");
  }, 3500);
}

// CONTACT FORM
const form = document.getElementById("contactForm");
const success = document.getElementById("successMessage");

if (form && success) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    success.textContent =
      "✔ Thank you! Our Luxury Advisor will contact you shortly.";
    form.reset();
  });
}
