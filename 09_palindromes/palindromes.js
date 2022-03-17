const palindromes = function (palindrome) {
	let reversed = Array.from(palindrome).reverse().join('');
	return palindrome === reversed;
};

// Do not edit below this line
module.exports = palindromes;
