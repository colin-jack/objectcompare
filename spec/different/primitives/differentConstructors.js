var objectComparison = global.lib.require('objectComparison'),
    assert = require('chai').assert;

describe("primitives not matching", function() {
    describe('When comparing two wrapped numbers but with different constructors', function(){
        var result;

        beforeEach(function() {
            var first = new Number(3);
            var second = new Number(3);
            first.constructor = function() {};
            result = objectComparison(first, second);
        })

        it('should identify they are different', function(){
          assert.isFalse(result.equal);
        })

        it('should identify problem is with root object being compared (not a sub-property) by using "" as path to property', function(){
            assert.isTrue("" in result.differences);
        });

        it('should identify they are different constructorsthat problem is with root object not one of its properties', function(){
            assert.strictEqual("differentConstructor", result.differences[""].reason);
        })
    });
});