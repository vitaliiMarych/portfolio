var menuToggle = document.querySelector('.header-menu-toggle');

var menu = document.querySelector('.header-links');
var mobileMenu = document.querySelector('.header-links-active');

menuToggle.addEventListener('click', function() {
  // Перевіряємо, чи активований згорнутий список
  console.log("fgrfsef");
  var isActive = menu.classList.contains('active');

  // Змінюємо стан згорнутого списку та значку кнопки переключення
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