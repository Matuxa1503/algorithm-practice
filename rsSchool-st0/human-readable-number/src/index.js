module.exports = function toReadable (number) {
	let res;
	const oneDigit = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen','hundred'];
	const twoDigit = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
	
	// Числа до 20
	if (number < 20) {
		res = oneDigit[number];
	}


// Числа от 20 до 100
	if (number > 19 && number < 100) {
		if (Math.trunc(number / 10) > 1) {
			res = twoDigit[Math.trunc(number / 10 - 2)] + ' ' + oneDigit[String(number)[1]];
		}

		if (number / 10 == String(number)[0]) {
			res = twoDigit[Math.trunc(number / 10 - 2)];
		}
	}


// Числа от 100 до 999
	if (number > 99) {
		let numStr = +String(number).slice(1);
		let numStrTwo = String(number);
		res = oneDigit[numStrTwo[0]] + ' ' + oneDigit[20];

		if (numStr > 0 && numStr < 20) {
			res+= ' ' + oneDigit[numStr];
		}
		
		if (numStr > 20) {
			res += ' ' + twoDigit[Math.trunc((numStr / 10) - 2)] + ' ' + oneDigit[numStrTwo[2]];
		}

		if (number / 10 == +numStrTwo.slice(0,2) && numStr > 10) {
			res = oneDigit[numStrTwo[0]] + ' ' + oneDigit[20] + ' ' + twoDigit[+String(Math.trunc(number / 10 - 2))[1]];
		}
	}

	return res
}
