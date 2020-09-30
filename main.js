const buttons = document.querySelectorAll('.btns');
const score = document.querySelector('.score')
const restart = document.querySelector('.restart')
const msg = document.querySelector('.msg')
let player = 0;
let computer = 0;

// get random computer choices

function computerPlay() {
    const gamechoices = ['rock', 'paper', 'scissors']
    const compChoice = Math.round(Math.random() * 2)
    return gamechoices[compChoice].toLowerCase();
}


//fuction that plays one round of game and return the results

function playRound(playerSelection, computerSelection) {
    let results;
    if (playerSelection === computerSelection) {
        results = "It's A Tie"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        results = 'You Win!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        results = 'You Lose!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        results = 'You Win!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        results = 'You Lose!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        results = 'You Win!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        results = 'You Lose!'
    }
    return `${results}`
}

//shows winner of the game and increment the winner score
function showWinner(winner, playerSelection, computerSelection) {
    if (winner === 'You Win!') {
        player++
        msg.innerHTML = `
        <h3>You Win!</h3>
        <h4>Computer Choose: ${computerSelection.toUpperCase()}</h4>
        <i class="far fa-hand-${computerSelection} fa-4x"></i>
        <h2>${playerSelection.toUpperCase()} beat ${computerSelection.toUpperCase()} </h2>
        `
        score.innerHTML = `<p>Player: ${player}</P>
        <p>Computer: ${computer}`
    } else if (winner === 'You Lose!') {
        computer++
        msg.innerHTML = `
        <h3>You Lose!</h3>
        <h4>Computer Choose: ${computerSelection.toUpperCase()}</h4>
        <i class="far fa-hand-${computerSelection} fa-4x"></i>
        <h2>${computerSelection.toUpperCase()} beat ${playerSelection.toUpperCase()} </h2>
        `
        score.innerHTML = `<p>Player: ${player}</P>
        <p>Computer: ${computer}`
    } else if (winner === "It's A Tie") {
        msg.innerHTML = `
        <h3>It's A Tie!</h3>
        <h4>Computer Choose: ${computerSelection.toUpperCase()}</h4>
        <i class="far fa-hand-${computerSelection} fa-4x"></i>
        <h2>Draw</h2>
        `
    }
}

function restartGame() {
    player = 0;
    computer = 0;
    score.innerHTML = `<p>Player: 0</P>
    <p>Computer: 0</p>`
}

// decides the final winner after 5 rounds
function finalScore(player, computer) {
    if (player === 5 || computer === 5) {
        if (player > computer) {
            msg.innerHTML = `
        <h3>Game Over!</h3>
        <h4>You Won The Game</h4>
        <h3>To Play Again</h3>
        <h2>Click Restart To refresh</h2>
        `

        }else if (player < computer) {
            msg.innerHTML = `
        <h3>Game Over!</h3>
        <h4>You Lost The Game</h4>
        <h3>To Play Again</h3>
        <h2>Click Restart</h2>
        `
        }
    }
}

// The fuction that begins the game
function game(e) {
    let computerSelection = computerPlay()
    let playerSelection = e.target.id  // get userchoice
    let winner = playRound(playerSelection, computerSelection)
    showWinner(winner, playerSelection, computerSelection)
    finalScore(player, computer)

}

buttons.forEach(btn => btn.addEventListener('click', game))
restart.addEventListener('click', restartGame)
