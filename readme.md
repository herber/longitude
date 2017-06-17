# longitude [![Build Status](https://travis-ci.org/tobihrbr/longitude.svg?branch=master)](https://travis-ci.org/tobihrbr/longitude)

> Geolocation for node

## Install

```
$ npm install --save longitude
```

## Usage
### With any IP
```js
const longitude = require('longitude');

longitude('8.8.8.8').then(data => {
  console.log(data);
  // => {
  // =>   ip: '8.8.8.8',
  // =>   country_code: 'US',
  // =>   country_name: 'United States',
  // =>   latitude: 37.751,
  // =>   longitude: -97.822,
  // =>   ...
  // => }
});
```

### With device IP
```js
const longitude = require('longitude');

longitude().then(data => {
  console.log(data);
  // => {
  // =>   ip: Your IP,
  // =>   ...
  // => }
});
```

## API

### longitude(ip)
Returns a promise with the geoip data

#### ip

Type: `string`

The IP - Address you want to check

## Related
- [longitude-client](https://github.com/tobihrbr/longitude-client) - Geoip for browsers
- [longitude-cli](https://github.com/tobihrbr/longitude-cli) - Geoip for the commandline

## License

MIT © [Tobias Herber](https://tobihrbr.com)
