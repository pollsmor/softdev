var factorial = function(n) {
  if (n < 2) {
		return 1;
	}

	return n * factorial(n - 1);
};

var fibonacci = function(n) {
	if (n == 0)
		return 0;

	else if (n == 1) 
		return 1;

	return fibonacci(n - 1) + fibonacci(n - 2);
}

var min = function(a, b) {
	if (a >= b)
		return a;

	return b;
}

var gcd = function(a, b) {
	if (a % b == 0)
		return b;

	else if (b % a == 0)
		return a;

	var minimum = min(a, b);
	while (a % minimum != 0 || b % minimum != 0 || minimum == 1) {
		minimum--;
	} 

	if (minimum <= 0)
		return 1;

	return minimum;
}


