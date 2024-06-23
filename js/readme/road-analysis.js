const roadAnalysis = document.createElement("div");
roadAnalysis.classList.add("w-100");
roadAnalysis.id = "readmeCon";
roadAnalysis.style = "margin-top: 2000px;";
roadAnalysis.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">도로 상태 분석 시스템</h5> 
    <h5 class="text-center">졸업 프로젝트</h5>
    <p class="text-center mb-0">디바이스 (Jetson Nano)를 이용하여</p>
    <p class="text-center mt-0">도로의 위험 물질 (포트홀, 동물 등)을 탐지</p>
    
    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://youtu.be/wzvoA-IFcv0"><p>System Operating Video</p></a>
    <a href="https://docs.google.com/presentation/d/1ySndXvCGiuINXmhP5D2NEmW8uISMpP7e/edit?usp=sharing&ouid=111824440384685428415&rtpof=true&sd=true"><p>Project Presentation File</p></a>
    <a href="https://github.com/leedohyung28/road-hazard-detect-system"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>프로젝트 포스터</summary>
    <img class="w-100" src="./images/readme/road_analysis.jpg">
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>사용 언어/환경</summary>
    <div class="form-row ml-3"><i class="devicon-python-plain"></i><h6>Python</h6></div>
    <div class="form-row ml-3"><i class="devicon-pytorch-original"></i><h6>PyTorch</h6></div>
    <div class="form-row ml-3"><i class="devicon-opencv-plain"></i><h6>OpenCV</h6></div>
    <div class="form-row ml-3"><i class="devicon-dart-plain"></i><h6>Dart</h6></div>
    <div class="form-row ml-3"><i class="devicon-flutter-plain"></i><h6>Flutter</h6></div>
    <div class="form-row ml-3"><i class="devicon-firebase-plain"></i><h6>Firebase</h6></div>
    <div class="form-row ml-3"><i class="devicon-ubuntu-plain-wordmark"></i><h6>Ubuntu</h6></div>
    <div class="form-row ml-3"><i class="devicon-amazonwebservices-plain-wordmark"></i><h6>AWS</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>업무 및 역할</summary>
    <p>AI 데이터 선정 및 라벨링 이후 AI 딥러닝 모델 선정 후 파인튜닝</p>
    <p>파인튜닝한 AI 딥러닝 모델을 Jetson Nano 기기에 이식 및 성능/속도 개선</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>어려웠던 점과 해결책</summary>
    <p class="mb-0">Jetson Nano 기기의 낮은 성능</p>
    <p class="mt-0">→ Windows에서 학습하여 딥러닝 모델을 이식하였습니다.</p>
    <p class="mb-0">기기에 이식할 때 의존성 문제로 충돌이 발생</p>
    <p class="mt-0">→ <a href="https://velog.io/@leedohyung28/Jetson-Nano-YOLOv5-%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0">파이프라인의 버전</a>을 일일이 수정하였습니다.</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>배운점</summary>
    <p>직접 여러 이미지 탐지 딥러닝 모델 중 성능을 비교하고 선정하면서 딥러닝 모델에 대한 이해도가 높아졌습니다.</p>
    <p>모델 성능 뿐만 아니라 이식, 속도 등 여러 측면에서 비교하고 선택하는 기준을 찾는 계기가 되었습니다.</p>
    </details>
</div>
`;
