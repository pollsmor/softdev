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

clear.addEventListener("click", clearCanvas);
toggle.addEventListener("click", changeMode);
