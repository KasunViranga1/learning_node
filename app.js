// modules protect their variables and functions from leaking
require("./hello.js");

const { x, calculateSum } = require("./sum.js");

const a = 10;
const b = 20;

calculateSum(a, b);
console.log(x);
