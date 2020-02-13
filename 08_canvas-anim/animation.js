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
var directionX;
var directionY;

var dvdBounce = function() {
	cancelAnimationFrame(dvdAnimationID);
	dvdAnimationID = requestAnimationFrame(dvdBounce);
	if (!dvdRunning) {
		dvdX = Math.floor(Math.random() * canvas.width);
		dvdY = Math.floor(Math.random() * canvas.height);
		directionX = Math.floor(Math.random() * 2); //choose to go left or right
		directionY = Math.floor(Math.random() * 2); //choose to go up or down
		console.log(directionX);
		console.log(directionY);
	}

	dvdRunning = true;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (directionX == 0) dvdX -= 1; //left
	else dvdX += 1; //right
	if (directionY == 0) dvdY += 1; //down
	else dvdY -= 1; //up

	ctx.beginPath();
	ctx.arc(dvdX, dvdY, 5, 0, 2 * Math.PI);
	ctx.fill();
}

expandButton.addEventListener("click", function(e) {
  if (!expandRunning) {
    expandRunning = true;
		currRadius = 1; //want a fresh animation rather than continuing from the previous radius
    requestAnimationFrame(expand);
  }
});

dvdButton.addEventListener("click", function(e) {
	dvdRunning = false; //need this for the conditional in dvdBounce
	expandRunning = false;
	requestAnimationFrame(dvdBounce);
})

stopButton.addEventListener("click", function(e) {
  expandRunning = false;
	dvdRunning = false;
  cancelAnimationFrame(expandAnimationID);
	cancelAnimationFrame(dvdAnimationID);
})
