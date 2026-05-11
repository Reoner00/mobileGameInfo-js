// details.js

import cards from "../data/data.js";
/*
  ПРИМЕР:

  details.html?id=5
*/

const params = new URLSearchParams(window.location.search);

const cardId = Number(params.get("id"));

const card = cards.find((item) => item.id === cardId);

const cardImage = document.getElementById("cardImage");
const cardDescription = document.getElementById("cardDescription");
const cardSecondImage = document.getElementById("cardSecondImage");

/* ЕСЛИ КАРТОЧКА НЕ НАЙДЕНА */

if (!card) {
  document.body.innerHTML = "<h1>Card not found</h1>";
}

/* ВСТАВЛЯЕМ ДАННЫЕ */

cardImage.src = card.image;

cardDescription.textContent = card.description;

cardSecondImage.src = card.secondImage;

/* КНОПКА НАЗАД */

document.getElementById("backBtn").addEventListener("click", () => {
  window.history.back();
});
