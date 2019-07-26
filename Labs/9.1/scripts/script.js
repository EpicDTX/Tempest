/**
 *	Author: Klim Huynh 101634015
 *	Target: index.html
 *	Purpose: This file is to make the page interactive.
 *	Created: 
 *	Last updated: 
 *	Credits:
 */

"use strict";

function init() {

    var w = 500;
    var h = 300;

    //Define map projection
    var projection = d3.geoMercator()
        .center([145, -36.5])
        .translate([w / 2, h / 2])
        .scale(2450);

    //Define path generator
    var path = d3.geoPath()
        .projection(projection);

    var svg = d3.select("#chart")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("fill", "grey");

    //Loads in GeoJSON data
    d3.json("/L9.1-resources/LGA_VIC.json").then(function (json) {
        svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path);
    });

}

window.onload = init;
