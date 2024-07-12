ScrollOut({
  targets: ".timeline-content, .timeline-dot, .timeline-year",
  threshold: 0.6,
  once: true,
});

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".timeline").classList.add("visible");
  }, 2650);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector("header").classList.add("visible");
  }, 2650);
});
