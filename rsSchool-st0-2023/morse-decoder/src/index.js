const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
		' ':      ' ',
};

function decode(expr) {
	let str = '';
	let space = '**********';
	let size = 10;
	let arr = [];
	for (i = 0; i < Math.ceil(expr.length/size); i++) {
			arr[i] = expr.slice((i*size), (i*size) + size)
	};
	
	let twoArr = arr.map(item => {
		if (item == space) {
			return ' ';
		} else {
			return String(+item).replace(/10/g, '.');
		}
	});

	let threeArr = twoArr.map(item => {
		return item.replace(/11/g, '-');
	});

	let fourArr = threeArr.map(item => {
		str += MORSE_TABLE[item];
	});
	return str;
}



module.exports = {
    decode
}