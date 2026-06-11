const logo = document.getElementById('home-link');
const ctaBtn = document.getElementById('cta-btn');


logo.addEventListener('click', () => {
    window.location.reload();
});


if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        alert('Signup Test in page 4!');
    });
}