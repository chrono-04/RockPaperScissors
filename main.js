// create user input variable       DONE
// create enemyGuess variable       DONE
// assign enemyGuess random choice between 1 - 3        DONE
// create a function that assign choice based on number generated
// 1.rock 2.paper 3.scissors
// compare userInput to enemyGuess
// rock -> scissors
// scissors -> paper
// paper -> rocks

let playerScore = 0,
  enemyScore = 0;

let rounds = 1;
const MAX_ROUNDS = 5;
const GOAL = 3;

while (rounds <= MAX_ROUNDS && playerScore < GOAL && enemyScore < GOAL) {
  let playerChoice = prompt(
    "Enter your choice:    [ rock | paper | scissors ]",
  );

  let userInput = playerChoice.toLowerCase();

  let randomChoice = Math.floor(Math.random() * 3) + 1;

  let enemyGuess;

  function getRandomChoice(index) {
    if (index === 1) {
      enemyGuess = "rock";
    } else if (index === 2) {
      enemyGuess = "paper";
    } else if (index === 3) {
      enemyGuess = "scissors";
    }
  }

  function determineChoices(player, enemy) {
    // win conditions
    if (player == "rock" && enemy == "scissors") {
      console.log("Player wins!");
      console.log(
        `Player Score: ${(playerScore += 1)}\nCPU Score: ${enemyScore}`,
      );
    } else if (player == "scissors" && enemy == "paper") {
      console.log("Player wins!");
      console.log(
        `Player Score: ${(playerScore += 1)}\nCPU Score: ${enemyScore}`,
      );
    } else if (player == "paper" && enemy == "rock") {
      console.log("Player wins!");
      console.log(
        `Player Score: ${(playerScore += 1)}\nCPU Score: ${enemyScore}`,
      );
    }

    // lose conditions
    else if (enemy == "rock" && player == "scissors") {
      console.log("CPU wins!");
      console.log(
        `Player Score: ${playerScore}\nCPU Score: ${(enemyScore += 1)}`,
      );
    } else if (enemy == "scissors" && player == "paper") {
      console.log("CPU wins!");
      console.log(
        `Player Score: ${playerScore}\nCPU Score: ${(enemyScore += 1)}`,
      );
    } else if (enemy == "paper" && player == "rock") {
      console.log("CPU wins!");
      console.log(
        `Player Score: ${playerScore}\nCPU Score: ${(enemyScore += 1)}`,
      );
    }

    // Draw conditions
    else if (player === enemy) {
      console.log("DRAW.");
      console.log(`Player Score: ${playerScore}\nCPU Score: ${enemyScore}`);
    }

    return rounds;
  }

  console.log(`Round: ${rounds}`);
  console.log(`Player Guess: ${userInput}`);
  getRandomChoice(randomChoice);
  console.log(`Enemy Guess: ${enemyGuess}`);

  determineChoices(userInput, enemyGuess);

  rounds++;
}

if (playerScore >= GOAL) {
  console.log(`Player Wins the Game!`);
  console.log(`Player Score: ${playerScore}\nCPU Score: ${enemyScore}`);
} else if (enemyScore >= GOAL) {
  console.log(`CPU Wins the Game!`);
  console.log(`Player Score: ${playerScore}\nCPU Score: ${enemyScore}`);
} else {
  console.log("ULTIMATE DRAW");
  console.log(`Player Score: ${playerScore}\nCPU Score: ${enemyScore}`);
}

// while playerScore < 5 or enemyScore < 5
// keep playing
// if playerScore == 5 or enemyScore == 5
// Game End
// whoever gets to 5 first wins
