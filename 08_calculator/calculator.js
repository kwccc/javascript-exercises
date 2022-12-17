const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((cumulative, element) => cumulative + element, 0)
};

const multiply = function(array) {
  return array.reduce((cumulative, element) => cumulative * element, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1
  }

  let sum = 1

  while (num > 1) {
    sum *= num
    num--
  }

  return sum
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
