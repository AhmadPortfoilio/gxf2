// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-menu-content a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});



// Swiper Initialization
const images = document.querySelectorAll('.slider-track img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

images.forEach(img => {
img.addEventListener('click', () => {
modal.style.display = 'flex';
modalImg.src = img.src;
});
});

function closeModal() {
modal.style.display = 'none';
modalImg.src = '';
}

modal.addEventListener('click', (e) => {
if (e.target === modal) closeModal();
});




// faq section

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});