// Custom Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .bento-item, .project, .cta-btn, .testimonial').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});

// Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('active');
});

// Header Scroll
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 80);
});

// Reveal + Counters
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (counter.dataset.animated) return;
                counter.dataset.animated = "true";
                let start = 0;
                const target = parseInt(counter.dataset.target);
                const inc = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    start += inc;
                    counter.textContent = start;
                    if (start >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    }
                }, 30);
            });
        }
    });
}, { threshold: 0.25 });

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Hero visible
window.addEventListener('load', () => {
    document.getElementById('hero').classList.add('visible');
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Your request has been sent successfully!');
    this.reset();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});