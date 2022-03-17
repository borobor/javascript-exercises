const palindromes = function (palindrome) {
	let arr = Array.from(palindrome);
	let reversedArr = arr.reverse();
	let reversed = reversedArr.join('');
	return palindrome == reversed;
};

// Do not edit below this line
module.exports = palindromes;
