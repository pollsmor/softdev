//No Ivies Club - Kevin Li / Raymond Lee
//SoftDev pd2/pd1
//K14 -- Ask Circles While Moving
//2020-03-31

var namespace = "http://www.w3.org/2000/svg"; //don't want to keep retyping this
var pic = document.getElementById("vimage");
var moveAnimationID;
var xtraAnimationID;
var directions = [-1, 1]; //pick one of the two for directionX and directionY: -1 for left and up, 1 for right and down.

var clearbutton = document.getElementById("clear");
var movebutton = document.getElementById("move");
var xtrabutton = document.getElementById("xtra");

var clear = function() { //just painting everything over with a blank rectangle will not perform as well now that it's an animation
  var curr = pic.firstChild;
  while (curr) {
    pic.removeChild(curr);
    curr = pic.firstChild;
  }
}

var draw = function(e) {
  if (e.target == pic) { //thanks to David Xiedeng for this fix!
    var x = e.offsetX;
    var y = e.offsetY;

    var c = document.createElementNS(namespace, "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    c.setAttribute("stroke-width", 5);

    pic.appendChild(c);
  }
}

var move = function(e) {
  cancelAnimationFrame(moveAnimationID);
	moveAnimationID = requestAnimationFrame(move);

  var circles = pic.children;
  for (var i = 0; i < circles.length; i++) {
    var directionX, directionY;
    var moving = circles[i].getAttribute("moving"); //keep track of whether directions should be assigned or not
    if (moving !== "true") { //don't want it to change directions once it has started moving
      circles[i].setAttribute("moving", "true");
      directionX = directions[Math.floor(Math.random() * 2)]; //choose to go left or right
  		directionY = directions[Math.floor(Math.random() * 2)]; //choose to go up or down
      circles[i].setAttribute("directionX", directionX);
      circles[i].setAttribute("directionY", directionY);
    }

    directionX = parseInt(circles[i].getAttribute("directionX"));
    directionY = parseInt(circles[i].getAttribute("directionY"));
    var x = parseInt(circles[i].getAttribute("cx")) + directionX;
    var y = parseInt(circles[i].getAttribute("cy")) + directionY;

    if (x <= 20 || x >= 480) circles[i].setAttribute("directionX", directionX * -1); //reverse direction upon reaching a corner
  	if (y <= 20 || y >= 480) circles[i].setAttribute("directionY", directionY * -1);

    circles[i].setAttribute("cx", x); //horizontal movement; is -1 or 1
    circles[i].setAttribute("cy", y); //vertical movement
  }
}

//I would make it so that the circles themselves change colors rather than just the outlines,
//but I'm afraid of being sued for causing a seizure.
var xtra = function(e) { //DJ function!
  cancelAnimationFrame(xtraAnimationID);
  xtraAnimationID = requestAnimationFrame(xtra);

  var circles = pic.children;
  for (var i = 0; i < circles.length; i++) {
    var r = Math.floor(Math.random() * 256).toString();
    var g = Math.floor(Math.random() * 256).toString();
    var b = Math.floor(Math.random() * 256).toString();
    var color = "rgb(";
    color += (r + ", " + g + ", " + b + ")");

    circles[i].setAttribute("stroke", color);
  }
}

//------------------------------------------------------------------------------
clearbutton.addEventListener("click", clear);
pic.addEventListener("click", draw);

movebutton.addEventListener("click", function(e) {
  requestAnimationFrame(move);
});

xtrabutton.addEventListener("click", function(e) {
  requestAnimationFrame(xtra);
})
