// Assign the buttons to variable
const buttons = document.getElementsByClassName('button');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resultArea = document.getElementById('result');
const outcome = document.getElementById('outcome');
const icon = document.getElementById('icon');

const hands = [{
    name: 'rock',
    beats: ['scissors', 'lizard']
    icon: 'fa-solid fa-hand-back-fist'
},
{
    name: 'paper',
    beats: ['rock', 'spock']
    icon: 'fa-solid fa-hand'
},
{
    name: 'scissors',
    beats: ['paper', 'lizard']
    icon: 'fa-solid fa-scissors'
},
{
    name: 'lizard',
    beats: ['paper', 'spock']
    icon: 'fa-solid fa-hand-lizard'
},
{
    name: 'spock',
    beats: ['rock', 'scissors']
    icon: 'fa-solid fa-hand-spock'
}
];
// When the user clicks the button, we need to get the value of the button


for (let button of buttons) {
    button.addEventListener('click', function(){
        let playerGuess = hands.find((hand)=> hand.name === button.value);
        let computerGuess = getComputerGuess();
        console.log(playerGuess, computerGuess);
        let compareGuess = compare(playerGuess, computerGuess)
        console.log(compareGuess);
        
    });
};


// Let the computer guess

function getComputerGuess() {
    const computerHand = hands[Math.floor(Math.random() * 5)]

    return computerHand

    }
    

// Compare the players and computers choice

function compare(playerGuess, computerGuess) {
    console.log(playerGuess, computerGuess);
    if (computerGuess === playerGuess) {
        alert = 'Tie!'
    } else if (playerGuess === 'rock') {
        if (computerGuess === 'paper') {
          return 'computer';
        } else {
          return 'player';
        }
      } else if (playerGuess === 'paper') {
        if (computerGuess === 'scissors') {
          return 'computer';
        } else {
          return 'player';
        }
      } else if (playerGuess === 'scissors') {
        if (computerGuess === 'rock') {
          return 'computer';
        } else {
          return 'player';
        } 
      } else if (playerGuess === 'spock') {
        if (computerGuess === 'rock') {
          return 'computer';
        } else {
          return 'player';
        } 
      } else if (playerGuess === 'lizard') {
        if (computerGuess === 'paper') {
          return 'computer';
        } else {
          return 'player';
        } 
      } 
      }

// If computer wins, add to the computers score

// If player wins, add to the players score
// If it is a tie we do nothing
// Update the score
// If player has a score 10 we have a winner
// Allow the user to reset the game
