import cards from "../data/data.js";

const query = new URLSearchParams(window.location.search);
const cardId = Number(query.get("id"));

const card = cards.find((item) => Number(item.id) === cardId);

const backBtn = document.getElementById("backBtn");
const cardImage = document.getElementById("cardImage");
const cardDescription = document.getElementById("cardDescription");
const cardSecondImage = document.getElementById("cardSecondImage");

if (!card) {
  document.body.innerHTML = `
    <main class="details-page">
      <h1 class="details-title">Card not found</h1>
    </main>
  `;
} else {
  cardImage.src = card.image;
  cardImage.alt = card.title;

  cardDescription.textContent = card.description || "";

  cardSecondImage.src = card.secondImage;
  cardSecondImage.alt = card.title;
}

backBtn.addEventListener("click", () => {
  document.body.classList.add("hide-before-leave");

  setTimeout(() => {
    window.location.href = `../category/category.html?cat=${card.category}`;
  }, 80);
});
document.body.classList.add("page-ready");
