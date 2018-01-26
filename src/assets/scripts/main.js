$(function() {
  var menu = $('.menu_platform_mobile');
  var link = $('.m-menu-link');
  var close = $('.menu__link_type_close', menu);

  link.on('click', function(event) {
    event.preventDefault();
    menu.addClass('menu_active');
  });

  close.on('click', function(event) {
    event.preventDefault();
    menu.removeClass('menu_active');
  });

  $('a', menu).click(function() {
    menu.removeClass('menu_active');
  });
});
