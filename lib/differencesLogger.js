var differenceType = require('./differenceType');

var logDifference = function(propertyPath, firstValue, secondValue, reason) {
    var difference = {
        reason : reason,
        firstValue : firstValue, 
        secondValue : secondValue
    }       

    this.differences = this.differences || {};
    this.differences[propertyPath] = difference;
}

var logPrimitivesHaveDifferentValue = function(propertyPath, firstValue, secondValue) {
    this.logDifference(propertyPath, firstValue, secondValue, differenceType.differentValues);
}

var logCreatedUsingDifferentConstructors = function(propertyPath, firstValue, secondValue) {
    this.logDifference(propertyPath, firstValue, secondValue, differenceType.differentConstructor);
}

var getResult = function() {
    if (this.differences === undefined || this.differences.length === 0) {
        return {
            equal : true,
            differences: []
        }
    }

    return {
        equal : false,
        differences : this.differences
    }
};

module.exports = {
    logDifference : logDifference,
    logPrimitivesHaveDifferentValue : logPrimitivesHaveDifferentValue,
    logCreatedUsingDifferentConstructors : logCreatedUsingDifferentConstructors,

    getResult: getResult
}