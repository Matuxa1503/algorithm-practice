module.exports = function reverse (n) {
	// return parseInt(/./g[Symbol.match](String(n)).reverse().join(""));
	let str = String(n);
	let strReverse = str.split("").reverse().join("");
	return parseInt(strReverse);
}
