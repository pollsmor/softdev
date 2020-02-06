//Kevin Li & Alexander Thompson
//SoftDev2 pd2
//K05 -- Canvas Basics 2
//2020-02-06

//Couldn't find a way to use e.preventDefault();
//What it does is cancel an event if it is detected (e.g. prevent a checkbox from checking)

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var mode = "box"; //default to box mode

var clear = document.getElementById('clear');
var toggle = document.getElementById('toggle');

var changeMode = function(e) {
  if (mode === "box") {
    mode = "dot";
    toggle.innerHTML = "Switch to box mode";
  } else {
    mode = "box";
    toggle.innerHTML = "Switch to dot mode";
  }

  console.log("New mode: " + mode);
}

var clearCanvas = function(e) {
  ctx.clearRect(0, 0, 300, 150); //default canvas settings, clear the entire thing
  console.log("The canvas has been cleared.");
}

var draw = function(e) {
  var x = e.offsetX; //mouse-x relative to the canvas rather than the page as a whole
  var y = e.offsetY; //mouse-y relative to the canvas
  console.log("x: " + x + " y: " + y);

  if (mode === "box") {
    ctx.fillStyle = "#640cfc"; //violet
    ctx.fillRect(x, y, 20, 20); //for some reason the x and y are offset
  } else {
    ctx.fillStyle = "#07a6f9"; //cerulean
    ctx.beginPath(); //resets the path of the context, so if I'm done with my circle I don't want to continue drawing off it
    ctx.arc(x, y, 1, 0, 2 * Math.PI); //x, y, radius, starting angle, counterclockwise angle
    ctx.fill(); //color in
  }
}

clear.addEventListener("click", clearCanvas);
toggle.addEventListener("click", changeMode);
canvas.addEventListener("click", draw);
