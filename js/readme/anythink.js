const anythink = document.createElement("div");
anythink.classList.add("w-100")
anythink.style = "margin-top: 1200px;";
anythink.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-extracurri">
<h5 class="text-center">스타트업 Anythink 참여</h5>
<p class="text-center mb-0">헬스케어 애플리케이션 (BeSports)</p>
<p class="text-center mt-0">및 관련 하드웨어 기기 판매</p>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>사용 언어/환경</summary>
<div class="form-row ml-3"><i class="devicon-dart-plain"></i><h6>Dart</h6></div>
<div class="form-row ml-3"><i class="devicon-flutter-plain"></i><h6>Flutter</h6></div>
<div class="form-row ml-3"><i class="devicon-firebase-plain"></i><h6>Firebase</h6></div>
<div class="form-row ml-3"><i class="devicon-notion-plain"></i><h6>Notion</h6></div>
<div class="form-row ml-3"><i class="devicon-github-original"></i><h6>GitHub</h6></div>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>업무 및 역할</summary>
<p>Dart/Flutter 를 통해 애플리케이션 화면 설계</p>
<p>애플리케이션 기능 토의 및 Prototype 구현 (D-Day, 운동량 측정 ..)</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>어려웠던 점과 해결책</summary>
<p class="mb-0">반응형 앱의 장점을 살리기 위해 화면을 스크롤하면 Header가 변하도록 설계</p>
<p class="mt-0">→ 다른 화면에서 쓰던 appBar가 아닌 SliverAppBar를 사용하여 스크롤에 반응하게 하였습니다.</p>
<p class="mb-0">핸드폰 기종/사이즈에 따라 글씨 및 Widget의 크기가 달라진다.</p>
<p class="mt-0">→ 모든 글씨 및 Widget의 크기를 전체 너비와 높이를 기준으로 재설계하였습니다.</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>배운점</summary>
<p>기존에 스타트업에 참여하면서 분업과 의견 토의에 대해 배우게 되었습니다.</p>
<p>직접 데드라인을 설정하고 일을 하면서 책임감과 능동적인 태도를 가지게 되었습니다.</p>
<p>상업적 목적으로 API를 활용하기 위해 env를 활용해 Git 이용 시 키 보안에 신경썼습니다.</p>
</details>
`;
