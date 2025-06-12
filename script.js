document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach(el => {
    setTimeout(() => el.style.opacity = 1, 500);
  });
});
