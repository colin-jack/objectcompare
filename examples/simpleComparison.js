var log = require('util').log,
    objectComparison = require('./../objectComparison');

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

log(objectComparison(firstActor, secondActor));