# Exercise 07 - tempConversion

Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
```
ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32
```

Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `ftoc(100)` should return `37.8` and not `37.77777777777778`.

This exercise asks you to create more than one function so the `module.exports` section of the spec file looks a little different this time.  Nothing to worry about, we're just packaging both functions into a single object to be exported.

## Hints
- You can find the relevant formulae on [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

- Try to find by yourself on the Internet how to round a number to 1 decimal place in JavaScript. If you struggle, have a look [here](https://stackoverflow.com/q/7342957/5433628).

## UPDATE AFTER FINISHING!
The formula itself wasn't a problem, but rounding the result to one decimal was.
First I tried with using .toFixed(1) but that returns the results as a string (not good) and also adds the decimal point even if the results is an integer (e.g. 10 becomes 10.0, also not good).
Now I had to add unary operator + to the result to convert it to a number. Using Number() also works as well as parseFloat()
And I wrote another line of code above which checks if a result is 0 or if it's a integer. If any of those conditions is true then return the result as is without going to the .toFixed(1) part. And it works!

But, with further reading I saw that the preferred way to do the rounding is by using Math.round(n * 10)/10; since it avoid the double conversion from number -> string (.toFixed()) -> number (using +, Number or parseFloat).
And, albeit too late, I realised that the above method using Math.round removes the need for checking if the result is 0 or if it's an integer (lines 3 and 9 in the code)..

So, finally, the solution of CtoF with rounding to 1 decimal point would simply be written: 
const ftoc = function(f) {
  let celsius = (f - 32) * (5/9);
	return Math.round(celsius*10)/10;
};

Oh well, but I did learn a lot!
