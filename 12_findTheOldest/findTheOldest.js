const findTheOldest = function(arr) {
	return arr.reduce(function (oldest, currentPerson) {
		const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
		const currentPersonAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
		return (oldestAge > currentPersonAge) ? oldest : currentPerson;
	})
};

const getAge = function(death, birth) {
	return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
