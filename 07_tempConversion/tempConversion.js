const ftoc = function(f) {
	let celsius = (f - 32) * (5/9);
	if (celsius == 0 || celsius % Math.round(celsius) == 0) return celsius;
	else return Math.round(celsius*10)/10;
};

const ctof = function(c) {
	let fahrenheit = c * (9/5) + 32;
	if (fahrenheit == 0 || fahrenheit % Math.round(fahrenheit) == 0) return fahrenheit;
	else return Math.round(fahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
