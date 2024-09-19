let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];
    
};

const drawGame = () =>  {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b3";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // Generate computer choice -> modular
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        //Draw Game
        drawGame();
    } else{
    //Check for win
    let userWin = true;
    if (userChoice === "Rock") {
        //scissors, paper
        userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
        //rock , scissors
        userWin = compChoice === "Scissor" ? false : true;
    } else {
        //rock, paper
        userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin , userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});
