/*====================================== toggle icon navbar ======================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*====================================== scroll section active link ======================================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active');
    }
});           
        };
    });

    /*====================================== sticky navbar ======================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*====================================== remove toggle icon and navbar ======================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};


/*====================================== scroll reveal ======================================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*============================== typed js ======================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Social Media Manager', 'Video Editor'],
    typeSpeed: 90,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

const typedAbout = new Typed('.about .multiple-text', {
    strings: ['Mircosoft Tools', 'Google Workspace', 'Notion', 'Canva', 'ClickFunnels', 'Hootsuite', 'Metricool', 'WordPress', 'Wix', 'HTML', 'CSS', 'ChatGPT'],
    typeSpeed: 20,
    backSpeed: 10,
    backDelay: 900,
    loop: true,
});

document.querySelector('.about .multiple-text').style.fontWeight = 'bold';

