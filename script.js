let userScore = 0;
let computerScore = 0;

const msg = document.querySelector('#msg');
const choises = document.querySelectorAll('.choise');
const userScorePara = document.querySelector('#user_score');
const computerScorePara = document.querySelector('#comp_score');

const genComputerChoise = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()* options.length);
    return options[randomNum]; 
};

const draw = () => {
    msg.innerText = "It's draw. Play again!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

showWinner = (userWins, userChoice, computerChoice) => {
    if(userWins){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!. Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose!. ${userChoice} beats Your ${computerChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const result = (userChoise) => {
    const computerChoise = genComputerChoise();

    if (userChoise === computerChoise) {
        draw();
    }else{
        let userWins = true;
        if (userChoise === 'rock'){
            //paper scissors
            userWins = computerChoise === 'scissors' ? true : false;
        }else if(userChoise === 'paper'){
            //rock scissors
            userWins = computerChoise === 'rock' ? true : false;
        }else {
            //rock paper
            userWins = computerChoise === 'paper' ? true : false;
        }
        showWinner(userWins, userChoise, computerChoise);
    };
};


choises.forEach((choise) =>{
    choise.addEventListener('click', () => {
        const userChoise = choise.getAttribute("id");
        result(userChoise);
    });
});
