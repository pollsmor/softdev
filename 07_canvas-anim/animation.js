//Kevin Li & William Lin
//SoftDev2 pd2
//K07 -- Canvas Animation
//2020-02-12

var animate = document.getElementById('animate');
var stop = document.getElementById('stop');

var canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var centerX = width / 2;
var centerY = height / 2;
var maxRadius = 150;
var currRadius = 0;

//ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
//ctx.stroke();

var animationID = 0;

var animate = function(e) {
  ctx.arc(centerX, centerY, currRadius, 0, 2 * Math.PI);
  ctx.clearRect(0, 0, width, height);
}

animate.addEventListener("click", function(e) {
  animationID = window.requestAnimationFrame(animate);
});
