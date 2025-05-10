document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Simple Add to Cart functionality
    document.querySelectorAll('.card button').forEach(button => {
        button.addEventListener('click', () => {
            alert("Item added to cart!");
        });
    });

    // Contact form handling
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for contacting us!");
            this.reset();
        });
    }
});


