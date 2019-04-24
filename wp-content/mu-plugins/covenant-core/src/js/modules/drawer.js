import { attrToBool } from './attr';

function findParentDrawer(el) {
  if (el === document.body) {
    return false;
  }

  return el.parentElement.hasAttribute('data-drawer-wrapper')
    ? el.parentElement
    : findParentDrawer(el.parentElement);
}

function toggleDrawer(wrapper) {
  return function(e) {
    toggleDrawerAttr(e.target, wrapper);
    setDrawerHeight(wrapper);
    return e;
  };
}

function toggleDrawerAttr(btn, wrapper) {
  const isExpanded = attrToBool('data-drawer-expanded', wrapper);
  wrapper.setAttribute('data-drawer-expanded', !isExpanded);
  wrapper.classList.toggle('drawer--open');
  btn.setAttribute('aria-expanded', !isExpanded);
  return wrapper;
}

function setDrawerHeight(wrapper) {
  wrapper.style.height = attrToBool('data-drawer-expanded', wrapper)
    ? wrapper.querySelector('[data-drawer-full]').offsetHeight + 'px'
    : wrapper.querySelector('[data-drawer-visible]').offsetHeight + 'px';

  const parentDrawer = findParentDrawer(wrapper);
  if (parentDrawer) {
    setDrawerHeight(parentDrawer);
  }
}

export function setupDrawers(drawers) {
  if (drawers) {
    drawers.forEach(function(btn) {
      const wrapper = document.getElementById(
        btn.getAttribute('aria-controls')
      );
      if (wrapper) {
        setDrawerHeight(wrapper);
        btn.addEventListener('click', toggleDrawer(wrapper));
      }
    });
  }
}
