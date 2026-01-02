let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    return choice[parseInt(Math.random() * 3)];
}

function getHumanChoice(){
    const choice = ["rock", "paper", "scissors"];
    
    let input = prompt("Rock, Paper, Or Scissor?");
    if(input){
        input.toLowerCase();
    }
    if(choice.includes(input)){
        return input;
    }else{
        console.log("Invalid input! Try again!");
        return undefined;
    }
}

console.log("Running game!");
function playRound(humanChoice , computerChoice){

    if (!humanChoice) return;
    
    switch(computerChoice){
        case "scissors":
            if(humanChoice === "rock"){
                console.log("Human wins! rock beats scissors");
                ++humanScore;
            }else if(humanChoice === "paper"){
                console.log("Clanker wins! scissors beats paper");
                ++computerScore;
            }
            else{
                console.log("TIE!");
            }
            break;
        case "rock":
            if(humanChoice === "paper"){
                console.log("Human wins! paper beats rock");
                ++humanScore;
            }else if(humanChoice === "scissors"){
                console.log("Clanker wins! rock beats scissor");
                ++computerScore;
            }
            else{
                console.log("TIE!");
            }
            break;
        case "paper":
            if(humanChoice === "scissors"){
                console.log("Human wins! scissor beats paper");
                ++humanScore;
            }else if(humanChoice === "rock"){
                console.log("Clanker wins! paper beats rock");
                ++computerScore;
            }
            else{
                console.log("TIE!");
            }
            break;
    }

    console.log(`SCORE: Human - ${humanScore} Computer - ${computerScore}`);
}

while(humanScore < 5 && computerScore < 5){
    playRound(getHumanChoice(), getComputerChoice());
}

if(humanScore >= 5){
    console.log("Humans win!");
}else{
    console.log("Computer wins!");
}