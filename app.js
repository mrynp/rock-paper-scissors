const game = () => {
  let pScore = 0;
  let cScore = 0;

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

        // Get game result
        let playerChoice = this.textContent;
        getResult(playerChoice, computerChoice);

        // Update images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;

        console.log(playerChoice);
      })
    );
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score");
    const computerScore = document.querySelector(".computer-score");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    console.log(`player: ${pScore}`);
    console.log(`player: ${cScore}`);
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
        pScore++;
        updateScore();
        return;
      } else {
        result.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        result.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        result.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        result.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        result.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
