
// Creates two random numbers from 1 to 6.
var randomNr1 = Math.floor((Math.random() * 6) + 1);
var randomNr2 = Math.round((Math.random() * 5) +1);

// Displays the dice image coresponding to the random number generated.
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNr1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNr2 + ".png");

// Compares the two generated dice numbers and displays who is the winner.
if (randomNr1 === randomNr2){
    document.querySelector("h1").textContent = "It's a Draw!";
    console.log("Its a draw:");
}
if(randomNr1 < randomNr2) {
    document.querySelector("h1").textContent = "Player 2 Won! -->";
    console.log("Player 2 won:");
}
if(randomNr1 > randomNr2) {
    document.querySelector("h1").textContent = "<-- Player 1 Won!";
    console.log("Player 1 won:");
}

// Logs the random numbers.
console.log(" ");
console.log(" ");
console.log("The random Nr1 is: " + randomNr1);
console.log("The random Nr2 is: " + randomNr2);
console.log(" ");
console.log(" ");