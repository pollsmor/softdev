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

var logo = new Image();
logo.src = "logo_dvd.jpg";
var imgWidth;
var imgHeight;
logo.onload = function() {
	imgWidth = this.width;
	imgHeight = this.height;
};

var dvdAnimationID;
var dvdX;
var dvdY;
var directions = [-1, 1];
var directionX;
var directionY;

var dvdBounce = function() {
	cancelAnimationFrame(dvdAnimationID);
	dvdAnimationID = requestAnimationFrame(dvdBounce);
	if (!dvdRunning) {
		dvdX = Math.floor(Math.random() * canvas.width);
		dvdY = Math.floor(Math.random() * canvas.height);
		if (dvdX > canvas.width - imgWidth * 0.25) dvdX -= imgWidth * 0.25;
		if (dvdY > canvas.height - imgHeight * 0.25) dvdY -= imgHeight * 0.25;
		directionX = directions[Math.floor(Math.random() * 2)]; //choose to go left or right
		directionY = directions[Math.floor(Math.random() * 2)]; //choose to go up or down
	}

	dvdRunning = true;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	dvdX += directionX; //horizontal movement
	dvdY += directionY; //vertical movement

	if (dvdX <= 0 || dvdX >= canvas.width - (imgWidth * 0.25)) directionX *= -1;
	if (dvdY <= 0 || dvdY >= canvas.height - (imgHeight * 0.25)) directionY *= -1;

	/* circle testing before DVD
	ctx.beginPath();
	ctx.arc(dvdX, dvdY, 5, 0, 2 * Math.PI);
	ctx.fill();
	*/
	ctx.drawImage(logo, dvdX, dvdY, imgWidth * 0.25, imgHeight * 0.25);
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
