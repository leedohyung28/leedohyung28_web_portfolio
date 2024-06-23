const bcsdMobile = document.createElement("div");
bcsdMobile.classList.add("w-100");
bcsdMobile.id = "readmeCon";
bcsdMobile.style = "margin-top: 600px;";
bcsdMobile.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-study">
<h5 id="readmeTitle" class="text-center">BCSD 모바일 스터디</h5> 
<p class="text-center">교내 프로그래밍 동아리 참여</p>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>학습한 언어/환경</summary>
<div class="form-row ml-3"><i class="devicon-kotlin-plain"></i><h6>Kotlin</h6></div>
<div class="form-row ml-3"><i class="devicon-androidstudio-plain"></i><h6>Android Studio</h6>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>학습 내용</summary>
<a href="https://docs.google.com/document/d/1wjahVYTqcNcclQSE1D3-1wuXx1Fztpe4jwMngEdQloA/edit?usp=sharing"><p>Kotlin 기초</p></a>
<a href="https://docs.google.com/document/d/1R5CXtVrS0cZSd1QW7hZZ8BbNM90yLYucMNYdqQwItdg/edit?usp=sharing"><p>Widget, Layout</p></a>
<a href="https://docs.google.com/document/d/1IUiSnjkMwCc8Tf8C2VtcEypbtCjZTidMp2fb3TqF9fw/edit?usp=sharing"><p>Activity, View 상호작용</p></a>
<a href="https://docs.google.com/document/d/1Lrrj3pFTzUbfkS2hTDGi_B20-ShAwdBP9lMmQaKIjkg/edit?usp=sharing"><p>Fragment, Dialog</p></a>
<a href="https://docs.google.com/document/d/10im0hG8ggtjFMuXZWXr_eCxDEDy4GJuGA1wZ_4F9EE0/edit?usp=sharing"><p>Event Listener, ListView, RecyclerView</p></a>
<a href="https://docs.google.com/document/d/15zQ8Mykao2aeJmDluvjfzM_eMYsJCBzCCaRbkLRtedQ/edit?usp=sharing"><p>Bottom Navigation, ViewPager, TabLayout</p></a>
</details>
`;
