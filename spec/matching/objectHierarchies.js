var assert = chai.assert;

describe("objects matching", function() {
    describe('When comparing two simple equivalent objects', function(){
        var first = testObjectMother.createSimpleObject();
        var second = testObjectMother.createSimpleObject();
        testUtil.assertSpotsMatch(first, second);
    });

    describe('When comparing two slightly more complex equivalent objects', function(){
        var first = testObjectMother.createWithHierarchy();
        var second = testObjectMother.createWithHierarchy();
        testUtil.assertSpotsMatch(first, second);
    });

    describe('When comparing two slightly more complex equivalent objects containing arrays', function(){
        var first = testObjectMother.createWithHierarchyAndArrays();
        var second = testObjectMother.createWithHierarchyAndArrays();
        testUtil.assertSpotsMatch(first, second);
    });
});