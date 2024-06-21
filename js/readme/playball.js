const playball = document.createElement("div");
playball.classList.add("w-100");
playball.style = "margin-top: 1650px;";
playball.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 class="text-center">PLAYBALL</h5> 
    <h5 class="text-center">학기 프로젝트</h5>
    <div class="text-center"><img class="w-100" src="./images/readme/playball.png"/></div>
    <p class="text-center mt-1 mb-0">코로나 이후 침체된 야구 시장의</p>
    <p class="text-center mt-0">활성화를 목적으로 제작한 웹 앱</p>

    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://leedohyung28.github.io/PlayBall.io/"><p>PLAYBALL Homepage</p></a>
    <a href="https://github.com/leedohyung28/PlayBall"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>프로젝트 설계 목적</summary>
    <p class>야구 시장 활성화를 위한 웹 앱</p>
    <p class>KBO 관련 정보/역사 소개 및 티켓팅 페이지 연결</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>사용 언어/환경</summary>
    <div class="form-row ml-3"><i class="devicon-dart-plain"></i><h6>Dart</h6></div>
    <div class="form-row ml-3"><i class="devicon-flutter-plain"></i><h6>Flutter</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>업무 및 역할</summary>
    <p class>반응형 웹 앱에 맞는 적절한 크기와 디자인의 UI 설계</p>
    <p class>Package를 이용한 외부 영상 재생 및 링크 연결</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>어려웠던 점과 해결책</summary>
    <p>외부 영상(Youtube) 자동 재생을 사용하기 위해 <a href="https://pub.dev/packages/youtube_player_iframe">youtube_player_ifram 패키지</a>를 사용했습니다.</p>
    <p>외부 영상이 다른 부분의 터치를 방해하여서 <a href="https://pub.dev/packages/pointer_interceptor">pointer_interceptor 패키지</a>를 사용했습니다.</p>
    <p>패키지를 사용해 불러온 영상을 자를 수 없어 영상이 튀어나왔기 때문에 다른 부분을 확대하여 어떤 디바이스 환경에서도 가려지도록 조정하였습니다.</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>배운점</summary>
    <p>Flutter/Dart에서 다양한 패키지를 활용하게 되었습니다.</p>
    <p>Dart에서 원하는 디자인에 맞는 적절한 Widget을 사용할 수 있게 되었습니다..</p>
    </details>
</div>
`;
