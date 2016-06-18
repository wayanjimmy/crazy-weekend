"use strict";

function applyDiscount(cost) {
	var discount = arguments.length <= 1 || arguments[1] === undefined ? .10 : arguments[1];

	return cost - cost * discount;
}

console.log(applyDiscount(100));