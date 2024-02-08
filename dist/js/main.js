let slideIndex = 0;

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

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function goToSlide(n) {
    slideIndex = n;
    showSlides();
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});