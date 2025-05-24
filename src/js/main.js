let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
const msgContainerter = document.querySelector(".msg-container");

const drawGame = () =>{
    msg.innerText = "Draw";
    msgContainerter.style.backgroundColor = "#CCC7B9";
}

const computerChoice = () => {
  const comChoice = ["rock", "Paper", "scissor"];
  const comchoceIndex = Math.floor(Math.random() * 3);
  return comChoice[comchoceIndex];
};

const showWinner = (userWin , userChoice , machineChoice) =>{
    if(userWin){
        userScore++;
        user.innerHTML = userScore;
        msg.innerText = `You win. ${userChoice} beats ${machineChoice}`;
        msgContainerter.style.backgroundColor = "green";
        
        

    }else{
        computerScore++;
        computer.innerHTML = computerScore;
        msg.innerText = `You lose. ${machineChoice} beats ${userChoice}`
        msgContainerter.style.backgroundColor = "red";

        
    }
}
const playGame = (userChoice) =>{

    const machineChoice = computerChoice();
    console.log(machineChoice)
    if(userChoice === machineChoice){
        drawGame();
    }else{
        let userWin = true;

        if(userChoice === "rock"){
            // computer choic : paper scissor
            userWin = machineChoice === "scissor" ?true : false ;
        }else if(userChoice === "paper"){
            // rock scissor
            userWin = machineChoice === "rock"? true : false;
        }else{
            userWin = machineChoice === "paper" ?true : false;
        }
        showWinner(userWin ,userChoice , machineChoice);
    }



}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    console.log("Usoer : ", userChoice)
  });
});
