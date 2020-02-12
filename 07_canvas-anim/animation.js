//Kevin Li & William Lin
//SoftDev2 pd2
//K07 -- Canvas Animation
//2020-02-12

var animateButton = document.getElementById('animate');
var stopButton = document.getElementById('stop');

var canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var centerX = width / 2;
var centerY = height / 2;
var maxRadius = 250;
var currRadius = 0;
var incRadius = 1;

//ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
//ctx.stroke();

var animationID;

var animate = function() {
  animationID = requestAnimationFrame(animate);
  console.log("currRadius: " + currRadius);
  ctx.clearRect(0, 0, width, height);

  if (incRadius) {
    currRadius++;
    if (currRadius > maxRadius)
      incRadius = 0;
  } else {
    currRadius--;
    if (currRadius < 1)
      incRadius = 1;
  }

  ctx.beginPath();
  ctx.arc(centerX, centerY, currRadius, 0, 2 * Math.PI);
  ctx.fill();
}

animateButton.addEventListener("click", function(e) {
  requestAnimationFrame(animate);
});

stopButton.addEventListener("click", function(e) {
  cancelAnimationFrame(animationID);
})
