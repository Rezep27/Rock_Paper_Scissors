let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    let userInput = prompt("Insert one of the following values: Rock, paper, scissors: ");
    let fixedInput = userInput.toLowerCase().trim();
    result = verifyHumanChoice(fixedInput);

    if (result === 0){
        console.log("The value you entered is not among the available options, please try again.")
        result = getHumanChoice();
    }

    return result;
}

function verifyHumanChoice(humanChoice){
    switch (humanChoice) {
        case "rock":
            return 1;
            break;
        case "scissors":
            return 2;
            break;
        case "paper":
            return 3;
            break;
        default:
            return 0;
            break;
    }
}

function getComputerChoice(){
    let choice = Math.random();
    
    if(choice < 0.33){
        return 1;
    }
    else if(choice < 0.66){
        return 2;
    }
    else{
        return 3;
    }
}

function numberToChoice(number){
    switch (number) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Scissors";
            break;
        case 3:
            return "Paper";
            break;
        default:
            return "Value not in range";
            break;
    }
}

function playRound(humanChoice, computerChoice){
    let humanMovement = numberToChoice(humanChoice);
    let computerMovement = numberToChoice(computerChoice);

    if (humanChoice === computerChoice){
        console.log("It is a tie! Both players chose " + humanMovement);
    }
    else if ((computerChoice - humanChoice === 1) || (computerChoice - humanChoice === -2)){
        console.log("You win this round! " + humanMovement + " beats " + computerMovement);
        humanScore++;
    }
    else{
        console.log("You lose this round! " + computerMovement + " beats " + humanMovement);
        computerScore++;
    }
}

function displayWinner(){
    if (humanScore > computerScore){
        console.log("You win the game! With a score of " + humanScore + " points!")
    }
    else if(humanScore < computerScore){
        console.log("You lose the game! With a score of " + humanScore + " points!")
    }
    else{
        console.log("It is a tie! Your final score is " + humanScore + " points!")
    }
}
function playGame(){
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    displayWinner();
}

playGame();