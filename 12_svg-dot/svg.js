var namespace = "http://www.w3.org/2000/svg"; //don't want to keep retyping this
var pic = document.getElementById("vimage");
var clearbutton = document.getElementById("clear");
var drawnOn = false; //var to keep track of whether to start a new path or continue off previous one

var oldX, oldY; //to keep track of old positions for use with connecting dots

var clear = function() {
  var rect = document.createElementNS(namespace, "rect");
  rect.setAttribute("width", 500);
  rect.setAttribute("height", 500);
  rect.setAttribute("style", "fill:rgb(255,255,255);"); //big brain maneuvers
  pic.appendChild(rect);
  drawnOn = false;
}

var draw = function(e) {
  var x = e.offsetX;
  var y = e.offsetY;

  console.log(drawnOn);
  if (!drawnOn) { //start a new path
    drawnOn = true;
    var c = document.createElementNS(namespace, "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 4);
    c.setAttribute("fill", "green");
    pic.appendChild(c);
  } else { //continue previous path
    var c = document.createElementNS(namespace, "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 4);
    c.setAttribute("fill", "green");
    pic.appendChild(c);

    var line = document.createElementNS(namespace, "line");
    line.setAttribute("x1", oldX);
    line.setAttribute("y1", oldY);
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
    line.setAttribute("stroke-width", 1);
    line.setAttribute("stroke", "green");
    pic.appendChild(line);
  }

  oldX = x;
  oldY = y;
}

clearbutton.addEventListener("click", clear);
pic.addEventListener("click", draw);
