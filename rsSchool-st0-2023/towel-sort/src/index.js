
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix !== undefined) {
		let arr = matrix.map((item, index) => {
			if (index % 2 !== 0) {
				return item.reverse();
			}
			return item;
		});
		return arr.flat();
	} else {
		return [];
	}
}
