import '../scss/main.scss';

import { dom, domAll } from './modules/dom';
import { eventOn } from './modules/event';
import { getAttr, setAttr, attrToBool } from './modules/attr';
import { setDrawerHeight, toggleDrawer } from './modules/drawer';

// Drawers
const drawers = domAll('[data-drawer-action]');
drawers.forEach(function(btn) {
  const wrapper = document.getElementById(btn.getAttribute('aria-controls'));
  if (wrapper) {
    setDrawerHeight(wrapper);
    btn.addEventListener('click', toggleDrawer(wrapper));
  }
});

const menuToggle = dom('.menu-toggle');
const masthead = dom(`#${getAttr('aria-controls', menuToggle)}`);

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

function toggleNav(nav) {
  return function(e) {
    const menuOpen = attrToBool('aria-expanded', e.currentTarget);

    setAttr('aria-expanded', !menuOpen, e.currentTarget);
    setAttr('data-menu-open', !menuOpen, nav);
  };
}

function toggleNavPosition(el) {
  return function(isPast) {
    setAttr('data-header-fixed', isPast, el);
  };
}

eventOn('click', toggleNav(masthead), menuToggle);
eventOn('scroll', whenPast(masthead, toggleNavPosition(masthead)), window);
