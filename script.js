const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
const closeMobileMenu = function() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
};

mobileMenu.addEventListener('click', function() {
    const isOpen = mobileNav.classList.contains('active');

    if (isOpen) {
        closeMobileMenu();
    } else {
        mobileNav.classList.add('active');
        overlay.classList.add('active');
    }
});

overlay.addEventListener('click', closeMobileMenu);