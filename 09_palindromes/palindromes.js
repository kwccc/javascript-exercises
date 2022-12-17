const palindromes = function (string) {
  const letters = [...string.toLowerCase()].filter(letter => /^[a-zA-Z]+$/.test(letter))

  return letters.every((letter, index, array) => letter === array[array.length - 1 - index])
};

// Do not edit below this line
module.exports = palindromes;
