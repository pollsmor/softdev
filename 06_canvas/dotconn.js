//Kevin Li & Alexander Thompson
//SoftDev2 pd2
//K06 -- Connect the Dots
//2020-02-11

var canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');

var clear = document.getElementById('clear');

var drawnOn = 0; //var to keep track of whether to start a new path or cotninue off previous one

var clearCanvas = function(e) {
  drawnOn = 0;
  ctx.clearRect(0, 0, 600, 600);
  console.log("The canvas has been cleared.");
}

var draw = function(e) {
  var x = e.offsetX;
  var y = e.offsetY;
  console.log("x: " + x + " y: " + y);

  if (!drawnOn) { //start a new path
    drawnOn = 1;
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(x, y);
    ctx.arc(e.offsetX, e.offsetY, 2, 0, 2 * Math.PI); //put a dot
    ctx.stroke(); //draw the line
    ctx.moveTo(x, y);
  } else { //continue previous path
    ctx.lineTo(x, y);
    ctx.arc(e.offsetX, e.offsetY, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.moveTo(x, y);
  }
}

clear.addEventListener("click", clearCanvas);
canvas.addEventListener("click", draw);
