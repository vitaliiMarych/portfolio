var menuToggle = document.querySelector('.header-menu-toggle');

var menu = document.querySelector('.header-links');
var mobileMenu = document.querySelector('.header-links-active');

menuToggle.addEventListener('click', function() {
  var isActive = menu.classList.contains('active');

  if (isActive) {
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
  } else {
    menu.classList.add('active');
    menuToggle.classList.add('active');
    mobileMenu.classList.add('active');
  }
});