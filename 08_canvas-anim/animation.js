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

//Expand stuff----------------------------------------------------------

var expandAnimationID;
var expandWasLastAnimation; //e.g. if I stop the expand animation and restart it I don't want the radius of the circle to reset to 0
var maxRadius = Math.min(canvas.width / 2 - 10, canvas.height / 2 - 10); //smaller of two dimensions
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

//DVD stuff----------------------------------------------------------

var logo = new Image();
logo.src = "logo_dvd.jpg";
var imgWidth; //use provided image dimensions rather than magic numbers
var imgHeight;
logo.onload = function() {
	imgWidth = this.width;
	imgHeight = this.height;
};

var dvdAnimationID;
var dvdX;
var dvdY;
var directions = [-1, 1]; //pick one of the two for directionX and directionY: -1 for left and up, 1 for right and down.
var directionX;
var directionY;

var dvdBounce = function() {
	cancelAnimationFrame(dvdAnimationID);
	dvdAnimationID = requestAnimationFrame(dvdBounce);
	if (!dvdRunning) { //only want this to run once per button click, not subsequent calls
		dvdX = Math.floor(Math.random() * canvas.width); //note: top left corner of image, not center
		dvdY = Math.floor(Math.random() * canvas.height);
		if (dvdX > canvas.width - imgWidth * 0.25) dvdX -= imgWidth * 0.25; //aforementioned top left positioning issue remedy
		if (dvdY > canvas.height - imgHeight * 0.25) dvdY -= imgHeight * 0.25;
		directionX = directions[Math.floor(Math.random() * 2)]; //choose to go left or right
		directionY = directions[Math.floor(Math.random() * 2)]; //choose to go up or down
	}

	dvdRunning = true;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	dvdX += directionX; //horizontal movement; is -1 or 1
	dvdY += directionY; //vertical movement

	if (dvdX <= 0 || dvdX >= canvas.width - (imgWidth * 0.25)) directionX *= -1; //reverse direction upon reaching a corner
	if (dvdY <= 0 || dvdY >= canvas.height - (imgHeight * 0.25)) directionY *= -1;

	/* circle testing before DVD
	ctx.beginPath();
	ctx.arc(dvdX, dvdY, 5, 0, 2 * Math.PI);
	ctx.fill();
	*/
	ctx.drawImage(logo, dvdX, dvdY, imgWidth * 0.25, imgHeight * 0.25); //the original image is way too big. Also too lazy to do aspect ratio math
}

expandButton.addEventListener("click", function(e) {
  if (!expandRunning) {
    expandRunning = true;
		if (!expandWasLastAnimation) currRadius = 1; //want a fresh animation rather than continuing from the previous radius
		expandWasLastAnimation = true;
    requestAnimationFrame(expand);
  }
});

dvdButton.addEventListener("click", function(e) {
	dvdRunning = false; //need this so conditional in dvdBounce knows whether to choose new position for DVD
	expandRunning = false;
	expandWasLastAnimation = false;
	requestAnimationFrame(dvdBounce);
})

stopButton.addEventListener("click", function(e) {
  expandRunning = false;
	dvdRunning = false;
  cancelAnimationFrame(expandAnimationID);
	cancelAnimationFrame(dvdAnimationID);
})
