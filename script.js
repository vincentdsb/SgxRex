document.addEventListener("DOMContentLoaded", function () {
  // Effet de fade-in sur les éléments au chargement
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 300 * index);
  });

  // Menu interactif sur mobile
  const menuToggle = document.createElement("button");
  menuToggle.innerText = "☰ Menu";
  menuToggle.classList.add("menu-toggle");
  document.querySelector("header").prepend(menuToggle);

  menuToggle.addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("active");
  });

  // Ajout d'une animation aux boutons et éléments cliquables
  document.querySelectorAll("button, .cta-btn").forEach((btn) => {
    btn.addEventListener("mouseover", function () {
      this.style.boxShadow = "0 0 12px #00ffff, 0 0 24px #ff8c00";
    });
    btn.addEventListener("mouseout", function () {
      this.style.boxShadow = "none";
    });
  });
});
