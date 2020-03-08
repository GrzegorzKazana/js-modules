(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === "object" && typeof module === "object") {
    // CommonJS
    module.exports = factory();
  } else if (typeof exports === "object") {
    exports["sum"] = factory();
  } else {
    // Browser globals
    root.app = factory();
  }
})(this, function() {
  function sum(a, b) {
    return a + b;
  }

  return sum;
});
