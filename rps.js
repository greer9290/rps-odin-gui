console.log("Rock paper scissors v1");
let roundInput = document.querySelector('input');
let playRoundBtn = document.querySelector('button[id=playRound]');
let setRoundBtn = document.querySelector('button[id=setRoundCount]');
let resetGameBtn = document.createElement('button');
resetGameBtn.id = 'resetBtn';
resetGameBtn.textContent = 'RESET GAME';
let remainingRoundsLbl = document.querySelector('label[id=remainingRounds]');
let roundResults = document.querySelector('span[id=roundResults]');
let matchResults = document.querySelector('span[id=matchResults]');
let playerScoreField = document.querySelector('span[id=player-score]');
let computerScoreField = document.querySelector('span[id=computer-score]');
let computerChoiceField = document.querySelector('button[id=computerChoice]');
let playerChoices = document.querySelector('ul[id=playerChoices]');
let scissorsBtn = document.querySelector('button[id=scissors]');
let paperBtn = document.querySelector('button[id=paper]');
let rockBtn = document.querySelector('button[id=rock]');
let resetField = document.querySelector('ul[id=resetfield]');

let playerScore = 0;
let computerScore = 0;
let currentRoundCount = 0;
let totalRoundCount = 0;
let outcome = '';

roundResults.textContent = outcome;
playerScoreField.textContent = playerScore;
computerScoreField.textContent = computerScore;

playerChoices.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock':
            selectedButton = target.textContent;
            playerChoice = selectedButton;
        case 'paper':
            selectedButton = target.textContent;
            playerChoice = selectedButton;
        case 'scissors':
            selectedButton = target.textContent;
            playerChoice = selectedButton;
    }
    console.log("Player choice is", playerChoice);
    setButtonColor(playerChoice);
    return playerChoice; 
});

function setButtonColor(playerChoice) {
    if (playerChoice === "ROCK") {
        rockBtn.style.color = "white";
        rockBtn.style.backgroundColor = "khaki";
        scissorsBtn.style.color = "black";
        scissorsBtn.style.backgroundColor = "grey";
        paperBtn.style.color = "black";
        paperBtn.style.backgroundColor = "grey";
    } else if (playerChoice === "SCISSORS") {
        scissorsBtn.style.color = "white";
        scissorsBtn.style.backgroundColor = "khaki";
        rockBtn.style.color = "black";
        rockBtn.style.backgroundColor = "grey";
        paperBtn.style.color = "black";
        paperBtn.style.backgroundColor = "grey";
    } else if (playerChoice === "PAPER") {
        paperBtn.style.color = "white";
        paperBtn.style.backgroundColor = "khaki";
        scissorsBtn.style.color = "black";
        scissorsBtn.style.backgroundColor = "grey";
        rockBtn.style.color = "black";
        rockBtn.style.backgroundColor = "grey";
    } else {
        alert("Please select Rock, Paper, or Scissors")
    }
};

resetGameBtn.addEventListener('click', () => {
    resetGame();
})

function resetGame(){
    let playerScore = 0;
    let computerScore = 0;
    let currentRoundCount = 0;
    let outcome = '';

    roundResults.textContent = outcome;
    playerScoreField.textContent = playerScore;
    computerScoreField.textContent = computerScore;
    remainingRoundsLbl.textContent = `Rounds Remaining: ${currentRoundCount}`;
    matchResults.textContent = '';
    matchResults.style.backgroundColor = 'black';

    resetGameBtn.remove();
    
}

setRoundBtn.addEventListener('click', () => {
    totalRoundCount = roundInput.valueAsNumber;
    console.log(roundInput.valueAsNumber);
    console.log(totalRoundCount);
    currentRoundCount = totalRoundCount;
    remainingRoundsLbl.textContent = `Rounds Remaining: ${currentRoundCount}`;
    roundInput.value = '';
    return {currentRoundCount, totalRoundCount};
})

playRoundBtn.addEventListener('click', () => {
    if (playerChoice != undefined && currentRoundCount > 0) {
    playRound(playerChoice, computerChoice, currentRoundCount);
    roundResults.textContent = outcome;
    currentRoundCount = decreaseRoundCount(currentRoundCount)
    trackGame(currentRoundCount);
    } else {
        alert("Select rock, paper, or scissors and enter a round count")
    }
})

function decreaseRoundCount(currentRoundCount){
    if (currentRoundCount > 0) {
        currentRoundCount--;
        remainingRoundsLbl.textContent = `Rounds Remaining: ${currentRoundCount}`;
        return currentRoundCount;
    } else {
        alert("Please enter a new round count");
    }
    
}


function playRound(playerChoice, computerChoice, rounds) {
    if (rounds == NaN || rounds <= 0) {
        alert("Please enter your desired round count first!");
        return;
    }
    if (playerChoice === undefined) {
        alert("Please select Rock, Paper, or Scissors");
        return;
    } else {
        console.log("Player chose: ", playerChoice, " for that round.")
    }
    
    computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        outcome = "That round was a tie!";
        roundResults.textContent = outcome;
    } else if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER"))
        {
            outcome = "You won that round!";
            playerScore++;
            roundResults.textContent = outcome;
            playerScoreField.textContent = playerScore;
    } else {
        computerScore++;
        roundResults.textContent = outcome;
        computerScoreField.textContent = computerScore;
    }
    return { playerScore, computerScore, outcome }

}

function trackGame(currentRoundCount) {
    if (currentRoundCount == 0) {
            if (playerScore > computerScore) {
                matchResults.textContent = "You won that match! Good job.";
                roundCount = 0;
                playerScore = 0;
                computerScore = 0;
                playerScoreField.textContent = playerScore;
                computerScoreField.textContent = computerScore;
                resetField.appendChild(resetGameBtn);
                matchResults.style.backgroundColor = 'green';
            } else if (computerScore > playerScore) {
                matchResults.textContent = "You lost that match! Try again.";
                roundCount = 0;
                playerScore = 0;
                computerScore = 0;
                playerScoreField.textContent = playerScore;
                computerScoreField.textContent = computerScore;
                resetField.appendChild(resetGameBtn);
                matchResults.style.backgroundColor = 'red';
            } else {
                matchResults.textContent = "It was a tie! Try again.";
                roundCount = 0;
                playerScore = 0;
                computerScore = 0;
                playerScoreField.textContent = playerScore;
                computerScoreField.textContent = computerScore;
                resetField.appendChild(resetGameBtn);
            }
    }   else {
            return currentRoundCount;
        }
}


function getComputerChoice() {
    let rps_strings = ["rock", "paper", "scissors"]
    let selectInt = 3;
    selectInt = Math.random(selectInt)*selectInt;
    if (selectInt <= 1) {
        selectedString = rps_strings[0]
    }
    else if (selectInt <= 2) {
        selectedString = rps_strings[1]
    }
    else {
        selectedString = rps_strings[2]
    }
    let computerChoice = String(selectedString.toUpperCase());
    computerChoiceField.textContent = computerChoice;
    return computerChoice;
}