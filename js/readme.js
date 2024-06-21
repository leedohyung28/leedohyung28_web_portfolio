document.addEventListener("DOMContentLoaded", () => {
  const timelineContents = document.querySelectorAll(".timeline-content");
  const profileContainer = document.querySelector(".col-9.text-white");

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

        if (index == 3) {
          readmeContainer.appendChild(osSimulator);
        } else if (index == 5) {
          readmeContainer.appendChild(exchangeGermany);
        } else if (index == 8) {
          readmeContainer.appendChild(anythink);
        } else if (index == 11) {
          readmeContainer.appendChild(roadAnalysis);
        }
        readmeContainer.classList.add("balloon");

        const restoreContainer = document.getElementById("restoreContainer");
        const btnMin = readmeContainer.querySelector(".btn-min");
        if (btnMin) {
          btnMin.addEventListener("click", () => {
            readmeContainer.classList.remove("balloon");
            readmeContainer.classList.add("slide-out-right");

            // 애니메이션이 끝난 후 요소 제거
            readmeContainer.addEventListener(
              "animationend",
              () => {
                readmeContainer.style.display = "none"; // 요소를 숨깁니다.
                const readmeTitle =
                  readmeContainer.querySelector("#readmeTitle");
                const titleText = readmeTitle
                  ? readmeTitle.textContent
                  : "Restored Container";

                restoreContainer.classList.add("visible");
                restoreContainer.innerHTML = `${titleText} <span>&#9654;</span>`; // 화살표 추가
              },
              { once: true }
            );
          });
        }
        restoreContainer.addEventListener("click", () => {
          readmeContainer.style.display = "block"; // 요소를 다시 보이게 합니다.
          readmeContainer.classList.remove("slide-out-right");
          readmeContainer.classList.add("balloon"); // 원래 상태로 복원
          restoreContainer.classList.remove("visible");
          restoreContainer.innerHTML = ""; // 화살표와 텍스트 제거
        });
      } else {
        readmeContainer.classList.add("readme-left");
        // readmeContainer.textContent = index;

        profileContainer.insertAdjacentElement("beforebegin", readmeContainer);
        if (index == 4) {
          readmeContainer.appendChild(bcsdMobile);
        } else if (index == 6) {
          readmeContainer.appendChild(powerBI);
        } else if (index == 7) {
          readmeContainer.appendChild(bcsdGame);
        } else if (index == 9) {
          readmeContainer.appendChild(eipCertification);
        } else if (index == 10) {
          readmeContainer.appendChild(hanaField);
        } else if (index == 12) {
          readmeContainer.appendChild(koreatechour);
        } else if (index == 13) {
          readmeContainer.appendChild(playball);
        } else if (index == 14) {
          readmeContainer.appendChild(instaGenerator);
        } else if (index == 15) {
          readmeContainer.appendChild(webFullstack);
        }
        readmeContainer.classList.add("balloon");

        const btnMin = readmeContainer.querySelector(".btn-min");
        if (btnMin) {
          btnMin.addEventListener("click", () => {
            readmeContainer.classList.remove("balloon");
            readmeContainer.classList.add("slide-out-left");

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
    });
  });
});
