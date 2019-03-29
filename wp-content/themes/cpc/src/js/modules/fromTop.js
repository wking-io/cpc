export default function(el) {
  const { top } = el.getBoundingClientRect();
  return top;
}
