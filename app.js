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

/* WATCH CARD ANIMATION */

document.querySelectorAll(".watch-card").forEach(card=>{
  card.addEventListener("mouseenter",()=>{
    card.style.transform="translateY(-12px) scale(1.02)";
  });

  card.addEventListener("mouseleave",()=>{
    card.style.transform="translateY(0) scale(1)";
  });
});

/* FEATURED WATCH FLOAT ANIMATION */

const watchImage = document.querySelector(".watch-image");

let move = 1;

setInterval(() => {
  if (watchImage) {
    watchImage.style.transform = `translateY(${move * 8}px)`;
    watchImage.style.transition = "2s ease";
    move *= -1;
  }
}, 2000);

/* LUXURY GALLERY */

.gallery{
  padding:120px 8%;
  background:#111;
  text-align:center;
}

.gallery h2{
  font-family:'Cormorant Garamond',serif;
  font-size:56px;
  margin:20px 0 50px;
}

.gallery-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.gallery-card{
  height:260px;
  border-radius:24px;
  position:relative;
  overflow:hidden;
  cursor:pointer;
  transition:.4s;
  background:linear-gradient(135deg,#D4AF37,#222);
}

.gallery-card:hover{
  transform:scale(1.05);
  box-shadow:0 20px 50px rgba(212,175,55,.35);
}

.gallery-card span{
  position:absolute;
  bottom:20px;
  left:20px;
  color:white;
  font-size:20px;
  font-family:'Cormorant Garamond',serif;
}

.g1{background:linear-gradient(135deg,#D4AF37,#1b1b1b);}
.g2{background:linear-gradient(135deg,#444,#000);}
.g3{background:linear-gradient(135deg,#8b6a2f,#111);}
.g4{background:linear-gradient(135deg,#666,#222);}
.g5{background:linear-gradient(135deg,#b78a2d,#2a1f0f);}
.g6{background:linear-gradient(135deg,#d9c27f,#333);}

@media(max-width:768px){
  .gallery-grid{
    grid-template-columns:1fr;
  }

  .gallery h2{
    font-size:42px;
  }
}

/* GALLERY HOVER EFFECT */

document.querySelectorAll(".gallery-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.filter = "brightness(1.1)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.filter = "brightness(1)";
  });
});

