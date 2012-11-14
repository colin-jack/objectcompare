var assert = require('chai').assert,
    compareAndAssertDifferences = require('./assertDifferencesUtil').compareAndAssertDifferences;

describe('objects not matching', function(){
    describe('when first has date created using constructor and second has equivalent', function(){
        var first = { startDate: new Date("12-12-2009") };
        var second = { startDate: Date("12-12-2009") };

        var expectedDifferences = {
            "startDate": { reason: "differentValues", firstValue: first.startDate, secondValue: second.startDate },
        };

        compareAndAssertDifferences(first, second, expectedDifferences)
    });
});
