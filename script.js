const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#000"; // dark background on scroll
  } else {
    navbar.style.backgroundColor = "#333"; // default color
  }
});
