// getting users number input
var firstUserInput = Number(prompt("Player 1, Enter a Number 1-6: "));
var secondUserInput = Number(prompt("Player 2, Enter a Number 1-6: "));

// adding function to refresh page when the refresh page button is pressed
document.querySelector("button").onclick = function(){
    window.location.reload();
};

// checking if both user inputs are between 1 and 6
if (firstUserInput > 6 || firstUserInput < 1 || secondUserInput > 6 || secondUserInput < 1){
    alert("Please Put a Number Between 1 and 6");
    firstDice.setAttribute("src", "img/dice1.png");
    secondDice.setAttribute("src", "img/dice1.png");
}

// generating random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// declaring a winner and if it's a draw
if (firstUserInput === randomNumber1 && secondUserInput === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
    document.querySelector("h1").style.fontSize = "10rem";
} else if (firstUserInput === randomNumber1){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
    document.querySelector("h1").style.fontSize = "9rem";
} else if (secondUserInput === randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!"
    document.querySelector("h1").style.fontSize = "9rem";
}

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

// changing image for the second dice based on random number
if (randomNumber2 === 1){
    secondDice.setAttribute("src", "img/dice1.png");
} else if (randomNumber2 === 2){
    secondDice.setAttribute("src", "img/dice2.png");
} else if (randomNumber2 === 3){
    secondDice.setAttribute("src", "img/dice3.png");
} else if (randomNumber2 === 4){
    secondDice.setAttribute("src", "img/dice4.png");
} else if (randomNumber2 === 5){
    secondDice.setAttribute("src", "img/dice5.png");
} else if (randomNumber2 === 6){
    secondDice.setAttribute("src", "img/dice6.png");
}


// seeing if user inputs are numbers or not
if (isNaN(firstUserInput) || isNaN(secondUserInput)){
    alert("Both Inputs Must be a Number.");
    firstDice.setAttribute("src", "img/dice1.png");
    secondDice.setAttribute("src", "img/dice1.png");
}