//initiate game
play_game()
//functions
function play_game(){   
    let user_score = 0 ;
    let computer_score = 0;
   
    let options = document.querySelector("#options");
    
    options.addEventListener('click', (event)=>{
        target = event.target;
        if(user_score < 5 && computer_score < 5){
        let userChoice = target.id;
        let result = document.querySelector("#result");
        let computerChoice = getComputerChoice();
        result.textContent = play_round(userChoice, computerChoice);
        let score = document.querySelector("#score")
    
        if(result.textContent === "user won"){
            user_score ++;
            score.textContent = `you(${userChoice}): ${user_score} pc(${computerChoice}): ${computer_score}`
        }
        else if(result.textContent === "pc won"){
            computer_score ++;
            score.textContent = `you(${userChoice}): ${user_score} pc(${computerChoice}): ${computer_score}`
        }
    
        }
        else{
            if(user_score>computer_score){
                score.textContent = "You Won! Dont let the machines take over!"
            }
            else if(user_score<computer_score){
                score.textContent = "You Lost! Humanity is Doomed!"
            }
            else if(user_score===computer_score)
            {
                score.textContent = "It's a Draw! lets call it a cease fire while we still have the time!🇵🇸🇺🇦"
            }
            
        }
        

    })

}

//return a win/lose state
function play_round(user_choice, computer_choice){
        if (user_choice === "paper" && computer_choice === "rock") {
            
            return "user won";
        } else if (user_choice === "rock" && computer_choice === "scissors") {
        
            return "user won";
        } else if (user_choice === "scissors" && computer_choice === "paper") {
        
            return "user won";
        } else if(user_choice === computer_choice){
        
            return "It's a draw"
        }
        else {
            
            return "pc won";
        }
    }
    
//get user input

//get computer choice
function getComputerChoice(){
    choice = Math.floor(Math.random() * 3)

    return parseChoice(choice)
}
//parse the com[uter choice
function parseChoice(choice){
    switch(choice){
        case(0):
            return "rock";
            break;
        case(1):
            return "paper";
            break;
        case(2):
            return "scissors"    
            break;
        default:
            return -1;
            break;
    }   
}
