var assert = chai.assert;

var createSimpleObject = function() {
  return { name: "bob", age: 15, gender: "male", friend: "foe", goodie: true };
}

var createWithHierarchy = function() {
    return { 
        name: {
            first: "super",
            second: "mario",
            title: "mr"
        },
        age: 15, 
        gender: "male",
        car: {
            type: "dragon",
            name: "Yoshi"
        } 
    }; 
}

var createWithHierarchyAndArrays = function() {
    var toReturn = createWithHierarchy();
    toReturn.friends = ['luigi', 'little mushroom bloke', 'donkey kong'];
    return toReturn;
}

var assertSpotsMatch = function(first, second, config) {
    var result;

    beforeEach(function() {
      result = objectComparison(first, second, config);
    })

    it('should identify they are the same', function(){
      assert.isTrue(result.equal);
    })

    it('should identify there were no differences', function(){
      assert.strictEqual(result.differences.length, 0);
    })
}

var testUtil = {
    createSimpleObject           : createSimpleObject,
    createWithHierarchy          : createWithHierarchy,
    createWithHierarchyAndArrays : createWithHierarchyAndArrays,
    assertSpotsMatch             : assertSpotsMatch
}