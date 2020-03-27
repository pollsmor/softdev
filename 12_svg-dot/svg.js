var pic = document.getElementById("vimage");
var clearbutton = document.getElementById("clear");

var clear = function() {
  //false means the svg is cloned but not its children (i.e. the circles inside),  replace with clone
  pic.parentNode.replaceChild(pic.cloneNode(false), pic);
}

//<svg id="vimage" height="500" width="500" style="border: 1px solid;">

/*
var c = document.createElementNS(
  "http://www.w3.org/2000/svg", "circle");

c.setAttribute("cx", 0);
c.setAttribute("cy", 0);
c.setAttribute("r", 100);
c.setAttribute("fill", "red");
c.setAttribute("stroke", "black");

pic.appendChild(c);
*/

clearbutton.addEventListener("click", clear);
