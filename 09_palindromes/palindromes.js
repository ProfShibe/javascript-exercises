const palindromes = (str) => {
  cleaned_str = str.split(/[^a-zA-Z0-9]/).join('').toLowerCase();
  return cleaned_str === cleaned_str.split('').reverse().join('');
}

// Do not edit below this line
module.exports = palindromes;
