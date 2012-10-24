object compare
=======
Node.js library for comparing objects.

###Sample
```js
var firstActor = {
    name : {
        first : "Ryan",
        second: "Gossling"
    },
    age: 31,
}

var secondActor = {
    name : {
        first : "Brian",
        second: "Blessed"
    },
    age: 76,
}

var result = objectComparison(firstActor, secondActor)
```
The result object will look like this:
```
{ 
    equal: false,
    differences: { 
        'name.first': { reason: 'differentValues',
                        firstValue: 'Ryan',
                        secondValue: 'Brian' },
        'name.second': { reason: 'differentValues',
                         firstValue: 'Gossling',
                         secondValue: 'Blessed' },
         age: { reason: 'differentValues', firstValue: 31, secondValue: 76 } 
     } 
}
```

###Tests
First install mocha: 

    npm install mocha -g

Run the tests:

    mocha -R spec spec/testFixture spec/ -w -G --recursive

###Examples
To run the examples
    
    node examples/simpleComparison

###Future
* UMD support
* Handle cyclical object graphs
