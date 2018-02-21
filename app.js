/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousRoll;


init();

//console.log(dice)

// document.querySelector(`#current-${activePlayer}`).textContent = dice;
// document.querySelector(`#current-${activePlayer}`).innerHTML = `<em>${dice}</em>`//dice;

// var x = document.querySelector(`#current-${activePlayer}`).textContent;

// console.log(x);

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        // 1. Random Number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = `dice-${dice1}.png`;
        document.getElementById('dice-2').src = `dice-${dice2}.png`;
        // var diceDom = document.querySelector('.dice')
        // diceDom.style.display = 'block';
        // diceDom.src = `dice-${dice}.png`;
        // 3. Update the round score IF the rolled number was NOT 1

        if (dice1 !== 1 && dice2 !== 1) {
            // add score
            // if((previousRoll === 6 && dice === 6)){
            //     scores[activePlayer] = 0;
            //     document.getElementById(`score-${activePlayer}`).textContent = '0'
            //     nextPlayer();
            //     return;
            // }
            roundScore += dice1 + dice2;
            document.getElementById(`current-${activePlayer}`).textContent = roundScore;
        } else {
            nextPlayer();
            // next player
        }

        previousRoll = dice;
    }

})

document.querySelector('.btn-hold').addEventListener('click', function () {
    // Add CURRENT score to GLOBAL Score
    if (gamePlaying) {
        var winScore = document.getElementById('txt-win-score').value;
        if(!winScore) winScore = 100;
        scores[activePlayer] += roundScore;

        // Update the UI

        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= winScore) {
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            // document.querySelector('.dice').style.display = 'none';
            // document.querySelector('.panel-${0}-')
            document.getElementById(`name-${activePlayer}`).textContent = 'Winner !'
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }



    // Check if player won the game
})

function nextPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    previousRoll = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector(`.player-0-panel`).classList.toggle('active');
    document.querySelector(`.player-1-panel`).classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    // document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    previousRoll = 0;

    // document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.add('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
}

// var variable = 'outside variable';
// console.log(variable);

// var i = 1300;
// var func = (function () {
//     console.log(i);
//     return function () {

//     }
// })(10);

// i = 20;

// Execution context of a function - variable declared without var becomes global variable ;)
// Global Execution context code outside function - creation phase
// function declaration - function with refercence to function
// variable declartion

// function secondFunc(){
//     console.log(variable);
// }
// func();
// secondFunc();

// console.log(variable);

