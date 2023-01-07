// javascript for dice game
// arrays for possible dice images
// (can also use concatenation instead of array)
var dice = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

// function for rand num generator
// generate random number 0-5 to select dice image from array
function dice_roll(){
    var dice_roll = Math.floor(Math.random()*6);
    return dice_roll;
}


// set img src for player 1 based on random selection
dice_roll_01 = dice_roll();
//document.querySelector(".img1").setAttribute("src",dice[dice_roll_01]);
// could also set var to simplify and reuse for next one
var img_sel = document.querySelectorAll("img");
img_sel[0].setAttribute("src",dice[dice_roll_01]);

// set img src for player 2 based on random selection
dice_roll_02 = dice_roll();
//document.querySelector(".img2").setAttribute("src",dice[dice_roll_02]);
img_sel[1].setAttribute("src", dice[dice_roll_02]);

// declare winner based on dice rolls
if(dice_roll_01>dice_roll_02){
    var headline = "Player 1 Wins!";
    var announce = "Winner is PLAYER 1!";
    // add border around winner by adding CSS
    img_sel[0].classList.add("winner");
} else if(dice_roll_01<dice_roll_02){
    var headline = "Player 2 Wins!";
    var announce = "Winner is PLAYER 2!";
    // add border around winner by adding CSS class
    img_sel[1].classList.add("winner");
} else {
    var headline = "Draw!";
    var announce = "It's a TIE!";
}
// set text content based on outcome
document.querySelector(".announce p").textContent=announce;
document.querySelector("h1").textContent=headline;