//starting text
console.log("Hey there human, lets play rock-paper-scissors(u know the rules right?)")
//initiate game
play_game()

//functions

function play_game(){   
    let user_score = 0 ;
    let computer_score = 0;
    let final_result;

    for(i=0;i<5;i++){
        player_choice = getInput()
        pc_choice = getComputerChoice()
        let round_result = play_round(player_choice, pc_choice)
        if(round_result === "user won"){
            user_score+=1
        }
        else if(round_result === "pc won"){
            computer_score+=1
        }
        console.log("you chose "+player_choice+ " and pc chose "+ pc_choice +" so " + round_result)
    }
    console.log(`Final Score: You:${user_score} PC: ${computer_score}`)
    final_result = (user_score>computer_score)? "You Won the game!": "Sorry you lost the game"
    console.log(final_result)

}

//return a win/lose state
function play_round(user_choice, computer_choice){
        if (user_choice === "paper" && computer_choice === "rock") {
            
            return "user won";
        } else if (user_choice === "rock" && computer_choice === "scissor") {
        
            return "user won";
        } else if (user_choice === "scissor" && computer_choice === "paper") {
        
            return "user won";
        } else if(user_choice === computer_choice){
        
            return "It's a draw"
        } else {
            
            return "pc won";
        }
    }
    
//get user input
function getInput(){
    let user_choice = prompt("Enter your choice(rock paper or scissors)")
    user_choice = user_choice.toLowerCase()
    return user_choice
}
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