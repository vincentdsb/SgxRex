document.addEventListener("DOMContentLoaded", function() {
  const features = document.querySelectorAll(".feature");

  features.forEach(feature => {
    feature.style.opacity = 0;
    setTimeout(() => feature.style.opacity = 1, 500);
  });
});
