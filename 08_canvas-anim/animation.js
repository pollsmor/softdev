//Kevin Li & William Lin
//SoftDev2 pd2
//K08 -- Canvas Animation 2
//2020-02-13

var canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');
var expandButton = document.getElementById('animate');
var dvdButton = document.getElementById('dvd');
var stopButton = document.getElementById('stop');
var expandRunning = false;
var dvdRunning = false;

//----------------------------------------------------------

var expandAnimationID;
var maxRadius = canvas.width / 2 - 10;
var currRadius = 0;
var incRadius = true;

var expand = function() {
	cancelAnimationFrame(expandAnimationID);
  expandAnimationID = requestAnimationFrame(expand);
  //console.log("currRadius: " + currRadius); //lags the console if it's open
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the screen so that a new frame can be drawn

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

//----------------------------------------------------------

var dvdAnimationID;
var dvdX;
var dvdY;
var direction = Math.floor(Math.random(2 * Math.PI)); //360 degrees of movement

var dvdBounce = function() {
	cancelAnimationFrame(dvdAnimationID);
	dvdAnimationID = requestAnimationFrame(dvdBounce);
	if (!dvdRunning) {
		dvdX = Math.floor(Math.random(canvas.width - 30));
		dvdY = Math.floor(Math.random(canvas.height - 30));
	}

	dvdRunning = true;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	dvdX += Math.sin(direction);
	dvdY += Math.sin(direction);

	ctx.beginPath();
	ctx.arc(dvdX, dvdY, 5, 0, 2 * Math.PI);
	ctx.fill();
}

expandButton.addEventListener("click", function(e) {
  if (!expandRunning) {
    expandRunning = true;
    requestAnimationFrame(expand);
  }
});

dvdButton.addEventListener("click", function(e) {
	dvdRunning = false; //need this for the conditional in dvdBounce
	requestAnimationFrame(dvdBounce);
})

stopButton.addEventListener("click", function(e) {
  expandRunning = false;
	dvdRunning = false;
  cancelAnimationFrame(expandAnimationID);
	cancelAnimationFrame(dvdAnimationID);
})
