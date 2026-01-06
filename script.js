// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

const mobileToggle = document.querySelector('. mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('. nav-menu a');

// Toggle mobile menu
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = mobileToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style. transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu. classList.remove('active');
            
            // Reset hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!e.target.closest('.nav-wrapper')) {
            navMenu.classList.remove('active');
            
            // Reset hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style. transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// ============================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ============================================

function setActiveNavLink() {
    const currentPage = window.location.pathname. split('/').pop() || 'index. html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index. html')) {
            link.classList.add('active');
        }
    });
}

// Set active link on page load
setActiveNavLink();

// ============================================
// BACK TO TOP BUTTON
// ============================================

const backToTopButton = document.querySelector('.back-to-top');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll to top when button is clicked
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// PREVENT FLASH OF UNSTYLED CONTENT
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
});