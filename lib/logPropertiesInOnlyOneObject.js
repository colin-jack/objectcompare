var logPropertiesInOnlyOneObject = function(first, second, failureLogger) {
    var firstKeys = Object.keys(first);
    var secondKeys = Object.keys(second);
    var propertiesInBoth = _.intersection(firstKeys, secondKeys);

    var inFirstNotSecond = _.difference(firstKeys, propertiesInBoth);
    var inSecondNotFirst = _.difference(secondKeys, propertiesInBoth);

    logAnyKeysThatOnlyInObject(inFirstNotSecond, first, second, differenceType.valueOnlyInFirstObject, failureLogger);
    logAnyKeysThatOnlyInObject(inSecondNotFirst, first, second, differenceType.valueOnlyInSecondObject, failureLogger);

    return propertiesInBoth;
}

var logAnyKeysThatOnlyInObject = function(propertiesOnlyInMain, first, second, difference, failureLogger) {
    if (propertiesOnlyInMain.length === 0) return;

    propertiesOnlyInMain.forEach(function(property) {
        failureLogger.logDifference(property, first[property], second[property], difference);
    });
}