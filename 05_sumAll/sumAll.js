const sumAll = function(a, b) {
  if (typeof(a) != "number" || typeof(b) != "number") {
    return "ERROR";
  }
  else if (a < 0 || b < 0) {
      return "ERROR";
  }
  else if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  else {
    let sum = 0;
    for (let i = 0; i < a + b; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
