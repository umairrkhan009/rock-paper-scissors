function getComputerChoice(){
    const options=["rock","paper","scissors"]
    return options[Math.floor(Math.random() * options.length)]
}


function playRound(playerSelection,computerSelection){
    playerSelection=prompt("Enter your play: ")
    if(playerSelection=== undefined|| playerSelection===null || playerSelection===""){
        alert("Canceled")
        return;
    }
    else{
        playerSelection.toLowerCase();
        console.log("You played", playerSelection)
    }
    
    computerSelection=getComputerChoice();
    console.log("Computer played- ",computerSelection)

    if(playerSelection===computerSelection){
        return result="Tie"
    }
    else{
        if(playerSelection==="rock"){
            if(computerSelection==="paper"){
                return result=  "Computer Wins! Paper beats Rock."
            }
            else{
                return result="You Win! Rock beats Scissor"
            }
        }
        else if(playerSelection==="paper"){
            if(computerSelection==="rock"){
                return result="You Win! Paper beats Rock."
            }
            else{
                return result="Computer Wins! Scissors beat Rock"
            }
        } 
        
        else if(playerSelection==="scissors"){
            if(computerSelection==="paper"){
                return result="You Win! Scissors beat Paper"
            }
            else{
                return result="Computer Wins! Rock beats Scissor"
            }
        }

        else{
            return result="Enter a correct value"
        }
}
}

function game(){
    let userCount=0,compCount=0;
    for(let i=0; i<=4;i++){
        playRound();
        console.log(result)
        if (result==="Tie"){
            i--;
            console.log("Your wins- ",userCount + " Computer Wins- ", compCount)
        }
        else if(result==="You Win! Scissors beat Paper"|| result==="You Win! Paper beats Rock."||result==="You Win! Rock beats Scissor"){
            userCount++;
            console.log("Your wins- ",userCount + " Computer Wins- ", compCount)
        }
        else if(result==="Computer Wins! Paper beats Rock."||result==="Computer Wins! Scissors beat Rock"||result==="Computer Wins! Rock beats Scissor"){
            compCount++;
            console.log("Your wins- ",userCount + " Computer Wins- ", compCount)
        }
        
    }
    if(userCount>compCount){
        return "You are the final winner"
    }
    else if(compCount>userCount){
        return "Computer is the final winner"
    }
}