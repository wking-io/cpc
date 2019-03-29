import { attrToBool } from './attr';

export default function togglePopup(e) {
  var popup = document.getElementById(e.target.getAttribute('aria-controls'));
  popup.setAttribute(
    'data-popup-hidden',
    !attrToBool(popup, 'data-popup-hidden')
  );
  return e;
}
