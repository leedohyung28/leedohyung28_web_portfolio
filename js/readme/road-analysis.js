const roadAnalysis = document.createElement("div");
roadAnalysis.style = "margin-top: 1700px;";
roadAnalysis.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h2 class="text-center">도로 상태 분석 시스템</h2> 
    <h2 class="text-center">졸업 프로젝트</h2>
    
    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3">프로젝트 설계 목적</h5>
    <p>디바이스 (Jetson Nano)를 이용하여 도로의 위험 물질 (포트홀, 동물 등)을 탐지</p>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3" >사용 언어/환경</h5>
    <div class="form-row ml-3"><i class="devicon-python-plain"></i><h4>Python</h4></div>
    <div class="form-row ml-3"><i class="devicon-pytorch-original"></i><h4>PyTorch</h4></div>
    <div class="form-row ml-3"><i class="devicon-opencv-plain"></i><h4>OpenCV</h4></div>
    <div class="form-row ml-3"><i class="devicon-react-original"></i><h4>React</h4></div>
    <div class="form-row ml-3"><i class="devicon-ubuntu-plain-wordmark"></i><h4>Ubuntu</h4></div>
    <div class="form-row ml-3"><i class="devicon-amazonwebservices-plain-wordmark"></i><h4>AWS</h4></div>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3" >어려웠던 점과 해결책</h5>
    <p>외부 영상(Youtube) 자동 재생을 사용하기 위해 <a href="https://pub.dev/packages/youtube_player_iframe">youtube_player_ifram 패키지</a>를 사용했습니다.</p>
    <p>외부 영상이 다른 부분의 터치를 방해하여서 <a href="https://pub.dev/packages/pointer_interceptor">pointer_interceptor 패키지</a>를 사용했습니다.</p>
    <p>패키지를 사용해 불러온 영상을 자를 수 없어 영상이 튀어나왔기 때문에 다른 부분을 확대하여 어떤 디바이스 환경에서도 가려지도록 조정하였습니다.</p>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3">배운점</h5>
    <p>Flutter/Dart에서 다양한 패키지를 활용하게 되었습니다.</p>
    <p>Dart에서 원하는 디자인에 맞는 적절한 Widget을 사용할 수 있게 되었습니다..</p>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3" >연결 링크</h5>
    <a href="https://leedohyung28.github.io/PlayBall.io/"><p>PLAYBALL Homepage</p></a>
    <a href="https://github.com/leedohyung28/PlayBall"><p>GitHub Readme</p></a>
</div>
`;
