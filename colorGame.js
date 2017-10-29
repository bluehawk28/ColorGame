
var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var modeButtons = document.querySelectorAll(".mode");

init();


function init(){
	// ----- mode buttons -----
	setUpModeButtons();
	// ----- set up squares----
	setUpSquares();
	//--- reset --
	reset();
}

// ----- mode buttons -----
function setUpModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
			modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset();
		});
	}
}

// ----- set up squares----
function setUpSquares(){
	for(var i=0; i<squares.length; i++){
		//add click listener to squares
		squares[i].addEventListener("click",function(){
			//grab color of picked square
			var clickedColor = this.style.backgroundColor;
				//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColor(clickedColor); 
				h1.style.backgroundColor =clickedColor;
			}else{
				 this.style.background = "#232323";
				 messageDisplay.textContent = "Incorrect. Try Again";
				}
		});
	}
}

//--- reset --
function reset(){
	//generate all new colors
	colors = generateRandomColors(numOfSquares);
	//pick new random color on the array
	pickedColor = pickColor();
	//Chnage colordisplay to matched color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//change colors of squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.display = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}
	//reset the background of h1
	h1.style.background = "steelblue";
	messageDisplay.textContent = " ";
	
}
// -----Easy Mode button Code-----
// easyButton.addEventListener("click",function(){
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numOfSquares = 3;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// -----Hard Mode button Code-----
// hardButton.addEventListener("click",function(){
// 	easyButton.classList.remove("selected");
// 	hardButton.classList.add("selected");
// 	numOfSquares = 6;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
	
// 	for(var i=0;i<squares.length;i++){
// 		squares[i].style.display = "block";
// 		squares[i].style.background = colors[i];
// 	}
// });

resetButton.addEventListener("click",function(){
	reset();
});

function changeColor(color){
	//loop through all squares
	for(var i = 0; i<squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
;	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length) ;
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0 ; i < num ; i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r +", "+ g +", "+ b +")";

}