let roundTurn = "O";
let winner = "";
let turns = 0; //how many turns have been played
let gameArr =
 [0,
   1, 2, 3,
   4, 5, 6,
   7, 8, 9];

function check(elt) {
  if (elt.innerHTML == false) {
    gameArr[Number(elt.id)] = roundTurn;
    let img = `<img src="images/${roundTurn}.jpeg"/>`;
    elt.innerHTML = img;
    turns++;
    checkWinner();
  }
}

function checkWinner() {
  if (turns === 9) {
    gameover(`draw`);
  }
  if (
    (gameArr[1] == gameArr[2] && gameArr[2] == gameArr[3]) ||
    (gameArr[4] == gameArr[5] && gameArr[5] == gameArr[6]) ||
    (gameArr[7] == gameArr[8] && gameArr[8] == gameArr[9])
  ) {
    winner = roundTurn;
    gameover(`${roundTurn} won in a row!`);
  } else if (
    (gameArr[1] == gameArr[4] && gameArr[4] == gameArr[7]) ||
    (gameArr[2] == gameArr[5] && gameArr[5] == gameArr[8]) ||
    (gameArr[3] == gameArr[6] && gameArr[6] == gameArr[9])
  ) {
    winner = roundTurn;
    gameover(`${roundTurn} won in a column!`);
  } else if (
    (gameArr[1] == gameArr[5] && gameArr[5] == gameArr[9]) ||
    (gameArr[3] == gameArr[5] && gameArr[5] == gameArr[7])
  ) {
    winner = roundTurn;
    gameover(`${roundTurn} won in a diagonal!`);
  } else toggleTurn();
}

function toggleTurn() {
  if (roundTurn === "X") roundTurn = "O";
  else roundTurn = "X";
}

function gameover(text) {
  setTimeout(() => {
    resetGame();
    document.getElementById("body").innerHTML.replaceAll("");

    alert(text);
    addBody();
  }, 20);
}

function resetGame() {
  gameArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (winner == "O") {
    roundTurn = "O";
  } else roundTurn = "X";
  turns = 0;
}
