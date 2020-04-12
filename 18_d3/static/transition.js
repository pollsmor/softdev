//Kevin Li
//SoftDev2 pd2
//K18: D3 in Flask
//2020-04-08

var renderButton = document.getElementById("render");
var transitionButton = document.getElementById("transition");

var render = function() {
  renderButton.removeEventListener("click", render);

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

  var svg = d3.select("#svg");

  svg.append("text")
      .attr("x", (width / 2))
      .attr("y", (margin.top / 1.5))
      .attr("font-family", "sans-serif")
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .style("font-size", 16)
      .style("text-decoration", "underline")
      .text("Population Change of New York City")

  svg.append("g")
      .attr("fill", "steelblue")
    .selectAll("rect")
    .data(dlist)
    .join("rect")
      .attr("x", d => x(d.key))
      .attr("y", d => y(d.value))
      .attr("height", d => y(0) - y(d.value))
      .attr("width", x.bandwidth() - 3)
      .attr("transform", 'translate(0,' + (margin.top / 2) + ')');

  svg.attr("viewBox", [0, 0, width, height]);

  svg.append("g")
      .attr("transform", 'translate(0,' + (height - 20)+ ')')
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", 'translate(' + margin.left + ',' + margin.top + ')')
      .call(d3.axisLeft(y))
    .append("text")
      .attr("fill", "black")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("x", 0)
      .attr("y", 10)
      .text("Population");
}

renderButton.addEventListener("click", render);
