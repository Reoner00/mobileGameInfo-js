const query = new URLSearchParams(window.location.search);
const categoryId = Number(query.get("cat")) || 1;
const categoryList = document.getElementById("categoryList");
const emptyState = document.getElementById("emptyState");

const categoryCards = (typeof cards !== "undefined" ? cards : [])
  .filter((card) => card.category === categoryId)
  .sort((a, b) => a.id - b.id);

function buildCard(card) {
  const container = document.createElement("article");
  container.className = "category-card";

  const numberEl = document.createElement("div");
  numberEl.className = "card-number";
  numberEl.textContent = card.id;

  const thumb = document.createElement("div");
  thumb.className = "card-thumb";
  if (card.image) {
    const img = document.createElement("img");
    img.src = card.image;
    img.alt = card.title;
    thumb.appendChild(img);
  } else {
    thumb.textContent = "📍";
  }

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h2");
  title.className = "card-title";
  title.textContent = card.title;

  content.append(numberEl, title);
  container.append(thumb, content);

  return container;
}

if (categoryCards.length === 0) {
  emptyState.style.display = "block";
} else {
  emptyState.style.display = "none";
  categoryCards.forEach((card) => {
    categoryList.appendChild(buildCard(card));
  });
}

function goBack() {
  window.history.back();
}
