const sumAll = function(firstNum, lastNum) {
	let sum = 0;
	let startNum = 0;
	let endNum = 0;

	if (firstNum < lastNum) {
		startNum = firstNum;
		endNum = lastNum;
	} else {
		startNum = lastNum;
		endNum = firstNum;
	}

	for (let i = startNum; i <= endNum; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
