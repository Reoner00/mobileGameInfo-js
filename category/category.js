import cards from "../data/data.js";

const query = new URLSearchParams(window.location.search);
const categoryId = Number(query.get("cat")) || 1;

const categoryList = document.getElementById("categoryList");
const emptyState = document.getElementById("emptyState");
const backBtn = document.getElementById("backBtn");

const categoryCards = cards
  .filter((card) => Number(card.category) === categoryId)
  .sort((a, b) => Number(a.id) - Number(b.id));

function buildCard(card) {
  const container = document.createElement("article");
  container.className = "category-card";

  container.addEventListener("click", () => {
    window.location.href = `../details/details.html?id=${card.id}&cat=${categoryId}`;
  });

  const numberEl = document.createElement("div");
  numberEl.className = "card-number";
  numberEl.textContent = card.id;

  const thumb = document.createElement("div");
  thumb.className = "card-thumb";

  const img = document.createElement("img");
  img.dataset.src = card.image;
  img.alt = card.title;
  img.loading = "lazy";
  img.decoding = "async";
  img.className = "lazy-card-img";

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
function loadImagesSequentially() {
  const images = [...document.querySelectorAll(".lazy-card-img")];

  let index = 0;

  function loadNextImage() {
    if (index >= images.length) return;

    const img = images[index];
    const src = img.dataset.src;

    if (!src) {
      index++;
      loadNextImage();
      return;
    }

    img.onload = () => {
      img.classList.add("loaded");

      index++;

      setTimeout(() => {
        loadNextImage();
      }, 120);
    };

    img.onerror = () => {
      console.error("Image not found:", src);

      index++;

      setTimeout(() => {
        loadNextImage();
      }, 120);
    };

    img.src = src;
  }

  loadNextImage();
}

loadImagesSequentially();
document.querySelectorAll(".back-up, .back-down").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
});
document.body.classList.remove("category-loading");
