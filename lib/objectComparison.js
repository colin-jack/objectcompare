var getConfigIncludingDefaults = function(config) {
    var defaults = {
        nullUndefinedEquiv: false
    }

    return config ? _.defaults(config, defaults) : defaults;
}

var bothAreObjects = function(first, second) {
return (first instanceof Object) && (second instanceof Object);
} 

var nullOrUndefinedAndConsideredEqual = function(first, second, config) {
    if (!config.nullUndefinedEquiv) return false;
        
    return (first === null && second === undefined || second === null && first === undefined);
};

var getSubPropertyPath = function(parentPath, propertyName) {
    return parentPath === "" ? propertyName 
                             : parentPath + "." + propertyName;
}

var compareProperties = function(first, second, parentsPath, config, diffLogger) {
    var propertiesInBoth = logPropertiesInOnlyOneObject(first, second, diffLogger);

    _.each(propertiesInBoth, function(subProperty) {
        var valueFromFirst = first[subProperty];
        var valueFromSecond = second[subProperty];

        var subPropertyPath = getSubPropertyPath(parentsPath, subProperty);

        performRecursiveComparison(valueFromFirst, valueFromSecond, subPropertyPath, config, diffLogger)        
    });
}

var compareArrayContents = function(first, second, pathToArray, config, diffLogger) {
    var maxLength = first.length > second.length ? first.length : second.length;

    for (var i = 0; i < maxLength; i++) {
        var fromFirst = first[i];
        var fromSecond = second[i];

        var itemPath = pathToArray + "[" + i + "]";

        performRecursiveComparison(fromFirst, fromSecond, itemPath, config, diffLogger)        
    }
}

var performRecursiveComparison = function(first, second, propertyPath, config, diffLogger) {
    if (first === second) {
        return;
    }

    if (nullOrUndefinedAndConsideredEqual(first, second, config)) {
        return;
    };

    if (first instanceof Function || bothAreObjects(first, second) === false) {
        diffLogger.logPrimitivesHaveDifferentValue(propertyPath, first, second);
        return;
    }

    if (first.constructor !== second.constructor) {
       diffLogger.logCreatedUsingDifferentConstructors(propertyPath, first, second);
       return;
    } 

    if (Array.isArray(first)) {
        compareArrayContents(first, second, propertyPath, config, diffLogger);
        return;
    }

    compareProperties(first, second, propertyPath, config, diffLogger);
}

// Performs the comparison and returns an object with property 'equal' and a 'differences' object. Each property of the 
// differences object will have a key that's the path to the property that didn't match, for example "name.first". The
// value gives more information about the difference found.
var objectComparison = function(first, second, config) {
    config = getConfigIncludingDefaults(config);

    var diffLogger = Object.create(differencesLogger);

    performRecursiveComparison(first, second, "", config, diffLogger);

    return diffLogger.getResult();
}