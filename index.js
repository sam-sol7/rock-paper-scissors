playGame();

function getComputerChoice() {
    let val = Math.floor(Math.random(0, 1) * 3);

    if (val == 0) {
        return "rock";
    }
    else if (val == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
};

function getHumanChoice() {
    let userInput;
    while (true) {
        userInput = prompt("Make your choice!");
        if (userInput.toLocaleLowerCase() == "rock" || userInput.toLocaleLowerCase() == "paper" || userInput.toLocaleLowerCase() == "scissors") {
            return userInput;
        }
    }
};


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection, computerSelection;


    function playRound(humanSelection, computerSelection) {
        if(humanSelection == computerSelection) {
            console.log("Draw!");
            return;
        }
        if(humanSelection == "rock"){
            if(computerSelection == "scissors") {
                console.log("You win! Rock beats scissors");
                humanScore++;
            }
            else if(computerSelection == "paper") {
                console.log("You lose! Paper beats rock");
                computerScore++;
            }
            return;
        }
        if(humanSelection == "paper"){
            if(computerSelection == "rock") {
                console.log("You win! Paper beats rock");
                humanScore++;
            }
            else if(computerSelection == "scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            }
            return;
        }
        if(humanSelection == "scissors"){
            if(computerSelection == "paper") {
                console.log("You win! Scissors beats Paper");
                humanScore++;
            }
            else if(computerSelection == "rock") {
                console.log("You lose! Rock beats scissors");
                computerScore++;
            }
            return;
        }
    };


    for(let i = 0; i < 5; i++) {
        console.log(" ");
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(`Your choice: ${humanSelection}`);
        console.log(`CP choice: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
    }

    console.log(`H score = ${humanScore} and CP score = ${computerScore}`);
    if(humanScore > computerScore) {
        console.log(`You win with a score of: ${humanScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose with a score of: ${humanScore}`);
    } else {
        console.log("It's a draw!");
    }
}

