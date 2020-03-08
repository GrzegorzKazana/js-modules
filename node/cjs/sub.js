const sum = require("./sum");

function _negate(a) {
  return -a;
}

function sub(a, b) {
  return sum(a, _negate(b));
}

module.exports = sub;
