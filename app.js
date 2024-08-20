// const playerChoiceDisplay = document.querySelector(".player-hand");
// const computerChoiceDisplay = document.querySelector(".computer-hand");
// const resultDisplay = document.querySelector(".winner");
// const choices = document.querySelectorAll("button");
// const playerScore = document.getElementById("player-score");
// const computerScore = document.getElementById("computer-score");

// let playerChoice;
// let computerChoice;
// let result;

// let playScore = 0;
// let compScore = 0;

// choices.forEach((choice) =>
//   choice.addEventListener("click", (e) => {
//     playerChoice = e.target.id;
//     playerChoiceDisplay.innerHTML = playerChoice;
//     getComputerChoice();
//     getResult();
//     updateScores();
//   })
// );

// function getComputerChoice() {
//   const arr = ["rock", "paper", "scissors"];
//   const random = Math.floor(Math.random() * arr.length);
//   computerChoice = arr[random];
//   computerChoiceDisplay.innerHTML = computerChoice;
// }

// let winningScore = 5;
// let isGameOver = false;

// function updateScores() {
//   if (!isGameOver) {
//     if (playScore === winningScore) {
//       isGameOver = true;
//       result = "YOU WIN!!!";
//       resultDisplay.innerHTML = result;
//       choices.disabled = true;
//       rockButton.disabled = true;
//       paperButton.disabled = true;
//       scissorsButton.disabled = true;
//     } else if (compScore === winningScore) {
//       isGameOver = true;
//       result = "YOU LOST!!!";
//       resultDisplay.innerHTML = result;
//       choices.disabled = true;
//       rockButton.disabled = true;
//       paperButton.disabled = true;
//       scissorsButton.disabled = true;
//     }
//   }
// }

// function win() {
//   playScore += 1;
//   let result = "You Win!";
//   resultDisplay.innerHTML = result;
//   playerScore.innerHTML = playScore;
// }

// function lost() {
//   compScore += 1;
//   let result = "You Lost!";
//   resultDisplay.innerHTML = result;
//   computerScore.innerHTML = compScore;
// }

// function tie() {
//   let result = "It's a tie!";
//   resultDisplay.innerHTML = result;
// }

// function getResult() {
//   if (playerChoice === "rock" && computerChoice === "rock") {
//     tie();
//   } else if (playerChoice === "paper" && computerChoice === "paper") {
//     tie();
//   } else if (playerChoice === "scissors" && computerChoice === "scissors") {
//     tie();
//   } else if (playerChoice === "rock" && computerChoice === "scissors") {
//     win();
//   } else if (playerChoice === "paper" && computerChoice === "rock") {
//     win();
//   } else if (playerChoice === "scissors" && computerChoice === "paper") {
//     win();
//   } else if (playerChoice === "rock" && computerChoice === "paper") {
//     lost();
//   } else if (playerChoice === "paper" && computerChoice === "scissors") {
//     lost();
//   } else if (playerChoice === "scissors" && computerChoice === "rock") {
//     lost();
//   }
// }

// let rockButton = document.getElementById("rock");
// let paperButton = document.getElementById("paper");
// let scissorsButton = document.getElementById("scissors");

const game = () => {
  let playScore = 0;
  let compScore = 0;

  // Start the game

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const scores = document.querySelector(".scores");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      scores.classList.add("fadeIn");
    });
  };

  // Play match

  const playMatch = () => {
    const choices = document.querySelectorAll(".choices button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    choices.forEach((choice) =>
      choice.addEventListener("click", function () {
        // Get computer choice
        const arr = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * arr.length);
        computerChoice = arr[random];

        // Update images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;

        console.log(this.textContent);
      })
    );
  };

  const getResult = (playerChoice, computerChoice) => {
    // Update text
    const result = document.querySelector(".result");

    if (playerChoice === computerChoice) {
      result.textContent = "It is a tie";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        result.textContent = "Player Wins";
        return;
      } else {
        result.textContent = "Computer Wins";
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        result.textContent = "Computer Wins";
        return;
      } else {
        result.textContent = "Player Wins";
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        result.textContent = "Computer Wins";
        return;
      } else {
        result.textContent = "Player Wins";
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
