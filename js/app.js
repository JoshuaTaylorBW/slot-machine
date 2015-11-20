var spinButton = document.getElementById("slotSpinner").addEventListener("click", commander);

var leftSlot = document.getElementById("left-slot");
var middleSlot = document.getElementById("middle-slot");
var rightSlot = document.getElementById("right-slot");

var winOrLose = document.getElementById("win-or-lose");

function commander() {


  winOrLose.innerHTML = "";
  changeColor(leftSlot);
  changeColor(middleSlot);
  changeColor(rightSlot);

  checker();

}

function changeColor(changing){
  var colorPicker = Math.floor((Math.random() * 5) + 1);
  switch (colorPicker) {
    case 1:
      changing.style.backgroundColor = "purple";
    break;
    case 2:
      changing.style.backgroundColor = "red";
    break;
    case 3:
      changing.style.backgroundColor = "green";
    break;
    case 4:
      changing.style.backgroundColor = "white";
    break;
    case 5:
      changing.style.backgroundColor = "yellow";
    break;
  }
}

function checker(){
  if(leftSlot.style.backgroundColor === middleSlot.style.backgroundColor &&
    middleSlot.style.backgroundColor === rightSlot.style.backgroundColor){
      winOrLose.innerHTML = "You Won";
  }else{
    winOrLose.innerHTML = "You Lost";
  }
}
