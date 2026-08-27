// Storing references to the input fields in variables
const titleInput = document.getElementById("title");
const textAreaInput = document.getElementById("textarea");
const saveBtn = document.querySelector(".save");

//"let" to allow reaassignment for array
let articles = [];
//including previous entries in the array
const entries = localStorage.getItem("entries");
// conditional to check if there are previous entries
if (entries) {
  articles = JSON.parse(entries);
}
//function to create and push the object into the array using click event
function pushObject() {
  const formData = {
    title: titleInput.value.trim(),
    textarea: textAreaInput.value.trim(),
  };
  articles.push(formData); // push to array
  localStorage.setItem(`entries`, JSON.stringify(articles)); // saving it to local storagge usingg JSON
}
// checking if the page contains the save button
if (saveBtn) {
  // event added to the button
  saveBtn.addEventListener("click", pushObject);
}

const homeContainer = document.querySelector(".entriesM");
function recentEntries() {
  const recentArticles = articles.slice(-5).reverse();
  let div;
  // for loop to loo through the array
  for (let i = 0; i < recentArticles.length; i++) {
    if (i % 2 === 0) {
      div = document.createElement("div");
      if ((i / 2) % 2 === 0) {
        div.classList.add("entries-first-container");
      } else {
        div.classList.add("entries-second-container");
      }
      homeContainer.appendChild(div);
    }
    //creating and then appending the elements
    const title = recentArticles[i].title;
    const paragraph = recentArticles[i].textarea;
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.textContent = title;
    const p = document.createElement("p");
    p.textContent = paragraph;
    article.appendChild(h2);
    article.appendChild(p);
    div.appendChild(article);
  }
}
// checking if the page has the container for the articles
if (homeContainer) {
  recentEntries();
}
// displaying the entries to the vault
const vaultContainer = document.querySelector(".entries-container");
function allArticles() {
  const allArticles = articles.reverse();
  for (let i = 0; i < allArticles.length; i++) {
    const title = allArticles[i].title;
    const paragraph = allArticles[i].textarea;
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.textContent = title;
    const p = document.createElement("p");
    p.textContent = paragraph;
    article.appendChild(h2);
    article.appendChild(p);
    vaultContainer.appendChild(article);
  }
}
if (vaultContainer) {
  allArticles();
}
