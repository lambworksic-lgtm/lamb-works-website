// Smooth scroll to sections
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const navHeight = document.getElementById('navbar').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  mobileMenu.classList.toggle('active');
  
  if (mobileMenu.classList.contains('active')) {
    menuIcon.classList.add('hidden');
    closeIcon.classList.add('active');
  } else {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.remove('active');
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav-bar');
  
  if (mobileMenu.classList.contains('active') && 
      !nav.contains(event.target)) {
    toggleMobileMenu();
  }
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});