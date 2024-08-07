document.addEventListener("DOMContentLoaded", function () {
    let menuLink = document.getElementById("menuToggle");

    menuLink.innerHTML = '<span class="front">menu</span><span class="back">close</span>';

    menuLink.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 링크 동작을 막습니다.
        menuLink.classList.toggle("flipped");

        setTimeout(function() {
            window.location.href = menuLink.getAttribute("href");
        }, 600); // 애니메이션 시간 (0.6s) 후에 페이지 이동
    });
});