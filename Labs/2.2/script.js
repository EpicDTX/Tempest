/**
*	Author: 
*	Target: 
*	Purpose: 
*	Created: 
*	Last updated: 
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
