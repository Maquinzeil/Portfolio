const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon?.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('active');
    menuIcon.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    menuIcon.setAttribute('aria-expanded', String(isOpen));
    menuIcon.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuIcon.setAttribute('aria-expanded', 'false');
        menuIcon.setAttribute('aria-label', 'Open navigation');
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 180;
    let currentId = 'home';
    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) currentId = section.id;
    });
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`));
};

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

if (window.ScrollReveal) {
    ScrollReveal({ distance: '45px', duration: 900, delay: 100, reset: false, easing: 'ease-out' });
    ScrollReveal().reveal('.reveal-left', { origin: 'left' });
    ScrollReveal().reveal('.reveal-right', { origin: 'right' });
    ScrollReveal().reveal('.journey-box, .services-box, .portfolio-box, .case-study-card, .contact form', { origin: 'bottom', interval: 90 });
}
