import $ from 'jquery';
import 'slick-carousel';
import { domAll } from './dom';
import withDefault from './withDefault';

const goTo = (el, context) => {
  const index = withDefault(false, 'slideTo', el.dataset);
  if (false === index) {
    // eslint-disable-next-line no-console
    console.error('No slideTo data prop was found for this element.');
  } else {
    $(`${context} .slider`).slick('slickGoTo', index);
  }
  return el;
};

function updateWhenIndex(i, buttons) {
  buttons.forEach(button => {
    const index = withDefault(false, 'slideTo', button.dataset);
    if (false !== index && i === parseInt(index)) {
      button.parentElement.classList.add('active-item');
    } else {
      button.parentElement.classList.remove('active-item');
    }
  });
}

function fancyNav(context, buttons) {
  buttons.forEach(button =>
    button.addEventListener('click', () => goTo(button, context))
  );

  // Update the nav items with active class on change
  $(`${context} .slider`).on(
    'beforeChange',
    (event, slick, currentSlide, nextSlide) =>
      updateWhenIndex(nextSlide, buttons)
  );
}

export function initHomeSlider(context) {
  const buttons = domAll('[data-slider-button="featured"]', context);

  $(`${context} .slider`)
    .slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4500,
      speed: 500,
      useTransform: true,
      cssEase: 'cubic-bezier(0.0, 0.86, 0.9, 1)',
      rows: 0,
      pauseOnHover: false,
      pauseOnFocus: false,
    })
    .slick('slickPause');

  const initDelay = window.innerWidth > 922 ? 2500 : 0;

  setTimeout(function() {
    $(`${context} .slider`).slick('slickPlay');
    $(context).attr('data-initializing', 'false');
    updateWhenIndex(0, buttons);
  }, initDelay);

  fancyNav(context, buttons);
}

function unslickWhen(cond, slider, settings) {
  if (cond()) {
    if (slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
    }
  } else if (!slider.hasClass('slick-initialized')) {
    slider.slick(settings);
  }
}

export function initLatestSlider(context) {
  const $slickSlider = $(`${context} .slider`);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    useTransform: true,
    cssEase: 'cubic-bezier(0.0, 0.86, 0.9, 1)',
  };

  unslickWhen(() => $(window).width() < 768, $slickSlider, settings);

  // reslick only if it's not slick()
  $(window).on('resize', () => {
    unslickWhen(() => $(window).width() < 768, $slickSlider, settings);
  });

  $(`${context} [data-slider-prev]`).click(() =>
    $(`${context} .slider`).slick('slickPrev')
  );
  $(`${context} [data-slider-next]`).click(() =>
    $(`${context} .slider`).slick('slickNext')
  );
}

export function destroySlider(context) {
  $(`${context} .slider`).slick('unslick');
}

export function initFeaturedSlider(context) {
  // Update the nav items with active class on init
  $(`${context} .slider`).on('init', () => {
    $(`${context} .featured-projects-preview`).removeClass('lg:opacity-0');
  });

  // Update the nav items with active class on init
  $(`${context} .slider`).on('reInit', () => {
    $(`${context} .featured-projects-preview`).removeClass('lg:opacity-0');
  });

  $(`${context} .slider`).slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    rows: 0,
    autoplaySpeed: 7500,
    useTransform: true,
    cssEase: 'cubic-bezier(0.0, 0.86, 0.9, 1)',
    asNavFor: `${context} .slider-sub`,
  });

  $(`${context} .slider-sub`).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    asNavFor: `${context} .slider`,
    focusOnSelect: true,
    fade: true,
    rows: 0,
  });

  $(`${context} [data-slider-prev]`).click(() =>
    $(`${context} .slider-sub`).slick('slickPrev')
  );
  $(`${context} [data-slider-next]`).click(() =>
    $(`${context} .slider-sub`).slick('slickNext')
  );
}

export function initProjectSlider(context) {
  $(`${context} .slider`).slick({
    infinite: true,
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.0, 0.86, 0.9, 1)',
    rows: false,
  });

  $(`${context} [data-slider-prev]`).click(() =>
    $(`${context} .slider`).slick('slickPrev')
  );
  $(`${context} [data-slider-next]`).click(() =>
    $(`${context} .slider`).slick('slickNext')
  );
}

export function initNewsSlider(context) {
  $(`${context} .slider`).slick({
    infinite: true,
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.0, 0.86, 0.9, 1)',
    rows: false,
  });

  $(`${context} [data-slider-prev]`).click(() =>
    $(`${context} .slider`).slick('slickPrev')
  );
  $(`${context} [data-slider-next]`).click(() =>
    $(`${context} .slider`).slick('slickNext')
  );
}
