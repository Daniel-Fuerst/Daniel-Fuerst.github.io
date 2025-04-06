// Add scroll animations
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section-title, .hero-content, .service-item');

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});
