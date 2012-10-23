var log = require('util').log,
    inspect = require('util').inspect,
    objectComparison = require('./../lib/objectComparison');

var firstActor = {
    name : {
        first : "Ryan",
        second: "Gossling"
    },
    age: 31,
    occupation: ['Actor']
}

var secondActor = {
    name : {
        first : "Brian",
        second: "Blessed"
    },
    age: 76,
    occupation: ['Actor', 'author', 'director', 'TV presenter']
}

var result = objectComparison(firstActor, secondActor)
log(inspect(result));