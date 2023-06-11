export const renderGameScreen = (game, difficultyFactor) => {
  const arrOpenCards = [
		'<img data-value="король пики" class="game__card" src="/src/img/король пики.svg" alt="card">',
    '<img data-value="туз пики" class="game__card" src="/src/img/туз пики.svg" alt="card">',
    '<img data-value="дама пики" class="game__card" src="/src/img/дама пики.svg" alt="card">',
    '<img data-value="валет пики" class="game__card" src="/src/img/валет пики.svg" alt="card">',
    '<img data-value="10 пики" class="game__card" src="/src/img/10 пики.svg" alt="card">',
    '<img data-value="9 пики" class="game__card" src="/src/img/9 пики.svg" alt="card">',
    '<img data-value="8 пики" class="game__card" src="/src/img/8 пики.svg" alt="card">',
    '<img data-value="7 пики" class="game__card" src="/src/img/7 пики.svg" alt="card">',
    '<img data-value="6 пики" class="game__card" src="/src/img/6 пики.svg" alt="card">',
    '<img data-value="туз черви" class="game__card" src="/src/img/туз черви.svg" alt="card">',
    '<img data-value="король черви" class="game__card" src="/src/img/король черви.svg" alt="card">',
    '<img data-value="дама черви" class="game__card" src="/src/img/дама черви.svg" alt="card">',
    '<img data-value="валет черви" class="game__card" src="/src/img/валет черви.svg" alt="card">',
    '<img data-value="10 черви" class="game__card" src="/src/img/10 черви.svg" alt="card">',
    '<img data-value="9 черви" class="game__card" src="/src/img/9 черви.svg" alt="card">',
    '<img data-value="8 черви" class="game__card" src="/src/img/8 черви.svg" alt="card">',
    '<img data-value="7 черви" class="game__card" src="/src/img/7 черви.svg" alt="card">',
    '<img data-value="6 черви" class="game__card" src="/src/img/6 черви.svg" alt="card">',
    '<img data-value="туз бубны" class="game__card" src="/src/img/туз бубны.svg" alt="card">',
    '<img data-value="король бубны" class="game__card" src="/src/img/король бубны.svg" alt="card">',
    '<img data-value="дама бубны" class="game__card" src="/src/img/дама бубны.svg" alt="card">',
    '<img data-value="валет бубны" class="game__card" src="/src/img/валет бубны.svg" alt="card">',
    '<img data-value="10 бубны" class="game__card" src="/src/img/10 бубны.svg" alt="card">',
    '<img data-value="9 бубны" class="game__card" src="/src/img/9 бубны.svg" alt="card">',
    '<img data-value="8 бубны" class="game__card" src="/src/img/8 бубны.svg" alt="card">',
    '<img data-value="7 бубны" class="game__card" src="/src/img/7 бубны.svg" alt="card">',
    '<img data-value="6 бубны" class="game__card" src="/src/img/6 бубны.svg" alt="card">',
    '<img data-value="туз крести" class="game__card" src="/src/img/туз крести.svg" alt="card">',
    '<img data-value="король крести" class="game__card" src="/src/img/король крести.svg" alt="card">',
    '<img data-value="дама крести" class="game__card" src="/src/img/дама крести.svg" alt="card">',
    '<img data-value="валет крести" class="game__card" src="/src/img/валет крести.svg" alt="card">',
    '<img data-value="10 крести" class="game__card" src="/src/img/10 крести.svg" alt="card">',
    '<img data-value="9 крести" class="game__card" src="/src/img/9 крести.svg" alt="card">',
    '<img data-value="8 крести" class="game__card" src="/src/img/8 крести.svg" alt="card">',
    '<img data-value="7 крести" class="game__card" src="/src/img/7 крести.svg" alt="card">',
    '<img data-value="6 крести" class="game__card" src="/src/img/6 крести.svg" alt="card">',
  ];

  const arrCards = [];

  for (let i = 0; i < difficultyFactor * 6; i++) {
    arrCards.push(arrOpenCards[Math.floor(Math.random() * arrOpenCards.length)]);
  }

	const timer = (deadline) => {
		let time = deadline;
		const interval = setInterval(() => {
			time -= 1;

			const gameScreenHtml = `
			<div class="container-game">
				<div class="header-game">
					<div class="header-game-timer">
						<div class="timer__text">
							<div class="timer__text-min">min</div>
							<div class="timer__text-sec">sec</div>
						</div>
						<div class="timer__counter">
							<div class="timer__minutes">00</div>
							<div class="timer__seconds">0${time}</div>
						</div>
					
					</div>
					<div class="header-game-button">
						<button class="button-restart">Начать заново</button>
					</div>
				</div>
				
				<div class="body-game">
					${arrCards.map((card) => card).join('')}
				</div>
			</div>
			`;
			game.innerHTML = gameScreenHtml;
		
			// Обработчик кнопки "Начать заново"
			const btnRestart = document.querySelector(".button-restart");
			btnRestart.addEventListener("click", () => {
				renderGameScreen(game, difficultyFactor);
			})
		}, 1000);
		setTimeout(() => {
			clearInterval(interval);

	//Переворачиваем карты рубашкой вверх
	const cards = document.querySelectorAll('.game__card');
	cards.forEach((card) => {
			card.setAttribute('src', "./img/рубашка.svg");
	});

	//Запуск секундомера с начала игры
	const sec = document.querySelector('.timer__seconds');
	const min = document.querySelector('.timer__minutes');

	let second = '';
	let minute = '';
	setInterval(() => {
			second = Number(sec.innerHTML) + 1;
			if (second < 60) {
					sec.innerHTML = Number(second) < 10 ? '0' + second : second;
			} else {
					minute = Number(min.innerHTML) + 1;
					min.innerHTML = Number(minute) < 10 ? '0' + minute : minute;
					sec.innerHTML = '00';
			}
	}, 1000);

	let firstCard = {
		value: '',
		status: null,
	};
	let secondCard = {
		value: '',
		status: null,
	};

const checkPairCards = (firstCard, secondCard) => {
	if (firstCard.value !== secondCard.value) {
			alert('Вы проиграли');
			renderGameScreen(game, difficultyFactor);
	} else {
			firstCard.status.setAttribute('data-status', 'open');
			secondCard.status.setAttribute('data-status', 'open');
			alert('Вы победили');
			renderGameScreen(game, difficultyFactor);
	}
};

	cards.forEach((card) => {
			card.addEventListener('click', () => {
					// проверка, чтобы ивент не отрабатывал на уже открытые карты
					if (card.dataset.status !== 'open') {
							card.setAttribute('src', `./img/${card.dataset.value}.svg`);
							// если первая карта открыта переворачиваем вторую и проверяем пара ли это
							if (!firstCard.value) {
									firstCard.value = card.dataset.value;
									firstCard.status = card;
							} else {
									secondCard.value = card.dataset.value;
									secondCard.status = card;
									checkPairCards(firstCard, secondCard);
							}
					}
				console.log(card.dataset.value);
			});
	});

		}, deadline * 1000)
	};
	timer(6);
};