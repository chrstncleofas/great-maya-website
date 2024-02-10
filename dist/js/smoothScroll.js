document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav a[href^='#']");
    
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetPosition = targetElement.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1100;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
        });
    });
});