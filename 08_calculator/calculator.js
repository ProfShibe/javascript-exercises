const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((sum, a) => sum + a, 0); 

const multiply = (arr) => arr.reduce((sum, num) => sum * num);

const power = (a, b) => a ** b;

const factorial = function(num) {
  if (num === 0)
    return 1;
  else {
      return num * factorial(num - 1);
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
