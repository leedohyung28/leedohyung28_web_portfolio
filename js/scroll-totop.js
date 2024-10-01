window.onscroll = function () {
  const button = document.getElementById("scrollToTop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.onscroll = function () {
  const header = document.querySelector(".header");
  const title = document.querySelector(".header .title");
  const scrollThreshold = 600;

  if (
    document.body.scrollTop > scrollThreshold ||
    document.documentElement.scrollTop > scrollThreshold
  ) {
    header.classList.add("header-bg");
    title.classList.add("changed-title");
  } else {
    header.classList.remove("header-bg");
    title.classList.remove("changed-title");
  }
};

const titleBtn = document.getElementById("title");
titleBtn.addEventListener("click", () => {
  console.log("Title Clicked");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
  console.log("home Clicked");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const projectBtn = document.getElementById("projects");
projectBtn.addEventListener("click", () => {
  console.log("projects Clicked");
  window.scrollTo({ top: 620, behavior: "smooth" });
});

const timelineBtn = document.getElementById("timeline");
timelineBtn.addEventListener("click", () => {
  console.log("timeline Clicked");
  window.scrollTo({ top: 1400, behavior: "smooth" });
});
