function applyDiscount(cost, discount = .10) {
	return cost - (cost * discount)
}

console.log(applyDiscount(100))