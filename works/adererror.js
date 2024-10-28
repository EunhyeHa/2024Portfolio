// overview highlight
document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.highlight');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate'); // 애니메이션 클래스 추가
                }, 300);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(target);
});


// back to top
let BTT = $('.back-to-top');

BTT.click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});