window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector("header").classList.add("visible");
    document.querySelector(".right-side").classList.add("visible");
    document.querySelector(".projects").classList.add("visible");
    document.querySelectorAll(".show").forEach(function (element) {
      element.classList.add("visible");
    });
  }, 500);
});
