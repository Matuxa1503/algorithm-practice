const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (Array.isArray(members)) {
		let res = '';
    let trimArr = [];
    members.forEach(name => {
      if (typeof name == 'string') {
          trimArr.push(name.trim().toUpperCase());
      }
    });

		trimArr.sort().forEach(name => {
			res += name[0];
		});
		return res
	}
	return false;
}

module.exports = {
  createDreamTeam
};
