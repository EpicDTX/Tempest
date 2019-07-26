/**
*	Author: Klim Huynh 101634015
*	Target: index.html
*	Purpose: This file is
*	Created: 06/03/2019
*	Last updated: 06/03/2019
*	Credits:
*/

function barChart() {
  var w = 500;
  var h = 100;
  var barPadding = 1; //Separates the bar

  var svg = d3.select("#chart")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

  svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", function(d, i) {
          return i * (w / dataset.length); //Divides the bar by the length of the array
      })
      .attr("y", function(d) {
          return h - (d.Test * 4); //Make bars upright and scale up factor of 4
      })
      .attr("width", w/dataset.length-barPadding)
      .attr("height", function(d) {
          return d.Test * 4; //Scale up by factor of 4
      })
      .attr("fill", function (d) {
        return "rgb(" + Math.round(d.Test*10) + ", 0, 200)";
      });

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
            return d.Test;
        })
        .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2; //calculate the x-position by setting it to the left edge of each bar plus half the bar width
        })
        .attr("y", function(d) {
            return h - (d.Test * 4) + 18; //+18
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white")
        .attr("text-anchor", "middle"); //center the text horizontally at the assigned x value
}

function init () {

}

window.onload = init;
