import '../scss/main.scss';

import { domAll } from './modules/dom';
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
