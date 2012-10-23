var assert = chai.assert;

var assertSpotsPrimitivesDifferent = function(first, second, config) {
    var result;

    beforeEach(function() {
      result = objectComparison(first, second, config);
    });

    it('should identify they are different', function(){
      assert.isFalse(result.equal);
    })

    it('should identify differences is with root objects being compared (not a sub-property)', function(){
      assert.isTrue("" in result.differences);
    });

    it('should identify difference is different values', function(){
      assert.strictEqual("differentValues", result.differences[""].reason);
    })
}