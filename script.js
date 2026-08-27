// storing user inputs in variables
const titleInput = document.getElementById("title");
const textAreaInput = document.getElementById("textarea");
const saveBtn = document.querySelector(".save");

//function to output to console
function consoleOutput() {
  const title = titleInput.value.trim();
  const textArea = textAreaInput.value.trim();
  console.log(`The title is: ${title} and the content is: ${textArea}`);
}
// event added to the button
saveBtn.addEventListener("click", consoleOutput);
