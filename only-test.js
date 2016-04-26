'use strict';

/**
 * Dependencies
 */

require('chai').should();
require('./').install();


/**
 * Tests
 */

describe('it-only', function () {
	it.only('run the test with generator function under it.only', function * () {
		var obj = yield {
			key: 'value'
		};
		obj.key.should.equal('value');
	});
});
