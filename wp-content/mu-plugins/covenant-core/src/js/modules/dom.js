const isElmNode = el => el && el.nodeType === 1;

export function dom(selector, root) {
  const el =
    root && isElmNode(root)
      ? root.querySelector(selector)
      : document.querySelector(selector);
  return el || { error: 'element not found' };
}

export function domAll(selector, root = false) {
  const elms = isElmNode(root)
    ? root.querySelectorAll(selector)
    : document.querySelectorAll(selector);
  return Array.from(elms) || [];
}
