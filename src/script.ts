import { renderWindowDifficultySelection } from "./components/difficultySelectionWindow";
import { renderGameScreen } from "./components/gameScreen";
import "./style.css";

const game = document.getElementById("game") as HTMLDivElement;

const renderGame = () => {
  renderWindowDifficultySelection(game);
};

renderGame();

const btnStart = document.querySelector(
  ".button-start"
) as HTMLButtonElement | null;
const formDifficultySelection = document.querySelector(
  ".level-option-form"
) as HTMLFormElement;

// Валидация
formDifficultySelection.addEventListener("input", () => {
  if (
    (<HTMLInputElement>document.querySelector('input[name="radio"]:checked'))
      .value === ""
  ) {
    if (btnStart !== null) {
      btnStart.disabled = true;
    }
  } else {
    if (btnStart !== null) {
      btnStart.disabled = false;
    }
  }
});

formDifficultySelection.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    (<HTMLInputElement>document.querySelector('input[name="radio"]:checked'))
      .value === "easy"
  ) {
    renderGameScreen(game, 6);
  } else if (
    (<HTMLInputElement>document.querySelector('input[name="radio"]:checked'))
      .value === "medium"
  ) {
    renderGameScreen(game, 12);
  } else if (
    (<HTMLInputElement>document.querySelector('input[name="radio"]:checked'))
      .value === "hard"
  ) {
    renderGameScreen(game, 18);
  }
});
