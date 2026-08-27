// storing user inputs in variables
const titleInput = document.getElementById("title");
const textAreaInput = document.getElementById("textarea");
const saveBtn = document.querySelector(".save");

// event added to the button
saveBtn.addEventListener("click", consoleOutput);
//array
const articles = [];
// object to store the info

//function to push the object into the array usingg a button
function pushObject() {
  const formData = {
    title: titleInput.value.trim(),
    textarea: textAreaInput.value.trim(),
  };
  articles.push(formData);
}
// event added to the button
saveBtn.addEventListener("click", pushObject);
