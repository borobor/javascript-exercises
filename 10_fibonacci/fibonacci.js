const fibonacci = function(num) {
	num = +num;
	let sequence = [1, 1];
	if (num < 0) return "OOPS";
	if (num <= 1) return 1;
	if (num > 1) { 
		for (let i = 2; i < num; i++) {
			let last = sequence.slice(-1);
			let secondLast = sequence.slice(-2, -1);
			let newFib = +last + +secondLast;
			sequence.push(newFib);
		}
	}	return +sequence.slice(-1);
};

// Do not edit below this line
module.exports = fibonacci;
