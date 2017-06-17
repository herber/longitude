import test from 'ava';
import f from '../';
import fetch from 'node-fetch';

test('Geoip for Google Proxy', t => {
  f('8.8.8.8').then(data => {
    t.is(data.country_code, 'US');
    t.is(data.country_name, 'United States');
  }).catch(err => {
    t.fail(err);
  });
});

test('Local IP', t => {
  f().then(data => {
    fetch('https://api.ipify.org').then(function(res) {
      t.is(data.ip, res.text());
    });
  }).catch(err => {
    t.fail(err);
  });
});
