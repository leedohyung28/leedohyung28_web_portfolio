const osSimulator = document.createElement("div");
osSimulator.style = "margin-top: 400px;";
osSimulator.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h2 class="text-center">운영체제 시뮬레이터</h2> 
    <h2 class="text-center">팀 프로젝트</h2>

    <hr style="border: 1px solid white; width: 100%;">
    <div class="form-row justify-content-around"><img class="w-40" src="./images/readme/fcfs.gif"/><img class="w-40" src="./images/readme/wtq.gif"/></div>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3">개발기간</h5>
    <div class="text-center"><img class="w-80" src="https://user-images.githubusercontent.com/91319157/209250019-99c7ec9e-d074-4230-9ac4-522ef864b760.png"/></div>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3" >사용 언어</h5>
    <div class="form-row ml-3"><h4>Backend : </h4><i class="devicon-python-plain ml-2"></i><h4>Python</h4></div>
    <div class="form-row ml-3"><h4>Frontend : </h4><i class="devicon-python-plain ml-1"></i></i><h4>Python Tkinter</h4></div>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3" >프로젝트 설명</h5>
    <p>5개의 스케줄링 알고리즘(FCFS, Round-Robin, SPN, SRTN, HRRN)과 직접 설계한 알고리즘을 구현하여 Simulator를 만듭니다. 
    이 때 Simulator는 멀티 코어 프로세서이며, P 코어와 E 코어로 이루어져 있습니다.</p>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3" >연결 링크</h5>
    <a href="https://github.com/leedohyung28/OS-Scheduling-Algorithm-TeamProject"><p>Simulator Release File</p></a>
    <a href="https://github.com/leedohyung28/OS-Scheduling-Algorithm-TeamProject/releases"><p>GitHub Readme</p></a>
</div>
`;
