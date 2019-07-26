import '../scss/home.scss';

import { dom, domAll } from './modules/dom';
import { getAttr } from './modules/attr';
import { setupMenu } from './modules/menu';
import { togglePopup } from './modules/popup';
import { pipe } from './modules/utils';

const menuToggle = dom('.menu-toggle');
const menu = dom(`#${getAttr('aria-controls', menuToggle)}`);

setupMenu(menu, menuToggle);

const handleVideo = player => isClosing =>
  isClosing ? player.pauseVideo() : player.playVideo();

const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* eslint-disable */
window.onYouTubeIframeAPIReady = () => {
  const player = new YT.Player('yt-player', {
    events: {
      onReady: onPlayerReady,
    },
  });

  function onPlayerReady(e) {
    const popups = domAll('[data-popup-action]');
    popups.forEach(function(btn) {
      btn.addEventListener('click', pipe(togglePopup, handleVideo(e.target)));
    });
  }
};
/* eslint-enable */

function getTop(el) {
  const { top } = el.getBoundingClientRect();
  return top;
}

function moveY(el) {
  const base = {
    start: window.innerHeight,
    goal: window.innerHeight / 2,
    transform: 160,
    parent: el.parentElement,
  };
  return function() {
    const parentPos = getTop(base.parent) + base.parent.offsetHeight / 2;
    const change = 1 - (base.start - parentPos) / base.goal;
    const percent = base.transform * change;
    const isAnimating = parentPos <= base.start;
    const isPast = parentPos <= base.goal;
    window.requestAnimationFrame(() => {
      if (isPast) {
        el.style.transform = `translateY(0)`;
      } else if (isAnimating) {
        el.style.transform = `translateY(-${percent}px)`;
      } else {
        el.style.transform = `transformY(-${base.transform}px)`;
      }
    });

    return base;
  };
}

if (window.innerWidth >= 768) {
  const vid = dom('.cta-video');
  const moveVideo = moveY(vid);
  moveVideo();
  window.addEventListener('scroll', moveVideo);
}
