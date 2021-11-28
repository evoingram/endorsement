// https://fanzhongzeng78.medium.com/greedy-algorithm-in-javascript-88f2d71edf5d

let testMoney = 6.27;

let currency = {
	hundredDollar: 100.0,
	tenDollar: 10.0,
	fiveDollar: 5.0,
	oneDollar: 1.0,
	quarter: 0.25,
	dime: 0.1,
	nickel: 0.05,
	penny: 0.01
}

let findingChange = (currency, amount) => {
	let resultingBills = {};
	let cashLeftOver = amount;

	for (let key in currency) {
		// while amount leftover is greater than our current bill
		    // subtract it based on the bill value
		while (cashLeftOver >= currency[key]) {
			if (resultingBills[key]) resultingBills[key] += 1;
			else resultingBills[key] = 1;
			cashLeftOver = (cashLeftOver - currency[key]).toFixed(2);
		}
	}
	return resultingBills;
}

findingChange(currency, testMoney);