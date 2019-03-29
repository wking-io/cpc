export default function replaceUrl(el) {
  const url = encodeURIComponent(window.location.href);
  const base = el.getAttribute('href');
  if (url) {
    el.setAttribute('href', base + url);
  }
}
