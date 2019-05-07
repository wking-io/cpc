/* global cpc */
import '../scss/groups.scss';

import { dom } from './modules/dom';
import { getAttr } from './modules/attr';
import { setupMenu } from './modules/menu';
import { makeRequest } from './modules/request';

const menuToggle = dom('.menu-toggle');
const menu = dom(`#${getAttr('aria-controls', menuToggle)}`);
setupMenu(menu, menuToggle);

const updateContent = parent => content => (parent.innerHTML = content);

function filterGroups(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const groupList = dom('.group-list');
  const data = {
    nonce: cpc.filterNonce,
    action: cpc.filterAction,
    day: form.elements['filter-day'].value,
    ministry: form.elements['filter-ministry'].value,
    groupType: form.elements['filter-type'].value,
  };

  makeRequest({
    method: 'GET',
    url: cpc.ajaxUrl,
    data,
  })
    .map(result => result.data.data)
    .fork(console.error, updateContent(groupList));
}

const filterForm = dom('.filter-form');
if (filterForm) {
  filterForm.addEventListener('submit', filterGroups);
}
