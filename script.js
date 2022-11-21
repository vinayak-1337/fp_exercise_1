const articleContainer = document.querySelector("#article-container");
const loadMoreBtn = document.querySelector("#load-btn");

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

function loadArticles() {
  fetch("./article.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(addArticlesToPage);
    })
    .catch((error) => console.log(error));
}
loadArticles();

loadMoreBtn.addEventListener("click", loadArticles);
const feedbackList = document.querySelector("#feedback-list");
const feedbackForm = document.getElementById("feedback-form");
console.log("hello");

function addItemToFeedbackList(event) {
  event.preventDefault();
  const fbFormName = document.querySelector("#fb-form-name");
  const fbFormMessage = document.querySelector("#fb-form-message");

  console.log(fbFormMessage.value);

  const fbItem = document.createElement("div");
  fbItem.classList.add("fb-item");

  const fbMessage = document.createElement("p");
  fbMessage.classList.add("fb-message");

  const fbName = document.createElement("p");
  fbName.classList.add("fb-name");

  fbMessage.innerText = fbFormMessage.value;
  fbName.innerText = `--${fbFormName.value}`;

  fbItem.append(fbMessage, fbName);
  feedbackList.append(fbItem);

  fbFormName.value = "";
  fbFormMessage.value = "";
}

feedbackForm.addEventListener("submit", addItemToFeedbackList);
