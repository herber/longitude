'use strict';

const n = require('./adapters/node');

const adapter = () => {
  let adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    adapter = b;
  } else if (typeof process !== 'undefined') {
    adapter = n;
  }

  return adapter;
};

module.exports = {
  adapter
};
