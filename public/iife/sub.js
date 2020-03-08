(function() {
  function _negate(a) {
    return -a;
  }

  window.sub = function(a, b) {
    return sum(a, _negate(b));
  };
})();
