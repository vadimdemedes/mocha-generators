/**
 * Test dependencies
 */

require('chai').should();
require('../')();


/**
 * Tests
 */

describe ('Generators in Mocha', function () {
	var testCompleted;
	
	it ('should run the test', function () {
		testCompleted = true;
	});
	
	it ('should confirm that previous test completed', function () {
		testCompleted.should.equal(true);
		testCompleted = false;
	});
	
	it ('should run the test with generator function', function *() {
		yield {
			key: 'value'
		}
		
		testCompleted = true;
	});
	
	it ('should confirm that previous test completed', function () {
		testCompleted.should.equal(true);
	});
});