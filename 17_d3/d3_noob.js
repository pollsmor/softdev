const data = [4, 8, 15, 16, 23, 42];

const createChart = function() {
  const div = d3.select(".chart")
      .style("font", "10px sans-serif")
      .style("text-align", "right")
      .style("color", "white");

  div.selectAll("div")
    .data(data)
    .join("div")
      .style("background", "steelblue")
      .style("padding", "3px")
      .style("margin", "1px")
      .style("width", function(d) {
        return d * 10 + "px";
      })
      .text(d => d)
      .transition().style("background-color", "black");

  return div.node();
}

createChart();
