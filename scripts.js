//begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round
let computerChoice;
let playerChoice;

let playerSelection = () => {
  let playerInput = prompt('Pick Rock Paper or Scissors');
  playerChoice = playerInput;
  computerPlay();
}

let computerPlay = () => {
  let random = Math.floor(Math.random() * 3);
  if(random == 0){
    computerChoice = 'rock';
  } else if(random == 1){
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  singleRound(computerChoice, playerChoice);
}


let singleRound = (computerChoice, playerChoice) => {
  if((playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors' )||
     (playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') ||
     (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper')){
       console.log(`The computer chose ${computerChoice} you win!`)
     } else{
       console.log(`The computer chose ${computerChoice} you lost!`)
     }
}

playerSelection();
