const repeatString = function(string, num) {
  let buffer = "";

  if (num < 0)
    return "ERROR";
  else 
  {
    for (let i = 0; i < num; i++)
    {
      buffer += string;
    }

    return buffer;
  }
  

};

// Do not edit below this line
module.exports = repeatString;
