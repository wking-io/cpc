import '../scss/events.scss';

import { dom } from './modules/dom';
import { getAttr } from './modules/attr';
import { setupMenu } from './modules/menu';

const menuToggle = dom('.menu-toggle');
const menu = dom(`#${getAttr('aria-controls', menuToggle)}`);
setupMenu(menu, menuToggle);

function unstickSidebar() {
  if (window.innerWidth >= 768) {
    const footer = dom('.footer');
    const sidebar = dom('.events-sidebar');
    const { top } = footer.getBoundingClientRect();
    sidebar.classList.toggle(
      'events-sidebar--unstuck',
      top <= window.innerHeight
    );
  }
}

window.addEventListener('scroll', unstickSidebar);
