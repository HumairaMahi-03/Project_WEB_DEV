let UserScore=0;
let CmpScore=0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#UserScore");
const cmpScorePara = document.querySelector("#cmpScore");

const genCmpChoice = ()=>{
   const options=["rock","paper","scissors"];
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];
};


const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
  
const showWinner = (userWin,userchoice,compChoice) =>{
    if(userWin){
        UserScore++;
        userScorePara.innerText=UserScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
      } else {
        CmpScore++;
        cmpScorePara.innerText = CmpScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
      }

    
}  ;
const playGame=(userchoice) => {
      const compChoice=genCmpChoice();

      if(compChoice === userchoice){
        drawGame();
      }
      else{
        let userWin = true;
        if(userchoice == "rock"){
            userWin = compChoice == "paper"? false : true;
        }
        else if(userchoice == "paper"){
            userWin = compChoice == "scissors"? false: true;
        }
        else{
            userWin = compChoice == "rock"? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
      }
      
};


choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
      const userchoice = choice.getAttribute("id");
      playGame(userchoice);
    });
});