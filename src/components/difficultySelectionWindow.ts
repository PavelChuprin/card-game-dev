export const renderWindowDifficultySelection = (game: HTMLDivElement) => {
  const windowDifficultySelectionHtml = `
<div class="container">
<div class="level">
	<div class="level-title">
		<h1 class="level-title-text">Выбери сложность</h1>
	</div>
	<form class="level-option-form">
		<label class="level-option-label">
			<input class="level-option-input" type="radio" name="radio" value="easy">
			<i class="level-option-text">1</i>
		</label>
		<label class="level-option-label">
			<input class="level-option-input" type="radio" name="radio" value="medium">
			<i class="level-option-text">2</i>
		</label>
		<label class="level-option-label">
			<input class="level-option-input" type="radio" name="radio" value="hard">
			<i class="level-option-text">3</i>
		</label>
		<div class="button-container">
			<button disabled="true" class="button-start" type="submit">Старт</button>
		</div>
	</form>
</div>
</div>
`;

  game.innerHTML = windowDifficultySelectionHtml;
};
