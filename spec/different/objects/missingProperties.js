var assert = require('chai').assert,
    compareAndAssertDifferences = require('./../assertDifferencesUtil').compareAndAssertDifferences;

describe('objects not matching', function(){  
    describe('When first object has properties the second lacks', function(){
        var first = { name: "bob", age: 15, gender: null };
        var second = { name: "bob" };
        
        var expectedDifferences = {
          age: { reason: "valueOnlyInFirstObject", firstValue: 15,  secondValue: undefined },
          gender: { reason: "valueOnlyInFirstObject", firstValue: null, secondValue: undefined }
        }

        compareAndAssertDifferences(first, second, expectedDifferences);
    });

    describe('When second object has properties the first lacks', function(){
        var first = { name: "bob" };
        var second = { name: "bob", age : undefined, gender: "male" };
          
        var expectedDifferences = {
            age: {
              reason: "valueOnlyInSecondObject",
              firstValue: undefined,
              secondValue: undefined
            },
            gender: {
              reason: "valueOnlyInSecondObject",
              firstValue: undefined,
              secondValue: "male"
            }
          }

        compareAndAssertDifferences(first, second, expectedDifferences);
    });
});