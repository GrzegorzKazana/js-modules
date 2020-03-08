(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["sum"], factory);
  } else if (typeof exports === "object" && typeof module === "object") {
    // CommonJS
    module.exports = factory(require("./sum"));
  } else if (typeof exports === "object") {
    exports["sub"] = factory(require("./sum"));
  } else {
    // Browser globals
    root.app = factory();
  }
})(this, function(sum) {
  function _negate(a) {
    return -a;
  }

  function sub(a, b) {
    return sum(a, _negate(b));
  }

  return sub;
});
