const articleList = [];

fetch("./article.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(addArticlesToPage);
  })
  .catch((error) => console.log(error));

const articleContainer = document.querySelector(".article-container");

function prependZero(num) {
  return String(num).padStart(2, "0");
}

function addArticlesToPage({ id, title, description, imageSrc }) {
  const articleItem = document.createElement("article");
  const articleImage = document.createElement("img");
  const articleContent = document.createElement("div");
  const articleNumber = document.createElement("div");
  const articleTitle = document.createElement("h3");
  const articleDescription = document.createElement("p");
  articleItem.classList.add("article-item");
  articleImage.classList.add("article-img");
  articleImage.setAttribute("src", `./assets/images/${imageSrc}`);
  articleImage.setAttribute("alt", "article");
  articleContent.classList.add("article-content");
  articleNumber.classList.add("article-number");
  articleNumber.innerText = prependZero(id);
  articleTitle.classList.add("article-title");
  articleTitle.innerText = title;
  articleDescription.classList.add("article-description");
  articleDescription.innerText = description;
  articleContent.append(articleNumber, articleTitle, articleDescription);
  articleItem.append(articleImage, articleContent);
  articleContainer.append(articleItem);
}
