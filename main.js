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

// Present the portfolio project as a complete professional case study.
const caseStudy = document.querySelector('#case-study');
if (caseStudy) {
    caseStudy.innerHTML = `
        <div class="section-heading">
            <p class="eyebrow">FEATURED PROJECT</p>
            <h2 class="heading">Fitness & Wellness <span>Brand Campaign.</span></h2>
            <p>A social media project focused on consistent, engaging content across Instagram and Facebook.</p>
        </div>
        <div class="case-layout">
            <div class="case-hero">
                <div class="case-intro">
                    <span class="case-badge">SOCIAL MEDIA CAMPAIGN</span>
                    <h3>Fitness & Wellness Brand</h3>
                    <p class="case-role">SOCIAL MEDIA MANAGEMENT</p>
                    <p>A content-driven campaign built around wellness, fitness, and self-care. The project focuses on creating a consistent visual presence, organizing content, and supporting an engaging social media experience.</p>
                    <div class="case-platforms">
                        <span><i class="fa-brands fa-instagram"></i> Instagram</span>
                        <span><i class="fa-brands fa-facebook"></i> Facebook</span>
                    </div>
                </div>
                <div class="case-overview">
                    <h4>Campaign Overview</h4>
                    <div class="overview-item"><i class="fa-solid fa-bullseye"></i><div><strong>Campaign Goal</strong><span>Build a consistent and engaging social media presence.</span></div></div>
                    <div class="overview-item"><i class="fa-solid fa-heart"></i><div><strong>Content Focus</strong><span>Fitness, wellness, healthy habits, and self-care.</span></div></div>
                    <div class="overview-item"><i class="fa-solid fa-display"></i><div><strong>Platforms</strong><span>Instagram & Facebook</span></div></div>
                    <div class="overview-item"><i class="fa-solid fa-calendar-days"></i><div><strong>Content Plan</strong><span>A structured 30-day content schedule.</span></div></div>
                </div>
            </div>
            <div class="case-work">
                <h4>What I Did</h4>
                <div class="work-grid">
                    <span><i class="fa-solid fa-lightbulb"></i>Content Strategy</span>
                    <span><i class="fa-solid fa-pen"></i>Content Creation</span>
                    <span><i class="fa-solid fa-calendar"></i>Content Calendar</span>
                    <span><i class="fa-solid fa-film"></i>Reels Creation</span>
                    <span><i class="fa-solid fa-hashtag"></i>Hashtag Research</span>
                    <span><i class="fa-solid fa-comment-dots"></i>Community Engagement</span>
                </div>
            </div>
            <div class="case-results">
                <h4>Campaign Deliverables</h4>
                <div class="metric-grid">
                    <div class="metric"><i class="fa-solid fa-file-lines"></i><strong>12</strong><span>Posts Created</span></div>
                    <div class="metric"><i class="fa-solid fa-film"></i><strong>4</strong><span>Reels Created</span></div>
                    <div class="metric"><i class="fa-solid fa-layer-group"></i><strong>2</strong><span>Platforms Managed</span></div>
                    <div class="metric"><i class="fa-solid fa-calendar-days"></i><strong>30</strong><span>Day Content Plan</span></div>
                </div>
            </div>
        </div>`;
}

if (window.ScrollReveal) {
    ScrollReveal({ distance: '45px', duration: 900, delay: 100, reset: false, easing: 'ease-out' });
    ScrollReveal().reveal('.reveal-left', { origin: 'left' });
    ScrollReveal().reveal('.reveal-right', { origin: 'right' });
    ScrollReveal().reveal('.journey-box, .services-box, .portfolio-box, .case-study, .contact form', { origin: 'bottom', interval: 90 });
}
