System.register(["sum", "sub"], function(exports, context) {
  let sum, sub;
  return {
    setters: [
      function(m) {
        console.log("sum loaded");
        sum = m.sum;
      },
      function(m) {
        console.log("sub loaded");
        sub = m.sub;
      }
    ],
    execute: function() {
      console.log("executing");
      const sumText = document.getElementById("add");
      const subText = document.getElementById("sub");

      sumText.innerText = `2 + 2 = ${sum(2, 2)}`;
      subText.innerText = `2 - 2 = ${sub(2, 2)}`;
    }
  };
});
