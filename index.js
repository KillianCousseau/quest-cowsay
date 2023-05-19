const information = require("./information.js");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `My name is ${information.student.name} and I'm at the ${information.student.campus} campus !`,
    T: "U",
  })
);
