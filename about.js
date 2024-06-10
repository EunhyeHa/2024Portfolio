// const txtWord = document.querySelector('.txt-word');
// const txtWordPs = txtWord.querySelectorAll('p');

// window.addEventListener('scroll', function() {
//     const introTxtWrapper = document.querySelector('.intro-txt-wrapper');
//     const txtWordRect = txtWord.getBoundingClientRect();
    
//     if (txtWordRect.top <= introTxtWrapper.offsetHeight) {
//         txtWordPs.forEach((p, index) => {
//             gsap.to(p, { opacity: 1, y: 0, delay: index * 0.2 });
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//   const txtWord = document.querySelector('.txt-word');
//   const txtWordPs = txtWord.querySelectorAll('p');

//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               txtWordPs.forEach((p, index) => {
//                   setTimeout(() => {
//                       p.style.opacity = 1;
//                       p.style.transform = 'translateY(0)';
//                   }, index * 200);
//               });
//           }
//       });
//   }, { threshold: 1 });

//   observer.observe(txtWord);
// });


// intro-scollEvent
document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  const txtWordPs = document.querySelectorAll('.txt-word p');

  txtWordPs.forEach((p, index) => {
      gsap.fromTo(p, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, 
            scrollTrigger: {
                trigger: p,
                start: 'top 50%',
                end: 'top 60%',
                scrub: true,
                markers: true // 디버깅을 위해 스크롤 트리거 마커를 표시합니다.
            }
          });
  });
});