// modules protect their variables and functions from leaking
require("./hello.js");

const { x, calculateSum } = require("./calculate/sum.js");
const { calculateMultiplication } = require("./calculate/multiply.js");

const a = 10;
const b = 20;

calculateSum(a, b);

calculateMultiplication(a, b);
console.log(x);
