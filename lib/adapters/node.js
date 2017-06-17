'use strict';

const http = require('http');
const url = require('url');

/**
* Simple fetch polyfill for node
* @param {string} u - url to be requested
* @param {object} options - request options
*/

const node = (u, options = {}) => (
  new Promise((resolve) => {
    const uri = url.parse(u);

    const req = http.request({ host: uri.host, path: uri.pathname + '?' + uri.query, method: options.method || 'get' }, (response) => {
      let str = '';

      response.on('data', (chunk) => {
        str += chunk;
      });

      response.on('end', () => {
        resolve({
  				ok: (response.statusCode / 200 | 0) === 1,
  				status: response.statusCode,
  				url: u,
          json: () => JSON.parse(str),
  				text: str
  			});
      });
    });

    req.end();
  })
);

module.exports = node;
