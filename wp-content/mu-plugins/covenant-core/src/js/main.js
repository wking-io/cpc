import '../scss/main.scss';

import { dom, domAll } from './modules/dom';
import { getAttr } from './modules/attr';
import { setupDrawers } from './modules/drawer';
import { setupMenu } from './modules/menu';

// Drawers
const drawers = domAll('[data-drawer-action]');

setupDrawers(drawers);

const menuToggle = dom('.menu-toggle');
const menu = dom(`#${getAttr('aria-controls', menuToggle)}`);

setupMenu(menu, menuToggle);
