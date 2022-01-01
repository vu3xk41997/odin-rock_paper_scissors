let options = ["Rock", "Raper", "Scissor"];

function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
};

//To format the value of playerSelection
function capitalize(string){
    let new_string = string.toLowerCase();
    return new_string.charAt(0).toUpperCase() + new_string.slice(1);
}


function playRound(playerSelection, computerSelection){
    if ((playerSelection == "Rock") && (computerSelection == "Scissor")) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if ((playerSelection == "Rock") && (computerSelection == "Paper")) {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if ((playerSelection == "Paper") && (computerSelection == "Scissor")) {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if ((playerSelection == "Scissor") && (computerSelection == "Paper")) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if ((playerSelection == "Scissor") && (computerSelection == "Rock")) {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if ((playerSelection == computerSelection)) {
        return "Tie!";
    } else {
        return "There's something wrong...";
    };
};

function game(){
    let num = 1;
    let playerCount = 0;
    let computerCount = 0;
    while(num <= 5){
        const playerSelection = capitalize(prompt("Rock, Paper, Scissor?"));
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection).includes("win")){
            playerCount++;
            num++;
        } else if (playRound(playerSelection, computerSelection).includes("lose")){
            computerCount++;
            num++;
        } else if (playRound(playerSelection, computerSelection).includes("Tie")){
            num++;
        } else if (playRound(playerSelection, computerSelection).includes("wrong")) {
            continue;
        };
    };
    if (playerCount > computerCount) {
        alert("You are the winner!");
    } else if (playerCount > computerCount) {
        talert ("Computer wins! Too bad...");
    } else if (playerCount == computerCount) {
        alert("It's a tie.");
    };
};

game();