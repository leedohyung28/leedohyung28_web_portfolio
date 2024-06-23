const osSimulator = document.createElement("div");
osSimulator.classList.add("w-100");
osSimulator.id = "readmeCon";
osSimulator.style = "margin-top: 100px;";
osSimulator.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">운영체제 시뮬레이터</h5> 
    <h5 class="text-center">팀 프로젝트</h5>
    <p class="text-center mb-0">6개의 스케줄링 알고리즘을</p>
    <p class="text-center mt-0">멀티코어로 동작시키는 프로그램</p>

    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://github.com/leedohyung28/OS-Scheduling-Algorithm-TeamProject"><p>Simulator Release File</p></a>
    <a href="https://github.com/leedohyung28/OS-Scheduling-Algorithm-TeamProject/releases"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>동작 사진</summary>
    <div class="form-row justify-content-around"><img class="w-40" src="./images/readme/fcfs.gif"/><img class="w-40" src="./images/readme/wtq.gif"/></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>개발 차트</summary>
    <div class="text-center"><img class="w-80" src="https://user-images.githubusercontent.com/91319157/209250019-99c7ec9e-d074-4230-9ac4-522ef864b760.png"/></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>프로젝트 설계 목적</summary>
    <p>기존의 알고리즘 (
    <a href="https://ko.wikipedia.org/wiki/%EC%84%A0%EC%9E%85_%EC%84%A0%EC%B2%98%EB%A6%AC_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81">FCFS</a>, 
    <a href="https://ko.wikipedia.org/wiki/%EB%9D%BC%EC%9A%B4%EB%93%9C_%EB%A1%9C%EB%B9%88_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81">RR</a>, 
    <a href="https://ko.wikipedia.org/wiki/%EC%B5%9C%EB%8B%A8_%EC%9E%91%EC%97%85_%EC%9A%B0%EC%84%A0_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81">SPN</a>, 
    <a href="https://ko.wikipedia.org/wiki/%EC%B5%9C%EC%86%8C_%EC%9E%94%EB%A5%98_%EC%8B%9C%EA%B0%84_%EC%9A%B0%EC%84%A0_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81">SRTN</a>, 
    <a href="https://ko.wikipedia.org/wiki/HRRN_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81">HRRN</a>) 제외한 
    <a href="https://github.com/leedohyung28/OS-Scheduling-Algorithm-TeamProject?tab=readme-ov-file#wtqwaiting-time-quantum_new-algorithm">새로운 스케줄링 알고리즘</a> 구현</p>
    <p>총 6개의 알고리즘을 공부하고 멀티 코어 (P core, E core) 상황에 동작하도록 구현</p>
    <p>알고리즘이 임의의 TestCase에서 멀티 코어에 어떻게 Simulate 되는지 시각적 표시</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>사용 언어/환경</summary>
    <div class="form-row ml-3"><i class="devicon-python-plain ml-2"></i><h6>Python</h6></div>
    <div class="form-row ml-3"><i class="devicon-python-plain ml-1"></i></i><h6>Python Tkinter</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>어려웠던 점과 해결책</summary>
    <p class="mb-0">HRRN 알고리즘 구현 시 Ratio(비율)을 계산할 때 기존의 만들어진 모듈과 연결이 어려움</p>
    <p class="mt-0">→ 모듈을 수정하면서 곂치는 부분을 모듈화할 때 기준을 세우는 방법을 알게 되었습니다.</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>배운점</summary>
    <p>서버를 이용하지 않았지만 알고리즘 결과 값을 FC로 전달하는 방법을 알게 되었습니다.</p>
    <p>분업을 하며 다른 파트와 소통하고 형식을 맞춰 팀 활동을 진행하는 방법을 알게 되었습니다.</p>
    </details>
</div>
`;
