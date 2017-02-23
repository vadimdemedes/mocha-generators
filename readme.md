# mocha-generators [![Build Status](https://travis-ci.org/vadimdemedes/mocha-generators.svg?branch=master)](https://travis-ci.org/vadimdemedes/mocha-generators)

> Enable support for ES6 generators in Mocha tests.


## Installation

```
$ npm install --save mocha-generators
```


## Usage

```js
require('mocha-generators').install();

it('test something', function * () {
	// oh, yeah, it works
});
```


## License

MIT @ [Vadim Demedes](https://vadimdemedes)
