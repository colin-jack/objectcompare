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
    return createCharacterWithSpecifiedFriends(['luigi', 'little mushroom bloke', 'donkey kong']);
}

var createCharacterWithSpecifiedFriends = function(friends) {
    var toReturn = createWithHierarchy();
    toReturn.friends = friends;
    return toReturn;   
}

var testObjectMother = {
    createSimpleObject                  : createSimpleObject,
    createWithHierarchy                 : createWithHierarchy,
    createWithHierarchyAndArrays        : createWithHierarchyAndArrays,
    createCharacterWithSpecifiedFriends : createCharacterWithSpecifiedFriends
}