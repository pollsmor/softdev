//Kevin Li & Justin Shaw
//SoftDev1 pd1
//K29 -- Phase III: jsdom
//2019-12-12

var changeHeading = function(e) {
  var h = document.getElementById("h");
  //h.innerHTML = ???
};

var removeItem = function(e) {
  ???
};

var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
  //lis[i].addEventListener('mouseover', ???);
  //lis[i].addEventListener('mopuseout', ???);
  //lis[i].addEventListener('click', ???);
}

/*
var addItem = function(e) {
  var list = ???
  var item = document.createElement("li");
  ??? = "WORD";
  ???
  ...
  ???
  list.???(item);
};
*/

var button = document.getElementById("b");
button.addEventListener('click', addItem);

var fib = function(n) {
  if (n < 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

/*
var addFib = function(e) {
  console.log(e);
  ???
  ...
  ???
};
*/

/*
var addFib2 = function(e) {
  console.log(e);
  ???
  ...see QAF re: DYNAMIC PROGRAMMING...
  ???
};

var fb = document.getElementById("fb");
fb.addEventListener('click', addFib);
*/
