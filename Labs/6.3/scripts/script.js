/**
*	Author: Klim Huynh 101634015
*	Target: index.html
*	Purpose: 
*	Created: 
*	Last updated: 
*	Credits:
*/

"use strict";

function lineChart(dataset, w, h) {

  //Converting Dates to string
  var formatTime = d3.timeFormat("%Y");

  var padding = 50;

  //Scale functions
  var xScale = d3.scaleTime()
    .domain([
      d3.min(dataset, function (d) { return d.date; }),
      d3.max(dataset, function (d) { return d.date; })
    ])
    .range([padding, w]);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function (d) { return d.number; })
    ])
    .range([h - padding, 0]);

  //Define axes 
  var xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(10)
    .tickFormat(formatTime);

  var yAxis = d3.axisLeft()
    .scale(yScale)
    .ticks(10);

  //Define line generator
  var line = d3.line()
    .x(function (d) { return xScale(d.date); })
    .y(function (d) { return yScale(d.number); });

  //Define area generator
  var area = d3.area()
    .defined(function (d) { return d.number >= 0; })
    .x(function (d) { return xScale(d.date); })
    //base line for area
    .y0(function () { return yScale.range()[0]; })
    .y1(function (d) { return yScale(d.number); });

  //Create SVG element
  var svg = d3.select("#chart")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  svg.append("path")
    .datum(dataset)
    .attr("class", "area")
    .attr("d", area);

  //Axes created
  svg.append("g")
    .attr("class", "axis") //Assign "axis" class
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

  //Draw halfMilMark line
  svg.append("line")
    .attr("class", "halfMilMarkLine")
    //start of line
    .attr("x1", padding)
    .attr("y1", yScale(500000))
    //end of line
    .attr("x2", w)
    .attr("y2", yScale(500000));
  //Label halfMilMark line
  svg.append("text")
    .attr("class", "halfMilLabel")
    .attr("x", padding + 10)
    .attr("y", yScale(500000) - 7)
    .text("Half a million employed");
}

function init() {
  var w = 600;
  var h = 300;

  var dataset;

  var rowConverter = function (d) {
    return {
      date: new Date(+d.year, (+d.month - 1)),
      number: parseFloat(d.number)
    };
  }

  //Load in data
  d3.csv("Unemployment_78-95.csv", rowConverter).then(function (data) {
    dataset = data;

    //Print data to console for verification
    console.table(dataset, ["date", "number"]);

    lineChart(dataset, w, h);
  });
}

window.onload = init;