# mocha-generators [![Build Status](https://travis-ci.org/vdemedes/mocha-generators.svg?branch=master)](https://travis-ci.org/vdemedes/mocha-generators)

Enable support for ES6 generators in Mocha tests.


## Installation

```
$ npm install mocha-generators --save-dev
```


## Usage

```js
require('mocha-generators').install();

it('test something', function * () {
	// oh, yeah, it works
});
```


## Tests

```
$ npm test
```


## License

MIT @ [Vadim Demedes](https://github.com/vdemedes)
