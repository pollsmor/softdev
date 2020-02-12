//Kevin Li & William Lin
//SoftDev2 pd2
//K07 -- Canvas Animation
//2020-02-12

var animateButton = document.getElementById('animate');
var stopButton = document.getElementById('stop');
var canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');

var maxRadius = 250;
var currRadius = 0;
var incRadius = true;

var animationID = 0;
var animationRunning = false; //to know whether clicking the animate button should do anything

var animate = function() {
  animationID = requestAnimationFrame(animate);
  //console.log("currRadius: " + currRadius); //lags the console if it's open
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (incRadius) {
    currRadius++;
    if (currRadius > maxRadius)
      incRadius = false;
  } else {
    currRadius--;
    if (currRadius < 1)
      incRadius = true;
  }

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, currRadius, 0, 2 * Math.PI);
  ctx.fill();
}

animateButton.addEventListener("click", function(e) {
  if (!animationRunning) {
    animationRunning = true;
    requestAnimationFrame(animate);
  }
});

stopButton.addEventListener("click", function(e) {
  animationRunning = false;
  cancelAnimationFrame(animationID);
})
