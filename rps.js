console.log("Rock paper scissors v1")

function playGame(playerChoice, computerChoice) {
    let playerScore = 0;
    let computerScore = 0;
    let numberOfRounds = 5;

    
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
        computerChoice = String(selectedString.toUpperCase());
        return computerChoice;
    }

    function getPlayerChoice(){
        playerChoice = String(prompt("Beat the computer in Rock, Paper, Scisscors! Enter Rock, Paper or Scissors", "Rock"));
        playerChoice = playerChoice.toUpperCase();
        
        if (playerChoice == "ROCK" || playerChoice == "PAPER" || playerChoice == "SCISSORS") {
            console.log(playerChoice, ": Returned Player choice in function")
            return playerChoice;
        }
        else {
            console.log("Please enter Rock, Paper or Scissors (case-insensitive)");
            playerChoice = 'Incorrect entry';
        }
    }

    function playRound(computerChoice, playerChoice) {
        if(!playerChoice) {
            playerChoice = getPlayerChoice();
        }
        if (!computerChoice) {
            computerChoice = getComputerChoice();
        }

        let outcome = '';
        
        if (playerChoice === computerChoice) {
            outcome = "That round was a tie!";
        } else if (
            (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (playerChoice === "PAPER" && computerChoice === "ROCK") ||
            (playerChoice === "SCISSORS" && computerChoice === "PAPER"))
            {
                outcome = "You won that round!";
                playerScore++;
        } else {
            outcome = "You lost that round!";
            computerScore++;
        }
        
        console.log(outcome);
        return { playerScore, computerScore, outcome }

    }

    for (let i=1; i <= numberOfRounds; i++) {
        outcome = playRound();
        console.log(`${playerChoice} vs ${computerChoice}`);
        console.log();
        console.log(`Round ${i} of ${numberOfRounds}`)
        console.log(`The current score is Player: ${playerScore} / Computer: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log("You are the winner!")
    }
    else if (computerScore > playerScore) {
        console.log("You lose! Try again.")
    }
    else if (computerScore == playerScore) {
        console.log("It was a tie! Try again.")
    }
}

playGame()