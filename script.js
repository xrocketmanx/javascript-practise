var solve = function (problem, name) {
	var limit = document.getElementById(name + "-limit").value;
	if (limit == "") {
		alert("Limit value is missing");
		return;
	}

	var result = problem(limit);

	document.getElementById(name + "-result").value = result;
}

var multiplesSum = function (limit) {
	var sum = 0;
	for (var i = 0; i < limit; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
};

var fibonachiSum = function (limit) {
	var previous = 1;
	var current = 1;
	var sum = 0;
	while (current < limit) {
		if (current % 2 == 0) {
			sum += current;
		}
		current += previous;
		previous = current - previous;
	}
	return sum;
}

var largestPrime = function (limit) {
	var divisor = 2;
	while (!isPrime(limit)) {
		while (limit / divisor != 1 && limit % divisor === 0) {
			limit /= divisor;
		}
		divisor++;
	}
	return limit;
}

var isPrime = function (n) {
	if (n == 1) return true; 
	if (n % 2 == 0) return (n == 2);
	if (n % 3 == 0) return (n == 3);
	var m = Math.sqrt(n);
	for (var i = 5; i <= m; i += 6) {
		if (n % i == 0)     return false;
		if (n % (i + 2) == 0) return false;
	}
	return true;
}