# mocha-generators [![Circle CI](https://circleci.com/gh/vdemedes/mocha-generators.svg?style=svg)](https://circleci.com/gh/vdemedes/mocha-generators)

Enable support for ES6 generators in Mocha tests.


### Installation

```
npm install mocha-generators --save-dev
```


### Usage

```javascript
require('mocha-generators')();

it ('test something', function * () {
	// oh, yeah, it works
});
```


### Tests

```
npm test
```


### License

mocha-generators is released under [the MIT license](http://opensource.org/licenses/MIT).
