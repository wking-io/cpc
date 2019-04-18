export function setAttr(attr, val, el) {
  el.setAttribute(attr, val);
  return el;
}

export function getAttr(attr, el) {
  return el.getAttribute(attr);
}

export const flipAttr = (attr, el) =>
  getAttr(attr, el) === 'true' ? 'false' : 'true';

export const toggleAttr = (attr, el) => setAttr(attr, flipAttr(attr, el), el);

export const attrToBool = (attr, el) => el.getAttribute(attr) === 'true';
