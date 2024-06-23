document.addEventListener("DOMContentLoaded", () => {
  const timelineContents = document.querySelectorAll(".timeline-content");
  const profileContainer = document.querySelector(".col-9.text-white");

  const rightReadmeContainers = {
    3: osSimulator,
    5: exchangeGermany,
    8: anythink,
    11: roadAnalysis,
  };

  const leftReadmeContainers = {
    4: bcsdMobile,
    6: powerBI,
    7: bcsdGame,
    9: eipCertification,
    10: hanaField,
    12: koreatechour,
    13: playball,
    14: instaGenerator,
    15: webFullstack,
  };

  timelineContents.forEach((box, index) => {
    box.addEventListener("click", () => {
      const existingReadmeLeft = document.querySelector(".readme-left");
      const existingReadmeRight = document.querySelector(".readme-right");
      if (existingReadmeLeft) existingReadmeLeft.remove();
      if (existingReadmeRight) existingReadmeRight.remove();

      const readmeContainer = document.createElement("div");
      readmeContainer.classList.add("readme-container");
      readmeContainer.classList.add("col-3");

      nonContents = [0, 1, 2];
      rightContents = [3, 5, 8, 11];
      if (nonContents.includes(index) || arrowArray[index]) {
      } else if (rightContents.includes(index)) {
        readmeContainer.classList.add("readme-right");
        // readmeContainer.textContent = index;
        profileContainer.insertAdjacentElement("afterend", readmeContainer);

        if (index in rightReadmeContainers) {
          readmeContainer.appendChild(rightReadmeContainers[index]);
        }
        readmeContainer.classList.add("balloon");

        const rightArrowContainer = document.getElementById(
          "right-arrow-container"
        );
        rightArrowContainer.style.width = "100%";
        rightArrowContainer.style.textAlign = "right";

        initializeCloseButton(readmeContainer, index);
        initializeMinimizeButton(
          readmeContainer,
          rightArrowContainer,
          index,
          rightReadmeContainers,
          profileContainer,
          "right"
        );
        initializeMaximizeButton(readmeContainer, index);
      } else {
        readmeContainer.classList.add("readme-left");
        // readmeContainer.textContent = index;

        profileContainer.insertAdjacentElement("beforebegin", readmeContainer);

        if (index in leftReadmeContainers) {
          readmeContainer.appendChild(leftReadmeContainers[index]);
        }

        readmeContainer.classList.add("balloon");
        const leftArrowContainer = document.getElementById(
          "left-arrow-container"
        );
        leftArrowContainer.style.width = "100%";

        initializeCloseButton(readmeContainer, index);
        initializeMinimizeButton(
          readmeContainer,
          leftArrowContainer,
          index,
          leftReadmeContainers,
          profileContainer,
          "left"
        );
        initializeMaximizeButton(readmeContainer, index);
      }
    });
  });
});

let maxiArray = Array(16).fill(false);
let arrowArray = Array(16).fill(false);
const arrayTops = {
  3: "820px",
  4: "840px",
  5: "1200px",
  6: "1170px",
  7: "1500px",
  8: "1700px",
  9: "1675px",
  10: "1920px",
  11: "2500px",
  12: "2100px",
  13: "2460px",
  14: "2820px",
  15: "3150px",
};
const containerTops = {
  3: "100px",
  4: "600px",
  5: "900px",
  6: "850px",
  7: "1270px",
  8: "1300px",
  9: "1500px",
  10: "1500px",
  11: "2000px",
  12: "1600px",
  13: "1950px",
  14: "2350px",
  15: "2900px",
};

function initializeCloseButton(readmeContainer, index) {
  const btnClose = readmeContainer.querySelector(".btn-close");
  if (btnClose) {
    btnClose.addEventListener("click", () => {
      arrowArray[index] = false;
      if (maxiArray[index]) {
        const timelineSection = document.querySelector("section.timeline");
        let w100Element = document.getElementById("readmeCon");

        timelineSection.style.display = "";
        w100Element.style.marginTop = containerTops[index];

        readmeContainer.style.display = "";
        readmeContainer.style.top = "";
        readmeContainer.style.left = "";
        readmeContainer.style.width = "";
        readmeContainer.style.height = "";
        readmeContainer.style.zIndex = "";

        maxiArray[index] = false;
      }

      readmeContainer.classList.remove("balloon");
      readmeContainer.classList.add("balloon-reverse");

      // 애니메이션이 끝난 후 요소 제거
      readmeContainer.addEventListener(
        "animationend",
        () => {
          readmeContainer.remove();
        },
        { once: true }
      );
    });
  }
}

function initializeMinimizeButton(
  readmeContainer,
  arrowContainer,
  index,
  readmeContainers,
  profileContainer,
  leftOrRight
) {
  const btnMin = readmeContainer.querySelector(".btn-min");
  if (btnMin) {
    btnMin.addEventListener("click", () => {
      if (maxiArray[index]) {
        const timelineSection = document.querySelector("section.timeline");
        let w100Element = document.getElementById("readmeCon");

        timelineSection.style.display = "";
        w100Element.style.marginTop = containerTops[index];

        readmeContainer.style.display = "";
        readmeContainer.style.top = "";
        readmeContainer.style.left = "";
        readmeContainer.style.width = "";
        readmeContainer.style.height = "";
        readmeContainer.style.zIndex = "";

        maxiArray[index] = false;
      }

      readmeContainer.classList.remove("balloon");
      if (leftOrRight == "right") {
        readmeContainer.classList.add("slide-out-right");
      } else {
        readmeContainer.classList.add("slide-out-left");
      }

      readmeContainer.addEventListener(
        "animationend",
        () => {
          readmeContainer.remove();
          const readmeTitle = readmeContainer.querySelector("#readmeTitle");
          const titleText = readmeTitle
            ? readmeTitle.textContent
            : "Restored Container";

          if (!arrowContainer.classList.contains("visible")) {
            arrowContainer.classList.add("visible");
          }

          if (leftOrRight == "right") {
            arrowContainer.innerHTML += `<p id="arrow-${index}" class="arrow-right" style="margin-top:${arrayTops[index]};">${titleText} <span>&#9654;</span></p>`;
          } else {
            arrowContainer.innerHTML += `<p id="arrow-${index}" class="arrow-left" style="margin-top:${arrayTops[index]};"><span>&#9664;</span> ${titleText}</p>`;
          }

          if (!arrowArray[index]) {
            arrowContainer.addEventListener("click", (event) => {
              const clickedElement = event.target.closest("p");
              if (clickedElement && clickedElement.id.startsWith("arrow-")) {
                const arrowIndex = parseInt(clickedElement.id.split("-")[1]);
                clickedElement.remove();

                if (!document.querySelector(`.readme-container`)) {
                  const newReadmeContainer = document.createElement("div");

                  if (leftOrRight === "right") {
                    newReadmeContainer.classList.add(
                      "readme-container",
                      "col-3",
                      "readme-right",
                      "balloon"
                    );
                  } else {
                    newReadmeContainer.classList.add(
                      "readme-container",
                      "col-3",
                      "readme-left",
                      "balloon"
                    );
                  }

                  if (arrowIndex) {
                    newReadmeContainer.appendChild(
                      readmeContainers[arrowIndex]
                    );
                  }
                  if (leftOrRight === "right") {
                    profileContainer.insertAdjacentElement(
                      "afterend",
                      newReadmeContainer
                    );
                  } else {
                    profileContainer.insertAdjacentElement(
                      "beforebegin",
                      newReadmeContainer
                    );
                  }

                  initializeCloseButton(newReadmeContainer, index);
                  initializeMinimizeButton(
                    newReadmeContainer,
                    arrowContainer,
                    index,
                    readmeContainers,
                    profileContainer,
                    leftOrRight
                  );
                  initializeMaximizeButton(newReadmeContainer, index);
                }
              }

              if (leftOrRight === "right") {
                readmeContainer.classList.remove("slide-out-right");
              } else {
                readmeContainer.classList.remove("slide-out-left");
              }

              readmeContainer.classList.add("balloon");

              if (arrowContainer.innerHTML.trim() === "") {
                arrowContainer.classList.remove("visible");
              }
            });

            arrowArray[index] = true;
          }
        },
        { once: true }
      );
    });
  }
}

function initializeMaximizeButton(readmeContainer, index) {
  const maxButton = readmeContainer.querySelector(".btn-max");
  let w100Element = document.getElementById("readmeCon");
  maxButton.addEventListener("click", () => {
    const timelineSection = document.querySelector("section.timeline");
    if (!maxiArray[index]) {
      timelineSection.style.display = "none";
      w100Element.style.marginTop = "100px";

      readmeContainer.style.display = "contents";
      readmeContainer.style.top = 0;
      readmeContainer.style.width = "100%";
      readmeContainer.style.height = "100%";
      readmeContainer.style.zIndex = 50;

      maxiArray[index] = true;
    } else {
      timelineSection.style.display = "";
      w100Element.style.marginTop = containerTops[index];

      readmeContainer.style.display = "";
      readmeContainer.style.top = "";
      readmeContainer.style.left = "";
      readmeContainer.style.width = "";
      readmeContainer.style.height = "";
      readmeContainer.style.zIndex = "";

      maxiArray[index] = false;
      initializeMaximizeButton(newReadmeContainer, index);
    }
  });
}
