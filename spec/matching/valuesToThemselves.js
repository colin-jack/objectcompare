var assert = require('chai').assert,
    assertSpotsMatch = require('./matchingUtil').assertSpotsMatch,
    testObjectMother = require('./../testObjectMother');

describe("matching", function() {
    describe('When comparing an object to itself', function(){
        var obj = testObjectMother.createSimpleObject();
        assertSpotsMatch(obj, obj);
    });

    describe('When comparing a function to itself', function(){
        var func = function() {};
        assertSpotsMatch(func, func);
    });

    describe('When comparing a number to itself', function(){
        assertSpotsMatch(5, 5);
    });

    describe('When comparing a string to itself', function(){
        assertSpotsMatch("bob", "bob");
    });

    describe('When comparing a boolean to itself', function(){
        assertSpotsMatch(false, false);
    });

    describe('When comparing null to null', function(){
        assertSpotsMatch(null, null);
    });

    describe('When comparing undefined to undefined', function(){
        assertSpotsMatch(undefined, undefined);
    });

    describe('When comparing null to undefined and configured to consider them equal', function(){
        assertSpotsMatch(null, undefined, { nullUndefinedEquiv: true });
    });

    describe('When comparing matching arays', function(){
        assertSpotsMatch(['bob', 'frank'], ['bob', 'frank'], { nullUndefinedEquiv: true });
    });
});