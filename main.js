// COIN FLIP SIMULATOR

// HTML Variables
let flipBtn = document.getElementById("coin-btn");
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

let diceBtn = document.getElementById("dice-btn");
let outputDiceEl = document.getElementById("dice-output");
let diceEl = document.getElementById("dice-out");

// Count Variuables
let numHeads = 0;
let numTails = 0;

let numDice = 0;

// Button Event Listener

flipBtn.addEventListener("click", btnClicked);
diceBtn.addEventListener("click", diceRoll);

function btnClicked() {
  // Generate a Random NUmber
  let randNum = Math.random();
  console.log(randNum);

  //   Simulate the Coin Flip.

  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails += 1;
    tailsEl.innerHTML = numTails;
  }
}

function diceRoll() {
  let randomNum = Math.random();
  console.log(randomNum);

  if (randomNum <= 0.22) {
    outputDiceEl.innerHTML = "<img src='img/1.png' />";
    numDice += 1;
    diceEl.innerHTML = numDice;
  } else if (randomNum <= 0.44) {
    outputDiceEl.innerHTML = "<img src='img/2.png' />";
    numDice += 1;
    diceEl.innerHTML = numDice;
  } else if (randomNum <= 0.55) {
    outputDiceEl.innerHTML = "<img src='img/3.png' />";
    numDice += 1;
    diceEl.innerHTML = numDice;
  } else if (randomNum <= 0.66) {
    outputDiceEl.innerHTML = "<img src='img/4.png' />";
    numDice += 1;
    diceEl.innerHTML = numDice;
  } else if (randomNum <= 0.77) {
    outputDiceEl.innerHTML = "<img src='img/5.png' />";
    numDice += 1;
    diceEl.innerHTML = numDice;
  } else if (randomNum <= 0.99) {
    outputDiceEl.innerHTML = "<img src='img/6.png' />";
    numDice += 1;
    diceEl.innerHTML = numDice;
  }
}
