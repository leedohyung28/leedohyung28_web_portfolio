document.addEventListener("DOMContentLoaded", () => {
  const timelineContents = document.querySelectorAll(".timeline-content");
  const profileContainer = document.querySelector(".col-9.text-white");
  let readmeMarginTop;

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
          readmeMarginTop = "550px";
        } else if (index == 5) {
          readmeContainer.appendChild(exchangeGermany);
          readmeMarginTop = "1050px";
        } else if (index == 8) {
          readmeContainer.appendChild(anythink);
          readmeMarginTop = "1500px";
        } else if (index == 11) {
          readmeContainer.appendChild(roadAnalysis);
          readmeMarginTop = "2200px";
        }
        readmeContainer.classList.add("balloon");

        const rightArrowContainer = document.getElementById("right-arrow-container");
        rightArrowContainer.style.width = "100%"
        const btnMin = readmeContainer.querySelector(".btn-min");
        if (btnMin) {
          btnMin.addEventListener("click", () => {
            readmeContainer.classList.remove("balloon");
            readmeContainer.classList.add("slide-out-right");
            console.log(readmeMarginTop)

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

                rightArrowContainer.classList.add("visible");
                rightArrowContainer.style.marginTop = readmeMarginTop;
                rightArrowContainer.innerHTML = `${titleText} <span>&#9654;</span>`; // 화살표 추가
              },
              { once: true }
            );
          });
        }
        rightArrowContainer.addEventListener("click", () => {
          readmeContainer.style.display = "block"; // 요소를 다시 보이게 합니다.
          readmeContainer.classList.remove("slide-out-right");
          readmeContainer.classList.add("balloon"); // 원래 상태로 복원
          rightArrowContainer.classList.remove("visible");
          rightArrowContainer.innerHTML = ""; // 화살표와 텍스트 제거
        });
      } else {
        readmeContainer.classList.add("readme-left");
        // readmeContainer.textContent = index;

        profileContainer.insertAdjacentElement("beforebegin", readmeContainer);
        if (index == 4) {
          readmeContainer.appendChild(bcsdMobile);
          readmeMarginTop = "640px";
        } else if (index == 6) {
          readmeContainer.appendChild(powerBI);
          readmeMarginTop = "970px";
        } else if (index == 7) {
          readmeContainer.appendChild(bcsdGame);
          readmeMarginTop = "1300px";
        } else if (index == 9) {
          readmeContainer.appendChild(eipCertification);
          readmeMarginTop = "1505px";
        } else if (index == 10) {
          readmeContainer.appendChild(hanaField);
          readmeMarginTop = "1680px";
        } else if (index == 12) {
          readmeContainer.appendChild(koreatechour);
          readmeMarginTop = "1880px";
        } else if (index == 13) {
          readmeContainer.appendChild(playball);
          readmeMarginTop = "2060px";
        } else if (index == 14) {
          readmeContainer.appendChild(instaGenerator);
          readmeMarginTop = "2350px";
        } else if (index == 15) {
          readmeContainer.appendChild(webFullstack);
          readmeMarginTop = "2640px";
        }
        readmeContainer.classList.add("balloon");
        const leftArrowContainer = document.getElementById("left-arrow-container");
        leftArrowContainer.style.textAlign = "right";
        leftArrowContainer.style.width = "100%";

        const btnMin = readmeContainer.querySelector(".btn-min");
        if (btnMin) {
          btnMin.addEventListener("click", () => {
            readmeContainer.classList.remove("balloon");
            readmeContainer.classList.add("slide-out-left");

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

                leftArrowContainer.classList.add("visible");
                leftArrowContainer.style.marginTop = readmeMarginTop;
                leftArrowContainer.innerHTML = `<span>&#9664;</span> ${titleText}`; // 화살표 추가
              },
              { once: true }
            );
          });
        }

        leftArrowContainer.addEventListener("click", () => {
          readmeContainer.style.display = "block"; // 요소를 다시 보이게 합니다.
          readmeContainer.classList.remove("slide-out-right");
          readmeContainer.classList.add("balloon"); // 원래 상태로 복원
          leftArrowContainer.classList.remove("visible");
          leftArrowContainer.innerHTML = ""; // 화살표와 텍스트 제거
        });
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
