// referenct to input
const favchap = document.querySelector("#favchap");
// referenct to button
const buildButton = document.querySelector("button");
// referenct to list
const bomList = document.querySelector("ul");


// create an event listener for Add Chapter button
buildButton.addEventListener("click", function() {
  // create a list element
  const li = document.createElement("li");
  // create a delete button
  const deleteButton = document.createElement("button");
  //populate the li element with the input
  li.textContent = favchap.value;
  console.log(li);
  // populate the button with an "X"
  deleteButton.textContent = "X";
  console.log(deleteButton);
  // apppend list with the buttton
  li.appendChild(deleteButton);
  bomList.appendChild(li);

  deleteButton.onclick = function(e) {
    bomList.removeChild(li);
  }
});


