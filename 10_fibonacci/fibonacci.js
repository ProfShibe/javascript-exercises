const fibonacci = function(iterations) {
  if (iterations < 0)
    return "OOPS";
  else if (iterations == 0) {
    return 0;
  }
  else {
    let counter = 0;
    let start = 0;
    let end = 1;
    let sum = 0;

    do
    {
        sum = start + end;
        start = end;
        end = sum;
        counter++;
    } 
    while (counter != iterations)

    return start;
  }
};

// Do not edit below this line
module.exports = fibonacci;
