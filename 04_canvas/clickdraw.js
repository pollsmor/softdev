var canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var mode = "box";

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
  ctx.clearRect(0, 0, 300, 150);
  console.log("The canvas has been cleared.");
}

var draw = function(e) {
  var x = e.clientX;
  var y = e.clientY;
  console.log("x: " + x + " y: " + y);

  if (mode === "box") {
    ctx.fillStyle = "#640cfc"; //violet
    ctx.fillRect(x - 7, y - 7, 20, 20); //for some reason the x and y are offset
  } else {
    ctx.fillStyle = "#07a6f9"; //cerulean
    ctx.fillRect(x - 8, y - 8, 3, 3);
  }
}

clear.addEventListener("click", clearCanvas);
toggle.addEventListener("click", changeMode);
canvas.addEventListener("click", draw);
