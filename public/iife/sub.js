window.sub = (function() {
  function _negate(a) {
    return -a;
  }

  function sub(a, b) {
    return sum(a, _negate(b));
  }

  return sub;
})();
