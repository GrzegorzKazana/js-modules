(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["sum", "sub"], factory);
  } else if (
    typeof exports === "object" &&
    typeof exports.nodeName !== "string"
  ) {
    // CommonJS
    factory(exports, require("sum"), require("sub"));
  } else {
    // Browser globals
    root.app = factory(root.sum, root.sub);
  }
})(this, function(sum, sub) {
  const sumText = document.getElementById("add");
  const subText = document.getElementById("sub");

  sumText.innerText = `2 + 2 = ${sum(2, 2)}`;
  subText.innerText = `2 - 2 = ${sub(2, 2)}`;
});
