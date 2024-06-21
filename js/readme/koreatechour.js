const koreatechour = document.createElement("div");
koreatechour.classList.add("w-100");
koreatechour.style = "margin-top: 1400px;";
koreatechour.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 class="text-center">KOREATECHOUR</h5> 
    <h5 class="text-center">팀 프로젝트</h5>
    <p class="text-center">졸업 학점/요건 계산 프로그램</p>

    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://github.com/leedohyung28/BestWebProgramming/releases/tag/koreatechour"><p>KOREATECHOUR Release File</p></a>
    <a href="https://docs.google.com/presentation/d/1MO7cMex_dfrHO-jVGk0_3T0wfxXYI5CP/edit?usp=sharing&ouid=111824440384685428415&rtpof=true&sd=true"><p>Project Presentation File</p></a>
    <a href="https://github.com/leedohyung28/BestWebProgramming"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>개발 차트</summary>
    <div class="text-center"><img class="w-100" src="./images/readme/koreatechour_schedule.png"/></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>프로젝트 설계 목적</summary>
    <p>학생들의 시간표 설계 및 편리한 졸업 학점 계산</p>
    <p>시간표 설계는 학생들이 기존에 이용하는 <a href="https://hanpyo.com/">'한표'</a> 참고</p>
    <p>학부 및 학년에 따른 다른 졸업 학점 계산 기능</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>사용 언어/환경</summary>
    <div class="form-row ml-3"><i class="devicon-csharp-plain"></i><h6>C#</h6></div>
    <div class="form-row ml-3"><i class="devicon-nuget-original"></i><h6>Nuget</h6></div>
    <div class="form-row ml-3"><i class="devicon-mysql-plain-wordmark"></i><h6>MySQL</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>업무 및 역할</summary>
    <p>학생들의 시간표 설계 및 편리한 졸업 학점 계산</p>
    <p>시간표 설계는 학생들이 기존에 이용하는 <a href="https://hanpyo.com/">'한표'</a> 참고</p>
    <p>학부 및 학년에 따른 다른 졸업 학점 계산 기능</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>어려웠던 점과 해결책</summary>
    <p class="mb-0">학번/학과에 따른 학부 세부 학과 변화 및</p>
    <p class="mt-0">→ 조건문을 통해 다르게 표시되도록 분기 설계 및 구현</p>
    <p class="mb-0">Visual Studio 버전에 따른 NuGet 설치 가능 여부 및 이에 따라 UI가 바뀌는 문제</p>
    <p class="mt-0">→ 버전과 설치 방법을 GitHub 및 Release에 명시하였습니다.</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>배운점</summary>
    <p>C#에는 BE/FE 설계에 제약이 있지만, NuGet 패키지를 통해 더욱 많은 부분을 구현할 수 있다는 것을 알았습니다.</p>
    <p>조장 역할을 하면서 일정을 세우고 분업 지시를 하며 유연하게 팀을 이끄는 방법에 대해 배웠습니다.</p>
    </details>
</div>
`;
