var assert = require('chai').assert,
    assertSpotsMatch = require('./matchingUtil').assertSpotsMatch,
    testObjectMother = require('./../testObjectMother');

describe("objects matching", function() {
    describe('When comparing two simple equivalent objects', function(){
        var first = testObjectMother.createSimpleObject();
        var second = testObjectMother.createSimpleObject();
        assertSpotsMatch(first, second);
    });

    describe('When comparing two slightly more complex equivalent objects', function(){
        var first = testObjectMother.createWithHierarchy();
        var second = testObjectMother.createWithHierarchy();
        assertSpotsMatch(first, second);
    });

    describe('When comparing two slightly more complex equivalent objects containing arrays', function(){
        var first = testObjectMother.createWithHierarchyAndArrays();
        var second = testObjectMother.createWithHierarchyAndArrays();
        assertSpotsMatch(first, second);
    });
});