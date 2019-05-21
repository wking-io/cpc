export function fromTop(el) {
  const { top } = el.getBoundingClientRect();
  return top;
}

export const withDefault = (fallback, prop, obj) =>
  obj.hasOwnProperty(prop) ? obj[prop] : fallback;

export function growY(el) {
  const og = {
    height: el.offsetHeight,
    fromTop: fromTop(el),
    buffer: parseFloat(withDefault('1', 'growBuffer', el.dataset)),
  };

  el.style.height = '0px';

  return function() {
    og.fromTop = fromTop(el);
    const buffer = window.innerHeight * og.buffer;
    const full = window.innerHeight - buffer - 100;
    const fromBuffer = og.fromTop - buffer;
    const isVisible = og.fromTop - window.innerHeight < -100;
    const isAbove = fromBuffer < 0;

    window.requestAnimationFrame(() => {
      if (isAbove) {
        el.style.height = `${og.height}px`;
      } else if (isVisible) {
        const percent = 1 - fromBuffer / full;
        el.style.height = `${percent * og.height}px`;
      } else {
        el.style.height = '0px';
      }
    });
    return og;
  };
}

export function growX(el) {
  const og = {
    width: el.offsetWidth,
    fromTop: fromTop(el),
    buffer: parseFloat(withDefault('1', 'growBuffer', el.dataset)),
  };

  el.style.width = '0px';

  return function() {
    og.fromTop = fromTop(el);
    const buffer = window.innerHeight * og.buffer;
    const full = window.innerHeight - buffer - 100;
    const fromBuffer = og.fromTop - buffer;
    const isVisible = og.fromTop - window.innerHeight < -100;
    const isAbove = fromBuffer < 0;

    window.requestAnimationFrame(() => {
      if (isAbove) {
        el.style.width = `${og.width}px`;
      } else if (isVisible) {
        const percent = 1 - fromBuffer / full;
        el.style.width = `${percent * og.width}px`;
      } else {
        el.style.width = '0px';
      }
    });
    return og;
  };
}

export function moveY(el) {
  const og = {
    position: el.offsetHeight,
    fromTop: fromTop(el),
    buffer: parseFloat(withDefault('1', 'growBuffer', el.dataset)),
  };

  el.style.height = '0px';

  return function() {
    og.fromTop = fromTop(el);
    const buffer = window.innerHeight * og.buffer;
    const full = window.innerHeight - buffer - 100;
    const fromBuffer = og.fromTop - buffer;
    const isVisible = og.fromTop - window.innerHeight < -100;
    const isAbove = fromBuffer < 0;

    window.requestAnimationFrame(() => {
      if (isAbove) {
        el.style.height = `${og.height}px`;
      } else if (isVisible) {
        const percent = 1 - fromBuffer / full;
        el.style.height = `${percent * og.height}px`;
      } else {
        el.style.height = '0px';
      }
    });
    return og;
  };
}
