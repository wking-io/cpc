export const wrapEvent = (fn, args = []) => (e) => {
  fn(...args);
  return e;
};

export const eventOn = (event, cb, el) => {
  el.addEventListener(event, cb);
  return el;
};
