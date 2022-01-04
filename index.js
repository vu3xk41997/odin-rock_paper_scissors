let options = ["Rock", "Paper", "Scissor"];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
};

//To format the value of playerSelection
function capitalize(string) {
    let new_string = string.toLowerCase();
    return new_string.charAt(0).toUpperCase() + new_string.slice(1);
}


function playRound(playerSelection, computerSelection) {
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
    } ;
};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(){
    playerSelection = capitalize(button.id);
    computerSelection = computerPlay();
    if ((playerCount < 5) && (computerCount < 5)){
        game()
    };
}));


// if ((playerCount < 5) && (computerCount < 5)){
//     game();
// } else if (playerCount == 5) {
//     document.getElementById('final').innerText = "Congratulations! You defeated the computer.";
// } else if (computerCount == 5) {
//     document.getElementById('final').innerText = "Uff! Computer defeated you."
// };



let playerSelection = "";
let computerSelection = "";

let playerCount = 0;
let computerCount = 0;

function game() {
    document.getElementById('eachGame').innerText = playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection).includes("win")) {
        playerCount++;
        if (playerCount == 5) {
            document.getElementById('final').innerText = "Congratulations! You defeated the computer.";
        } else if (computerCount == 5) {
            document.getElementById('final').innerText = "Uff! Computer defeated you."
        };
    } else if (playRound(playerSelection, computerSelection).includes("lose")) {
        computerCount++;
        if (playerCount == 5) {
            document.getElementById('final').innerText = "Congratulations! You defeated the computer.";
        } else if (computerCount == 5) {
            document.getElementById('final').innerText = "Uff! Computer defeated you."
        };
    };
    document.getElementById('pCount').innerText = playerCount;
    document.getElementById('cCount').innerText = computerCount;
};

