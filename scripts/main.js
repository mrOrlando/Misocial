'use strict';

$(function () {
  var menu = $('[data-js="mobile-menu"]');
  var openMenu = $('[data-js="open-menu"]');
  var closeMenu = $('[data-js="close-menu"]', menu);
  var menuLinks = $('[data-js="menu-link"]', menu);

  openMenu.on('click', function (event) {
    event.preventDefault();
    menu.addClass('menu_active');
  });

  closeMenu.on('click', function (event) {
    event.preventDefault();
    menu.removeClass('menu_active');
  });

  menuLinks.click(function () {
    menu.removeClass('menu_active');
  });

  if (!menu.length) {
    throw new Error('Could not find [data-js="mobile-menu"]');
  }
  if (!openMenu.length) {
    throw new Error('Could not find [data-js="open-menu"]');
  }
  if (!closeMenu.length) {
    throw new Error('Could not find [data-js="close-menu"]');
  }
  if (!menuLinks.length) {
    throw new Error('Could not find [data-js="menu-link"]');
  }
});