export function scrollFunction() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animateScroll');
    });
});