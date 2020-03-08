import sum from "./sum.mjs";

function _negate(a) {
  return -a;
}

export default function sub(a, b) {
  return sum(a, _negate(b));
}
