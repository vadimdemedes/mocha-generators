'use strict';

const isGenerator = require('is-generator').fn;
const co = require('co');

exports.install = () => {
	const methods = [
		'beforeEach',
		'afterEach',
		'before',
		'after',
		'it'
	];

	methods.forEach(name => {
		const originalFn = global[name];

		let modifiedFn = function () {
			const args = [].slice.call(arguments);
			const lastIndex = args.length - 1;
			const test = args[lastIndex];

			if (isGenerator(test)) {
				args[lastIndex] = function (done) {
					co(test.bind(this)).then(done, done);
				};
			}

			return originalFn.apply(null, args);
		};

		modifiedFn.only = function () {
			if (name === 'it') {
				throw new Error('mocha-generators does not support "it.only"');
			}

			return originalFn.only.apply(null, arguments);
		};

		modifiedFn.skip = function () {
			return originalFn.skip.apply(null, arguments);
		};

		global[name] = modifiedFn;
	});
};
