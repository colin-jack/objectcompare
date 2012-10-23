var objectComparison = lib.require('objectComparison'),
    assert = require('chai').assert;

var assertExpectedDifferenceExists = function(expectedDiffProperty, expectedDifferences, result) {
    assert.isTrue(expectedDiffProperty in result.differences, 
                  "Expected there to be a difference for: " + expectedDiffProperty);

    assert.strictEqual(expectedDifferences[expectedDiffProperty].reason, 
                       result.differences[expectedDiffProperty].reason, 
                       "Reasons did not match for property " + expectedDiffProperty);

    assert.strictEqual(expectedDifferences[expectedDiffProperty].firstValue, 
                         result.differences[expectedDiffProperty].firstValue, 
                         "First value did not match for property " + expectedDiffProperty);

    assert.strictEqual(expectedDifferences[expectedDiffProperty].secondValue,
                         result.differences[expectedDiffProperty].secondValue, 
                         "Second value did not match for property " + expectedDiffProperty);
}

var compareAndAssertDifferences = function(first, second, expectedDifferences) {
    var result;

    beforeEach(function() {
        result = objectComparison(first, second);        
    });

    it('should identify there were differences', function(){
        assert.isFalse(result.equal);
    })  

    it('should identify number of differences', function(){
        assert.strictEqual(Object.keys(result.differences).length, Object.keys(expectedDifferences).length);
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