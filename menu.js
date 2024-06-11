// menu-inner2-Hover
const imagePaths = {
    pj1: "./assets/images/menu/menu-pj1-img.png",
    pj2: "./assets/images/menu/menu-pj2-img.jpg",
    pj3: "./assets/images/menu/menu-pj3-img.jpg",
    pj4: "./assets/images/menu/menu-pj4-img.jpg",
    pj5: "./assets/images/menu/.jpg"
};

let imageLoaded = false; // 이미지 로드 여부를 나타내는 변수

// 링크에 마우스 호버 이벤트 추가
document.querySelectorAll('.menu-inner2 ul li').forEach(item => {
  item.addEventListener('mouseenter', function() {
    const id = this.classList[0]; // 해당 항목의 클래스 이름을 가져옵니다.
    const imagePath = imagePaths[id]; // 해당 항목에 대한 이미지 경로를 가져옵니다.
    
    if (imagePath && !imageLoaded) {
      const image = new Image();
      image.src = imagePath;

      // 이미지가 로드되면 뚫린 창에 이미지를 추가합니다.
      image.onload = function() {
        document.getElementById('frameEffect').appendChild(image);
        imageLoaded = true; // 이미지가 로드되었음을 표시합니다.
      };
    }
  });

  // 마우스가 영역을 벗어나면 이미지를 제거합니다.
  item.addEventListener('mouseleave', function() {
    if (imageLoaded) {
      document.getElementById('frameEffect').innerHTML = ''; // 이미지를 제거합니다.
      imageLoaded = false; // 이미지 로드 상태를 초기화합니다.
    }
  });
});







// menu-inner1-underline hover
document.addEventListener('DOMContentLoaded', () => {
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


