import '../scss/sundays.scss';

import { dom, domAll } from './modules/dom';
import { getAttr } from './modules/attr';
import { setupMenu } from './modules/menu';
import { togglePopup } from './modules/popup';

const menuToggle = dom('.menu-toggle');
const menu = dom(`#${getAttr('aria-controls', menuToggle)}`);
setupMenu(menu, menuToggle);

const popups = domAll('[data-popup-action]');
popups.forEach(function(btn) {
  btn.addEventListener('click', togglePopup);
});
