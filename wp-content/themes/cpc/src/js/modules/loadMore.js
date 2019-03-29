import $ from 'jquery';
import { dom } from './dom';
import withDefault from './withDefault';
import { attrToBool } from './attr';

export default function loadMore(context, options) {
  const button = dom('[data-load-more-button]', context);
  const ppp = parseInt(withDefault('0', 'ppp', button.dataset));
  const offset = parseInt(withDefault('0', 'offset', button.dataset));
  const query = options.query;

  button.addEventListener('click', function() {
    const page = parseInt(withDefault('2', 'loadPage', button.dataset));
    if (ppp > 0 && offset > 0) {
      query.posts_per_page = ppp;
      query.offset = (page - 2) * ppp + offset;
    }
    const loading = attrToBool(button, 'loadPageLoading');
    if (!loading) {
      button.setAttribute('data-load-more-loading', true);
      var data = {
        action: options.action,
        nonce: options.nonce,
        page,
        query,
      };

      $.post(options.url, data, function(res) {
        if (res.success) {
          // Append markup
          $(`${context} [data-load-more-container]`).append(res.data.markup);
          // Update button
          if (res.data.isLast) {
            button.classList.add('hidden');
            button.setAttribute('data-load-more-loading', false);
          } else {
            button.setAttribute('data-load-page', page + 1);
            button.setAttribute('data-load-more-loading', false);
          }
        } else {
          button.setAttribute('data-load-more-loading', false);
        }
      }).fail(function(xhr) {
        button.setAttribute('data-load-more-loading', false);
        // eslint-disable-next-line no-console
        console.error(`Failed with message of: ${xhr.responseText}`);
      });
    }
  });
}
