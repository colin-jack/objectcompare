var assert = chai.assert;

describe('objects not matching - arrays', function(){  
    describe('When first object and second objects match', function() {
        describe('other than array contents', function(){
            var first = testObjectMother.createCharacterWithSpecifiedFriends([ { name: 'luigi' } ]);
            var second = testObjectMother.createCharacterWithSpecifiedFriends([ { name: 'mona' } ]);

            var expectedDifferences = {
              "friends[0].name": { reason: "differentValues", firstValue: "luigi", secondValue: "mona" }
            }
            

            shouldCompareAndIdentifyDifferencesExist(first, second, expectedDifferences);
        });

        describe('other than primitive array contents', function(){
            var first = testObjectMother.createCharacterWithSpecifiedFriends([ 'wario' ]);
            var second = testObjectMother.createCharacterWithSpecifiedFriends([ 'mario' ]);

            var expectedDifferences = {
                "friends[0]": { reason: "differentValues", firstValue: "wario", secondValue: "mario" }
            }
            

            shouldCompareAndIdentifyDifferencesExist(first, second, expectedDifferences);
        });

        describe('other an array in second object having more items', function(){
            var first = testObjectMother.createCharacterWithSpecifiedFriends([ 'wario' ]);
            var second = testObjectMother.createCharacterWithSpecifiedFriends([ 'mario', 'luigi', 'mushroom princess' ]);

            var expectedDifferences = {
                "friends[0]": { reason: "differentValues", firstValue: "wario", secondValue: "mario" },
                "friends[1]": { reason: "differentValues", firstValue: undefined, secondValue: "luigi" },
                "friends[2]": { reason: "differentValues", firstValue: undefined, secondValue: "mushroom princess" },
            }
            

            shouldCompareAndIdentifyDifferencesExist(first, second, expectedDifferences);
        });


        describe('other an array in first object having more items', function(){
            var first = testObjectMother.createCharacterWithSpecifiedFriends([ 'mario' ]);
            var second = testObjectMother.createCharacterWithSpecifiedFriends([]);

            var expectedDifferences = {
                "friends[0]": { reason: "differentValues", firstValue: "mario", secondValue: undefined },
            }


            shouldCompareAndIdentifyDifferencesExist(first, second, expectedDifferences);
        });

        // TODO - Rethink, use before....
        describe('other order of array contents', function(){
            var first = testObjectMother.createCharacterWithSpecifiedFriends([ 'mario', 'luigi' ]);
            var second = testObjectMother.createCharacterWithSpecifiedFriends([ 'luigi', 'mario' ]);

            var expectedDifferences = {
                "friends[0]": { reason: "differentValues", firstValue: "mario", secondValue: "luigi" },
                "friends[1]": { reason: "differentValues", firstValue: "luigi", secondValue: "mario" },
            }


            shouldCompareAndIdentifyDifferencesExist(first, second, expectedDifferences);
        });
        // When first and second objects are arrays....
        // Array of arrays
    });
});