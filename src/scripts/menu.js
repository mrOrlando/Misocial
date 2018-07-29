export default () => {
  const menu = $('[data-js="mobile-menu"]');
  const openMenu = $('[data-js="open-menu"]');
  const closeMenu = $('[data-js="close-menu"]', menu);
  const menuLinks = $('[data-js="menu-link"]', menu);

  openMenu.on('click', event => {
    event.preventDefault();
    menu.addClass('menu_active');
  });

  closeMenu.on('click', event => {
    event.preventDefault();
    menu.removeClass('menu_active');
  });

  menuLinks.click(() => {
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
};
