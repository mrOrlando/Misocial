$(() => {
  const menu = $('.menu_platform_mobile');
  const link = $('.main__menu-link');
  const close = $('.menu__link_type_close', menu);

  link.on('click', event => {
    event.preventDefault();
    menu.addClass('menu_active');
  });

  close.on('click', event => {
    event.preventDefault();
    menu.removeClass('menu_active');
  });

  $('a', menu).click(() => {
    menu.removeClass('menu_active');
  });
});
