// generating random number
var randomNumber = Math.floor(Math.random() * 6) + 1;

// changing image based on random number
if (randomNumber === 6){
    document.querySelector("dice").setAttribute("img, img/dice6.png");
}