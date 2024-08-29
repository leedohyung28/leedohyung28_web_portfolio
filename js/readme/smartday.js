const smartday = document.createElement("div");
smartday.classList.add("w-100");
smartday.id = "readmeCon";
smartday.style = "margin-top: 2800px;";
smartday.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">SMART DAY</h5> 
    <h5 class="text-center">팀 프로젝트 (프론트엔드)</h5>
    <p class="text-center mb-0">일상을 높여주는 시간관리 서비스</p>
    <p class="text-center mt-0">TODO 리스트 및 월별 일정 관리</p>
    
    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://wonseungteamproject-smartday.netlify.app"><p>Smart Day Homepage</p></a>
    <a href="https://www.youtube.com/watch?v=XS_ZUwud-Hw"><p>발표 영상</p></a>
    <a href="https://github.com/leedohyung28/smart-day"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>사용 언어/환경</summary>               
    <div class="form-row ml-3"><i class="devicon-react-original"></i><h6>React</h6></div>
    <div class="form-row ml-3"><i class="devicon-typescript-plain"></i><h6>TypeScript</h6></div>
    <div class="form-row ml-3"><i class="devicon-nodejs-plain-wordmark"></i><h6>Node.js</h6></div>
    <div class="form-row ml-3"><i class="devicon-express-original-wordmark"></i><h6>Express</h6></div>
    <div class="form-row ml-3"><i class="devicon-mariadb-original-wordmark"></i><h6>MariaDB</h6></div>
    <div class="form-row ml-3"><i class="devicon-mysql-plain-wordmark"></i><h6>MySQL</h6></div>
    <div class="form-row ml-3"><i class="devicon-vitejs-plain"></i><h6>Vite</h6></div>
    <div class="form-row ml-3"><i class="devicon-axios-plain-wordmark"></i><h6>Axios</h6></div>
    <div class="form-row ml-3"><i class="devicon-redux-original"></i><h6>Redux</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>업무 및 역할</summary>
    <p>컴포넌트, 모달, 페이지 구현 (UI)</p>
    <p>Zustand를 통한 전역 데이터 구성 및 일정 관리</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>어려웠던 점과 해결책</summary>
    <p class="mb-0">페이지를 이동할 때 불필요한 렌더링이 발생하는 경우</p>
    <p class="mt-0">→ hasPageBeenRendered와 useRef를 사용하여 Boolean을 통해 불필요한 렌더링을 방지합니다.</p>
    <p class="mb-0">여러 페이지에서 같은 데이터를 사용하는데 props 는 비효율적이다</p>
    <p class="mt-0">→ 전역 데이터 Redux 를 사용하여 데이터를 추가/삭제/초기화 하며 관리합니다.</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>배운점</summary>
    <p>프로젝트를 진행하면서 BE/FE로 나누며 Git을 사용하며 브랜치와 버전 관리의 중요성을 깨달았습니다.</p>
    <p>API와 DB와 연결할 때 BE와 소통을 하면서 협업 중 문제가 발생했을 때 대처하며 얻은 경험을 통해 문제 상황에 유연하게 대처할 수 있습니다.</p>
    <p>FE, BE, DB를 배포하고 연결하며 만든 프로젝트를 localhost가 아닌 실제 서버에 올릴 수 있게 되었습니다.</p>
    <p>FE 파트에 참여하면서 React에서 폴더 구조와 전역 스타일 관리에 대한 지식을 얻었습니다.</p>
    </details>
</div>
`;
