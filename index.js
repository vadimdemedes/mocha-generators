'use strict';

/**
 * Dependencies
 */

const isGenerator = require('is-generator').fn;
const co = require('co');


/**
 * Expose `mocha-generators`
 */

// support for
// require('mocha-generators')() - deprecated
// require('mocha-generators').install()
module.exports = function () {
	console.error('MOCHA-GENERATORS require(\'mocha-generators\')() is deprecated and soon will be removed, please use require(\'mocha-generators\').install() instead.');

	install();
};

module.exports.install = install;


/**
 * Make Mocha compatible with generators
 */

function install () {
	let methods = [
		'beforeEach',
		'afterEach',
		'before',
		'after',
		'it'
	];

	methods.forEach(function (name) {
		let originalFn = global[name];

		let patchArgs = function(args) {
			let lastIndex = args.length - 1;
			let test = args[lastIndex];

			if (isGenerator(test)) {
				args[lastIndex] = function (done) {
					co(test.bind(this)).then(done, done);
				};
			}

			return args;
		};

		let modifiedFn = function () {
			return originalFn.apply(null, patchArgs.call(this, [].slice.call(arguments)));
		};

		modifiedFn.only = function only () {
			return originalFn.only.apply(null, patchArgs.call(this, [].slice.call(arguments)));
		};

		modifiedFn.skip = function skip () {
			return originalFn.skip.apply(null, arguments);
		};

		global[name] = modifiedFn;
	});
}
