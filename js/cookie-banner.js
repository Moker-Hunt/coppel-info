document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const moreInfoButton = document.getElementById('more-info');

    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'grid';
    } else {
        cookieBanner.style.display = 'none';
    }

    // Accept cookies
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    // More information
    moreInfoButton.addEventListener('click', function() {
        window.location.href = 'cookies-policy.html';
    });
});
