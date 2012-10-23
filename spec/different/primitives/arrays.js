var assert = chai.assert;

var assert = chai.assert;

describe("arrays not matching", function() {
    describe('When arrays do not match', function() {
        var expectedDifferences = {
            "[0]": { reason: "differentValues", firstValue: "bob", secondValue: "frank" },
            "[1]": { reason: "differentValues", firstValue: "frank", secondValue: "mike" }
        };

        shouldCompareAndIdentifyDifferencesExist(["bob", "frank"], ["frank", "mike"], expectedDifferences)
    });

    describe('When arrays do not match as one as more items', function() {
        var expectedDifferences = {
            "[2]": { reason: "differentValues", firstValue: "edgar", secondValue: undefined }
        };

        shouldCompareAndIdentifyDifferencesExist(["hamilton", "pat", "edgar"], ["hamilton", "pat"], expectedDifferences)
    });
});
