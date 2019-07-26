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

    //Create bars
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


    //Update the data on click
    d3.select("#addButton")
        .on("click", function () {
            //Generate new values for the dataset
            var maxValue = 25;
            var newNumber = Math.floor(Math.random() * maxValue);
            dataset.push(newNumber);

            xScale.domain(d3.range(dataset.length));
            yScale.domain([0, d3.max(dataset)]);

            var bars = svg.selectAll("rect")
                .data(dataset); //Re-bind data to existing bars

            bars.enter()
                .append("rect")
                .attr("x", w)
                .attr("y", function (d) {
                    return h - yScale(d);
                })
                .attr("width", xScale.bandwidth())
                .attr("height", function (d) {
                    return yScale(d);
                })
                .attr("fill", function (d) {
                    return "rgb(" + Math.round(d * 10) + ", 0, 200)";
                })
                .merge(bars)
                .transition()
                .duration(500)
                .attr("x", function (d, i) {
                    return xScale(i);
                })
                .attr("y", function (d) {
                    return h - yScale(d);
                })
                .attr("width", xScale.bandwidth())
                .attr("height", function (d) {
                    return yScale(d);
                });
        });

    //Update the data on click
    d3.select("#removeButton")
        .on("click", function () {
            //Remove one value from dataset
            dataset.shift();

            xScale.domain(d3.range(dataset.length));
            yScale.domain([0, d3.max(dataset)]);

            var bars = svg.selectAll("rect")
                .data(dataset); //Re-bind data to existing bars

            bars.enter()
                .append("rect")
                .attr("x", w)
                .attr("y", function (d) {
                    return h - yScale(d);
                })
                .attr("width", xScale.bandwidth())
                .attr("height", function (d) {
                    return yScale(d);
                })
                .attr("fill", function (d) {
                    return "rgb(" + Math.round(d * 10) + ", 0, 200)";
                })
                .merge(bars)
                .transition()
                .duration(500)
                .attr("x", function (d, i) {
                    return xScale(i);
                })
                .attr("y", function (d) {
                    return h - yScale(d);
                })
                .attr("width", xScale.bandwidth())
                .attr("height", function (d) {
                    return yScale(d);
                });

            bars.exit()
                .transition()
                .duration(500)
                .attr("x", w)
                .remove();
        });
}

window.onload = init;