console.log("me and my arrow");

// Requirements
// Your job is to create a web page that, when the user clicks anywhere in the window, 
// randomly determine if an air traveller should go down the left lane or the right lane 
// by displaying an arrow in that direction.


//create variables for the arrows and the image div: 

var leftArrow = `<img src="images/arrow-left.png" id="leftArrow">`;
var rightArrow = `<img src="images/arrow-right.png" id="rightArrow">`;
var Area = document.getElementById("imgArea");

//add event listener to the Area
Area.addEventListener("click", randArrow);
console.log(randArrow);

///////////////////////////////////////////////////////////////////////////

//Declare a function which will randomize the click event to show/hide one image or another:   
//After randomizing the click, make an if / else which will invoke one of two functions to DOM the arrow:

function randArrow() {
    var randOmize = Math.floor(Math.random() * 2);
    console.log('randOmize');

    if (randOmize < 1) {
        showLeft();
    } else {
        showRight();
    }
};

function showLeft() {
    Area.innerHTML = leftArrow;
};

function showRight() {
    Area.innerHTML = rightArrow;
};