import { eventOn } from './event';
import { setAttr, attrToBool } from './attr';
import { saveScroll } from './saveScroll';

function whenPast(el, fn) {
  return function() {
    const { height } = el.getBoundingClientRect();

    if (window.scrollY > height) {
      fn(true);
    } else {
      fn(false);
    }
  };
}

function toggleMenu(menu) {
  return function(e) {
    const menuOpen = attrToBool('aria-expanded', e.currentTarget);
    setAttr('aria-expanded', !menuOpen, e.currentTarget);
    setAttr('data-menu-open', !menuOpen, menu);
    saveScroll(menu)(!menuOpen);
  };
}

function toggleMenuPosition(el) {
  return function(isPast) {
    setAttr('data-header-fixed', isPast, el);
  };
}

export function setupMenu(menu, menuToggle) {
  eventOn('click', toggleMenu(menu), menuToggle);
  eventOn('scroll', whenPast(menu, toggleMenuPosition(menu)), window);
}
