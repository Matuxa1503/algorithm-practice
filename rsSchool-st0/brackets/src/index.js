module.exports = function check(str, bracketsConfig) {
  let arrStack = [];
	let brackets = {
		")": "(",
		"]": "[",
		"}": "{",
		"|": "|",
		"2": "1",
		"4": "3",
		"6": "5",
		"7": "7",
		"8": "8",
	};

	for (let i = 0; i < str.length; i++) {
		const symbol = str[i];

		if (isClosedBrackets(symbol)) {
			if (brackets[symbol] !== arrStack.pop()) return false;
		} else {
			arrStack.push(symbol);
		}
	}

	function isClosedBrackets(letter) {
		if (!isNaN(letter)) {
			if (letter <= 6) {
				return arrStack[arrStack.length - 1] == letter - 1
			} else {
				return arrStack[arrStack.length - 1] == letter
			}
		}

		if (letter === "|") {
			return arrStack.includes(letter)
		} else {
			return [')', ']', '}'].indexOf(letter) > -1
		}
	}

	return arrStack.length == 0;
}
