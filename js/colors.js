var numOfSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //Mode Buttons Listener
  modeSetup();
  squareSetup();
  newGame();
}

function squareSetup() {
  for (var i = 0; i < squares.length; i++) {
    //Add Event Listeners
    squares[i].addEventListener("click", function() {
      //Grab color
      var clickedColor = this.style.backgroundColor;
      //Compare color to pickedColor
      if (clickedColor === pickedColor) {
        h1.style.backgroundColor = clickedColor;
        messageDisplay.textContent = "Correct!";
        reset.textContent = "Play Again?";
        changeColors(clickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function modeSetup() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      //Easy, Hard, or Very Hard Mode
      if (this.textContent == "Easy") {
        numOfSquares = 3;
      } else if (this.textContent == "Hard") {
        numOfSquares = 6;
      } else {
        numOfSquares = 9;
      }
      newGame();
    });
  }
}
function newGame() {
  colors = generateRandomColor(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  reset.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

colorDisplay.textContent = pickedColor;

//Reset Game
reset.addEventListener("click", function() {
  newGame();
});

function changeColors(color) {
  //Loop through squares
  for (var i = 0; i < squares.length; i++) {
    //Change each color to match
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  //Make an array
  var arr = [];
  //add num random colors
  for (var i = 0; i < num; i++) {
    //Get and push random color into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor() {
  //Pick RGB from 0 - 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
