'use strict';

/**
 * Dependencies
 */
var path = require('path');
var exec = require('child_process').exec;
require('chai').should();
require('./').install();


/**
 * Tests
 */

describe('mocha-generators', function () {
	var testCompleted;

	it('run the test', function () {
		testCompleted = true;
	});

	it('confirm that previous test completed', function () {
		testCompleted.should.equal(true);
		testCompleted = false;
	});

	it('run the test with generator function', function * () {
		testCompleted.should.equal(false);

		yield {
			key: 'value'
		};

		testCompleted = true;
	});

	it('confirm that previous test completed', function () {
		testCompleted.should.equal(true);
	});

	it('confirm it.only returns', function(done) {
		exec(`mocha ${path.resolve(__dirname, 'only-test')}`, function(err, stdout, stderr) {
			done(err || stderr);
		});
	});
});
