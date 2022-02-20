const sumAll = function(firstNum, lastNum) {
	let sum = 0;
	for (let i = firstNum; i <= lastNum; i++) {
		sum += i;
	}
	return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
