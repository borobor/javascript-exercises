const fibonacci = function(num) {
	if (num < 0) return "OOPS";
	if (num == 0) return 0;
	let sequence = [0, 1];
	for (let i = 1; i < num; i++) {
		let last = sequence.slice(-1);
		let secondLast = sequence.slice(-2, -1);
		let newFib = +last + +secondLast;
		sequence.push(newFib);
		}
	return +sequence.slice(-1);
};

// Do not edit below this line
module.exports = fibonacci;
