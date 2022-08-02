let turn = "X";
let moves = ["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"];

const init = () => {
  document.querySelectorAll(".box").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (!event.target.classList.contains("filled")) {
        let img = document.createElement("img");

        turn === "X"
          ? img.setAttribute("src", "./images/x.png")
          : img.setAttribute("src", "./images/o.png");

        event.target.appendChild(img);

        moves[event.target.classList[1].toString()[3] - 1] = turn;

        event.target.classList.add("filled");
        event.target.style.pointerEvents = "none";

        if (checkWinner()) {
          showWinner();
        }
        changeTurn();
      }
    });
  });
};

const changeTurn = () => {
  let players = document.querySelector(".players");

  if (turn === "X") {
    turn = "O";
    players.classList.add("active");
  } else {
    turn = "X";
    players.classList.remove("active");
  }
};

const checkWinner = () => {
  let winner = false;

  if (
    (moves[0] != "Y" && moves[0] === moves[1] && moves[0] === moves[2]) ||
    (moves[3] != "Y" && moves[3] === moves[4] && moves[3] === moves[5]) ||
    (moves[6] != "Y" && moves[6] === moves[7] && moves[6] === moves[8]) ||
    (moves[0] != "Y" && moves[0] === moves[3] && moves[0] === moves[6]) ||
    (moves[1] != "Y" && moves[1] === moves[4] && moves[1] === moves[7]) ||
    (moves[2] != "Y" && moves[2] === moves[5] && moves[2] === moves[8]) ||
    (moves[0] != "Y" && moves[0] === moves[4] && moves[0] === moves[8]) ||
    (moves[2] != "Y" && moves[2] === moves[2] && moves[4] === moves[6])
  )
    winner = true;

  return winner;
};

const showWinner = () => {
  let winnerDiv = document.querySelector(".winner");
  let winnerMessage = document.querySelector(".winnerMessage");

  let restartButton = document.createElement("button");
  restartButton.innerText = "Reiniciar";

  restartButton.addEventListener("click", (event) => {
    location.reload();
  });

  turn === "X"
    ? (winnerMessage.innerText = "Ha ganado el jugador X")
    : (winnerMessage.innerText = "Ha ganado el jugador O");

  document
    .querySelectorAll(".row")
    .forEach((element) => (element.style.pointerEvents = "none"));

  winnerDiv.appendChild(restartButton);
};

window.onload = init;
