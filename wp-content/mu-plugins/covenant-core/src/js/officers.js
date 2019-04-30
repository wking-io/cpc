import '../scss/officers.scss';
import '../images/spinner.png';

import { dom, domAll } from './modules/dom';
import { getAttr, setAttr } from './modules/attr';
import { setupMenu } from './modules/menu';
import { togglePopup } from './modules/popup';

const menuToggle = dom('.menu-toggle');
const menu = dom(`#${getAttr('aria-controls', menuToggle)}`);
setupMenu(menu, menuToggle);

function updateTab(e) {
  const tabContainer = document.getElementById(
    getAttr('aria-controls', e.currentTarget)
  );

  setAttr('data-active-tab', getAttr('id', e.currentTarget), tabContainer);
}

const tabs = domAll('[role="tab"]');
tabs.forEach(tab => tab.addEventListener('click', updateTab));

const popups = domAll('[data-popup-action]');
popups.forEach(function(btn) {
  btn.addEventListener('click', togglePopup);
});
