/**
 *	Author: Klim Huynh 101634015
 *	Target: index.html
 *	Purpose: This file is to make the page interactive.
 *	Created: 06/03/2019
 *	Last updated: 06/03/2019
 *	Credits:
 */

function nameShape() {
  var txt;
  var name = prompt("Please enter your name");

  txt = "" + name + "";
  document.getElementById("test").innerHTML = txt;
}

function init() {
  var myCircle = document.getElementById("myCircle");

  myCircle.onclick = nameShape;
}

window.onload = init;
