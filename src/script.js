import { renderWindowDifficultySelection } from "./components/difficultySelectionWindow.js";
import { renderGameScreen } from "./components/gameScreen.js";

const game = document.getElementById("game");

const renderGame = () => {
  renderWindowDifficultySelection(game);
};

renderGame();

const btnStart = document.querySelector(".button-start");
const formDifficultySelection = document.querySelector(".level-option-form");

// Валидация
formDifficultySelection.addEventListener("input", () => {
  if (document.querySelector('input[name="radio"]:checked').value === "") {
    btnStart.disabled = true;
  } else {
    btnStart.disabled = false;
  }
});

formDifficultySelection.addEventListener("submit", (event) => {
  event.preventDefault();
  if (document.querySelector('input[name="radio"]:checked').value === "easy") {
    renderGameScreen(game, 1);
    console.log("Уровень сложности: easy");
  } else if (
    document.querySelector('input[name="radio"]:checked').value === "medium"
  ) {
    renderGameScreen(game, 2);
    console.log("Уровень сложности: medium");
  } else if (
    document.querySelector('input[name="radio"]:checked').value === "hard"
  ) {
    renderGameScreen(game, 3);
    console.log("Уровень сложности: hard");
  }
});
