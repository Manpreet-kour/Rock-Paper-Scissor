let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const computerChoices = () => {
  const options = ['rock', 'scissors', 'paper'];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

let btn = document.querySelector(".btn");
let uScore = document.querySelector(".you-score");
let cScore = document.querySelector(".comp-score");
let cntu = 1;
let cntc = 1;
const playGame = (userChoice) => {
  console.log("User choice is", userChoice);

  const computerChoice = computerChoices();
  console.log("Computer choice is", computerChoice);

  if (userChoice === computerChoice) {
    btn.innerHTML = "Its a tie!";
    btn.style.backgroundColor = "#2A004E";
    console.log("It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    uScore.innerHTML = cntu;
    cntu++;
    btn.innerHTML = "You win!";
    btn.style.backgroundColor = "Green";
    console.log("You win!");
    userScore++;
  } else {
    cScore.innerHTML = cntc;
    cntc++;
    btn.innerHTML = "Computer Wins!";
    btn.style.backgroundColor = "Red";
    console.log("Computer wins!");
    computerScore++;
  }

  console.log(`Scores: User - ${userScore}, Computer - ${computerScore}`);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

