// Variables
var area = 1;
// var volume = 1;
var height = 1;
var width = 1;
// var length = 1;

// Dom elements
var areaBox = document.getElementById("areaBox");
var areaOutput = document.getElementById("areaOutput");


// Functions
function smoothScroll(e) {
  document.getElementById(`${e.target.innerText}Anchor`).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function sliderChange(e) {
  getSliderValue(e)
  setGlobalVariable(e);
  calculateDisplayArea();
  displayCSSBox(e);
}

function getSliderValue(e) {
  const sliderTarget = document.getElementById(e.target.id);
  sliderTarget.labels[0].innerText = `${e.target.id}: ${e.target.value}`;
}

function setGlobalVariable(e) {
  var varString = e.target.id.toLowerCase();
  var varNum = e.target.value;
  eval(varString + " = " + varNum);
}

function calculateDisplayArea() {
  area = height * width;
  areaOutput.innerText = `Area: ${area}`;
}

function displayCSSBox(e) {
  areaBox.style[`${e.target.name}`] = `${e.target.value * 10}px`;
}
