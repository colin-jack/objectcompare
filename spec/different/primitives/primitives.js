var assert = chai.assert;

describe("primitives not matching", function() {

    describe('When comparing null to undefined with default configuration', function(){
        assertSpotsPrimitivesDifferent(null, undefined);
    });

    describe('When comparing two different functions', function(){
        var first = function() {}
        var second = function() {}
        assertSpotsPrimitivesDifferent(first, second);
    });


    describe('When comparing two different numbers', function(){
        assertSpotsPrimitivesDifferent(6, 3);
    });

    describe('When comparing number to equivalent object wrapper', function(){
        var wrapper = new Number(3);
        assertSpotsPrimitivesDifferent(wrapper, 3);
    });


    describe('When comparing different boolean values', function(){
        assertSpotsPrimitivesDifferent(true, false);
    });

    describe('When comparing boolean to equivalent object wrapper', function(){
        assertSpotsPrimitivesDifferent(true, new Boolean(true));
    });


    describe('When comparing different strings', function(){
        assertSpotsPrimitivesDifferent("one", "two");
    });

    describe('When comparing string to equivalent object wrapper', function(){
        assertSpotsPrimitivesDifferent("one", new String("one"));
    });


    describe('When comparing a number to a string', function(){
        assertSpotsPrimitivesDifferent(5, '3');
    });

    describe('When comparing a boolean to a number', function(){
        assertSpotsPrimitivesDifferent(true, 5);
    });

    describe('When comparing a boolean to a string', function(){
        assertSpotsPrimitivesDifferent(true, "true");
    });

 
    describe('When comparing an array to a string', function(){
        assertSpotsPrimitivesDifferent(["bob"], "bob");
    });

    describe('When comparing an string to an array', function(){
        assertSpotsPrimitivesDifferent("bob", ["bob"]);
    });
});
