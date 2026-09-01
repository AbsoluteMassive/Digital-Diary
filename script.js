// Storing references to the input fields in variables
const titleInput = document.getElementById("title");
const textAreaInput = document.getElementById("textarea");
const saveBtn = document.querySelector(".save");

//"let" to allow reassignment for the array
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
  if (formData.title === "" || formData.textarea === "") {
    // condition to prevent white text to be saved
    return;
  } else {
    articles.push(formData); // push to array
    localStorage.setItem(`entries`, JSON.stringify(articles)); // saving it to local storagge using JSON
  }
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

// toggle button for small screen to display an additional div under the nav
const toggleBtn = document.querySelector(".nav-toggle");
const allContainer = document.querySelector(".all-container");
const icon = document.querySelector(".fa-bars");
function toggleFunction() {
  allContainer.classList.toggle("toggle");
  //icon toggle
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-x");
  } else {
    icon.classList.replace("fa-x", "fa-bars");
  }
}

toggleBtn.addEventListener("click", toggleFunction);

// clear entries function attached to buttons
function clearEntries() {
  const confirmPopUp = confirm("Are you sure?");
  if (confirmPopUp) {
    localStorage.removeItem("entries");
    location.reload();
  }
}
const clearBtn = document.getElementById("clear-btn");
const clearBtn2 = document.getElementById("clear-btn2");
if (clearBtn) {
  clearBtn.addEventListener("click", clearEntries);
}
if (clearBtn2) {
  clearBtn2.addEventListener("click", clearEntries);
}
/*clearBtn.addEventListener("click", () => {
  const confirmPopUp = confirm("Are you sure?");
  if (confirmPopUp) {
    localStorage.removeItem("entries");
    location.reload();
  }
}); */
// form clear
const discard = document.getElementById("discard");
const form = document.getElementById("form");
if (discard) {
  discard.addEventListener("click", () => {
    form.reset();
  });
}
//toggle for dark mode
const btn = document.getElementById("dark-mode");
const btn2 = document.getElementById("dark-mode2");
// if dark mode was saved, retrieves "true" and adds dark mode and changes the button textcontent
if (localStorage.getItem("themeChoice") === "true") {
  document.body.classList.add("dark-mode");
  if (btn) {
    btn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
  }
  if (btn2) {
    btn2.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
  }
}

function changeTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("themeChoice", isDark);

  if (isDark) {
    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    }
    if (btn2) {
      btn2.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    }
  } else {
    if (btn) {
      btn.innerHTML = '<i class="fa-regular fa-moon"></i> Dark Mode';
    }
    if (btn2) {
      btn2.innerHTML = '<i class="fa-regular fa-moon"></i> Dark Mode';
    }
  }
}

if (btn) {
  btn.addEventListener("click", changeTheme);
}
if (btn2) {
  btn2.addEventListener("click", changeTheme);
}
