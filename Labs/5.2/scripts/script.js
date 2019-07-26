/**
*	Author: 
*	Target: 
*	Purpose: 
*	Created: 
*	Last updated: 
*	Credits:
*/

"use strict";

function init() {
  var w = 500;
  var h = 100;

  var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

  var xScale = d3.scaleBand()
    .domain(d3.range(dataset.length))
    .rangeRound([0, w])
    .paddingInner(0.05);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, h]);

  var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
      return xScale(i);
    })
    .attr("y", function (d) {
      return h - yScale(d);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) {
      return yScale(d); //Scale up by factor of 4
    })
    .attr("fill", function (d) {
      return "rgb(" + Math.round(d * 10) + ", 0, 200)";
    });

  svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
      return d;
    })
    .attr("x", function (d, i) {
      return xScale(i) + xScale.bandwidth() / 2; //calculate the x-position by setting it to the left edge of each bar plus half the bar width
    })
    .attr("y", function (d) {
      return h - yScale(d) + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("text-anchor", "middle"); //center the text horizontally at the assigned x value

  d3.select("#updateButton")
    .on("click", function () {

      var numValues = dataset.length;
      var maxValue = 25;
      dataset = [];

      //Generate new values for the dataset
      for (var i = 0; i < numValues; i++) {
        var newNumber = Math.floor(Math.random() * maxValue);
        dataset.push(newNumber);
      }

      //Update all rects
      svg.selectAll("rect")
        .data(dataset)
        .attr("y", function (d) {
          return h - yScale(d)
        })
        .attr("height", function (d) {
          return yScale(d);
        })
        .attr("fill", function (d) {
          return "rgb(" + Math.round(d * 10) + ", 0, 200)";
        });

      svg.selectAll("text")
        .data(dataset)
        .text(function (d) {
          return d;
        })
        .attr("x", function (d, i) {
          return xScale(i) + xScale.bandwidth() / 2; //calculate the x-position by setting it to the left edge of each bar plus half the bar width
        })
        .attr("y", function (d) {
          return h - yScale(d) + 14;
        });
    });


  d3.select("#transition1")
    .on("click", function () {

      var numValues = dataset.length;
      var maxValue = 25;
      dataset = [];

      //Generate new values for the dataset
      for (var i = 0; i < numValues; i++) {
        var newNumber = Math.floor(Math.random() * maxValue);
        dataset.push(newNumber);
      }

      //Update all rects
      svg.selectAll("rect")
        .data(dataset)
        .transition()
        .delay(function (d, i) {
          return i / dataset.length * 1000;
        })
        .duration(1000)
        .ease(d3.easeElasticOut)
        .attr("y", function (d) {
          return h - yScale(d)
        })
        .attr("height", function (d) {
          return yScale(d);
        })
        .attr("fill", function (d) {
          return "rgb(" + Math.round(d * 10) + ", 0, 200)";
        });

      svg.selectAll("text")
        .data(dataset)
        .text(function (d) {
          return d;
        })
        .attr("x", function (d, i) {
          return xScale(i) + xScale.bandwidth() / 2; //calculate the x-position by setting it to the left edge of each bar plus half the bar width
        })
        .attr("y", function (d) {
          return h - yScale(d) + 14;
        });
    });

  d3.select("#transition2")
    .on("click", function () {

      var numValues = dataset.length;
      var maxValue = 25;
      dataset = [];

      //Generate new values for the dataset
      for (var i = 0; i < numValues; i++) {
        var newNumber = Math.floor(Math.random() * maxValue);
        dataset.push(newNumber);
      }

      //Update all rects
      svg.selectAll("rect")
        .data(dataset)
        .transition()
        .delay(function (d, i) {
          return i / dataset.length * 1000;
        })
        .duration(500)
        .ease(d3.easeCircleOut)
        .attr("y", function (d) {
          return h - yScale(d)
        })
        .attr("height", function (d) {
          return yScale(d);
        })
        .attr("fill", function (d) {
          return "rgb(" + Math.round(d * 10) + ", 0, 200)";
        });

      svg.selectAll("text")
        .data(dataset)
        .text(function (d) {
          return d;
        })
        .attr("x", function (d, i) {
          return xScale(i) + xScale.bandwidth() / 2; //calculate the x-position by setting it to the left edge of each bar plus half the bar width
        })
        .attr("y", function (d) {
          return h - yScale(d) + 14;
        });
    });

}


window.onload = init;