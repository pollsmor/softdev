//Kevin Li
//SoftDev2 pd2
//K18: D3 in Flask
//2020-04-08

var renderButton = document.getElementById("render");
var transitionButton = document.getElementById("transition");

var render = function() {
  var dlist = d3.entries(data['nyc']);
  var width = 1000;
  var height = 500;
  var margin = {top: 20, right: 0, bottom: 30, left: 70};

  var x = d3.scaleBand()
    .rangeRound([margin.left, width - margin.right])
    .domain(dlist.map(d => d.key));

  var y = d3.scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain([0, d3.max(dlist.map(d => d.value))]);

  d3.select("#svg")
      .attr("viewBox", [0, 0, width, height])
  d3.select("#svg")
    .append("g")
      .attr("transform", 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x))
  d3.select("#svg")
    .append("g")
      .attr("transform", 'translate(' + margin.left + ',0)')
      .call(d3.axisLeft(y));
}

renderButton.addEventListener("click", render);
