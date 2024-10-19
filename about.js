// title-imgSlide
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// intro-scollEvent
document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    const images = [
        './assets/images/about/intro_11.jpeg',
        './assets/images/about/intro_10.jpeg',
        './assets/images/about/intro_9.jpeg',
        './assets/images/about/intro_8.jpeg',
        './assets/images/about/intro_7.jpeg',
        './assets/images/about/intro_6.jpeg',
        './assets/images/about/intro_5.jpeg',
        './assets/images/about/intro_4.jpeg',
        './assets/images/about/intro_3.jpeg',
        './assets/images/about/intro_2.jpeg',
        './assets/images/about/intro_1.jpeg'
    ];

    images.forEach((image, index) => {
        gsap.to('#txt-img', {
            backgroundImage: `url(${image})`,
            opacity: 0, // 초기 값은 투명하게 시작
            scrollTrigger: {
                trigger: '.about-intro',
                start: () => `top top+=${index * 100}vh`,
                end: () => `top top+=${(index + 1) * 100}vh`,
                scrub: true,
                markers: true,
                toggleActions: 'play none none reverse',
                onUpdate: self => {
                    // 스크롤 진행 비율을 계산하여 opacity를 조절
                    const progress = self.progress;
                    gsap.to('#txt-img', { opacity: 1 - progress });
                }
            }
        });
    });

    const txtWordPs = document.querySelectorAll('.txt-word p');
    txtWordPs.forEach((p, index) => {
        gsap.fromTo(p,
            { opacity: 0, y: 20 },
            {
                opacity: 1, y: 0,
                scrollTrigger: {
                    trigger: '.about-intro',
                    start: () => `top top+=${index * 100}vh`,
                    end: () => `top top+=${(index + 1) * 100}vh`,
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