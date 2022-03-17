const palindromes = function (palindrome) {
	let cleanArr = palindrome
						.toLowerCase()
						.split('')
						// .filter(char => char >= 'a' && char <= 'z');
						.filter(char => /[a-z]/.test(char));
	let cleanString = cleanArr.join('');
	let reversedString = cleanArr.reverse().join('');
	
	return cleanString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
