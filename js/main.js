(function () {
  'use strict';

  const navBar = document.querySelector('.header__nav');
  const navBtn = document.querySelector('.header__toggle--btn');

  navBtn.addEventListener('click', function () {
    navBar.classList.toggle('show');
  });
})();
