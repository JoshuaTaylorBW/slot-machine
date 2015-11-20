var spinButton = document.getElementById("slotSpinner").addEventListener("click", commander);

var leftSlot = document.getElementById("left-slot");
var middleSlot = document.getElementById("middle-slot");
var rightSlot = document.getElementById("right-slot");

var winOrLose = document.getElementById("win-or-lose");
var slotsHolder = document.getElementById("slots-holder");
var slotsTable = document.getElementById("slots-table");

var buttonHolder = document.getElementById("button-holder");

init();

function init() {
  document.body.style.backgroundColor = "#343434";
  makeSlots();
  makeButtonHolder();
  makeWinOrLose();
}
function makeSlots() {
  slotsHolder.style.position = "absolute";
  slotsHolder.style.width = "100%";
  slotsHolder.style.height = "33%";

  slotsTable.style.height = "100%";
  slotsTable.style.width = "100%";

  leftSlot.style.width = "100%";
  leftSlot.style.height = "100%";
  middleSlot.style.width = "100%";
  middleSlot.style.height = "100%";
  rightSlot.style.width = "100%";
  rightSlot.style.height = "100%";
}

function makeButtonHolder() {
  buttonHolder.style.position = "absolute";
  buttonHolder.style.width = "100%";
  buttonHolder.style.textAlign = "center"
  buttonHolder.style.top = "35%";
}

function makeWinOrLose() {
  winOrLose.style.position = "absolute";
  winOrLose.style.width = "100%";
  winOrLose.style.color = "white"
  winOrLose.style.fontSize = "42pt"
  winOrLose.style.textAlign = "center"
  winOrLose.style.top = "40%";
}
