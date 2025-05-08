// Main JavaScript for school website

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Initialize slider functionality if present on the page
    initSlider();

    // Initialize mobile menu toggle
    initMobileMenu();
});

// Slider functionality
function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentSlide = 0;

    // Auto-advance slides every 5 seconds
    const slideInterval = setInterval(nextSlide, 5000);

    // Next slide function
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Previous slide function
    function prevSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Add click event listeners
    if (nextBtn) nextBtn.addEventListener('click', function () {
        clearInterval(slideInterval);
        nextSlide();
    });

    if (prevBtn) prevBtn.addEventListener('click', function () {
        clearInterval(slideInterval);
        prevSlide();
    });
}

// Mobile menu toggle
function initMobileMenu() {
    // This will be implemented if a mobile menu toggle is added
    // Could expand to add mobile-friendly navigation
}

// Additional functionality for the announcement ticker
// This creates a smoother animation than CSS alone for longer content
function initAnnouncementTicker() {
    const container = document.querySelector('.announcements-container');
    const content = document.querySelector('.announcements-content');

    if (!container || !content) return;

    // Clone the content if it's too short to create a continuous loop effect
    if (content.offsetWidth < container.offsetWidth * 2) {
        content.innerHTML += content.innerHTML;
    }
}