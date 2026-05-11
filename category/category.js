import cards from "../data/data.js";

const query = new URLSearchParams(window.location.search);
const categoryId = Number(query.get("cat")) || 1;

const categoryList = document.getElementById("categoryList");
const emptyState = document.getElementById("emptyState");

if (!categoryList || !emptyState) {
  console.error("error");
}

const categoryCards = cards
  .filter((card) => Number(card.category) === categoryId)
  .sort((a, b) => a.id - b.id);

function buildCard(card) {
  const container = document.createElement("article");
  container.className = "category-card";

  container.addEventListener("click", () => {
    window.location.href = `../details/details.html?id=${card.id}`;
  });

  const numberEl = document.createElement("div");
  numberEl.className = "card-number";
  numberEl.textContent = card.id;

  const thumb = document.createElement("div");
  thumb.className = "card-thumb";

  const img = document.createElement("img");
  img.src = card.image;
  img.alt = card.title || `Card ${card.id}`;

  img.onerror = () => {
    console.error("img not found:", card.image);
    thumb.textContent = "img not found";
  };

  thumb.appendChild(img);

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h2");
  title.className = "card-title";
  title.textContent = card.title;

  content.append(numberEl, title);
  container.append(thumb, content);

  return container;
}

categoryList.innerHTML = "";

if (!categoryCards.length) {
  emptyState.style.display = "block";
} else {
  emptyState.style.display = "none";
  categoryCards.forEach((card) => {
    categoryList.appendChild(buildCard(card));
  });
}

window.goBack = function () {
  window.history.back();
};
