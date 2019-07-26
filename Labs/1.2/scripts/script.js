/**
*	Author: Klim Huynh 101634015
*	Target: index.html
*	Purpose: This file is for the user to switch between two data sets.
*	Created: 05/03/2019
*	Last updated: 05/03/2019
*	Credits:
*/

function oldClicked() {
  var oldData = document.getElementById("oldData");
  var newData = document.getElementById("newData");

  oldData.style.display = "block";
  newData.style.display = "none";
}

function newClicked() {
  var oldData = document.getElementById("oldData");
  var newData = document.getElementById("newData");

  oldData.style.display = "none";
  newData.style.display = "block";
}

function init () {
  var oldButton = document.getElementById("oldButton");
  var newButton = document.getElementById("newButton");
  var oldData = document.getElementById("oldData");
  var newData = document.getElementById("newData");

  oldData.style.display = "block";
  newData.style.display = "none";

  oldButton.onclick = oldClicked;

  newButton.onclick = newClicked;
}

window.onload = init;
