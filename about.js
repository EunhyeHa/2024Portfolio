// title-imgSlide
let slideContainer = $('.main-title .container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

slide.eq(currentIdx).addClass('show');
setInterval(showNextSlide, 2000);

function showNextSlide(){
    let nextIdx = (currentIdx + 1)%slideCount;
    slide.eq(currentIdx).removeClass('show');
    slide.eq(nextIdx).addClass('show');
    currentIdx = nextIdx;
}


// intro-scollEvent
document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    const images = [
        // './assets/images/about/intro_11.jpeg',
        // './assets/images/about/intro_10.jpeg',
        // './assets/images/about/intro_9.jpeg',
        // './assets/images/about/intro_8.jpeg',
        // './assets/images/about/intro_7.jpeg',
        './assets/images/about/intro_6.jpeg',
        './assets/images/about/intro_5.jpeg',
        './assets/images/about/intro_4.jpeg',
        './assets/images/about/intro_3.jpeg',
        './assets/images/about/intro_2.jpeg',
        './assets/images/about/intro_1.jpeg'
    ];

    images.forEach((image, index) => {
        let nextIndex = (index + 1) % images.length; // 다음 이미지 인덱스 계산
        gsap.fromTo(
            '#txt-img',
            { backgroundImage: `url(${image})` }, // 이전 이미지
            {
                backgroundImage: `url(${images[nextIndex]})`, // 다음 이미지
                scrollTrigger: {
                    trigger: '.about-intro',
                    start: () => `top top+=${index * 150}vh`,
                    end: () => `top top+=${(index + 1) * 150}vh`,
                    scrub: true,
                    markers: false,
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    const txtWordPs = document.querySelectorAll('.txt-word p');
    txtWordPs.forEach((p, index) => {
        gsap.fromTo(p,
            { opacity: 0, y: 20 },
            {
                opacity: 1, y: 0,
                scrollTrigger: {
                    trigger: p,
                    start: () => "top 80%",
                    end: () => "top 50%",
                    scrub: true,
                    markers: false,
                    toggleActions: 'play none none reverse'
                }
            });
    });
});





// career-imgShowup
let careerItems = document.querySelectorAll('.about-career .career-list p');
careerItems.forEach(item => {
    let img = item.querySelector('span img');
    item.addEventListener('mouseover', function() {
        img.classList.add('visible');
    });
});