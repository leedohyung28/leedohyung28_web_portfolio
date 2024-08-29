const mygoodprice = document.createElement("div");
mygoodprice.classList.add("w-100");
mygoodprice.id = "readmeCon";
mygoodprice.style = "margin-top: 2800px;";
mygoodprice.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">MY GOOD PRICE</h5> 
    <h5 class="text-center">팀 프로젝트 (백엔드)</h5>
    <p class="text-center mb-0">주변에 착한 가게를 검색하고 관리하며</p>
    <p class="text-center mt-0">나만의 소비 패턴을 분석하세요</p>
    
    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://mygoodprice-programmersteamproject.netlify.app"><p>My Good Price</p></a>
    <a href="https://github.com/leedohyung28/MyGoodPrice-BE"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>사용 언어/환경</summary>
    <div class="form-row ml-3"><i class="devicon-nestjs-original"></i><h6>NestJS</h6></div>
    <div class="form-row ml-3"><i class="devicon-mongodb-plain-wordmark"></i><h6>MongoDB</h6></div>
    <div class="form-row ml-3"><i class="devicon-firebase-plain-wordmark"></i><h6>Firebase</h6></div>
    <div class="form-row ml-3"><i class="devicon-python-plain"></i><h6>Python</h6></div>         
    <div class="form-row ml-3"><i class="devicon-react-original"></i><h6>React</h6></div>
    <div class="form-row ml-3"><i class="devicon-typescript-plain"></i><h6>TypeScript</h6></div>
    <div class="form-row ml-3"><i class="devicon-tailwindcss-original"></i><h6>TailwindCSS</h6></div>
    <div class="form-row ml-3"><i class="devicon-axios-plain-wordmark"></i><h6>Axios</h6></div>
    <div class="form-row ml-3"><i class="devicon-redux-original"></i><h6>Redux</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>업무 및 역할</summary>
    <p>DB와 BackEnd 배포 및 연결</p>
    <p>로그인 및 찜 (찜 추가/삭제/분석) API 설계</p>
    <p>구글 로그인 추가</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>어려웠던 점과 해결책</summary>
    <p class="mb-0">가게 마다 메뉴 개수가 달라 데이터를 정규화 하기 힘듦</p>
    <p class="mt-0">→ Document 기반 DBMS인 MongoDB를 사용하여 정규화하기 힘든 데이터를 Collection에 넣었습니다.</p>
    <p class="mb-0">소셜 로그인 연결 문제</p>
    <p class="mt-0">→ passport-google-oauth20이 배포 이 후 에러가 발생하여 Firebase로 재구성하였습니다.</p>
    <p class="mb-0">NestJS에서 Module을 서로 import할 시 발생하는 순환 의존성 문제</p>
    <p class="mt-0">→ forwardRef를 사용하여 참조를 지연시켜 의존성 문제를 해결했습니다.</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>배운점</summary>
    <p>소셜 로그인 부분에서 많은 시간 소요를 하였는데, 파트별 지속적인 소통을 통한 효율적 설계 및 업무 분배가 중요하다는 것을 깨달았습니다.</p>
    <p>NestJS와 MongoDB를 실제 활용하면서 해당 스택에 대한 기술을 익히게 되었습니다.</p>
    <p>소셜 로그인을 구현하면서 발생하는 쿠키 등 다양한 문제에 대한 해결책 및 지식을 얻었습니다.</p>
    </details>
</div>
`;
