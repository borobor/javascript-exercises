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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

console.log(subtract(10, 4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
