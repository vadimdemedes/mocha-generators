/**
 * Dependencies
 */

const run = require('co');


/**
 * Expose
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
  const methods = ['it', 'before', 'after', 'beforeEach', 'afterEach'];
  
	methods.forEach(function (name) {
		var originalFn = global[name];
		
		var modifiedFn = function () {
			var args = Array.prototype.slice.call(arguments);
			var lastIndex = args.length - 1;
			var test = args[lastIndex];

			if (isGenerator(test)) {
				args[lastIndex] = function (done) {
					run(test.bind(this)).then(done, done);
				};
			}

			return originalFn.apply(null, args);
		};
		
		modifiedFn.only = function only () {
		  return originalFn.only.apply(null, arguments);
		};
		
		modifiedFn.skip = function skip () {
		  return originalFn.skip.apply(null, arguments);
		};
		
		global[name] = modifiedFn;
	});
};


/**
 * Utilities
 */

function isGenerator (fn) {
  return /^function[\s]*\*/.test(fn.toString());
}
