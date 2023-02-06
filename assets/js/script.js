// Assign the buttons to variable
const buttons = document.getElementsByClassName('button');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resultArea = document.getElementById('result');
const outcome = document.getElementById('outcome');
const icon = document.getElementById('icon');
const computerOutcome = document.getElementById('computerHand');

const score = document.getElementById('scoreArea');

const scoreboard = {
  player: 0,
  computer: 0,
}


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
// When the user clicks the button, we need to get the value of the button




for (let button of buttons) {
    button.addEventListener('click', function(){
        let playerGuess = hands.find((hand)=> hand.name === button.value);
        let computerGuess = getComputerGuess();
        console.log(playerGuess.name, computerGuess.name);
        let compareGuess = compare(playerGuess, computerGuess);
        
        

        setResult=(playerGuess.icon, computerGuess.hand, compareGuess);
        updateScore(compareGuess);
        console.log(playerScore, computerScore);
        if(playerScore === 10 || computerScore === 10) {
          alert('Game Over')
        }
        
    });
};


// Let the computer guess

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


function updateScore(winner) {
  if (winner === 'player') {
    playerScore++;
    playerScoreDisplay.innerText = playerScore;
    // Show modal result
    resultArea.innerHTML = `
    <h1 class="text-win">You win!</h1>
    <i class="fa-solid fa-hand-back-${getComputerGuess}" ></i>
    <p>Computer chose <strong>${getComputerGuess}</strong></p>`
  } else if (winner === 'computer') {
    computerScore++;
    computerScoreDisplay.innerText = computerScore;
    resultArea.innerHTML = `
    <h1 class="text-lose">You lose!</h1>
    <i class="fa-solid fa-hand-back-${getComputerGuess}" ></i>
    <p>Computer chose <strong>${getComputerGuess}</strong></p>`
  } else {
    resultArea.innerHTML = `
    <h1 class="text-lose">It's a draw!!</h1>
    <i class="fa-solid fa-hand-back-${getComputerGuess}" ></i>
    <p>Computer chose <strong>${getComputerGuess}</strong></p>`

  }
  
}

document.getElementById('scoreArea').innerHTML =
    `<p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>`;

  outcome.style.display = 'block';


// If player has a score 10 we have a winner
// Allow the user to reset the game

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer= 0;
  score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>
    `;
}

