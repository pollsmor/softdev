//Kevin Li & Justin Shaw
//SoftDev1 pd1
//K29 -- Phase III: jsdom
//2019-12-12

var changeHeading = function(e) {
  //console.log(e);
  var h = document.getElementById("h");
  if (e.type === 'mouseover')
    h.innerHTML = this.innerHTML;

  else if (e.type === 'mouseout')
    h.innerHTML = "Hello World!";
};

var removeItem = function(e) {
  if (e.type === 'click')
    this.remove();
};

var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', changeHeading);

  lis[i].addEventListener('mouseout', changeHeading);
  lis[i].addEventListener('click', removeItem);
}

var addItem = function(e) {
  if (e.type === 'click') {
    var list = document.getElementById("thelist");
    var item = document.createElement("li");
    item.innerHTML = "WORD";
    item.addEventListener('mouseover', changeHeading);
    item.addEventListener('mouseout', changeHeading);
    item.addEventListener('click', removeItem);
    list.appendChild(item);
  }
};

var button = document.getElementById("b");
button.addEventListener('click', addItem);

var fib = function(n) {
  if (n === 0) return 0;
  if (n < 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

var fibInput = 0;
var addFib = function(e) {
  if (e.type === 'click') {
    var list = document.getElementById("fiblist");
    var item = document.createElement("li");
    item.innerHTML = fib(fibInput++).toString();
    list.appendChild(item);

  }
};

var fb = document.getElementById("fb");
fb.addEventListener('click', addFib);

var fib2 = function(n) {
  var fibs = [0, 1];

  if (n === 0 || n === 1)
    return n;

  for (var i = 2; i <= n + 1; i++) {
    fibs.push(fibs[i - 2] + fibs[i - 1]);
  }

  return fibs[n];
}

var fib2Input = 0;
var addFib2 = function(e) {
  //console.log(e);
  if (e.type === 'click') {
    var list = document.getElementById("fib2list");
    var item = document.createElement("li");
    item.innerHTML = fib2(fib2Input++).toString();
    list.appendChild(item);

  }
};

var fb2 = document.getElementById("fb2");
fb2.addEventListener('click', addFib2);

var fact = function(n) {
  if (n < 2)
		return 1;

	return n * fact(n - 1);
};

var factInput = 1;
var addFact = function(e) {
  if (e.type === 'click') {
    var list = document.getElementById("factlist");
    var item = document.createElement("li");
    item.innerHTML = fact(factInput++).toString();
    list.appendChild(item);

  }
};

var factb = document.getElementById("factb");
factb.addEventListener('click', addFact);
