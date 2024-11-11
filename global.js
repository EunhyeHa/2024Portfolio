document.addEventListener("DOMContentLoaded", function () {
    let menuLink = document.getElementById("menuToggle");
    let menuMain = document.querySelector(".menu-main");
    let menuSide = document.querySelector(".menu-side");
    let frameEffect = document.getElementById("frameEffect");

    // 이미지 경로 설정
    const imagePaths = {
        mpj1: "./assets/images/global/menu-pj1-img.png",
        mpj2: "./assets/images/global/menu-pj2-img.jpg",
        mpj3: "./assets/images/global/menu-pj3-img.jpg",
        mpj4: "./assets/images/global/menu-pj4-img.jpg",
        mpj5: "./assets/images/global/menu-pj5-img.jpg"
    };

    let currentImageClass = ''; // 현재 로드된 이미지 클래스

    menuLink.innerHTML = '<span class="front">menu</span><span class="back">close</span>';

    // 메뉴 링크 클릭 이벤트 처리
    menuLink.addEventListener("click", function(e){
        e.preventDefault(); 
        menuLink.classList.toggle("flipped");

        if (menuLink.classList.contains("flipped")) {
            menuMain.classList.add("visible");
            menuSide.classList.add("visible");
            frameEffect.classList.add("visible"); // 프레임 보이기
        } else {
            menuMain.classList.remove("visible");
            menuSide.classList.remove("visible");
            frameEffect.classList.remove("visible"); // 프레임 숨기기
        }
    });

    // 메뉴 항목에 마우스 호버 이벤트 처리
    document.querySelectorAll('.menu-inner2 ul li:not(.works)').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const id = this.classList[0]; // 클래스명 가져오기
            const imagePath = imagePaths[id]; // 이미지 경로 가져오기

            if (imagePath && currentImageClass !== id) {
                const image = new Image();
                image.src = imagePath;

                image.onload = function() {
                    frameEffect.innerHTML = ''; // 이전 이미지 제거
                    
                    frameEffect.appendChild(image); // 새 이미지 추가
                    currentImageClass = id; // 현재 이미지 클래스 업데이트
                };

                image.onerror = function() {
                    console.error(`이미지 로드 실패: ${imagePath}`);
                };
            }
        });

        item.addEventListener('mouseleave', function() {
            if (currentImageClass === this.classList[0]) {
                frameEffect.innerHTML = ''; // 이미지 제거
                currentImageClass = ''; // 현재 이미지 클래스 초기화
            }
        });
    });

    // menu-inner1-underline hover
    const menuItems = document.querySelectorAll('.hover-underline-menu li');
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            menuItems.forEach(i => {
                if (i !== item) {
                    i.querySelector('a').classList.add('gray-text');
                }
            });
        });
        item.addEventListener('mouseout', () => {
            menuItems.forEach(i => {
                i.querySelector('a').classList.remove('gray-text');
            });
        });
    });
});