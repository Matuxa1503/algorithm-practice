const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	encrypt(str1, str2) {
		if (typeof str1 == 'string' && typeof str2 == 'string') {
      let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      let arrNum1 = str1
        .split('')
        .map(item => {
        if (alphabet.indexOf(item.toLowerCase()) >= 0) {
          return alphabet.indexOf(item.toLowerCase())
        } else {
          return item
        }
      });

      
      let arr = str2.split('');
      let arrNum2 = [...arr];
          arr.forEach(item => {
          if (arrNum1.length > arrNum2.length) {
            arrNum2.push(item)
          }
        })
				
      let arrNum3 = arrNum2.map(item => {
      if (alphabet.indexOf(item.toLowerCase()) >= 0) {
        return alphabet.indexOf(item.toLowerCase())
      } else {
        return item
      }
      });

      let arrResult = [];
      for (let i = 0; i < arrNum1.length; i++) { 
        if (typeof arrNum1[i] == 'string') {
          arrResult.push(arrNum1[i])
        } else if (arrNum1[i] + arrNum3[i] > 26) {
          arrResult.push(arrNum1[i] + arrNum3[i] - 26)
        } else {
          arrResult.push(arrNum1[i] + arrNum3[i])
          }
      }
      console.log(arrNum1, arrNum3)
      let result = []
      arrResult.forEach(item => {
        if (alphabet[item]) {
          console.log(alphabet[item])
          result.push(alphabet[item].toUpperCase())
        } else {
          result.push(item)
        }
      })
      
    } else {
      throw new Error('Incorrect arguments!');
    }
	}
	
	decrypt(str1, str2) {
		if (typeof str1 == 'string' && typeof str2 == 'string') {
			console.log('da')
		}
		throw new Error('Incorrect arguments!');
	}
}

module.exports = {
  VigenereCipheringMachine
};
