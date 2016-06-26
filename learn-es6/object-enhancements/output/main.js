'use strict';

function getPerson() {
	var name = 'Jimmy';
	var age = 24;

	return { name: name, age: age };
}

console.log(getPerson().name);