const articleContainer = document.querySelector("#article-container");
const loadMoreBtn = document.querySelector("#load-btn");
const feedbackList = document.querySelector("#feedback-list");
const feedbackForm = document.querySelector("#feedback-form");

function prependZero(num) {
  return String(num).padStart(2, "0");
}

function addArticlesToPage({ id, title, description, imageSrc }) {
  const articleItem = document.createElement("article");
  articleItem.classList.add("article-item");

  const articleImage = document.createElement("img");
  articleImage.classList.add("article-img");
  articleImage.setAttribute("src", `./assets/images/${imageSrc}`);
  articleImage.setAttribute("alt", "article");

  const articleContent = document.createElement("div");
  articleContent.classList.add("article-content");

  const articleNumber = document.createElement("div");
  articleNumber.classList.add("article-number");
  articleNumber.innerText = prependZero(id);

  const articleTitle = document.createElement("h3");
  articleTitle.classList.add("article-title");
  articleTitle.innerText = title;
  
  const articleDescription = document.createElement("p");
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
