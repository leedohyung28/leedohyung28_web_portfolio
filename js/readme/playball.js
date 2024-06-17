const playball = document.createElement("div");
playball.style = "margin-top: 1700px;";
playball.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h2 class="text-center">PLAYBALL</h2> 
    <h2 class="text-center">학기 프로젝트</h2>
    <div class="text-center"><img class="w-100" src="https://private-user-images.githubusercontent.com/91038179/289573713-35ec4db4-78fc-401e-98cd-e021ed6eeece.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTg2MTc5MTEsIm5iZiI6MTcxODYxNzYxMSwicGF0aCI6Ii85MTAzODE3OS8yODk1NzM3MTMtMzVlYzRkYjQtNzhmYy00MDFlLTk4Y2QtZTAyMWVkNmVlZWNlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjE3VDA5NDY1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU1YWU1ZGJmNGE5ODFmOGRhMDU0ZmRmOTIyNzUzYjQ4ZDA2Y2Q3NjhlZTQyMDdlMTZlYWYyOWRlY2YxNWM0YWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.yioEd7399lXXJR0TLNUCcQmltX4r6j4GbvRTg63woQc"/></div>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3">프로젝트 설계 목적</h5>
    <p>코로나 이후 침체된 야구 시장의 활성화를 목적으로 제작한 웹 앱</p>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3" >사용 언어/환경</h5>
    <div class="form-row ml-3"><i class="devicon-dart-plain"></i><h4>Dart</h4></div>
    <div class="form-row ml-3"><i class="devicon-flutter-plain"></i><h4>Flutter</h4></div>

    <hr style="border: 1px solid white; width: 100%;">
    <h5 class="mt-3" >프로젝트 설계 목적</h5>
    <p>학생들의 시간표 설계 및 편리한 졸업 학점 계산</p>
    <p>시간표 설계는 학생들이 기존에 이용하는 <a href="https://hanpyo.com/">'한표'</a> 참고</p>
    <p>학부 및 학년에 따른 다른 졸업 학점 계산 기능</p>

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
