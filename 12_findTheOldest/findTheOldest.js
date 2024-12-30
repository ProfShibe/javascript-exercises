const findTheOldest = function(arr) {
  let this_year = new Date().getFullYear();
  let oldest_age = 0;
  let oldest_person = "";

  arr.forEach(element => {
    if (typeof element.yearOfDeath === "undefined") {
        age = this_year - element.yearOfBirth;
    } 
    else {
        age = element.yearOfDeath - element.yearOfBirth;
    }

    if (age > oldest_age) {
      oldest_age = age;
      oldest_person = element;
    }
  });

  return oldest_person;
};

// Do not edit below this line
module.exports = findTheOldest;
