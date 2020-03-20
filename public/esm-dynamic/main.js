import sum from "./sum.js";

const sumText = document.getElementById("add");
const subText = document.getElementById("sub");

sumText.innerText = `2 + 2 = ${sum(2, 2)}`;

setTimeout(() => {
  import("./sub.js")
    .then(({ default: sub }) => (subText.innerText = `2 - 2 = ${sub(2, 2)}`))
    .catch(e => (subText.innerText = `2 - 2 = ${e.message}`));
}, 2000);
