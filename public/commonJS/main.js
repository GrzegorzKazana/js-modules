const sum = require("./sum");
const sub = require("./sub");

const sumText = document.getElementById("add");
const subText = document.getElementById("sub");

sumText.innerText = `2 + 2 = ${sum(2, 2)}`;
subText.innerText = `2 - 2 = ${sub(2, 2)}`;
