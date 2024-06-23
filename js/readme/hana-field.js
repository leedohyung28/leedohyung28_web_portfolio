const hanaField = document.createElement("div");
hanaField.classList.add("w-100");
hanaField.id = "readmeCon";
hanaField.style = "margin-top: 1500px;";
hanaField.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-extracurri">
<h5 class="text-center">(주)하나비전테크</h5>
<h5 id="readmeTitle" class="text-center">현장 실습</h5>
<p class="text-center">의료 기기 AI 딥러닝 모델 이식</p>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary >사용 언어/환경</summary>
<div class="form-row ml-3"><i class="devicon-python-plain"></i><h6>Python</h6></div>
<div class="form-row ml-3"><i class="devicon-pytorch-original"></i><h6>PyTorch</h6></div>
<div class="form-row ml-3"><i class="devicon-opencv-plain"></i><h6>OpenCV</h6></div>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>업무 및 역할</summary>
<p>AI 학습데이터 수집 (AI Hub, 촬영한 체스보드 영상)</p>
<p>수집된 AI 데이터 라벨링 - labelImg</p>
<p>라벨링 된 학습데이터를 AI 딥러닝 모델로 학습 - YOLO</p>
<p>기존 기기에 이식된 비전 알고리즘과 성능 비교 및 딥러닝 모델 개선</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>어려웠던 점 및 해결책</summary>
<p>체스보드의 중심을 잡는 과정에서 비전 알고리즘에 비해 낮은 정확도</p>
<p>→ 라벨링 때 Bounding Box의 크기를 동일하게 맞추어 정확도를 개선하였습니다.</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>배운점</summary>
<p>기존에 배운 머신러닝 지식을 실제 업무에 활용하면서 딥러닝과 머신러닝에 대해 더욱 깊이 이해하게 되었습니다.</p>
<p>여러 공식 문서를 읽고 적용해보면서 새로운 기술을 사용하는데 자신감이 생겼습니다.</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Inference 영상</summary>
<iframe class="w-80" src="https://www.youtube.com/embed/xnjRw9AS4YA?si=dt1hNvJTxyVorAci&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe class="w-80" src="https://www.youtube.com/embed/hQR9XpzHGv4?si=385E95ar1ZgPErby&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>
`;
