//we used two variables for user and computer to track the score
let userScore = 0;
let compScore=0;

//access all the choices 
const choices = document.querySelectorAll(".choice");
//adding the event listener to track the click event 
const msg = document.querySelector("#msg");

//to increment the score 
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Function for computerchoice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissors 
    const randIdx = Math.floor(Math.random() * 3);
    //we have to generate the random no between 0-2 (0->options[0], 1->options[1], 2->options[2]) as we get the value in the form of decimal we used the Math.floor
    //now to generate the computer random choices we will give the randomIdx value to computer 
    return options[randIdx];
    
}

//draw choice
const drawGame = () => {
    //console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor= "#081b31";
    //msg.style.color = white;
}

//this function display who win the game 
const showWinner = (userWin, choiceId, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You win");
        //to change the text on the original screen
        msg.innerText = `You win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        //msg.style.color = "white";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You lose");
        msg.innerText= `You lose.. ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor="red";
        //msg.style.color = "white";
    }
}


//computer random choice  & choiceId === userChoice
//this function will return the computer and user choices with choice id
const playGame = (choiceId) => { 
    console.log("choice Id = ", choiceId);
    //Generate the computer choice -> modular(only one function can berform the specific action then the small functions are created )
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    //now for showing both user and computer was fighting through there move
    if(choiceId === compChoice)
    {
        //Case 1: game was draw
            drawGame();
    }
    else{
        let userWin = true;
        if(choiceId === 'rock')
        {
            //computer choice scissors, paper
            userWin = compChoice === 'paper' ?false : true;
        }
        else if(choiceId === 'paper')
        {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice === 'rock' ? false : true;
        }
        //inorder to show who win we have to generate the function called showWinner
        showWinner(userWin, choiceId, compChoice);
    }
}

choices.forEach((choice) => {
    //console.log(choice);

    //inorder to get an id of all choices 
    const choiceId = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        console.log("choice was clicked", choiceId);

        //calling the playgame 
        playGame(choiceId);
    })
})