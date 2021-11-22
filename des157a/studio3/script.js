(function() {
    'use strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('player');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    let gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        index: 0,
        gameEnd: 29,
    }

    startGame.addEventListener("click", function() {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        //gameControl.innerHTML = '<h2>The Game has started</h2>';
        setUpTurn();

        function setUpTurn() {
            //game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`
            startGame.innerHTML = "";
            game.innerHTML = '<button id="roll">ROLL</button>'
            game.innerHTML += '<button id="quit">QUIT</button>';
            game.innerHTML += '<button id="roll2">ROLL</button>'
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

        function throwDice() {
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}">
            <img src="images/${gameData.dice[gameData.roll2-1]}">`;
            if (gameData.rollSum === 2) {
                game.innerHTML += "<p>Oh snap, Snake Eyes!</p>";
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setTimeout(setUpTurn, 2000);
                showCurrentScore();
            }
            if ((gameData.roll1 === 1 || gameData.roll2 === 1) && !(gameData.roll1 === 1 && gameData.roll2 === 1)) {
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
            }

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