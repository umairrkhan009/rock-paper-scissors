function getComputerChoice() {
    const options = ["rock", "paper", "scissor"]
    return options[Math.floor(Math.random() * options.length)]
}

const buttons = document.querySelectorAll('input')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value)
    })
})

function disableButton(){
    buttons.forEach(elem => {
        elem.disabled=true
    })
}

let userCount=0;
let compCount=0;

function playRound(playerSelection,computerSelection=getComputerChoice()){
    let result =''

    if(playerSelection=='rock' && computerSelection=='scissor' ||
    playerSelection=='paper' && computerSelection=='rock' ||
    playerSelection=='scissor' && computerSelection=='paper'){
        userCount+=1

        result="You win! "+ playerSelection+" beats "+computerSelection+"<br><br>Player Score "+userCount+"<br>Computer Score "+compCount

        if(userCount===5){
            result+= "<br><br>You won the game. Reload the page to play again."
            disableButton()
        }
    }

    else if(playerSelection=='rock' && computerSelection=='paper' ||
    playerSelection=='paper' && computerSelection=='scissor' ||
    playerSelection=='scissor' && computerSelection=='rock'){
        compCount+=1
        result="You lose! "+ computerSelection+" beats "+playerSelection+"<br><br>Player Score "+userCount+"<br>Computer Score "+compCount
        if(compCount===5){
            result+="<br><br> Computer won the game. Reload the page to try again."
            disableButton()
        }
    }

    else{
        result="Its a tie! You both chose " + playerSelection + "<br><br>Player Score "+userCount+"<br>Computer Score "+compCount
    }

    document.getElementById('result').innerHTML=result
    return
}