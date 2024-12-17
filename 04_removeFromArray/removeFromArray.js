const removeFromArray = function(array, ...num) {
  for (const number of num) {
    while (array.indexOf(number) != -1) {
      let index = array.indexOf(number);
      array.splice(index, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
