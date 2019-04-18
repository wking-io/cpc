import { attrToBool } from './attr';
import { dom } from './dom';
import $ from 'jquery';

function findParentDrawer(el) {
  if (el === document.body) {
    return false;
  }

  return el.parentElement.hasAttribute('data-drawer-wrapper')
    ? el.parentElement
    : findParentDrawer(el.parentElement);
}

export function toggleDrawer(wrapper) {
  return function(e) {
    toggleDrawerAttr(e.target, wrapper);
    setDrawerHeight(wrapper);
    return e;
  };
}

function toggleDrawerAttr(btn, wrapper) {
  console.log(wrapper);
  const isExpanded = attrToBool('data-drawer-expanded', wrapper);
  wrapper.setAttribute('data-drawer-expanded', !isExpanded);
  wrapper.classList.toggle('drawer--open');
  btn.setAttribute('aria-expanded', !isExpanded);
  return wrapper;
}

export function setDrawerHeight(wrapper) {
  wrapper.style.height = attrToBool('data-drawer-expanded', wrapper)
    ? wrapper.querySelector('[data-drawer-full]').offsetHeight + 'px'
    : wrapper.querySelector('[data-drawer-visible]').offsetHeight + 'px';

  const parentDrawer = findParentDrawer(wrapper);
  if (parentDrawer) {
    setDrawerHeight(parentDrawer);
  }
}

function toggleAllDrawerAttr(btn, wrapper, wrappers) {
  const isExpanded = attrToBool(wrapper, 'data-drawer-expanded');
  const currentBio = dom('.team-bio', wrapper);
  const currentSpacer = dom('.team-spacer', wrapper);
  const currentIndex = parseInt(wrapper.dataset.itemIndex);
  const currentTop = wrapper.getBoundingClientRect().top + window.scrollY;

  wrapper.parentElement.classList.remove(
    'team-container--open',
    'team-container--open-left',
    'team-container--open-right'
  );

  if (!isExpanded) {
    let lastActive = false;
    wrappers.forEach(wrap => {
      const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
      const wrapIndex = parseInt(wrap.dataset.itemIndex);
      const isActive = attrToBool(wrap, 'data-drawer-expanded');
      const spacer = dom('.team-spacer', wrap);
      if (isActive && wrapIndex !== currentIndex) {
        lastActive = {
          height: spacer.offsetHeight,
          index: parseInt(wrapIndex),
          top: wrapTop,
        };
      }
      const wrapButton = dom('[data-drawer-action-special]', wrap);
      wrap.setAttribute('data-drawer-expanded', false);
      wrap.classList.remove('drawer--open');
      wrapButton.setAttribute('aria-expanded', false);
      spacer.style.height = '0px';
    });
    wrapper.parentElement.classList.add('team-container--open');
    currentSpacer.style.height = `${currentBio.offsetHeight + 32}px`;
    const { top } = currentSpacer.getBoundingClientRect();
    if (
      false !== lastActive &&
      currentIndex > lastActive.index &&
      currentTop > lastActive.top
    ) {
      $('html, body').animate(
        {
          scrollTop: top + window.scrollY - 52 - lastActive.height,
        },
        350
      );
    } else {
      $('html, body').animate(
        {
          scrollTop: top + window.scrollY - 52,
        },
        350
      );
    }
  } else {
    currentSpacer.style.height = '0px';
    const { top } = wrapper.getBoundingClientRect();
    $('html, body').animate(
      {
        scrollTop: top + window.scrollY - 32,
      },
      350
    );
  }

  wrapper.setAttribute('data-drawer-expanded', !isExpanded);
  wrapper.classList.toggle('drawer--open');
  btn.setAttribute('aria-expanded', !isExpanded);
  return wrapper;
}

export function toggleAllDrawer(wrapper, wrappers) {
  return function(e) {
    toggleAllDrawerAttr(e.target, wrapper, wrappers);
  };
}
