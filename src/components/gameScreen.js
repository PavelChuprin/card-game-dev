export const renderGameScreen = (game, difficultyFactor) => {

	let arrOpenCards = [
		'<img src="/src/img/король пики.svg" alt="card">',
		'<img src="/src/img/туз пики.svg" alt="card">',
		'<img src="/src/img/дама пики.svg" alt="card">',
		'<img src="/src/img/валет пики.svg" alt="card">',
		'<img src="/src/img/10 пики.svg" alt="card">',
		'<img src="/src/img/9 пики.svg" alt="card">',
		'<img src="/src/img/8 пики.svg" alt="card">',
		'<img src="/src/img/7 пики.svg" alt="card">',
		'<img src="/src/img/6 пики.svg" alt="card">',
		'<img src="/src/img/туз черви.svg" alt="card">',
		'<img src="/src/img/король черви.svg" alt="card">',
		'<img src="/src/img/дама черви.svg" alt="card">',
		'<img src="/src/img/валет черви.svg" alt="card">',
		'<img src="/src/img/10 черви.svg" alt="card">',
		'<img src="/src/img/9 черви.svg" alt="card">',
		'<img src="/src/img/8 черви.svg" alt="card">',
		'<img src="/src/img/7 черви.svg" alt="card">',
		'<img src="/src/img/6 черви.svg" alt="card">',
		'<img src="/src/img/туз бубны.svg" alt="card">',
		'<img src="/src/img/король бубны.svg" alt="card">',
		'<img src="/src/img/дама бубны.svg" alt="card">',
		'<img src="/src/img/валет бубны.svg" alt="card">',
		'<img src="/src/img/10 бубны.svg" alt="card">',
		'<img src="/src/img/9 бубны.svg" alt="card">',
		'<img src="/src/img/8 бубны.svg" alt="card">',
		'<img src="/src/img/7 бубны.svg" alt="card">',
		'<img src="/src/img/6 бубны.svg" alt="card">',
		'<img src="/src/img/туз крести.svg" alt="card">',
		'<img src="/src/img/король крести.svg" alt="card">',
		'<img src="/src/img/дама крести.svg" alt="card">',
		'<img src="/src/img/валет крести.svg" alt="card">',
		'<img src="/src/img/10 крести.svg" alt="card">',
		'<img src="/src/img/9 крести.svg" alt="card">',
		'<img src="/src/img/8 крести.svg" alt="card">',
		'<img src="/src/img/7 крести.svg" alt="card">',
		'<img src="/src/img/6 крести.svg" alt="card">'
];

	const cardsArray = [];

	for (let i = 0; i < difficultyFactor*6; i++) {
		cardsArray.push(
			arrOpenCards[Math.floor(Math.random() * 35)]
		);
}


  const gameScreenHtml = `
	<div class="container-game">
		<div class="header-game">
			<div class="header-game-timer">
				<div class="timer__text">
					<div class="timer__text-min">min</div>
					<div class="timer__text-sec">sec</div>
				</div>
				<div class="timer__counter">00.00</div>
			</div>
			<div class="header-game-button">
				<button class="button-restart">Начать заново</button>
			</div>
		</div>
		
		<div class="body-game">
			${cardsArray.map((card) => card).join('')}
		</div>
	</div>
	`;

  game.innerHTML = gameScreenHtml;
};