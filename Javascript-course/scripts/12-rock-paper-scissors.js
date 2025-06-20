/* Rock Paper Scissors */
// score object - default operator
let score = JSON.parse(localStorage.getItem("score")) || {
                                                            wins: 0,
                                                            losses: 0,
                                                            ties: 0
                                                        };

updateScoreElement();

// if (!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };
// }

// local storage
console.log(JSON.parse(localStorage.getItem("score")));

// auto play
let isAutoPlay = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlay) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);

        isAutoPlay = true;

    } else {
        clearInterval(intervalId);
        isAutoPlay = false;
    }
}

// add event listener
// rock paper scissors buttons
document.querySelector(".js-rock-button").addEventListener("click", () => {
    playGame("Rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
    playGame("Paper");
});

document.querySelector(".js-scissors-button").addEventListener("click", () => {
    playGame("Scissors");
});

// reset button
document.querySelector(".js-reset-button").addEventListener("click", () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    updateScoreElement();
});

// autoplay button
document.querySelector(".js-autoplay-button").addEventListener("click", () => {
    autoPlay();
});

// keydown
document.body.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "r") {
        playGame("Rock");
    } else if (event.key === "p") {
        playGame("Paper");
    } else if (event.key === "s") {
        playGame("Scissors");
    }
});

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === "Scissors") {
        if (computerMove === 'Rock') {
            result = 'Lose';
        } else if (computerMove === 'Paper') {
            result = 'Win'; 
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }        
    } else if (playerMove === "Paper") {
        if (computerMove === 'Rock') {
            result = 'Win';
        } else if (computerMove === 'Paper') {
            result = 'Tie'; 
        } else if (computerMove === 'Scissors') {
            result = 'Lose';
        }            
    } else if (playerMove === "Rock") {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'Lose'; 
        } else if (computerMove === 'Scissors') {
            result = 'Win';
        }
    }

    // change object score
    if (result === "Win") {
        score.wins = score.wins + 1;
    } else if (result === "Lose") {
        score.losses = score.losses + 1;
    } else if (result === "Tie") {
        score.ties = score.ties + 1;
    }

    updateScoreElement();

    // local storage set item
    localStorage.setItem("score", JSON.stringify(score));

    document.querySelector(".js-result").innerHTML = result;

    document.querySelector(".js-moves").innerHTML =
    `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

// DOM
function updateScoreElement() {
    document.querySelector(".js-score")
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3)
    {
        computerMove = 'Rock';

    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';

    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}
