export default function(fn, type, listener) {
  fn();
  listener.addEventListener(type, fn);
  return listener;
}
