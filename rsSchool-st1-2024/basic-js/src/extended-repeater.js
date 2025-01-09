const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let arr = [];
	for (let i = 0; i < options.repeatTimes; i++) {
		arr.push(str);
	}

	if (options.addition != null && options.addition[Symbol.toPrimitive]) {
		let strPrimitive = options.addition[Symbol.toPrimitive](str);
		let newArr = arr.map(item => {
			return item += strPrimitive;
		});

		return newArr.join("+");
	}


	if (!options.repeatTimes) {
		str += options.addition;
		return str;
	}

	if (options.addition && options.additionRepeatTimes && !options.separator && !options.additionSeparator) {
		let newArr = arr.map(item => {
			for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
				item += options.addition + '|';
			}
			item += options.addition;
			return item;
		});

		return newArr.join('+');
	}

	if (options.addition && options.additionRepeatTimes && options.separator && !options.additionSeparator) {
		let newArr = arr.map(item => {
			for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
				item += options.addition + '|';
			}
			item += options.addition;
			return item;
		});

		return newArr.join(options.separator);
	}

	if (options.addition && options.additionRepeatTimes && !options.separator && options.additionSeparator) {
		let newArr = arr.map(item => {
			for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
				item += options.addition + options.additionSeparator;
			}
			item += options.addition;
			return item;
		});

		return newArr.join('+');
	}

	if (options.separator && !options.addition && !options.additionSeparator && !options.additionRepeatTimes) {
		return arr.join(options.separator);
	}

	if (options.separator && options.addition && !options.additionSeparator && options.additionRepeatTimes) {
		let newArr = arr.map(item => {
			return item += options.addition;
		});

		return newArr.join(options.separator);
	}



	if (options.separator && String(options.addition) && options.additionSeparator && options.additionRepeatTimes) {
		let newArr = arr.map(item => {
			for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
				item += options.addition + options.additionSeparator;
			}
			item += options.addition;
			return item;
		});

		return newArr.join(options.separator);
	}

	if (!options.separator) {
		return arr.join("+");
	}
}

module.exports = {
  repeater
};
