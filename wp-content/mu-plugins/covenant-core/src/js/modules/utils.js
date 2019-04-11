export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export const elExists = className =>
  document.querySelector(className) ? true : false;

export const trace = msg => val => console.log(msg, val) || val; // eslint-disable-line no-console

export const attrToBool = (el, attr) => el.getAttribute(attr) === 'true';

export const noop = () => {};
