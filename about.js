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
        './assets/images/about/1.jpg',
        './assets/images/about/2.jpg',
        './assets/images/about/3.jpg',
        './assets/images/about/4.jpg',
        './assets/images/about/5.jpg',
        './assets/images/about/6.jpg'
    ];

    images.forEach((image, index) => {
        gsap.to('#txt-img', {
            backgroundImage: `url(${image})`,
            scrollTrigger: {
                trigger: '.about-intro',
                start: () => `top top+=${index * 100}vh`,
                end: () => `top top+=${(index + 1) * 100}vh`,

                scrub: true,
                markers: true,
                toggleActions: 'play none none reverse'
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
document.addEventListener('DOMContentLoaded', function() {
    const careerItems = document.querySelectorAll('.about-career .career-list p');

    careerItems.forEach(item => {
        const img = item.querySelector('span img');

        item.addEventListener('mouseover', function() {
            img.classList.add('visible');
        });
    });
});

