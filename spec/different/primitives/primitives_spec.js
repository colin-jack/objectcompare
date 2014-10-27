var assert = require('chai').assert,
    assertDifferent = require('./assertPrimitivesUtil').assertDifferent;

describe("primitives not matching", function() {

    describe('When comparing null to undefined with default configuration', function(){
        assertDifferent(null, undefined);
    });

    describe('When comparing two different functions', function(){
        var first = function() {}
        var second = function() {}
        assertDifferent(first, second);
    });


    describe('When comparing two different numbers', function(){
        assertDifferent(6, 3);
    });

    describe('When comparing number to equivalent object wrapper', function(){
        var wrapper = new Number(3);
        assertDifferent(wrapper, 3);
    });


    describe('When comparing different boolean values', function(){
        assertDifferent(true, false);
    });

    describe('When comparing boolean to equivalent object wrapper', function(){
        assertDifferent(true, new Boolean(true));
    });


    describe('When comparing different strings', function(){
        assertDifferent("one", "two");
    });

    describe('When comparing string to equivalent object wrapper', function(){
        assertDifferent("one", new String("one"));
    });


    describe('When comparing a number to a string', function(){
        assertDifferent(5, '3');
    });

    describe('When comparing a boolean to a number', function(){
        assertDifferent(true, 5);
    });

    describe('When comparing a boolean to a string', function(){
        assertDifferent(true, "true");
    });

 
    describe('When comparing an array to a string', function(){
        assertDifferent(["bob"], "bob");
    });

    describe('When comparing an string to an array', function(){
        assertDifferent("bob", ["bob"]);
    });
});
