const classList = method => (className, el) => {
  el.classList[method](className);
  return el;
}

export const addClass = classList('add');
export const removeClass = classList('remove');
export const toggleClass = classList('toggle');