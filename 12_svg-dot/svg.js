var namespace = "http://www.w3.org/2000/svg";
var pic = document.getElementById("vimage");
var clearbutton = document.getElementById("clear");
var drawnOn = false; //var to keep track of whether to start a new path or continue off previous one

var clear = function() {
  var rect = document.createElementNS(namespace, "rect");
  rect.setAttribute("width", 500);
  rect.setAttribute("height", 500);
  rect.setAttribute("style", "fill:rgb(255,255,255);");
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

  }
}

//<svg id="vimage" height="500" width="500" style="border: 1px solid;">

/*
var c = document.createElementNS(
  "http://www.w3.org/2000/svg", "circle");

c.setAttribute("cx", 0);
c.setAttribute("cy", 0);
c.setAttribute("r", 100);
c.setAttribute("fill", "red");
c.setAttribute("stroke", "black");

pic.appendChild(c);
*/

clearbutton.addEventListener("click", clear);
pic.addEventListener("click", draw);
