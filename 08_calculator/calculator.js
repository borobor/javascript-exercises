const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let result = arr.reduce((total, number) => total + number, 0);
	return result;	
};

const multiply = function(arr) {
	let result = arr.reduce((total, number) => total * number, 1);
	return result;	
};


//tried using something different instead of ** or Math.pow()
const power = function(a, b) {
	let num = a;
	for (i = 1; i < b; i++) {
		a *= num;
	}
	return a;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
