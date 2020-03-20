import sum from "./sum.js";

function _negate(a) {
  return -a;
}

export default function sub(a, b) {
  return sum(a, _negate(b));
}
