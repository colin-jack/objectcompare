var assert = require('chai').assert,
    objectComparison = lib.require('objectComparison'),
    compareAndAssertDifferences = require('./../assertDifferencesUtil').compareAndAssertDifferences;

describe('objects not matching', function(){
    describe('When objects differ on several root properties', function(){
        var first = { name: "bob", age: 15, gender: "male", friend: "foe", goodie: true };
        var second = { name: null, age: "15", gender: "female", friend: undefined, goodie: false };

        var expectedDifferences = {
            name: { reason: "differentValues", firstValue: "bob", secondValue: null },
            age: { reason: "differentValues", firstValue: 15, secondValue: "15" },
            gender: { reason: "differentValues", firstValue: "male", secondValue: "female" },
            friend: { reason: "differentValues", firstValue: "foe", secondValue: undefined },
            goodie: { reason: "differentValues", firstValue: true, secondValue: false }
        }

        compareAndAssertDifferences(first, second, expectedDifferences);
    });

    describe('When object hierarchies are very different including properties of sub-objects', function(){
        var first = { name: "bob", age: 35, car: { name: "ford focus", age: 5} };
        var second = { name: "mike", age: 40, car: { name: "ford focus XS", age: 2} };
          
        var expectedDifferences = {
            name: { reason: "differentValues", firstValue: "bob", secondValue: "mike" },
            age: { reason: "differentValues", firstValue: 35, secondValue: 40 },
            "car.name": { reason: "differentValues", firstValue: "ford focus", secondValue: "ford focus XS" },
            "car.age": { reason: "differentValues", firstValue: 5, secondValue: 2 }
          };

        compareAndAssertDifferences(first, second, expectedDifferences);
    });

    describe('When objects differ on a date', function(){
        var result, first, second;

        beforeEach(function() {
            var first = { startDate: new Date("12-12-2001") };
            var second = { startDate: new Date("1-1-2005") };
            result = objectComparison(first, second);        
        });

        it('should identify there were differences', function(){
            assert.isFalse(result.equal, "Failed to identify that objects did not match.");
        })  

        it('should identify there was one difference', function(){
            assert.lengthOf(Object.keys(result.differences), 1);
        })

        it('should identify correct difference', function(){      
            var difference = result.differences["startDate"];

            assert.isTrue("startDate" in result.differences, "Expected there to be a difference for the property.");
            assert.strictEqual(difference.reason, "differentValues", "Reasons did not match.");

            debugger
            assert.strictEqual(difference.firstValue.getTime(), new Date("12-12-2001").getTime(), "First value did not match.");  
            assert.strictEqual(difference.secondValue.getTime(), new Date("1-1-2005").getTime(), "Second value did not match.");
        })
    });
})
