const menuBtnOpen = document.querySelector('.menu-btn');
const menuBtnClose = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// ОТКРЫТИЕ МЕНЮ

menuBtnOpen.onclick = function () {
  onClickMenuOpen();
};

function onClickMenuOpen() {
  // console.log('Menu OPEN button was clicked');
  menu.style.display = 'flex';
  setTimeout(function () {
    menu.style.opacity = 1;
  }, 10);
}

// ЗАКРЫТИЕ МЕНЮ

menuBtnClose.onclick = function () {
  onClickMenuClose();
};

function onClickMenuClose() {
  // console.log('Menu CLOSE button was clicked');
  menu.style.opacity = 0;
  setTimeout(function () {
    menu.style.display = 'none';
  }, 500);
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
  if (event.target == menu) {
    onClickMenuClose();
  }
};

// Закрытие модального окна при нажатии клавиши ESC
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    onClickMenuClose();
  }
});

// ЗАКРЫТИЕ МЕНЮ ПРИ КЛИКЕ НА ССЫЛКУ

menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    onClickMenuClose();

    const target = this.getAttribute('href');
    smoothScroll(target);
  });
});

function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
}

anchorLinks.forEach(function (anchorLink) {
  anchorLink.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    smoothScroll(target);
  });
});
