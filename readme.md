# rtd-core

A minimalistic route parser for [`rtd`](https://github.com/herber/rtd) powered by [`path-to-regexp`](https://github.com/pillarjs/path-match).

## Features

- Tiny
- Fast
- Really easy to use

## Install

```
$ npm install rtd-core
```

## Usage

```js
const rtdCore = require('rtd-core');

const route = rtdCore('/route/:id');
const match = route(url);

if (match == false) {
  // no match
} else {
  const id = match.id;
}
```

## API

### rtdCore(route)

#### route

Type: `string`

The route to match.

### match(url)

Return `false` if there was no match or an object with the params if the routes matched.

#### url

Type: `string`

The url to match with the `route`

## License

MIT © [](http://tobihrbr.com)
