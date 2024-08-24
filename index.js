// generating random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// creating variables for dice
var firstDice = document.querySelector(".img1");
var secondDice = document.querySelector(".img2");

// changing image based on random number for first dice
if (randomNumber1 === 1){
    firstDice.setAttribute("src", "img/dice1.png");
} else if (randomNumber1 === 2){
    firstDice.setAttribute("src", "img/dice2.png");
} else if (randomNumber1 === 3){
    firstDice.setAttribute("src", "img/dice3.png");
} else if (randomNumber1 === 4){
    firstDice.setAttribute("src", "img/dice4.png");
} else if (randomNumber1 === 5){
    firstDice.setAttribute("src", "img/dice5.png");
} else if (randomNumber1 === 6){
    firstDice.setAttribute("src", "img/dice6.png");
}