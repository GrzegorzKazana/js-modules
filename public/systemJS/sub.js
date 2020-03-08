System.register(["sum"], function(exports, context) {
  let sum;

  function _negate(a) {
    return -a;
  }

  function sub(a, b) {
    return sum(a, _negate(b));
  }

  exports("sub", sub);

  return {
    setters: [
      function(m) {
        console.log("loaded sum in sub");
        sum = m.sum;
      }
    ],
    execute: function() {}
  };
});
