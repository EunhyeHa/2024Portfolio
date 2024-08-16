// overview highlight
document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.highlight');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 요소가 뷰포트에 보이면 3초 후 애니메이션을 시작
                setTimeout(() => {
                    entry.target.classList.add('animate'); // 애니메이션 클래스 추가
                }, 500);
                observer.unobserve(entry.target); // 애니메이션 실행 후 관찰 중지
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(target);
});
