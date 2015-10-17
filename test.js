'use strict';

/**
 * Dependencies
 */

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
});
