'use strict';

require('chai').should();
require('./').install();

describe('mocha-generators', () => {
	let testCompleted;

	it('run the test', () => {
		testCompleted = true;
	});

	it('confirm that previous test completed', () => {
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

	it('confirm that previous test completed', () => {
		testCompleted.should.equal(true);
	});
});
