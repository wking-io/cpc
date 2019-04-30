import '../scss/blogs.scss';
import '../images/blog-bg.png';

import { dom } from './modules/dom';
import { getAttr } from './modules/attr';
import { setupMenu } from './modules/menu';

const menuToggle = dom('.menu-toggle');
const menu = dom(`#${getAttr('aria-controls', menuToggle)}`);
setupMenu(menu, menuToggle);
