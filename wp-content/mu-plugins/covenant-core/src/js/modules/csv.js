import { pipe } from './utils';
import { makeRequest } from './request';
import Future from 'data.task';

function objToCsv({ colEnd = ',', data = [], lineEnd = '\n' }) {
  return data.reduce(objToCsvReducer(colEnd, lineEnd), '');
}

function objToCsvReducer(colEnd, lineEnd) {
  return function(csv, row, i) {
    const keys = Object.keys(row);
    const values = Object.values(row);
    return i === 0
      ? keys.join(colEnd) + lineEnd + values.join(colEnd)
      : csv + lineEnd + values.join(colEnd);
  };
}

function unescapeEntities(string) {
  const htmlUnescapes = {
    '&#038;': '&',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
  };
  const reEscapedHtml = /&(?:#038|amp|lt|gt|quot|#39);/g;

  return string && string.length > 0
    ? string.replace(reEscapedHtml, entity => htmlUnescapes[entity])
    : string;
}

const csvFromData = pipe(objToCsv, unescapeEntities);

function dataToCsv({ filename, data }) {
  const csv = csvFromData({ data });
  if (csv && csv.length > 0) {
    return Future.of({
      filename,
      data: csv.match(/^data:text\/csv/i)
        ? csv
        : 'data:text/csv;charset=utf-8,' + csv,
    });
  } else {
    return Future.rejected('CSV failed to convert from array');
  }
}

function downloadCsv({ filename = 'export.csv', data = [] }) {
  // function that creates a new link with the csv data and clicks it to initiate the download and then removes the button
  const encodedData = encodeURI(data);
  const link = document.createElement('a');
  link.setAttribute('href', encodedData);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  link.remove();

  return { filename, data };
}

export function generate(ajaxurl, filterData, prevData = []) {
  return function({ data }) {
    if (data.has_more) {
      // Set form Data.
      const formData = Object.assign(filterData, {
        paged: data.page,
        per_page: 50,
      });

      return makeRequest({
        method: 'GET',
        url: ajaxurl,
        data: formData,
      }).chain(generate(ajaxurl, filterData, [...prevData, ...data.rows]));
    } else {
      if (
        (data.rows && data.rows.length > 0) ||
        (prevData && prevData.length > 0)
      ) {
        return Future.of({
          filename: data.filename + '.csv',
          data: [...prevData, ...data.rows],
        })
          .chain(dataToCsv)
          .map(downloadCsv);
      } else {
        return Future.rejected('No CSV data');
      }
    }
  };
}
