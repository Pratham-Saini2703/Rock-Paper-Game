let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");

const userscorepara = document.querySelector("#userscore")
const compscorepara = document.querySelector("#computerscore")




const  genCompchoice = () => {
const options = ["rock" , "paper" , "scissor"];
const randIdx = Math.floor(Math.random() * 3);
return options [randIdx];
};

const drawgame = () =>{
  
  message.innerText = "Game is Drawn,Play Again";
}

const ShowWinner = (userWin,userchoices,compchoices) =>{
  if(userWin){
    userScore++;
    userscorepara.innerText = userScore;

 message.innerText = "YOU WIN🎉";
    message.style.backgroundColor = "green";
    message.innerText = `You win!${userchoices} beats ${compchoices}`;
    

    
  }else{
     computerScore++
    compscorepara.innerText = computerScore;

      message.innerText = "YOU LOOSE👎";
       message.style.backgroundColor = "red";
       message.innerText = `You Lost!${compchoices} beats ${userchoices}`;
    }
  }
  



const playgames = (userchoices) =>{
  console.log("userchoice = ", userchoices);
  const compchoices = genCompchoice(); // fixed typo here
  console.log("compchoice = ", compchoices);


  //if both choice are equal or draw match 
  if(userchoices === compchoices){
    drawgame();
  } else{
    let userWin = true;
    if(userchoices === "rock"){

      userWin = compchoices === "Paper"? false:true;
    }else if(userchoices === "paper"){

      userWin = compchoices === "scissor"? false : true;
    } else{

      userWin = compchoices === "rock"? false:true;
    }
    ShowWinner(userWin,userchoices,compchoices);


    
  }

}





choices.forEach((choices)=>{
  console.log(choices);
choices.addEventListener("click",()=>{
  const userchoices= choices.getAttribute("id");
  playgames(userchoices);
  

});
});


