var assert = chai.assert;

describe("matching", function() {
    describe('When comparing an object to itself', function(){
        var obj = createSimpleObject();
        testUtil.assertSpotsMatch(obj, obj);
    });

    describe('When comparing a function to itself', function(){
        var func = function() {};
        testUtil.assertSpotsMatch(func, func);
    });

    describe('When comparing a number to itself', function(){
        testUtil.assertSpotsMatch(5, 5);
    });

    describe('When comparing a string to itself', function(){
        testUtil.assertSpotsMatch("bob", "bob");
    });

    describe('When comparing a boolean to itself', function(){
        testUtil.assertSpotsMatch(false, false);
    });

    describe('When comparing null to null', function(){
        testUtil.assertSpotsMatch(null, null);
    });

    describe('When comparing undefined to undefined', function(){
        testUtil.assertSpotsMatch(undefined, undefined);
    });

    describe('When comparing null to undefined and configured to consider them equal', function(){
        testUtil.assertSpotsMatch(null, undefined, { nullUndefinedEquiv: true });
    });

    describe('When comparing matching arays', function(){
        testUtil.assertSpotsMatch(['bob', 'frank'], ['bob', 'frank'], { nullUndefinedEquiv: true });
    });
});