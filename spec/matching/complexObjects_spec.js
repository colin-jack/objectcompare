var assert = require('chai').assert,
    assertSpotsMatch = require('./matchingUtil').assertSpotsMatch,
    testObjectMother = require('./../testObjectMother');

var Name = function(first, second) {
    this.first = first;
    this.second = second;
}

describe("complex objects matching matching", function() {
    describe('When comparing two complex equivalent objects', function(){
        var getAge = function() {}

        var first = {
            startDate: new Date("10-10-2012"),
            getAge: getAge,
            name: new Name("bob", "franklin")
        }

        var second = {
            getAge: getAge,
            name: new Name("bob", "franklin"),
            startDate: new Date("10-10-2012")
        }

        assertSpotsMatch(first, second);
    });
});