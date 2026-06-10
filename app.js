const container = document.getElementById('app-container');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-links a');
const logo = document.getElementById('home-link');
const ctaBtn = document.getElementById('cta-btn');

let currentSectionIndex = 0;
let isScrolling = false;

// 1. Mouse Wheel Logic 
window.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    if (event.deltaY > 0) {
        // Scrolling Down
        if (currentSectionIndex < pages.length - 1) {
            currentSectionIndex++;
            scrollToSection();
        }
    } else {
        // Scrolling Up
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            scrollToSection();
        }
    }
});

// 2. Navbar Links Click Logic (Syncs links to the sliding pages)
navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        if (isScrolling || currentSectionIndex === index) return; 
        
        currentSectionIndex = index; 
        scrollToSection();
    });
});


logo.addEventListener('click', () => {
    window.location.reload();
});

if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        alert('JavaScript would route you to the Signup/Trial Page!');
    });
}

function scrollToSection() {
    isScrolling = true;
    
    container.style.transform = `translateY(-${currentSectionIndex * 100}vh)`;

    setTimeout(() => {
        isScrolling = false;
    }, 800); 
}