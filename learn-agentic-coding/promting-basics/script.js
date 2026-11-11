const actions = document.querySelector(".actions");
const packageList = document.getElementById("package-list");

let packageCount = 0;

function logPackage(status) {
  packageCount++;

  const li = document.createElement("li");
  li.className = status;
  const span = document.createElement("span");
  span.textContent = `Package #${packageCount} ${status}`;

  li.appendChild(span);
  packageList.appendChild(li);
}

// One handler for every button: the button's data-status decides the text.
// To add a new type, add a button with data-status="..." in the HTML.
actions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-status]");
  if (button) logPackage(button.dataset.status);
});
