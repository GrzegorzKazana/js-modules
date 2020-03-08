System.register([], function(exports, context) {
  function sum(a, b) {
    return a + b;
  }

  exports("sum", sum);

  return { execute: function() {} };
});
