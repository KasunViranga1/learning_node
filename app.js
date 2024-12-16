// modules protect their variables and functions from leaking
require("./hello.js");

//instead of importing calculateSum and calculateMultiplication create a
// index.js and use require , we dont have to speciry the index.js as it automatically find it
const { calculateMultiplication, calculateSum } = require("./calculate");

// const { x, calculateSum } = require("./calculate/sum.js");
// const { calculateMultiplication } = require("./calculate/multiply.js");

const a = 10;
const b = 20;

calculateSum(a, b);

calculateMultiplication(a, b);
// console.log(x);
