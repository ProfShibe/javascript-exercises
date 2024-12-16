const reverseString = function(string) {
  let buffer = "";

  for (let i = 1; i < string.length + 1; i++) {
    buffer += string[string.length - i];
  }

  return buffer;
};

// Do not edit below this line
module.exports = reverseString;
