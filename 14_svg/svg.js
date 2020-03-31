//No Ivies Club - Kevin Li / Raymond Lee
//SoftDev pd2/pd1
//K14 -- Ask Circles While Moving
//2020-03-31

var namespace = "http://www.w3.org/2000/svg"; //don't want to keep retyping this
var pic = document.getElementById("vimage");
var animationID;
var directions = [-1, 1]; //pick one of the two for directionX and directionY: -1 for left and up, 1 for right and down.

var clearbutton = document.getElementById("clear");
var movebutton = document.getElementById("move");
var xtrabutton = document.getElementById("xtra");

var clear = function() {
  var curr = pic.firstChild;
  while (curr) {
    pic.removeChild(curr);
    curr = pic.firstChild;
  }
}

var draw = function(e) {
  if (e.target == pic) {
    var x = e.offsetX;
    var y = e.offsetY;

    var c = document.createElementNS(namespace, "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "blue");

    pic.appendChild(c);
  }
}

var move = function(e) {
  cancelAnimationFrame(animationID);
	animationID = requestAnimationFrame(move);

  var circles = pic.children;
  for (var i = 0; i < circles.length; i++) {
    var directionX, directionY;
    var moving = circles[i].getAttribute("moving");
    if (moving !== "true") { //don't want it to change directions once it has started moving
      circles[i].setAttribute("moving", "true");
      directionX = directions[Math.floor(Math.random() * 2)]; //choose to go left or right
  		directionY = directions[Math.floor(Math.random() * 2)]; //choose to go up or down
      circles[i].setAttribute("directionX", directionX);
      circles[i].setAttribute("directionY", directionY);
    }

    directionX = parseInt(circles[i].getAttribute("directionX"));
    directionY = parseInt(circles[i].getAttribute("directionY"));
    var x = parseInt(circles[i].getAttribute("cx"));
    var y = parseInt(circles[i].getAttribute("cy"));

    circles[i].setAttribute("cx", x + directionX); //horizontal movement; is -1 or 1
    circles[i].setAttribute("cy", y + directionY); //vertical movement

  	if (x <= 20 || x >= 480) circles[i].setAttribute("directionX", directionX * -1); //reverse direction upon reaching a corner
  	if (y <= 20 || y >= 480) circles[i].setAttribute("directionY", directionY * -1);
  }
}

//------------------------------------------------------------------------------
clearbutton.addEventListener("click", clear);
pic.addEventListener("click", draw);

movebutton.addEventListener("click", function(e) {
  requestAnimationFrame(move);
});
