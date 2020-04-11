//Kevin Li
//SoftDev2 pd2
//K18: D3 in Flask
//2020-04-08

var renderButton = document.getElementById("render");
var transitionButton = document.getElementById("transition");

var render = function() {
  console.log(data['nyc']);
}

renderButton.addEventListener("click", render);
