let slideIndex = 0;
let slideMissionIndex = 0;

// Project
function showSlides() {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        indicators[i].classList.remove('active');
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = 'block';
    indicators[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 3000);
}

function goToSlide(n) {
    slideIndex = n;
    showSlides();
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

// Mission
function showSlidesMission() {
    const slides = document.querySelectorAll('.mission-slider-item');
    const indicators = document.querySelectorAll('.mission-indicator');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        indicators[i].classList.remove('active');
    }

    slideMissionIndex++;
    if (slideMissionIndex >= slides.length) {
        slideMissionIndex = 0;
    }

    slides[slideMissionIndex].classList.add('active');
    indicators[slideMissionIndex].classList.add('active');
}

function goToMissionSlide(n) {
    slideMissionIndex = n;
    showSlidesMission();
}

document.addEventListener("DOMContentLoaded", function() {
    showSlidesMission();
    setInterval(showSlidesMission, 4000);
});

// About Us
// Join Us