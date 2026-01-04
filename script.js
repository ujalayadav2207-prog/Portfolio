document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const slideWidth = slide[0].clientWidth;

    function goToSlide(index) {
        if (index < 0) {
            index = slide.length - 1;
        } else if (index >= slide.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * slideWidth}px)`;
        currentIndex = index;
    }

    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const newSlideWidth = slide[0].clientWidth;
        slides.style.transform = `translateX(${-currentIndex * newSlideWidth}px)`;
    });
});
