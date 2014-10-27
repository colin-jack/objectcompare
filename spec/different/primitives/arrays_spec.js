var assert = require('chai').assert,
    compareAndAssertDifferences = require('./../assertDifferencesUtil').compareAndAssertDifferences;

describe("arrays not matching", function() {
    describe('When arrays do not match', function() {
        var expectedDifferences = {
            "[0]": { reason: "differentValues", firstValue: "bob", secondValue: "frank" },
            "[1]": { reason: "differentValues", firstValue: "frank", secondValue: "mike" }
        };

        compareAndAssertDifferences(["bob", "frank"], ["frank", "mike"], expectedDifferences)
    });

    describe('When arrays do not match as one as more items', function() {
        var expectedDifferences = {
            "[2]": { reason: "differentValues", firstValue: "edgar", secondValue: undefined }
        };

        compareAndAssertDifferences(["hamilton", "pat", "edgar"], ["hamilton", "pat"], expectedDifferences)
    });
});
