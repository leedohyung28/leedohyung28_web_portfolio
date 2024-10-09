function showProjects(tech) {
  const projects = document.querySelectorAll(".col-lg-4");

  projects.forEach((project) => {
    const techs = project.getAttribute("data-techs").split(" ");

    if (tech) {
      if (techs.includes(tech)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    } else {
      project.style.display = "block";
    }
  });

  const buttons = document.querySelectorAll(".projects-btn");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  if (tech) {
    const activeButton = document.querySelector(
      `button[onclick="showProjects('${tech}')"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }
  } else {
    const activeButton = document.querySelector(
      `button[onclick="showProjects()"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }
  }
}

window.onload = function () {
  showProjects();
};
