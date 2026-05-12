import cards from "../data/data.js";

const query = new URLSearchParams(window.location.search);

const cardId = Number(query.get("id"));
const categoryId = Number(query.get("cat"));

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

  if (card.secondImage) {
    setTimeout(() => {
      cardSecondImage.src = card.secondImage;
      cardSecondImage.alt = card.title;
    }, 300);
  } else {
    cardSecondImage.style.display = "none";
  }
}

backBtn?.addEventListener("click", () => {
  const backCategory = categoryId || card?.category || 1;

  window.location.href = `../category/category.html?cat=${backCategory}`;
});
