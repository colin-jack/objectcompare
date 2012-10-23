
var assert = chai.assert;

describe('objects not matching', function(){
    describe('When objects differ on several root properties', function(){
        var first = { name: "bob", age: 15, gender: "male", friend: "foe", goodie: true };
        var second = { name: null, age: "15", gender: "female", friend: undefined, goodie: false };

        var expectedDifferences = {
            name: { reason: "differentValues", firstValue: "bob", secondValue: null },
            age: { reason: "differentValues", firstValue: 15, secondValue: "15" },
            gender: { reason: "differentValues", firstValue: "male", secondValue: "female" },
            friend: { reason: "differentValues", firstValue: "foe", secondValue: undefined },
            goodie: { reason: "differentValues", firstValue: true, secondValue: false }
        }

        shouldCompareAndIdentifyDifferencesExist(first, second, expectedDifferences);
    });

    describe('When object hierarchies are very different including properties of sub-objects', function(){
        var first = { name: "bob", age: 35, car: { name: "ford focus", age: 5} };
        var second = { name: "mike", age: 40, car: { name: "ford focus XS", age: 2} };
          
        var expectedDifferences = {
            name: { reason: "differentValues", firstValue: "bob", secondValue: "mike" },
            age: { reason: "differentValues", firstValue: 35, secondValue: 40 },
            "car.name": { reason: "differentValues", firstValue: "ford focus", secondValue: "ford focus XS" },
            "car.age": { reason: "differentValues", firstValue: 5, secondValue: 2 }
          };

        shouldCompareAndIdentifyDifferencesExist(first, second, expectedDifferences);
    });
})
