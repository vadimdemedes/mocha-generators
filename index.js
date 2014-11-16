/**
 * Module dependencies
 */

var run = require('co');


/**
 * isGenerator polyfill
 * 
 * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/isGenerator
 */
Function.prototype.isGenerator = function () {
	return /^function[\s]*\*/.test(this.toString());
};


/**
 * Make Mocha compatible with generators
 */
module.exports = function () {
	['it', 'before', 'after', 'beforeEach', 'afterEach'].forEach(function (name) {
		var originalFn = global[name];
		global[name] = function () {
			var args = Array.prototype.slice.call(arguments);
			var lastIndex = args.length - 1;
			var test = args[lastIndex];

			if (test.isGenerator()) {
				args[lastIndex] = function (done) {
					run(test.bind(this)).then(done, done);
				};
			}

			originalFn.apply(null, args);
		};
	});
};