//starting text
alert("Please open your browser console")
console.log("Hey there human, lets play rock-paper-scissors(u know the rules right?)")
//initiate game
play_game()

//functions

function play_game(){   
    let user_score = 0 ;
    let computer_score = 0;
    let final_result;

    for(i=0;i<5;i++){
        console.log(`Round ${i+1}`)
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
    
    if(user_score>computer_score){
        final_result = "You Won the game!";
    }
    else if(user_score<computer_score){
        final_result = "Sorry you lost the game";
    }
    else{
        final_result = "It's a Draw!";
    }
    console.log(final_result)

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
