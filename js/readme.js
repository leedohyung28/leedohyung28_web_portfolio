document.addEventListener("DOMContentLoaded", () => {
  const timelineContents = document.querySelectorAll(".timeline-content");
  const profileContainer = document.querySelector(".col-9.text-white");
  let readmeMarginTop;

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
      rightContents = [3, 5, 8, 11, 16];

      if (nonContents.includes(index)) {
      } else if (rightContents.includes(index)) {
        readmeContainer.classList.add("readme-right");
        // readmeContainer.textContent = index;
        profileContainer.insertAdjacentElement("afterend", readmeContainer);

        if (index in rightReadmeContainers) {
          readmeContainer.appendChild(rightReadmeContainers[index]);
          readmeMarginTop = {
            3: "550px",
            5: "1050px",
            8: "1500px",
            11: "2200px",
          }[index];
        }
        readmeContainer.classList.add("balloon");

        const rightArrowContainer = document.getElementById(
          "right-arrow-container"
        );
        rightArrowContainer.style.width = "100%";
        rightArrowContainer.style.textAlign = "right";

        initializeCloseButton(readmeContainer);
        initializeMinimizeButton(
          readmeContainer,
          rightArrowContainer,
          index,
          readmeMarginTop,
          rightReadmeContainers,
          profileContainer,
          "right"
        );
      } else {
        readmeContainer.classList.add("readme-left");
        // readmeContainer.textContent = index;

        profileContainer.insertAdjacentElement("beforebegin", readmeContainer);

        if (index in leftReadmeContainers) {
          readmeContainer.appendChild(leftReadmeContainers[index]);
          readmeMarginTop = {
            4: "640px",
            6: "970px",
            7: "1300px",
            9: "1505px",
            10: "1680px",
            12: "1880px",
            13: "2060px",
            14: "2350px",
            15: "2640px",
          }[index];
        }

        readmeContainer.classList.add("balloon");
        const leftArrowContainer = document.getElementById(
          "left-arrow-container"
        );
        leftArrowContainer.style.width = "100%";

        initializeCloseButton(readmeContainer);
        initializeMinimizeButton(
          readmeContainer,
          leftArrowContainer,
          index,
          readmeMarginTop,
          leftReadmeContainers,
          profileContainer,
          "left"
        );
        initializeMaximizeButton(readmeContainer)
      }
    });
  });
});

function initializeCloseButton(readmeContainer) {
  const btnClose = readmeContainer.querySelector(".btn-close");
  if (btnClose) {
    btnClose.addEventListener("click", () => {
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
  readmeMarginTop,
  readmeContainers,
  profileContainer,
  leftOrRight
) {
  const btnMin = readmeContainer.querySelector(".btn-min");
  if (btnMin) {
    btnMin.addEventListener("click", () => {
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
            arrowContainer.innerHTML += `<p id="arrow-${index}" style="position:absolute; right:0; margin-top:${readmeMarginTop};">${titleText} <span>&#9654;</span></p>`;
          }
          else {
            arrowContainer.innerHTML += `<p id="arrow-${index}" style="position:absolute; margin-top:${readmeMarginTop};"><span>&#9664;</span> ${titleText}</p>`;
          }

          if (!arrowContainer.dataset.listenerAdded) {
            arrowContainer.addEventListener("click", (event) => {
              const clickedElement = event.target.closest("p");
              if (clickedElement && clickedElement.id.startsWith("arrow-")) {
                const arrowIndex = parseInt(clickedElement.id.split("-")[1]);
                clickedElement.remove();

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
                  newReadmeContainer.appendChild(readmeContainers[arrowIndex]);
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

                initializeCloseButton(newReadmeContainer);
                initializeMinimizeButton(
                  newReadmeContainer,
                  arrowContainer,
                  index,
                  readmeMarginTop,
                  readmeContainers,
                  profileContainer,
                  leftOrRight
                );
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

            arrowContainer.dataset.listenerAdded = "true";
          }
        },
        { once: true }
      );
    });
  }
}

function initializeMaximizeButton(readmeContainer) {
  const maxButton = readmeContainer.querySelector(".btn-max");
  const w100Element = readmeContainer.querySelector(".w-100");
  let originalMarginTop = w100Element ? w100Element.style.marginTop : null;
  let isMaximized = false;

  maxButton.addEventListener("click", () => {
    const timelineSection = document.querySelector("section.timeline");

    if (!isMaximized) {
      timelineSection.style.display = "none"; // 타임라인 섹션 숨기기

      if (w100Element) {
        originalMarginTop = w100Element.style.marginTop;
        w100Element.style.marginTop = "0px";
      }

      readmeContainer.style.position = "fixed";
      readmeContainer.style.top = 0;
      readmeContainer.style.left = 0;
      readmeContainer.style.width = "100%";
      readmeContainer.style.height = "100%";
      readmeContainer.style.zIndex = 9999; // 가장 위에 보이도록 z-index 설정

      isMaximized = true;
    } else {
      timelineSection.style.display = ""; // 타임라인 섹션 보이기

      if (w100Element) {
        w100Element.style.marginTop = originalMarginTop;
      }

      readmeContainer.style.position = "";
      readmeContainer.style.top = "";
      readmeContainer.style.left = "";
      readmeContainer.style.width = "";
      readmeContainer.style.height = "";
      readmeContainer.style.zIndex = "";

      isMaximized = false;
    }
  });
}