const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    navbar.classList.add("active");
  } else if (window.scrollY <= 0) {
    navbar.classList.remove("active");
  }
});
