/* global jQuery */

import Future from 'data.task';

export const makeRequest = ({ method, url, data }) =>
  new Future((reject, resolve) => {
    jQuery.ajax({
      method,
      url,
      data,
      success: resolve,
      error: reject,
    });
  });
