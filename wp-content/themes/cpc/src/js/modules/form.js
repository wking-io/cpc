import { dom } from './dom';

function on(classname, el) {
  return function() {
    el.classList.add(classname);
    return el;
  };
}

function off(classname, el) {
  return function(e) {
    const val = e.target.value;
    if (val.length === 0 || val === '(___) ___-____')
      el.classList.remove(classname);
    return el;
  };
}

export function toggleActive(classname) {
  return function(parent) {
    const input = dom('input, textarea', parent);
    input.addEventListener('blur', off(classname, parent));
    input.addEventListener('focus', on(classname, parent));
  };
}

export function spamCheck(btn, input) {
  input.addEventListener('keyup', function(e) {
    if (e.target.value === '14') {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });
}
