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
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const choices = document.querySelectorAll(".choices button");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    choices.forEach((choice) =>
      choice.addEventListener("click", function () {
        // Get computer choice
        const arr = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * arr.length);
        computerChoice = arr[random];

        setTimeout(() => {
          // Get game result
          let playerChoice = this.textContent;
          getResult(playerChoice, computerChoice);

          // Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 1500);

        // Animation
        playerHand.style.animation = "shakePlayer 1.5s ease";
        computerHand.style.animation = "shakeComputer 1.5s ease";
      })
    );
  };

  const result = document.querySelector(".result");
  const choices = document.querySelector(".choices");
  const playerScore = document.querySelector(".player-score");
  const computerScore = document.querySelector(".computer-score");
  const playAgain = document.querySelector(".outro button");

  let winningScore = 5;
  let isGameOver = false;

  const updateScore = () => {
    if (!isGameOver) {
      if (pScore === winningScore) {
        isGameOver = true;
        result.textContent = "YOU WIN!!!";
        playAgain.style.display = "block";
        choices.style.display = "none";

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
      } else if (cScore === winningScore) {
        isGameOver = true;
        result.textContent = "YOU LOST!!!";
        playAgain.style.display = "block";
        choices.style.display = "none";

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
      } else {
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
      }
    }
  };

  playAgain.addEventListener("click", () => {
    isGameOver = false;
    choices.style.display = "flex";
    playAgain.style.display = "none";
    result.textContent = "Choose an option";
    pScore = 0;
    cScore = 0;
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  });

  const getResult = (playerChoice, computerChoice) => {
    // Update text

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
