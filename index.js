// generating random number
var randomNumber = Math.floor(Math.random() * 6) + 1;

// creating variables for dice
var firstDice = document.getElementById("first-dice");
var secondDice = document.getElementById("second-dice");

// changing image based on random number
if (randomNumber === 6){
    document.querySelector("dice-container.first-dice").setAttribute("img, img/dice4.png");
}