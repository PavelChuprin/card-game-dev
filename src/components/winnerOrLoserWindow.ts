export const renderWindowWinnerOrLoser = (
  game: HTMLElement,
  statusUser: boolean,
  minute: string,
  second: string
) => {
  const windowWinnerOrLoserHtml = `
	<div class="container">
		<div class="level">
			<div class="level-smile">
				<img src="./static/img/smile-${statusUser ? "winner" : "loser"}.png" alt=${
    statusUser ? "winner" : "loser"
  }>
			</div>
			<div class="level-message">
				<h1 class="level-message-text">Вы ${statusUser ? "выиграли" : "проиграли"}!</h1>
			</div>
			<div class="elapsed-time">
				<p class="elapsed-time-text">Затраченное время</p>
				<p class="elapsed-time-counter">
				${Number(minute) < 10 ? "0" + minute : minute}.${
    Number(second) < 10 ? "0" + second : second
  }
				</p>
			</div>
				<button class="button-restart" type="submit">Играть снова</button>
			</div>
		</div>
		</div>`;

  game.innerHTML = windowWinnerOrLoserHtml;

  const btnRestart = document.querySelector(".button-restart");
  btnRestart?.addEventListener("click", () => {
    location.reload();
  });
};
