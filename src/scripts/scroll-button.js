import constants from './constants';

/**
 * Smooth transition from one element to another.
 * HTML tag link should has attributes data-js="scroll-button" and href.
 * Other HTML tag should has an attribute name with the value href.
 *
 * Example:
 * a(href="#some-section")
 * ...
 * a(name="some-section")
 */
export default () => {
  const scrollButton = $('[data-js="scroll-button"]');

  scrollButton.click(event => {
    event.preventDefault();

    const scrollToName = scrollButton.attr('href').replace('#', '');
    const scrollTo = $(`[name=${scrollToName}]`);
    const offset =
      scrollTo.offset().top - $('body').offset().top + $('body').scrollTop();

    $('html, body').animate(
      { scrollTop: offset },
      constants.SCROLL_ANIMATION_TIME
    );
  });

  if (!scrollButton.length) {
    throw new Error('Could not find [data-js="scroll-button"]');
  }
};
