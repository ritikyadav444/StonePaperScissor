let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    return "SCISSORS";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = convertToWord(userChoice) + "beats" + convertToWord(computerChoice) + ".You Win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = convertToWord(userChoice) + "loses to" + convertToWord(computerChoice) + ".You Lost!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 1000);

}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = convertToWord(userChoice) + "equals to" + convertToWord(computerChoice) + ".Draw!";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow') }, 1000);

}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })


    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissor_div.addEventListener('click', function() {
        game("s");
    })
}
main();