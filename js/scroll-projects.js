document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".col-lg-4");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-scroll", "in");
      } else {
        entry.target.setAttribute("data-scroll", "out");
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
});
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".scroll-container").classList.add("visible");
  }, 2000);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector("header").classList.add("visible");
  }, 2000);
});
