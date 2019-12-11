//Kevin Li
//SoftDev1 pd1
//K28 -- Interactive JS
//2019-12-11

var factorial = function(n) {
  if (n < 2)
		return 1;

	return n * factorial(n - 1);
};

var fibonacci = function(n) {
	if (n == 0)
		return 0;

	else if (n == 1)
		return 1;

	return fibonacci(n - 1) + fibonacci(n - 2);
}

//Helper function for gcd
var min = function(a, b) {
	if (a >= b)
		return a;

	return b;
}

var gcd = function(a, b) {
	if (a % b == 0) //can early end the function if a is a factor of b
		return b;

	else if (b % a == 0) //vice versa pf above
		return a;

	var minimum = min(a, b); //count down from here to find gcd
	while (a % minimum != 0 || b % minimum != 0) {
		minimum--;
	}

	if (minimum <= 0) //if the factor is indeed 1 then -- would've made it 0.
		return 1;

	return minimum;
}

var list = ["Kevin", "Yevgeniy", "Jesse", "Pratham"]; //for testing randomStudent()

var randomStudent = function() {
  var idx = Math.floor(Math.random() * list.length); //random: 0 to 1, floor: nearest int rounded down
  console.log(list[idx]);
  return list[idx];
}

//==================================================
var factorialDOM = document.getElementById('factorial');
factorialDOM.addEventListener('click', function() {
  var num = factorial(5);
  console.log(num);
});

var fibonacciDOM = document.getElementById('fibonacci');
fibonacciDOM.addEventListener('click', function() {
  var num = fibonacci(6);
  console.log(num);
});

var gcdDOM = document.getElementById('gcd');
gcdDOM.addEventListener('click', function() {
  var num = gcd(12, 28);
  console.log(num);
});

var randomStudentDOM = document.getElementById('randomStudent');
randomStudentDOM.addEventListener('click', randomStudent);
