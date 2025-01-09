const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (date == undefined) {
		return 'Unable to determine the time of year!';
	}

	if (Object.getOwnPropertyNames(date).length) {
		throw new Error('Invalid date!');
	}

	if (!isNaN(Date.parse(date))) {
		let curMonth = date.getMonth();
		console.log(curMonth)

		if (curMonth == 11 || curMonth <= 1) {
			return 'winter'
		}

		if (curMonth >= 2 && curMonth <= 4) {
			return 'spring'
		}

		if (curMonth >= 5 && curMonth <= 7) {
			return 'summer'
		}

		if (curMonth >= 8 && curMonth <= 10) {
			return 'autumn'
		}
	}
	
	throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
