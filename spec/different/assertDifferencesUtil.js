var objectComparison = lib.require('objectComparison'),
    assert = require('chai').assert,
    util = require('util');

var assertExpectedDifferenceExists = function(expectedDiffProperty, expectedDifferences, result) {
    assert.isTrue(expectedDiffProperty in result.differences, 
                  "Expected there to be a difference for: " + expectedDiffProperty);

    assert.strictEqual(result.differences[expectedDiffProperty].reason, 
                       expectedDifferences[expectedDiffProperty].reason,
                       "Reasons did not match for property " + expectedDiffProperty);

    assert.strictEqual(result.differences[expectedDiffProperty].firstValue,
                       expectedDifferences[expectedDiffProperty].firstValue, 
                       "First value did not match for property " + expectedDiffProperty);

    assert.strictEqual(result.differences[expectedDiffProperty].secondValue, 
                       expectedDifferences[expectedDiffProperty].secondValue,
                       "Second value did not match for property " + expectedDiffProperty);
}

var compareAndAssertDifferences = function(first, second, expectedDifferences) {
    var result;

    beforeEach(function() {
        result = objectComparison(first, second);        
    });

    it('should identify there were differences', function(){
        assert.isFalse(result.equal, "Failed to identify that objects did not match.");
    })  

    it('should identify number of differences', function(){
        assert.strictEqual(Object.keys(result.differences).length, 
                           Object.keys(expectedDifferences).length,
                           "Wrong number of differences spotted.");
    })

    it('should identify correct differences', function(){      
        var expectedDiffProperties = Object.keys(expectedDifferences);

        expectedDiffProperties.forEach(function(expectedDiffProperty) {
            assertExpectedDifferenceExists(expectedDiffProperty, expectedDifferences, result);
        });
    })
}

module.exports = {
    compareAndAssertDifferences : compareAndAssertDifferences
}