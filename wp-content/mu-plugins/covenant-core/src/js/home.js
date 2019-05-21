import '../scss/home.scss';

import { dom } from './modules/dom';
import { getAttr } from './modules/attr';
import { setupMenu } from './modules/menu';

const menuToggle = dom('.menu-toggle');
const menu = dom(`#${getAttr('aria-controls', menuToggle)}`);

setupMenu(menu, menuToggle);

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
  const video = dom('.cta-video');
  const moveVideo = moveY(video);
  moveVideo();
  window.addEventListener('scroll', moveVideo);
}
