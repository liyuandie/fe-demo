import { testFunc, testMul } from "../../src/utils/math";
var assert = require("assert");

describe("math", function() {
  describe("#testFunc()", function() {
    it("1 + 2 == 3", function() {
      assert.equal(testFunc(1, 2), 3);
    });
    it("1 + 3 == 4", function() {
      assert.equal(testFunc(1, 3), 4);
    });
  });

  describe("#testMul()", function() {
    it("6 / 2 == 3", function() {
      assert.equal(testMul(6, 2), 3);
    });
  });
});
