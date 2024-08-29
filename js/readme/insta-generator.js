const instaGenerator = document.createElement("div");
instaGenerator.classList.add("w-100");
instaGenerator.id = "readmeCon";
instaGenerator.style = "margin-top: 2350px;";
instaGenerator.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">인스타그램 이름 생성기</h5>
    <img class="w-100" src="./images/readme/ig_eng.jpg"> 
    <p class="text-center mt-1 mb-0">인스타그램 가입자를 위한</p>
    <p class="text-center mt-0">사용자 닉네임 추천/제작 사이트</p>

    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://instanamesuggest.netlify.app/"><p>instanamesuggest.netlify.app - 한국어</p></a>
    <a href="https://ignamegenerator.netlify.app/"><p>ignamegenerator.netlify.app - English</p></a>
    <a href="https://github.com/leedohyung28/insta_name_suggest"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>추천 종류</summary>
    <p>한글 이름(별명)을 활용한 추천</p>
    <p>영문 이름(별명)을 활용한 추천</p>
    <p>출생정보를 활용한 추천</p>
    <p>랜덤 추천 (단어 조합, 이쁜 외국어, 격언, 이모티콘 등..)</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary >사용 언어/환경</summary>
    <div class="form-row ml-3"><i class="devicon-html5-plain-wordmark"></i><h6>HTML5</h6></div>
    <div class="form-row ml-3"><i class="devicon-css3-plain-wordmark"></i><h6>CSS3</h6></div>
    <div class="form-row ml-3"><i class="devicon-javascript-plain"></i><h6>JavaScript</h6></div>
    <div class="form-row ml-3"><i class="devicon-nodejs-plain-wordmark"></i><h6>Node.js</h6></div>
    <div class="form-row ml-3"><i class="devicon-nodemon-plain"></i><h6>Nodemon</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>어려웠던 점과 해결책</summary>
    <p>- 입력받은 글자를 대화형 인공지능을 통해 변환하려 했으나, 독창성 + 경제적 측면에서 보류</p> 
    <p>→ 입력받은 글자를 분리하여 번역한 뒤 재조합 방식 채택</p>
    <p>→ Naver Papago API 채택하였으나 24.02 이후 유료화 전환</p>
    <p>→ Deepl API로 전환하였습니다.</p>
    </details>
    
    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>배운점</summary>
    <p>API 활용 및 보안 등 제약이 있었지만 현재는 해당 문제에서 비교적 자유로운 개발이 가능합니다.</p>
    <p>웹 개발 이외에 SEO, RSS 등 웹 분야의 다양한 지식을 성장시켰습니다.</p>
    <p>HTML5, CSS3, JavaScript의 활용/숙련도가 증가하였습니다.</p>
    <p>자유로운 웹 퍼플리싱 및 호스팅이 가능합니다.</p>
    </details>
</div>
`;
