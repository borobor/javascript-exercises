const findTheOldest = function(arr) {
	let yearNow = new Date().getFullYear();
	arr.forEach(person => {
		if (!person.yearOfDeath) person.yearOfDeath = yearNow;
		let yearsLived = person.yearOfDeath - person.yearOfBirth;
		person['yearsLived'] = yearsLived;
		});
	arr.sort((a, b) => {
		let thisPerson = a.yearOfDeath - a.yearOfBirth;
		let thatPerson = b.yearOfDeath - b.yearOfBirth;
		return thatPerson - thisPerson;
		});
	return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
