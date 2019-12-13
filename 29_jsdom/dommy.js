//Kevin Li & Justin Shaw
//SoftDev1 pd1
//K29 -- Phase III: jsdom
//2019-12-12

var changeHeading = function(e) {
  //console.log(e);
  var h = document.getElementById("h");
  if (e.type === 'mouseover')
    h.innerHTML = e.target.innerHTML;

  else if (e.type === 'mouseout')
    h.innerHTML = "Hello World!";
};

var removeItem = function(e) {
  if (e.type === 'click')
    e.target.remove();
};

var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', changeHeading);

  lis[i].addEventListener('mouseout', changeHeading);
  lis[i].addEventListener('click', removeItem);
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

/*
var button = document.getElementById("b");
button.addEventListener('click', addItem);

var fib = function(n) {
  if (n < 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
*/

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
