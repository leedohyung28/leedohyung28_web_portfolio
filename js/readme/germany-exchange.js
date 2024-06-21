const exchangeGermany = document.createElement("div");
exchangeGermany.classList.add("w-100");
exchangeGermany.style = "margin-top: 780px;";
exchangeGermany.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-extracurri">
<h5 id="readmeTitle" class="text-center">독일 교환학생</h5>
<p class="text-center">알렌대학교 (Hochschule Aalen)</p> 

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>증명서</summary>
<div class="text-center"><img class="w-80" src="./images/readme/aalen_score.jpg"></div>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>배운점</summary>
<p class="mb-0">전공 관련</p>
<p class="mt-0">- QA, QC 및 정봐 관리를 배우면서 각각 Testcase와 Information을 다루는 방법을 배웠습니다.</p>
<p class="mb-0">비전공 관련</p>
<p class="mt-0">- 국제인적경영론과 경제학 관련 강의를 배워 전공 외의 지식을 얻었습니다.</p>
<p class="mb-0">언어 관련</p>
<p class="mt-0">- 독일어 (A1) 강의를 수강했고, 외에도 모든 강의를 영어로 진행했습니다.</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>느낀점</summary>
<p>프로그래밍 수업을 할 떄 매 과제마다 다른 Language를 사용하기를 지향하였기 때문에,
Java, C++, Python 등 을 번갈아가며 제출하여 언어의 특성을 비교하며 피드백을 받았습니다.</p>
</details>
`;
