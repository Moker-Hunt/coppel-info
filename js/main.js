// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '↑';
document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cookie Banner
const cookieBanner = document.querySelector('.cookie-banner');
const acceptCookieBtn = document.querySelector('#accept-cookies');

// Show cookie banner if not accepted before
if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
        cookieBanner.classList.add('show');
    }, 1000);
}

// Handle cookie acceptance
if (acceptCookieBtn) {
    acceptCookieBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
    });
}

// Add smooth reveal animation to articles when they come into view
const articles = document.querySelectorAll('.article');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
};

const articleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            articleObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

articles.forEach(article => {
    article.style.opacity = '0';
    article.style.transform = 'translateY(20px)';
    article.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    articleObserver.observe(article);
});
