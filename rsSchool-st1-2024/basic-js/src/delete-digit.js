const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arrNum = num.toString().split('').map(Number);
	return Math.max(...arrNum.map((item, i) => {
		let newArr = arrNum.slice(); 
		newArr.splice(i, 1); 
		return Number(newArr.join(''));
	}));
}

module.exports = {
  deleteDigit
};
