(() => {
  "use strict";
  const t = (t, e, n, a) => {
      const l = `\n\t<div class="container">\n\t\t<div class="level">\n\t\t\t<div class="level-smile">\n\t\t\t\t<img src="static/img/smile-${
        e ? "winner" : "loser"
      }.png" alt=${
        e ? "winner" : "loser"
      }>\n\t\t\t</div>\n\t\t\t<div class="level-message">\n\t\t\t\t<h1 class="level-message-text">Вы ${
        e ? "выиграли" : "проиграли"
      }!</h1>\n\t\t\t</div>\n\t\t\t<div class="elapsed-time">\n\t\t\t\t<p class="elapsed-time-text">Затраченное время</p>\n\t\t\t\t<p class="elapsed-time-counter">\n\t\t\t\t${
        n < 10 ? "0" + n : n
      }.${
        a < 10 ? "0" + a : a
      }\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t\t<button class="button-restart" type="submit">Играть снова</button>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>`;
      (t.innerHTML = l),
        document
          .querySelector(".button-restart")
          .addEventListener("click", () => {
            location.reload();
          });
    },
    e = (n, a) => {
      const l = [];
      function s(t) {
        return 1 === t
          ? "пики"
          : 2 === t
          ? "черви"
          : 3 === t
          ? "бубны"
          : 4 === t
          ? "крести"
          : void 0;
      }
      let i = "",
        o = "";
      for (let t = 0; t < a / 2; t++) {
        do {
          (i =
            6 === (r = Math.floor(9 * Math.random()) + 6)
              ? "6"
              : 7 === r
              ? "7"
              : 8 === r
              ? "8"
              : 9 === r
              ? "9"
              : 10 === r
              ? "10"
              : 11 === r
              ? "валет"
              : 12 === r
              ? "дама"
              : 13 === r
              ? "король"
              : 14 === r
              ? "туз"
              : void 0),
            (o = s(Math.floor(4 * Math.random()) + 1));
        } while (
          l.includes(
            `<img data-value="${i} ${o}" class="game__card" src="static/img/${i} ${o}.png" alt="${i} ${o}">`
          )
        );
        let t = `<img data-value="${i} ${o}" class="game__card" src="static/img/${i} ${o}.png" alt="${i} ${o}">`;
        l.push(t);
        let e = Math.floor(Math.random() * a) + 1,
          n = !1;
        for (; !n; ) l[e] ? (e === a ? (e = 1) : e++) : ((l[e] = t), (n = !0));
      }
      var r;
      ((s) => {
        let i = 6;
        const o = setInterval(() => {
          i -= 1;
          const t = `\n\t\t\t<div class="container-game">\n\t\t\t\t<div class="header-game">\n\t\t\t\t\t<div class="header-game-timer">\n\t\t\t\t\t\t<div class="timer__text">\n\t\t\t\t\t\t\t<div class="timer__text-min">min</div>\n\t\t\t\t\t\t\t<div class="timer__text-sec">sec</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="timer__counter">\n\t\t\t\t\t\t\t<div class="timer__minutes">00</div>\n\t\t\t\t\t\t\t<div class="timer__seconds">${
            i < 10 ? "0" + i : i
          }</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="header-game-button">\n\t\t\t\t\t\t<button class="button-restart">Начать заново</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class="body-game">\n\t\t\t\t\t${l
            .map((t) => t)
            .join("")}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`;
          (n.innerHTML = t),
            document
              .querySelector(".button-restart")
              .addEventListener("click", () => {
                e(n, a);
              });
        }, 1e3);
        setTimeout(() => {
          clearInterval(o);
          const e = document.querySelectorAll(".game__card");
          e.forEach((t) => {
            t.setAttribute("src", "static/img/shirt-card.png");
          });
          const a = document.querySelector(".timer__seconds"),
            l = document.querySelector(".timer__minutes");
          let s = "",
            i = "";
          setInterval(() => {
            (s = Number(a.innerHTML) + 1),
              s < 60
                ? (a.innerHTML = Number(s) < 10 ? "0" + s : s)
                : ((i = Number(l.innerHTML) + 1),
                  (l.innerHTML = Number(i) < 10 ? "0" + i : i),
                  (a.innerHTML = "00"));
          }, 1e3);
          let r,
            c = { value: "", status: null },
            d = { value: "", status: null };
          e.forEach((e) => {
            e.addEventListener("click", () => {
              "open" !== e.dataset.status &&
                (e.setAttribute("src", `static/img/${e.dataset.value}.png`),
                c.value
                  ? ((d.value = e.dataset.value),
                    (d.status = e),
                    ((e, a) => {
                      e.value !== a.value
                        ? ((r = !1), t(n, r, i, s))
                        : (e.status.setAttribute("data-status", "open"),
                          a.status.setAttribute("data-status", "open"),
                          (() => {
                            const t = document.querySelectorAll(".game__card");
                            for (let e of t)
                              if ("open" !== e.dataset.status) return !1;
                            return !0;
                          })()
                            ? ((r = !0), t(n, r, i, s))
                            : ((e.value = ""),
                              (e.status = null),
                              (a.value = ""),
                              (a.status = null)));
                    })(c, d))
                  : ((c.value = e.dataset.value), (c.status = e))),
                console.log(e.dataset.value);
            });
          });
        }, 6e3);
      })();
    },
    n = document.getElementById("game");
  ((t) => {
    t.innerHTML =
      '\n<div class="container">\n<div class="level">\n\t<div class="level-title">\n\t\t<h1 class="level-title-text">Выбери сложность</h1>\n\t</div>\n\t<form class="level-option-form">\n\t\t<label class="level-option-label">\n\t\t\t<input class="level-option-input" type="radio" name="radio" value="easy">\n\t\t\t<i class="level-option-text">1</i>\n\t\t</label>\n\t\t<label class="level-option-label">\n\t\t\t<input class="level-option-input" type="radio" name="radio" value="medium">\n\t\t\t<i class="level-option-text">2</i>\n\t\t</label>\n\t\t<label class="level-option-label">\n\t\t\t<input class="level-option-input" type="radio" name="radio" value="hard">\n\t\t\t<i class="level-option-text">3</i>\n\t\t</label>\n\t\t<div class="button-container">\n\t\t\t<button disabled="true" class="button-start" type="submit">Старт</button>\n\t\t</div>\n\t</form>\n</div>\n</div>\n';
  })(n);
  const a = document.querySelector(".button-start"),
    l = document.querySelector(".level-option-form");
  l.addEventListener("input", () => {
    "" === document.querySelector('input[name="radio"]:checked').value
      ? (a.disabled = !0)
      : (a.disabled = !1);
  }),
    l.addEventListener("submit", (t) => {
      t.preventDefault(),
        "easy" === document.querySelector('input[name="radio"]:checked').value
          ? (e(n, 6), console.log("Уровень сложности: easy"))
          : "medium" ===
            document.querySelector('input[name="radio"]:checked').value
          ? (e(n, 12), console.log("Уровень сложности: medium"))
          : "hard" ===
              document.querySelector('input[name="radio"]:checked').value &&
            (e(n, 18), console.log("Уровень сложности: hard"));
    });
})();
