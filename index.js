// project1 showOut
document.addEventListener("DOMContentLoaded", function() {
    const pj1 = document.querySelector('.pj1');
    const indexProject1 = document.querySelector('.index-project1');
    const h1 = indexProject1.querySelector('h1');
    const h2 = indexProject1.querySelector('h2');
    const p = indexProject1.querySelector('p');

    function showProject() {
        indexProject1.style.opacity = '1';
        indexProject1.style.visibility = 'visible';

        h1.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        h1.style.opacity = '0';
        h1.style.transform = 'translateX(-30px)';

        h2.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        h2.style.opacity = '0';
        h2.style.transform = 'translateY(-10px)';

        p.style.transition = 'opacity 0.2s ease, transform 0.5s ease';
        p.style.opacity = '0';
        p.style.transform = 'translateY(10px)';

        setTimeout(() => {
            h1.style.opacity = '1';
            h1.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            h2.style.opacity = '1';
            h2.style.transform = 'translateY(0)';
        }, 200);

        setTimeout(() => {
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
        }, 300);
    }

    function hideProject() {
        indexProject1.style.opacity = '0';
        indexProject1.style.visibility = 'hidden';

        h1.style.opacity = '0';
        h1.style.transform = 'translateX(-20px)';

        h2.style.opacity = '0';
        h2.style.transform = 'translateY(-20px)';

        p.style.opacity = '0';
        p.style.transform = 'translateY(20px)';
    }

    pj1.addEventListener('mouseenter', showProject);
    pj1.addEventListener('mouseleave', (event) => {
        if (!indexProject1.contains(event.relatedTarget)) {
            hideProject();
        }
    });

    indexProject1.addEventListener('mouseenter', showProject);
    indexProject1.addEventListener('mouseleave', (event) => {
        if (!pj1.contains(event.relatedTarget)) {
            hideProject();
        }
    });
});
