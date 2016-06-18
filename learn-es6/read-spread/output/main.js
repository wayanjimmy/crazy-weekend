function sum(...numbers) {
	return numbers.reduce((prev, next) => prev + next);
}

console.log(sum(1, 2, 3));