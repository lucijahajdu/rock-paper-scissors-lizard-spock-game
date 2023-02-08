// Assign the buttons to variable
const buttons = document.getElementsByClassName('button');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resultArea = document.getElementById('result');
const outcome = document.getElementById('outcome');
const icon = document.getElementById('icon');
const computerOutcome = document.getElementById('computerHand');
const restartButton = document.getElementById('restart');
const score = document.getElementById('scoreArea');
const resultContainer = document.getElementById('resultContainer');
const hands = [{
    name: 'rock',
    beats: ['scissors', 'lizard'],
    icon: 'fa-solid fa-hand-back-fist'
},
{
    name: 'paper',
    beats: ['rock', 'spock'],
    icon: 'fa-solid fa-hand'
},
{
    name: 'scissors',
    beats: ['paper', 'lizard'],
    icon: 'fa-solid fa-scissors'
},
{
    name: 'lizard',
    beats: ['paper', 'spock'],
    icon: 'fa-solid fa-hand-lizard'
},
{
    name: 'spock',
    beats: ['rock', 'scissors'],
    icon: 'fa-solid fa-hand-spock'
}
];

let playerScore = 0;
let computerScore = 0;

// Add event listener to each game button
for (let button of buttons) {
    button.addEventListener('click', function() {
        console.log(playerScore)
        let playerGuess = hands.find((hand)=> hand.name === button.value);
        let computerGuess = getComputerGuess();
        let compareGuess = compare(playerGuess, computerGuess);

        // If player has a score 10 we have a winner
        setResult = (playerGuess.icon, computerGuess.hand, compareGuess);
        updateScore(compareGuess, computerGuess);
        if(playerScore === 10 || computerScore === 10) {
          let winner = playerScore === 10 ? 'player' : 'computer';
          setScore()
          setTimeout(() => {
            alert(`Game over! ${winner} wins!`)
            restartGame();
          }, 500);
        }
        
    });
};

// Let the computer guess a random hand
function getComputerGuess() {
    const computerHand = hands[Math.floor(Math.random() * 5)]

    return computerHand
    }
    
// Compare the players and computers choice

function compare(playerGuess, computerGuess) {
    let result = '';

    if (playerGuess.name === computerGuess.name){
      result = 'tie';
    } else if (playerGuess.beats.includes(computerGuess.name)){
      result = 'player';
    } else {
      result = 'computer';
    }

    return result;
};

// If computer wins, add to the computers score
// If player wins, add to the players score
// If it is a tie we do nothing
// Update the score
function updateScore(winner, computerGuess) {
  if (winner === 'player') {
    playerScore++;
    // Show modal result
    resultArea.innerHTML = `
    <h1 class="text-win">You win!</h1>
    <i class="fa-solid fa-hand-back-${computerGuess.icon}" ></i>
    <p>Computer chose <strong>${computerGuess.name}</strong></p>`
  } else if (winner === 'computer') {
    computerScore++;
    resultArea.innerHTML = `
    <h1 class="text-lose">You lose!</h1>
    <i class="fa-solid fa-hand-back-${computerGuess.icon}" ></i>
    <p>Computer chose <strong>${computerGuess.name}</strong></p>`
  } else {
    resultArea.innerHTML = `
    <h1 class="text-lose">It's a draw!!</h1>
    <i class="fa-solid fa-hand-back-${computerGuess.icon}" ></i>
    <p>Computer chose <strong>${computerGuess.name}</strong></p>`
  }
  setScore()
  displayRoundResult()
  setTimeout(() => {
    displayRoundResult()
  }, 2000);
}

// Set the score
function setScore() {
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
}

// Display the result of the round
function displayRoundResult() {
  resultContainer.classList.contains('hide') ? resultContainer.classList.remove('hide') : resultContainer.classList.add('hide');
}

// Allow the user to reset the game

function restartGame() {
  playerScore = 0;
  computerScore= 0;
  setScore();
}

restartButton.addEventListener('click', restartGame);

