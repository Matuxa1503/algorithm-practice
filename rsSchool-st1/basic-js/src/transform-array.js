const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }

  const arrValues = ['--discard-prev', '--double-prev', '--discard-next', '--double-next'];
  const currentArr = [...arr];

  if (arr.length == 0) {
    return []
  }

  if (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev')) {
    return arr;
  }

  arrValues.forEach(value => {
    if (currentArr.indexOf(value) == 0) {
      currentArr.shift()
    }

    if (currentArr.indexOf(value) == currentArr.length - 1) {
      currentArr.pop()
    }
  });
  return currentArr
}

module.exports = {
  transform
};
