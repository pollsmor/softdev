//We Suck At Calculus - Kevin Li / Derek Leung (Big Buford)
//SoftDev pd2
//K13 -- Ask Circles
//2020-03-30

var namespace = "http://www.w3.org/2000/svg"; //don't want to keep retyping this
var pic = document.getElementById("vimage");
var clearbutton = document.getElementById("clear");

var clear = function() {
  var rect = document.createElementNS(namespace, "rect");
  rect.setAttribute("width", 500);
  rect.setAttribute("height", 500);
  rect.setAttribute("style", "fill:rgb(255,255,255);"); //big brain maneuvers
  pic.appendChild(rect);
}

var draw = function(e) {
  var x = e.offsetX;
  var y = e.offsetY;

  var c = document.createElementNS(namespace, "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 20);
  c.setAttribute("fill", "blue");

  c.addEventListener("click", draw2);
  pic.appendChild(c);
}

var draw2 = function(e) {
  this.setAttribute("fill", "cyan");
  this.addEventListener("click", draw3);
  e.stopPropagation(); //stops parent listeners from being called (aka. don't make a new circle in draw() )
}

var draw3 = function(e) {
  var x = Math.floor(Math.random() * 500);
  var y = Math.floor(Math.random() * 500);

  var c = document.createElementNS(namespace, "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 20);
  c.setAttribute("fill", "blue");

  c.addEventListener("click", draw2);
  pic.appendChild(c); //add new blue circle
  pic.removeChild(this); //remove cyan circle
  e.stopPropagation(); //don't call draw and draw2 again
}

clearbutton.addEventListener("click", clear);
pic.addEventListener("click", draw);
