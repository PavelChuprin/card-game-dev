import { renderWindowDifficultySelection } from "./components/difficultySelectionWindow.js";
import { renderGameScreen } from "./components/gameScreen.js";

const game = document.getElementById("game") as HTMLDivElement;

const renderGame = () => {
  renderWindowDifficultySelection(game);
};

renderGame();

const btnStart = document.querySelector(".button-start") as HTMLButtonElement | null;
const formDifficultySelection = document.querySelector(".level-option-form") as HTMLFormElement;

// Валидация
formDifficultySelection.addEventListener("input", () => {
  if (radioInputChecked.value === "") {
		if (btnStart != null) {
			btnStart.disabled = true;
		}
  } else {
		if (btnStart != null) {
			btnStart.disabled = false;
		}
  }
});

const radioInputChecked = <HTMLInputElement>document.querySelector('input[name="radio"]:checked');

formDifficultySelection.addEventListener("submit", (event) => {
  event.preventDefault();
  if (radioInputChecked.value === "easy") {
    renderGameScreen(game, 6);
    console.log("Уровень сложности: easy");
  } else if (
    radioInputChecked.value === "medium"
  ) {
    renderGameScreen(game, 12);
    console.log("Уровень сложности: medium");
  } else if (
    radioInputChecked.value === "hard"
  ) {
    renderGameScreen(game, 18);
    console.log("Уровень сложности: hard");
  }
});