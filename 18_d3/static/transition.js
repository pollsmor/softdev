//Qaffers - Kevin Li & David Xiedeng
//SoftDev2 pd2
//K18: D3 in Flask
//2020-04-08

var renderButton = document.getElementById("render");
var transitionButton = document.getElementById("transition");
const boroughs = ['nyc', 'bronx', 'brooklyn', 'manhattan', 'queens', 'staten'];
const boroughNames = ["New York City", "The Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"];
var boroughIdx = 0;

var width = 1000;
var height = 500;
var margin = {top: 20, right: 0, bottom: 30, left: 70};

var render = function() {
  renderButton.removeEventListener("click", render); //don't want to be able to click this multiple times
  transitionButton.addEventListener("click", transition); //disallow transitions until render is clicked
  var dlist = d3.entries(data['nyc']); //overall NYC data

  var x = d3.scaleBand() //x-axis is from 1950-2040, not from 0 to whatever
    .rangeRound([margin.left, width - margin.right])
    .domain(dlist.map(d => d.key));

  var y = d3.scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain([0, d3.max(dlist.map(d => d.value))]);

  var svg = d3.select("#svg");

  svg.append("text") //title
      .attr("id", "title")
      .attr("x", (width / 2))
      .attr("y", (margin.top / 1.5))
      .attr("font-family", "sans-serif")
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .style("font-size", 16)
      .style("text-decoration", "underline")
      .text("Population Change of New York City");

  svg.append("g")
      .attr("fill", "steelblue")
    .selectAll("rect")
    .data(dlist)
    .join("rect")
      .attr("class", "bar")
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
      .attr("id", "yAxis")
      .attr("transform", 'translate(' + margin.left + ',' + margin.top + ')')
      .call(d3.axisLeft(y))
    .append("text")
      .attr("fill", "black")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("x", 0)
      .attr("y", 10)
      .text("Population");

  boroughIdx++;
}

var transition = function() {
  if (boroughIdx === 6) boroughIdx = 0 //reset back to NYC
  var dlist = d3.entries(data[boroughs[boroughIdx]]);

  var x = d3.scaleBand()
    .rangeRound([margin.left, width - margin.right])
    .domain(dlist.map(d => d.key));

  var y = d3.scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain([0, d3.max(dlist.map(d => d.value))]);

  var svg = d3.select("#svg");
  svg.transition()
    .select("#title")
      .text("Population Change of " + boroughNames[boroughIdx]);

  svg.selectAll(".bar")
    .data(dlist)
    .transition()
      .attr("x", d => x(d.key))
      .attr("y", d => y(d.value))
      .attr("height", d => y(0) - y(d.value));

  svg.select("#yAxis")
    .transition()
      .call(d3.axisLeft(y)); //update y-axis to fit with new numbers

  ++boroughIdx;
}

renderButton.addEventListener("click", render);
