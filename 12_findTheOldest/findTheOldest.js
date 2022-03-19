const findTheOldest = function(arr) {
	const oldest = arr.sort(function(a, b) {
		const lastPerson = a.yearOfDeath - a.yearOfBirth;
		const nextPerson = b.yearOfDeath - b.yearOfBirth;
		return (nextPerson - lastPerson);
	});
	return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
