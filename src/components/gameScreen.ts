import { renderWindowWinnerOrLoser } from "./winnerOrLoserWindow";

export function suitCard(number: number) {
  if (number === 1) {
    return "пики";
  } else if (number === 2) {
    return "черви";
  } else if (number === 3) {
    return "бубны";
  } else if (number === 4) {
    return "крести";
  } else {
    return "ошибка";
  }
}

export function rankCard(number: number) {
  if (number === 6) {
    return "6";
  } else if (number === 7) {
    return "7";
  } else if (number === 8) {
    return "8";
  } else if (number === 9) {
    return "9";
  } else if (number === 10) {
    return "10";
  } else if (number === 11) {
    return "валет";
  } else if (number === 12) {
    return "дама";
  } else if (number === 13) {
    return "король";
  } else if (number === 14) {
    return "туз";
  } else {
    return "ошибка";
  }
}

export const renderGameScreen = (
  game: HTMLElement,
  difficultyFactor: number
) => {
  const arrCards: Array<string> = [];

  interface Card {
    value: string | undefined;
    condition: HTMLElement | null;
  }

  let rank: string | undefined = "";
  let suit: string | undefined = "";
  for (let i = 0; i < difficultyFactor / 2; i++) {
    do {
      rank = rankCard(Math.floor(Math.random() * 9) + 6);
      suit = suitCard(Math.floor(Math.random() * 4) + 1);
    } while (
      arrCards.includes(
        `<img data-value="${rank} ${suit}" class="game__card" src="static/img/${rank} ${suit}.png" alt="${rank} ${suit}">`
      )
    );

    const card = `<img data-value="${rank} ${suit}" class="game__card" src="static/img/${rank} ${suit}.png" alt="${rank} ${suit}">`;
    arrCards.push(card);

    let index = Math.floor(Math.random() * difficultyFactor) + 1;
    let isFindSlot = false;
    while (!isFindSlot) {
      if (!arrCards[index]) {
        arrCards[index] = card;
        isFindSlot = true;
      } else if (index === difficultyFactor) {
        index = 1;
      } else {
        index++;
      }
    }
  }

  const timer = (deadline: number) => {
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
							<div class="timer__seconds">${time < 10 ? "0" + time : time}</div>
						</div>
					
					</div>
					<div class="header-game-button">
						<button class="button-restart">Начать заново</button>
					</div>
				</div>
				
				<div class="body-game">
					${arrCards.map((card) => card).join("")}
				</div>
			</div>
			`;
      game.innerHTML = gameScreenHtml;

      // Обработчик кнопки "Начать заново"
      const btnRestart = document.querySelector(".button-restart");
      btnRestart?.addEventListener("click", () => {
        renderGameScreen(game, difficultyFactor);
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);

      //Переворачиваем карты рубашкой вверх
      const cards = document.querySelectorAll(".game__card");
      cards.forEach((card) => {
        card.setAttribute("src", "static/img/shirt-card.png");
      });

      //Запуск секундомера с начала игры
      const sec = document.querySelector(".timer__seconds") as HTMLElement;
      const min = document.querySelector(".timer__minutes") as HTMLElement;

      let second = "";
      let minute = "";
      setInterval(() => {
        second = (Number(sec.innerHTML) + 1).toString();
        if (Number(second) < 60) {
          sec.innerHTML = Number(second) < 10 ? "0" + second : second;
        } else {
          minute = (Number(min.innerHTML) + 1).toString();
          min.innerHTML = Number(minute) < 10 ? "0" + minute : minute;
          sec.innerHTML = "00";
        }
      }, 1000);

      const firstCard: Card = {
        value: "",
        condition: null,
      };
      const secondCard: Card = {
        value: "",
        condition: null,
      };
      let statusUser: boolean;

      const checkWinner = () => {
        const cards: HTMLElement[] = Array.from(
          document.querySelectorAll(".game__card")
        );
        for (const card of cards) {
          if (card.dataset.status !== "open") {
            return false;
          }
        }
        return true;
      };

      const checkPairCards = (firstCard: Card, secondCard: Card) => {
        if (firstCard.value !== secondCard.value) {
          statusUser = false;
          renderWindowWinnerOrLoser(game, statusUser, minute, second);
        } else {
          firstCard.condition?.setAttribute("data-status", "open");
          secondCard.condition?.setAttribute("data-status", "open");
          if (checkWinner()) {
            statusUser = true;
            renderWindowWinnerOrLoser(game, statusUser, minute, second);
          } else {
            firstCard.value = "";
            firstCard.condition = null;
            secondCard.value = "";
            secondCard.condition = null;
          }
        }
      };

      cards.forEach((card) => {
        card.addEventListener("click", () => {
          const htmlCard = card as HTMLElement;
          console.log(firstCard);
          console.log(secondCard);
          if (htmlCard.dataset.status !== "open") {
            htmlCard.setAttribute(
              "src",
              `static/img/${htmlCard.dataset.value}.png`
            );
            if (!firstCard.value) {
              // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
              firstCard.value = htmlCard.dataset.value!;
              firstCard.condition = htmlCard;
            } else {
              // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
              secondCard.value = htmlCard.dataset.value!;
              secondCard.condition = htmlCard;
              checkPairCards(firstCard, secondCard);
            }
          }
          console.log(htmlCard.dataset.value);
        });
      });
    }, deadline * 1000);
  };
  timer(6);
};
