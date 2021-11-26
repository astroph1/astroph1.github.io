(function() {
    'use strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('player');
    const instrTag = document.getElementById('instr');
    const tugTag = document.getElementsByTagName('section');
    const score = document.getElementById('score');
    const bscore = document.getElementById('bluescore');
    const rscore = document.getElementById('redscore');
    const gen = document.getElementById('gen');
    const actionArea = document.getElementById('actions');

    let gameData = {
        dice: ['rollS.png','roll1.png', 'roll2.png', 'roll3.png', 'roll4.png', 'roll5.png', 'roll6.png'],
        players: ['Red', 'Blue'],
        score: [0, 0],
        roll: 0,
        index: 0,
        gameEnd: 15,
    }

    startGame.addEventListener("click", function() {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        //gameControl.innerHTML = '<h2>The Game has started</h2>';
        setUpTurn();

        function setUpTurn() {
            //game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`
            instrTag.innerHTML = `<h3>${gameData.players[gameData.index]} you're up!</h3>`
            game.style.top = "-179px";
            game.innerHTML = '<button id="roll">ROLL</button>';
            game.innerHTML += '<button id="quit">QUIT</button>';
            game.innerHTML += '<button id="roll2">ROLL</button>';
            score.innerHTML += '<div id="random"></div>';
            document.getElementById('quit').addEventListener("click", function() {
                location.reload();
            });
            document.getElementById('roll').addEventListener("click", function() {
                throwDice();
            })
            document.getElementById('roll2').addEventListener("click", function() {
                throwDice();
            })
        }

        const rand = document.getElementById('random');

        function throwDice() {
            gameData.roll = Math.floor(Math.random() * 7) + 1;
            rand.innerHTML = `<img src="images/${gameData.dice[gameData.roll-1]}" id-"gen">`;
            game.style.top = "-305px";
            console.log('yo');
            if (gameData.roll-1 === 0) {
                game.innerHTML += "<p>Oh snap, Snake Eyes!</p>";
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setTimeout(setUpTurn, 2000);
                //showCurrentScore();
            }
            /* if ((gameData.roll1 === 1 || gameData.roll2 === 1) && !(gameData.roll1 === 1 && gameData.roll2 === 1)) {
                gameData.score[gameData.index] += 0;
                checkWinGame();
                if (checkWinGame()) {
                    return;
                } else {
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    game.innerHTML += `<p>The player has rolled a one, switching to ${gameData.players[gameData.index]}</p>`;
                    setTimeout(setUpTurn, 1000);
                }

            } else {
                gameData.score[gameData.index] += gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Roll again</button><button id="pass">Pass</button>';
                document.getElementById('rollagain').addEventListener("click", function() {
                    setUpTurn();
                });
                document.getElementById('pass').addEventListener("click", function() {
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });
                checkWinGame();
            } */

            function checkWinGame() {
                if (gameData.score[gameData.index] >= gameData.gameEnd) {
                    score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
                    actionArea.innerHTML = '';
                    document.getElementById('quit').innerHTML = "Start a new game?";
                } else {
                    showCurrentScore();
                }
            }

            function showCurrentScore() {
                score.innerHTML = `<p>The score is currently <strong>${gameData.score[0]}</strong> and <strong>${gameData.score[1]}</strong></p>`
            }
        }
    })
})();