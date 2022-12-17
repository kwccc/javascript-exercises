const fibonacci = function(num) {
  const sequence = [1, 1]

  if (num === 1 || num === 2) {
    return 1
  } else if (num < 0) {
    return 'OOPS'
  }

  while (sequence.length < num) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
  }

  return sequence[sequence.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
